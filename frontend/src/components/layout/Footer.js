import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DPB</h3>
            <p className="text-gray-300 mb-4">
              Dépôts Pétroliers du Bénin, 
              leader dans le stockage et la distribution 
              des produits pétroliers au Bénin.
            </p>
            <div className="flex space-x-3">
              <SocialLink href="https://facebook.com" icon={<FaFacebookF />} />
              <SocialLink href="https://twitter.com" icon={<FaTwitter />} />
              <SocialLink href="https://linkedin.com" icon={<FaLinkedinIn />} />
              <SocialLink href="https://youtube.com" icon={<FaYoutube />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <FooterLink to="/presentation">À Propos de Nous</FooterLink>
              <FooterLink to="/activities">Nos Activités</FooterLink>
              <FooterLink to="/publications">Publications</FooterLink>
              <FooterLink to="/media">Médiathèque</FooterLink>
              <FooterLink to="/careers">Carrières</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos Activités</h3>
            <ul className="space-y-2">
              <FooterLink to="/activities/upstream">Amont Pétrolier</FooterLink>
              <FooterLink to="/activities/midstream">Activités Midstream</FooterLink>
              <FooterLink to="/activities/downstream">Aval Pétrolier</FooterLink>
              <FooterLink to="/activities/gas">Gaz Naturel</FooterLink>
              <FooterLink to="/activities/trading">Trading</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-secondary-400" />
                <span className="text-sm">Zone Portuaire, Route des Pêches, 01 BP 49 Cotonou, Bénin</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-secondary-400" />
                <span className="text-sm">+225 01 55 01 02 85</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-secondary-400" />
                <span className="text-sm">info@dpb.dj</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} DPB. Tous droits réservés. SACRAMENTO 01 66 78 72 71</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-primary-700 hover:bg-accent-500 transition-colors duration-300 h-8 w-8 rounded-full flex items-center justify-center"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ to, children }) => {
  return (
    <li>
      <Link to={to} className="text-gray-300 hover:text-secondary-300 transition-colors duration-200 text-sm">
        {children}
      </Link>
    </li>
  );
};

export default Footer;
