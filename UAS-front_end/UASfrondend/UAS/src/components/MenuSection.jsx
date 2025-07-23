import React from 'react';

export default function MenuSection({ baksoList, onAddToCart }) {
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Menu Bakso</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {baksoList.map(bakso => (
          <div key={bakso.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
            console.log("gambar bakso:", bakso.gambar);
            <img
              src={bakso.gambar ? bakso.gambar:"/src/assets/Bakso.png"}
              alt={`Bakso ${bakso.nama}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 text-gray-800">{bakso.nama}</h3>
              <p className="text-orange-500 font-medium mb-2">Rp {bakso.harga.toLocaleString()}</p>
              <p className="text-gray-600 text-sm mb-4">{bakso.deskripsi}</p>
              <button
                onClick={() => onAddToCart(bakso)}
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-all"
              >
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}