import React from 'react';
import { footerData, heroData } from '../../data/mock';
import { MessageCircle, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[rgb(26,28,30)] border-t border-[rgba(255,255,255,0.1)] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-[rgb(218,255,1)]">Vibe</span>
            </h3>
            <p className="text-[rgb(161,161,170)] mb-6 max-w-sm leading-relaxed">
              {footerData.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 hover:translate-y-[-2px]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 hover:translate-y-[-2px]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 hover:translate-y-[-2px]"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              {footerData.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Fale conosco</h4>
            <a 
              href={heroData.ctaLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[rgba(218,255,1,0.1)] border border-[rgba(218,255,1,0.2)] text-[rgb(218,255,1)] font-medium hover:bg-[rgba(218,255,1,0.2)] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8">
          <p className="text-center text-sm text-[rgb(161,161,170)]">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
