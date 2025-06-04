import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { drifter, goe, khojtrailer, taxy, zombi, souppy, dungeondwellers, joust } from "../assets";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Array of slide data with your games
const slides = [
  {
    title: "Garden of Eden",
    subtitle: "A 2D Platformer (GameMaker)",
    description: "Collect rain drops for your garden in this time-limited game.",
    image: goe,
  },
  {
    title: "Khoj",
    subtitle: "Action-Adventure (Unreal Engine 4)",
    description: "Advanced locomotion system/Metahuman rigging/animation/TPS System in this action-adventure game.",
    image: khojtrailer,
  },
  {
    title: "Drift Dimensions",
    subtitle: "Endless 3D Drifting (Unity)",
    description: "A hyper-casual drifting game with endless gameplay.",
    image: drifter,
  },
  {
    title: "Zombie Slayer",
    subtitle: "C++ and SFML (C++)",
    description: "A game coded in C++ and SFML, slaying zombies.",
    image: zombi,
  },
  {
    title: "FakeTaxy",
    subtitle: "Taxi Simulator (Unity)",
    description: "Drive taxis in this simulator with realistic mechanics.",
    image: taxy,
  },
  {
    title: "Soup Together",
    subtitle: "Game Jam Winner (Unity)",
    description: "Pakistan Game Developers Conference game jam winner featuring all self-made assets.",
    image: souppy,
  },
  {
    title: "Dungeon Dweller",
    subtitle: "2.5D endless runner in unreal engine 5 with procedural map generation (Unreal Engine 5)",
    description: "A game i made for my unreal engine course in university, it showcases an in depth knowledge of blueprinting and logic building",
    image: dungeondwellers,
  },
  {
    title: "Joust.io",
    subtitle: "A multiplayer Battle Royale made using PUN2 and malbersAnimation pack (Unity)",
    description: "An Ambitious multiplayer game made using unity for our computer networks course in university, it showcases in depth knowledge of multiplayer systems and animation blending alongside latency management",
    image: joust,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleViewProject = () => {
    window.open('https://github.com/C33NIE', '_blank');
  };

  return (
    <div className="sm:my-20">
      {/* Header Section */}
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center mb-4 text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text`}>A bit of my work</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 mx-auto rounded-full mb-8"></div>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          {/* Main Slides */}
          <div
            className="flex transition-all duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-[600px] relative group"
              >
                {/* Background Image with Parallax Effect */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-blue-900/40 via-pink-900/20 to-transparent" />
                
                {/* Content Container */}
                <div className="relative h-full flex items-end p-8 md:p-12">
                  <div className="text-white max-w-2xl">
                    {/* Game Title */}
                    <h3 className="text-4xl md:text-5xl font-bold mb-3 transform transition-transform duration-500 group-hover:translate-y-[-4px] text-transparent bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text">
                      {slide.title}
                    </h3>
                    
                    {/* Subtitle with Tech Stack */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full text-sm font-semibold">
                        {slide.subtitle.includes('(') 
                          ? slide.subtitle.split('(')[1]?.replace(')', '') 
                          : slide.subtitle.includes('Custom') 
                            ? 'Custom Engine' 
                            : 'Game Engine'
                        }
                      </span>
                      <span className="text-orange-300 font-medium text-lg">
                        {slide.subtitle.includes('(') 
                          ? slide.subtitle.split('(')[0].trim() 
                          : slide.subtitle
                        }
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-purple-200 text-lg leading-relaxed mb-6 transform transition-all duration-500 group-hover:translate-y-[-2px]">
                      {slide.description}
                    </p>
                    
                    {/* Action Button */}
                    <button 
                      onClick={handleViewProject}
                      className="px-8 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full font-semibold text-white hover:from-orange-400 hover:via-pink-400 hover:to-purple-400 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-full flex items-center justify-center text-white hover:bg-purple-800/30 transition-all duration-300 hover:scale-110 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-full flex items-center justify-center text-white hover:bg-purple-800/30 transition-all duration-300 hover:scale-110 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3 flex-wrap">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`relative w-12 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 scale-110' 
                  : 'bg-purple-500/30 hover:bg-purple-400/50'
              }`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className="text-blue-400 font-medium">
            {currentIndex + 1} / {slides.length}
          </span>
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white' 
                : 'bg-purple-500/10 text-purple-300 hover:bg-purple-500/20'
            }`}
          >
            {isAutoPlaying ? '⏸ Pause' : '▶ Auto-play'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Carousel, "games");