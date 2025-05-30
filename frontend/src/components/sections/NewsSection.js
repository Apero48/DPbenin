import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

// Mock news data
const newsItems = [
  {
    id: 1,
    title: 'DPB inaugure un nouveau dépôt pétrolier à Cotonou',
    excerpt: 'Un nouveau dépôt stratégique qui augmente la capacité de stockage nationale de 30%.',
    date: '15 Mai 2023',
    category: 'Infrastructure',
    image: '/images/distribution-worker.jpg',
  },
  {
    id: 2,
    title: 'Modernisation des installations de stockage',
    excerpt: 'DPB lance un programme de modernisation de ses installations pour améliorer la sécurité et l\'efficacité.',
    date: '28 Juin 2023',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1572295810189-10cefd4e0ed6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxnYXMlMjBzdGF0aW9ufGVufDB8fHxibHVlfDE3NDc5OTc0NTd8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    id: 3,
    title: 'Certification ISO pour la gestion de la qualité',
    excerpt: 'DPB obtient la certification ISO 9001:2015 pour son système de gestion de la qualité.',
    date: '10 Août 2023',
    category: 'Qualité',
    image: '/images/maintenance-worker.jpg',
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <SectionTitle
            title="Actualités"
            subtitle="Restez informé des dernières nouvelles de DPB"
            className="md:mb-0"
          />
          
          <Button
            as="link"
            to="/publications/news"
            variant="outline"
            size="md"
          >
            Toutes les actualités
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-accent-500 font-medium">{item.category}</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary-700 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                
                <a
                  href={`/publications/news/${item.id}`}
                  className="text-primary-500 font-medium hover:text-primary-600 transition-colors duration-200 inline-flex items-center"
                >
                  Lire la suite
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;