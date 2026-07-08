import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Services from './pages/Services';
import Products from './pages/Products';
import Blog from './pages/Blog';
import { Privacy, Terms } from './pages/Legal';

const pageTitles: Record<string, string> = {
  home: 'IT Staffing for Data, AI & Cloud | RepligenAI',
  about: 'About Us | RepligenAI',
  contact: 'Contact Us | RepligenAI',
  careers: 'Careers | RepligenAI',
  services: 'IT Services & Staffing | RepligenAI',
  products: 'Our Products | RepligenAI Labs',
  blog: 'Blog & Insights | RepligenAI',
  privacy: 'Privacy Policy | RepligenAI',
  terms: 'Terms of Service | RepligenAI',
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    document.title = pageTitles[page] || pageTitles.home;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'careers':
        return <Careers onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'privacy':
        return <Privacy onNavigate={handleNavigate} />;
      case 'terms':
        return <Terms onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-enterprise-dark transition-colors">
        <main>{renderPage()}</main>
      </div>
    </ThemeProvider>
  );
}

export default App;
