mod audio;
mod decoder;
mod stems;

use crate::stems::AtomicStemGains;
use crate::stems::Stems;
use anyhow::Result;
use rtrb::RingBuffer;
use std::sync::Arc;
use std::time::Duration;

fn main() -> Result<()> {
    // Create the lock-free ring buffer for audio samples
    // 44100 samples per second, keeping 1 second buffer
    let (producer, consumer) = RingBuffer::<Stems>::new(44100);

    // Create the atomic stem gains structure
    let gains = Arc::new(AtomicStemGains::default());

    // Start the mock decoding thread
    decoder::start_decoder(producer)?;

    // Start the audio engine
    let _audio_engine = audio::build_audio_engine(consumer, Arc::clone(&gains))?;

    println!("Audio pipeline running. Modifying stem volumes...");

    // Simulate changing volumes from UI thread
    std::thread::sleep(Duration::from_secs(2));

    println!("Muting vocals...");
    gains.set_vocals(0.0);
    std::thread::sleep(Duration::from_secs(2));

    println!("Boosting bass...");
    gains.set_bass(2.0);
    std::thread::sleep(Duration::from_secs(2));

    println!("Restoring all...");
    gains.set_vocals(1.0);
    gains.set_bass(1.0);
    std::thread::sleep(Duration::from_secs(2));

    println!("Done.");

    Ok(())
}
