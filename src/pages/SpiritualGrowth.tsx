import React from 'react';
import { motion } from 'framer-motion';
import { useSpiritualStore } from '@/hooks/useSpiritualState';
import { Brain, Heart, Zap, Ghost, Eye, Skull, Lock } from 'lucide-react';
import { toast } from 'sonner';

const SpiritualGrowth: React.FC = () => {
  const { addEnergy, triggerDistraction, energy, rank } = useSpiritualStore();

  const handleSacrifice = (type: string, value: number) => {
    addEnergy(value);
    toast.success(`Sacrifice accepted. +${value} Spiritual Energy`, {
      description: `Your ${type} has strengthened the internal flame.`
    });
  };

  const handleDistraction = (type: string, message: string) => {
    triggerDistraction(message);
  };

  const practices = [
    { id: 'thought', name: 'Positive Thoughts', icon: <Brain size={24} />, energy: 5, color: 'text-blue-400' },
    { id: 'solitude', name: 'Moment of Solitude', icon: <Ghost size={24} />, energy: 8, color: 'text-purple-400' },
    { id: 'balance', name: 'Emotional Balance', icon: <Heart size={24} />, energy: 10, color: 'text-pink-400' },
    { id: 'reflection', name: 'Reflection Challenge', icon: <Eye size={24} />, energy: 12, color: 'text-emerald-400' },
  ];

  const distractions = [
    { id: 'lust', name: 'Lust', icon: <Skull size={20} />, message: 'Desire clouds the clarity of the soul. Sacrifice is needed.' },
    { id: 'greed', name: 'Greed', icon: <Skull size={20} />, message: 'Accumulation in the physical world drains the spiritual light.' },
    { id: 'anger', name: 'Anger', icon: <Skull size={20} />, message: 'Burning rage consumes the inner energy you have gathered.' },
    { id: 'fear', name: 'Fear', icon: <Skull size={20} />, message: 'Fear is the lock that keeps the spirit in the physical realm.' },
  ];

  const unlocks = [
    { rank: 'Light Spirit', title: 'Aura Effects', icon: <Zap /> },
    { rank: 'Ancient Spirit', title: 'Spirit Realms', icon: <Eye /> },
    { rank: 'Celestial Spirit', title: 'Energy Powers', icon: <Zap /> },
    { rank: 'Divine Spirit', title: 'Wisdom Scrolls', icon: <Lock /> },
  ];

  const currentRankIndex = ['Calm Spirit', 'Light Spirit', 'Ancient Spirit', 'Celestial Spirit', 'Divine Spirit'].indexOf(rank);

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="text-center space-y-4">
          <h2 className="text-sm uppercase tracking-[0.5em] text-primary font-bold">Sacrifice & Growth</h2>
          <h1 className="text-4xl font-bold">Spiritual Evolution</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            «"Your mind awakens when your spirit connects to the spiritual world."»
          </p>
        </header>

        {/* Growth Actions */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Spiritual Practices</h3>
            <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Perform sacrifice</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {practices.map((p) => (
              <motion.button
                key={p.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSacrifice(p.name, p.energy)}
                className="flex items-center gap-4 p-6 glass-morphism rounded-2xl text-left group"
              >
                <div className={`p-4 rounded-xl bg-slate-900/50 ${p.color} group-hover:bg-primary/20 transition-all`}>
                  {p.icon}
                </div>
                <div>
                  <div className="font-bold text-slate-200">{p.name}</div>
                  <div className="text-xs text-slate-500 mt-1">Gives +{p.energy} Energy</div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Warning Section */}
        <section className="space-y-8 p-8 bg-red-950/10 border border-red-900/20 rounded-3xl">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <div className="p-3 bg-red-500/20 rounded-full text-red-500">
              <Skull size={32} />
            </div>
            <h3 className="text-2xl font-bold text-red-200">The Path of Shadows</h3>
            <p className="text-red-400/70 text-sm italic max-w-md">
              «"These distractions consume the sacrifices you have made and leave your spirit empty."»
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {distractions.map((d) => (
              <button
                key={d.id}
                onClick={() => handleDistraction(d.name, d.message)}
                className="p-4 rounded-xl bg-slate-950/40 border border-red-900/10 hover:border-red-500/30 transition-all flex flex-col items-center gap-2 group"
              >
                <div className="text-red-900 group-hover:text-red-500 transition-colors">
                  {d.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600 group-hover:text-red-200 transition-colors">
                  {d.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Unlocks Path */}
        <section className="space-y-8">
          <h3 className="text-xl font-bold">The Ascension Path</h3>
          <div className="space-y-4">
            {unlocks.map((u, i) => (
              <div 
                key={u.rank}
                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                  currentRankIndex >= i + 1 
                  ? 'bg-primary/10 border-primary/30 text-white' 
                  : 'bg-slate-900/20 border-white/5 text-slate-600 opacity-60'
                }`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/50">
                  {u.icon}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-widest">{u.rank}</div>
                  <div className="text-sm font-medium">{u.title} Unlocked</div>
                </div>
                {currentRankIndex < i + 1 && <Lock size={16} />}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpiritualGrowth;