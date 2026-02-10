
import React from 'react';
import { Landmark, Layers, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="relative pt-40 pb-32 px-6 space-y-12">
      {/* Background Ambient Glow */}
      <div className="fixed top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <header className="space-y-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Landmark size={18} className="text-white" />
          </div>
          <span className="font-bold tracking-tighter text-xl uppercase">PRVT <span className="text-primary">Money</span></span>
        </div>

        <div className="glass-card rounded-xl p-8 border-l-2 border-l-primary/50 shadow-xl shadow-black/20">
          <h1 className="text-3xl font-bold tracking-tight mb-4 leading-tight">
            The Growth Engine for <span className="text-primary">Mid-Market PE</span>.
          </h1>
          <p className="text-slate-400 leading-relaxed font-light">
            We equip private equity firms and mid-market SMBs with institutional-grade <span className="text-slate-100 font-medium italic">Capital OS</span> tools, driving alpha through operational deployment.
          </p>
        </div>
      </header>

      {/* Infrastructure Partners */}
      <section>
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-6">Institutional Infrastructure</h3>
        <div className="flex flex-wrap gap-4 opacity-40 grayscale">
          {['PLAID', 'STRIPE', 'AWS FINTECH', 'SNOWFLAKE'].map(partner => (
            <div key={partner} className="h-8 px-4 bg-slate-800/50 rounded flex items-center justify-center border border-white/5">
              <span className="text-[10px] font-bold tracking-widest">{partner}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Timeline */}
      <section className="space-y-12">
        <div className="relative pl-8 border-l border-primary/20">
          <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_rgba(43,108,238,0.8)]"></div>
          <h4 className="text-lg font-semibold mb-2">Our Origins</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Born from the intersection of legacy Private Equity and modern FinTech, PRVT was founded to bridge the technology gap in the mid-market. We replaced manual spreadsheets with autonomous AI layers.
          </p>
        </div>
        <div className="relative pl-8 border-l border-primary/20">
          <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_rgba(43,108,238,0.8)]"></div>
          <h4 className="text-lg font-semibold mb-2">The AI Fusion</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            By integrating generative AI directly into the capital stack, we provide real-time portfolio visibility that traditional consulting firms take months to deliver.
          </p>
        </div>
      </section>

      {/* Our Edge */}
      <section className="space-y-6">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold text-center">Our Edge</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="glass-card rounded-xl p-6 bg-white/5">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <Layers size={20} />
              </div>
              <h4 className="font-semibold">Deployment vs. Consulting</h4>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              We don't just write reports. We deploy technical infrastructure that runs your treasury and data operations automatically.
            </p>
            <div className="flex items-center text-xs font-medium text-slate-300">
              <CheckCircle size={14} className="text-green-500 mr-2" />
              Real-time Execution
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 bg-white/5">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <Landmark size={20} />
              </div>
              <h4 className="font-semibold">Unified Capital OS</h4>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              A singular interface for debt, equity, and operational data. One source of truth across the entire portfolio lifecycle.
            </p>
            <div className="flex items-center text-xs font-medium text-slate-300">
              <CheckCircle size={14} className="text-green-500 mr-2" />
              Institutional Security
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="fixed bottom-8 left-0 right-0 px-6 z-40 max-w-md mx-auto">
        <Link to="/audit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl shadow-[0_20px_40px_rgba(43,108,238,0.3)] transition-all active:scale-[0.98] flex items-center justify-center space-x-2">
          <span>Inquire for Access</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default About;
