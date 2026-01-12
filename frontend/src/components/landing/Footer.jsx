import React from 'react';
import { footerData, heroData } from '../../data/mock';
import { MessageCircle, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-[#0054C5]">Vibe</span>
            </h3>
            <p className="text-[#888888] mb-6 max-w-sm leading-relaxed">
              {footerData.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center text-[#888888] hover:bg-[#0054C5] hover:text-white transition-all duration-200 hover:translate-y-[-2px]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center text-[#888888] hover:bg-[#0054C5] hover:text-white transition-all duration-200 hover:translate-y-[-2px]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center text-[#888888] hover:bg-[#0054C5] hover:text-white transition-all duration-200 hover:translate-y-[-2px]"
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
                    className="text-[#888888] hover:text-[#05DBF2] transition-colors"
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
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0054C5]/10 border border-[#0054C5]/30 text-[#05DBF2] font-medium hover:bg-[#0054C5]/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm text-[#888888]">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
