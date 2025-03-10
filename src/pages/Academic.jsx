import { useState } from "react"
import {FaGraduationCap,FaBook,FaUserGraduate,FaChalkboardTeacher,FaLaptop,FaBookReader,FaFlask,
  FaPalette,FaChartLine,FaChild,FaPuzzlePiece,FaLanguage,FaHandsHelping,FaRunning,FaTheaterMasks,
  FaCalculator,FaGlobe,FaMicroscope,} from "react-icons/fa"

const Header = ({ title, subtitle }) => {
  
  return (
    <header
            className="h-[40vh] bg-cover bg-center relative flex items-center justify-center"
           
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">{title}</h1>
                <p className="text-lg sm:text-xl md:text-2xl animate-slide-up">{subtitle}</p>
            </div>
        </header>
  );
};

const LevelSelector = ({ activeLevel, setActiveLevel }) => {
  const levels = ["Montessori", "Basic Level", "Secondary Level", "Higher Level"]

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {levels.map((level) => (
        <button
          key={level}
          className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${
            activeLevel === level ? "bg-purple-600 text-white" : "bg-white text-purple-600 hover:bg-purple-100"
          } border-2 border-purple-600`}
          onClick={() => setActiveLevel(level)}
        >
          {level}
        </button>
      ))}
    </div>
  );
};

const SectionCard = ({ title, icon: Icon, description, features }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-500 animate-fade-in">
      <div className="flex items-center mb-4">
        <Icon size={40} className="text-purple-600 mr-4 flex-shrink-0" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="mr-2 mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// const StreamCard = ({ stream, icon: Icon, subjects, prospects }) => {
//   return (
//     <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-500 animate-fade-in">
//       <div className="flex items-center justify-center mb-6">
//         <Icon size={48} className="text-purple-600 mr-4" />
//         <h3 className="text-2xl font-bold text-purple-600">{stream}</h3>
//       </div>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div>
//           <h4 className="font-bold mb-4 text-lg">Core Subjects:</h4>
//           <ul className="list-disc pl-5 space-y-2 text-gray-600">
//             {subjects  && subjects.map((subject, i) => (
//               <li key={i}>{subject}</li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-bold mb-4 text-lg">Career Prospects:</h4>
//           <ul className="list-disc pl-5 space-y-2 text-gray-600">
//             {prospects && prospects.map((prospect, i) => (
//               <li key={i}>{prospect}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

const FacilityCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-500 animate-fade-in">
      <div className="flex justify-center mb-4">
        <Icon size={48} className="text-purple-600" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

const Montessori = () => {
  const sections = [
    {
      title: "Early Childhood Development",
      icon: FaChild,
      description: "Nurturing young minds through play-based learning",
      features: [
        "Age-appropriate activities for 2-5 year olds",
        "Focus on sensory development and motor skills",
        "Introduction to basic concepts through hands-on experiences",
      ],
    },
    {
      title: "Montessori Method",
      icon: FaPuzzlePiece,
      description: "Child-centered educational approach",
      features: [
        "Self-directed learning activities",
        "Mixed age classrooms to encourage peer learning",
        "Specially designed Montessori materials",
      ],
    },
    {
      title: "Language and Literacy",
      icon: FaLanguage,
      description: "Building a strong foundation in communication",
      features: [
        "Phonics and letter recognition",
        "Storytelling and early reading skills",
        "Vocabulary development through themed activities",
      ],
    },
    {
      title: "Practical Life Skills",
      icon: FaHandsHelping,
      description: "Fostering independence and self-confidence",
      features: [
        "Personal care and hygiene routines",
        "Basic household tasks (pouring, folding, etc.)",
        "Grace and courtesy lessons",
      ],
    },
    {
      title: "Creative Expression",
      icon: FaPalette,
      description: "Encouraging imagination and artistic skills",
      features: ["Art and craft activities", "Music and movement classes", "Dramatic play and role-playing exercises"],
    },
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-8">Montessori / Playgroup</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <SectionCard key={index} {...section} />
        ))}
      </div>
    </div>
  )
}

const BasicLevel = () => {
  const sections = [
    {
      title: "Core Curriculum",
      icon: FaBook,
      description: "Comprehensive coverage of essential subjects",
      features: [
        "English: Reading, Writing, Speaking, and Listening",
        "Mathematics: Arithmetic, Algebra, Geometry basics",
        "Science: General Science, Environmental Studies",
        "Social Studies: History, Geography, Civics",
      ],
    },
    {
      title: "Language Arts",
      icon: FaLanguage,
      description: "Developing strong communication skills",
      features: [
        "Creative writing workshops",
        "Public speaking and debate clubs",
        "Literature appreciation",
        "Grammar and vocabulary enhancement",
      ],
    },
    {
      title: "STEM Focus",
      icon: FaCalculator,
      description: "Emphasis on Science, Technology, Engineering, and Mathematics",
      features: [
        "Hands-on science experiments",
        "Coding and robotics classes",
        "Math Olympiad preparation",
        "STEM project-based learning",
      ],
    },
    {
      title: "Arts and Creativity",
      icon: FaPalette,
      description: "Nurturing artistic talents and creative thinking",
      features: [
        "Visual arts classes (drawing, painting, sculpture)",
        "Music lessons (vocal and instrumental)",
        "Drama and theater workshops",
        "Annual art exhibitions and performances",
      ],
    },
    {
      title: "Physical Education and Wellness",
      icon: FaRunning,
      description: "Promoting health, fitness, and teamwork",
      features: [
        "Regular PE classes and sports activities",
        "Yoga and mindfulness sessions",
        "Nutrition education",
        "Inter-house sports competitions",
      ],
    },
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-8">Basic Level (Grades 1-8)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <SectionCard key={index} {...section} />
        ))}
      </div>
    </div>
  )
}

const SecondaryLevel = () => {
  const sections = [
    {
      title: "Advanced Core Subjects",
      icon: FaBook,
      description: "In-depth study of fundamental disciplines",
      features: [
        "Advanced Mathematics (Algebra, Geometry, Trigonometry)",
        "Comprehensive Science (Physics, Chemistry, Biology)",
        "English Literature and Language Arts",
        "Social Sciences (History, Geography, Civics)",
      ],
    },
    {
      title: "SEE Preparation",
      icon: FaGraduationCap,
      description: "Focused preparation for Secondary Education Examination",
      features: [
        "Intensive subject-wise revision",
        "Regular mock tests and evaluations",
        "Exam strategies and time management skills",
        "One-on-one counseling for academic improvement",
      ],
    },
    {
      title: "Career Exploration",
      icon: FaChartLine,
      description: "Guiding students towards future career paths",
      features: [
        "Career aptitude tests and counseling",
        "Industry expert guest lectures",
        "Field trips to various workplaces",
        "Workshops on emerging career options",
      ],
    },
    {
      title: "Technology Integration",
      icon: FaLaptop,
      description: "Preparing students for the digital age",
      features: [
        "Advanced computer science courses",
        "Digital literacy and online research skills",
        "Introduction to programming languages",
        "Multimedia and digital art projects",
      ],
    },
    {
      title: "Personal Development",
      icon: FaUserGraduate,
      description: "Fostering well-rounded individuals",
      features: [
        "Leadership and team-building activities",
        "Public speaking and debate competitions",
        "Community service projects",
        "Life skills workshops (financial literacy, time management)",
      ],
    },
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-8">Secondary Level (Grades 9-10)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <SectionCard key={index} {...section} />
        ))}
      </div>
    </div>
  )
}

const HigherLevel = () => {
  const sections = [
    {
      title: "Science Stream",
      icon: FaFlask,
      description: "Preparation for careers in scientific fields",
      features: [
        "Advanced Physics, Chemistry, and Biology",
        "Higher Mathematics",
        "Computer Science (Optional)",
        "Scientific research projects",
      ],
    },
    {
      title: "Management Stream",
      icon: FaChartLine,
      description: "Foundation for business and commerce careers",
      features: [
        "Accountancy and Business Studies",
        "Economics and Marketing",
        "Business Mathematics",
        "Entrepreneurship projects",
      ],
    },
    {
      title: "Humanities Stream",
      icon: FaGlobe,
      description: "Exploration of social sciences and liberal arts",
      features: [
        "Literature and Languages",
        "History and Geography",
        "Political Science and Sociology",
        "Psychology and Philosophy",
      ],
    },
    {
      title: "Career Counseling",
      icon: FaUserGraduate,
      description: "Guiding students for higher education and careers",
      features: [
        "University application guidance",
        "Career path exploration workshops",
        "Internship opportunities",
        "Personality and aptitude assessments",
      ],
    },
    {
      title: "Research and Innovation",
      icon: FaMicroscope,
      description: "Fostering analytical and creative thinking",
      features: [
        "Independent research projects",
        "Science and business fairs",
        "Innovation challenges",
        "Collaboration with local universities",
      ],
    },
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-8">Higher Level (Grades 11-12)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <SectionCard key={index} {...section} />
        ))}
      </div>
    </div>
  )
}

const Academic = () => {
  const [activeLevel, setActiveLevel] = useState("Montessori")

  const facilities = [
    {
      title: "Modern Classrooms",
      description: "Smart classrooms equipped with interactive whiteboards and multimedia systems.",
      icon: FaChalkboardTeacher,
    },
    {
      title: "Science Laboratories",
      description: "Well-equipped labs for physics, chemistry, and biology experiments.",
      icon: FaFlask,
    },
    {
      title: "Computer Lab",
      description: "State-of-the-art computer lab with high-speed internet and latest software.",
      icon: FaLaptop,
    },
    {
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources.",
      icon: FaBookReader,
    },
    {
      title: "Sports Facilities",
      description: "Modern sports complex for various indoor and outdoor activities.",
      icon: FaRunning,
    },
    {
      title: "Auditorium",
      description: "Spacious auditorium for performances, seminars, and events.",
      icon: FaTheaterMasks,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header
        title="Academic Programs"
        subtitle="Nurturing Excellence in Education from Early Years to Higher Secondary"
        
      />

      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <LevelSelector activeLevel={activeLevel} setActiveLevel={setActiveLevel} />

          <div className="mb-16">
            {activeLevel === "Montessori" && <Montessori />}
            {activeLevel === "Basic Level" && <BasicLevel />}
            {activeLevel === "Secondary Level" && <SecondaryLevel />}
            {activeLevel === "Higher Level" && <HigherLevel />}
          </div>

          <section className="mt-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">Academic Facilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <FacilityCard key={index} {...facility} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Academic

