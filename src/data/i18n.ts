export interface NavStrings {
  about: string;
  timeline: string;
  mars: string;
  contact: string;
}

export interface HeroStrings {
  role: string;
  description: string;
  exploreMars: string;
  contactBtn: string;
  creationStoryBtn: string;
  portraitPlaceholder: string;
}

export interface AboutStrings {
  heading: string;
  subheading: string;
  quoteTitle: string;
  quoteText: string;
  quoteAuthor: string;
  principlesHeading: string;
  factsHeading: string;
  currentRole: string;
  currentRoleValue: string;
  education: string;
  educationValue: string;
  school: string;
  schoolValue: string;
  born: string;
  bornValue: string;
  citizenship: string;
  languages: string;
  languagesValue: string;
  patentsLabel: string;
  patentsValue: string;
  manifestoHeading: string;
}

export interface TimelineStrings {
  heading: string;
  subheading: string;
  categoryEducation: string;
  categoryEngineering: string;
  categoryPatent: string;
  categoryCompany: string;
  categoryMilestone: string;
  ukIpoLabel: string;
}

export interface MarsStrings {
  heading: string;
  subheading: string;
  beganText: string;
  lead: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Desc: string;
  pillar4Title: string;
  pillar4Desc: string;
  officialSiteBtn: string;
  companySiteBtn: string;
  storyCardTitle: string;
  storyCardDesc: string;
  storyCardBtn: string;
}

export interface ContactStrings {
  heading: string;
  subheading: string;
  directTitle: string;
  directEmail: string;
  pressTitle: string;
  pressContact: string;
  telegramTitle: string;
  telegramHandle: string;
  companyTitle: string;
  copy: string;
  copied: string;
  sendEmail: string;
  openTelegram: string;
}

export interface FooterStrings {
  rights: string;
  legal: string;
  creationStoryLink: string;
}

export interface I18nDictionary {
  nav: NavStrings;
  hero: HeroStrings;
  about: AboutStrings;
  timeline: TimelineStrings;
  mars: MarsStrings;
  contact: ContactStrings;
  footer: FooterStrings;
}

