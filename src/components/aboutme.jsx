import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants}>
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionText} mb-4 text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text`}>
              About Me
            </h2>
          </motion.div>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 mx-auto rounded-full mb-12"></div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          className="relative backdrop-blur-sm bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-pink-900/10 border border-purple-500/20 rounded-3xl p-8 md:p-16 shadow-2xl"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-400/30 to-transparent rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-600/30 to-transparent rounded-br-3xl"></div>

          {/* Profile Section */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-full border border-orange-400/30 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse"></div>
              <span className="text-orange-300 font-semibold text-lg">Computer Game Developer</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text mb-6">
              Crafting Digital Experiences
            </h3>
          </motion.div>

          {/* Main Text Content */}
          <motion.div 
            className="space-y-8 text-left max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  🎓
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-orange-300 mb-2">Academic Journey</h4>
                  <p className="text-purple-200 text-lg leading-relaxed">
                    I am currently a student at <span className="text-pink-300 font-semibold">Air University</span>, where I am pursuing a degree in Computer Game Development. My passion for creating apps and coding began at a young age, growing up immersed in countless video games that shaped my understanding of interactive design.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  🎮
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-pink-300 mb-2">Game Development Passion</h4>
                  <p className="text-purple-200 text-lg leading-relaxed">
                    Through years of gaming, I developed a profound appreciation for mechanics, design, and aesthetics that make games truly engaging. This interest evolved into a deep understanding of game dynamics, which has become the foundation of my creative process.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  📱
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-300 mb-2">Practical Applications</h4>
                  <p className="text-purple-200 text-lg leading-relaxed">
                    Over the years, I've honed my skills not only in game development but also in building apps for practical purposes. One of my significant projects includes creating a <span className="text-blue-300 font-semibold">social networking app for a university</span>, which allowed students and faculty to connect and engage in a digital space.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  🎨
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-300 mb-2">3D Generalist Expertise</h4>
                  <p className="text-purple-200 text-lg leading-relaxed">
                    Through several specialized courses at university, I've gained a deep understanding of <span className="text-cyan-300 font-semibold">3D modeling and animation</span>. My expertise extends to scene composition, character rigging, and environmental design. This comprehensive 3D knowledge allows me to create visually stunning game assets and bring virtual worlds to life with professional-quality animations and immersive environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-cyan-300 mb-2">Future Vision</h4>
                  <p className="text-purple-200 text-lg leading-relaxed">
                    I am deeply committed to blending my passion for games, apps, and 3D artistry to create innovative experiences. Whether developing immersive games with stunning visuals, useful applications, or crafting detailed 3D environments, I strive to build projects that captivate users and offer both functionality and enjoyment. My goal is to continue applying my knowledge of design, mechanics, 3D modeling, and user engagement to shape the future of gaming and app development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Tags */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-3"
            variants={itemVariants}
          >
            {['Unity', 'Unreal Engine', 'C++', 'Game Design', 'UI/UX', 'Mobile Development', '3D Modeling', 'Animation', 'Scene Composition'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 border border-orange-400/30 rounded-full text-orange-300 font-medium text-sm hover:scale-105 transition-transform duration-300"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(249, 115, 22, 0.2)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "aboutme");