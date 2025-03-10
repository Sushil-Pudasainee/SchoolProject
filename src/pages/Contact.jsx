import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-10 bg-gray-100">
     <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Get In Touch With Us</h1>
        <p className="text-xl max-w-3xl mx-auto">
          If you have any questions or feedback, feel free to reach out! We are happy to assist you.
        </p>
      </div>
      
      {/* Contact Details Section */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 md:flex md:justify-between md:items-center">
        <div className="flex items-center space-x-4">
          <FaPhone className="text-blue-600 text-2xl" />
          <a href="tel:+9779851096784" className="text-gray-800 hover:text-blue-600">
            +977 9851096784
          </a>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <FaEnvelope className="text-blue-600 text-2xl" />
          <a
            href="mailto:ghuselsecondary2017@gmail.com"
            className="text-gray-800 hover:text-blue-600"
          >
            ghuselsecondary2017@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <FaMapMarkerAlt className="text-blue-600 text-2xl" />
          <p className="text-gray-800">Ghusel, Nepal</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send us a message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map Section */}
      <div className="w-full max-w-4xl h-72 mt-8">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.631047162439!2d85.25734617422376!3d27.554716876270355!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb3f22653d392f%3A0x9c287bc20c35132!2sShree%20Ghusel%20Secondary%20School!5e1!3m2!1sen!2snp!4v1732723897171!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Shree Ghusel Secondary School Location"
        />
      </div>
    </div>
  );
};

export default Contact;
