import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  BadgeDollarSign,
} from "lucide-react";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Footer = () => {
  return (
    <footer className='bg-background-50 px-6 py-8'>
      <FadeInWhenVisible delay={0.2}>
        <div className='bg-background-100 border border-gray-300 text-secondary-950 px-8 py-12 rounded-3xl shadow-xl max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {/* logo */}
            <div>
              <h3 className='flex justify-start items-center gap-2 text-2xl sm:text-3xl text-primary-500 font-bold mb-4'>
                <BadgeDollarSign size={24} />
                SoftSell
              </h3>
              <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                Turning unused software into business value. Resell your
                licenses securely and quickly.
              </p>
            </div>

            {/* quick links */}
            <div>
              <h4 className='text-lg sm:text-xl font-semibold mb-4'>
                Quick Links
              </h4>
              <ul className='space-y-2 text-sm text-gray-800'>
                <li>
                  <a
                    href='#how-it-works'
                    aria-label='how it works'
                    className='hover:text-text-500 transition-colors'>
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href='#why-us'
                    aria-label='why choose us'
                    className='hover:text-text-500 transition-colors'>
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    aria-label='contact'
                    className='hover:text-text-500 transition-colors'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* social icons */}
            <div>
              <h4 className='text-lg sm:text-xl font-semibold mb-4'>
                Follow Us
              </h4>
              <div className='flex gap-4'>
                {[
                  { Icon: Facebook, label: "facebook" },
                  { Icon: Twitter, label: "twitter x" },
                  { Icon: Linkedin, label: "linkedin" },
                  { Icon: Mail, label: "email" },
                ].map(({ Icon, label }, idx) => (
                  <a
                    key={idx}
                    href='#'
                    aria-label={label}
                    className='p-2 bg-secondary-100 border border-gray-300 dark:border-none rounded-full hover:bg-accent-500 hover:text-white transition-colors'>
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-10 text-center text-xs sm:text-sm text-gray-500'>
            &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
          </div>
        </div>
      </FadeInWhenVisible>
    </footer>
  );
};

export default Footer;
