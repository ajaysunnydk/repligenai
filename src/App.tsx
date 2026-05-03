import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import Services from './pages/Services'; // Fallback
import Products from './pages/Products';
import Platforms from './pages/Platforms';
import Engineering from './pages/Engineering';
import Governance from './pages/Governance';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
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
      case 'industries':
        return <Industries onNavigate={handleNavigate} />;
      case 'careers':
        return <Careers onNavigate={handleNavigate} />;
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'platforms':
        return <Platforms onNavigate={handleNavigate} />;
      case 'engineering':
        return <Engineering onNavigate={handleNavigate} />;
      case 'governance':
        return <Governance onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
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
