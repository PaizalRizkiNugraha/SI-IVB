import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="p-10 bg-gray-100 text-gray-800">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <ul className="space-y-4">
        <li>
          <strong>To-Do App</strong> – React + LocalStorage for task management.
        </li>
        <li>
          <strong>Portfolio Website</strong> – Responsive personal site using Tailwind.
        </li>
        <li>
          <strong>Food Order App</strong> – Full CRUD with backend API.
        </li>
      </ul>
    </section>
  );
}
