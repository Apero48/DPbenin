import React from 'react';

const AppelsOffres = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary-700 mb-4">Appels d'Offres</h1>
      <p className="text-gray-700 mb-6">
        Retrouvez ici toutes les informations concernant les appels d'offres disponibles chez DPB.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemple d'image */}
        <div className="shadow-md rounded overflow-hidden">
          <img src="/images/appel-offre1.jpg" alt="Appel d'Offre" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-primary-700">Titre de l'Appel d'Offre</h2>
            <p className="text-gray-600">Description courte de l'appel d'offre.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppelsOffres;
