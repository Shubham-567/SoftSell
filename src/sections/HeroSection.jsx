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
      {/* Dark Mode Background */}
      <div className='absolute inset-0 dark:block'>
        <div className='absolute inset-0 z-[-2] h-full w-full bg-background-50 bg-[radial-gradient(ellipse_95%_95%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
      </div>

      {/* Light Mode Background */}
      <div className='absolute inset-0 dark:hidden'>
        <div className='absolute inset-0 z-[-2] h-full w-full bg-gradient-to-b from-primary-500 via-secondary-100 to-background-50 opacity-90 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.1),transparent)]' />
      </div>

      {/* Light Mode Background */}
      <div className='absolute inset-0 dark:hidden'>
        <div className='absolute inset-0 z-[-2] h-full w-full bg-gradient-to-b from-primary-500 via-secondary-100 to-background-50 opacity-90' />
      </div>

      <div className='relative m-6 z-10 flex h-full flex-col items-center justify-center px-4'>
        <div className='max-w-3xl text-center'>
          <FadeInWhenVisible delay={0.2}>
            <h1 className='max-w-2xl mx-auto mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-900 leading-tight'>
              Turn Unused Software Into{" "}
              <span className='bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent'>
                Cash
              </span>
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <p className='mx-auto mb-10 text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl'>
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
