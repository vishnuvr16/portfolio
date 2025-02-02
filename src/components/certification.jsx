import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certificationsList = [
    {
      title: "SQL Intermediate",
      issuer: "HackerRank",
      year: "2022",
      // credentialUrl: "https://example.com/credential/aws-architect"
    },
    {
      title: "Full Stack Web Development Course Completion",
      issuer: "Internshala Trainings",
      year: "2023",
      // credentialUrl: "https://example.com/credential/cka"
    },
    {
      title: "Java Course Completion",
      issuer: "Udemy",
      year: "2023"
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
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsList.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-purple-600 p-3 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">
                Issued: {cert.year}
              </span>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                >
                  View Credential
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certifications;