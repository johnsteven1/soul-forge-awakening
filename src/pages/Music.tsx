import React from 'react';
import MusicPlayer from '@/components/MusicPlayer';

const MusicPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h2 className="text-sm uppercase tracking-[0.5em] text-primary font-bold">Mystical Rituals</h2>
          <h1 className="text-4xl font-bold">Divine Harmonics</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            «"The music should sound mystical, emotional, magical, and atmospheric."»
          </p>
        </header>

        <MusicPlayer />
      </div>
    </div>
  );
};

export default MusicPage;