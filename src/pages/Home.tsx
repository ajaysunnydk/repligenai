import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import KeyFeatures from "../components/KeyFeatures";
import AboutCompany from "../components/AboutCompany";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";
import IndustrySolutions from "../components/IndustrySolutions";
import CaseStudy from "../components/CaseStudy";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: any) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <HeroSlider onNavigate={onNavigate} />
      <KeyFeatures />
      <AboutCompany />
      <IndustrySolutions />
      <CaseStudy />
      <Statistics />
      <Footer onNavigate={onNavigate} />
    </>
  );
}