
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Audit from './pages/Audit';
import { Menu, X, Landmark, LayoutDashboard, Search, Settings } from 'lucide-react';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Engine', path: '/', icon: <LayoutDashboard size={20} /> },
    { label: 'Origins', path: '/about', icon: <Landmark size={20} /> },
    { label: 'OS', path: '/capabilities', icon: <Search size={20} /> },
    { label: 'Audit', path: '/audit', icon: <Settings size={20} /> },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 h-32 flex items-center justify-between px-6">
        <div className="flex items-center gap-2 pl-4">
          <img src="/logo.png" alt="PRVT Money Logo" className="h-28 w-auto object-contain scale-[2.0] origin-left" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian pt-24 px-6">
          <div className="space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 text-2xl font-bold p-4 rounded-xl transition-all ${location.pathname === item.path ? 'text-primary bg-primary/5' : 'text-slate-500'
                  }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background text-slate-100 selection:bg-primary/30">
        <Nav />
        <main className="max-w-6xl mx-auto min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/audit" element={<Audit />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
