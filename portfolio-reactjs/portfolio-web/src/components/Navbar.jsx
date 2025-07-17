import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed top-0 w-full shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between">
        <h1 className="font-bold text-lg">My Portfolio</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}
