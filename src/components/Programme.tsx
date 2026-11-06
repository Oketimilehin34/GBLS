import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Download, Sparkles, Filter, CheckCircle } from 'lucide-react';
import { programmeData, Session } from '../data/programme';

export const Programme: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [filterType, setFilterType] = useState<string>('All');
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const currentSchedule = programmeData.find((d) => d.dayNumber === activeDay) || programmeData[0];

  const sessionTypes = ['All', 'Keynote', 'Plenary', 'Panel', 'Roundtable', 'Networking', 'Ceremony'];

  const filteredSessions = currentSchedule.sessions.filter((session) => {
    if (filterType === 'All') return true;
    return session.type === filterType;
  });

  const handleDownloadPDF = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="programme" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-primary/5 border border-navy-primary/10 text-navy-primary text-xs font-bold uppercase tracking-widest mb-4">
              <Calendar className="w-3.5 h-3.5 text-gold-accent" />
              <span>Official Summit Agenda</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-deep tracking-tight font-display">
              Conference Programme
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Three intensive days of ministerial plenaries, private sovereign roundtables, 
              frontier technology demonstrations, and structured bilateral deal-making.
            </p>
          </div>

          {/* Action & Placeholder Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-primary hover:bg-secondary-navy text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Agenda PDF Ready (Placeholder)</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-gold-accent" />
                  <span>Download Full Schedule (PDF)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Editable Placeholder Notice */}
        <div className="mb-8 p-3.5 bg-surface-lightblue/70 rounded-xl border border-navy-border/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-navy-deep gap-2">
          <span className="font-semibold">
            [Schedule Blueprint]: All sessions, time slots, and room allocations are structured placeholders customizable in <code>src/data/programme.ts</code>.
          </span>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white font-bold text-slate-500">
            Chatham House Rule Applies in Private Salons
          </span>
        </div>

        {/* Day Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {programmeData.map((day) => {
            const isSelected = activeDay === day.dayNumber;
            return (
              <button
                key={day.dayNumber}
                onClick={() => setActiveDay(day.dayNumber)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-navy-deep text-white border-gold-accent shadow-xl ring-1 ring-gold-accent/40'
                    : 'bg-surface-soft text-slate-700 border-slate-200 hover:border-navy-primary/40 hover:bg-slate-50'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold-accent animate-ping" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-extrabold uppercase tracking-widest ${isSelected ? 'text-gold-accent' : 'text-slate-500'}`}>
                    {day.dayTitle} &bull; {day.date.split(',')[1]}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${isSelected ? 'bg-white/10 text-slate-300' : 'bg-slate-200 text-slate-600'}`}>
                    {day.sessions.length} Sessions
                  </span>
                </div>
                <h3 className={`text-base font-bold font-display ${isSelected ? 'text-white' : 'text-navy-deep'}`}>
                  {day.theme}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Session Type Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1.5">
            <Filter className="w-3 h-3" />
            Session Type:
          </span>
          {sessionTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors ${
                filterType === type
                  ? 'bg-gold-accent text-navy-deep shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Editorial Timeline / Agenda List */}
        <div className="space-y-4">
          {filteredSessions.map((session, idx) => (
            <div
              key={session.id}
              className="p-6 rounded-2xl bg-surface-soft/80 border border-slate-200/90 hover:border-gold-accent/50 hover:bg-white transition-all duration-200 hover:shadow-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                {/* Time & Session Category Pill */}
                <div className="lg:w-64 shrink-0 flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-2">
                  <div className="flex items-center gap-2 text-navy-deep font-black text-base sm:text-lg font-mono">
                    <Clock className="w-4 h-4 text-gold-dark shrink-0" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-navy-primary text-white">
                      {session.type}
                    </span>
                    {session.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-slate-200/80 text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Session Main Details */}
                <div className="flex-1 space-y-2">
                  <h4 className="text-lg sm:text-xl font-bold text-navy-deep font-display">
                    {session.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {session.description}
                  </p>

                  {/* Hall & Speakers Meta */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5 font-medium text-navy-secondary">
                      <MapPin className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                      <span>{session.hall}</span>
                    </div>

                    <div className="flex items-center gap-1.5 font-medium text-slate-600">
                      <Users className="w-3.5 h-3.5 text-navy-primary shrink-0" />
                      <span>Panellists / Chairs: {session.speakers.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredSessions.length === 0 && (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500">
              <p className="text-sm">No sessions found matching the filter "{filterType}" on this day.</p>
              <button
                onClick={() => setFilterType('All')}
                className="mt-2 text-xs font-bold text-navy-primary underline"
              >
                Reset Filter to All
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

