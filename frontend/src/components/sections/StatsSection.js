import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaUsers, FaGasPump, FaGlobeAfrica } from 'react-icons/fa';

const stats = [
  {
    id: 1,
    title: '25+',
    description: 'Années d\'expérience',
    icon: <FaHistory className="text-4xl" />,
  },
  {
    id: 2,
    title: '500+',
    description: 'Employés',
    icon: <FaUsers className="text-4xl" />,
  },
  {
    id: 3,
    title: '10+',
    description: 'Dépôts pétroliers',
    icon: <FaGasPump className="text-4xl" />,
  },
  {
    id: 4,
    title: '100%',
    description: 'Couverture nationale',
    icon: <FaGlobeAfrica className="text-4xl" />,
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-16 bg-primary-600 text-white">
      <div className="absolute inset-0 bg-primary-700 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-primary-500 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center text-white">
                {stat.icon}
              </div>
              
              <motion.h3
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: 'spring' }}
                className="text-4xl font-bold mb-2"
              >
                {stat.title}
              </motion.h3>
              
              <p className="text-lg">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;