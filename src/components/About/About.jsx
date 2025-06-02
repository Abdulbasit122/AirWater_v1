import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary-600 sm:text-5xl">
            About Our Company
          </h1>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto">
            We're dedicated to innovation and excellence, building solutions that empower our community.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary-600">
              Meet Our CEO
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Under the visionary leadership of our CEO, our company has pioneered cutting-edge technologies since 2025. 
              With a passion for progress, our team is committed to delivering impactful solutions that resonate globally.
            </p>
            <p className="text-gray-600 text-base sm:text-lg">
              Our CEO's mission is to foster a culture of creativity and collaboration, ensuring we remain at the forefront of 
              innovation while staying true to our core values of integrity and excellence.
            </p>
       
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="CEO Portrait"
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-lg border-4 border-blue-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
