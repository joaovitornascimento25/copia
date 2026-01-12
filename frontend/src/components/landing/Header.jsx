import React, { useState, useEffect } from 'react';
import { heroData } from '../../data/mock';
import { Button } from '../ui/button';
import { MessageCircle, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Problemas', href: '#problemas' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Para quem', href: '#para-quem' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-white">
            <span className="text-[#0054C5]">Vibe</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-[#d1d1d1] hover:text-[#05DBF2] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href={heroData.ctaLink} target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-[#0054C5] hover:bg-[#003d91] text-white font-semibold px-5 py-2.5 h-auto rounded-xl transition-all duration-200 hover:translate-y-[-1px] hover:shadow-[0_4px_15px_rgba(0,84,197,0.4)]"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/98 backdrop-blur-lg border-b border-white/10">
            <nav className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="text-[#d1d1d1] hover:text-[#05DBF2] transition-colors py-2 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a 
                  href={heroData.ctaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <Button 
                    className="w-full bg-[#0054C5] hover:bg-[#003d91] text-white font-semibold px-5 py-3 h-auto rounded-xl"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chamar no WhatsApp
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
