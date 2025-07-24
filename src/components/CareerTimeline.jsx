import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiAward, FiGlobe, FiUsers, FiHome } = FiIcons;

const CareerTimeline = () => {
  const milestones = [
    {
      year: '2004',
      title: 'Boot Camp Graduation',
      description: 'Great Lakes Naval Training Center',
      icon: FiStar,
      image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      year: '2008',
      title: 'First Deployment',
      description: 'USS Enterprise - Persian Gulf',
      icon: FiGlobe,
      image: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      year: '2012',
      title: 'Petty Officer First Class',
      description: 'Advanced to E-6',
      icon: FiAward,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      year: '2016',
      title: 'Made Chief',
      description: 'Pinned to E-7 - Chief Petty Officer',
      icon: FiStar,
      image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      year: '2020',
      title: 'Command Position',
      description: 'Leading Petty Officer',
      icon: FiUsers,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      year: '2024',
      title: 'Retirement Ceremony',
      description: '20 Years of Faithful Service',
      icon: FiHome,
      image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Career Timeline</h2>
          <p className="text-xl text-gray-600">Two decades of service, dedication, and growth</p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 mb-4">{milestone.description}</p>
                  <img 
                    src={milestone.image} 
                    alt={milestone.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
              
              {/* Center Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                <SafeIcon icon={milestone.icon} className="text-white text-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;