import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';


const Experience = () => {
  const experiences = [
    {
      company: "Site Galleria Pvt Ltd",
      position: "Node Js Developer",
      duration: "Dec 2024 - present",
      description :[
        "Working on Next Js Project",
        " Developed user-friendly interfaces ",
        "Contributed to building end-to-end web applications using the MERN stack."
      ],
      technologies: ["Node Js","Next Js","React Js","MongoDB"]
    },
    {
      company: "BasketHunt Pvt Ltd",
      position: "IT & Web Developer",
      duration: "Aug 2023 - Oct 2023",
      description: [
        "orked on optimizing existing websites and enhancing responsiveness.",
        "Collaborated on API integration to improve application functionality."
      ],
      technologies: ["React", "Node.js", "Tailwind Css", "Express Js"]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
      id='experience'
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Professional Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-blue-400">
                    {exp.position}
                  </h3>
                  <span className="text-gray-500 text-sm">
                    {exp.duration}
                  </span>
                </div>
                <h4 className="text-gray-300 mb-4">{exp.company}</h4>
                
                <ul className="text-gray-400 space-y-2 mb-4 list-disc pl-5">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-900 text-blue-200 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;