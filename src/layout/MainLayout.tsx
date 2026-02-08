import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
}

export default function MainLayout({ children, onNavigate }: LayoutProps) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      {children}
      <Footer />
    </>
  );
}
