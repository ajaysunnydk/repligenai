import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { id: "services", label: "Services" },
    { id: "industries", label: "Industries" },
    { id: "careers", label: "Careers" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => onNavigate("home")}
            className="text-lg font-semibold tracking-tight text-white"
          >
            Repligen<span className="text-neutral-400">AI</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm transition-colors ${
                  currentPage === item.id
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-neutral-300 hover:text-white"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-black text-white">
          <div className="flex justify-between items-center h-20 px-6">
            <span className="text-lg font-semibold">RepligenAI</span>
            <button onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="px-6 pt-10 space-y-6">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setOpen(false);
                }}
                className="block text-2xl font-medium tracking-tight text-neutral-300 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
