export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Repligen<span className="text-neutral-400">AI</span>
            </h3>
            <p className="mt-4 text-neutral-400 max-w-md text-sm leading-relaxed">
              AI-assisted tech staffing with rigorous human screening for U.S.
              companies.
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div className="space-y-3">
              <p className="text-white font-medium">Company</p>
              <p className="text-neutral-400">About</p>
              <p className="text-neutral-400">Careers</p>
              <p className="text-neutral-400">Contact</p>
            </div>
            <div className="space-y-3">
              <p className="text-white font-medium">Services</p>
              <p className="text-neutral-400">Data & AI</p>
              <p className="text-neutral-400">Cloud & DevOps</p>
              <p className="text-neutral-400">Cybersecurity</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} RepligenAI LLC</span>
          <span>Overland Park, Kansas</span>
        </div>
      </div>
    </footer>
  );
}
