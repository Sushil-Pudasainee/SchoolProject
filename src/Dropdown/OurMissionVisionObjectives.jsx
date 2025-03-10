import { CheckCircle } from "lucide-react";

export default function ModernVisionMission() {
  return (
    <div className="w-full bg-white">
      {/* Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <span className="absolute -top-10 left-0 text-[120px] md:text-[150px] font-bold text-slate-50 select-none -z-10">
              Vision
            </span>
            <div className="flex flex-col md:flex-row items-center gap-16 relative">
              <div className="md:w-1/2 space-y-8 relative z-10">
                <div className="relative">
                  <h2 className="text-5xl md:text-7xl font-bold text-purple-600 md:bg-clip-text md:text-transparent md:bg-gradient-to-r from-purple-600 to-sky-500">
                    Our Vision
                  </h2>
                  <span className="absolute -bottom-4 left-0 w-40 h-1 bg-gradient-to-r from-purple-600 to-sky-500" />
                </div>
                <div className="relative">
                  <p className="text-xl leading-relaxed text-gray-700 relative backdrop-blur-sm p-4 bg-gradient-to-r from-purple-100 to-sky-100 rounded-2xl">
                    Our vision is to foster a culture of academic excellence and holistic development for students,
                    ensuring they become responsible citizens of tomorrow.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative group">
                  <img
                    src="/assets/photo.png"
                    alt="Vision"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 rounded-full border-4 border-purple-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <span className="absolute -top-10 right-0 text-[120px] md:text-[150px] font-bold text-slate-50 select-none -z-10">
              Mission
            </span>
            <div className="flex flex-col md:flex-row-reverse items-center gap-16 relative">
              <div className="md:w-1/2 space-y-8 relative z-10">
                <div className="relative">
                  <h2 className="text-5xl md:text-7xl font-bold text-sky-600 md:bg-clip-text md:text-transparent md:bg-gradient-to-r from-sky-500 to-purple-600">
                    Our Mission
                  </h2>
                  <span className="absolute -bottom-4 left-0 w-40 h-1 bg-gradient-to-r from-sky-500 to-purple-600" />
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-sky-100 to-purple-100 rounded-2xl" />
                  <p className="text-xl leading-relaxed text-gray-700 relative backdrop-blur-sm p-4">
                    Our mission is to make every child's future bright, making them more responsible toward their
                    family, birthplace, and country.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative group perspective-1000">
                  <div className="relative overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transition-all duration-500 group-hover:rounded-[70%_30%_30%_70%/30%_70%_30%_70%]">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-purple-500/10" />
                    <img
                       src="/assets/photo.png"
                      alt="Mission"
                      width={500}
                      height={500}
                       className=" w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 rounded-full border-4 border-purple-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative mb-20">
            <span className="hidden md:block absolute -top-10 left-1/2 -translate-x-1/2 text-[150px] font-bold text-slate-50 select-none -z-10">
              Goals
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-center text-purple-600 md:bg-clip-text md:text-transparent md:bg-gradient-to-r from-purple-600 via-sky-500 to-purple-600">
              Our Objectives
            </h2>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-40 h-1 bg-gradient-to-r from-purple-600 via-sky-500 to-purple-600" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {[
              "Promote academic excellence",
              "Empower students through knowledge",
              "Inculcate ethical values",
              "Foster innovation",
              "Promote inclusiveness",
              "Support sustainability",
              "Encourage learning",
              "Develop leadership",
              "Build community",
            ].map((objective, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-sky-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-4 p-4">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-sky-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-[8] opacity-20" />
                    <CheckCircle className="w-6 h-6 text-purple-600 group-hover:text-sky-500 transition-colors duration-300 relative z-10" />
                  </div>
                  <p className="text-lg text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {objective}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

