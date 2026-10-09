use std::sync::atomic::{AtomicU32, Ordering};

/// Holds a single sample (or multi-channel sample) for each of the 4 stems.
#[derive(Debug, Clone, Copy, PartialEq, Default)]
pub struct Stems {
    pub drums: f32,
    pub bass: f32,
    pub instruments: f32,
    pub vocals: f32,
}

/// Provides lock-free atomic updates for the 4-stem gain control structure.
pub struct AtomicStemGains {
    drums: AtomicU32,
    bass: AtomicU32,
    instruments: AtomicU32,
    vocals: AtomicU32,
}

impl AtomicStemGains {
    pub fn new(drums: f32, bass: f32, instruments: f32, vocals: f32) -> Self {
        Self {
            drums: AtomicU32::new(drums.to_bits()),
            bass: AtomicU32::new(bass.to_bits()),
            instruments: AtomicU32::new(instruments.to_bits()),
            vocals: AtomicU32::new(vocals.to_bits()),
        }
    }

    pub fn get(&self) -> Stems {
        Stems {
            drums: f32::from_bits(self.drums.load(Ordering::Relaxed)),
            bass: f32::from_bits(self.bass.load(Ordering::Relaxed)),
            instruments: f32::from_bits(self.instruments.load(Ordering::Relaxed)),
            vocals: f32::from_bits(self.vocals.load(Ordering::Relaxed)),
        }
    }

    pub fn set_drums(&self, gain: f32) {
        self.drums.store(gain.to_bits(), Ordering::Relaxed);
    }

    pub fn set_bass(&self, gain: f32) {
        self.bass.store(gain.to_bits(), Ordering::Relaxed);
    }

    pub fn set_instruments(&self, gain: f32) {
        self.instruments.store(gain.to_bits(), Ordering::Relaxed);
    }

    pub fn set_vocals(&self, gain: f32) {
        self.vocals.store(gain.to_bits(), Ordering::Relaxed);
    }
}

impl Default for AtomicStemGains {
    fn default() -> Self {
        Self::new(1.0, 1.0, 1.0, 1.0)
    }
}
