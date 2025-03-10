import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Header = () => {
  return (
    <div className="mb-15">
      <AwesomeSlider
        play={true}
        cancelOnInteraction={false}
        interval={3000}
        className="h-[68vh] md:h-[71vh] transition-all duration-800" //  height for mobile and desktop
      >
        {/* Slide 1 */}
        <div data-src="/assets/School.jpeg" className="bg-cover bg-center h-[250px] md:h-[300px] lg:h-[200px]">
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-left text-white z-10 p-3 md:p-4 bg-gradient-to-r from-black/50 via-black/30 to-transparent rounded-lg">
            <h1 className="text-lg sm:text-xl md:text-2xl mb-2 font-bold text-yellow-300 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.5)]">
              Welcome to Shree Ghusel Secondary School
            </h1>
            <p className="text-xs sm:text-sm md:text-sm font-semibold text-white drop-shadow-[1px_1px_4px_rgba(0,0,0,0.5)]">
              Explore the Future of Education
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div data-src="/assets/2.jpg" className="bg-cover bg-center h-[250px] md:h-[300px] lg:h-[200px]"> 
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-left text-white z-10 p-3 md:p-4 bg-gradient-to-r from-black/50 via-black/30 to-transparent rounded-lg">
            <h1 className="text-lg sm:text-xl md:text-2xl mb-2 font-bold text-pink-400 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.5)]">
              Explore the Future of Education
            </h1>
          </div>
        </div>

        {/* Slide 3 */}
        <div data-src="/assets/5.jpg" className="bg-cover bg-center h-[250px] md:h-[300px] lg:h-[200px]"> 
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-left text-white z-10 p-3 md:p-4 bg-gradient-to-r from-black/50 via-black/30 to-transparent rounded-lg">
            <h1 className="text-lg sm:text-xl md:text-2xl mb-2 font-bold text-blue-400 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.5)]">
              Empowering Minds, Shaping the Future
            </h1>
          </div>
        </div>

        {/* Slide 4 */}
        <div data-src="/assets/7.jpg" className="bg-cover bg-center h-[250px] md:h-[300px] lg:h-[200px]"> 
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-left text-white z-10 p-3 md:p-4 bg-gradient-to-r from-black/50 via-black/30 to-transparent rounded-lg">
            <h1 className="text-lg sm:text-xl md:text-2xl mb-2 font-bold text-teal-400 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.5)]">
              Excellence in Every Step
            </h1>
          </div>
        </div>

        {/* Slide 5 */}
        <div data-src="/assets/5.jpg" className="bg-cover bg-center h-[250px] md:h-[300px] lg:h-[200px]"> 
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-left text-white z-10 p-3 md:p-4 bg-gradient-to-r from-black/50 via-black/30 to-transparent rounded-lg">
            <h1 className="text-lg sm:text-xl md:text-2xl mb-2 font-bold text-purple-400 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.5)]">
              Nurturing Tomorrow's Leaders
            </h1>
          </div>
        </div>

        {/* Slide 6 */}
        <div data-src="/assets/6.jpg" className="bg-cover bg-center h-[250px] md:h-[300px] lg:h-[200px]"> 
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-left text-white z-10 p-3 md:p-4 bg-gradient-to-r from-black/50 via-black/30 to-transparent rounded-lg">
            <h1 className="text-lg sm:text-xl md:text-2xl mb-2 font-bold text-orange-300 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.5)]">
              Welcome to Shree Ghusel Secondary School
            </h1>
            <p className="text-xs sm:text-sm md:text-sm font-semibold text-white drop-shadow-[1px_1px_4px_rgba(0,0,0,0.5)]">
              Explore the Future of Education
            </p>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Header;
