import { FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa"

const Section = () => {
  return (
    <div className="bg-gradient-to-r from-white via-blue-50 to-white py-3 mt-14 shadow-sm border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 md:px-6">
          {/* Left: School Logo */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <img
              src="/logo.png"
              alt="School Logo"
              className="w-20 md:w-28 h-auto object-contain bg-transparent mix-blend-multiply"
            />
          </div>

          {/* Center: School Name */}
          <div className="flex flex-col items-center">
            <h1 className="text-xs sm:text-lg md:text-xl font-bold text-[#2a7cce] max-w-[150px] md:max-w-none text-center leading-tight">
              Shree Ghusel Secondary School
            </h1>
            <div className="hidden md:block text-sm text-gray-600 mt-1">Established 2017</div>
          </div>

          {/* Right: Contact Details */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <a
              href="tel:+9779851096784"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center hover:scale-110"
              aria-label="Call Us"
            >
              <div className="p-2 rounded-full hover:bg-blue-50">
                <FaPhone size={16} className="md:w-5 md:h-5" />
              </div>
            </a>
            <a
              href="mailto:ghuselsecondary2017@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center hover:scale-110"
              aria-label="Email Us"
            >
              <div className="p-2 rounded-full hover:bg-blue-50">
                <FaEnvelope size={16} className="md:w-5 md:h-5" />
              </div>
            </a>
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center hover:scale-110"
              aria-label="Visit our Facebook"
            >
              <div className="p-2 rounded-full hover:bg-blue-50">
                <FaFacebook size={18} className="md:w-6 md:h-6" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section

