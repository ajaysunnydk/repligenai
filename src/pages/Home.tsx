import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import StatsStrip from "../components/StatsStrip";
import KeyFeatures from "../components/KeyFeatures";
import ProductsShowcase from "../components/ProductsShowcase";
import AboutCompany from "../components/AboutCompany";
import Footer from "../components/Footer";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <HeroSlider onNavigate={onNavigate} />
      <StatsStrip />
      <KeyFeatures />
      <ProductsShowcase onNavigate={onNavigate} />
      <AboutCompany onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </>
  );
}
