import React from 'react';
import { motion } from 'framer-motion';
import AuraEffect from '@/components/AuraEffect';
import EnergyTracker from '@/components/EnergyTracker';
import WisdomScroll from '@/components/WisdomScroll';
import { useSpiritualStore } from '@/hooks/useSpiritualState';
import { Sparkles, ArrowRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { rank } = useSpiritualStore();

  return (
    <div className="min-h-screen pt-12 pb-32 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-8 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <h2 className="text-sm uppercase tracking-[0.5em] text-primary font-bold">The Dual Existence</h2>
            <h1 className="text-5xl md:text-7xl font-bold spirit-text">Mystic Awakening</h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
              «"With great power comes greater responsibility."»
            </p>
          </motion.div>

          <div className="py-8">
            <AuraEffect />
          </div>

          <div className="w-full flex flex-col items-center space-y-4">
            <EnergyTracker />
            <p className="text-xs text-slate-500 italic">Continue your spiritual practices to unlock divine potentials.</p>
          </div>
        </section>

        {/* The Two Lives */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-2xl font-bold">The Physical Life</h3>
            <p className="text-slate-400 leading-relaxed">
              The life seen by everyone — ordinary reality, daily struggles, emotions, desires, and survival.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-primary/5 border border-primary/20 space-y-4 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
              <Sparkles size={80} className="text-primary" />
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Sparkles size={24} />
            </div>
            <h3 className="text-2xl font-bold">The Spiritual Life</h3>
            <p className="text-slate-400 leading-relaxed">
              The hidden life within the soul that grants awareness, energy manipulation, manifestation, inner peace, and spiritual awakening.
            </p>
          </motion.div>
        </section>

        {/* Daily Wisdom */}
        <section className="max-w-3xl mx-auto">
          <WisdomScroll 
            quote="To understand your power, you must become one with yourself. Do not fear your abilities — whether to create or destroy."
            author="The Awakening Narrator"
          />
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link to="/growth" className="group">
            <div className="h-full p-6 glass-morphism rounded-2xl flex items-center justify-between group-hover:bg-primary/5 transition-all">
              <div>
                <h4 className="font-bold text-slate-200">Growth System</h4>
                <p className="text-xs text-slate-500 mt-1">Sacrifice to gain energy</p>
              </div>
              <ArrowRight className="text-slate-600 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
            </div>
          </Link>
          <Link to="/music" className="group">
            <div className="h-full p-6 glass-morphism rounded-2xl flex items-center justify-between group-hover:bg-primary/5 transition-all">
              <div>
                <h4 className="font-bold text-slate-200">Ritual Songs</h4>
                <p className="text-xs text-slate-500 mt-1">Generate mystical audio</p>
              </div>
              <ArrowRight className="text-slate-600 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
            </div>
          </Link>
          <Link to="/youth" className="group">
            <div className="h-full p-6 glass-morphism rounded-2xl flex items-center justify-between group-hover:bg-primary/5 transition-all">
              <div>
                <h4 className="font-bold text-slate-200">Inner Vitality</h4>
                <p className="text-xs text-slate-500 mt-1">Secrets of youthful energy</p>
              </div>
              <ArrowRight className="text-slate-600 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;