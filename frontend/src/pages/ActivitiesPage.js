import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const activities = [
  {
    id: 1,
    title: "Stockage de Produits Pétroliers",
    description: "Gestion et maintenance d'installations de stockage modernes pour assurer la sécurité et l'efficacité de l'approvisionnement en produits pétroliers.",
     image: '/images/WhatsApp Image 2025-05-20 at 09.59.21.jpeg',
  },
  {
    id: 2,
    title: "Distribution et Logistique",
    description: "Coordination et optimisation de la chaîne logistique pour une distribution efficace des produits pétroliers dans tout le Bénin.",
     image: '/images/distribution-system.jpg',
  },
  {
    id: 3,
    title: "Contrôle Qualité",
    description: "Mise en œuvre de procédures strictes de contrôle qualité pour garantir la conformité des produits aux normes internationales.",
     image: '/images/GNUGB.jpeg',
  },
  {
    id: 4,
    title: "Contrôle Qualité",
    description: "Mise en œuvre de procédures strictes de contrôle qualité pour garantir la conformité des produits aux normes internationales.",
     image: '/images/ims.jpeg',
  },
  {
    id: 5,
    title: "Contrôle Qualité",
    description: "Mise en œuvre de procédures strictes de contrôle qualité pour garantir la conformité des produits aux normes internationales.",
     image: '/images/distribution-system.jpg',
  }
];

const ActivitiesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
       <div className="w-full mb-12">
        <img
          src="/images/security-entrance.jpg"
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
          title="Nos Activités"
          subtitle="Découvrez nos principales activités dans le secteur pétrolier"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-700 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {activity.description}
                </p>
                <Button variant="outline">En savoir plus</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ActivitiesPage;
