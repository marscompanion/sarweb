import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer';
import { PatentDetailModal } from './components/PatentDetailModal';
import { StructuredDataViewer } from './components/StructuredDataViewer';
import { generateSchemaGraph } from './utils/schemaGenerator';

const MainLayout: React.FC = () => {
  const { db, lang } = useApp();

  // Sync Schema.org JSON-LD and page metadata
  useEffect(() => {
    let scriptTag = document.getElementById('schema-json-ld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-json-ld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    const schemaObj = generateSchemaGraph(db, lang);
    scriptTag.textContent = JSON.stringify(schemaObj);

    // Sync titles and descriptions
    if (lang === 'ru') {
      document.title =
        'Саркисян Александр Давидович (Саргсян) — Официальный сайт | КМКВК, Лицей 410, teduza';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Официальный персональный сайт Александра Давидовича Саркисяна (teduza), основателя и директора M.A.R.S. COMPANION LLC. Выпускника Кронштадтского морского кадетского военного корпуса (КМКВК) и Лицея № 410. Биография, 26 патентов UK IPO, исследования суверенного автономного ИИ.'
        );
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute(
          'content',
          'Саркисян Александр Давидович (Саргсян) — Официальный сайт | КМКВК, Лицей 410, teduza'
        );
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute(
          'content',
          'Официальный персональный сайт Александра Давидовича Саркисяна (teduza) — основателя M.A.R.S. COMPANION LLC, изобретателя, выпускника КМКВК и Лицея № 410. 26 патентов UK IPO.'
        );
      }
    } else {
      document.title = 'Aleksandr Sarkisian (Sargsyan) — Official Personal Website';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Official personal website of Aleksandr Sarkisian (Sargsyan), founder and director of M.A.R.S. COMPANION LLC. Biography, background, 26 UK IPO patents, and sovereign offline artificial intelligence.'
        );
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute(
          'content',
          'Aleksandr Sarkisian (Sargsyan) — Official Personal Website'
        );
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute(
          'content',
          'Official personal website and identity graph of Aleksandr Sarkisian (Sargsyan), founder and director of M.A.R.S. COMPANION LLC. Sovereign offline AI architecture and 26 UK IPO patents.'
        );
      }
    }
  }, [db, lang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c10] text-[#eae7e1] font-sans selection:bg-[#c1440e]/30 selection:text-white overflow-x-hidden">
      {/* Navigation Masthead */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8">
        <HomePage />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Dialogs */}
      <PatentDetailModal />
      <StructuredDataViewer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
