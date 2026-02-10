
import React from 'react';
import { Eye, Zap, RefreshCw, BarChart3, ArrowRight, Landmark, Building, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pt-24 pb-32 px-5 space-y-12">
      {/* Hero Section */}
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-semibold tracking-wider uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Institutional Growth
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight">
          The Growth Engine for <span className="text-primary">Mid-Market</span> PE.
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Consolidated AI-powered infrastructure for portfolio companies and high-growth SMBs.
        </p>
      </header>

      {/* Core Engines */}
      <section className="space-y-4">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Core Engines</h2>
        
        <div className="glass-card rounded-xl p-6 flex items-start gap-4">
          <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Eye size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Visibility</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Hyper-accelerated SEO and AI content velocity to dominate digital market share.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 flex items-start gap-4 border-primary/30">
          <div className="w-12 h-12 shrink-0 rounded-lg bg-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(43,108,238,0.3)]">
            <Zap size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Conversion</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Autonomous 24/7 AI agents that qualify leads and schedule demos in real-time.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 flex items-start gap-4">
          <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <RefreshCw size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Retention</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Automated indoctrination sequences designed to maximize LTV and referral rates.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 flex items-start gap-4">
          <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <BarChart3 size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Operations</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Centralized CRM Command Center for unified reporting across all portfolio assets.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Infrastructure</h2>
          <h3 className="text-2xl font-bold">Tech Stack Comparison</h3>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-1/3">Feature</th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white/5 text-center">Legacy Tooling</th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 text-center">PRVT Unified</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {[
                { label: 'Integration', legacy: 'Siloed Apps', unified: 'Native Flow' },
                { label: 'Execution', legacy: 'Manual Entry', unified: 'AI-Powered' },
                { label: 'Monthly Cost', legacy: '$4,500+', unified: 'Fixed Flat' },
                { label: 'Support', legacy: 'Ticket Based', unified: 'Dedicated PE' }
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="p-4 font-medium">{row.label}</td>
                  <td className="p-4 text-slate-500 text-center">{row.legacy}</td>
                  <td className="p-4 font-semibold text-primary bg-primary/5 text-center">{row.unified}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Stats Callout */}
      <section className="relative h-64 rounded-2xl overflow-hidden glass-card p-8 flex flex-col justify-end group">
        <img 
          alt="Network pattern" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" 
          src="https://picsum.photos/seed/growth/800/600" 
        />
        <div className="relative z-10 space-y-2">
          <div className="text-5xl font-bold tracking-tighter">14.2<span className="text-primary">x</span></div>
          <p className="text-slate-400 font-medium leading-tight">Average increase in content velocity for portfolio firms using PRVT Visibility.</p>
        </div>
      </section>

      {/* CTAs */}
      <footer className="text-center space-y-8 pt-4">
        <div className="flex flex-col gap-3">
          <Link to="/audit" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
            Book a Growth Audit
            <ArrowRight size={20} />
          </Link>
          <button className="bg-white/5 border border-white/10 text-white font-semibold py-4 rounded-xl hover:bg-white/10 transition-all">
            View Case Studies
          </button>
        </div>
        <div className="flex justify-center gap-8 grayscale opacity-30">
          <Landmark size={24} />
          <Building size={24} />
          <ShieldCheck size={24} />
        </div>
      </footer>
    </div>
  );
};

export default Home;
