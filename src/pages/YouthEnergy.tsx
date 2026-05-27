import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Moon, Sparkles, Wind, Coffee } from 'lucide-react';

const YouthEnergy: React.FC = () => {
  const teachings = [
    { title: 'Emotional Peace', desc: 'Inner stillness prevents the leakage of life force through turbulent waters.', icon: <Droplets /> },
    { title: 'Solitude & Reflection', desc: 'In the silence of the moon, your spirit replenishes its silver reservoir.', icon: <Moon /> },
    { title: 'Avoiding Stress', desc: 'Physical tension is a cage for the divine energy. Release the locks.', icon: <Wind /> },
    { title: 'Healing Tears', desc: 'Grief is the cleansing rain that nourishes the roots of youthful vitality.', icon: <Coffee /> },
  ];

  return (
    <div className="min-h-screen pt-24 pb-32 px-6 relative overflow-hidden">
      {/* Visual background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full" />
        
        {/* Silver particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              opacity: 0 
            }}
            animate={{ 
              y: [null, '-20%'],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        <header className="text-center space-y-4">
          <h2 className="text-sm uppercase tracking-[0.5em] text-blue-400 font-bold">Inner Vitality</h2>
          <h1 className="text-5xl font-bold font-serif italic text-blue-100">The Secret of Youthful Energy</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            «"A peaceful spirit amplifies power beyond imagination."»
          </p>
        </header>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden aspect-video group">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ab98febe-2e62-49d6-9c9f-3d0f24a3ba9f/youth-energy-bg-6e365650-1779846189729.webp" 
            alt="Youthful Energy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 space-y-2">
            <div className="text-blue-300 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              <Sparkles size={14} />
              Divine Revelation
            </div>
            <h3 className="text-3xl font-bold">Moonlight Reflection</h3>
            <p className="text-slate-300 max-w-md">
              Learn how to maintain the vibrancy of your youth through spiritual calmness and emotional release.
            </p>
          </div>
        </div>

        {/* Teachings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachings.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-900/30 border border-blue-900/10 hover:border-blue-400/30 transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                {t.icon}
              </div>
              <h4 className="text-xl font-bold text-blue-100">{t.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Healing Section */}
        <section className="p-12 glass-morphism rounded-[3rem] text-center border-blue-500/10">
          <div className="max-w-xl mx-auto space-y-6">
            <h3 className="text-3xl font-serif italic text-blue-200">The Power of Stillness</h3>
            <p className="text-slate-400 leading-relaxed">
              Solitude is not loneliness; it is the meeting point between the physical shell and the divine spirit. In moments of quiet, the energy that has been scattered across your desires returns to its source.
            </p>
            <div className="pt-4 flex justify-center gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-blue-400/40" />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default YouthEnergy;