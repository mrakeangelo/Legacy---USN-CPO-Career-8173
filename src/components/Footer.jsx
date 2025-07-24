import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFlag, FiHeart, FiExternalLink } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Flags */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <motion.div
              animate={{ 
                rotateY: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-12 h-8 bg-gradient-to-r from-red-500 via-white to-blue-500 rounded shadow-lg"
            />
            <motion.div
              animate={{ 
                rotateY: [0, -5, 0, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="w-12 h-8 bg-gradient-to-r from-blue-900 via-yellow-400 to-blue-900 rounded shadow-lg"
            />
            <SafeIcon icon={FiFlag} className="text-2xl text-blue-400" />
          </motion.div>
          
          {/* Center - Legacy Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-300 mb-2">
              "Legacy isn't what you leave behind—it's what you build in others."
            </p>
            <div className="flex items-center justify-center text-sm text-gray-400">
              <SafeIcon icon={FiHeart} className="mr-2 text-red-400" />
              <span>Honoring 20 years of service</span>
            </div>
          </motion.div>
          
          {/* Right - Mrake Agency Branding */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <div className="inline-flex items-center bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-300 mr-2">Made with honor. Built with</span>
              <span className="font-bold text-blue-400">Mrake</span>
              <SafeIcon icon={FiExternalLink} className="ml-2 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Premium legacy websites for heroes
            </p>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Chief John Smith Legacy. All rights reserved. | 
            <span className="ml-2">Proudly served: United States Navy</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;