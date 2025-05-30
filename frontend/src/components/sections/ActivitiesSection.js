import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';


const activities = [
  {
    id: 1,
    title: 'Stockage Pétrolier',
    description: 'Gestion des dépôts pétroliers et stockage sécurisé des produits pétroliers au Bénin.',
    image: '/images/distribution-system.jpg',
    linkTo: '/activities/storage',
  },
  {
    id: 2,
    title: 'Distribution',
    description: 'Distribution efficace des produits pétroliers à travers notre réseau de distribution au Bénin.',
    image: '/images/DBPDB2.jpeg',
    linkTo: '/activities/distribution',
  },
  {
    id: 3,
    title: 'Logistique',
    description: 'Gestion optimale de la chaîne logistique pour assurer l’approvisionnement continu en produits pétroliers.',
    image: '/images/nous.jpeg',
    linkTo: '/activities/logistics',
  },
  {
    id: 4,
    title: 'Sécurité et Qualité',
    description: 'Maintien des normes de sécurité et de qualité les plus élevées dans la gestion des produits pétroliers.',
    image: '/images/distribution-pipes.jpg',
    linkTo: '/activities/quality',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ActivitiesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nos Activités"
          subtitle="Découvrez nos domaines d'expertise dans l'industrie pétrolière et gazière"
          center
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {activities.map((activity) => (
            <motion.div key={activity.id} variants={item}>
              <Card
                title={activity.title}
                description={activity.description}
                image={activity.image}
                linkTo={activity.linkTo}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection;