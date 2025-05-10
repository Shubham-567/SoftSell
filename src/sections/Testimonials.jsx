import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='py-20 bg-background-100 relative overflow-hidden'>
      <div className='relative z-10 max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-4xl font-bold text-text-900 mb-4'>Customer Love</h2>
        <p className='text-lg text-gray-600 mb-14 max-w-2xl mx-auto'>
          Hear from real clients who’ve successfully sold their unused software
          licenses.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='bg-secondary-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-400 text-left hover:scale-102'>
            <div className='mb-4 text-accent-500'>
              <Quote size={32} />
            </div>
            <p className='text-gray-700 mb-6 text-base leading-relaxed'>
              “SoftSell made it incredibly easy to sell our unused software
              licenses. The process was fast, transparent, and hassle-free.”
            </p>
            <div className='flex items-center gap-4'>
              <div className='w-10 h-10 rounded-full bg-primary-500 text-text-50 flex items-center justify-center font-semibold'>
                JM
              </div>
              <div>
                <p className='font-semibold text-gray-800'>Jane Mitchell</p>
                <p className='text-sm text-gray-500'>
                  IT Director, TechNova Inc.
                </p>
              </div>
            </div>
          </div>

          <div className='bg-secondary-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 text-left hover:scale-102'>
            <div className='mb-4 text-accent-500'>
              <Quote size={32} />
            </div>
            <p className='text-gray-700 mb-6 text-base leading-relaxed'>
              “A seamless experience from start to finish. We recovered value
              from licenses we thought were useless. Highly recommended!”
            </p>
            <div className='flex items-center gap-4'>
              <div className='w-10 h-10 rounded-full bg-accent-500 text-text-50 flex items-center justify-center font-semibold'>
                CR
              </div>
              <div>
                <p className='font-semibold text-gray-800'>Carlos Rivera</p>
                <p className='text-sm text-gray-500'>
                  Operations Lead, ByteCraft Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
