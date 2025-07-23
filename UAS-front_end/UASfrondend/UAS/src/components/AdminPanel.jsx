import React, { useState } from 'react';

export default function AdminPanel({ baksoList, onAdd, onEdit, onDelete, onReset }) {
  const [form, setForm] = useState({
    id: '',
    nama: '',
    harga: '',
    deskripsi: '',
    gambar: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, gambar: reader.result }));
    };
    reader.readAsDataURL(file); // convert to base64
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const baksoData = {
      id: isEditing ? form.id : Date.now(),
      nama: form.nama.trim(),
      harga: parseInt(form.harga),
      deskripsi: form.deskripsi.trim(),
      gambar: form.gambar || '',
    };

    if (!baksoData.nama || isNaN(baksoData.harga)) {
      alert('Nama dan harga wajib diisi.');
      return;
    }

    if (isEditing) onEdit(baksoData);
    else onAdd(baksoData);

    resetForm();
  };

  const startEdit = (item) => {
    setForm(item);
    setIsEditing(true);
    setShowForm(true);
  };

  const resetForm = () => {
    setForm({
      id: '',
      nama: '',
      harga: '',
      deskripsi: '',
      gambar: '',
    });
    setIsEditing(false);
    setShowForm(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Kelola Menu Bakso</h2>

      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Tambah Bakso Baru
        </button>
        <button
          onClick={onReset}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Reset Data
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-4 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input type="hidden" name="id" value={form.id} />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Bakso</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Harga (Rp)</label>
            <input
              type="number"
              name="harga"
              value={form.harga}
              onChange={handleChange}
              required
              min="1000"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
            <textarea
              name="deskripsi"
              value={form.deskripsi}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gambar Bakso</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />
            {form.gambar && (
              <img
                src={form.gambar}
                alt="Preview"
                className="mt-2 h-24 rounded shadow"
              />
            )}
          </div>
          <div className="md:col-span-2 flex justify-end space-x-3">
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Simpan
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Harga</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deskripsi</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {baksoList.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.nama}</td>
                <td className="px-6 py-4 text-sm text-gray-500">Rp {item.harga.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.deskripsi}</td>
                <td className="px-6 py-4 text-sm font-medium">
                  <button
                    onClick={() => startEdit(item)}
                    className="text-orange-600 hover:text-orange-900 mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}