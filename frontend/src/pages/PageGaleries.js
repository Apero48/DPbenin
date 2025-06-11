import React from 'react';

const Galeries = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary-700 mb-4">Galeries</h1>
      <p className="text-gray-700 mb-6">
        Explorez nos galeries d'images pour découvrir les moments marquants de DPB.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemple d'image */}
        <div className="shadow-md rounded overflow-hidden">
          <img src="/images/gallery1.jpg" alt="Galerie" className="w-full h-48 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Galeries;
