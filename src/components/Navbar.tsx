import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-ivory/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-4 border-b border-black/5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] flex justify-between items-center">
        <a href="#" className="flex flex-col items-start group">
          <span className="font-serif text-[24px] font-bold tracking-[1px] uppercase text-brand-ink">
            The Zyon Interiors
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[32px]">
          <a href="#about" className="text-[13px] tracking-[1px] uppercase text-brand-ink opacity-70 hover:opacity-100 transition-opacity">About</a>
          <a href="#services" className="text-[13px] tracking-[1px] uppercase text-brand-ink opacity-70 hover:opacity-100 transition-opacity">Services</a>
          <a href="#portfolio" className="text-[13px] tracking-[1px] uppercase text-brand-ink opacity-70 hover:opacity-100 transition-opacity">Portfolio</a>
          <a href="#process" className="text-[13px] tracking-[1px] uppercase text-brand-ink opacity-70 hover:opacity-100 transition-opacity">Process</a>
          
          <div className="flex items-center space-x-4 pl-6">
            <a href="https://wa.me/917288999123" target="_blank" rel="noreferrer" className="text-brand-ink opacity-70 hover:opacity-100 transition-opacity" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="tel:+917288999123" className="text-brand-ink opacity-70 hover:opacity-100 transition-opacity" aria-label="Call Now">
              <Phone className="w-5 h-5" />
            </a>
            <a href="#contact" className="btn-primary uppercase tracking-[1px]">
              Book Consultation
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-ivory shadow-xl border-t border-brand-ink/5 md:hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif italic hover:text-brand-sage">About</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif italic hover:text-brand-sage">Services</a>
              <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif italic hover:text-brand-sage">Portfolio</a>
              <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif italic hover:text-brand-sage">Process</a>
              
              <div className="pt-6 mt-6 border-t border-brand-ink/10 flex flex-col space-y-4">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary text-center">
                  Book Free Consultation
                </a>
                <div className="flex justify-center space-x-8">
                  <a href="https://wa.me/917288999123" className="flex items-center space-x-2 text-brand-light-ink hover:text-brand-sage">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-[13px] tracking-[1px] uppercase font-bold">WhatsApp</span>
                  </a>
                  <a href="tel:+917288999123" className="flex items-center space-x-2 text-brand-light-ink hover:text-brand-sage">
                    <Phone className="w-5 h-5" />
                    <span className="text-[13px] tracking-[1px] uppercase font-bold">Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
