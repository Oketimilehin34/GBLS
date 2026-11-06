import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe2, ShieldCheck } from 'lucide-react';
import { conferenceData } from '../data/conference';

interface NavbarProps {
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Objectives', href: '#objectives' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Programme', href: '#programme' },
    { name: 'Why Attend', href: '#why-attend' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Venue', href: '#venue' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      const currentScroll = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= currentScroll) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-deep/95 backdrop-blur-md shadow-xl border-b border-navy-border py-3.5'
          : 'bg-gradient-to-b from-navy-deep/90 via-navy-deep/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Organisation Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-gold-accent rounded-lg p-1"
            aria-label="Global Business Leadership Summit Home"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary-navy to-navy-primary border border-gold-accent/40 flex items-center justify-center shadow-md group-hover:border-gold-accent transition-colors">
              <Globe2 className="w-5 h-5 text-gold-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tight text-base sm:text-lg leading-tight group-hover:text-gold-light transition-colors">
                {conferenceData.shortName}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">
                Global Summit &bull; Geneva
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-navy-primary/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gold-accent text-navy-deep shadow-sm'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onRegisterClick}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-gold-accent via-gold-light to-gold-accent hover:from-gold-light hover:to-gold-accent text-navy-deep font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Register Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-navy-deep" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-accent"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold-accent" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-navy-deep border-b border-navy-border shadow-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gold-accent text-navy-deep font-semibold'
                      : 'text-slate-200 hover:bg-white/5 hover:text-gold-light'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-navy-border/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gold-accent hover:bg-gold-light text-navy-deep font-bold text-sm uppercase tracking-wider py-3 rounded-lg shadow-md transition-all"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Register for Conference</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

