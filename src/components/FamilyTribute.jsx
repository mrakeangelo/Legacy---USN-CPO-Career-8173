import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiHome, FiUsers } = FiIcons;

const FamilyTribute = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Family Tribute</h2>
          <p className="text-xl text-gray-600">To those who served alongside me at home</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Family Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Military family"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-full shadow-lg"
            >
              <SafeIcon icon={FiHeart} className="text-2xl text-red-500" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-full shadow-lg"
            >
              <SafeIcon icon={FiHome} className="text-2xl text-blue-500" />
            </motion.div>
          </motion.div>
          
          {/* Family Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiHeart} className="text-3xl text-red-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">To My Beloved Wife</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Sarah, you are the anchor that kept our family steady through every storm. 
                Your strength during deployments, your love during homecomings, and your 
                unwavering support made my service possible. Every medal I earned, every 
                promotion I received, was as much yours as it was mine.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiUsers} className="text-3xl text-blue-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">To My Children</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Emma and Jake, you sacrificed so much for my service—missed bedtime stories, 
                school events, and countless moments. I hope someday you'll understand that 
                every day I was away, I carried you in my heart. You are my greatest 
                achievement and my proudest legacy.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Wedding & Deployment Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Our Journey Together
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Wedding day"
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Wedding Day</h4>
                <p className="text-sm">June 15, 2006</p>
              </div>
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Deployment farewell"
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Deployment Farewell</h4>
                <p className="text-sm">March 2008</p>
              </div>
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Homecoming"
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Homecoming</h4>
                <p className="text-sm">December 2008</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Family Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Our Service Together
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">18</div>
              <div className="text-gray-600">Years Married</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">7</div>
              <div className="text-gray-600">Deployments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">5</div>
              <div className="text-gray-600">Duty Stations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 mb-2">2</div>
              <div className="text-gray-600">Beautiful Children</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyTribute;