import React from "react";
import { FaHome, FaUsers, FaGraduationCap, FaEnvelope, FaHandsHelping, FaLaptopCode, FaCalendarAlt, FaNewspaper, FaFlask, FaBook, FaFutbol } from "react-icons/fa";
import CountUp from 'react-countup';

function Home() {
  return (
    <div>
     
     <section className="py-20 mt-[30px] bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight relative group">
      Welcome to Shree Ghusel Secondary School
     
    </h1>
    <div className="w-20 h-1 bg-yellow-300 mx-auto mb-8"></div>
    <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
      Empowering minds, shaping futures, and nurturing excellence in education since [Year].
    </p>
    
  

    <div className="mt-12">
      <a
        href="#learn-more"
        className="inline-block bg-yellow-300 text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300"
      >
        Learn More
      </a>
    </div>
  </div>
</section>



       {/* Why Choose Us Section */}
<section className="bg-white p-8 rounded-xl">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center relative group">
    What We Offer You
    <span className="absolute left-[50%] -translate-x-1/2 bottom-0 w-[200px] h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="group bg-gray-100 p-4 md:p-6 rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <FaGraduationCap className="text-4xl md:text-5xl text-blue-600 mb-3 md:mb-4 relative z-10 group-hover:text-white transition-colors duration-300" />
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 relative z-10 group-hover:text-white transition-colors duration-300">
        Academic Excellence
      </h3>
      <p className="text-sm md:text-base text-gray-600 relative z-10 group-hover:text-white transition-colors duration-300">
        Our curriculum promotes critical thinking and creativity.
      </p>
    </div>

    {/* Card 2 */}
    <div className="group bg-gray-100 p-4 md:p-6 rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <FaUsers className="text-4xl md:text-5xl text-blue-600 mb-3 md:mb-4 relative z-10 group-hover:text-white transition-colors duration-300" />
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 relative z-10 group-hover:text-white transition-colors duration-300">
        Extracurricular Activities
      </h3>
      <p className="text-sm md:text-base text-gray-600 relative z-10 group-hover:text-white transition-colors duration-300">
        We offer a range of activities for holistic development.
      </p>
    </div>

    {/* Card 3 */}
    <div className="group bg-gray-100 p-4 md:p-6 rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <FaHandsHelping className="text-4xl md:text-5xl text-blue-600 mb-3 md:mb-4 relative z-10 group-hover:text-white transition-colors duration-300" />
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 relative z-10 group-hover:text-white transition-colors duration-300">
        Community Engagement
      </h3>
      <p className="text-sm md:text-base text-gray-600 relative z-10 group-hover:text-white transition-colors duration-300">
        We promote social responsibility and community involvement.
      </p>
    </div>

    {/* Card 4 */}
    <div className="group bg-gray-100 p-4 md:p-6 rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <FaEnvelope className="text-4xl md:text-5xl text-blue-600 mb-3 md:mb-4 relative z-10 group-hover:text-white transition-colors duration-300" />
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 relative z-10 group-hover:text-white transition-colors duration-300">
        Personalized Support
      </h3>
      <p className="text-sm md:text-base text-gray-600 relative z-10 group-hover:text-white transition-colors duration-300">
        Individual attention to guide students in achieving their goals.
      </p>
    </div>

    {/* Cards 5-9 (Hidden on Mobile) */}
    <div className="hidden md:block group bg-gray-100 p-6 rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <FaFutbol className="text-5xl text-blue-600 mb-4 relative z-10 group-hover:text-white transition-colors duration-300" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800 relative z-10 group-hover:text-white transition-colors duration-300">
        Sports Facilities
      </h3>
      <p className="text-gray-600 relative z-10 group-hover:text-white transition-colors duration-300">
        Well-maintained sports grounds and equipment.
      </p>
    </div>

    <div className="hidden md:block group bg-gray-100 p-6 rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <FaBook className="text-5xl text-blue-600 mb-4 relative z-10 group-hover:text-white transition-colors duration-300" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800 relative z-10 group-hover:text-white transition-colors duration-300">
        Extensive Library
      </h3>
      <p className="text-gray-600 relative z-10 group-hover:text-white transition-colors duration-300">
        A vast collection of books and digital resources.
      </p>
    </div>

    <div className="hidden md:block group bg-gray-100 p-6 rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <FaLaptopCode className="text-5xl text-blue-600 mb-4 relative z-10 group-hover:text-white transition-colors duration-300" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800 relative z-10 group-hover:text-white transition-colors duration-300">
        Technology Integration
      </h3>
      <p className="text-gray-600 relative z-10 group-hover:text-white transition-colors duration-300">
        We leverage modern technology to enhance learning.
      </p>
    </div>

    <div className="hidden md:block group bg-gray-100 p-6 rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <FaFlask className="text-5xl text-blue-600 mb-4 relative z-10 group-hover:text-white transition-colors duration-300" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800 relative z-10 group-hover:text-white transition-colors duration-300">
        Modern Laboratories
      </h3>
      <p className="text-gray-600 relative z-10 group-hover:text-white transition-colors duration-300">
        State-of-the-art science labs.
      </p>
    </div>

    <div className="hidden md:block group bg-gray-100 p-6 rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl">          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <FaHome className="text-5xl text-blue-600 mb-4 relative z-10 group-hover:text-white transition-colors duration-300" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 relative z-10 group-hover:text-white transition-colors duration-300">Career Guidance</h3>
          <p className="text-gray-600 relative z-10 group-hover:text-white transition-colors duration-300">Helping students explore opportunities for future success.</p>
        </div>
  </div>
</section>



        {/* Statistics Section */}
        <div className="p-10 bg-white-100">
          <h2 className="text-[27px] sm:text-[32px] font-bold text-gray-800 mb-8 text-center font-['Montserrat'] relative group">Our Achievements
            <span className="absolute left-[50%] -translate-x-1/2 bottom-0 w-[200px] h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="flex flex-col items-center p-5 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-transform duration-300 border-2 border-indigo-600/50">
              <div className="flex items-center justify-center w-19 sm:w-20 h-19 sm:h-20 rounded-full bg-indigo-100">
                <span className="text-3xl sm:text-4xl font-bold text-indigo-600">
                  <CountUp start={0} end={500} duration={2.5} suffix="+" />
                </span>
              </div>
              <p className="text-gray-700 font-medium mt-4 text-[17px] sm:text-[18px] font-['Roboto']">Total Students</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center p-5 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-transform duration-300 border-2 border-indigo-600/50">
              <div className="flex items-center justify-center w-19 sm:w-20 h-19 sm:h-20 rounded-full bg-indigo-100">
                <span className="text-3xl sm:text-4xl font-bold text-indigo-600">
                  <CountUp start={0} end={50} duration={2.5} suffix="+" />
                </span>
              </div>
              <p className="text-gray-700 font-medium mt-4 text-[17px] sm:text-[18px] font-['Roboto']">Expert Teachers</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-5 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-transform duration-300 border-2 border-indigo-600/50">
              <div className="flex items-center justify-center w-19 sm:w-20 h-19 sm:h-20 rounded-full bg-indigo-100">
                <span className="text-3xl sm:text-4xl font-bold text-indigo-600">
                  <CountUp start={0} end={95} duration={2.5} suffix="%" />
                </span>
              </div>
              <p className="text-gray-700 font-medium mt-4 text-[17px] sm:text-[18px] font-['Roboto']">Success Rate</p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center p-5 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-transform duration-300 border-2 border-indigo-600/50">
              <div className="flex items-center justify-center w-19 sm:w-20 h-19 sm:h-20 rounded-full bg-indigo-100">
                <span className="text-3xl sm:text-4xl font-bold text-indigo-600">
                  <CountUp start={0} end={25} duration={2.5} suffix="+" />
                </span>
              </div>
              <p className="text-gray-700 font-medium mt-4 text-[17px] sm:text-[18px] font-['Roboto']">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Featured Programs */}
        <section className="p-4 sm:p-8 bg-white">
          <h2 className="text-[24px] sm:text-[32px] font-bold text-gray-800 mb-6 sm:mb-8 text-center font-['Montserrat'] relative group">Featured Programs
            <span className="absolute left-[50%] -translate-x-1/2 bottom-0 w-[200px] h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {["Science", "Arts", "Commerce"].map((program, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-[20px] sm:text-[24px] font-semibold text-gray-800 mb-3 sm:mb-4 font-['Poppins']">{program} Stream</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-[14px] sm:text-[16px] font-['Inter']">
                  Discover our comprehensive {program.toLowerCase()} program designed to nurture future leaders in the
                  field.
                </p>
                <button className="bg-indigo-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-indigo-700 transition-colors duration-300 text-[14px] sm:text-[16px] font-['Roboto']">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="p-4 sm:p-8 bg-white">
          <h2 className="text-[24px] sm:text-[32px] font-bold text-gray-800 mb-6 sm:mb-8 text-center font-['Montserrat'] relative group">Upcoming Events
            <span className="absolute left-[50%] -translate-x-1/2 bottom-0 w-[200px] h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              { title: "Annual Sports Day", date: "July 15, 2025" },
              { title: "Science Fair", date: "December 15, 2027" },
              { title: "Parent-Teacher Meeting", date: "August 20, 2025" },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <FaCalendarAlt className="text-2xl sm:text-3xl text-indigo-600 mb-3 sm:mb-4" />
                <h3 className="text-[20px] sm:text-[24px] font-semibold text-gray-800 mb-2 font-['Poppins']">{event.title}</h3>
                <p className="text-gray-600 text-[14px] sm:text-[16px] font-['Inter']">{event.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Latest News */}
        <section className="p-2 sm:p-8 bg-white">
          <h2 className="text-[20px] sm:text-[32px] font-bold text-gray-800 mb-4 sm:mb-8 text-center font-['Montserrat'] relative group">Latest News
            <span className="absolute left-[50%] -translate-x-1/2 bottom-0 w-[150px] sm:w-[200px] h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {[
              { title: "Students Win National Quiz Competition", date: "June 0, 2025" },
              { title: "New Computer Lab Inaugurated", date: "August 5, 2025" },
              { title: "Alumni Reunion Scheduled for September", date: "May 8, 2025" },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-gray-100 p-3 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <FaNewspaper className="text-xl sm:text-3xl text-indigo-600 mb-2 sm:mb-4" />
                <h3 className="text-[16px] sm:text-[24px] font-semibold text-gray-800 mb-1 sm:mb-2 font-['Poppins']">{news.title}</h3>
                <p className="text-gray-600 mb-2 sm:mb-4 text-[12px] sm:text-[16px] font-['Inter']">{news.date}</p>
                <a href="www.facebook.com" className="text-indigo-600 hover:underline text-[12px] sm:text-[16px] font-['Roboto']">
                  Read more
                </a>
              </div>
            ))}
          </div>
        </section>

      {/* Call to Action */}
      <section className="p-8 bg-indigo-600 text-white text-center">
        <h2 className="text-[28px] sm:text-[32px] font-bold mb-4 font-['Montserrat']">Ready to Join Our School?</h2>
        <p className="mb-6 text-[18px] font-['Inter']">Take the first step towards a bright future. Apply now!</p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-[16px] font-['Roboto']">
          Apply Now
        </button>
      </section>
    </div>
  );
}

export default Home;