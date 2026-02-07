import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import About from './pages/About';
import Contact from './pages/Contact';
import CursorGlow from './components/CursorGlow';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'industries':
        return <Industries />;
      case 'careers':
        return <Careers />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      {/* <CursorGlow /> */}
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <main>{renderPage()}</main>
      </div>
    </ThemeProvider>
  );
}

export default App;
