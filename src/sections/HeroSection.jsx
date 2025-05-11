import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const HeroSection = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      <Navbar />

      {/* Background Gradient */}
      <div className='absolute inset-0'>
        <div className='absolute bottom-0 right-0 z-[-2] h-full w-full bg-gradient-to-b from-primary-500 via-secondary-100 to-background-50 opacity-90' />
      </div>

      <div className='relative m-6 z-10 flex h-full flex-col items-center justify-center px-4'>
        <div className='max-w-3xl text-center'>
          <FadeInWhenVisible delay={0.2}>
            <h1 className='max-w-2xl mx-auto mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight'>
              Turn Unused Software Into
              <span className='text-primary-500'> Cash</span>
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <p className='mx-auto mb-10 text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl'>
              SoftSell helps businesses resell their unused software licenses
              quickly and securely. Maximize the value of software you no longer
              need.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.6}>
            <div className='flex flex-wrap justify-center gap-4'>
              <Button variant='primary'>Sell My Licenses</Button>
              <Button variant='outline'>Learn More</Button>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
