import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

// Mock news data
const newsItems = [
  {
    id: 1,
    title: 'DPB renforce sa capacité de stockage',
    excerpt: 'Inauguration de nouveaux réservoirs pour améliorer la capacité de stockage.',
    content: 'DPB a inauguré de nouveaux réservoirs de stockage, augmentant significativement sa capacité totale...',
    date: '15 Mai 2023',
    category: 'Infrastructure',
    image: 'images/ims.jpeg'
  },
  {
    id: 2,
    title: 'Certification ISO 9001:2015',
    excerpt: 'DPB obtient la certification ISO 9001:2015 pour son système de management de la qualité.',
    content: 'Cette certification témoigne de notre engagement envers l\'excellence opérationnelle...',
    date: '3 Mai 2023',
    category: 'Qualité',
    image: 'images/distribution-system.jpg'
  },
  {
    id: 3,
    title: 'Programme de formation HSE',
    excerpt: 'Lancement d\'un nouveau programme de formation en santé, sécurité et environnement.',
    content: 'DPB renforce ses compétences en matière de sécurité avec un nouveau programme de formation...',
    date: '28 Avril 2023',
    category: 'Formation',
    image: 'images/maintenance-worker.jpg'
  }
];

const PublicationsPage = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16">
       <div className="w-full mb-12">
        <img
          src="/images/publication.png"
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
          title="Publications"
          subtitle="Restez informé des dernières actualités de DPB"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                title={news.title}
                excerpt={news.excerpt}
                image={news.image}
                date={news.date}
                category={news.category}
                onClick={() => setSelectedNews(news)}
              />
            </motion.div>
          ))}
        </div>

        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-lg max-w-2xl w-full p-6"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-primary-700 mb-2">{selectedNews.title}</h2>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{selectedNews.date}</span>
                <span className="mx-2">•</span>
                <span>{selectedNews.category}</span>
              </div>
              <p className="text-gray-600">{selectedNews.content}</p>
              <button
                className="mt-4 text-primary-700 hover:text-primary-800"
                onClick={() => setSelectedNews(null)}
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

export default PublicationsPage;
