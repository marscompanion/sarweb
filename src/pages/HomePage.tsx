import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowRight,
  Check,
  Copy,
  Cpu,
  ExternalLink,
  HardDrive,
  Lock,
  Quote,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { db, getString, t, lang, setSelectedPatent } = useApp();
  const person = db.person;
  const org = db.organization;
  const product = db.product;
  const press = db.pressSecretary;

  const [copiedText, setCopiedText] = useState<string | null>(null);

  const displayName = lang === 'ru' ? person.russianFullName : person.internationalName;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handlePatentClick = (patNum: string) => {
    const found = db.ipRecords.find((p) => p.applicationNumber === patNum);
    if (found) {
      setSelectedPatent(found);
    } else {
      window.open(`https://www.search-for-intellectual-property.service.gov.uk/${patNum}`, '_blank');
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. HERO SECTION */}
      <section id="hero" className="pt-2 sm:pt-4 pb-6 sm:pb-8 border-b border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <div className="order-2 md:order-1 md:col-span-8 space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white leading-tight break-words">
                {displayName}
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-[#d97f3d] font-normal leading-snug">
                {t.hero.role}
              </p>
            </div>

            <p className="text-xs sm:text-sm lg:text-base text-[#9c978f] leading-relaxed max-w-2xl font-normal">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('#mars')}
                className="px-5 py-2.5 bg-[#c1440e] hover:bg-[#d97f3d] text-white text-xs sm:text-sm font-medium rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>{t.hero.exploreMars}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="px-5 py-2.5 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] text-xs sm:text-sm text-[#eae7e1] hover:text-white rounded-lg transition-colors font-medium text-center"
              >
                {t.hero.contactBtn}
              </button>

              {/* Dedicated Link to sarkisian.site (Story of Creation) */}
              <a
                href={lang === 'ru' ? 'https://sarkisian.site/ru/' : 'https://sarkisian.site/'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#d97f3d]/15 hover:bg-[#d97f3d]/25 border border-[#d97f3d]/40 hover:border-[#d97f3d] text-[#d97f3d] hover:text-white text-xs sm:text-sm font-medium rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>{t.hero.creationStoryBtn}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-80" />
              </a>
            </div>
          </div>

          {/* Right Column: Round Portrait with Status */}
          <div className="order-1 md:order-2 md:col-span-4 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-b from-[#d97f3d]/60 via-white/10 to-white/5 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0d1017] border-2 border-white/[0.15] relative shadow-inner group">
                <img
                  src="/portrait.jpg"
                  alt={displayName}
                  className="w-full h-full object-cover object-[center_16%] transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.dataset.fallbackTried) {
                      img.dataset.fallbackTried = 'true';
                      img.src = '/portrait.svg';
                    }
                  }}
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#9c978f]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>{lang === 'ru' ? person.russianName : person.internationalName}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="space-y-8">
        <div className="space-y-2 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-serif text-white">
            {t.about.heading}
          </h2>
          <p className="text-xs sm:text-sm text-[#9c978f]">
            {t.about.subheading}
          </p>
        </div>

        <div className="space-y-6">
          {/* Quote Card */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#131722] via-[#0f121a] to-[#0a0d13] border border-white/[0.09] shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#d97f3d] via-[#c1440e] to-[#d97f3d]/30" />
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex shrink-0 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#d97f3d]">
                <Quote className="w-5 h-5 rotate-180" />
              </div>
              <div className="space-y-3">
                <blockquote className="font-sans text-base sm:text-lg text-[#f3f1ed] font-medium leading-relaxed tracking-normal">
                  {t.about.quoteText}
                </blockquote>
                <div className="flex items-center gap-2 pt-1 text-xs font-mono text-[#9c978f]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d97f3d]" />
                  <span>{t.about.quoteAuthor}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Chapters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {person.bioChapters.map((chapter, idx) => (
              <div
                key={chapter.id}
                className="p-5 sm:p-6 bg-[#10131d] border border-white/[0.08] rounded-2xl space-y-3 hover:border-white/[0.14] transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-[#d97f3d] bg-white/[0.04] border border-white/[0.08]">
                      {getString(chapter.tag)}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6b665f]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">
                    {getString(chapter.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9c978f] leading-relaxed">
                    {getString(chapter.content)}
                  </p>
                </div>

                {chapter.id === 'companion-idea' && (
                  <div className="pt-2">
                    <a
                      href={lang === 'ru' ? 'https://sarkisian.site/ru/' : 'https://sarkisian.site/'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#d97f3d] hover:text-[#eae7e1] transition-colors font-mono"
                    >
                      <span>
                        {lang === 'ru' ? 'История создания на sarkisian.site/ru' : 'Creation story on sarkisian.site'}
                      </span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Full Biographical Narrative */}
          <div className="p-6 sm:p-7 bg-[#10131d] border border-white/[0.08] rounded-2xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97f3d]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider font-mono text-[#eae7e1]">
                {t.about.manifestoHeading}
              </h3>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#9c978f] leading-relaxed">
              {getString(person.bioFull)
                .split('\n\n')
                .map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-[#eae7e1]/90">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {/* Facts & Engineering Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Information */}
          <div className="p-6 bg-[#10131d] border border-white/[0.08] rounded-2xl space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider font-mono text-[#d97f3d] mb-4">
                {t.about.factsHeading}
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex flex-col py-2 border-b border-white/[0.05] space-y-1">
                  <span className="text-[#6b665f] font-mono text-[11px] uppercase tracking-wider">
                    {t.about.currentRole}
                  </span>
                  <span className="text-white font-medium leading-snug">
                    {t.about.currentRoleValue}
                  </span>
                </div>

                <div className="flex flex-col py-2 border-b border-white/[0.05] space-y-1">
                  <span className="text-[#6b665f] font-mono text-[11px] uppercase tracking-wider">
                    {t.about.education}
                  </span>
                  <span className="text-white font-medium leading-snug">
                    {t.about.educationValue}
                  </span>
                </div>

                <div className="flex flex-col py-2 border-b border-white/[0.05] space-y-1">
                  <span className="text-[#6b665f] font-mono text-[11px] uppercase tracking-wider">
                    {t.about.school}
                  </span>
                  <span className="text-white font-medium leading-snug">
                    {t.about.schoolValue}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b border-white/[0.05] gap-1">
                  <span className="text-[#6b665f] font-mono text-[11px] uppercase tracking-wider shrink-0">
                    {t.about.born}
                  </span>
                  <span className="text-white font-medium">
                    {t.about.bornValue}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-2 border-b border-white/[0.05] gap-1">
                  <span className="text-[#6b665f] font-mono text-[11px] uppercase tracking-wider shrink-0">
                    {t.about.citizenship}
                  </span>
                  <span className="text-white sm:text-right">
                    {getString(person.citizenshipRegion)}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b border-white/[0.05] gap-1">
                  <span className="text-[#6b665f] font-mono text-[11px] uppercase tracking-wider shrink-0">
                    {t.about.languages}
                  </span>
                  <span className="text-white font-medium">
                    {t.about.languagesValue}
                  </span>
                </div>

                <div className="flex flex-col py-2 space-y-1">
                  <span className="text-[#6b665f] font-mono text-[11px] uppercase tracking-wider">
                    {t.about.patentsLabel}
                  </span>
                  <span className="text-[#d97f3d] font-mono font-medium text-xs sm:text-sm">
                    {t.about.patentsValue}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Engineering Principles */}
          <div className="p-6 bg-[#10131d] border border-white/[0.08] rounded-2xl space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider font-mono text-[#d97f3d]">
              {t.about.principlesHeading}
            </h3>
            <div className="space-y-4 text-xs">
              {org.principles.map((pr) => (
                <div
                  key={pr.id}
                  className="space-y-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                >
                  <div className="font-medium text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97f3d]" />
                    <span>{getString(pr.title)}</span>
                  </div>
                  <div className="text-[#9c978f] leading-relaxed pl-3.5">
                    {getString(pr.description)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TIMELINE & BACKGROUND SECTION (With 12 Patents & Now Expansion) */}
      <section id="timeline" className="space-y-6">
        <div className="space-y-2 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-serif text-white">
            {t.timeline.heading}
          </h2>
          <p className="text-xs sm:text-sm text-[#9c978f]">
            {t.timeline.subheading}
          </p>
        </div>

        <div className="relative pl-5 sm:pl-8 border-l border-white/[0.12] space-y-5 sm:space-y-8">
          {db.timelineEvents.map((evt) => (
            <div key={evt.id} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[27px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-[#d97f3d] border-2 border-[#0a0c10]" />

              <div className="p-4 sm:p-6 bg-[#10131d] border border-white/[0.08] rounded-xl space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                  <span className="self-start px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.06] text-[#d97f3d] border border-white/[0.06]">
                    {evt.period ? getString(evt.period) : (typeof evt.date === 'string' ? evt.date : getString(evt.date))}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#6b665f] font-mono uppercase tracking-wider">
                    {evt.category === 'education' && t.timeline.categoryEducation}
                    {evt.category === 'technology' && t.timeline.categoryEngineering}
                    {evt.category === 'patent' && t.timeline.categoryPatent}
                    {evt.category === 'company' && t.timeline.categoryCompany}
                    {evt.category === 'milestone' && t.timeline.categoryMilestone}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {getString(evt.title)}
                </h3>
                <p className="text-xs sm:text-sm text-[#9c978f] leading-relaxed">
                  {getString(evt.description)}
                </p>

                {/* Related UK IPO Patents (All in English) */}
                {evt.relatedPatents && evt.relatedPatents.length > 0 && (
                  <div className="pt-2 border-t border-white/[0.05] space-y-2">
                    <div className="text-[11px] font-mono text-[#6b665f]">
                      {t.timeline.ukIpoLabel}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {evt.relatedPatents.map((patNum) => (
                        <button
                          key={patNum}
                          type="button"
                          onClick={() => handlePatentClick(patNum)}
                          className="px-2 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[11px] font-mono text-[#eae7e1] hover:text-[#d97f3d] transition-colors inline-flex items-center gap-1 cursor-pointer"
                          title="View patent specification"
                        >
                          <span>{patNum}</span>
                          <ExternalLink className="w-2.5 h-2.5 text-[#6b665f]" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* External link */}
                {evt.externalLink && !evt.relatedPatents?.length && (
                  <div className="pt-1">
                    <a
                      href={evt.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#d97f3d] hover:text-[#eae7e1] transition-colors font-mono"
                    >
                      <span>{evt.externalLink.replace('https://', '').replace(/\/$/, '')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. M.A.R.S. COMPANION SECTION */}
      <section id="mars" className="space-y-6">
        <div className="p-5 sm:p-10 bg-gradient-to-b from-[#131722] to-[#0e1118] border border-white/[0.1] rounded-2xl sm:rounded-3xl space-y-6 shadow-xl">
          <div className="space-y-3 max-w-3xl">
            <div className="text-xs font-mono uppercase text-[#d97f3d] tracking-wider">
              {product.acronym}
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-white">
              {product.name}
            </h2>
            <div className="inline-block px-3 py-1 rounded bg-[#c1440e]/20 border border-[#c1440e]/30 text-xs font-mono text-[#d97f3d]">
              {t.mars.beganText}
            </div>
            <p className="text-xs sm:text-sm text-[#9c978f] leading-relaxed">
              {t.mars.lead}
            </p>
          </div>

          {/* 4 Technical Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
            <div className="p-5 bg-[#090b10] border border-white/[0.06] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <Lock className="w-4 h-4 text-[#d97f3d]" />
                <span>{t.mars.pillar1Title}</span>
              </div>
              <p className="text-xs text-[#9c978f] leading-relaxed">
                {t.mars.pillar1Desc}
              </p>
            </div>

            <div className="p-5 bg-[#090b10] border border-white/[0.06] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <Cpu className="w-4 h-4 text-[#d97f3d]" />
                <span>{t.mars.pillar2Title}</span>
              </div>
              <p className="text-xs text-[#9c978f] leading-relaxed">
                {t.mars.pillar2Desc}
              </p>
            </div>

            <div className="p-5 bg-[#090b10] border border-white/[0.06] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <HardDrive className="w-4 h-4 text-[#d97f3d]" />
                <span>{t.mars.pillar3Title}</span>
              </div>
              <p className="text-xs text-[#9c978f] leading-relaxed">
                {t.mars.pillar3Desc}
              </p>
            </div>

            <div className="p-5 bg-[#090b10] border border-white/[0.06] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <ShieldCheck className="w-4 h-4 text-[#d97f3d]" />
                <span>{t.mars.pillar4Title}</span>
              </div>
              <p className="text-xs text-[#9c978f] leading-relaxed">
                {t.mars.pillar4Desc}
              </p>
            </div>
          </div>

          {/* Dedicated Genesis Card */}
          <div className="p-5 sm:p-6 bg-gradient-to-r from-[#1c1822] via-[#141824] to-[#0f121a] border border-[#d97f3d]/30 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
            <div className="space-y-1.5 max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#d97f3d] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>{t.mars.storyCardTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#eae7e1]/90 leading-relaxed">
                {t.mars.storyCardDesc}
              </p>
            </div>
            <a
              href={lang === 'ru' ? 'https://sarkisian.site/ru/' : 'https://sarkisian.site/'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#c1440e] hover:bg-[#d97f3d] text-white text-xs sm:text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-2 shrink-0 shadow-md"
            >
              <span>{t.mars.storyCardBtn}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Links */}
          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
            <a
              href={product.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#c1440e] hover:bg-[#d97f3d] text-white text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span>{t.mars.officialSiteBtn}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={org.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span>{t.mars.companySiteBtn}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. CONTACT & CREDENTIALS SECTION */}
      <section id="contact" className="space-y-6">
        <div className="space-y-2 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-serif text-white">
            {t.contact.heading}
          </h2>
          <p className="text-xs sm:text-sm text-[#9c978f]">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Direct Communication */}
          <div className="p-5 sm:p-6 bg-[#10131d] border border-white/[0.08] rounded-2xl flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-white">
                {t.contact.directTitle}
              </h3>
              <p className="text-xs text-[#9c978f]">contact@teduza.com</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href="mailto:contact@teduza.com"
                className="flex-1 sm:flex-none text-center px-4 py-2 bg-[#c1440e] hover:bg-[#d97f3d] text-white text-xs font-medium rounded-lg transition-colors"
              >
                {t.contact.sendEmail}
              </a>
              <button
                type="button"
                onClick={() => handleCopy('contact@teduza.com')}
                className="px-3 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs rounded-lg transition-colors inline-flex items-center justify-center gap-1 font-mono shrink-0"
              >
                {copiedText === 'contact@teduza.com' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.contact.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.contact.copy}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Press Secretary */}
          <div className="p-5 sm:p-6 bg-[#10131d] border border-white/[0.08] rounded-2xl flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-white">
                {t.contact.pressTitle}
              </h3>
              <p className="text-xs text-[#9c978f] break-words">
                {getString(press.name)} · {press.email}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={`mailto:${press.email}`}
                className="flex-1 sm:flex-none text-center px-4 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-medium rounded-lg transition-colors"
              >
                {t.contact.sendEmail}
              </a>
              <button
                type="button"
                onClick={() => handleCopy(press.email)}
                className="px-3 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs rounded-lg transition-colors inline-flex items-center justify-center gap-1 font-mono shrink-0"
              >
                {copiedText === press.email ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.contact.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.contact.copy}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Official Telegram */}
          <div className="p-5 sm:p-6 bg-[#10131d] border border-white/[0.08] rounded-2xl flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-white">
                {t.contact.telegramTitle}
              </h3>
              <p className="text-xs text-[#9c978f] font-mono">@teduza</p>
            </div>

            <div className="pt-2">
              <a
                href="https://t.me/teduza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-medium rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>{t.contact.openTelegram}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Corporate Legal Entity Card */}
          <div className="p-5 sm:p-6 bg-[#10131d] border border-white/[0.08] rounded-2xl space-y-2 text-xs font-mono sm:col-span-2 lg:col-span-3 break-words">
            <h3 className="text-sm font-semibold text-white font-sans">
              {org.name}
            </h3>
            <div className="text-[#9c978f]">{org.armenianName}</div>
            <div className="text-[#6b665f] pt-1">
              Reg. {org.registrationNumber} · TIN {org.taxId}
            </div>
            <div className="text-[#6b665f]">
              {getString(org.location)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
