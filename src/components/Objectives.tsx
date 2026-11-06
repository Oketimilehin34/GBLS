import React from 'react';
import { Users2, TrendingUp, Cpu, Globe2, Target, Check } from 'lucide-react';

export const Objectives: React.FC = () => {
  const objectives = [
    {
      number: "01",
      title: "Global Networking",
      tagline: "High-level bilateral & multilateral connections",
      description: "Connect directly with international business leaders, institutional capital allocators, and influential decision-makers in curated, high-trust settings designed for deal origination.",
      icon: Users2,
      deliverables: ["Curated 1-on-1 bilateral meeting salons", "VIP delegate dinner and embassy receptions", "Exclusive executive lounge access"]
    },
    {
      number: "02",
      title: "Investment Opportunities",
      tagline: "Cross-border capital deployment & syndication",
      description: "Discover emerging regional growth corridors, co-investment opportunities, sovereign asset pipelines, and strategic joint-venture partnerships spanning infrastructure, real assets, and private equity.",
      icon: TrendingUp,
      deliverables: ["Direct sovereign wealth pipeline briefings", "Cross-border M&A deal rooms", "Blended finance syndication workshops"]
    },
    {
      number: "03",
      title: "Innovation and Technology",
      tagline: "Industrial AI & frontier enterprise readiness",
      description: "Explore enterprise-grade artificial intelligence, cyber-sovereignty frameworks, quantum computing security, and real-world digital transformation paradigms reshaping global value chains.",
      icon: Cpu,
      deliverables: ["Industrial AI live executive demonstrations", "Cyber-sovereignty governance blueprints", "Enterprise digital asset protocols"]
    },
    {
      number: "04",
      title: "Economic Development",
      tagline: "Sustainable growth & resilient policy frameworks",
      description: "Encourage international economic collaboration, equitable trade corridor modernization, and sustainable industrial policy that balances carbon transition with commercial prosperity.",
      icon: Globe2,
      deliverables: ["Publication of the Geneva Business Accord", "Clean energy transition financing models", "Multilateral trade facilitation roundtables"]
    }
  ];

  return (
    <section id="objectives" className="py-24 bg-navy-deep text-white relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(#102D52_1px,transparent_1px)] opacity-[0.12] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-secondary-navy/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-navy-border">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-accent/15 border border-gold-accent/40 text-gold-light text-xs font-bold uppercase tracking-widest mb-4">
              <Target className="w-3.5 h-3.5 text-gold-accent" />
              <span>Summit Strategic Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Four Core Summit Objectives
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              Every plenary, private roundtable, and bilateral session is engineered around four key pillars driving the global economy forward.
            </p>
          </div>

          <div className="text-left lg:text-right shrink-0">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block">Framework Year</span>
            <span className="text-2xl font-bold text-gold-accent font-display">2027 – 2030 Horizon</span>
          </div>
        </div>

        {/* Objectives Presentation: Clean Editorial Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {objectives.map((obj) => {
            const IconComponent = obj.icon;
            return (
              <div
                key={obj.number}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-navy-card/90 to-navy-primary/70 border border-navy-border hover:border-gold-accent/50 transition-all duration-300 hover:shadow-executive-hover flex flex-col justify-between"
              >
                {/* Header within item */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent group-hover:text-navy-deep transition-all duration-300 shadow-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-gold-accent uppercase">
                        Objective {obj.number}
                      </span>
                    </div>
                    <span className="text-3xl font-black text-white/20 font-display group-hover:text-gold-accent/30 transition-colors">
                      {obj.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display group-hover:text-gold-light transition-colors">
                    {obj.title}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-accent/90 mb-4">
                    {obj.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {obj.description}
                  </p>
                </div>

                {/* Key Deliverables Bulleted List */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Outcomes & Format:
                  </span>
                  {obj.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-navy-secondary/90 via-navy-card to-navy-deep border border-gold-accent/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-gold-accent/20 border border-gold-accent/40 flex items-center justify-center shrink-0">
              <Globe2 className="w-5 h-5 text-gold-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Need bespoke delegation programming?</p>
              <p className="text-xs text-slate-300">Sovereign trade missions and corporate group delegations can request dedicated bilateral salon allocations.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-gold-accent hover:bg-gold-light text-navy-deep font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            Contact Secretariat
          </a>
        </div>
      </div>
    </section>
  );
};

