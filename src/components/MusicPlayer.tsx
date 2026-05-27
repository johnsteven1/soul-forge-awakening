import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, Music as MusicIcon, Wand2, Sparkles } from 'lucide-react';
import { useSpiritualStore } from '@/hooks/useSpiritualState';
import { toast } from 'sonner';

const MOCK_SONGS = [
  { id: 'song-1', title: 'Eternal Light', artist: 'Spirit Choir', duration: 180 },
  { id: 'song-2', title: 'Ancient Echoes', artist: 'Celestial Ensemble', duration: 240 },
  { id: 'song-3', title: 'Void Meditation', artist: 'The Silence', duration: 300 },
];

const MusicPlayer: React.FC = () => {
  const { unlockedSongs } = useSpiritualStore();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [lyrics, setLyrics] = useState('');

  const currentSong = MOCK_SONGS[currentSongIndex];

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleGenerateSong = () => {
    if (!lyrics.trim()) {
      toast.error("Please provide lyrics for the ancient ritual");
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setLyrics('');
      toast.success("Ancient vocals generated. The light day rises.");
      setIsPlaying(true);
    }, 3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Main Player UI */}
      <div className="glass-morphism rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-900/30 rounded-2xl overflow-hidden flex items-center justify-center"
            animate={{ 
              rotate: isPlaying ? 360 : 0,
              scale: isPlaying ? [1, 1.05, 1] : 1
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <MusicIcon size={80} className="text-primary/50" />
            
            {/* Visualizer effect */}
            {isPlaying && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center items-end gap-1 px-4 h-12">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-primary/60 rounded-full"
                    animate={{ height: [4, Math.random() * 32 + 8, 4] }}
                    transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>

        <div className="flex-1 w-full space-y-6 text-center md:text-left">
          <div>
            <h3 className="text-3xl font-bold spirit-text">{currentSong.title}</h3>
            <p className="text-slate-400 mt-2 font-medium">{currentSong.artist}</p>
          </div>

          <div className="space-y-2">
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 font-mono tracking-widest">
              <span>0:00</span>
              <span>3:00</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-8">
            <button className="text-slate-400 hover:text-white transition-colors">
              <SkipBack size={24} />
            </button>
            <button 
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-primary/20"
            >
              {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>
            <button className="text-slate-400 hover:text-white transition-colors">
              <SkipForward size={24} />
            </button>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <Volume2 size={18} />
            <div className="h-1 flex-1 bg-slate-800 rounded-full">
              <div className="h-full w-2/3 bg-slate-600 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Ritual Generation */}
      <div className="glass-morphism rounded-3xl p-8 border-primary/10">
        <div className="flex items-center gap-3 mb-6">
          <Wand2 className="text-primary" size={24} />
          <h4 className="text-xl font-bold">Ritual Song Altar</h4>
        </div>
        <p className="text-sm text-slate-400 mb-6">
          Write your spiritual lyrics below. The ancient spirits will manifest them into a singable audio ritual.
        </p>
        
        <div className="relative">
          <textarea
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
            placeholder="Come to me, oh light and day..."
            className="w-full h-32 bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-slate-300 focus:outline-none focus:border-primary/50 transition-colors resize-none font-serif italic"
          />
          
          <button
            onClick={handleGenerateSong}
            disabled={isGenerating}
            className="absolute bottom-4 right-4 px-6 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/40 rounded-full text-primary text-sm font-bold flex items-center gap-2 transition-all disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                Manifesting...
              </>
            ) : (
              <>
                <Sparkles size={16} />
                Generate Ritual
              </>
            )}
          </button>
        </div>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/30 border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-500 uppercase font-bold">Meditation Frequency</span>
              <MusicIcon size={14} className="text-slate-600" />
            </div>
            <div className="text-sm font-bold group-hover:text-primary transition-colors">528Hz Solfeggio</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/30 border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-500 uppercase font-bold">Voice Chanting</span>
              <MusicIcon size={14} className="text-slate-600" />
            </div>
            <div className="text-sm font-bold group-hover:text-primary transition-colors">Tibetan Om</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/30 border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-500 uppercase font-bold">Ambient Choirs</span>
              <MusicIcon size={14} className="text-slate-600" />
            </div>
            <div className="text-sm font-bold group-hover:text-primary transition-colors">Ethereal Voices</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;