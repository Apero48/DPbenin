import React from 'react';

const Videos = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary-700 mb-4">Vidéos</h1>
      <p className="text-gray-700 mb-6">
        Regardez nos vidéos pour en apprendre davantage sur DPB et ses activités.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemple de vidéo */}
        <div className="shadow-md rounded overflow-hidden">
          <iframe
            className="w-full h-48"
            src="https://www.youtube.com/embed/example"
            title="Vidéo DPB"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videos;
