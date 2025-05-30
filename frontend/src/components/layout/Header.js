import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('FR');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'FR' ? 'EN' : 'FR');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white px-4 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex space-x-4 text-sm">
            <a href="tel:+22921312485" className="hover:text-secondary-300">+229 01 55 01 02  85</a>
            <a href="mailto:contact@dpb.bj" className="hover:text-secondary-300">info@dpb.bj</a>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleLanguage} className="flex items-center text-sm hover:text-secondary-300">
              <FaGlobe className="mr-1" />
              <span>{currentLanguage}</span>
            </button>
            <button className="text-sm hover:text-secondary-300 flex items-center">
              <FaSearch className="mr-1" />
              <span>Recherche</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`container mx-auto px-4 py-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo2.jpeg" alt="DPB Logo" className="h-12" />
            <div className="text-primary-700 font-bold text-2xl ml-2">
              <span className="text-accent-500">DPB</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/presentation">Présentation</NavLink>
            <NavLink to="/activities">Activités</NavLink>
            <NavLink to="/publications">Publications</NavLink>
            <NavLink to="/media">Médiathèque</NavLink>
            <NavLink to="/careers">Carrières</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-primary-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={toggleMobileMenu}>Accueil</MobileNavLink>
              <MobileNavLink to="/presentation" onClick={toggleMobileMenu}>Présentation</MobileNavLink>
              <MobileNavLink to="/activities" onClick={toggleMobileMenu}>Activités</MobileNavLink>
              <MobileNavLink to="/publications" onClick={toggleMobileMenu}>Publications</MobileNavLink>
              <MobileNavLink to="/media" onClick={toggleMobileMenu}>Médiathèque</MobileNavLink>
              <MobileNavLink to="/careers" onClick={toggleMobileMenu}>Carrières</MobileNavLink>
              <MobileNavLink to="/contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="text-primary-700 font-medium hover:text-accent-500 transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  return (
    <Link 
      to={to} 
      className="text-primary-700 font-medium hover:text-accent-500 transition-colors duration-200 py-2 border-b border-gray-100"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;