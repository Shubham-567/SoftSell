import { Upload, DollarSign, CheckCircle } from "lucide-react";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const HowItWorks = () => {
  return (
    <section id='how-it-works' className='py-12 md:py-20 bg-background-50'>
      <div className='max-w-6xl mx-auto text-center px-6'>
        <FadeInWhenVisible delay={0.2}>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-text-900 mb-4'>
            How It Works
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 mb-14 max-w-2xl mx-auto'>
            A simple 3-step process to turn your unused software licenses into
            cash.
          </p>
        </FadeInWhenVisible>

        {/* steps */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* step 1*/}
          <FadeInWhenVisible delay={0.6}>
            <div className='flex flex-col items-center text-center bg-secondary-50 border border-gray-300 text-gray-900 shadow-xl rounded-2xl p-8 transform duration-400 transition-transform hover:scale-105'>
              <div className='text-accent-500 mb-6 transition-transform hover:scale-110'>
                <Upload size={48} />
              </div>
              <h3 className='text-lg sm:text-xl md:text-2xl font-semibold mb-3'>
                Upload License
              </h3>
              <p className='text-sm sm:text-base text-gray-700'>
                Quickly upload your unused software licenses in a few simple
                steps.
              </p>
            </div>
          </FadeInWhenVisible>

          {/* step 2 */}
          <FadeInWhenVisible delay={0.8}>
            <div className='flex flex-col items-center text-center bg-secondary-50 border border-gray-300 text-gray-900 shadow-xl rounded-2xl p-8 transform duration-400 transition-transform hover:scale-105'>
              <div className='text-accent-500 mb-6 transition-transform hover:scale-110'>
                <DollarSign size={48} />
              </div>
              <h3 className='text-lg sm:text-xl md:text-2xl font-semibold mb-3'>
                Get Valuation
              </h3>
              <p className='text-sm sm:text-base text-gray-700'>
                Receive a real-time valuation based on current market demand and
                pricing.
              </p>
            </div>
          </FadeInWhenVisible>

          {/* step 3 */}
          <FadeInWhenVisible delay={1}>
            <div className='flex flex-col items-center text-center bg-secondary-50 border border-gray-300 text-gray-900 shadow-xl rounded-2xl p-8 transform duration-400 transition-transform hover:scale-105'>
              <div className='text-accent-500 mb-6 transition-transform hover:scale-110'>
                <CheckCircle size={48} />
              </div>
              <h3 className='text-lg sm:text-xl md:text-2xl font-semibold mb-3'>
                Get Paid
              </h3>
              <p className='text-sm sm:text-base text-gray-700'>
                Once accepted, receive fast payment via your preferred method.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
