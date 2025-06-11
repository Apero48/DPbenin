import React from 'react';

const OffresEmplois = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary-700 mb-4">Offres d'Emploi</h1>
      <p className="text-gray-700 mb-6">
        Découvrez les opportunités de carrière chez DPB et rejoignez notre équipe.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemple d'offre */}
        <div className="shadow-md rounded overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-primary-700">Poste : Analyste Financier</h2>
            <p className="text-gray-600">Description courte du poste.</p>
            <button className="mt-4 bg-primary-700 text-white px-4 py-2 rounded hover:bg-primary-800">
              Voir Détails
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffresEmplois;
