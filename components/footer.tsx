import { Beaker, Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#050816] text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section with Links and Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          {/* Logo & Description */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-none bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Beaker className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight">PhytoGenix</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed mb-8">
              Pioneering the future of herbal clinical research through AI-driven molecular synthesis and digital trial management.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center hover:bg-emerald-500 transition-colors group">
                  <Icon className="w-5 h-5 text-white/40 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Platform</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Research Tools</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Clinical Trials</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Laboratory Analysis</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Company</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Vision</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Contact</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>hello@PhytoGenix.lab</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>+234 800 PhytoGenix</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-500 mt-1" />
                <span>Afe Babalola Way, <br />Ado-Ekiti, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Massive Brand Name Section */}
        <div className="relative mt-24 pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 text-xs font-bold uppercase tracking-widest text-white/20">
            <p>© 2026 PhytoGenix LABS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>

          {/* Big Bold Brand Name */}
          <div className="w-full select-none pointer-events-none overflow-hidden">
            <h2 className="text-[12vw] md:text-[18vw] font-black text-white/[0.5] leading-none tracking-tighter text-center uppercase translate-y-8">
              PhytoGenix
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
