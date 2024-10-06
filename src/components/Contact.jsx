import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className='flex-[0.8] md:pb-20 mx-4 sm:mx-auto' // Adjusted padding bottom
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form
          action="https://getform.io/f/agdyezxb"
          method="POST"
          className="mt-12 gap-4 flex flex-col"
        >
          <span className='text-white font-medium mt-3'>Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium"
            required
          />
          <span className='text-white font-medium mt-3'>Email Address</span>
          <input
            type="email" // Changed to "email" for validation
            name="email"
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium"
            required
          />
          <span className='text-white font-medium mt-3'>Message</span>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium"
            required
          />
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary'
            onClick={() => setLoading(true)} // Set loading state when clicking the button
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Thanks to Vecteezy section */}
        <div className="mt-4 text-sm text-gray-600 text-center">
          Thanks to{" "}
          <a
            href="https://www.vecteezy.com/vector-art/3623626-sunset-lake-landscape-illustration"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500"
          >
            Vecteezy
          </a>{" "}
          for the art.
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
