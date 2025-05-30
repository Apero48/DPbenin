import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { FaCheck, FaGraduationCap, FaBriefcase, FaUsers } from 'react-icons/fa';

// Mock job openings
const jobOpenings = [
  {
    id: 1,
    title: 'Ingénieur en Maintenance',
    department: 'Opérations',
    location: 'Cotonou, Bénin',
    type: 'Temps plein'
  },
  {
    id: 2,
    title: 'Responsable HSE',
    department: 'HSE',
    location: 'Cotonou, Bénin',
    type: 'Temps plein'
  },
  {
    id: 3,
    title: 'Technicien de Laboratoire',
    department: 'Qualité',
    location: 'Cotonou, Bénin',
    type: 'Temps plein'
  }
];

const benefits = [
  {
    icon: <FaGraduationCap className="text-4xl text-primary-600" />,
    title: 'Formation Continue',
    description: 'Programmes de développement professionnel'
  },
  {
    icon: <FaBriefcase className="text-4xl text-primary-600" />,
    title: 'Package Attractif',
    description: 'Rémunération et avantages compétitifs'
  },
  {
    icon: <FaUsers className="text-4xl text-primary-600" />,
    title: 'Environnement Dynamique',
    description: 'Culture d\'entreprise collaborative'
  }
];

const CareersPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="w-full mb-12">
        <img
          src="/images/cariere.png"
          alt="Carrières chez DPB"
          className="w-full h-64 object-cover rounded"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle
          title="Carrières"
          subtitle="Rejoignez DPB et contribuez à l'excellence opérationnelle dans le secteur pétrolier"
        />

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-primary-700 mb-6">Offres d'Emploi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-primary-700 mb-2">{job.title}</h3>
                <div className="text-gray-600 space-y-2 mb-4">
                  <p><FaCheck className="inline mr-2 text-primary-600" />{job.department}</p>
                  <p><FaCheck className="inline mr-2 text-primary-600" />{job.location}</p>
                  <p><FaCheck className="inline mr-2 text-primary-600" />{job.type}</p>
                </div>
                <Button variant="outline">Postuler</Button>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold text-primary-700 mb-6">Avantages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CareersPage;
