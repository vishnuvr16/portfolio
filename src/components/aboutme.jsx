import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code, Server, ArrowRight, Zap } from 'lucide-react';

const AboutMe = () => {
  const [activeHighlight, setActiveHighlight] = useState(null);

  const keyHighlights = [
    {
      icon: <Award className="w-10 h-10 text-blue-400" />,
      title: "Professional Experience",
      description: "2 months of full-stack development creating scalable, innovative web solutions.",
      details: [
        " Worked on optimizing existing websites and enhancing responsiveness",
        // "Delivered high-impact projects for Fortune 500 companies",
        "Collaborated on API integration to improve application functionality"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Code className="w-10 h-10 text-green-400" />,
      title: "Technical Expertise",
      description: "Advanced proficiency in modern web technologies and cloud-native architectures.",
      details: [
        "Full-stack development with React and Node.js",
        "AI Integration",
        "Performance optimization"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Server className="w-10 h-10 text-purple-400" />,
      title: "Professional disciplines",
      description: "These disciplines focus on key skills like problem-solving, project management, and leadership, essential for professional growth and success.",
      details: [
        "Data Structures and Algorithms",
        "Aptitude & Reasoning",
        "Project Management",
        "Leadership"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container py-16"
      id='about'
    >
      <motion.h2 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600"
      >
        About My Journey
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="space-y-6 text-gray-200"
        >
          <p className="leading-relaxed text-lg">
            I'm a passionate Full Stack Developer dedicated to transforming complex technological challenges into elegant, efficient solutions. My approach blends technical mastery with creative problem-solving.
          </p>
          <p className="leading-relaxed text-lg">
            Committed to continuous learning, I stay at the forefront of emerging technologies, delivering innovative solutions that push the boundaries of web development.
          </p>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {keyHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveHighlight(activeHighlight === index ? null : index)}
              className={`relative cursor-pointer bg-gray-800 p-6 rounded-2xl text-center space-y-4 shadow-2xl border border-opacity-10 transition-all duration-300 
                ${activeHighlight === index 
                  ? `ring-4 ring-opacity-50 ring-blue-500 bg-gradient-to-br ${highlight.color}` 
                  : 'hover:bg-gray-700'}`}
            >
              <div className="flex justify-center">{highlight.icon}</div>
              <h3 className={`font-bold ${activeHighlight === index ? 'text-white' : 'text-blue-300'}`}>
                {highlight.title}
              </h3>
              <p className={`text-sm ${activeHighlight === index ? 'text-white text-opacity-90' : 'text-gray-400'}`}>
                {highlight.description}
              </p>

              <AnimatePresence>
                {activeHighlight === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="absolute inset-0 bg-black bg-opacity-80 rounded-2xl p-6 overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ul className="space-y-2 text-left text-white">
                        {highlight.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutMe;