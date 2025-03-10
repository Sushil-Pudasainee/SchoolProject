import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = menuOpen ? "unset" : "hidden"
  }

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  // Close dropdown if click is outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown-menu") &&
        !event.target.closest(".dropdown-btn") &&
        !event.target.closest(".dropdown-icon")
      ) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  // Determine active link styling
  const getLinkClass = (path) => {
    const isActive = location.pathname === path
    return isActive
      ? "text-base font-medium text-emerald-300 py-2 px-4 transition-all duration-300 ease-out bg-[#1a3c61] rounded-md"
      : "text-base font-medium text-gray-100 py-2 px-4 transition-all duration-300 ease-out hover:text-emerald-200 relative nav-link"
  }

  // Handle dropdown item click
  const handleDropdownItemClick = () => {
    setDropdownOpen(false)
    if (menuOpen) {
      toggleMenu()
    }
  }

  return (
    <>
      {/* Overlay for Mobile Menu */}
      {menuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu} />}

      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#234874] shadow-lg px-10 mb-25">
        <style jsx>{`
          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #6ee7b7; /* emerald-200 */
            transition: width 0.3s ease-out;
          }
          .nav-link:hover::after {
            width: 100%;
          }
        `}</style>

        <div className="flex justify-between items-center px-6 py-4 md:py-2">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getLinkClass("/")}>
              Home
            </Link>
            <div className="relative">
              <div className="dropdown-btn flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
                <span
                  className={`text-base font-medium py-2 transition-all duration-300 ease-out relative nav-link ${
                    location.pathname.startsWith("/about")
                      ? "text-emerald-300 bg-[#1a3c61] rounded-md px-4"
                      : "text-gray-100 hover:text-emerald-200 px-4"
                  }`}
                >
                  About Us
                </span>
                <div className="dropdown-icon">
                  {dropdownOpen ? (
                    <FaChevronUp
                      className={`transition-colors duration-300 ${
                        location.pathname.startsWith("/about") ? "text-emerald-300" : "text-gray-100"
                      }`}
                    />
                  ) : (
                    <FaChevronDown
                      className={`transition-colors duration-300 ${
                        location.pathname.startsWith("/about") ? "text-emerald-300" : "text-gray-100"
                      }`}
                    />
                  )}
                </div>
              </div>
              {dropdownOpen && (
                <div className="absolute bg-[#234874] text-gray-100 w-48 mt-2 rounded-md shadow-lg left-1/2 transform -translate-x-1/2 dropdown-menu">
                  <Link
                    to="/about/know-about-school"
                    className={`block px-4 py-2 transition-all duration-200 ease-out ${
                      location.pathname === "/about/know-about-school"
                        ? "bg-[#1a3c61] text-emerald-300"
                        : "hover:bg-[#1a3c61] hover:text-emerald-200"
                    }`}
                    onClick={handleDropdownItemClick}
                  >
                    Know About School
                  </Link>
                  <Link
                    to="/about/mission-vision-objectives"
                    className={`block px-4 py-2 transition-all duration-200 ease-out ${
                      location.pathname === "/about/mission-vision-objectives"
                        ? "bg-[#1a3c61] text-emerald-300"
                        : "hover:bg-[#1a3c61] hover:text-emerald-200"
                    }`}
                    onClick={handleDropdownItemClick}
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    to="/about/testimonials"
                    className={`block px-4 py-2 transition-all duration-200 ease-out ${
                      location.pathname === "/about/testimonials"
                        ? "bg-[#1a3c61] text-emerald-300"
                        : "hover:bg-[#1a3c61] hover:text-emerald-200"
                    }`}
                    onClick={handleDropdownItemClick}
                  >
                    Testimonials
                  </Link>
                  <Link
                    to="/about/teacher-details"
                    className={`block px-4 py-2 transition-all duration-200 ease-out ${
                      location.pathname === "/about/teacher-details"
                        ? "bg-[#1a3c61] text-emerald-300"
                        : "hover:bg-[#1a3c61] hover:text-emerald-200"
                    }`}
                    onClick={handleDropdownItemClick}
                  >
                    Teacher Details
                  </Link>
                  <Link
                    to="/about/faq"
                    className={`block px-4 py-2 transition-all duration-200 ease-out ${
                      location.pathname === "/about/faq"
                        ? "bg-[#1a3c61] text-emerald-300"
                        : "hover:bg-[#1a3c61] hover:text-emerald-200"
                    }`}
                    onClick={handleDropdownItemClick}
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>
            <Link to="/academic" className={getLinkClass("/academic")}>
              Academic
            </Link>
            <Link to="/contact" className={getLinkClass("/contact")}>
              Contact
            </Link>
            <Link to="/gallery" className={getLinkClass("/gallery")}>
              Gallery
            </Link>
          </div>

          {/* Hamburger Icon for Mobile Menu */}
          <div className="md:hidden flex items-center cursor-pointer z-50 mr-16" onClick={toggleMenu}>
            <div className="flex flex-col">
              <span
                className={`w-8 h-1 bg-gray-100 rounded-md mb-1 transition-all duration-300 ${menuOpen ? "transform rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`w-8 h-1 bg-gray-100 rounded-md mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-8 h-1 bg-gray-100 rounded-md transition-all duration-300 ${menuOpen ? "transform -rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
            <span
              className={`text-emerald-200 text-sm font-medium tracking-wide uppercase transition-colors duration-200 hover:text-emerald-300 ml-2 ${menuOpen ? "opacity-0" : "opacity-100"}`}
            >
              Menu
            </span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[75%] bg-[#234874] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col pt-20 px-6 space-y-3">
            {/* Home */}
            <Link
              to="/"
              className={`text-lg font-medium py-3 transition-all duration-300 ease-out ${
                location.pathname === "/"
                  ? "bg-[#1a3c61] text-emerald-300 pl-4 rounded-md"
                  : "text-gray-100 hover:text-emerald-200 hover:pl-4"
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>

            {/* About Us */}
            <div className="text-lg font-medium text-gray-100">
              <div
                onClick={toggleDropdown}
                className={`cursor-pointer dropdown-btn flex items-center justify-between transition-all duration-300 ease-out ${
                  location.pathname.startsWith("/about")
                    ? "bg-[#1a3c61] text-emerald-300 pl-4 rounded-md"
                    : "hover:text-emerald-200 hover:pl-4"
                }`}
              >
                <div className="flex items-center gap-2">
                  <p>About Us</p>
                  <div className="dropdown-icon">{dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
                </div>
              </div>
              {dropdownOpen && (
                <div className="pl-4 bg-[#1a3c61] rounded-md shadow-md space-y-2 mt-2">
                  {[
                    { path: "/about/know-about-school", label: "Know About School" },
                    { path: "/about/mission-vision-objectives", label: "Mission & Vision" },
                    { path: "/about/testimonials", label: "Testimonials" },
                    { path: "/about/teacher-details", label: "Teacher Details" },
                    { path: "/about/faq", label: "FAQ" },
                  ].map(({ path, label }) => (
                    <Link
                      key={path}
                      to={path}
                      className={`text-base py-2 block transition-all duration-200 ease-out ${
                        location.pathname === path
                          ? "text-emerald-300 bg-[#153450] pl-4 rounded-md"
                          : "text-gray-100 hover:text-emerald-200 hover:pl-4"
                      }`}
                      onClick={handleDropdownItemClick}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Links */}
            {[
              { path: "/academic", label: "Academic" },
              { path: "/contact", label: "Contact" },
              { path: "/gallery", label: "Gallery" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-lg font-medium py-3 transition-all duration-300 ease-out ${
                  location.pathname === path
                    ? "bg-[#1a3c61] text-emerald-300 pl-4 rounded-md"
                    : "text-gray-100 hover:text-emerald-200 hover:pl-4"
                }`}
                onClick={toggleMenu}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

