import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiFlag, FiShield } = FiIcons;

const WhyIServed = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why I Served</h2>
          <p className="text-xl text-blue-200">The story behind the uniform</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiFlag} className="text-3xl text-blue-400 mr-4" />
              <h3 className="text-2xl font-bold">For Country</h3>
            </div>
            <p className="text-lg leading-relaxed">
              I enlisted not for glory or recognition, but because I believed in something greater than myself. 
              The principles of honor, courage, and commitment weren't just words on a wall—they were the 
              foundation of who I wanted to become.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiHeart} className="text-3xl text-red-400 mr-4" />
              <h3 className="text-2xl font-bold">For Family</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Every deployment, every long night at sea, every time I put on the uniform, I carried with me 
              the faces of those I loved. My family's sacrifice made my service possible, and their strength 
              made me stronger.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiShield} className="text-3xl text-green-400 mr-4" />
              <h3 className="text-2xl font-bold">For Brotherhood</h3>
            </div>
            <p className="text-lg leading-relaxed">
              The bonds forged in service run deeper than friendship—they're forged in shared purpose, 
              mutual trust, and the knowledge that the person next to you would give everything to bring 
              you home safely.
            </p>
          </div>
          
          <blockquote className="border-l-4 border-blue-400 pl-6 italic text-xl text-center mt-12">
            "Service is not about the uniform you wear or the rank you hold. It's about the promise you make 
            to defend something greater than yourself, and the courage to keep that promise every single day."
          </blockquote>
        </motion.div>
        
        {/* Audio Player Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-sm text-blue-200 mb-4">Listen to the full story</p>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                <SafeIcon icon={FiIcons.FiPlay} className="text-xl" />
              </button>
              <div className="flex-1 bg-white/20 rounded-full h-2 w-64">
                <div className="bg-blue-400 h-2 rounded-full w-1/3"></div>
              </div>
              <span className="text-sm text-blue-200">2:34 / 8:15</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyIServed;