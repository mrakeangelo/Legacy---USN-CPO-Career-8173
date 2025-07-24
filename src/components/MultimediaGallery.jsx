import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiImage, FiVideo, FiUsers, FiAward, FiPlay } = FiIcons;

const MultimediaGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All', icon: FiImage },
    { id: 'duty', label: 'Uniform & Duty', icon: FiAward },
    { id: 'family', label: 'Family & Homecomings', icon: FiUsers },
    { id: 'ceremonies', label: 'Ceremonies', icon: FiAward },
    { id: 'brotherhood', label: 'Brotherhood', icon: FiUsers }
  ];
  
  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'duty',
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Dress Blue Uniform',
      description: 'Navy Ball 2018'
    },
    {
      id: 2,
      type: 'image',
      category: 'family',
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Homecoming',
      description: 'After 9-month deployment'
    },
    {
      id: 3,
      type: 'video',
      category: 'ceremonies',
      src: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Chief Pinning Ceremony',
      description: 'Making Chief - 2016'
    },
    {
      id: 4,
      type: 'image',
      category: 'brotherhood',
      src: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Ship Life',
      description: 'Mess deck with the crew'
    },
    {
      id: 5,
      type: 'image',
      category: 'duty',
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Working Uniform',
      description: 'Daily operations'
    },
    {
      id: 6,
      type: 'image',
      category: 'family',
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Family Portrait',
      description: 'Military family photo'
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Multimedia Gallery</h2>
          <p className="text-xl text-gray-600">Memories captured through two decades of service</p>
        </motion.div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <SafeIcon icon={filter.icon} className="mr-2" />
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                      <SafeIcon icon={FiPlay} className="text-blue-600 text-2xl" />
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                    {item.type === 'video' ? 'VIDEO' : 'PHOTO'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MultimediaGallery;