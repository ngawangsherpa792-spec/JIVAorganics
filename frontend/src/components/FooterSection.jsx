import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const FooterSection = () => {
  return (
    <div className="bg-[#C9D4AA] pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Social Media CTA */}
        <div className="bg-[#E8EBD8] rounded-3xl p-12 mb-8">
          <h3 className="text-3xl font-bold text-[#5C6247] text-center mb-4">
            Like our products?
          </h3>
          <p className="text-lg text-[#5C6247] text-center mb-8 opacity-80">
            Support us by leaving a review and by following us on social media.
          </p>
          
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="w-14 h-14 bg-[#5C6247] rounded-full flex items-center justify-center hover:bg-[#4A5038] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-[#5C6247] rounded-full flex items-center justify-center hover:bg-[#4A5038] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-[#D4A259] rounded-full flex items-center justify-center hover:bg-[#C09248] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center">
          <div className="flex justify-center gap-8 mb-4">
            <a href="#" className="text-[#5C6247] hover:text-[#4A5038] transition-colors">
              Terms & Support
            </a>
            <a href="#" className="text-[#5C6247] hover:text-[#4A5038] transition-colors">
              Privacy Policy
            </a>
          </div>
          <p className="text-[#5C6247] text-sm opacity-70">
            © 2026 Jiva Organics. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;