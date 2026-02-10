
import React from 'react';
// Fix: Added missing BarChart3 and Building imports from lucide-react
import { LayoutDashboard, LineChart, Wallet, Layout, ChevronDown, Sparkles, AlertCircle, BarChart3, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Capabilities: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 space-y-16">
      {/* Hero */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Now Integrated with Mid-Market API
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          The All-in-One <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white">Growth OS</span> <br />
          for Private Markets
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed px-4">
          Unified capital allocation, operational intelligence, and growth tools designed for institutional SMB portfolios.
        </p>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="glass-card p-4 rounded-2xl border-t-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="text-primary font-bold text-2xl mb-1">32%</div>
          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Margin Boost</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border-t-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="text-primary font-bold text-2xl mb-1">10X</div>
          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Data Velocity</div>
        </div>
      </div>

      {/* The Comparison Visualizer */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-3">The Fragmented Stack Trap</h2>
          <p className="text-xs text-slate-500">Stop fighting your tools. Start growing your portfolio.</p>
        </div>

        <div className="relative flex flex-col gap-8">
          {/* Fragmented View */}
          <div className="relative p-6 rounded-2xl border border-red-500/20 bg-red-500/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <AlertCircle size={64} className="text-red-500" />
            </div>
            <div className="text-red-400 font-bold text-[10px] uppercase tracking-widest mb-4">Old Method: The Chaos</div>
            <div className="flex flex-wrap gap-2 opacity-60 grayscale">
              {['CRM', 'ERP', 'Legacy BI', 'Spreadsheets', 'Slack', 'Email'].map(tool => (
                <div key={tool} className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[10px]">{tool}</div>
              ))}
            </div>
            <p className="mt-4 text-xs text-red-200/60 leading-relaxed italic">
              "Siloed data, tool fatigue, and hidden operational costs."
            </p>
          </div>

          <div className="flex justify-center -my-4 relative z-10">
            <div className="bg-primary rounded-full p-2 border-4 border-background">
              <ChevronDown size={16} className="text-white" />
            </div>
          </div>

          {/* Unified View */}
          <div className="relative p-6 rounded-2xl border border-primary/40 bg-primary/5 glass-card overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <Sparkles size={64} className="text-primary" />
            </div>
            <div className="text-primary font-bold text-[10px] uppercase tracking-widest mb-4">New Method: PRVT OS</div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/40">
                  <Layout size={14} className="text-primary" />
                </div>
                <div className="h-1.5 flex-1 bg-primary/20 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-primary animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/40">
                  <LineChart size={14} className="text-primary" />
                </div>
                <div className="h-1.5 flex-1 bg-primary/20 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-primary animate-[shimmer_2.5s_infinite]"></div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-300 leading-relaxed font-medium">
              One interface. Real-time accuracy. Instant scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 text-center">Core Capabilities</h3>
        <div className="space-y-4">
          <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-xl text-primary">
              <Wallet size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-1">Capital Allocation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">AI-driven liquidity forecasting and automated debt management for complex portfolios.</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-xl text-primary">
              <BarChart3 size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-1">Operational Efficiency</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Streamline SMB workflows with automated reporting and department-level visibility.</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-xl text-primary">
              <Building size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-1">Growth Intelligence</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Identify market opportunities using proprietary data signals from 10k+ mid-market firms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-10">
        <div className="relative glass-card p-8 rounded-2xl overflow-hidden text-center border-t-primary/30">
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          <h3 className="text-2xl font-bold mb-4">Ready to upgrade your engine?</h3>
          <p className="text-xs text-slate-400 mb-8 leading-relaxed">Join 500+ private equity firms managing $10B+ in combined SMB assets on PRVT.</p>
          <Link to="/audit" className="block w-full bg-white text-obsidian py-4 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
            Request Institutional Access
          </Link>
          <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold">No credit card required for pilot programs.</p>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;
