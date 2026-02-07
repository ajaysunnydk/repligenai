import { useEffect, useState } from "react";
import slide1 from "../assets/videos/slide1.mp4";
import slide2 from "../assets/videos/slide2.mp4";
import slide3 from "../assets/videos/slide3.mp4";

interface HeroSliderProps {
  onNavigate: (page: string) => void;
}

const slides = [
  {
    video: slide2,
    title: "Driving Excellence in Intelligent IT Solutions",
    subtitle:
      "Empower your organization with advanced AI-driven technologies and scalable software systems. We design and integrate smart solutions that streamline operations, enhance customer engagement, and accelerate long-term growth."
  },
  {
    video: slide1,
    title: "Build High-Performance Teams",
    subtitle:
      "Structured hiring powered by intelligence and expertise."
  },
  {
    video: slide3,
    title: "Transform Your Business",
    subtitle:
      "AI-driven insights enabling smarter decision-making and measurable outcomes."
  }
];

export default function HeroSlider({ onNavigate }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          {/* Background Video */}
          <video
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Blue Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-100/70 to-blue-500/80" /> */}
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />


          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 text-white">

              <h4 className="uppercase text-blue-300 tracking-widest mb-4 text-sm font-medium">
                Welcome To RepliGenAI
              </h4>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
                {slide.title}
              </h1>

              <p className="mt-6 text-lg text-blue-100 max-w-2xl leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="mt-10 flex gap-6">
                <button
                  onClick={() => onNavigate("contact")}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 font-medium transition"
                >
                  Get Started
                </button>

                <button
                  onClick={() => onNavigate("services")}
                  className="border border-white px-8 py-3 hover:bg-white hover:text-blue-900 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 left-10 flex gap-4 z-30">
        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
          className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition"
        >
          ←
        </button>

        <button
          onClick={() =>
            setCurrent((prev) => (prev + 1) % slides.length)
          }
          className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition"
        >
          →
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 right-10 flex gap-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              index === current
                ? "bg-white"
                : "bg-blue-300/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
