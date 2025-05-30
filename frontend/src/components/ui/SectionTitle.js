import React from 'react';

const SectionTitle = ({ 
  title, 
  subtitle, 
  center = false, 
  light = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-heading ${light ? 'text-white' : 'text-primary-700'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;