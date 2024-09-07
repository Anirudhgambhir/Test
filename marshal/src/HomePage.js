// src/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="w-full bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Website</h1>
          <nav>
            <a href="#home" className="mx-4 hover:text-gray-300">Home</a>
            <a href="#about" className="mx-4 hover:text-gray-300">About</a>
            <a href="#contact" className="mx-4 hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center bg-gray-200 h-screen text-center p-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome to My Website</h2>
        <p className="text-lg mb-8 text-gray-600">We create amazing experiences with React and Tailwind CSS.</p>
        <a href="#contact" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700">Get in Touch</a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">About Us</h3>
          <p className="text-lg text-gray-600">We are passionate about creating beautiful and functional websites using the latest technologies.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h3>
          <p className="text-lg mb-8 text-gray-600">Feel free to reach out to us for any inquiries.</p>
          <a href="mailto:info@mywebsite.com" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700">Email Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;