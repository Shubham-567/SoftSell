import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { Menu, X, BadgeDollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className='absolute top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-full bg-background-50 backdrop-blur shadow-lg px-6 py-3'>
      <div className='flex items-center justify-between'>
        {/* logo */}
        <div className='flex justify-start items-center gap-2 text-xl font-bold tracking-tight text-primary-500'>
          <BadgeDollarSign size={24} />
          SoftSell
        </div>

        {/* desktop nav links */}
        <nav className='hidden md:flex items-center space-x-8 text-sm font-medium text-secondary-900'>
          <a href='#how-it-works' className='hover:text-primary-500 transition'>
            How It Works
          </a>
          <a href='#why-us' className='hover:text-primary-500 transition'>
            Why Choose Us
          </a>
          <a href='#contact' className='hover:text-primary-500 transition'>
            Contact
          </a>
        </nav>

        {/* CTA - desktop */}
        <div className='hidden md:block'>
          <a href='#contact'>
            <Button variant='primary'>Sell Now</Button>
          </a>
        </div>

        {/* mobile hamburger icon */}
        <div className='md:hidden relative' ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-gray-700 hover:text-primary-500'
            aria-label='Toggle Menu'>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* dropdown menu - mobile */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 8 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className='absolute right-0 mt-3 w-56 rounded-xl bg-background-50 shadow-lg p-4 flex flex-col space-y-3 text-sm font-medium text-gray-800 z-50'>
                <a
                  href='#how-it-works'
                  className='hover:text-primary-500 transition'
                  onClick={() => setMenuOpen(false)}>
                  How It Works
                </a>
                <a
                  href='#why-us'
                  className='hover:text-primary-500 transition'
                  onClick={() => setMenuOpen(false)}>
                  Why Choose Us
                </a>
                <a
                  href='#contact'
                  className='hover:text-primary-500 transition'
                  onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
                <div className='pt-2'>
                  <a href='#contact' onClick={() => setMenuOpen(false)}>
                    <Button variant='primary' className='w-full'>
                      Sell Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
