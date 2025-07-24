import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiSettings, FiImage, FiClock, FiAward, FiUsers, FiLogOut } = FiIcons;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Supabase authentication would go here
    setIsLoggedIn(true);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'timeline', label: 'Timeline', icon: FiClock },
    { id: 'gallery', label: 'Gallery', icon: FiImage },
    { id: 'awards', label: 'Awards', icon: FiAward },
    { id: 'messages', label: 'Messages', icon: FiUsers },
    { id: 'settings', label: 'Settings', icon: FiSettings }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
            <p className="text-gray-600 mt-2">Access your legacy dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
          </div>
          
          <nav className="mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                  activeTab === tab.id ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
                }`}
              >
                <SafeIcon icon={tab.icon} className="mr-3" />
                {tab.label}
              </button>
            ))}
            
            <button
              onClick={() => setIsLoggedIn(false)}
              className="w-full flex items-center px-6 py-3 text-left text-red-600 hover:bg-red-50 transition-colors mt-4"
            >
              <SafeIcon icon={FiLogOut} className="mr-3" />
              Logout
            </button>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-6">Profile Management</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rank</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Rank" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Years of Service</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Years" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Branch</label>
                    <select className="w-full px-4 py-2 border rounded-lg">
                      <option>Navy</option>
                      <option>Army</option>
                      <option>Air Force</option>
                      <option>Marines</option>
                      <option>Coast Guard</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hero Quote</label>
                  <textarea className="w-full px-4 py-2 border rounded-lg h-24" placeholder="Your inspiring quote..."></textarea>
                </div>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            )}
            
            {activeTab === 'timeline' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-6">Career Timeline</h2>
                <p className="text-gray-600">Manage your career milestones and deployments.</p>
              </div>
            )}
            
            {activeTab === 'gallery' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-6">Media Gallery</h2>
                <p className="text-gray-600">Upload and organize your photos and videos.</p>
              </div>
            )}
            
            {activeTab === 'awards' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-6">Awards & Qualifications</h2>
                <p className="text-gray-600">Manage your medals and achievements.</p>
              </div>
            )}
            
            {activeTab === 'messages' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-6">Public Messages</h2>
                <p className="text-gray-600">Moderate and manage public tributes.</p>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-6">Settings</h2>
                <p className="text-gray-600">Configure your legacy website settings.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;