
import React from 'react';
import { CheckCircle, ShieldCheck, Globe, BadgeCheck, ArrowRight } from 'lucide-react';

const Audit: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-primary text-[10px] font-semibold uppercase tracking-widest">Institutional Growth Engine</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight leading-tight">
          Audit Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Wealth Ecosystem</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
          Precision engineering for mid-market private equity and high-growth SMBs. Scale with institutional clarity.
        </p>
      </section>

      {/* Pricing Tiers */}
      <div className="space-y-6">
        {/* Launch */}
        <div className="glass-card rounded-xl p-6 relative overflow-hidden transition-all hover:scale-[1.02]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold">Launch</h3>
              <p className="text-xs text-slate-500">System Foundations</p>
            </div>
            <span className="text-primary font-bold text-xl">$4.5k<span className="text-[10px] text-slate-500 font-normal">/mo</span></span>
          </div>
          <ul className="space-y-4 mb-8">
            {['Initial Infrastructure Audit', 'Operational Bottleneck Discovery', 'Standardized Reporting Setup'].map(feat => (
              <li key={feat} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-primary mt-0.5" />
                <span className="text-xs text-slate-300">{feat}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-lg border border-slate-700 text-sm font-medium hover:bg-white/5 transition-all">
            Select Launch
          </button>
        </div>

        {/* Scale (Highlighted) */}
        <div className="rounded-xl p-6 relative overflow-hidden border-2 border-primary/50 bg-primary/5 shadow-[0_0_30px_rgba(43,108,238,0.2)] transition-all hover:scale-[1.02]">
          <div className="absolute top-0 right-0">
            <div className="bg-primary text-[10px] text-white px-4 py-1 rounded-bl-lg font-bold uppercase tracking-wider">Popular</div>
          </div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Scale</h3>
              <p className="text-xs text-primary/80">Growth Acceleration</p>
            </div>
            <span className="text-white font-bold text-2xl">$12k<span className="text-[10px] text-slate-400 font-normal">/mo</span></span>
          </div>
          <ul className="space-y-4 mb-8">
            {['Full Automation Integration', 'Revenue Leakage Protection', 'Quarterly Strategic Roadmap', 'Dedicated Systems Architect'].map(feat => (
              <li key={feat} className="flex items-start gap-3">
                <BadgeCheck size={18} className="text-primary mt-0.5" />
                <span className="text-xs text-slate-100 font-medium">{feat}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">
            Secure Scale Tier
          </button>
        </div>

        {/* Dominate */}
        <div className="glass-card rounded-xl p-6 relative overflow-hidden transition-all hover:scale-[1.02]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold">Dominate</h3>
              <p className="text-xs text-slate-500">Market Leadership</p>
            </div>
            <span className="text-primary font-bold text-xl">Custom</span>
          </div>
          <ul className="space-y-4 mb-8">
            {['Custom Proprietary Tech Stack', 'M&A Readiness Audits', 'Executive Team Performance Tech'].map(feat => (
              <li key={feat} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-primary mt-0.5" />
                <span className="text-xs text-slate-300">{feat}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-lg border border-slate-700 text-sm font-medium">
            Contact for Enterprise
          </button>
        </div>
      </div>

      {/* Systems Audit Form */}
      <section>
        <div className="glass-card rounded-2xl p-8 relative overflow-hidden border-t-primary/30">
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Systems Audit</h2>
              <p className="text-xs text-slate-400">Secure your growth roadmap and initial system analysis.</p>
            </div>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold ml-1">Full Name</label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all"
                  placeholder="Johnathan Sterling"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold ml-1">Company Email</label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all"
                  placeholder="j.sterling@firm.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold ml-1">Annual Revenue</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white appearance-none transition-all">
                  <option className="bg-obsidian">Select revenue range</option>
                  <option className="bg-obsidian">$1M - $5M</option>
                  <option className="bg-obsidian">$5M - $20M</option>
                  <option className="bg-obsidian">$20M - $100M</option>
                  <option className="bg-obsidian">$100M+</option>
                </select>
              </div>
              <div className="pt-4">
                <button className="w-full py-4 rounded-lg bg-primary text-white font-bold text-sm tracking-wide uppercase shadow-xl shadow-primary/30 flex items-center justify-center gap-2 group">
                  Get Your Free Roadmap
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-[10px] text-center text-slate-500 mt-4 px-4 leading-tight">
                  By clicking, you agree to our terms of service and institutional data protection policies.
                </p>
              </div>
            </form>
          </div>
          {/* Subtle decoration */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="text-center opacity-30 grayscale pb-10">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-8 font-bold">Institutional Partners & Security</p>
        <div className="flex justify-around items-center gap-8 px-4">
          <ShieldCheck size={32} />
          <Globe size={32} />
          <BadgeCheck size={32} />
        </div>
      </section>

      <footer className="text-center border-t border-white/5 pt-10 text-slate-600">
        <p className="text-[10px] uppercase tracking-widest font-medium">© 2024 PRVT Money Systems. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Audit;
