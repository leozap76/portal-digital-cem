import React from 'react';
import IluminacionView from './IluminacionView';
const IluminacionView = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Aquí podrías importar tu Navbar */}
      <section className="py-20 px-6">
        <h2 className="text-5xl font-black mb-12 text-emerald-950 uppercase">
          Colección <br/> Iluminación Premium
        </h2>
        
        {/* Grilla de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Aquí mapeas tus productos de iluminación */}
          <div className="bg-gray-50 p-4 rounded-3xl shadow-sm">
            <img src="https://via.placeholder.com/400x400" className="rounded-2xl mb-4" />
            <h4 className="font-bold text-xl">Luminaria LED Diseño</h4>
            <p className="text-sm text-gray-500">Ideal para oficinas y livings modernos.</p>
          </div>
          {/* ... más productos ... */}
        </div>
      </section>
    </div>
  );
};

export default IluminacionView;