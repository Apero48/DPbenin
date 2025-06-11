import React from 'react';

const Newsletter = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary-700 mb-4">Newsletter</h1>
      <p className="text-gray-700 mb-6">
        Inscrivez-vous à notre newsletter pour rester informé des dernières actualités et événements de DPB.
      </p>
      <form className="bg-gray-100 p-6 rounded shadow-md">
        <label className="block mb-4">
          <span className="text-gray-700">Adresse Email</span>
          <input
            type="email"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Votre email"
          />
        </label>
        <button className="bg-primary-700 text-white px-4 py-2 rounded hover:bg-primary-800">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
