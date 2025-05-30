import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaQuestionCircle, FaNewspaper, FaHandshake } from 'react-icons/fa';

const ContactPage = () => {
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
          title="Contactez-nous"
          subtitle="Nous sommes à votre écoute pour toute question ou demande d'information"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-primary-700 mb-6">Nos Coordonnées</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 mb-1">Siège social</h3>
                  <p className="text-gray-600">Zone Portuaire, Route des Pêches, 01 BP 49 Cotonou, Bénin</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-primary-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 mb-1">Téléphone</h3>
                  <p className="text-gray-600">+229 21 31 24 85</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="text-primary-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 mb-1">Email</h3>
                  <p className="text-gray-600">contact@dpb.bj</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaClock className="text-primary-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 mb-1">Horaires d'ouverture</h3>
                  <p className="text-gray-600">Lundi - Vendredi: 8h00 - 17h00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-primary-700 mb-6">Envoyez-nous un message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>
              <Button type="submit">Envoyer</Button>
            </form>
          </motion.div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="text-center">
              <FaQuestionCircle className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-700 mb-3">FAQ</h3>
              <p className="text-gray-600">
                Consultez notre FAQ pour trouver rapidement des réponses à vos questions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="text-center">
              <FaNewspaper className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Actualités</h3>
              <p className="text-gray-600">
                Restez informé des dernières actualités et événements de DPB.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="text-center">
              <FaHandshake className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Partenariats</h3>
              <p className="text-gray-600">
                Découvrez les opportunités de collaboration avec DPB.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 bg-white rounded-lg shadow-md"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">Localisez-nous</h2>
            <p className="text-gray-600 mb-4">
              Notre siège social est situé au cœur de Cotonou, facilement accessible depuis les principaux axes routiers.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-b-lg">
            <div className="text-center px-4">
              <p className="text-gray-600 mb-4">Carte interactive indisponible pour le moment.</p>
              <p className="text-gray-600">Adresse: Zone Portuaire, Route des Pêches, Cotonou</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-primary-700 mb-6">Questions Fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Comment devenir fournisseur de DPB ?</h3>
              <p className="text-gray-600">
                Pour devenir fournisseur, vous devez soumettre un dossier de candidature comprenant une présentation 
                de votre entreprise, vos références, et vos certifications. Contactez notre service achats à 
                l'adresse achats@dpb.bj pour plus d'informations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Comment postuler à une offre d'emploi ?</h3>
              <p className="text-gray-600">
                Consultez notre page Carrières pour voir les postes disponibles. Envoyez votre CV et lettre de 
                motivation à recrutement@dpb.bj en précisant le poste qui vous intéresse dans l'objet du mail.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
