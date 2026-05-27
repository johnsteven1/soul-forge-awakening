import React from 'react';
import { motion } from 'framer-motion';
import { useSpiritualStore } from '@/hooks/useSpiritualState';
import { Sparkles, Zap, Flame, Cloud, Sun } from 'lucide-react';

const AuraEffect: React.FC = () => {
  const { rank, energy } = useSpiritualStore();

  const getAuraColor = () => {
    switch (rank) {
      case 'Divine Spirit': return 'rgba(255, 215, 0, 0.4)';
      case 'Celestial Spirit': return 'rgba(147, 197, 253, 0.4)';
      case 'Ancient Spirit': return 'rgba(167, 139, 250, 0.4)';
      case 'Light Spirit': return 'rgba(52, 211, 153, 0.4)';
      default: return 'rgba(148, 163, 184, 0.2)';
    }
  };

  const getIcon = () => {
    switch (rank) {
      case 'Divine Spirit': return <Sun className="w-8 h-8 text-yellow-400" />;
      case 'Celestial Spirit': return <Cloud className="w-8 h-8 text-blue-300" />;
      case 'Ancient Spirit': return <Flame className="w-8 h-8 text-purple-400" />;
      case 'Light Spirit': return <Zap className="w-8 h-8 text-emerald-400" />;
      default: return <Sparkles className="w-8 h-8 text-slate-400" />;
    }
  };

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          backgroundColor: getAuraColor(),
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-4 border-2 border-dashed rounded-full border-primary/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="z-10 bg-slate-900/40 backdrop-blur-xl p-8 rounded-full border border-primary/20 energy-pulse"
      >
        {getIcon()}
      </motion.div>
      
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
        <motion.div
          key={rank}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-bold spirit-text"
        >
          {rank}
        </motion.div>
        <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">
          Spiritual Rank
        </div>
      </div>
    </div>
  );
};

export default AuraEffect;