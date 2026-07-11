import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const FooterSection = () => {
  return (
    <div className="bg-[#C9D4AA] pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-3xl px-12 py-8 shadow-sm">
            <img 
              src="/assets/jiva-logo.png" 
              alt="Jiva Organics"
              className="h-24 w-auto"
            />
          </div>
        </div>

        {/* Social Media CTA */}
        <div className="bg-[#E8EBD8] rounded-3xl p-8 md:p-12 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-[#4A5D3F] text-center mb-4">
            Like our products?
          </h3>
          <p className="text-base md:text-lg text-[#4A5D3F] text-center mb-8 opacity-80">
            Support us by leaving a review and by following us on social media.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://www.instagram.com/jiva.organics?igsh=MXRud2gxeDN5OGFpNA=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#5C6247] rounded-full flex items-center justify-center hover:bg-[#4A5038] transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a 
              href="https://www.facebook.com/share/1DRa2ERSGz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#5C6247] rounded-full flex items-center justify-center hover:bg-[#4A5038] transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a 
              href="mailto:contact@jivaorganics.com"
              className="w-14 h-14 bg-[#D4A259] rounded-full flex items-center justify-center hover:bg-[#C09248] transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center">
          <div className="flex justify-center gap-4 md:gap-8 mb-4 flex-wrap">
            <a href="#terms" className="text-[#4A5D3F] hover:text-[#3A4D2F] transition-colors text-sm md:text-base">
              Terms & Support
            </a>
            <a href="#privacy" className="text-[#4A5D3F] hover:text-[#3A4D2F] transition-colors text-sm md:text-base">
              Privacy Policy
            </a>
          </div>
          <p className="text-[#4A5D3F] text-xs md:text-sm opacity-70">
            © 2026 Jiva Organics. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;