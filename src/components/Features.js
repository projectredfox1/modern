import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Blazing fast performance with optimized code and modern architecture.'
    },
    {
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Stunning modern design with smooth animations and responsive layout.'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Enterprise-grade security with encryption and best practices.'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Perfectly works on all devices from mobile to desktop.'
    },
    {
      icon: '⚡',
      title: 'Easy to Use',
      description: 'Intuitive interface that requires no technical knowledge.'
    },
    {
      icon: '🛠️',
      title: 'Customizable',
      description: 'Fully customizable to match your brand and requirements.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="features" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Amazing <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to build modern, responsive, and high-performing websites.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02
              }}
              className="glass-effect p-8 rounded-2xl group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;