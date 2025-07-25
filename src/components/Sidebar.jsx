import { useState } from 'react';
import { 
  Home, 
  Clock, 
  Cake, 
  FileImage, 
  BookOpen, 
  Gift, 
  Monitor, 
  GraduationCap,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import hortsoyLogo from '../assets/hortsoy-logo.png';

const Sidebar = ({ activeTab, setActiveTab, isMobile, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'aniversarios', label: 'Aniversários', icon: Cake },
    { id: 'docs', label: 'Docs & Fotos', icon: FileImage },
    { id: 'revista', label: 'Revista', icon: BookOpen },
    { id: 'beneficios', label: 'Benefícios', icon: Gift },
    { id: 'sistemas', label: 'Sistemas', icon: Monitor },
    { id: 'universidade', label: 'Universidade', icon: GraduationCap },
  ];

  const handleItemClick = (itemId) => {
    setActiveTab(itemId);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 bg-white shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      )}

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        sidebar fixed left-0 top-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out
        ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
      `}>
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8 p-4">
            <img 
              src={hortsoyLogo} 
              alt="Hortsoy Logo" 
              className="h-16 w-auto filter brightness-0 invert"
            />
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`
                    sidebar-item w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left
                    ${isActive ? 'active bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}
                    text-white font-medium transition-all duration-300
                  `}
                >
                  <IconComponent 
                    className={`h-5 w-5 icon-animate ${isActive ? 'transform -translate-y-1' : ''}`} 
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-white border-opacity-20">
            <p className="text-white text-sm text-center opacity-75">
              Intranet Hortsoy v1.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

