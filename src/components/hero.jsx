import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Github, Linkedin, ChevronDown, Mouse, Code, Terminal } from 'lucide-react';
import profile_img from "../assets/vishnu.jpg";
import resume from "../assets/resume.pdf";

const HeroSection = () => {
  const [role, setRole] = useState('');
  const roles = ['Innovative Full Stack Developer', 'React & Node.js Developer', 'Problem Solving'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;

    const handleTyping = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting && role === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && role === '') {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      } else {
        setRole(current => 
          isDeleting 
            ? current.slice(0, -1)
            : currentRole.slice(0, current.length + 1)
        );
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [role, roleIndex, isDeleting, roles]);

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com/vishnuvr16",
      label: "GitHub Profile"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://linkedin.com/in/vishnu-vardhan-reddy-03162005g/",
      label: "LinkedIn Profile"
    }
  ];

  const skills = [
    { icon: <Code className="w-4 h-4 text-blue-400" />, name: "Full Stack (MERN)" },
    { icon: <Terminal className="w-4 h-4 text-green-400" />, name: "Backend Development" }
  ];

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleProfileHover = () => {
    if (profileRef.current) {
      profileRef.current.classList.add('animate-pulse');
      setTimeout(() => {
        profileRef.current.classList.remove('animate-pulse');
      }, 2000);
    }
  };

  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative min-h-screen flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="w-full max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
            Vishnu Vardhan Reddy
          </h1>
          
          <div className="h-12 sm:h-16 mb-4 sm:mb-6">
            <p className="text-xl sm:text-3xl text-gray-300 flex justify-center md:justify-start items-center">
              {role}
              <span className="ml-2 animate-pulse text-blue-400">|</span>
            </p>
          </div>
          
          <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 mx-auto md:mx-0 max-w-md">
            Transforming complex challenges into elegant, scalable digital solutions through innovative software engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center md:justify-start">
            <motion.a 
              href={resume} 
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transition-all"
            >
              <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Download CV
            </motion.a>
            
            <div className="flex space-x-4 justify-center">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6 sm:mt-8 flex flex-col items-center md:items-start"
          >
            <button 
              onClick={() => setShowSkills(!showSkills)}
              className="text-xs sm:text-sm bg-gray-800 hover:bg-gray-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full transition-colors"
            >
              {showSkills ? 'Hide Skills' : 'Show Skills'}
            </button>

            <AnimatePresence>
              {showSkills && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 sm:mt-4 space-y-2"
                >
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      {skill.icon}
                      <span className="text-xs sm:text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center mt-8 md:mt-0"
        >
          <div 
            ref={profileRef}
            onMouseEnter={handleProfileHover}
            className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl"></div>
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
              <img 
                src={profile_img} 
                alt="Vishnu Vardhan Reddy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
        onClick={scrollToNextSection}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
      >
        <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <Mouse className="w-4 h-4 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
          <ChevronDown 
            className="w-5 h-5 sm:w-8 sm:h-8 animate-bounce text-blue-400 group-hover:text-blue-600 transition-colors"
          />
          <span className="text-xs sm:text-sm mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;