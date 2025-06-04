import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, onClick, isActive, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className={`relative cursor-pointer group transition-all duration-500 ease-out ${
        isActive ? 'transform scale-105' : 'hover:transform hover:scale-102'
      }`}
    >
      {/* Connection Line for Desktop */}
      <div className="hidden sm:block absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-orange-400/50 via-pink-500/50 to-purple-600/50"></div>
      
      {/* Timeline Dot */}
      <div className={`hidden sm:block absolute left-6 top-8 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 border-white shadow-lg shadow-pink-500/30' 
          : 'bg-gradient-to-r from-purple-900 to-blue-900 border-purple-400 group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-blue-700'
      }`}>
        {isActive && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 animate-pulse"></div>
        )}
      </div>

      {/* Card Content */}
      <div className={`sm:ml-16 mb-6 p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
        isActive 
          ? 'bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-orange-900/60 border-pink-400/30 shadow-xl shadow-pink-500/10' 
          : 'bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-indigo-900/20 border-purple-700/50 hover:bg-gradient-to-br hover:from-purple-900/60 hover:via-pink-900/50 hover:to-orange-900/40 hover:border-pink-600/50'
      }`}>
        {/* Role Title */}
        <h3 className={`text-xl lg:text-2xl font-bold mb-2 transition-colors duration-300 ${
          isActive ? 'text-transparent bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text' : 'text-purple-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:via-pink-300 group-hover:to-purple-300 group-hover:bg-clip-text'
        }`}>
          {experience.title}
        </h3>
        
        {/* Company and Date */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
          <p className={`font-semibold transition-colors duration-300 ${
            isActive ? 'text-orange-300' : 'text-purple-400 group-hover:text-pink-300'
          }`}>
            {experience.company_name}
          </p>
          <div className="hidden sm:block w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
          <p className={`text-sm transition-colors duration-300 ${
            isActive ? 'text-pink-300' : 'text-blue-500 group-hover:text-purple-400'
          }`}>
            {experience.date}
          </p>
        </div>

        {/* Quick Preview (Desktop) */}
        <div className="hidden lg:block">
          <p className={`text-sm transition-colors duration-300 line-clamp-2 ${
            isActive ? 'text-purple-300' : 'text-blue-500 group-hover:text-purple-400'
          }`}>
            {experience.details[0]}
          </p>
        </div>

        {/* Mobile: Show full details */}
        <div className="block sm:hidden mt-4">
          <ExperienceDetails experience={experience} isMobile={true} />
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceDetails = ({ experience, isMobile = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isMobile ? '' : 'sticky top-8'}`}
    >
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text">
              {experience.title}
            </h3>
            <p className="text-blue-400 font-medium">{experience.company_name} • {experience.date}</p>
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="bg-gradient-to-br from-purple-900/60 via-blue-900/50 to-indigo-900/40 backdrop-blur-sm rounded-2xl border border-purple-700/50 p-8">
        <h4 className="text-lg font-semibold text-orange-300 mb-6 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Key Responsibilities
        </h4>
        
        <ul className="space-y-4">
          {experience.details.map((detail, index) => (
            <motion.li
              key={`experience-detail-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-orange-400/20 via-pink-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:from-orange-400/40 group-hover:via-pink-500/40 group-hover:to-purple-600/40 transition-all duration-300">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-full"></div>
              </div>
              <p 
                className="text-purple-300 leading-relaxed text-base lg:text-lg group-hover:text-white transition-colors duration-300"
                dangerouslySetInnerHTML={{ __html: detail }}
              />
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Skills Tags (Optional - you can add skills to your experience data) */}
      {experience.skills && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-blue-400 mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-orange-400/10 via-pink-500/10 to-purple-600/10 border border-pink-400/20 rounded-full text-sm text-orange-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [0, 8, 0, -8, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sm:my-20 relative min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-24 left-12 w-48 h-48 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 right-16 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2.5 }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 5 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1.5 }}
        />
      </div>
      
      {/* Header Section */}
      <motion.div variants={textVariant()} className="relative z-10 text-center mb-16">
        <h2 className={`${styles.sectionText} mb-4 text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text`}>Experience</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto">
          My professional journey
        </p>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Timeline Section (Desktop) / Cards (Mobile) */}
          <div className="lg:col-span-2">
            <div className="space-y-2">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                  onClick={() => setSelectedJob(experience)}
                  isActive={selectedJob === experience}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Details Section (Desktop Only) */}
          <div className="hidden sm:block lg:col-span-3">
            <ExperienceDetails experience={selectedJob} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");