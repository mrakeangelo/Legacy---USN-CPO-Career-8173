import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiStar, FiShield } = FiIcons;

const AwardsSection = () => {
  const awards = [
    {
      name: 'Navy Achievement Medal',
      description: 'For professional achievement and meritorious service',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'medal'
    },
    {
      name: 'Navy Commendation Medal',
      description: 'For sustained acts of heroism or meritorious service',
      image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'medal'
    },
    {
      name: 'Global War on Terror Service Medal',
      description: 'For service during the Global War on Terror',
      image: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'medal'
    },
    {
      name: 'Surface Warfare Specialist',
      description: 'Qualified in surface warfare operations',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'warfare'
    },
    {
      name: 'Good Conduct Medal',
      description: 'For exemplary behavior, efficiency, and fidelity',
      image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'medal'
    },
    {
      name: 'Navy Expeditionary Medal',
      description: 'For service in expeditionary operations',
      image: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      category: 'medal'
    }
  ];

  const ranks = [
    { rank: 'SR', name: 'Seaman Recruit', year: '2004' },
    { rank: 'SA', name: 'Seaman Apprentice', year: '2004' },
    { rank: 'SN', name: 'Seaman', year: '2005' },
    { rank: 'PO3', name: 'Petty Officer 3rd Class', year: '2006' },
    { rank: 'PO2', name: 'Petty Officer 2nd Class', year: '2009' },
    { rank: 'PO1', name: 'Petty Officer 1st Class', year: '2012' },
    { rank: 'CPO', name: 'Chief Petty Officer', year: '2016' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Awards & Qualifications</h2>
          <p className="text-xl text-gray-600">Recognition earned through dedication and service</p>
        </motion.div>
        
        {/* Awards Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
            <SafeIcon icon={FiAward} className="mr-3 text-blue-600" />
            Medals & Decorations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={award.image} 
                    alt={award.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{award.name}</h4>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {award.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Rank Progression */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
            <SafeIcon icon={FiStar} className="mr-3 text-blue-600" />
            Rank Progression
          </h3>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-6 left-8 right-8 h-1 bg-blue-200"></div>
              
              <div className="flex justify-between items-start">
                {ranks.map((rank, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center relative"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg">
                      {rank.rank}
                    </div>
                    <div className="mt-4 text-center">
                      <div className="font-semibold text-gray-800 text-sm">{rank.name}</div>
                      <div className="text-gray-600 text-xs mt-1">{rank.year}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Warfare Devices */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
            <SafeIcon icon={FiShield} className="mr-3 text-blue-600" />
            Warfare Qualifications
          </h3>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiShield} className="text-3xl text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Surface Warfare</h4>
                <p className="text-gray-600 text-sm">Qualified in surface operations</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiShield} className="text-3xl text-gray-400" />
                </div>
                <h4 className="font-semibold text-gray-400">Aviation Warfare</h4>
                <p className="text-gray-400 text-sm">Not qualified</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiShield} className="text-3xl text-gray-400" />
                </div>
                <h4 className="font-semibold text-gray-400">Submarine Warfare</h4>
                <p className="text-gray-400 text-sm">Not qualified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;