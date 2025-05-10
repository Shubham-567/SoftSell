import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const HeroSection = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      <Navbar />

      {/* Background Gradient */}
      <div className='absolute inset-0'>
        <div className='absolute bottom-0 right-0 z-[-2] h-full w-full bg-gradient-to-b from-primary-500 via-secondary-100  to-background-50 opacity-90' />
      </div>

      <div className='relative z-10 flex h-full flex-col items-center justify-center px-4'>
        <div className='max-w-3xl text-center'>
          <h1 className='mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight'>
            Turn Unused Software Into
            <span className='text-primary-500'> Cash</span>
          </h1>

          <p className='mx-auto mb-10 max-w-3xl text-lg text-slate-700'>
            SoftSell helps businesses resell their unused software licenses
            quickly and securely. Maximize the value of software you no longer
            need.
          </p>

          <div className='flex flex-wrap justify-center gap-4'>
            <Button variant='primary'>Sell My Licenses</Button>
            <Button variant='outline'>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
