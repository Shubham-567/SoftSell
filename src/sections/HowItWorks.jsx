import { Upload, DollarSign, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id='how-it-works' className='py-20 bg-background-50'>
      <div className='max-w-6xl mx-auto text-center px-6'>
        <h2 className='text-3xl md:text-5xl font-semibold text-text-900 mb-12'>
          How It Works
        </h2>

        {/* steps */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* step 1*/}
          <div className='flex flex-col items-center text-center bg-secondary-50 text-gray-900 shadow-xl rounded-2xl p-8 transform transition-transform hover:scale-105'>
            <div className='text-accent-500 mb-6 transition-transform hover:scale-110'>
              <Upload size={48} />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Upload License</h3>
            <p className='text-sm'>
              Quickly upload your unused software licenses in a few simple
              steps.
            </p>
          </div>

          {/* step 2 */}
          <div className='flex flex-col items-center text-center bg-secondary-50 text-gray-900 shadow-xl rounded-2xl p-8 transform transition-transform hover:scale-105'>
            <div className='text-accent-500 mb-6 transition-transform hover:scale-110'>
              <DollarSign size={48} />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Get Valuation</h3>
            <p className='text-sm'>
              Receive a real-time valuation based on current market demand and
              pricing.
            </p>
          </div>

          {/* step 3 */}
          <div className='flex flex-col items-center text-center bg-secondary-50 text-gray-900 shadow-xl rounded-2xl p-8 transform transition-transform hover:scale-105'>
            <div className='text-accent-500 mb-6 transition-transform hover:scale-110'>
              <CheckCircle size={48} />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Get Paid</h3>
            <p className='text-sm'>
              Once accepted, receive fast payment via your preferred method.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
