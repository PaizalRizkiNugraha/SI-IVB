import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="p-10 bg-white text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>Email: <a href="mailto:you@example.com" className="text-blue-600">you@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com" className="text-blue-600">linkedin.com/in/yourprofile</a></p>
    </section>
  );
}
