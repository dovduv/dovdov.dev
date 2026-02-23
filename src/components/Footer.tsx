import { Link } from "react-router-dom";
import { Instagram, Youtube, Send } from "lucide-react";
import { translations } from "../translations";

interface FooterProps {
  lang: 'en' | 'ru';
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="pt-24 pb-12 px-6 bg-white border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Brand & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-3xl font-black tracking-tighter">
              dovdov<span className="text-blue-600">.dev</span>
            </div>
            <p className="text-zinc-500 max-w-xs leading-relaxed text-sm">
              {t.footerDesc}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/dovdov.dev" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://t.me/dovdovdev" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">{t.footerAbout}</h4>
            <ul className="space-y-3 text-sm font-black">
              <li><a href="#" className="hover:text-blue-600 transition-colors">{t.footerEditorial}</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">{t.footerAdvertising}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">{t.footerApps}</h4>
            <ul className="space-y-3 text-sm font-black">
              <li><a href="#" className="hover:text-blue-600 transition-colors">{t.footerIOS}</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">{t.footerAppleTV}</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">{t.footerAndroid}</a></li>
              <li className="pt-4 border-t border-black/5">
                <Link to="/privacy" className="hover:text-blue-600 transition-colors block text-zinc-400 font-bold text-xs uppercase tracking-tighter">
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600 transition-colors block text-zinc-400 font-bold text-xs uppercase tracking-tighter">
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Phone Mockup */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="absolute top-0 right-0 w-64 h-[500px] bg-white rounded-[2.5rem] border-[8px] border-black shadow-2xl overflow-hidden transition-all duration-700">
              <div className="px-6 pt-4 flex justify-between items-center text-[10px] font-bold">
                <span>21:44</span>
                <div className="flex gap-1">
                  <div className="w-3 h-2 bg-black/20 rounded-sm" />
                  <div className="w-2 h-2 bg-black/20 rounded-full" />
                </div>
              </div>
              <div className="h-6 bg-black w-1/3 mx-auto rounded-b-xl mb-6" />
              <div className="px-5 space-y-6">
                <h3 className="text-xl font-black tracking-tighter">Лента</h3>
                <div className="relative aspect-[3/4] bg-zinc-100 rounded-2xl overflow-hidden group">
                  <img 
                    src="https://picsum.photos/seed/wallpaper/400/600" 
                    alt="Mockup" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                    <div className="text-[8px] text-white/70 font-bold uppercase mb-1">Игры, Новости • 4 часа назад</div>
                    <div className="text-[10px] text-white font-bold leading-tight">
                      Игровая неделя: Фил Спенсер покидает Xbox...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-black/5 text-sm text-zinc-400 font-medium flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} dovdov.dev. {t.rights}</div>
          <div className="flex gap-6">
            <span className="text-[10px] uppercase tracking-widest font-black text-zinc-300">v1.0.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
