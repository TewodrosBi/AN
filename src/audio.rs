use crate::stems::{AtomicStemGains, Stems};
use anyhow::{Context, Result};
use cpal::traits::{DeviceTrait, HostTrait, StreamTrait};
use cpal::{Sample, Stream};
use rtrb::Consumer;
use std::sync::Arc;

pub struct AudioEngine {
    _stream: Stream,
}

pub fn build_audio_engine(
    consumer: Consumer<Stems>,
    gains: Arc<AtomicStemGains>,
) -> Result<AudioEngine> {
    let host = cpal::default_host();
    let device = host
        .default_output_device()
        .context("Failed to find default output device")?;

    let config = device
        .default_output_config()
        .context("Failed to get default output config")?;

    let sample_format = config.sample_format();
    let stream_config: cpal::StreamConfig = config.into();
    let channels = stream_config.channels as usize;

    // Build stream based on sample format
    let stream = match sample_format {
        cpal::SampleFormat::F32 => build_stream::<f32>(&device, &stream_config, consumer, gains, channels),
        cpal::SampleFormat::I16 => build_stream::<i16>(&device, &stream_config, consumer, gains, channels),
        cpal::SampleFormat::U16 => build_stream::<u16>(&device, &stream_config, consumer, gains, channels),
        _ => anyhow::bail!("Unsupported sample format"),
    }?;

    stream.play()?;

    Ok(AudioEngine { _stream: stream })
}

fn build_stream<T>(
    device: &cpal::Device,
    config: &cpal::StreamConfig,
    mut consumer: Consumer<Stems>,
    gains: Arc<AtomicStemGains>,
    channels: usize,
) -> Result<Stream>
where
    T: Sample + cpal::SizedSample + cpal::FromSample<f32>,
{
    let err_fn = |err| eprintln!("an error occurred on stream: {}", err);

    let stream = device.build_output_stream(
        config.clone(),
        move |data: &mut [T], _: &cpal::OutputCallbackInfo| {
            // Number of frames to fill
            let frames = data.len() / channels;

            // Read from consumer as much as we can up to frames
            let mut read_frames = 0;

            // For simplicity, assuming output is mono or stereo and Stems contains mono samples
            // For a stereo system we might want to duplicate or mix correctly.
            // Here we assume Stems provides 1 sample which we duplicate across channels.

            for frame in data.chunks_mut(channels) {
                if let Ok(stems) = consumer.pop() {
                    let current_gains = gains.get();

                    // Mix stems with gains
                    let mixed = stems.drums * current_gains.drums
                        + stems.bass * current_gains.bass
                        + stems.instruments * current_gains.instruments
                        + stems.vocals * current_gains.vocals;

                    let sample = T::from_sample(mixed);
                    for ch in frame.iter_mut() {
                        *ch = sample;
                    }
                    read_frames += 1;
                } else {
                    // Buffer underrun, fill with zero
                    let zero = T::from_sample(0.0);
                    for ch in frame.iter_mut() {
                        *ch = zero;
                    }
                }
            }
        },
        err_fn,
        None,
    )?;

    Ok(stream)
}
