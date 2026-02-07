import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import KeyFeatures from "../components/KeyFeatures";
import AboutCompany from "../components/AboutCompany";
import Statistics from "../components/Statistics";

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
      <Statistics />
    </>
  );
}