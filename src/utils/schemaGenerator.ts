import { SiteData } from '../data/siteData';

export function generateSchemaGraph(data: SiteData, lang: 'en' | 'ru') {
  const person = data.person;
  const org = data.organization;
  const prod = data.product;

  const sameAsLinks = [
    'https://www.wikidata.org/wiki/Q141447666',
    'https://www.wikidata.org/wiki/Q141447944',
    'https://www.google.com/search?kgmid=/g/11zyrqjbq9',
    'https://t.me/teduza',
    'https://sarkisian.teduza.com',
    'https://sarkisian.site',
    'https://company.teduza.com',
    'https://teduza.com',
    ...data.ipRecords.map((r) => r.officialRegistryUrl),
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://sarkisian.teduza.com/#person',
        name: lang === 'ru' ? person.russianFullName : person.internationalName,
        givenName: 'Aleksandr',
        familyName: 'Sarkisian (Sargsyan)',
        additionalName: lang === 'ru' ? 'Давидович' : 'Davidovich',
        alternateName: person.alternateNames,
        birthDate: person.dateOfBirth,
        url: 'https://sarkisian.teduza.com',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://sarkisian.teduza.com/portrait.jpg#image',
          url: 'https://sarkisian.teduza.com/portrait.jpg',
          contentUrl: 'https://sarkisian.teduza.com/portrait.jpg',
          width: '1103',
          height: '1426',
          encodingFormat: 'image/jpeg',
          caption:
            lang === 'ru'
              ? 'Александр Саркисян — основатель и директор M.A.R.S. COMPANION LLC'
              : 'Aleksandr Sarkisian — Founder & Director of M.A.R.S. COMPANION LLC',
        },
        jobTitle: person.primaryRole[lang] || person.primaryRole.en,
        description: person.bioShort[lang] || person.bioShort.en,
        homeLocation: {
          '@type': 'Place',
          name: person.citizenshipRegion[lang] || person.citizenshipRegion.en,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kapan',
            addressRegion: 'Syunik Province',
            addressCountry: 'AM',
          },
        },
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name:
              lang === 'ru'
                ? 'Кронштадтский морской кадетский военный корпус имени адмирала Фёдора Фёдоровича Ушакова Министерства обороны Российской Федерации'
                : 'Kronstadt Naval Military Cadet Corps named after Admiral Fyodor Fyodorovich Ushakov of the Ministry of Defence of the Russian Federation',
          },
          {
            '@type': 'EducationalOrganization',
            name:
              lang === 'ru'
                ? 'Лицей № 410 (город Пушкин, Санкт-Петербург)'
                : 'Lyceum No. 410 (Pushkin, Saint Petersburg)',
          },
        ],
        founder: {
          '@id': 'https://company.teduza.com/#organization',
        },
        worksFor: {
          '@id': 'https://company.teduza.com/#organization',
        },
        knowsAbout: [
          'Offline Artificial Intelligence',
          'Autonomous Voice AI',
          'Edge Computing',
          'Sequential Resource Orchestration (SRO)',
          'Local AI Architecture',
          'M.A.R.S. Companion',
          'Semantic Memory',
          'Embedded Systems',
          'Hardware Security',
        ],
        knowsLanguage: [
          { '@type': 'Language', name: 'English', alternateName: 'en' },
          { '@type': 'Language', name: 'Ukrainian', alternateName: 'uk' },
          { '@type': 'Language', name: 'Russian', alternateName: 'ru' },
        ],
        sameAs: sameAsLinks,
      },
      {
        '@type': 'Organization',
        '@id': 'https://company.teduza.com/#organization',
        name: org.name,
        alternateName: [
          org.armenianName,
          'MARS Companion LLC',
          'M.A.R.S. Companion LLC',
          'M.A.R.S. COMPANION LLC',
        ],
        foundingDate: org.foundingDate,
        identifier: org.registrationNumber,
        taxID: org.taxId,
        url: org.website,
        founder: {
          '@id': 'https://sarkisian.teduza.com/#person',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kapan',
          addressLocality: 'Kapan',
          addressRegion: 'Syunik',
          addressCountry: 'AM',
        },
        sameAs: [
          'https://www.wikidata.org/wiki/Q141447626',
          'https://company.teduza.com',
          'https://teduza.com',
        ],
      },
      {
        '@type': 'Product',
        '@id': 'https://teduza.com/#product',
        name: prod.name,
        alternateName: prod.acronym,
        description: prod.tagline[lang] || prod.tagline.en,
        url: prod.officialUrl,
        manufacturer: {
          '@id': 'https://company.teduza.com/#organization',
        },
        category: 'Offline AI Companion Device',
        sameAs: ['https://www.wikidata.org/wiki/Q141448028', 'https://teduza.com'],
      },
      ...data.ipRecords.map((r) => ({
        '@type': 'Patent',
        '@id': `${r.officialRegistryUrl}#patent`,
        name: r.title,
        headline: r.title,
        description: r.abstract,
        patentNumber: r.applicationNumber,
        inventor: {
          '@id': 'https://sarkisian.teduza.com/#person',
        },
        author: {
          '@id': 'https://sarkisian.teduza.com/#person',
        },
        assignee: {
          '@id': 'https://company.teduza.com/#organization',
        },
        datePublished: r.filingDateIso,
        sameAs: r.wikidataId
          ? [r.officialRegistryUrl, `https://www.wikidata.org/wiki/${r.wikidataId}`]
          : [r.officialRegistryUrl],
      })),
      {
        '@type': 'ProfilePage',
        '@id': 'https://sarkisian.teduza.com/#profilepage',
        url: lang === 'ru' ? 'https://sarkisian.teduza.com/ru/' : 'https://sarkisian.teduza.com/',
        name:
          lang === 'ru'
            ? 'Александр Саркисян (Саргсян) — Официальный персональный сайт'
            : 'Aleksandr Sarkisian (Sargsyan) — Official Personal Website',
        mainEntity: {
          '@id': 'https://sarkisian.teduza.com/#person',
        },
        inLanguage: ['en', 'ru'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://sarkisian.teduza.com/#website',
        url: 'https://sarkisian.teduza.com',
        name: 'Aleksandr Sarkisian (Sargsyan)',
        alternateName: [
          'teduza',
          'Александр Саркисян',
          'Александр Саргсян',
          'Aleksandr Sarkisian Official Website',
        ],
        publisher: {
          '@id': 'https://sarkisian.teduza.com/#person',
        },
      },
    ],
  };
}
