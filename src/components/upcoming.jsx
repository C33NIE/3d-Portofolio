import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "../hoc";

const upcomingProjects = [
  {
    title: "Project Aurora",
    type: "Open World RPG",
    description: "A massive open-world RPG with dynamic storytelling and AI-driven NPCs",
    progress: 65,
    expectedRelease: "Q3 2025",
    features: ["Dynamic Weather", "AI NPCs", "Multiplayer Co-op"],
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Neural Network Simulator",
    type: "Educational Software",
    description: "Interactive tool for learning and visualizing neural networks in real-time",
    progress: 40,
    expectedRelease: "Q4 2025",
    features: ["Real-time Visualization", "Interactive Tutorials", "Export Models"],
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Starship Commander",
    type: "Strategy Game",
    description: "Command your fleet in epic space battles with tactical real-time combat",
    progress: 25,
    expectedRelease: "2026",
    features: ["Fleet Management", "Tactical Combat", "Story Campaign"],
    color: "from-orange-600 to-red-600"
  }
];

const UpcomingCard = ({ project, index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: -30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
      }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 relative overflow-hidden group"
      style={{ perspective: "1000px" }}
    >
      {/* Animated background effect */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <motion.h3 
              className="text-2xl font-bold text-white mb-1"
              whileHover={{ scale: 1.05 }}
            >
              {project.title}
            </motion.h3>
            <span className="text-sm text-blue-400">{project.type}</span>
          </div>
          <motion.span 
            className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full"
            whileHover={{ scale: 1.1 }}
          >
            {project.expectedRelease}
          </motion.span>
        </div>
        
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Progress</span>
            <span className="text-white font-medium">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div 
              className={`h-full bg-gradient-to-r ${project.color}`}
              initial={{ width: 0 }}
              animate={{ width: inView ? `${project.progress}%` : 0 }}
              transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
            />
          </div>
        </div>
        
        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {project.features.map((feature, i) => (
            <motion.span 
              key={i}
              className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
              transition={{ delay: index * 0.2 + 0.7 + i * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: "#4b5563" }}
            >
              {feature}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const UpcomingSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 px-6 md:px-20 lg:px-40"
      style={{ y }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-white font-bold md:text-[80px] sm:text-[50px] text-[40px] mb-4 text-center">
          Upcoming Projects
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Exciting projects currently in development
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingProjects.map((project, index) => (
          <UpcomingCard key={index} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default SectionWrapper(UpcomingSection, "upcoming");
export { UpcomingSection };