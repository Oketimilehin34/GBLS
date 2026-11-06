import React, { useState, useEffect, useRef } from 'react';
import { Users, Globe2, Mic2, Briefcase, Handshake, DollarSign, Sparkles } from 'lucide-react';
import { conferenceData } from '../data/conference';

interface StatCounterProps {
  endValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

const StatCounter: React.FC<StatCounterProps> = ({
  endValue,
  prefix = '',
  suffix = '',
  label,
  description,
  icon: Icon
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const duration = 1800; // 1.8 seconds

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutProgress * endValue));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(endValue);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [endValue, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-navy-card to-navy-deep border border-navy-border hover:border-gold-accent/50 transition-all duration-300 group hover:shadow-executive-hover flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent group-hover:text-navy-deep transition-all duration-300 shadow-sm">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
            EST. 2027
          </span>
        </div>

        <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display mb-2 tabular-nums group-hover:text-gold-light transition-colors">
          {prefix}{count.toLocaleString()}{suffix}
        </div>

        <h3 className="text-sm sm:text-base font-bold text-slate-100 font-display mb-1.5">
          {label}
        </h3>

        <p className="text-xs text-slate-400 leading-relaxed font-normal">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
        <span>Verified Projection</span>
        <span className="text-gold-accent font-mono">Placeholder</span>
      </div>
    </div>
  );
};

export const Statistics: React.FC = () => {
  const stats = [
    {
      endValue: conferenceData.statistics.delegates.count,
      suffix: conferenceData.statistics.delegates.suffix,
      label: conferenceData.statistics.delegates.label,
      description: conferenceData.statistics.delegates.description,
      icon: Users
    },
    {
      endValue: conferenceData.statistics.countries.count,
      suffix: conferenceData.statistics.countries.suffix,
      label: conferenceData.statistics.countries.label,
      description: conferenceData.statistics.countries.description,
      icon: Globe2
    },
    {
      endValue: conferenceData.statistics.speakers.count,
      suffix: conferenceData.statistics.speakers.suffix,
      label: conferenceData.statistics.speakers.label,
      description: conferenceData.statistics.speakers.description,
      icon: Mic2
    },
    {
      endValue: conferenceData.statistics.sessions.count,
      suffix: conferenceData.statistics.sessions.suffix,
      label: conferenceData.statistics.sessions.label,
      description: conferenceData.statistics.sessions.description,
      icon: Briefcase
    },
    {
      endValue: conferenceData.statistics.bilateralMeetings.count,
      suffix: conferenceData.statistics.bilateralMeetings.suffix,
      label: conferenceData.statistics.bilateralMeetings.label,
      description: conferenceData.statistics.bilateralMeetings.description,
      icon: Handshake
    },
    {
      endValue: conferenceData.statistics.capitalRepresented.count,
      prefix: conferenceData.statistics.capitalRepresented.prefix,
      suffix: conferenceData.statistics.capitalRepresented.suffix,
      label: conferenceData.statistics.capitalRepresented.label,
      description: conferenceData.statistics.capitalRepresented.description,
      icon: DollarSign
    }
  ];

  return (
    <section id="statistics" className="py-24 bg-navy-deep text-white relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#102D52_1px,transparent_1px)] opacity-[0.1] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-accent/15 border border-gold-accent/40 text-gold-light text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
            <span>Summit Scale & Global Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            The Scale of Global Leadership
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Consistently bringing together the world's most capital-intensive institutions, sovereign trade delegations, and visionary thinkers under one roof.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              endValue={stat.endValue}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Placeholder Disclaimer Banner */}
        <div className="mt-12 p-4 rounded-xl bg-navy-secondary/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-3">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-gold-accent shrink-0" />
            <span>
              <strong>Editorial Transparency:</strong> All statistical metrics and attendance forecasts are realistic illustrative placeholders configured in <code>src/data/conference.ts</code>.
            </span>
          </div>
          <span className="font-mono text-[11px] text-gold-light shrink-0">
            Source: IIBEA Secretariat Projections
          </span>
        </div>
      </div>
    </section>
  );
};

