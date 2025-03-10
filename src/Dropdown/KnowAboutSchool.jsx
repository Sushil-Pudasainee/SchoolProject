import React from 'react';

function KnowAboutSchool() {
  return (
    <div className="py-16 px-4 bg-gray-50">
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
            and professional pursuits. It is a hub of learning and excellence since 1990,
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
            be academic excellence, creative expression, or social responsibility, we strive to cultivate these qualities in
            our students to prepare them for the challenges of the 21st century.
            
            At Shree Ghusel Secondary School, education is more than just books and exams; it is a journey of self-discovery,
            innovation, and lifelong learning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KnowAboutSchool;
