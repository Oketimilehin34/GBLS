import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Building2, Globe2, Loader2 } from 'lucide-react';
import { conferenceData } from '../data/conference';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('General Inquiries');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  const departments = [
    'General Summit Inquiries',
    'Delegate Accreditation & Credentials',
    'Diplomatic Protocol & Bilateral Salons',
    'Corporate Sponsorship & Partnerships',
    'Press & Media Accreditation'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.trim())) {
      setError('Please provide a valid corporate email address.');
      return;
    }

    setStatus('loading');

    // Simulate mock submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus('success');
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setStatus('idle');
    setError(null);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-primary/5 border border-navy-primary/10 text-navy-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5 text-gold-accent" />
            <span>Summit Secretariat Liaison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-deep tracking-tight font-display mb-4">
            Connect With the Secretariat
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-navy-primary to-gold-accent rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our multilateral protocol and communications teams are available to assist with delegation visas, 
            ministerial greetings, bilateral meeting requests, and institutional sponsorships.
          </p>
        </div>

        {/* Two-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-surface-soft border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-navy-deep font-display uppercase tracking-wider">
                Official Summit Desks
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-navy-primary shrink-0">
                    <Mail className="w-4 h-4 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-deep">Delegate Accreditation Desk</p>
                    <a
                      href={`mailto:${conferenceData.organizer.email}`}
                      className="text-slate-600 hover:text-navy-primary underline"
                    >
                      {conferenceData.organizer.email}
                    </a>
                    <span className="block text-[10px] text-slate-400 mt-0.5">[Editable Placeholder]</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-navy-primary shrink-0">
                    <Phone className="w-4 h-4 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-deep">Geneva Secretariat Telephone</p>
                    <a
                      href={`tel:${conferenceData.organizer.telephone}`}
                      className="text-slate-600 hover:text-navy-primary"
                    >
                      {conferenceData.organizer.telephone}
                    </a>
                    <span className="block text-[10px] text-slate-400 mt-0.5">Mon–Fri: 08:30 – 18:00 CET</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-navy-primary shrink-0">
                    <Building2 className="w-4 h-4 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-deep">Secretariat Headquarters</p>
                    <p className="text-slate-600 leading-relaxed">
                      {conferenceData.organizer.address}
                    </p>
                    <span className="block text-[10px] text-slate-400 mt-0.5">[Editable Placeholder Address]</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-navy-primary shrink-0">
                    <ShieldCheck className="w-4 h-4 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-deep">Diplomatic Protocol & Security</p>
                    <a
                      href={`mailto:${conferenceData.organizer.mediaEmail}`}
                      className="text-slate-600 hover:text-navy-primary underline"
                    >
                      protocol@iibea-summit.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Protocol Notice Card */}
            <div className="p-5 rounded-2xl bg-navy-deep text-white border border-navy-border shadow-md">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-bold text-white uppercase tracking-wider">Protocol Response Guarantee</p>
                  <p className="text-slate-300 leading-relaxed">
                    Accredited sovereign missions and corporate partners receive formal response from the Executive Director’s office within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-surface-soft p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
            {status === 'success' ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-deep font-display">
                  Communication Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-navy-deep">{name}</strong>. Your message has been logged in the Secretariat queue under department: <strong className="text-navy-primary">{department}</strong>.
                </p>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-500 max-w-sm mx-auto">
                  [Simulated Mock Handler: In production, this dispatches via email API or connects to internal ticketing.]
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-navy-primary hover:bg-secondary-navy text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-navy-deep font-display mb-1">
                    Direct Inquiry Form
                  </h3>
                  <p className="text-xs text-slate-500">
                    Transmitted directly to the appropriate summit secretariat desk.
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. Kenji Takahashi"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-navy-primary focus:ring-2 focus:ring-navy-primary/20 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Corporate / Institutional Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="k.takahashi@institute.org"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-navy-primary focus:ring-2 focus:ring-navy-primary/20 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Select Corresponding Desk *
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-navy-primary focus:ring-2 focus:ring-navy-primary/20 bg-white"
                  >
                    {departments.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Inquiry Details *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details regarding your delegation size, bilateral scheduling requirements, or partnership interest..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-navy-primary focus:ring-2 focus:ring-navy-primary/20 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-navy-primary hover:bg-secondary-navy text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-gold-accent" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-gold-accent" />
                      <span>Transmit Dispatch to Secretariat</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

