import React, { useState } from 'react';
import { Clock, CalendarPlus, Check, BellRing } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { conferenceData } from '../data/conference';

export const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(conferenceData.startDate);
  const [calendarAdded, setCalendarAdded] = useState(false);

  // Generates and triggers download of a standardized .ics calendar event
  const handleAddToCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//IIBEA//Global Business Leadership Summit 2027//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Global Business Leadership Summit 2027',
      'DESCRIPTION:Connecting Global Leaders. Shaping the Future of Business. Grand Imperial Congress & Exhibition Palace, Geneva.',
      'LOCATION:Grand Imperial Congress & Exhibition Palace, Geneva, Switzerland',
      'DTSTART:20271018T090000Z',
      'DTEND:20271020T180000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'GBLS_Geneva_2027.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCalendarAdded(true);
    setTimeout(() => setCalendarAdded(false), 4000);
  };

  const timeUnits = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section id="countdown" className="relative z-20 -mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-navy-card/95 backdrop-blur-xl border border-navy-border rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Header Info */}
          <div className="text-center lg:text-left space-y-2 max-w-sm">
            <div className="inline-flex items-center gap-2 text-gold-accent text-xs uppercase tracking-widest font-bold">
              <Clock className="w-4 h-4" />
              <span>Convene In Geneva</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              Official Summit Countdown
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Synchronized to Opening Ceremony: <span className="font-semibold text-white">{conferenceData.displayDates}</span>.
            </p>
            <div className="inline-block mt-1 px-2.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-slate-400 font-mono">
              [Editable Config: /src/data/conference.ts]
            </div>
          </div>

          {/* Dynamic Countdown Tiles */}
          {isExpired ? (
            <div className="p-6 rounded-xl bg-gold-accent/10 border border-gold-accent text-center">
              <p className="text-gold-light font-bold text-lg">The Summit is currently in session.</p>
              <p className="text-xs text-slate-300 mt-1">Live broadcasts and plenary sessions are underway.</p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 w-full lg:w-auto">
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 rounded-xl bg-gradient-to-b from-navy-secondary/80 to-navy-deep/90 border border-gold-accent/20 shadow-inner group hover:border-gold-accent/50 transition-colors"
                >
                  <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display tabular-nums group-hover:text-gold-light transition-colors">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-gold-accent/90 mt-1 sm:mt-2">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Quick Action Button */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-gold-accent hover:text-navy-deep text-white text-xs font-bold uppercase tracking-wider border border-white/15 transition-all duration-300 shadow-md"
              title="Download standardized .ics calendar invite"
            >
              {calendarAdded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 group-hover:text-navy-deep" />
                  <span>Calendar Invite Saved</span>
                </>
              ) : (
                <>
                  <CalendarPlus className="w-4 h-4 text-gold-accent group-hover:text-navy-deep" />
                  <span>Add to Calendar (.ICS)</span>
                </>
              )}
            </button>
            
            <a
              href="#registration"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-accent hover:bg-gold-light text-navy-deep text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              <BellRing className="w-4 h-4 text-navy-deep" />
              <span>Request Priority Pass</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

