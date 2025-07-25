import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import AniversariosPage from './components/pages/AniversariosPage';
import SistemasPage from './components/pages/SistemasPage';
import UniversidadePage from './components/pages/UniversidadePage';
import DocsPage from './components/pages/DocsPage';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock user data - em produção viria do Firebase
  const [user] = useState({
    name: 'João Silva',
    email: 'joao.silva@hortsoy.com.br',
    role: 'Analista Comercial',
    filial: 'Matriz',
    birthday: '15/03',
    photo: '/api/placeholder/40/40'
  });

  // Detectar se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Fechar sidebar ao redimensionar para desktop
  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(false);
    }
  }, [isMobile]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'timeline':
        return <HomePage />; // Timeline é a mesma que Home
      case 'aniversarios':
        return <AniversariosPage />;
      case 'docs':
        return <DocsPage />;
      case 'revista':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Revista Hortsoy</h2>
            <p className="text-gray-600">Seção em desenvolvimento</p>
          </div>
        );
      case 'beneficios':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefícios</h2>
            <p className="text-gray-600">Seção em desenvolvimento</p>
          </div>
        );
      case 'sistemas':
        return <SistemasPage />;
      case 'universidade':
        return <UniversidadePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobile={isMobile}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isMobile ? 'ml-0' : 'ml-64'}`}>
        {/* Header */}
        <Header user={user} isMobile={isMobile} />

        {/* Page Content */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

