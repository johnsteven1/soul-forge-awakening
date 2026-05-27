import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Meditation from './pages/Meditation';
import SpiritualGrowth from './pages/SpiritualGrowth';
import MusicPage from './pages/Music';
import YouthEnergy from './pages/YouthEnergy';
import Journal from './pages/Journal';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import WarningOverlay from './components/WarningOverlay';
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/30 selection:text-primary-foreground">
        <ParticleBackground />
        <WarningOverlay />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/growth" element={<SpiritualGrowth />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/youth" element={<YouthEnergy />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>

        <Navigation />
        <Toaster position="top-center" expand={true} richColors />
      </div>
    </Router>
  );
}

export default App;