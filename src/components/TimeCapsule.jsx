import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiLock, FiCalendar, FiMail } = FiIcons;

const TimeCapsule = () => {
  const [capsuleData, setCapsuleData] = useState({
    message: '',
    deliveryDate: '',
    deliveryMethod: 'display',
    recipientEmail: ''
  });
  
  const [existingCapsules] = useState([
    {
      id: 1,
      title: 'For My Grandson\'s 18th Birthday',
      deliveryDate: '2042-05-15',
      status: 'sealed'
    },
    {
      id: 2,
      title: 'Navy Anniversary Message',
      deliveryDate: '2034-01-01',
      status: 'sealed'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle time capsule creation
    console.log('Time capsule created:', capsuleData);
    setCapsuleData({
      message: '',
      deliveryDate: '',
      deliveryMethod: 'display',
      recipientEmail: ''
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Time Capsule</h2>
          <p className="text-xl text-purple-200">Messages for the future</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Create New Capsule */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <SafeIcon icon={FiLock} className="mr-3 text-yellow-400" />
              Create Time Capsule
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Your Message
                </label>
                <textarea
                  value={capsuleData.message}
                  onChange={(e) => setCapsuleData({...capsuleData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  placeholder="Write a message to your future self or loved ones..."
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Delivery Date
                </label>
                <input
                  type="date"
                  value={capsuleData.deliveryDate}
                  onChange={(e) => setCapsuleData({...capsuleData, deliveryDate: e.target.value})}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Delivery Method
                </label>
                <select
                  value={capsuleData.deliveryMethod}
                  onChange={(e) => setCapsuleData({...capsuleData, deliveryMethod: e.target.value})}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                >
                  <option value="display">Display on website</option>
                  <option value="email">Send via email</option>
                </select>
              </div>
              
              {capsuleData.deliveryMethod === 'email' && (
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Recipient Email
                  </label>
                  <input
                    type="email"
                    value={capsuleData.recipientEmail}
                    onChange={(e) => setCapsuleData({...capsuleData, recipientEmail: e.target.value})}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Enter recipient's email"
                    required
                  />
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <SafeIcon icon={FiLock} className="mr-2" />
                Seal Time Capsule
              </button>
            </form>
          </motion.div>
          
          {/* Existing Capsules */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <SafeIcon icon={FiClock} className="mr-3 text-blue-400" />
              Sealed Capsules
            </h3>
            
            <div className="space-y-4">
              {existingCapsules.map((capsule) => (
                <div
                  key={capsule.id}
                  className="bg-white/10 rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{capsule.title}</h4>
                    <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">
                      {capsule.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-purple-200 text-sm">
                    <SafeIcon icon={FiCalendar} className="mr-2" />
                    Opens: {new Date(capsule.deliveryDate).toLocaleDateString()}
                  </div>
                  
                  <div className="mt-3 bg-white/5 rounded p-3">
                    <div className="flex items-center text-purple-300 text-sm">
                      <SafeIcon icon={FiLock} className="mr-2" />
                      This message is sealed until the delivery date
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-purple-200 text-sm">
                <SafeIcon icon={FiMail} className="inline mr-2" />
                Time capsules will be automatically displayed or emailed on their scheduled dates.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeCapsule;