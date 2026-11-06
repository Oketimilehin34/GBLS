import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Download, 
  Sparkles, 
  ArrowRight, 
  UserCheck, 
  FileCheck, 
  Calendar,
  Building,
  Mail,
  Globe2,
  RefreshCw
} from 'lucide-react';
import { conferenceData } from '../data/conference';

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  jobTitle: string;
  country: string;
  ticketCategory: 'Standard Delegate' | 'Business Executive' | 'VIP Delegate' | 'Corporate Group';
  notes?: string;
}

interface SubmittedDelegate extends RegistrationFormData {
  referenceId: string;
  submittedAt: string;
}

export const Registration: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    organisation: '',
    jobTitle: '',
    country: '',
    ticketCategory: 'Business Executive',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<SubmittedDelegate | null>(null);
  const [duplicateError, setDuplicateError] = useState<string | null>(null);

  // Maintain local history of submitted emails to prevent duplicate submissions on frontend
  const [submittedEmails, setSubmittedEmails] = useState<string[]>([]);

  const ticketTiers = [
    {
      category: 'Standard Delegate' as const,
      price: '€1,850',
      period: 'per delegate',
      description: 'Full access to all plenary sessions, exhibitions, and digital summit transcripts.',
      highlights: [
        'Access to 3-day plenary auditorium',
        'Official Summit Delegate bag & materials',
        'Exhibition hall & innovation pavilion pass',
        'Simultaneous translation headset'
      ]
    },
    {
      category: 'Business Executive' as const,
      price: '€2,950',
      period: 'per delegate',
      featured: true,
      badge: 'Most Popular',
      description: 'Comprehensive executive pass including B2B matchmaking salons and networking lunches.',
      highlights: [
        'All Standard Delegate entitlements',
        'Access to bilateral B2B matchmaking platform',
        'Daily executive networking luncheons',
        'Chatham House industry roundtables',
        'Invitation to Diplomatic Welcome Cocktail'
      ]
    },
    {
      category: 'VIP Delegate' as const,
      price: '€4,500',
      period: 'per delegate',
      badge: 'All-Inclusive',
      description: 'Exclusive sovereign and C-suite pass with diplomatic gala access and VIP lounge.',
      highlights: [
        'All Business Executive entitlements',
        'Private VIP Lounge & Concierge desk',
        'Reserved front-row plenary seating',
        'Seat at the Annual Diplomatic Gala Dinner',
        'Priority airport limousine chauffeur service'
      ]
    },
    {
      category: 'Corporate Group' as const,
      price: '€11,500',
      period: 'package (5 delegates)',
      badge: 'Delegation Package',
      description: 'Engineered for corporate leadership teams and sovereign trade delegations.',
      highlights: [
        '5 full Business Executive delegate passes',
        'Dedicated 2-hour private bilateral meeting salon',
        'Company logo listing in official printed programme',
        'Dedicated summit coordination account manager'
      ]
    }
  ];

  const countries = [
    'United States', 'United Kingdom', 'Switzerland', 'Germany', 'France',
    'United Arab Emirates', 'Singapore', 'Japan', 'Canada', 'Saudi Arabia',
    'Australia', 'Brazil', 'India', 'South Africa', 'Netherlands', 'Sweden',
    'Nigeria', 'Qatar', 'South Korea', 'Other International Delegation'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'Minimum 2 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Minimum 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!formData.organisation.trim()) {
      newErrors.organisation = 'Organisation or ministry name is required';
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Official job title is required';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Please select your country / delegation';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof RegistrationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setDuplicateError(null);
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Documented Mock Submission Handler (Prepared for REST/GraphQL API integration)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDuplicateError(null);

    if (!validateForm()) {
      return;
    }

    // Frontend duplicate submission check
    const normalizedEmail = formData.email.trim().toLowerCase();
    if (submittedEmails.includes(normalizedEmail)) {
      setDuplicateError(
        `A delegate registration has already been submitted for ${formData.email}. To modify or add delegation members, contact the Secretariat.`
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate realistic API network roundtrip (1200ms)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const generatedReference = `GBLS-2027-${randomSuffix}`;

      const successfulRecord: SubmittedDelegate = {
        ...formData,
        referenceId: generatedReference,
        submittedAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setSubmittedEmails((prev) => [...prev, normalizedEmail]);
      setSubmissionSuccess(successfulRecord);
    } catch {
      setDuplicateError('An unexpected network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForAnother = () => {
    setSubmissionSuccess(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      organisation: '',
      jobTitle: '',
      country: '',
      ticketCategory: 'Business Executive',
      notes: '',
    });
    setErrors({});
    setDuplicateError(null);
  };

  return (
    <section id="registration" className="py-24 bg-surface-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-primary/5 border border-navy-primary/10 text-navy-primary text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-accent" />
            <span>Delegate Accreditation & Registration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-deep tracking-tight font-display mb-4">
            Be Part of the Global Conversation.
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-navy-primary to-gold-accent rounded-full mx-auto mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Secure your place among the leaders shaping the future of international business. 
            All submissions are reviewed by the summit credentials committee to ensure highest-calibre multilateral dialogue.
          </p>
        </div>

        {/* Tier Cards Selector */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Select Your Accreditation Category
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ticketTiers.map((tier) => {
              const isSelected = formData.ticketCategory === tier.category;
              return (
                <div
                  key={tier.category}
                  onClick={() => handleInputChange('ticketCategory', tier.category)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative ${
                    isSelected
                      ? 'bg-navy-deep text-white shadow-2xl border-2 border-gold-accent ring-2 ring-gold-accent/20 transform -translate-y-1'
                      : 'bg-white text-navy-deep border border-slate-200/90 hover:border-navy-primary/30 hover:shadow-md'
                  }`}
                >
                  {tier.badge && (
                    <span
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                        tier.featured
                          ? 'bg-gold-accent text-navy-deep'
                          : 'bg-navy-primary text-white border border-white/20'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  )}

                  <div>
                    <h3 className={`text-base font-bold font-display ${isSelected ? 'text-white' : 'text-navy-deep'}`}>
                      {tier.category}
                    </h3>

                    <div className="mt-3 mb-2 flex items-baseline gap-1">
                      <span className={`text-3xl font-extrabold font-display ${isSelected ? 'text-gold-light' : 'text-navy-deep'}`}>
                        {tier.price}
                      </span>
                      <span className={`text-[11px] ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {tier.period}
                      </span>
                    </div>

                    <p className={`text-xs mt-2 mb-4 leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {tier.description}
                    </p>

                    <div className={`pt-4 border-t space-y-2 text-xs ${isSelected ? 'border-white/10' : 'border-slate-100'}`}>
                      {tier.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                              isSelected ? 'text-gold-accent' : 'text-navy-primary'
                            }`}
                          />
                          <span className={isSelected ? 'text-slate-200' : 'text-slate-600'}>
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100/10">
                    <button
                      type="button"
                      className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                        isSelected
                          ? 'bg-gold-accent text-navy-deep'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {isSelected ? 'Selected Category' : 'Select Category'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Registration Form / Success View Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          {submissionSuccess ? (
            /* Success State with Credential Certificate View */
            <div className="p-8 sm:p-12 text-center animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-emerald-50 border-2 border-emerald-500/20 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <FileCheck className="w-10 h-10" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                Accreditation Application Submitted
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-deep font-display mb-3">
                Welcome to GBLS 2027, {submissionSuccess.firstName}!
              </h3>

              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed mb-8">
                Your delegate accreditation request has been registered in the summit protocol registry. 
                Our credentials committee will verify your submission within 24 to 48 business hours.
              </p>

              {/* Delegate Voucher Summary Card */}
              <div className="p-6 rounded-2xl bg-surface-soft border border-slate-200 text-left max-w-md mx-auto space-y-3 mb-8">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 text-xs">
                  <span className="text-slate-500 font-medium">Delegate Reference</span>
                  <span className="font-mono font-bold text-navy-primary bg-white px-2.5 py-1 rounded border border-slate-200 text-sm">
                    {submissionSuccess.referenceId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 block">Delegate</span>
                    <span className="font-bold text-navy-deep">{submissionSuccess.firstName} {submissionSuccess.lastName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Category</span>
                    <span className="font-bold text-gold-dark">{submissionSuccess.ticketCategory}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Organisation</span>
                    <span className="font-bold text-navy-deep">{submissionSuccess.organisation}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Country</span>
                    <span className="font-bold text-navy-deep">{submissionSuccess.country}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                  <span>Convenes: {conferenceData.displayDates} &bull; Geneva, Switzerland</span>
                </div>
              </div>

              {/* Simulated Notification Box */}
              <div className="p-4 rounded-xl bg-surface-lightblue/70 border border-navy-border/20 text-xs text-navy-deep mb-8 max-w-lg mx-auto">
                <strong>Frontend Handler Disclosure:</strong> This demonstrates the full end-to-end user registration lifecycle. 
                In production, this hook seamlessly connects to your CRM, payment gateway (e.g. Stripe/Adyen), or delegate registry database.
              </div>

              {/* Success CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleResetForAnother}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-primary hover:bg-secondary-navy text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Register Another Delegate</span>
                </button>

                <a
                  href="#programme"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Review Programme Agenda</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            /* Live Registration Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-navy-deep font-display">
                  Official Delegate Application Form
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Selected Category: <strong className="text-navy-primary font-bold">{formData.ticketCategory}</strong>. 
                  All fields marked with an asterisk (<span className="text-rose-500">*</span>) are mandatory.
                </p>
              </div>

              {duplicateError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-xs">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Registration Alert</strong>
                    <span>{duplicateError}</span>
                  </div>
                </div>
              )}

              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="reg-firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="reg-firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="e.g. Marcus"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
                      errors.firstName
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-300 focus:border-navy-primary focus:ring-navy-primary/20 bg-slate-50/50'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="reg-lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Last Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="reg-lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="e.g. Sterling"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
                      errors.lastName
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-300 focus:border-navy-primary focus:ring-navy-primary/20 bg-slate-50/50'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Corporate Email */}
              <div>
                <label htmlFor="reg-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Corporate / Institutional Email <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="m.sterling@crossborderventures.com"
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
                      errors.email
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-300 focus:border-navy-primary focus:ring-navy-primary/20 bg-slate-50/50'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.email}</p>
                )}
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Official summit credentials and encrypted registration QR will be dispatched here.
                </span>
              </div>

              {/* Organisation and Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="reg-organisation" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Organisation / Ministry <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="reg-organisation"
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => handleInputChange('organisation', e.target.value)}
                      placeholder="e.g. Sovereign Wealth Authority"
                      className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
                        errors.organisation
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                          : 'border-slate-300 focus:border-navy-primary focus:ring-navy-primary/20 bg-slate-50/50'
                      }`}
                    />
                  </div>
                  {errors.organisation && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.organisation}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="reg-jobTitle" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Official Job Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="reg-jobTitle"
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    placeholder="e.g. Managing Director & CIO"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
                      errors.jobTitle
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-300 focus:border-navy-primary focus:ring-navy-primary/20 bg-slate-50/50'
                    }`}
                  />
                  {errors.jobTitle && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.jobTitle}</p>
                  )}
                </div>
              </div>

              {/* Country Selection */}
              <div>
                <label htmlFor="reg-country" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Country / Delegation Representation <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Globe2 className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    id="reg-country"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 appearance-none bg-slate-50/50 transition-colors ${
                      errors.country
                        ? 'border-rose-400 focus:ring-rose-200'
                        : 'border-slate-300 focus:border-navy-primary focus:ring-navy-primary/20'
                    }`}
                  >
                    <option value="">Select Delegation Country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                {errors.country && (
                  <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.country}</p>
                )}
              </div>

              {/* Bilateral / Special Requirements (Optional) */}
              <div>
                <label htmlFor="reg-notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Bilateral Interest or Dietary / Protocol Requirements (Optional)
                </label>
                <textarea
                  id="reg-notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Note specific bilateral focus, sovereign meeting interests, or diplomatic protocol requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-navy-primary focus:ring-2 focus:ring-navy-primary/20 bg-slate-50/50"
                />
              </div>

              {/* Submit CTA & Security Notice */}
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-gold-accent via-gold-light to-gold-accent hover:from-gold-light hover:to-gold-accent text-navy-deep font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg hover:shadow-gold-glow transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-navy-deep" />
                      <span>Transmitting Credentials to Secretariat...</span>
                    </>
                  ) : (
                    <>
                      <UserCheck className="w-4 h-4 text-navy-deep" />
                      <span>Submit Accreditation Application</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                  By submitting, your data is processed under Swiss Federal Data Protection and European GDPR regulations. 
                  Registration includes diplomatic badge printing and session security clearance.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

