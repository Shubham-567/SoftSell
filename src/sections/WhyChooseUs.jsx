import { ShieldCheck, Users, Scale, Headset } from "lucide-react";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const WhyChooseUs = () => {
  return (
    <section id='why-us' className='py-10 px-5 md:py-20 bg-background-50'>
      <div className='bg-secondary-50 dark:bg-background-100 max-w-7xl mx-auto px-6 md:px-12 py-12 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start'>
        {/* left headings*/}
        <div className='text-center lg:text-left'>
          <FadeInWhenVisible delay={0.2}>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-text-900 mb-4'>
              Why Choose SoftSell?
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            {" "}
            <p className='text-base sm:text-lg  text-gray-600 mb-14 max-w-2xl mx-auto'>
              We make software license resale simple, secure, and reliable
              backed by thousands of happy customers.
            </p>
          </FadeInWhenVisible>
        </div>

        {/* right benefits */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {/* tile 1 */}
          <FadeInWhenVisible delay={0.4}>
            <div className='p-6 bg-background-100 dark:bg-primary-50 text-text-950 rounded-2xl border border-gray-300 transform duration-400 transition-transform hover:scale-105'>
              <div className='text-accent-500 mb-4'>
                <ShieldCheck size={32} />
              </div>
              <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-1'>
                Fast & Secure
              </h3>
              <p className='text-sm sm:text-base text-gray-600'>
                Transactions are fast and protected with industry-grade
                security.
              </p>
            </div>
          </FadeInWhenVisible>

          {/* tile 2 */}
          <FadeInWhenVisible delay={0.6}>
            <div className='p-6 bg-background-100 dark:bg-primary-50 text-text-950 rounded-2xl border border-gray-300 transform duration-400 transition-transform hover:scale-105'>
              <div className='text-accent-500 mb-4'>
                <Users size={32} />
              </div>
              <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-1'>
                Trusted by 1000+ Clients
              </h3>
              <p className='text-sm sm:text-base text-gray-600'>
                Businesses worldwide rely on us to resell unused licenses.
              </p>
            </div>
          </FadeInWhenVisible>

          {/* tile 3 */}
          <FadeInWhenVisible delay={0.8}>
            <div className='p-6 bg-background-100 dark:bg-primary-50 text-text-950 rounded-2xl border border-gray-300 transform duration-400 transition-transform hover:scale-105'>
              <div className='text-accent-500 mb-4'>
                <Scale size={32} />
              </div>
              <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-1'>
                Transparent Valuation
              </h3>
              <p className='text-sm sm:text-base text-gray-600'>
                You get clear, fair pricing based on current market data.
              </p>
            </div>
          </FadeInWhenVisible>

          {/* tile 4 */}
          <FadeInWhenVisible delay={1}>
            <div className='p-6 bg-background-100 dark:bg-primary-50 text-text-950 rounded-2xl border border-gray-300 transform duration-400 transition-transform hover:scale-105'>
              <div className='text-accent-500 mb-4'>
                <Headset size={32} />
              </div>
              <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-1'>
                Dedicated Support
              </h3>
              <p className='text-sm sm:text-base text-gray-600'>
                Our expert team is ready to help, whenever you need us.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
