import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contact"
          subtitle="Besoin d'informations ? Contactez-nous"
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-primary-700 mb-6">Envoyez-nous un message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary" size="lg">
                Envoyer le message
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-primary-700 mb-6">Nos coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-500 rounded-full p-3 text-white mr-4">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-700 mb-1">Adresse</h4>
                  <p className="text-gray-600">Zone Portuaire, Route des Péches, 01 BP 49 Cotonou, Bénin</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-500 rounded-full p-3 text-white mr-4">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-700 mb-1">Téléphone</h4>
                  <p className="text-gray-600">+229 01 55 01 02 85</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-500 rounded-full p-3 text-white mr-4">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-700 mb-1">Email</h4>
                  <p className="text-gray-600">info@dpb.bj</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-primary-700 mb-4">Heures d'ouverture</h4>
                <table className="w-full text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-2">Lundi - Vendredi:</td>
                      <td className="py-2">8h00 - 16h30</td>
                    </tr>
                    <tr>
                      <td className="py-2">Samedi:</td>
                      <td className="py-2">9h00 - 12h00</td>
                    </tr>
                    <tr>
                      <td className="py-2">Dimanche:</td>
                      <td className="py-2">Fermé</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;