import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { lang, setLang, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.timeline, href: '#timeline' },
    { label: t.nav.mars, href: '#mars' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0c10]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
            className="flex items-center gap-2 group text-left min-w-0"
          >
            <span className="text-base sm:text-lg font-mono font-bold tracking-tight text-white group-hover:text-[#d97f3d] transition-colors shrink-0">
              teduza
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="px-3 py-1.5 text-xs lg:text-sm font-normal text-[#9c978f] hover:text-white hover:bg-white/[0.04] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Real Navigation Language Switcher & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center p-0.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-xs font-mono">
              <a
                href="/"
                onClick={() => {
                  try {
                    localStorage.setItem('sarkisian_lang', 'en');
                  } catch {}
                }}
                className={`px-2.5 py-1 rounded transition-colors ${
                  lang === 'en'
                    ? 'bg-[#c1440e] text-white font-medium shadow-sm'
                    : 'text-[#9c978f] hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </a>
              <a
                href="/ru/"
                onClick={() => {
                  try {
                    localStorage.setItem('sarkisian_lang', 'ru');
                  } catch {}
                }}
                className={`px-2.5 py-1 rounded transition-colors ${
                  lang === 'ru'
                    ? 'bg-[#c1440e] text-white font-medium shadow-sm'
                    : 'text-[#9c978f] hover:text-white'
                }`}
                aria-label="Переключить на русский"
              >
                RU
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#9c978f] hover:text-white hover:bg-white/[0.06] rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1017] border-b border-white/[0.08] px-4 pt-2 pb-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="block px-3 py-2 text-sm text-[#eae7e1] hover:text-white hover:bg-white/[0.04] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between px-3">
            <span className="text-xs text-[#9c978f] font-mono">Language:</span>
            <div className="flex gap-2">
              <a
                href="/"
                onClick={() => {
                  try {
                    localStorage.setItem('sarkisian_lang', 'en');
                  } catch {}
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1 rounded text-xs font-mono font-medium ${
                  lang === 'en'
                    ? 'bg-[#c1440e] text-white'
                    : 'bg-white/[0.06] text-[#9c978f] hover:text-white'
                }`}
              >
                EN
              </a>
              <a
                href="/ru/"
                onClick={() => {
                  try {
                    localStorage.setItem('sarkisian_lang', 'ru');
                  } catch {}
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1 rounded text-xs font-mono font-medium ${
                  lang === 'ru'
                    ? 'bg-[#c1440e] text-white'
                    : 'bg-white/[0.06] text-[#9c978f] hover:text-white'
                }`}
              >
                RU
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
