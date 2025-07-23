import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AdminPanel from './components/AdminPanel';
import MenuSection from './components/MenuSection';
import Modal from './components/Modal';
import './App.css'; 

function App() {
  const [baksoList, setBaksoList] = useState(() => {
    const saved = localStorage.getItem('baksoList');
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [modal, setModal] = useState({ show: false, title: '', message: '' });

  useEffect(() => {
    localStorage.setItem('baksoList', JSON.stringify(baksoList));
  }, [baksoList]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddBakso = (newBakso) => {
    const withId = { ...newBakso, id: crypto.randomUUID() };
    setBaksoList((prev) => [...prev, withId]);
    showModal('Berhasil', 'Bakso berhasil ditambahkan.');
  };

  const handleEditBakso = (updated) => {
    setBaksoList((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
    showModal('Berhasil', 'Bakso berhasil diperbarui.');
  };

  const handleDeleteBakso = (id) => {
    setBaksoList((prev) => prev.filter((item) => item.id !== id));
    showModal('Dihapus', 'Bakso berhasil dihapus.');
  };

  const handleReset = () => {
    localStorage.removeItem('baksoList');
    setBaksoList([]);
    showModal('Reset', 'Data berhasil direset.');
  };

  const handleAddToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart((prev) =>
        prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCart([]);
    showModal('Checkout Berhasil', 'Terima kasih sudah memesan.');
  };

  const showModal = (title, message) => {
    setModal({ show: true, title, message });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Header
        cart={cart}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <AdminPanel
        baksoList={baksoList}
        onAdd={handleAddBakso}
        onEdit={handleEditBakso}
        onDelete={handleDeleteBakso}
        onReset={handleReset}
      />
      <MenuSection baksoList={baksoList} onAddToCart={handleAddToCart} />
      <Modal
        show={modal.show}
        title={modal.title}
        message={modal.message}
        onClose={() => setModal({ ...modal, show: false })}
      />
      <footer className="bg-white rounded-lg shadow-md p-6 mt-8 text-center text-gray-600">
        <p>© 2025 BaksoKu - Aplikasi Pemesanan Bakso</p>
        <p className="text-sm mt-2">Dibuat dengan ❤ untuk tugas akhir</p>
      </footer>
    </div>
  );
}

export default App;