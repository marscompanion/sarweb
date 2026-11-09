export interface LocalizedString {
  en: string;
  ru: string;
}

export interface BioChapter {
  id: string;
  title: LocalizedString;
  tag: LocalizedString;
  content: LocalizedString;
}

export interface Principle {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface IPRecord {
  id: string;
  applicationNumber: string;
  title: string; // Official English title as filed at UK IPO
  filingDate: string;
  filingDateIso: string;
  status: 'Filed' | 'Published' | 'Granted';
  ownershipType: 'company_owned' | 'licensed';
  applicant: string;
  inventor: string;
  jurisdiction: string;
  officialRegistryUrl: string;
  wikidataId?: string;
  abstract: string; // Official English abstract
  tags: string[];
}

export interface TimelineEvent {
  id: string;
  date?: LocalizedString | string;
  period?: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  category: 'education' | 'technology' | 'patent' | 'company' | 'milestone';
  relatedPatents?: string[];
  externalLink?: string;
}

export interface SiteData {
  person: {
    id: string;
    internationalName: string;
    russianName: string;
    russianFullName: string;
    dateOfBirth: string;
    wikidataId: string;
    googleKnowledgeGraphId: string;
    alias: string;
    primaryRole: LocalizedString;
    bioShort: LocalizedString;
    bioFull: LocalizedString;
    bioChapters: BioChapter[];
    alternateNames: string[];
    citizenshipRegion: LocalizedString;
    languages: LocalizedString;
  };
  organization: {
    id: string;
    name: string;
    armenianName: string;
    registrationNumber: string;
    taxId: string;
    foundingDate: string;
    jurisdiction: LocalizedString;
    location: LocalizedString;
    website: string;
    productWebsite: string;
    wikidataId: string;
    founder: string;
    principles: Principle[];
  };
  product: {
    id: string;
    name: string;
    acronym: string;
    tagline: LocalizedString;
    officialUrl: string;
    wikidataId: string;
    creationStoryUrl: LocalizedString;
  };
  ipRecords: IPRecord[];
  timelineEvents: TimelineEvent[];
  pressSecretary: {
    name: LocalizedString;
    role: LocalizedString;
    email: string;
    wikidataId: string;
  };
}

export const siteData: SiteData = {
  person: {
    id: 'person-aleksandr-sarkisian',
    internationalName: 'Aleksandr Sarkisian (Sargsyan)',
    russianName: 'Александр Саркисян (Саргсян)',
    russianFullName: 'Саркисян Александр Давидович',
    dateOfBirth: '2008-05-14',
    wikidataId: 'Q141447666',
    googleKnowledgeGraphId: '/g/11zyrqjbq9',
    alias: 'teduza',
    primaryRole: {
      en: 'Founder & Director, M.A.R.S. COMPANION LLC | Systems Architect',
      ru: 'Основатель и Директор M.A.R.S. COMPANION LLC | Системный архитектор',
    },
    bioShort: {
      en: 'Founder & Director of M.A.R.S. COMPANION LLC, software engineer, and systems architect researching sovereign offline artificial intelligence, edge computing architectures, and private human-machine interaction.',
      ru: 'Основатель и Директор M.A.R.S. COMPANION LLC, инженер-разработчик и системный архитектор, создающий суверенный автономный искусственный интеллект и приватные вычислительные системы.',
    },
    bioFull: {
      en: `I am Aleksandr Sarkisian, founder and Director of M.A.R.S. COMPANION LLC, and the systems architect behind the sovereign offline artificial intelligence M.A.R.S. Companion.

From early childhood, my core aspiration was to become a physician — dedicating my life to medicine. On 1 September 2015, I entered Lyceum No. 410 in the town of Pushkin (Saint Petersburg). In grades 5–7, I attended classes in programming and robotics; it was not a calculated engineering roadmap and did not yet establish full systems mastery, but it firmly left its mark on my mind. In late May 2022, I completed the 7th grade. Admission to the cadet corps had already been planned prior to finishing 7th grade to prepare for the S.M. Kirov Military Medical Academy, and in August 2022 I enrolled in the 8th grade at the Kronstadt Naval Military Cadet Corps of the Ministry of Defence.

During my years of study in the cadet corps, my professional priorities underwent a decisive evolution. Seeing the operational environment firsthand, I realized that my genuine vocation was not in military service or institutional medicine, but in independent technology, cybernetics, and computer architecture. Having entered under prior intentions, I completed my full secondary education, while redirecting all intellectual energy toward systems engineering. In June 2026, upon graduating, I left military career paths behind to pursue civil engineering and build autonomous intelligence.

In July 2026, I relocated to Kapan, Syunik Province, Republic of Armenia — the homeland of my father. In August 2026, I incorporated M.A.R.S. COMPANION LLC to establish an independent research laboratory for sovereign, private edge intelligence.`,
      ru: `Я — Александр Саркисян, основатель и генеральный директор компании M.A.R.S. COMPANION LLC, системный архитектор суверенного автономного искусственного интеллекта M.A.R.S. Companion.

С раннего детства моей главной целью было стать врачом и связать жизнь с медициной. 1 сентября 2015 года я поступил в 1 класс Лицея № 410 города Пушкин (Санкт-Петербург). В 5–7 классах я посещал занятия по программированию и робототехнике — это ещё не было осознанным выбором инженерии и не давало глубокого понимания систем, но прочно закрепилось в моём сознании. В конце мая 2022 года я окончил 7 класс. Поступление в кадетский корпус планировалось ещё до окончания 7 класса с прицелом на подготовку к Военно-медицинской академии им. С.М. Кирова, и в августе 2022 года я поступил в 8 класс Кронштадтского морского кадетского военного корпуса Министерства обороны РФ.

За годы учёбы в кадетском корпусе моё призвание претерпело решающую эволюцию. Познакомившись с организационной средой изнутри, я понял, что моё истинное предназначение — не военная служба и не институциональная медицина, а независимая технологическая разработка, кибернетика и системная архитектура. Поступив по прежним планам, я получил полное среднее образование, одновременно направив все интеллектуальные ресурсы на системное программирование. В июне 2026 года, завершив обучение, я окончательно оставил военную стезю ради гражданской инженерии и создания суверенного ИИ.

В июле 2026 года я переехал в Армению, в город Капан (Сюникская область) — на историческую родину своего отца. В августе 2026 года здесь была зарегистрирована компания M.A.R.S. COMPANION LLC, ставшая базой для независимой лаборатории суверенного локального искусственного интеллекта.`,
    },
    bioChapters: [
      {
        id: 'origins',
        title: {
          en: 'Medical Aspiration & Lyceum Years',
          ru: 'Цель стать врачом и лицейские годы',
        },
        tag: {
          en: '2015–2022 · Early Foundations',
          ru: '2015–2022 · Лицей № 410',
        },
        content: {
          en: "From early childhood, my core goal was to become a physician and practice medicine. During grades 5–7 at Lyceum No. 410 in the town of Pushkin, I attended classes in programming and robotics; this was not a calculated engineering roadmap and didn't yet build full systems mastery, but it firmly left its mark on my mind.",
          ru: 'С детства моей главной целью было стать врачом и посвятить жизнь медицине. В Лицее № 410 в городе Пушкин в 5–7 классах я ходил на занятия по программированию и робототехнике — это не было выверенным планом стать инженером и тогда ещё не заложило глубокого понимания систем, но тоже прочно отпечаталось в моём сознании.',
        },
      },
      {
        id: 'turning-point',
        title: {
          en: 'Engineering Calling & Civil Transition',
          ru: 'Инженерное призвание и переход в гражданскую сферу',
        },
        tag: {
          en: '2022–2026 · Technical Choice',
          ru: '2022–2026 · Выбор инженерии',
        },
        content: {
          en: 'During my years at the cadet corps, my core calling shifted decisively toward computer systems and cybernetics. Experiencing the environment firsthand, I realized that my future belonged to software architecture and private hardware development. Having enrolled under prior plans, I completed secondary schooling, but decided not to pursue a military commission or military medicine, choosing instead to dedicate my career to sovereign computer technologies and autonomous intelligence.',
          ru: 'За годы учёбы в кадетском корпусе моё призвание окончательно определилось в пользу компьютерных систем и кибернетики. Познакомившись с организационной средой изнутри, я понял, что моё будущее неразрывно связано с архитектурой программных систем и автономными аппаратными решениями. Завершив среднее образование, я осознанно оставил планы на военную службу и Военно-медицинскую академию, полностью посвятив себя созданию суверенных технологий и автономного ИИ.',
        },
      },
      {
        id: 'companion-idea',
        title: {
          en: 'Inception of M.A.R.S.: A Companion Without External Clouds',
          ru: 'Идея M.A.R.S.: верный компаньон без чужого облака',
        },
        tag: {
          en: 'Local AI · Data Sovereignty',
          ru: 'Локальный ИИ · Суверенитет данных',
        },
        content: {
          en: 'Living in the closed, insular environment of the cadet corps prompted deep reflections on human solitude. I asked: what if an individual could have their own personal voice AI companion that retains lifetime conversational continuity, yet fundamentally never surrenders their private space to foreign cloud corporations? That gave birth to M.A.R.S. Read the full creation story on sarkisian.site.',
          ru: 'Опыт жизни в замкнутой среде кадетского корпуса заставил глубоко осмыслить тему человеческого одиночества. Я задался вопросом: что, если у человека появится собственный персональный голосовой ИИ-компаньон, помнящий контекст общения годами, но никогда не отправляющий личные данные в чужие корпоративные облака? Так родился M.A.R.S. Подробная история создания опубликована на sarkisian.site/ru.',
        },
      },
      {
        id: 'kapan-roots',
        title: {
          en: 'Deliberate Choice & Return to Family Roots in Kapan',
          ru: 'Осознанный выбор и переезд в Капан к корням отца',
        },
        tag: {
          en: 'July 2026 · Syunik Base',
          ru: 'Июль 2026 · Родина отца',
        },
        content: {
          en: 'Upon concluding cadet school in June 2026, I relocated in July 2026 to Kapan, Armenia — the birthplace of my father. Here, I incorporated M.A.R.S. COMPANION LLC and established an independent hardware laboratory for sovereign artificial intelligence.',
          ru: 'Окончив кадетский корпус в июне 2026 года, в июле 2026 года я переехал в Армению, в город Капан — на родину своего отца. Здесь я зарегистрировал компанию M.A.R.S. COMPANION LLC и создаю независимую аппаратную лабораторию для суверенного искусственного интеллекта.',
        },
      },
    ],
    alternateNames: [
      'Aleksandr Sarkisian',
      'Aleksandr Sargsyan',
      'Alexander Sarkisian',
      'Alexander Sargsyan',
      'Aleksandr Davidovich Sarkisian',
      'Александр Саркисян',
      'Александр Саргсян',
      'Саркисян Александр',
      'Саргсян Александр',
      'Саркисян Александр Давидович',
      'Александр Давидович Саркисян',
      'Саргсян Александр Давидович',
      'Ալեքսանդր Սարգսյան',
      'Սարգսյան Ալեքսանդր',
      'teduza',
      '@teduza',
    ],
    citizenshipRegion: {
      en: 'Kapan, Syunik Province, Republic of Armenia',
      ru: 'Капан, Сюник, Республика Армения',
    },
    languages: {
      en: 'English, Ukrainian, Russian',
      ru: 'Английский, Украинский, Русский',
    },
  },

  organization: {
    id: 'org-mars-companion-llc',
    name: 'M.A.R.S. COMPANION LLC',
    armenianName: '«Մ․Ա․Ռ․Ս․ ՔՈՄՓԵՆԻՈՆ» ՍՊԸ',
    registrationNumber: '999.110.1603426',
    taxId: '09433977',
    foundingDate: '2026-08-17',
    jurisdiction: {
      en: 'Republic of Armenia, Syunik Province',
      ru: 'Республика Армения, Сюникская область',
    },
    location: {
      en: 'Kapan, Syunik Province, Republic of Armenia',
      ru: 'г. Капан, Сюник, Республика Армения',
    },
    website: 'https://company.teduza.com',
    productWebsite: 'https://teduza.com',
    wikidataId: 'Q141447626',
    founder: 'Aleksandr Sarkisian (Sargsyan)',
    principles: [
      {
        id: 'p1',
        title: {
          en: '100% Offline Autonomy',
          ru: '100% Офлайн-автономность',
        },
        description: {
          en: 'All reasoning, speech synthesis, and vector memory retrieval execute locally on edge silicon with no telemetry and zero dependence on external cloud servers.',
          ru: 'Все процессы инференса, распознавания речи и извлечения памяти выполняются исключительно на локальном чипе без отправки данных во внешние облачные серверы.',
        },
      },
      {
        id: 'p2',
        title: {
          en: 'Persistent Semantic Memory',
          ru: 'Долговременная семантическая память',
        },
        description: {
          en: 'Hierarchical associative memory graph consolidating episodic experiences into durable local semantic representations that persist across years of conversation.',
          ru: 'Иерархический ассоциативный граф памяти, объединяющий эпизодические факты в устойчивые семантические связи, сохраняющиеся годами на локальном накопителе.',
        },
      },
      {
        id: 'p3',
        title: {
          en: 'Hardware-Bound Trust',
          ru: 'Аппаратно закреплённое доверие',
        },
        description: {
          en: 'Deterministic cryptographic boundaries binding the cognitive state directly to physical secure hardware elements, preventing probing and unauthorized tampering.',
          ru: 'Криптографическая привязка когнитивного состояния к физическому защищённому аппаратному модулю, исключающая несанкционированное извлечение весов и данных.',
        },
      },
      {
        id: 'p4',
        title: {
          en: 'Zero Cloud Telemetry',
          ru: 'Нулевая облачная телеметрия',
        },
        description: {
          en: 'Personal AI must belong entirely to the individual. No accounts, no user profiles on third-party servers, no surveillance capitalism.',
          ru: 'Персональный ИИ должен полностью принадлежать человеку. Никаких аккаунтов, профилей на чужих серверах и монетизации пользовательских данных.',
        },
      },
    ],
  },

  product: {
    id: 'prod-mars-companion',
    name: 'M.A.R.S. Companion',
    acronym: 'Mobile Autonomous Reasoning System',
    tagline: {
      en: 'Private. Offline. Yours.',
      ru: 'Приватный. Автономный. Твой.',
    },
    officialUrl: 'https://teduza.com',
    wikidataId: 'Q141448028',
    creationStoryUrl: {
      en: 'https://sarkisian.site/',
      ru: 'https://sarkisian.site/ru/',
    },
  },

  // All 12 UK IPO Patents in official English (without Russian translation, as requested)
  ipRecords: [
    {
      id: 'ip-gb2624388-1',
      applicationNumber: 'GB2624388.1',
      title:
        'A Deterministic Lifetime-Graph-Driven Method and Apparatus for Dynamic Volatile Memory Defragmentation, Tensor Relocation and Arena Compaction in Resource-Constrained Microcontroller Units During Autonomous Offline Neural Network Inference',
      filingDate: '15 October 2026',
      filingDateIso: '2026-10-15',
      status: 'Filed',
      ownershipType: 'company_owned',
      applicant: 'M.A.R.S. COMPANION LLC',
      inventor: 'Aleksandr Sarkisian',
      jurisdiction: 'United Kingdom (UK IPO)',
      officialRegistryUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2624388.1',
      abstract:
        'An apparatus and deterministic algorithm for dynamic volatile memory defragmentation and tensor relocation in embedded microcontroller units during offline neural network inference, preventing allocation deadlocks in sub-8MB RAM architectures.',
      tags: ['SRO', 'RAM Defragmentation', 'MCU Inference', 'Edge Silicon'],
    },
    {
      id: 'ip-gb2624416-0',
      applicationNumber: 'GB2624416.0',
      title:
        'An Offline Artificial Intelligence System for Dynamic Container Terminal Logistics, Rolling-Horizon Yard Planning and Sequential Autonomous Resource Orchestration in Seaport Environments Without Cloud Dependency',
      filingDate: '15 October 2026',
      filingDateIso: '2026-10-15',
      status: 'Filed',
      ownershipType: 'company_owned',
      applicant: 'M.A.R.S. COMPANION LLC',
      inventor: 'Aleksandr Sarkisian',
      jurisdiction: 'United Kingdom (UK IPO)',
      officialRegistryUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2624416.0',
      abstract:
        'Edge computing system executing container yard scheduling and automated gantry crane coordination using rolling-horizon heuristic search on localized industrial hardware without internet or satellite uplink.',
      tags: ['Maritime Logistics', 'Autonomous Planning', 'Edge SRO', 'Industrial AI'],
    },
    {
      id: 'ip-gb2624414-5',
      applicationNumber: 'GB2624414.5',
      title:
        'A Page-Aligned Hierarchical Quantized Offline Vector Database Indexing Mechanism for Flash-Memory-Constrained Edge Artificial Intelligence Systems with Wear-Aware Log-Structured Updating',
      filingDate: '15 October 2026',
      filingDateIso: '2026-10-15',
      status: 'Filed',
      ownershipType: 'company_owned',
      applicant: 'M.A.R.S. COMPANION LLC',
      inventor: 'Aleksandr Sarkisian',
      jurisdiction: 'United Kingdom (UK IPO)',
      officialRegistryUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2624414.5',
      abstract:
        'Wear-aware hierarchical quantized vector indexing mechanism optimized for raw NOR/NAND flash memory on low-power devices, enabling millisecond semantic k-NN recall while extending flash media longevity.',
      tags: ['Vector DB', 'Flash Wear-Leveling', 'Quantization', 'Semantic Search'],
    },
    {
      id: 'ip-gb2624409-5',
      applicationNumber: 'GB2624409.5',
      title:
        'A Decentralized Peer-to-Peer Ad-Hoc Communication and Time-Slotted Coordination Protocol for Autonomous Multi-Agent Synchronization and Collective Resource Orchestration in Environments Devoid of Internet and Satellite Positioning Services',
      filingDate: '15 October 2026',
      filingDateIso: '2026-10-15',
      status: 'Filed',
      ownershipType: 'company_owned',
      applicant: 'M.A.R.S. COMPANION LLC',
      inventor: 'Aleksandr Sarkisian',
      jurisdiction: 'United Kingdom (UK IPO)',
      officialRegistryUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2624409.5',
      abstract:
        'Decentralized cryptographic peer-to-peer ad-hoc protocol utilizing time-slotted synchronized medium access for multi-agent autonomous consensus and localized resource sharing without master coordinators or GPS.',
      tags: ['Ad-Hoc Protocol', 'Multi-Agent', 'P2P Sync', 'Autonomous Mesh'],
    },
    {
      id: 'ip-gb2624406-1',
      applicationNumber: 'GB2624406.1',
      title:
        'A Hardware-Bound Hierarchical Key-Derivation and Streaming Decryption Architecture for Localized Cryptographic Protection of Neural Network Weights Against Physical Tampering, Probing and Extraction in Autonomous Edge Intelligence Devices',
      filingDate: '15 October 2026',
      filingDateIso: '2026-10-15',
      status: 'Filed',
      ownershipType: 'company_owned',
      applicant: 'M.A.R.S. COMPANION LLC',
      inventor: 'Aleksandr Sarkisian',
      jurisdiction: 'United Kingdom (UK IPO)',
      officialRegistryUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2624406.1',
      abstract:
        'Cryptographic architecture tying model weights directly to silicon PUF (Physically Unclonable Functions) and hardware security registers, decrypting weights on-the-fly inside isolated CPU memory buffers to defeat bus snooping.',
      tags: ['Hardware Security', 'PUF', 'Model Encryption', 'Anti-Tamper'],
    },
    {
      id: 'ip-gb2624415-2',
      applicationNumber: 'GB2624415.2',
      title:
        'A Serverless Opportunistic Federated Training and Staleness-Weighted Low-Rank Parameter Optimization Method for Self-Contained Autonomous Intelligence Models Operating in Isolated Environments',
      filingDate: '15 October 2026',
      filingDateIso: '2026-10-15',
      status: 'Filed',
      ownershipType: 'company_owned',
      applicant: 'M.A.R.S. COMPANION LLC',
      inventor: 'Aleksandr Sarkisian',
      jurisdiction: 'United Kingdom (UK IPO)',
      officialRegistryUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2624415.2',
      abstract:
        'Method for decentralized LoRA parameter exchange and staleness-weighted gradient updates across isolated edge devices during transient physical encounters without central server mediation.',
      tags: ['Federated Learning', 'LoRA', 'Edge Optimization', 'Offline Training'],
    },
    {
      id: 'ip-gb2611463-7',
      applicationNumber: 'GB2611463.7',
      title:
        'M.A.R.S. Companion: Portable Offline Voice Assistant with Sequential Resource Orchestration and Semantic Memory Retrieval',
      filingDate: '15 May 2026',
      filingDateIso: '2026-05-15',
      status: 'Filed',
      ownershipType: 'licensed',
      applicant: 'Aleksandr Sarkisian',
      inventor: 'Aleksandr Sarkisian',
      jurisdiction: 'United Kingdom (UK IPO)',
      officialRegistryUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2611463.7',
      wikidataId: 'Q141447790',
      abstract:
        'System architecture enabling complex multimodal voice reasoning and persistent vector retrieval within low-power embedded computational environments without network connectivity through dynamic memory swapping.',
      tags: ['Sequential Resource Orchestration', 'SRO', 'Semantic Memory', 'Offline Voice AI'],
    },
    {
      id: 'ip-gb2613965-9',
      applicationNumber: 'GB2613965.9',
      title:
        'M.A.R.S. Companion: System and Method for Governing Artificial Intelligence Behaviour via an Operational Manifesto Framework',
      filingDate: '16 June 2026',
      filingDateIso: '2026-06-16',
      status: 'Filed',
      ownershipType: 'licensed',
      applicant: 'Aleksandr Sarkisian',
      inventor: 'Aleksandr Sarkisian',
      jurisdiction: 'United Kingdom (UK IPO)',
      officialRegistryUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2613965.9',
      wikidataId: 'Q141447746',
      abstract:
        'Deterministic governance architecture enforcing behavioral boundaries, ethical invariants, and user loyalty directly within the edge runtime inference layer.',
      tags: ['AI Governance', 'Operational Manifesto', 'Ethical Invariants', 'Edge Runtime'],
    },
    {
      id: 'ip-gb2613968-3',
      applicationNumber: 'GB2613968.3',
      title:
        'M.A.R.S. Companion: System and Method for Emotional Architecture and Empathetic Interaction in AI Companions',
      filingDate: '17 June 2026',
      filingDateIso: '2026-06-17',
      status: 'Filed',
      ownershipType: 'licensed',
      applicant: 'Aleksandr Sarkisian',
      inventor: 'Aleksandr Sarkisian',
      jurisdiction: 'United Kingdom (UK IPO)',
      officialRegistryUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2613968.3',
      wikidataId: 'Q141447767',
      abstract:
        'Stateful affective engine modeling dynamic emotional resonance, cadence adaptation, and tone stability across prolonged conversational lifecycles.',
      tags: ['Emotional Engine', 'Prosody Tuning', 'Empathetic AI', 'Tone Modeling'],
    },
    {
      id: 'ip-gb2613969-1',
      applicationNumber: 'GB2613969.1',
      title:
        'M.A.R.S. Companion: System and Method for Semantic Long-Term Memory Management in AI Companions',
      filingDate: '17 June 2026',
      filingDateIso: '2026-06-17',
      status: 'Filed',
      ownershipType: 'licensed',
      applicant: 'Aleksandr Sarkisian',
      inventor: 'Aleksandr Sarkisian',
      jurisdiction: 'United Kingdom (UK IPO)',
      officialRegistryUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2613969.1',
      wikidataId: 'Q141447759',
      abstract:
        'Hierarchical memory consolidation integrating rapid episodic recall with synthesized conceptual graph associations on local storage with low overhead.',
      tags: ['Long-Term Memory', 'Graph Recall', 'Vector Indexing', 'Local Retrieval'],
    },
    {
      id: 'ip-gb2613970-9',
      applicationNumber: 'GB2613970.9',
      title:
        'M.A.R.S. Companion: System and Method for Maintaining and Managing AI Companion Identity and Personality Persistence',
      filingDate: '17 June 2026',
      filingDateIso: '2026-06-17',
      status: 'Filed',
      ownershipType: 'licensed',
      applicant: 'Aleksandr Sarkisian',
      inventor: 'Aleksandr Sarkisian',
      jurisdiction: 'United Kingdom (UK IPO)',
      officialRegistryUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2613970.9',
      wikidataId: 'Q141447779',
      abstract:
        'Mechanisms ensuring invariant character traits, tone calibration, and persistent self-model representation across restarts, upgrades, and session interruptions.',
      tags: ['Personality Persistence', 'Identity Core', 'Character Invariance'],
    },
    {
      id: 'ip-gb2614145-7',
      applicationNumber: 'GB2614145.7',
      title:
        'M.A.R.S. Companion: System and Method for Autonomous Physical Embodiment, Hardware-Anchored Identity, and Trust-Gated Introspective Agency in Artificial Intelligence',
      filingDate: '18 June 2026',
      filingDateIso: '2026-06-18',
      status: 'Filed',
      ownershipType: 'licensed',
      applicant: 'Aleksandr Sarkisian',
      inventor: 'Aleksandr Sarkisian',
      jurisdiction: 'United Kingdom (UK IPO)',
      officialRegistryUrl: 'https://www.search-for-intellectual-property.service.gov.uk/GB2614145.7',
      wikidataId: 'Q141447786',
      abstract:
        'Hardware security element integration that binds the cognitive state cryptographically to the physical enclosure and enforces internal self-audit gates prior to action execution.',
      tags: ['Hardware-Anchored Trust', 'Physical Embodiment', 'Agency Gates', 'Self-Audit'],
    },
  ],

  timelineEvents: [
    {
      id: 'time-2015-lyceum',
      date: {
        en: '1 September 2015',
        ru: '1 сентября 2015',
      },
      title: {
        en: 'Admission to Lyceum No. 410 (Pushkin, Saint Petersburg)',
        ru: 'Поступление в 1 класс Лицея № 410 (город Пушкин, Санкт-Петербург)',
      },
      description: {
        en: 'Commenced secondary schooling at Lyceum No. 410. Attended programming and robotics clubs in grades 5–7, igniting early interest in cybernetics alongside an initial goal to pursue medicine.',
        ru: 'Начало обучения в Лицее № 410. В 5–7 классах посещал занятия по программированию и робототехнике, заложившие первые основы кибернетического мышления параллельно с детской мечтой о медицине.',
      },
      category: 'education',
    },
    {
      id: 'time-2022-05-lyceum-completion',
      period: {
        en: 'Late May 2022',
        ru: 'Конец мая 2022 года',
      },
      title: {
        en: 'Completion of 7th Grade and Conclusion of Studies at Lyceum No. 410',
        ru: 'Окончание 7 класса и завершение учёбы в Лицее № 410',
      },
      description: {
        en: 'Successfully completed the 7th grade curriculum at Lyceum No. 410 with deepened focus on STEM subjects, preparing for planned admission to cadet training.',
        ru: 'Успешное завершение курса 7 класса Лицея № 410 с углублённой подготовкой, подготовка к запланированному поступлению в кадетский корпус.',
      },
      category: 'education',
    },
    {
      id: 'time-2022-cadet-admission',
      date: {
        en: '28 August 2022',
        ru: '28 августа 2022',
      },
      title: {
        en: 'Admission to Kronstadt Naval Cadet Corps',
        ru: 'Поступление в 8 класс Кронштадтского морского кадетского военного корпуса (КМКВК)',
      },
      description: {
        en: 'Enrolled in the 8th grade at the Kronstadt Naval Military Cadet Corps named after Admiral Ushakov. Experienced naval discipline and began deep independent studies in systems architecture.',
        ru: 'Зачисление в 8 класс КМКВК им. адмирала Ушакова (Минобороны РФ). Военно-морская дисциплина, самообразование в области архитектуры операционных систем и компьютерных архитектур.',
      },
      category: 'education',
    },
    {
      id: 'time-2025-mars-beginning',
      date: {
        en: '2025',
        ru: '2025',
      },
      title: {
        en: 'Inception of M.A.R.S. Companion Architecture',
        ru: 'Зарождение архитектуры M.A.R.S. Companion',
      },
      description: {
        en: 'Reflecting on loneliness within the closed cadet environment inspired the concept of an offline personal voice companion with lifelong memory and sovereign data privacy. Creation chronicle published on sarkisian.site.',
        ru: 'Размышления о человеческом одиночестве в замкнутом кадетском коллективе привели к идее полностью локального голосового компаньона с постоянной памятью. Летопись создания опубликована на sarkisian.site/ru.',
      },
      category: 'technology',
      externalLink: 'https://sarkisian.site/',
    },
    {
      id: 'time-2026-05-first-patent',
      date: {
        en: '15 May 2026',
        ru: '15 мая 2026',
      },
      title: {
        en: 'First Priority Patent Filing with UK Intellectual Property Office',
        ru: 'Подача первой приоритетной патентной заявки в UK IPO (GB2611463.7)',
      },
      description: {
        en: 'Filed foundational patent GB2611463.7 with the UK IPO for Portable Offline Voice Assistant with Sequential Resource Orchestration (SRO) and Semantic Memory Retrieval.',
        ru: 'Регистрация ключевой патентной заявки GB2611463.7 в патентном ведомстве Великобритании на технологию последовательной оркестрации ресурсов (SRO) и семантической памяти.',
      },
      category: 'patent',
      relatedPatents: ['GB2611463.7'],
    },
    {
      id: 'time-2026-05-teduza-website',
      date: {
        en: '22 May 2026',
        ru: '22 мая 2026',
      },
      title: {
        en: 'Public Launch of teduza.com',
        ru: 'Запуск официального веб-ресурса teduza.com',
      },
      description: {
        en: 'Unveiled the public product presence for M.A.R.S. Companion, detailing the physical specifications, private offline architecture, and developer roadmap.',
        ru: 'Публичная презентация проекта M.A.R.S. Companion на teduza.com: концепция автономного устройства, архитектура приватности и технологическая дорожная карта.',
      },
      category: 'technology',
      externalLink: 'https://teduza.com',
    },
    {
      id: 'time-2026-uk-ipo-patents',
      date: {
        en: '16–18 June 2026',
        ru: '16–18 июня 2026',
      },
      title: {
        en: 'Filing of Extended 5-Patent Foundational Pool with UK IPO',
        ru: 'Подача пула из 5 фундаментальных патентных заявок в UK IPO',
      },
      description: {
        en: 'Secured patent filings GB2613965.9, GB2613968.3, GB2613969.1, GB2613970.9, and GB2614145.7 covering AI governance, emotional engine, semantic memory, personality persistence, and hardware-anchored trust.',
        ru: 'Регистрация патентных заявок GB2613965.9, GB2613968.3, GB2613969.1, GB2613970.9 и GB2614145.7 на управление поведением ИИ, эмпатический движок, память и криптографическую защиту.',
      },
      category: 'patent',
      relatedPatents: [
        'GB2613965.9',
        'GB2613968.3',
        'GB2613969.1',
        'GB2613970.9',
        'GB2614145.7',
      ],
    },
    {
      id: 'time-2026-cadet-graduation',
      date: {
        en: '26 June 2026',
        ru: '26 июня 2026',
      },
      title: {
        en: 'Graduation from Cadet Corps & Civil Technology Transition',
        ru: 'Выпуск из КМКВК и окончательный переход в гражданскую инженерию',
      },
      description: {
        en: 'Completed secondary schooling at the cadet corps. Consciously declined military service and institutional medical career tracks to fully concentrate on independent software and hardware engineering.',
        ru: 'Завершение учёбы в кадетском корпусе. Осознанный отказ от военной карьеры и Военно-медицинской академии в пользу независимой инженерной деятельности.',
      },
      category: 'milestone',
    },
    {
      id: 'time-2026-07-relocation',
      date: {
        en: '10 July 2026',
        ru: '10 июля 2026',
      },
      title: {
        en: 'Relocation to Historical Homeland (Armenia, Kapan)',
        ru: 'Переезд на историческую родину (Армения, город Капан)',
      },
      description: {
        en: 'Moved to Kapan, Syunik Province, Republic of Armenia — the birthplace of father — to establish an independent sovereign computing laboratory and base operations.',
        ru: 'Переезд в Капан (Сюникская область, Армения) — на родину отца. Создание независимой исследовательской базы для аппаратной разработки суверенного ИИ.',
      },
      category: 'milestone',
    },
    {
      id: 'time-2026-company-registration',
      date: {
        en: '17 August 2026',
        ru: '17 августа 2026',
      },
      title: {
        en: 'Incorporation of M.A.R.S. COMPANION LLC',
        ru: 'Государственная регистрация компании M.A.R.S. COMPANION LLC',
      },
      description: {
        en: 'Officially incorporated M.A.R.S. COMPANION LLC («Մ․Ա․Ռ․Ս․ ՔՈՄՓԵՆԻՈՆ» ՍՊԸ, Reg: 999.110.1603426, TIN: 09433977) in Kapan, Armenia. Aleksandr Sarkisian serves as Founder & Director.',
        ru: 'Официальная государственная регистрация компании в городе Капан (Сюник, Республика Армения, рег. номер: 999.110.1603426, ИНН: 09433977). Основатель и генеральный директор — Александр Саркисян.',
      },
      category: 'company',
      externalLink: 'https://company.teduza.com',
    },
    {
      id: 'time-2026-10-new-patents',
      date: {
        en: '15 October 2026',
        ru: '15 октября 2026',
      },
      title: {
        en: 'Filing of 6 Extended Patent Applications with UK IPO',
        ru: 'Подача 6 новых патентных заявок в UK IPO',
      },
      description: {
        en: 'Filing of 6 new UK IPO patent applications (GB2624388.1, GB2624416.0, GB2624414.5, GB2624409.5, GB2624406.1, GB2624415.2) covering dynamic volatile memory defragmentation, page-aligned offline vector DB indexing, hardware weight encryption, container logistics SRO, and federated learning.',
        ru: 'Подача 6 новых патентных заявок в UK IPO (GB2624388.1, GB2624416.0, GB2624414.5, GB2624409.5, GB2624406.1, GB2624415.2), охватывающих динамическую дефрагментацию оперативной памяти, постраничную индексацию офлайн векторных баз данных, аппаратное шифрование весов моделей, логистическую оркестрацию ресурсов и федеративное обучение.',
      },
      category: 'patent',
      relatedPatents: [
        'GB2624388.1',
        'GB2624416.0',
        'GB2624414.5',
        'GB2624409.5',
        'GB2624406.1',
        'GB2624415.2',
      ],
    },
    {
      id: 'time-now-patent-expansion',
      period: {
        en: 'Now',
        ru: 'Сейчас',
      },
      title: {
        en: 'Expansion of Patent Profile & Technology Development',
        ru: 'Расширение патентного профиля и развитие технологий',
      },
      description: {
        en: 'Active expansion of the patent profile, development of next-generation sovereign offline AI hardware, and continuous scaling of intellectual property across edge computing and cryptographic trust architectures. Total UK patent portfolio reaches 12 applications, all invented by Aleksandr Sarkisian.',
        ru: 'Активное расширение патентного профиля, разработка следующего поколения аппаратного обеспечения для суверенного офлайн-ИИ и масштабирование портфеля интеллектуальной собственности в области периферийных вычислений и криптографического доверия. Совокупный патентный портфель Великобритании включает 12 заявок, автором всех которых является Александр Саркисян.',
      },
      category: 'patent',
    },
  ],

  pressSecretary: {
    name: {
      en: 'Kira Dudnik',
      ru: 'Кира Дудник',
    },
    role: {
      en: 'Head of Press & Public Relations',
      ru: 'Пресс-секретарь и коммуникации',
    },
    email: 'dudunik@teduza.com',
    wikidataId: 'Q141448092',
  },
};
