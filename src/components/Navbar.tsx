interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-white">
        
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide">
          RepliGenAI
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <button onClick={() => onNavigate("home")} className="hover:text-green-400 transition">
            Home
          </button>
          <button onClick={() => onNavigate("about")} className="hover:text-green-400 transition">
            About
          </button>
          <button onClick={() => onNavigate("services")} className="hover:text-green-400 transition">
            Services
          </button>
          <button onClick={() => onNavigate("contact")} className="hover:text-green-400 transition">
            Contact
          </button>
        </nav>

        {/* CTA */}
        <button
          onClick={() => onNavigate("contact")}
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm font-medium transition"
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
