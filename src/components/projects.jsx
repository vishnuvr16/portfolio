import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import cuisine_creators from "../assets/cuisine-creators.jpg";
import job_portal from "../assets/jobportal.png";
import travel_co from "../assets/travelco.png"

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-400">{project.title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white"
          >
            Close (X)
          </button>
        </div>
        
        <div className="grid md:grid-rows-2 gap-6">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full rounded-lg shadow-lg"
          />
          <div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold text-blue-300 mb-2">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-900 text-blue-200 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full"
                >
                  <Github className="mr-2 w-5 h-5" /> GitHub
                </a>
              )}
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
                >
                  <ExternalLink className="mr-2 w-5 h-5" /> Live Preview
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState();

  const projects = [
    {
      id: 1,
      title: "Cuisine Creators",
      description: "A full-stack application leveraging AI to generate recipes based on the availability of ingredients and can be used to produce recipes by watching others recipes and reading blog articles. You can also upload your own recipes and write recipes blog articles",
      technologies: ["React Js", "Node Js", "Express Js", "Gemini AI", "MongoDB", "Tailwind CSS"],
      imageUrl: cuisine_creators,
      githubLink: "https://github.com/vishnuvr16/cuisine-creators",
      liveLink: "https://cuisine-creators.vercel.app/"
    },
    {
      id: 2,
      title: "TravelCo",
      description: " Developed a platform for travel planning with interactive maps and user reviews ,Created modular and reusable front-end components for seamless navigation , Executed efficient data queries to provide location-based recommendations.",
      technologies: ["React Js", "Node Js", "Express Js", "MongoDB", "Tailwind CSS"],
      imageUrl: travel_co,
      githubLink: "https://github.com/vishnuvr16/TravelCo",
      liveLink: "https://travelco-five.vercel.app/"
    },
    {
      id: 3,
      title: "Finance Tracker",
      description: "The Finance Tracker is a web application developed to assist users in managing their personal finances efficiently. Backend functionality was implemented using Node.js and Express.js, while MongoDB was utilized for data storage. Features like Income and expense tracking , Categorization of transactions to provide better insights, and Dynamic charts used for generating detailed financial reports",
      technologies: ["React Js", "Node Js", "Express Js", "MongoDB", "Tailwind CSS"],
      imageUrl: "/project2.png",
      githubLink: "https://github.com/vishnuvr16/FinanceTracker",
      liveLink: "https://finance-tracker-orcin.vercel.app/"
    },
    
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
      id='projects'
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Featured Projects
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-400 line-clamp-3">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </motion.section>
  );
}

export default Projects;