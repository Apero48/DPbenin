import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ 
  title, 
  description, 
  image, 
  linkTo,
  linkText = 'En savoir plus',
  className = '',
  imageClassName = '',
  contentClassName = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}>
      {image && (
        <div className={`h-48 overflow-hidden ${imageClassName}`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className={`p-6 ${contentClassName}`}>
        <h3 className="text-xl font-bold text-primary-700 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {linkTo && (
          <Link 
            to={linkTo}
            className="text-primary-500 font-medium hover:text-primary-600 transition-colors duration-200 inline-flex items-center"
          >
            {linkText} 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;