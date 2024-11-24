import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const AboutMe = () => {
  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>About Me</h2>
      </motion.div>

      <div className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
        <div className="w-full px-6 md:p-16 flex flex-col justify-center">
          <p className="mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
          I am currently a student at Air University, where I am pursuing a degree in Computer Game Development. My passion for creating apps and coding began at a young age. Growing up playing countless video games, I developed a profound appreciation for the mechanics, design, and aesthetics that make a game truly engaging. 
          
          This interest evolved into a deep understanding of how game dynamics work, which has become the foundation of my creative process. 
          
          <br/> <br/>Over the years, I've honed my skills not only in game development but also in building apps for practical purposes. One of my significant projects includes creating a social networking app for a university, which allowed students and faculty to connect and engage in a digital space. This experience gave me insights into user experience, interface design, and the power of seamless communication in digital environments. I am deeply committed to blending my passion for games and apps to create innovative experiences. Whether it's developing immersive games or useful applications, I strive to build projects that captivate users and offer both functionality and enjoyment. My goal is to continue applying my knowledge of design, mechanics, and user engagement to shape the future of gaming and app development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "aboutme");
