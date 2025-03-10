

import { useState } from "react"
import { Quote } from "lucide-react"

// Testimonial Component
function Testimonial({ name, role, message, imageSrc, onImageClick }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl bg-white">
      <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>

      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-0">
        <div className="relative h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
          <img
            src={imageSrc || "/assets/img-3.png"}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/70 p-6 transform transition-transform duration-300 translate-y-0 z-20">
            <p className="text-gray-700 font-semibold text-xl">{name}</p>
            <p className="text-gray-500 text-sm uppercase tracking-wider mt-1">{role}</p>
          </div>
        </div>

        <div className="bg-white p-10 flex flex-col justify-center relative">
          <Quote className="text-gray-200 absolute top-6 left-6 h-16 w-16 -z-10" />
          <div className="relative z-10">
            <p className="text-black text-lg leading-relaxed font-light tracking-wide">{message}</p>
            <div className="mt-8 flex items-center">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="ml-4 text-sm text-gray-400 italic">Leadership Vision</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col">
        <div className="relative h-[300px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
          <img
            src={imageSrc || "/assets/img-3.png"}
            alt={name}
            className="object-cover w-full h-full"
            onClick={onImageClick} // Added onClick to open image
          />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg p-5 z-30 w-5/6 text-center">
            <p className="text-gray-800 font-bold text-xl mb-1">{name}</p>
            <p className="text-gray-600 font-medium tracking-wide">{role}</p>
          </div>
        </div>

        <div className="bg-white p-8 pt-12 flex flex-col relative mt-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6"></div>
          <Quote className="text-gray-200 mx-auto h-10 w-10 mb-4" />
          <div className="relative z-10">
            <p className="text-black text-base leading-relaxed font-light text-center px-2">{message}</p>
            <div className="mt-6 flex items-center justify-center">
              <div className="text-sm text-gray-400 italic px-4 py-2 border border-gray-200 rounded-full">
                Leadership Vision
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Page Component
const Testimonials = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [imageSrc, setImageSrc] = useState("")
  const [parentIndex, setParentIndex] = useState(0)
  const [studentIndex, setStudentIndex] = useState(0)

  const handleImageClick = (src) => {
    setImageSrc(src)
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const parents = [
    {
      text: "Shree Ghusel Secondary School has helped my child grow academically and personally. The passionate teachers foster creativity and leadership.",
      name: "Parent 1",
      image: "/assets/img-3.png",
    },
    {
      text: "I've seen remarkable growth in my child's confidence and abilities. Shree Ghusel's dedication to holistic development is evident.",
      name: "Parent 2",
      image: "/assets/img-3.png",
    },
    {
      text: "My child excels academically and develops strong moral values. I’m proud to see them learn from both successes and challenges.",
      name: "Parent 3",
      image: "/assets/img-3.png",
    },
  ]

  const students = [
    {
      text: "Shree Ghusel Secondary School has helped me succeed in my studies and taught me to think critically and collaborate.",
      name: "Student 1",
      image: "/assets/img-3.png",
    },
    {
      text: "The support from teachers has been incredible. They push me to do my best and believe in my potential.",
      name: "Student 2",
      image: "/assets/img-3.png",
    },
    {
      text: "My time at Shree Ghusel has been transformative. The teachers and activities have prepared me for my future.",
      name: "Student 3",
      image: "/assets/img-3.png",
    },
  ]

  const handleNextParent = () => {
    setParentIndex((prevIndex) => (prevIndex + 1) % parents.length)
  }

  const handlePrevParent = () => {
    setParentIndex((prevIndex) => (prevIndex - 1 + parents.length) % parents.length)
  }

  const handleNextStudent = () => {
    setStudentIndex((prevIndex) => (prevIndex + 1) % students.length)
  }

  const handlePrevStudent = () => {
    setStudentIndex((prevIndex) => (prevIndex - 1 + students.length) % students.length)
  }

  return (
    <>
      <div className="bg-gray-100 mt-10 font-sans">
        {/* Intro Section */}
        <section className="bg-gray-100 text-black py-16 px-6 md:px-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Discover how Shree Ghusel Secondary School transforms lives through dedication and support.
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 relative group">From Chairman's Desk
          <span className="absolute left-[50%] -translate-x-1/2 bottom-0 w-[200px] h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </h2>
          {/* Chairman's Testimonial */}
          <Testimonial
            name="Mr. Ramesh Neupane"
            role="Chairman"
            message="Leading this institution fills me with pride. We aim to prepare students for global challenges while upholding core values. Our commitment to excellence shapes the leaders of tomorrow."
            imageSrc="/assets/img-3.png"
            onImageClick={() => handleImageClick("/assets/img-3.png")} // Added onImageClick for mobile view
          />
          <div className="my-16"></div> {/* Increased spacing between Chairman and Principal sections */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 relative group">From Principal's Desk
          <span className="absolute left-[50%] -translate-x-1/2 bottom-0 w-[200px] h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </h2>
          <Testimonial
            name="Mr. Ramesh Neupane"
            role="Principal"
            message="As Principal, I foster an environment where academic excellence meets personal growth. Our mission is to empower students with knowledge and values for a complex world."
            imageSrc="/assets/img-3.png"
            onImageClick={() => handleImageClick("/assets/img-3.png")} // Added onImageClick for mobile view
          />
        </section>

        {/* Modal for Viewing Full Image (Mobile) */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg">
              <img
                src={imageSrc ||  "/assets/img-3.png"}
                alt="Full-size"
                className="max-w-full max-h-screen object-contain"
              />
              <button onClick={handleCloseModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded ">
                Close
              </button>
            </div>
          </div>
        )}

        {/* Parents' Experiences */}
        <div className="bg-gray-100 py-24 px-6 md:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 relative group">Parent's Experiences
            <span className="absolute left-[50%] -translate-x-1/2 bottom-0 w-[200px] h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
            </h1>
          </div>
          <div className="md:hidden text-center">
            <div className="bg-white p-8 rounded-lg text-center shadow-lg">
              <p className="text-gray-700 text-lg mb-10 leading-relaxed">{parents[parentIndex].text}</p>
              <h3 className="font-semibold text-xl mb-3">{parents[parentIndex].name}</h3>
              <img
                src={parents[parentIndex].image ||  "/assets/img-3.png"}
                alt={parents[parentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mt-4 border-4 border-gray-300"
                onClick={() => handleImageClick(parents[parentIndex].image)} // Added onClick to open image
              />
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevParent}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded font-medium"
              >
                Previous
              </button>
              <button
                onClick={handleNextParent}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded"
              >
                Next
              </button>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-10">
            {parents.map((parent, index) => (
              <div key={index} className="bg-white p-10 rounded-lg text-center shadow-lg">
                <p className="text-gray-700 text-lg mb-10 leading-relaxed">{parent.text}</p>
                <h3 className="font-semibold text-xl mb-3">{parent.name}</h3>
                <img
                  src={parent.image ||  "/assets/img-3.png"}
                  alt={parent.name}
                  className="w-20 h-20 rounded-full mx-auto mt-4 border-4 border-gray-300"
                  onClick={() => handleImageClick(parent.image)} // Added onClick to open image
                />
              </div>
            ))}
          </div>
        </div>

        {/* Students' Experiences */}
        <div className="bg-gray-100 py-24 px-6 md:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 relative group">Student's Experiences
            <span className="absolute left-[50%] -translate-x-1/2 bottom-0 w-[200px] h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
            </h1>
            
          </div>
          <div className="md:hidden text-center">
            <div className="bg-white p-8 rounded-lg text-center shadow-lg">
              <p className="text-gray-700 text-lg mb-10 leading-relaxed">{students[studentIndex].text}</p>
              <h3 className="font-semibold text-xl mb-3">{students[studentIndex].name}</h3>
              <img
                src={students[studentIndex].image ||  "/assets/img-3.png"}
                alt={students[studentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mt-4 border-4 border-gray-300"
                onClick={() => handleImageClick(students[studentIndex].image)} // Added onClick to open image
              />
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevStudent}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded"
              >
                Previous
              </button>
              <button
                onClick={handleNextStudent}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded"
              >
                Next
              </button>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-10">
            {students.map((student, index) => (
              <div key={index} className="bg-white p-10 rounded-lg text-center shadow-lg">
                <p className="text-gray-700 text-lg mb-10 leading-relaxed">{student.text}</p>
                <h3 className="font-semibold text-xl mb-3">{student.name}</h3>
                <img
                  src={student.image ||  "/assets/img-3.png"}
                  alt={student.name}
                  className="w-20 h-20 rounded-full mx-auto mt-4 border-4 border-gray-300"
                  onClick={() => handleImageClick(student.image)} // Added onClick to open image
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials

