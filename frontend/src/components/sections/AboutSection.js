import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-700 mb-6">DPB</h2>
              <p className="text-lg text-gray-600 mb-6">
                DPB est une entreprise leader dans le stockage et la distribution de produits pétroliers au Bénin.
                Nous jouons un rôle crucial dans l'approvisionnement énergétique du pays.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-primary-500 mb-4">
                  <FaQuoteLeft size={30} />
                </div>
                <p className="text-lg text-gray-700 italic mb-4">
                  En tant que Directeur Général de DPB, je suis fier de diriger une entreprise qui joue un rôle crucial dans
                  l'approvisionnement énergétique du Bénin. Notre expertise dans la réception, le stockage et la distribution
                  des produits pétroliers fait de nous un acteur clé de la chaîne logistique nationale.
                </p>
                <div className="flex items-center">
                  <div className="font-semibold text-primary-700">Mr Sosthène Mesmin Hounsou</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  as="link"
                  to="/presentation"
                  variant="primary"
                  size="md"
                >
                  Notre Histoire
                </Button>
                <Button
                  as="link"
                  to="/activities"
                  variant="outline"
                  size="md"
                >
                  Découvrir Nos Activités
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-4 rounded-lg shadow-xl">
                <img
                  src="/images/dg-dpb.jpg"
                  alt="Directeur Général de DPB"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Mr Sosthène Mesmin Hounsou</h3>
                <p>Directeur Général – DPB</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;