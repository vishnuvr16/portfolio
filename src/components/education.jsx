import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of technology in Computer Science",
      institution: "Rajiv Gandhi University of Knowledge and Technologies , Ongole Campus",
      year: "2022 - 2026",
      description: "Specialized in MERN stack and problem solving"
    },
    {
      degree: "Pre University Course",
      institution: "Rajiv Gandhi University of Knowledge and Technologies , Ongole Campus",
      year: "2020 - 2022",
      description: "Grade : 9.81/10"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Education
      </h2>

      <div className="space-y-6">
        {educationList.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-green-400">
                    {edu.degree}
                  </h3>
                  <span className="text-gray-500 text-sm">
                    {edu.year}
                  </span>
                </div>
                <h4 className="text-gray-300 mb-2">{edu.institution}</h4>
                {edu.description && (
                  <p className="text-gray-400 text-sm">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Education;