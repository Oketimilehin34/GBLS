import React, { useState } from 'react';
import { 
  Globe2, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ArrowUp, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Facebook, 
  ShieldCheck,
  FileText,
  X
} from 'lucide-react';
import { conferenceData } from '../data/conference';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [newsletterError, setNewsletterError] = useState<string | null>(null);
  const [legalModal, setLegalModal] = useState<{ title: string; content: string } | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError(null);

    if (!newsletterEmail.trim()) {
      setNewsletterError('Please enter your email address.');
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newsletterEmail.trim())) {
      setNewsletterError('Please provide a valid corporate email format.');
      return;
    }

    setNewsletterStatus('loading');
    await new Promise((resolve) => setTimeout(resolve, 800));
    setNewsletterStatus('success');
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLegalModal = (type: 'privacy' | 'terms' | 'conduct') => {
    if (type === 'privacy') {
      setLegalModal({
        title: 'Privacy Policy & Data Protection',
        content: `The ${conferenceData.organizer.name} is dedicated to protecting personal information in adherence with the Swiss Federal Act on Data Protection (FADP) and the General Data Protection Regulation (GDPR). Delegate information submitted through this website is strictly utilized for summit accreditation, bilateral scheduling, and official communiqué distribution. We do not monetize or distribute delegate registries to unauthorized third parties.`
      });
    } else if (type === 'terms') {
      setLegalModal({
        title: 'Summit Terms & Delegate Accreditation Conditions',
        content: `Participation in the ${conferenceData.name} is contingent upon credential verification. All delegate passes are non-transferable without prior notification to the Secretariat 14 days before the opening ceremony. The Chatham House Rule governs all closed-door sessions and ministerial roundtables.`
      });
    } else {
      setLegalModal({
        title: 'Summit Diplomatic Code of Conduct',
        content: `Delegates and partners commit to engaging in respectful, constructive multilateral exchange. Recording devices and unauthorized photography are strictly prohibited inside designated confidential bilateral salons.`
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Summit', href: '#about' },
    { name: 'Core Objectives', href: '#objectives' },
    { name: 'Speaker Faculty', href: '#speakers' },
    { name: 'Programme Agenda', href: '#programme' },
    { name: 'Why Attend', href: '#why-attend' },
    { name: 'Sponsors & Partners', href: '#sponsors' },
    { name: 'Venue & Geneva', href: '#venue' },
    { name: 'FAQ & Inquiries', href: '#faq' },
    { name: 'Accreditation Pass', href: '#registration' },
  ];

  return (
    <footer className="bg-navy-deep text-white border-t border-navy-border relative overflow-hidden">
      {/* Decorative top accent border */}
      <div className="h-1 bg-gradient-to-r from-navy-secondary via-gold-accent to-navy-secondary" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-navy-border">
          {/* Col 1: Organisation & Logo (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary-navy border border-gold-accent/40 flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-gold-accent" />
              </div>
              <div>
                <span className="text-white font-black tracking-tight text-lg block font-display">
                  {conferenceData.shortName}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gold-accent font-bold">
                  Geneva Executive Summit
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {conferenceData.organizer.description}
            </p>

            <div className="pt-2 text-xs space-y-2 text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <span>{conferenceData.organizer.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-accent shrink-0" />
                <a href={`mailto:${conferenceData.organizer.email}`} className="hover:text-white transition-colors">
                  {conferenceData.organizer.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-accent shrink-0" />
                <a href={`tel:${conferenceData.organizer.telephone}`} className="hover:text-white transition-colors">
                  {conferenceData.organizer.telephone}
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Navigation Links (2.5 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-accent font-display">
              Summit Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-gold-light transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Newsletter Subscription & Communiqué (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-accent font-display">
              Executive Briefing & Communiqué
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Subscribe to receive verified ministerial agendas, policy resolution drafts, 
              and exclusive post-summit executive summaries direct from the Secretariat.
            </p>

            {newsletterStatus === 'success' ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-bold">Subscription Confirmed</p>
                  <p className="text-[11px] text-emerald-300">You will receive the Geneva Summit Dispatch.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter executive email address..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-navy-secondary/80 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="px-5 py-2.5 rounded-xl bg-gold-accent hover:bg-gold-light text-navy-deep font-bold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {newsletterError && (
                  <p className="text-[11px] text-rose-400 font-medium">{newsletterError}</p>
                )}
                <p className="text-[10px] text-slate-400">
                  Strictly confidential. No spam. One-click unsubscribe. [Placeholder Handler]
                </p>
              </form>
            )}

            {/* Social Media Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Official Channels:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={conferenceData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-gold-light hover:border-gold-accent/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={conferenceData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-gold-light hover:border-gold-accent/40 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={conferenceData.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-gold-light hover:border-gold-accent/40 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={conferenceData.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-gold-light hover:border-gold-accent/40 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left space-y-1">
            <p>
              &copy; {new Date().getFullYear()} {conferenceData.organizer.name}. All global rights reserved.
            </p>
            <p className="text-[10px] text-slate-500 font-mono">
              [Editable Configuration Notice: All dates, venues, faculty, and statistics are structured placeholders.]
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => openLegalModal('privacy')}
              className="hover:text-gold-light transition-colors"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => openLegalModal('terms')}
              className="hover:text-gold-light transition-colors"
            >
              Terms & Conditions
            </button>
            <span>&bull;</span>
            <button
              onClick={() => openLegalModal('conduct')}
              className="hover:text-gold-light transition-colors"
            >
              Code of Conduct
            </button>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-gold-accent hover:text-gold-light transition-colors"
              aria-label="Return to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 text-slate-800">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold-dark" />
                <h3 className="font-bold text-base text-navy-deep font-display">
                  {legalModal.title}
                </h3>
              </div>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-navy-deep transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {legalModal.content}
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl bg-navy-primary hover:bg-secondary-navy text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

