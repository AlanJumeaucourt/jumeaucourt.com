import Contact from "./components/Contact";
import Timeline from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";
import Skills from "./components/Skills";
import SkipLink from "./components/SkipLink";
import TravelMap from "./components/TravelMap";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <SEO />
      <SkipLink />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none" />
        <Header />
        <main id="main-content" className="container mx-auto px-4 py-8 space-y-4 relative">
          <Hero />
          <Projects />
          <TravelMap />
          <Timeline />
          <Skills />
          <Contact />
        </main>
        <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 text-gray-400 py-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              © {new Date().getFullYear()} Alan Jumeaucourt. Made with ❤️ and probably too much
              coffee.
            </p>
            <nav className="mt-3 flex justify-center gap-4 text-sm" aria-label="Site trust pages">
              <a href="/about" className="hover:text-gray-200 transition-colors">
                About
              </a>
              <a href="/contact" className="hover:text-gray-200 transition-colors">
                Contact
              </a>
              <a href="/privacy" className="hover:text-gray-200 transition-colors">
                Privacy
              </a>
            </nav>
          </div>
        </footer>
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;
