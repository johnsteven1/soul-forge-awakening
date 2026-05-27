import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Sparkles, Music, Book, Heart, Feather } from 'lucide-react';

const Navigation: React.FC = () => {
  const navItems = [
    { to: '/', icon: <Home size={20} />, label: 'Sanctum' },
    { to: '/growth', icon: <Sparkles size={20} />, label: 'Awakening' },
    { to: '/meditation', icon: <Feather size={20} />, label: 'Zen' },
    { to: '/music', icon: <Music size={20} />, label: 'Rituals' },
    { to: '/youth', icon: <Heart size={20} />, label: 'Vitality' },
    { to: '/journal', icon: <Book size={20} />, label: 'Scrolls' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="glass-morphism rounded-full px-4 py-2 flex items-center gap-1 md:gap-4 shadow-2xl shadow-purple-950/40 border-white/10">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `
              relative flex flex-col items-center p-3 rounded-full transition-all group
              ${isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-200'}
            `}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10">{item.icon}</div>
                <span className="text-[10px] font-bold uppercase tracking-tighter mt-1 hidden md:block relative z-10">
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;