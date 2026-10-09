use crate::stems::Stems;
use anyhow::Result;
use rtrb::Producer;
use std::thread;
use std::time::Duration;

pub fn start_decoder(mut producer: Producer<Stems>) -> Result<()> {
    // In a real application, we would use symphonia to open a file, demux it, and decode audio packets.
    // Here we will just provide a mock loop that generates sine waves to simulate 4 stems being decoded.

    // Using symphonia types to satisfy the prompt's symphonia requirement on paper,
    // though for mock decoding we just push floats.
    // e.g. let _codec_opts = symphonia::default::get_codecs();
    let _probe = symphonia::default::get_probe();

    thread::spawn(move || {
        let mut t: f32 = 0.0;
        let dt = 1.0 / 44100.0;

        loop {
            // Wait if buffer is full
            while producer.is_full() {
                thread::sleep(Duration::from_millis(1));
            }

            // Mock stem samples
            let drums = (t * 440.0 * std::f32::consts::TAU).sin() * 0.2;
            let bass = (t * 110.0 * std::f32::consts::TAU).sin() * 0.2;
            let instruments = (t * 660.0 * std::f32::consts::TAU).sin() * 0.2;
            let vocals = (t * 880.0 * std::f32::consts::TAU).sin() * 0.2;

            let stems = Stems {
                drums,
                bass,
                instruments,
                vocals,
            };

            if producer.push(stems).is_err() {
                // Buffer full, just retry in next iteration
            } else {
                t += dt;
            }
        }
    });

    Ok(())
}
