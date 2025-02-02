import React from 'react';
import { motion } from 'framer-motion';

const Skills= () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React Js", "Tailwind CSS" , "HTML", "BootStrap"]
    },
    {
      name: "Backend",
      skills: ["Node Js", "Express Js", "PHP", "REST APIs"]
    },
    {
      name: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "Firebase", "Git", "Postman","VS Code"]
    },
    {
      name: "Programming Languages",
      skills: ["Java", "JavaScript", "C"]
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
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;