export const i18nData: Record<'en' | 'ru', I18nDictionary> = {
  en: {
    nav: {
      about: 'About',
      timeline: 'Timeline',
      mars: 'M.A.R.S.',
      contact: 'Contact',
    },
    hero: {
      role: 'Founder & Director, M.A.R.S. COMPANION LLC | Systems Architect',
      description:
        'Independent technologist, software engineer, and systems architect researching offline artificial intelligence, edge computing architectures, and private human-machine interaction.',
      exploreMars: 'Explore M.A.R.S.',
      contactBtn: 'Contact',
      creationStoryBtn: 'Story of M.A.R.S. → sarkisian.site',
      portraitPlaceholder: 'Portrait',
    },
    about: {
      heading: 'About Me',
      subheading:
        'Systems architect of offline autonomous AI, engineer, and founder of M.A.R.S. Companion',
      quoteTitle: 'Architectural Philosophy',
      quoteText:
        '"Personal artificial intelligence must belong entirely to the individual, retain life continuity, and operate locally on sovereign hardware — without surrendering private life to foreign cloud services."',
      quoteAuthor: 'Aleksandr Sarkisian · Systems Architect of M.A.R.S.',
      principlesHeading: 'Engineering Principles',
      factsHeading: 'Key Information',
      currentRole: 'Current Role',
      currentRoleValue: 'Founder & Director, M.A.R.S. COMPANION LLC',
      education: 'Cadet Corps',
      educationValue:
        'Kronstadt Naval Military Cadet Corps named after Admiral Fyodor Fyodorovich Ushakov of the Ministry of Defence of the Russian Federation (2022–2026)',
      school: 'Early Education',
      schoolValue:
        'Lyceum No. 410 (Pushkin, Saint Petersburg, 2015–2022, Grades 1–7)',
      born: 'Born',
      bornValue: '14 May 2008',
      citizenship: 'Roots & Homeland',
      languages: 'Languages',
      languagesValue: 'English, Ukrainian, Russian',
      patentsLabel: 'Intellectual Property',
      patentsValue: '12 UK IPO patent applications',
      manifestoHeading: 'Biographical Narrative & Architectural Stance',
    },
    timeline: {
      heading: 'Timeline & Background',
      subheading:
        'Verified milestones in education, technology development, and incorporation.',
      categoryEducation: 'Education',
      categoryEngineering: 'Engineering',
      categoryPatent: 'Intellectual Property',
      categoryCompany: 'Incorporation',
      categoryMilestone: 'Milestone',
      ukIpoLabel: 'UK IPO Filings:',
    },
    mars: {
      heading: 'M.A.R.S. Companion',
      subheading: 'Mobile Autonomous Reasoning System',
      beganText: 'Development of M.A.R.S. Companion began in 2025.',
      lead: 'A personal voice AI companion running 100% locally on edge hardware. No cloud dependency. No serialized telemetry. Remembers everything. Belongs only to you.',
      pillar1Title: '100% Offline Autonomy',
      pillar1Desc:
        'Speech recognition, semantic memory retrieval, LLM reasoning, and neural voice synthesis run fully on-device without network connectivity.',
      pillar2Title: 'Sequential Resource Orchestration (SRO)',
      pillar2Desc:
        'Dynamic memory orchestration swapping neural models sequentially in and out of 4–8 GB RAM without blocking conversation flow.',
      pillar3Title: 'Persistent Semantic Memory',
      pillar3Desc:
        'Local associative memory graph synthesis retaining life context, personal facts, and long-term dialogue across months and years.',
      pillar4Title: 'Hardware-Bound Trust',
      pillar4Desc:
        'Cryptographic hardware anchoring and deterministic behavioral invariants guaranteeing verifiable privacy and user loyalty.',
      officialSiteBtn: 'teduza.com',
      companySiteBtn: 'company.teduza.com',
      storyCardTitle: 'Origin Story: How M.A.R.S. Was Born',
      storyCardDesc:
        'The comprehensive retrospective detailing the conception of M.A.R.S. in the cadet corps, loneliness reflections, and architectural genesis is published on the author’s website.',
      storyCardBtn: 'Read Creation Story on sarkisian.site',
    },
    contact: {
      heading: 'Contact & Official Credentials',
      subheading:
        'Direct communication channels and verified corporate credentials.',
      directTitle: 'Direct Inquiries',
      directEmail: 'contact@teduza.com',
      pressTitle: 'Press & Media Relations',
      pressContact: 'Kira Dudnik (Head of Communications)',
      telegramTitle: 'Official Telegram',
      telegramHandle: '@teduza',
      companyTitle: 'M.A.R.S. COMPANION LLC',
      copy: 'Copy',
      copied: 'Copied',
      sendEmail: 'Send Email',
      openTelegram: 'Open in Telegram',
    },
    footer: {
      rights: 'All rights reserved.',
      legal:
        'M.A.R.S. COMPANION LLC · Reg. 999.110.1603426 · Kapan, Syunik Province, Republic of Armenia',
      creationStoryLink: 'Creation of M.A.R.S. → sarkisian.site',
    },
  },

  ru: {
    nav: {
      about: 'Обо мне',
      timeline: 'Хронология',
      mars: 'M.A.R.S.',
      contact: 'Контакты',
    },
    hero: {
      role: 'Основатель и Директор M.A.R.S. COMPANION LLC | Системный архитектор',
      description:
        'Независимый технологический разработчик и системный архитектор, исследующий автономный локальный искусственный интеллект, периферийные вычисления и приватное взаимодействие человека и машины.',
      exploreMars: 'Узнать о M.A.R.S.',
      contactBtn: 'Контакты',
      creationStoryBtn: 'История создания Марса → sarkisian.site/ru',
      portraitPlaceholder: 'Фотография',
    },
    about: {
      heading: 'Обо мне',
      subheading:
        'Системный архитектор автономного ИИ, инженер и основатель M.A.R.S. Companion',
      quoteTitle: 'Философия архитектуры',
      quoteText:
        '«Персональный искусственный интеллект должен принадлежать исключительно человеку, помнить контекст его жизни, сохранять непрерывность диалога и функционировать локально — без передачи личного пространства в чужие облачные сервисы.»',
      quoteAuthor: 'Александр Саркисян · Системный архитектор M.A.R.S.',
      principlesHeading: 'Инженерные принципы',
      factsHeading: 'Ключевые данные',
      currentRole: 'Текущая должность',
      currentRoleValue: 'Основатель и Директор M.A.R.S. COMPANION LLC',
      education: 'Военно-морское образование',
      educationValue:
        'Кронштадтский морской кадетский военный корпус имени адмирала Фёдора Фёдоровича Ушакова Министерства обороны Российской Федерации (2022–2026)',
      school: 'Школьное образование',
      schoolValue:
        'Лицей № 410 (город Пушкин, Санкт-Петербург, 2015–2022, 1–7 классы)',
      born: 'Дата рождения',
      bornValue: '14 мая 2008 года',
      citizenship: 'Историческая родина',
      languages: 'Языки общения',
      languagesValue: 'Английский, Украинский, Русский',
      patentsLabel: 'Интеллектуальная собственность',
      patentsValue: '12 патентных заявок в UK IPO',
      manifestoHeading: 'Биографический очерк и профессиональный манифест',
    },
    timeline: {
      heading: 'Хронология и вехи',
      subheading:
        'Подтверждённые события в образовании, разработке технологий и регистрации компании.',
      categoryEducation: 'Образование',
      categoryEngineering: 'Разработка',
      categoryPatent: 'Интеллектуальная собственность',
      categoryCompany: 'Инкорпорация',
      categoryMilestone: 'Веха',
      ukIpoLabel: 'Заявки в UK IPO:',
    },
    mars: {
      heading: 'M.A.R.S. Companion',
      subheading: 'Mobile Autonomous Reasoning System',
      beganText: 'Разработка M.A.R.S. Companion началась в 2025 году.',
      lead: 'Персональный голосовой ИИ-компаньон, работающий на 100% локально на периферийном оборудовании. Без облаков. Без сбора телеметрии. Помнит всё. Принадлежит только вам.',
      pillar1Title: '100% Офлайн-автономность',
      pillar1Desc:
        'Распознавание речи, извлечение памяти, инференс языковой модели и синтез голоса выполняются полностью на устройстве без доступа к сети.',
      pillar2Title: 'Последовательная оркестрация (SRO)',
      pillar2Desc:
        'Динамическая диспетчеризация памяти, поочередно выгружающая и загружающая нейромодули в рамках 4–8 ГБ RAM.',
      pillar3Title: 'Долговременная семантическая память',
      pillar3Desc:
        'Локальный синтез графа ассоциативной памяти, сохраняющий факты и контекст взаимодействия на протяжении месяцев и лет.',
      pillar4Title: 'Аппаратно закреплённое доверие',
      pillar4Desc:
        'Физические границы доверия и детерминированные инварианты, гарантирующие абсолютную защиту персональных данных.',
      officialSiteBtn: 'teduza.com',
      companySiteBtn: 'company.teduza.com',
      storyCardTitle: 'История создания: как появился Марс',
      storyCardDesc:
        'Подробная летопись зарождения идеи в кадетском корпусе, размышлений об одиночестве и этапов становления суверенной архитектуры опубликована на сайте автора.',
      storyCardBtn: 'Читать историю на sarkisian.site/ru',
    },
    contact: {
      heading: 'Контакты и реквизиты',
      subheading:
        'Прямые каналы связи, пресс-служба и официальные регистрационные данные компании.',
      directTitle: 'Прямая связь',
      directEmail: 'contact@teduza.com',
      pressTitle: 'Пресс-служба',
      pressContact: 'Кира Дудник (пресс-секретарь)',
      telegramTitle: 'Официальный Telegram',
      telegramHandle: '@teduza',
      companyTitle: 'M.A.R.S. COMPANION LLC',
      copy: 'Копировать',
      copied: 'Скопировано',
      sendEmail: 'Написать письмо',
      openTelegram: 'Открыть в Telegram',
    },
    footer: {
      rights: 'Все права защищены.',
      legal:
        'M.A.R.S. COMPANION LLC · Рег. номер: 999.110.1603426 · г. Капан, Сюник, Республика Армения',
      creationStoryLink: 'История создания Марса → sarkisian.site/ru',
    },
  },
};
