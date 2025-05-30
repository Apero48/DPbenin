import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

// Mock photos data
const photos = [
  {
    id: 1,
    title: 'Installation de stockage principale',
    image: '/images/WhatsApp Image 2025-05-20 at 09.59.21.jpeg'
  },
  {
    id: 2,
    title: 'Équipe de maintenance',
    image: '/images/security-entrance.jpg'
  },
  {
    id: 3,
    title: 'Centre de contrôle',
    image: '/images/maintenance-worker.jpg'
  },
  {
    id: 4,
    title: 'Équipements de sécurité',
    image: '/images/security-entrance.jpg'
  }
];

const MediaPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16">
       <div className="w-full mb-12">
        <img
          src="/images/mediatique.png"
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
          title="Médiathèque"
          subtitle="Découvrez nos installations et nos équipes en images"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold text-center px-4">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                {selectedPhoto.title}
              </h3>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={() => setSelectedPhoto(null)}
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default MediaPage;
