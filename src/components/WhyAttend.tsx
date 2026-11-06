import React from 'react';
import { Users, TrendingUp, Handshake, Search, Globe, GraduationCap, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface WhyAttendProps {
  onRegisterClick: () => void;
}

export const WhyAttend: React.FC<WhyAttendProps> = ({ onRegisterClick }) => {
  const benefits = [
    {
      icon: Users,
      title: "Meet Influential Decision-Makers",
      description: "Direct face-to-face access to senior government ministers, central bank governors, and multinational C-level executives in private, secure environments."
    },
    {
      icon: Search,
      title: "Access Global Business Insights",
      description: "Receive proprietary macroeconomic forecasts, trade corridor analysis, and geopolitical briefings before they reach general public circulation."
    },
    {
      icon: Handshake,
      title: "Build Strategic Partnerships",
      description: "Facilitate cross-border joint ventures, distribution consortiums, and technology transfer agreements through dedicated B2B matchings."
    },
    {
      icon: TrendingUp,
      title: "Discover Emerging Investment Opportunities",
      description: "Gain first-look access to vetted infrastructure pipelines, clean-tech syndications, sovereign bond allocations, and frontier technology funds."
    },
    {
      icon: Globe,
      title: "Expand International Business Networks",
      description: "Forge enduring diplomatic and commercial ties spanning North America, Europe, the Middle East, Asia-Pacific, and emerging Latin American markets."
    },
    {
      icon: GraduationCap,
      title: "Learn from Experienced Industry Leaders",
      description: "Participate in closed-door Chatham House roundtables and executive masterclasses led by visionary founders, Nobel laureates, and turnaround chairs."
    }
  ];

  const attendeeBreakdown = [
    { label: "Institutional Investors & Sovereign Funds", percent: 35 },
    { label: "Fortune 500 C-Suite & Board Members", percent: 28 },
    { label: "Government Ministers & Multilateral Regulators", percent: 22 },
    { label: "Frontier Tech Pioneers & Fast-Growth Unicorns", percent: 15 },
  ];

  return (
    <section id="why-attend" className="py-24 bg-surface-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-primary/5 border border-navy-primary/10 text-navy-primary text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-accent" />
            <span>Executive Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-deep tracking-tight font-display leading-tight mb-4">
            Why Attend the Global Summit?
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-navy-primary to-gold-accent rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Attending the Summit is not merely participating in a conference; it is securing a seat at the table where the global economic architecture for the upcoming decade is negotiated.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 6 Core Benefits Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-gold-accent/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-surface-lightblue flex items-center justify-center text-navy-primary mb-4 border border-navy-border/20">
                        <IconComponent className="w-6 h-6 text-gold-dark" />
                      </div>
                      <h3 className="text-base font-bold text-navy-deep mb-2 font-display">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High Quality Summit Imagery & Delegate Demographics */}
          <div className="lg:col-span-5 space-y-6">
            {/* Curated Conference Imagery */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-navy-deep border border-slate-200/70">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
                alt="Executive summit audience listening to global economic keynote"
                className="w-full h-72 sm:h-80 object-cover object-center filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-deep/90 backdrop-blur-md border border-white/10 text-white">
                <p className="text-xs font-bold text-gold-light uppercase tracking-wider">High-Trust Chatham House Forum</p>
                <p className="text-[11px] text-slate-300 mt-0.5">85% of attending delegations represent sovereign or enterprise entities exceeding $1B in turnover.</p>
              </div>
            </div>

            {/* Delegate Demographics Box */}
            <div className="p-6 rounded-2xl bg-navy-deep text-white border border-navy-border shadow-xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gold-accent mb-4">
                Delegate Profile Breakdown (By Sector)
              </h4>

              <div className="space-y-4">
                {attendeeBreakdown.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-200">{item.label}</span>
                      <span className="text-gold-light font-mono">{item.percent}%</span>
                    </div>
                    <div className="w-full h-2 bg-navy-primary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gold-accent to-gold-light rounded-full"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-navy-border flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white">Delegate Accreditation</p>
                  <p className="text-[11px] text-slate-400">Strict quota applied to ensure balanced representation</p>
                </div>
                <button
                  onClick={onRegisterClick}
                  className="px-4 py-2 rounded-lg bg-gold-accent hover:bg-gold-light text-navy-deep text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shrink-0"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

