import { motion } from "framer-motion";
import React, { useState } from "react";
import { drifter, goe, khojtrailer, taxy, zombi } from "../assets";
import { styles } from "../styles"; // Import styles for consistency
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc"; // Import SectionWrapper

// Array of slide data with GIFs
const slides = [
  {
    title: "Garden of Eden",
    subtitle: "A 2D Platformer (GameMaker)",
    description: "Collect rain drops for your garden in this time-limited game.",
    image: goe, // Replace with actual gif URL
  },
  {
    title: "Khoj",
    subtitle: "Action-Adventure (Unreal Engine 4)",
    description: "Advanced locomotion system/Metahuman rigging/animation/TPS System in this action-adventure game.",
    image: khojtrailer, // Replace with actual gif URL
  },
  {
    title: "Drift Dimensions",
    subtitle: "Endless 3D Drifting (Unity)",
    description: "A hyper-casual drifting game with endless gameplay.",
    image: drifter, // Replace with actual gif URL
  },
  {
    title: "Zombie Slayer",
    subtitle: "C++ and SFML",
    description: "A game coded in C++ and SFML, slaying zombies.",
    image: zombi, // Replace with actual gif URL
  },
  {
    title: "FakeTaxy",
    subtitle: "Taxi Simulator (Unity)",
    description: "Drive taxis in this simulator with realistic mechanics.",
    image: taxy, // Replace with actual gif URL
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="sm:my-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>A bit of my work</h2>
      </motion.div>

      <div className="relative w-full max-w-[calc(100%-60px)] mx-auto mt-10 overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-[700px] bg-cover bg-center relative"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-6 z-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                  <h3 className="text-xl italic mb-1">{slide.subtitle}</h3>
                  <p className="text-base">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-gradient-to-r from-[#000f3d] via-[#1A2A54] to-[#0056A6] p-6 rounded-full shadow-lg hover:from-[#1A2A54] hover:via-[#000f3d] hover:to-[#0056A6] focus:outline-none z-20"
        >
          ‹
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-gradient-to-l from-[#000f3d] via-[#1A2A54] to-[#0056A6] p-6 rounded-full shadow-lg hover:from-[#1A2A54] hover:via-[#000f3d] hover:to-[#0056A6] focus:outline-none z-20"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-16 h-2 rounded-full bg-gray-500 cursor-pointer transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Carousel, "games");
