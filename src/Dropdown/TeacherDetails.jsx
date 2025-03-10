import React, { useState } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

const teachers = [
  {
    name: "Ram Bahadur Thapa",
    subject: "Mathematics",
    location: "Kathmandu, Nepal",
    image: '/assets/img-3.png',
    description: "Expert in algebra, calculus, and geometry with 10 years of teaching experience.",    socialLinks: [
      { url: 'https://facebook.com/rambahadurthapa', icon: <FaFacebookSquare /> },
      { url: 'https://twitter.com/rambahadurthapa', icon: <FaTwitterSquare /> },
      { url: 'https://instagram.com/rambahadurthapatagram.com/johndoe', icon: <FaInstagram /> },
    ],
  },

  {
    name: "Sita Bhandari",
    subject: "Physics",
    location: "Pokhara, Nepal",
    image: '/assets/img-3.png',
    description: "Specialized in quantum physics and relativity with a passion for making concepts simple.",    socialLinks: [
      { url: 'https://facebook.com/johndoe', icon: <FaFacebookSquare /> },
      { url: 'https://twitter.com/johndoe', icon: <FaTwitterSquare /> },
      { url: 'https://instagram.com/johndoe', icon: <FaInstagram /> },
    ],
  },

  {
    name: "Krishna Poudel",
    subject: "Chemistry",
    location: "Bhaktapur, Nepal",
    image: '/assets/img-3.png',
    description: "Organic chemistry specialist with research experience in pharmaceutical compounds.",    socialLinks: [
      { url: 'https://facebook.com/johndoe', icon: <FaFacebookSquare /> },
      { url: 'https://twitter.com/johndoe', icon: <FaTwitterSquare /> },
      { url: 'https://instagram.com/johndoe', icon: <FaInstagram /> },
    ],
  },

  {
    name: "Gita Sharma",
    subject: "Biology",
    location: "Lalitpur, Nepal",
    image: '/assets/img-3.png',
    description: "Molecular biologist with expertise in genetics and evolutionary biology.",    socialLinks: [
      { url: 'https://facebook.com/johndoe', icon: <FaFacebookSquare /> },
      { url: 'https://twitter.com/johndoe', icon: <FaTwitterSquare /> },
      { url: 'https://instagram.com/johndoe', icon: <FaInstagram /> },
    ],
  },

  {
    name: "Bishnu Adhikari",
    subject: "Computer Science",
    location: "Biratnagar, Nepal",
    image: '/assets/img-3.png',
    description: 'Expert in algebra, calculus, and geometry with 10 years of teaching experience.',
    socialLinks: [
      { url: 'https://facebook.com/johndoe', icon: <FaFacebookSquare /> },
      { url: 'https://twitter.com/johndoe', icon: <FaTwitterSquare /> },
      { url: 'https://instagram.com/johndoe', icon: <FaInstagram /> },
    ],
  },

  {
    name: "Ramesh Khadka",
    subject: "English Literature",
    location: "Dharan, Nepal",
    image: '/assets/img-3.png',
    description: 'Expert in algebra, calculus, and geometry with 10 years of teaching experience.',
    socialLinks: [
      { url: 'https://facebook.com/johndoe', icon: <FaFacebookSquare /> },
      { url: 'https://twitter.com/johndoe', icon: <FaTwitterSquare /> },
      { url: 'https://instagram.com/johndoe', icon: <FaInstagram /> },
    ],
  },
  // Add more teachers as needed
];

const TeacherDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 mt-5">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 inline-block relative">
          Meet Our Exceptional Faculty
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-500 -mb-2"></span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our team of skilled and dedicated teachers are here to guide you through your learning journey with passion
          and expertise.
        </p>
      </header>
      <div className="flex flex-wrap justify-center gap-6">
        {teachers.map((teacher) => (
          <div
            key={teacher.name}
            className="w-80 bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <div className="relative h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex justify-center items-center">
              <img
                src={teacher.image}
                alt={`${teacher.name}'s profile`}
                className="w-32 h-32 rounded-full border-4 border-white shadow-md cursor-pointer"
                onClick={() => handleImageClick(teacher.image)}
              />
            </div>
            <div className="pt-8 pb-6 px-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">{teacher.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{teacher.subject}</p>
              <p className="text-gray-500 text-sm mt-1">{teacher.location}</p>
              <p className="text-gray-700 text-sm mt-4">{teacher.description}</p>
            </div>

            {/* Blue line divider */}
            <div className="border-t-2 border-blue-500 my-4"></div>

            {/* Social media icons below the line */}
            <div className="flex justify-center gap-4 pb-4">
              {teacher.socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow ${teacher.name} on ${link.icon}`}
                  className="text-3xl transition-colors duration-300"
                  style={{
                    color:
                      link.icon.type === FaFacebookSquare
                        ? '#1877F2' // Facebook color
                        : link.icon.type === FaTwitterSquare
                        ? '#1DA1F2' // Twitter color
                        : '#E1306C', // Instagram color
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={handleCloseImage}
              className="absolute top-0 right-0 bg-white text-gray-800 text-2xl p-2 rounded-full"
            >
              &times;
            </button>
            <img src={selectedImage} alt="Full-size" className="max-w-full max-h-screen object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDetails;
