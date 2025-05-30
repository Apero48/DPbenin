import React from 'react';
import { FaStar, FaShieldAlt, FaHandshake, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

const PresentationPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between gap-4 mb-6 w-full max-w-screen-lg mx-auto">
          <img
            src="/images/logo2.jpeg"
            alt="Logo carré"
            className="w-1/4 h-auto object-contain"
          />
          <img
            src="/images/storage-tank-s3.jpg"
            alt="Logo rectangle"
            className="w-3/4 h-auto object-contain"
          />
        </div>
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary-700 text-center mb-12">Présentation de DPB</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 max-w-xl mx-auto md:mx-0">
                Dépôts Pétroliers du Bénin (DPB) joue un rôle stratégique dans l'approvisionnement en énergie du Bénin.
                Nous sommes spécialisés dans le stockage, la distribution et la sécurisation des produits pétroliers.
                Grâce à une expertise reconnue et une infrastructure moderne, nous plaçons la sécurité, l'efficacité
                et la qualité de service au cœur de notre mission.
              </p>
            </div>
            <div>
              <img
                src="/images/quality-control.jpg"
                alt="Présentation DPB"
                className="w-full h-auto object-cover rounded shadow"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary-700">Notre Histoire</h3>
            <p className="text-gray-600">
              Dépôts Pétroliers du Bénin (DPB) est une entreprise leader dans le stockage et la distribution de produits pétroliers au Bénin. Depuis notre création, nous nous sommes engagés à fournir des services de haute qualité tout en maintenant les plus hauts standards de sécurité et de fiabilité.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary-700">Notre Mission</h3>
            <p className="text-gray-600">
              Notre mission est d'assurer un approvisionnement fiable et sécurisé en produits pétroliers pour le Bénin et la sous-région. Nous nous efforçons de maintenir l'excellence opérationnelle tout en contribuant au développement économique du pays.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-primary-700 mb-6">Notre Structure</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-primary-700 mb-4">Direction Générale</h4>
              <p className="text-gray-600">
                Supervision stratégique et gestion globale des opérations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-primary-700 mb-4">Opérations</h4>
              <p className="text-gray-600">
                Gestion des installations de stockage et de la logistique
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-primary-700 mb-4">HSE</h4>
              <p className="text-gray-600">
                Santé, Sécurité et Environnement
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-primary-700 mb-6 text-center">Nos Valeurs</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary-700 text-4xl mb-4 flex justify-center">
                <FaStar />
              </div>
              <h4 className="text-lg font-semibold text-primary-700 mb-2">Excellence</h4>
              <p className="text-gray-600">Dans toutes nos opérations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary-700 text-4xl mb-4 flex justify-center">
                <FaShieldAlt />
              </div>
              <h4 className="text-lg font-semibold text-primary-700 mb-2">Sécurité</h4>
              <p className="text-gray-600">Notre priorité absolue</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary-700 text-4xl mb-4 flex justify-center">
                <FaHandshake />
              </div>
              <h4 className="text-lg font-semibold text-primary-700 mb-2">Intégrité</h4>
              <p className="text-gray-600">Dans toutes nos relations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary-700 text-4xl mb-4 flex justify-center">
                <FaLightbulb />
              </div>
              <h4 className="text-lg font-semibold text-primary-700 mb-2">Innovation</h4>
              <p className="text-gray-600">Pour un service optimal</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PresentationPage;
