import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [lang, setLang] = useState<'en' | 'ru'>('en');

  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100 selection:text-blue-900">
        <ScrollToTop />
        <Navbar lang={lang} setLang={setLang} />
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/privacy" element={<Privacy lang={lang} />} />
          <Route path="/terms" element={<Terms lang={lang} />} />
        </Routes>
        <Footer lang={lang} />
      </div>
    </Router>
  );
}
