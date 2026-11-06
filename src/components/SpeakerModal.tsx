import React from 'react';
import { X, MapPin, Building2, Calendar, Award, ExternalLink } from 'lucide-react';
import { Speaker } from '../data/speakers';

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
  onViewSession?: (sessionTitle: string) => void;
}

export const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose, onViewSession }) => {
  if (!speaker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-r from-navy-deep via-navy-primary to-secondary-navy p-6 flex items-start justify-between text-white">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-gold-accent/20 border border-gold-accent/40 text-gold-light">
              {speaker.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Card Overlay */}
        <div className="px-6 pb-6 pt-0 relative">
          <div className="flex flex-col sm:flex-row gap-5 -mt-16 mb-5 items-start">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover object-top border-4 border-white shadow-xl bg-navy-primary shrink-0"
            />
            <div className="pt-2 sm:pt-16">
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-deep font-display">
                {speaker.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-gold-dark mt-0.5">
                {speaker.title}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                <span className="flex items-center gap-1 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-navy-primary" />
                  {speaker.organisation}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-gold-accent" />
                  {speaker.country}
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Executive Biography
              </h4>
              <p>{speaker.bio}</p>
            </div>

            {/* Session Information */}
            <div className="p-4 rounded-xl bg-surface-lightblue/70 border border-navy-border/20">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-deep">
                    Scheduled Keynote / Plenary Session
                  </h4>
                  <p className="text-sm font-semibold text-navy-primary mt-1">
                    {speaker.sessionTitle}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Grand Imperial Congress Hall &bull; Simultaneous diplomatic translation provided
                  </p>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 italic">
              [Notice: Speaker profile and photograph are illustrative placeholders editable in /src/data/speakers.ts]
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Geneva Summit Accreditation: Confirmed
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-navy-primary hover:bg-secondary-navy text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Close Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

