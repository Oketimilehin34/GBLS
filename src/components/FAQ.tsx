import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Mail, Search, Sparkles } from 'lucide-react';
import { faqData, FAQItem } from '../data/faq';
import { conferenceData } from '../data/conference';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Registration & Access',
    'Programme & Logistics',
    'Sponsorship & Media',
    'Travel & Accommodation'
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-surface-soft relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-primary/5 border border-navy-primary/10 text-navy-primary text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-gold-accent" />
            <span>Delegate Inquiries & Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-deep tracking-tight font-display mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-navy-primary to-gold-accent rounded-full mx-auto mb-6" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Essential information regarding delegate accreditation, bilateral scheduling, 
            hotel reservations, diplomatic protocol, and conference access.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions by keyword (e.g. visa, pass, dinner)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-primary/20 focus:border-navy-primary bg-white shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? 'bg-navy-primary text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-gold-accent/40"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-accent shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-navy-deep font-display">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-lg bg-surface-soft flex items-center justify-center shrink-0 text-navy-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-gold-accent/20 text-gold-dark' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5 border-l-2 border-gold-accent/50">
                      {faq.answer}
                    </p>
                    <div className="mt-3 pl-5 flex items-center gap-2 text-[10px] text-slate-400 uppercase font-mono">
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 text-slate-500">
              <p className="text-sm">No matching questions found for "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-2 text-xs font-bold text-navy-primary underline"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>

        {/* Further Assistance Card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-navy-primary to-secondary-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-gold-accent/20 border border-gold-accent/40 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-gold-accent" />
            </div>
            <div>
              <h4 className="text-base font-bold font-display">Have a bespoke protocol inquiry?</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Our Delegate Concierge is available to answer visa letters, private meeting suites, and accreditation inquiries.
              </p>
            </div>
          </div>
          <a
            href="mailto:summit-inquiries@iibea-summit.org"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-accent hover:bg-gold-light text-navy-deep font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            <Mail className="w-4 h-4 text-navy-deep" />
            <span>Contact Delegate Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
};

