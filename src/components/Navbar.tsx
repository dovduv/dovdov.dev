import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { translations } from "../translations";

interface NavbarProps {
  lang: 'en' | 'ru';
  setLang: (lang: 'en' | 'ru') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const t = translations[lang];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-black">DD</span>
            </div>
            dovdov<span className="text-blue-600">.dev</span>
          </motion.div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/#apps" className="hover:text-blue-600 transition-colors">{t.navApps}</Link>
          <Link to="/#about" className="hover:text-blue-600 transition-colors">{t.navAbout}</Link>
          <Link to="/#contact" className="hover:text-blue-600 transition-colors">{t.navContact}</Link>
          
          <div className="flex items-center gap-2 border-l border-black/10 pl-8">
            {(['en', 'ru'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`uppercase text-[10px] font-black w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                  lang === l ? 'bg-blue-600 text-white' : 'hover:bg-zinc-100'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors"
        >
          {t.playMarket}
        </motion.button>
      </div>
    </nav>
  );
}
