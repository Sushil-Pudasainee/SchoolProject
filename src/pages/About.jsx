import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY); // Track scroll position for the parallax effect
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
     {/* Parallax Section */}
<div
  className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
  style={{
    backgroundImage: "url('/assets/Aboutus.jpeg')",
    backgroundPosition: `center ${scrollY * 0.5}px`,
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative z-10 text-center text-white">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
    <p className="text-xl">Building Future Leaders Since 1990</p>
  </div>
</div>

      {/* About Section */}

<div className="py-10 px-4">
<h2 className="text-4xl font-bold text-center mb-10">ABOUT US</h2>
<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
<div className="flex-shrink-0">
      <img
        src="/assets/School.jpeg"
        alt="school"
        className="w-[617px] h-[670px] object-cover shadow-lg"
      />
    </div>
    <div className="flex-1 text-lg leading-relaxed text-gray-700">
      <p className="text-justify">
        Shree Ghusel Secondary School is a leading educational institution in
        Ghusel, Lalitpur, Nepal. Our mission is to provide a comprehensive
        learning experience and prepare students for success in their academic
        and professional pursuits. It is a a hub of learning and excellence since 1990,
        nestled in the serene environment of Ghusel, Lalitpur. We are dedicated to providing
        quality education to empower young minds. At Shree Ghusel Secondary School, we offer
        a well-rounded education that includes advanced academic programs, arts, sports, and 
        technology to prepare our students for future challenges. We believe in the power of
        education to transform lives and promote equality, diversity, and sustainable development.

        With a strong foundation in both traditional values and modern teaching methodologies,
         Shree Ghusel Secondary School is committed to nurturing the potential of every student.
          We cater to students from diverse backgrounds, fostering a sense of unity, respect, and collaboration.
          Our campus boasts well-equipped classrooms, a library rich in resources, dedicated faculty, and facilities
           for co-curricular activities, creating an environment that encourages holistic development. Whether it
          academic excellence, creative expression, or social responsibility, we strive to cultivate these qualities in
            our students to prepare them for the challenges of the 21st century.
            
            At Shree Ghusel Secondary School, educationis more than just books and exams; it is a journey of self-discovery,
             innovation, and lifelong learning.


      </p>
    </div>
  </div>
</div>


     {/* Vision Section */}
     <div className="py-10 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
          <div className="text-lg leading-relaxed text-gray-700 max-w-lg">
          Our vision is to foster a culture of academic excellence and holistic
          development for students, ensuring they become responsible citizens of
          tomorrow.
          </div>
          <div>
            <img
              src="/assets/photo.png"
              alt="study"
              className="rounded-xl w-80 mx-auto shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-10 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 left-0">
        <div>
            <img
              src="/assets/photo.png"
              alt="study"
              className=" w-80 mx-auto shadow-lg"
              style={{
                borderRadius:"46% 54% 35% 65% / 76% 30% 70% 24% ",
              }}
            />
          </div>
          <div className="text-lg leading-relaxed text-gray-700 max-w-lg">
            Our mission is to make every child's future bright, making them more
            responsible toward their family, birthplace, and country.
          </div>
          
        </div>
      </div>

      
      

{/* Objectives Section */}
<div className="py-10 px-4 text-center">
  <h2 className="text-3xl font-semibold mb-6">Our Objectives</h2>
  <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
    <div className="text-lg leading-relaxed text-gray-700 max-w-lg">
      <ul className="space-y-3 text-left">
        <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
          <FaCheckCircle className="text-[#2a7cce] mr-2 min-w-[20px]" />
          Promote academic excellence
        </li>
        <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
          <FaCheckCircle className="text-[#2a7cce] mr-2 min-w-[20px]" />
          Empower students through knowledge and skills
        </li>
        <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
          <FaCheckCircle className="text-[#2a7cce] mr-2 min-w-[20px]" />
          Inculcate ethical and moral values
        </li>
        <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
          <FaCheckCircle className="text-[#2a7cce] mr-2 min-w-[20px]" />
          Foster innovation and integrate modern technology
        </li>
        <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
          <FaCheckCircle className="text-[#2a7cce] mr-2 min-w-[20px]" />
          Promote inclusiveness and equal opportunities
        </li>
        <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
          <FaCheckCircle className="text-[#2a7cce] mr-2 min-w-[20px]" />
          Support environmental awareness and sustainability
        </li>
        <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
          <FaCheckCircle className="text-[#2a7cce] mr-2 min-w-[20px]" />
          Encourage lifelong learning
        </li>
        <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
          <FaCheckCircle className="text-[#2a7cce] mr-2 min-w-[20px]" />
          Develop leadership and teamwork skills
        </li>
        <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
          <FaCheckCircle className="text-[#2a7cce] mr-2 min-w-[20px]" />
          Strengthen community engagement and collaboration
        </li>
      </ul>
    </div>
    <div>
      <img
        src="/assets/photo.png"
        alt="study"
        className="w-80 mx-auto shadow-lg"
        style={{
          borderRadius: "51% 49% 58% 42% / 30% 30% 70% 70%",
        }}
      />
    </div>
  </div>
</div>
  </div>


 
    
  );
};

export default About;



 