import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      href: "https://github.com/vishnuvr16" 
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "https://linkedin.com/in/vishnu-vardhan-reddy-03162005g/" 
    },
    // { 
    //   icon: <Twitter className="w-6 h-6" />, 
    //   href: "https://twitter.com/yourusername" 
    // },
    { 
      icon: <Mail className="w-6 h-6" />, 
      href: "mailto:vishnuvardhanreddygajjala1@gmail.com" 
    }
  ];

  return (
    <footer className="bg-gray-900 py-12">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center"
        id='contact'
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Let's Connect
        </h2>
        
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Interested in collaborating or discussing innovative tech solutions? Feel free to reach out!
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  )
};

export default Footer;