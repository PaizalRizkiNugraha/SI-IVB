import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/lbakso.jpg';

export default function Header({ cart, onRemove, onCheckout }) {
  const [open, setOpen] = useState(false);
  const cartRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.harga * item.quantity, 0);

  return (
    <header className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-12 w-12 mr-3 rounded-full" />
          <h1 className="text-2xl font-bold text-gray-800">BaksoGo</h1>
        </div>
        <div className="relative" ref={cartRef}>
          <button onClick={() => setOpen(!open)} className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
            <svg xmlns="🛒http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222..." />
            </svg>
            Keranjang ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <div className="p-2 max-h-64 overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">Keranjang kosong</p>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center py-2 border-b">
                      <div className="flex-grow">
                        <p className="text-sm font-medium">{item.nama}</p>
                        <p className="text-xs text-gray-500">{item.quantity} x Rp {item.harga.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-3">Rp {(item.harga * item.quantity).toLocaleString()}</span>
                        <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142..." />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="border-t border-gray-200 px-4 py-2">
                <p className="flex justify-between text-gray-800 font-medium mb-2">
                  <span>Total:</span>
                  <span>Rp {total.toLocaleString()}</span>
                </p>
                <button onClick={onCheckout} disabled={cart.length === 0} className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 disabled:opacity-50">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
