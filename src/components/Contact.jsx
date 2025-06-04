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
  const [submitted, setSubmitted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const handleSubmit = (e) => {
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", message: "" });
      }, 3000);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [0, 10, 0, -10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-20 right-32 w-56 h-56 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 3 }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 6 }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className={`${styles.sectionText} mb-4 text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text`}>
            Let's Connect
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div 
          className="relative backdrop-blur-sm bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-pink-900/10 border border-purple-500/20 rounded-3xl p-8 md:p-12 shadow-2xl"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-400/30 to-transparent rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-600/30 to-transparent rounded-br-3xl"></div>

          {submitted ? (
            // Success State
            <motion.div 
              className="text-center py-16"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-green-300 mb-4">Message Sent Successfully!</h3>
              <p className="text-purple-200 text-lg">
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </motion.div>
          ) : (
            // Form State
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div 
                className="space-y-8"
                variants={itemVariants}
              >
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text mb-6">
                    Get In Touch
                  </h3>
                  <p className="text-purple-200 text-lg leading-relaxed mb-8">
                    Ready to bring your ideas to life? Whether it's game development, 
                    app creation, or just a friendly chat about technology, I'm here to help.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-xl border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl">
                      📧
                    </div>
                    <div>
                      <h4 className="text-orange-300 font-semibold">Email</h4>
                      <p className="text-purple-200">rajayaseen2003@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-xl border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
                      🎮
                    </div>
                    <div>
                      <h4 className="text-pink-300 font-semibold">Game Dev</h4>
                      <p className="text-purple-200">Let's create amazing games</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                      📱
                    </div>
                    <div>
                      <h4 className="text-purple-300 font-semibold">App Development</h4>
                      <p className="text-purple-200">Mobile & web solutions</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <form
                  action="https://getform.io/f/agdyezxb"
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-2">
                    <label className="text-orange-300 font-semibold text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:border-orange-400/50 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-pink-300 font-semibold text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="w-full p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:border-pink-400/50 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all duration-300"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-purple-300 font-semibold text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Message
                    </label>
                    <motion.textarea
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project or just say hello..."
                      rows="6"
                      className="w-full p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 px-8 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:from-orange-400 hover:via-pink-400 hover:to-purple-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>Send Message</span>
                        <span className="text-lg">🚀</span>
                      </div>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* Credits Section */}
        <motion.div 
          className="text-center mt-12 text-sm text-purple-400/60"
          variants={itemVariants}
        >
          Thanks to{" "}
          <a
            href="https://www.vecteezy.com/vector-art/3623626-sunset-lake-landscape-illustration"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Vecteezy
          </a>{" "}
          for the art.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");