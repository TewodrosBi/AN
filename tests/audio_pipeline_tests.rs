#[path = "../src/stems.rs"]
mod stems;

use crate::stems::{AtomicStemGains, Stems};
use rtrb::RingBuffer;
use std::sync::Arc;
use std::thread;

#[test]
fn test_atomic_stem_gains() {
    let gains = AtomicStemGains::default();

    // Initial check
    let initial = gains.get();
    assert_eq!(initial.drums, 1.0);
    assert_eq!(initial.bass, 1.0);
    assert_eq!(initial.instruments, 1.0);
    assert_eq!(initial.vocals, 1.0);

    // Update check
    gains.set_drums(0.5);
    gains.set_bass(2.0);
    gains.set_instruments(0.0);
    gains.set_vocals(1.5);

    let updated = gains.get();
    assert_eq!(updated.drums, 0.5);
    assert_eq!(updated.bass, 2.0);
    assert_eq!(updated.instruments, 0.0);
    assert_eq!(updated.vocals, 1.5);
}

#[test]
fn test_lock_free_buffer_communication() {
    let (mut producer, mut consumer) = RingBuffer::<Stems>::new(10);

    let stems = Stems {
        drums: 0.1,
        bass: 0.2,
        instruments: 0.3,
        vocals: 0.4,
    };

    // Push 3 items
    for _ in 0..3 {
        assert!(producer.push(stems).is_ok());
    }

    // Read 3 items
    for _ in 0..3 {
        if let Ok(popped) = consumer.pop() {
            assert_eq!(popped.drums, 0.1);
            assert_eq!(popped.bass, 0.2);
            assert_eq!(popped.instruments, 0.3);
            assert_eq!(popped.vocals, 0.4);
        } else {
            panic!("Expected item in ring buffer");
        }
    }

    // Buffer should be empty now
    assert!(consumer.pop().is_err());
}

#[test]
fn test_concurrent_gain_updates() {
    let gains = Arc::new(AtomicStemGains::default());
    let mut handles = vec![];

    // Spawn multiple threads updating gains
    for i in 0..4 {
        let gains_clone = Arc::clone(&gains);
        handles.push(thread::spawn(move || {
            let val = i as f32 * 0.5;
            gains_clone.set_drums(val);
            gains_clone.set_bass(val);
            gains_clone.set_instruments(val);
            gains_clone.set_vocals(val);
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }

    // Since they run concurrently we don't know the final value,
    // but we can ensure they match each other as each thread sets all to the same value
    // Note: Actually due to concurrency they might be interleaved.
    // We just verify it doesn't crash and the struct handles concurrent writes.
    let final_gains = gains.get();
    assert!(final_gains.drums >= 0.0 && final_gains.drums <= 1.5);
}
