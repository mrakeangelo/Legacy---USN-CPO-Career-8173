import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSend, FiImage, FiHeart, FiUser } = FiIcons;

const MessageWall = () => {
  const [newMessage, setNewMessage] = useState({ name: '', message: '', photo: null });
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      message: 'Thank you for your service, Chief. Your dedication and leadership inspired so many of us.',
      timestamp: '2024-01-15',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b332c3ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      message: 'Served alongside you on the Enterprise. Your leadership made all the difference. Fair winds and following seas, Chief.',
      timestamp: '2024-01-14',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      name: 'The Johnson Family',
      message: 'Our family is grateful for your service and sacrifice. Thank you for keeping our country safe.',
      timestamp: '2024-01-13',
      photo: null
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        ...newMessage,
        timestamp: new Date().toISOString().split('T')[0]
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '', photo: null });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Public Message Wall</h2>
          <p className="text-xl text-gray-600">Share your thoughts and gratitude</p>
        </motion.div>
        
        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Leave a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                value={newMessage.name}
                onChange={(e) => setNewMessage({...newMessage, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                value={newMessage.message}
                onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Share your thoughts, gratitude, or memories..."
                required
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <SafeIcon icon={FiImage} className="mr-2" />
                Add Photo
              </button>
              
              <button
                type="submit"
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <SafeIcon icon={FiSend} className="mr-2" />
                Post Message
              </button>
            </div>
          </form>
        </motion.div>
        
        {/* Messages Display */}
        <div className="space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {message.photo ? (
                    <img 
                      src={message.photo} 
                      alt={message.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiUser} className="text-gray-600" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{message.name}</h4>
                    <span className="text-sm text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{message.message}</p>
                  
                  <div className="mt-4 flex items-center space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
                      <SafeIcon icon={FiHeart} className="mr-1" />
                      <span className="text-sm">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageWall;