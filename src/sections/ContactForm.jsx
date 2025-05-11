import React, { useState } from "react";
import Button from "../components/Button";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.company) {
      newErrors.company = "Company is required.";
    }

    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type.";
    }

    if (!formData.message) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully (test)");
    }
  };

  return (
    <section id='contact' className='py-12 md:py-24 bg-background-50'>
      <div className='mx-auto px-6 2xl:px-0'>
        <FadeInWhenVisible delay={0.2}>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-text-900 text-center mb-3'>
            Get in Touch
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 text-center mb-12'>
            Fill out the form and our team will get back to you shortly.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.6}>
          <form
            onSubmit={handleSubmit}
            className='bg-secondary-50 dark:bg-background-100 border border-gray-300 px-8 py-12 rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto'>
            {/* left */}
            <div className='flex flex-col gap-5'>
              {["name", "email", "company"].map((field) => (
                <div key={field}>
                  <div className='flex justify-between items-center mb-1'>
                    <label
                      htmlFor={field}
                      className='block text-sm sm:text-base font-medium text-gray-700 mb-1 capitalize'>
                      {field} <span className='text-red-500'>*</span>
                    </label>

                    {errors[field] && (
                      <p className='text-xs sm:text-sm text-red-500 mt-1'>
                        {errors[field]}
                      </p>
                    )}
                  </div>

                  <input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    className='w-full bg-background-50 dark:bg-primary-50 border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition'
                    value={formData[field]}
                    placeholder={
                      field === "name"
                        ? "Enter your full name"
                        : field === "email"
                        ? "Enter your email address"
                        : field === "company" && "Enter your company here"
                    }
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                  />
                </div>
              ))}

              <div>
                <div className='flex justify-between items-center mb-1'>
                  <label
                    htmlFor='license-type'
                    className='block text-sm border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition'></label>

                  {errors.licenseType && (
                    <p className='text-xs sm:text-sm text-red-500 mt-1'>
                      {errors.licenseType}
                    </p>
                  )}
                </div>
                <select
                  id='license-type'
                  className='w-full bg-background-50 dark:bg-primary-50 border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition'
                  value={formData.licenseType}
                  onChange={(e) =>
                    setFormData({ ...formData, licenseType: e.target.value })
                  }>
                  <option value=''>Select type</option>
                  <option value='enterprise'>Enterprise</option>
                  <option value='cloud'>Cloud</option>
                  <option value='desktop'>Desktop</option>
                </select>
              </div>
            </div>

            {/* right */}

            <div className='flex flex-col h-full justify-between '>
              <div>
                <div className='flex justify-between items-center mb-1'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-1'>
                    Message <span className='text-red-500'>*</span>
                  </label>
                  {errors.message && (
                    <p className='text-xs sm:text-sm text-red-500 mt-1'>
                      {errors.message}
                    </p>
                  )}
                </div>

                <textarea
                  id='message'
                  rows={9}
                  className='text-sm sm:text-base text-gray-800 w-full bg-background-50 dark:bg-primary-50 border border-gray-300 rounded-lg px-4 py-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 transition'
                  value={formData.message}
                  placeholder='Write your message here...'
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <div className='mt-6'>
                <Button
                  type='submit'
                  variant='primary'
                  className='w-full text-base sm:text-lg'>
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default ContactForm;
