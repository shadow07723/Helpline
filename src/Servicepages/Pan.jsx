import React from "react";
import Footer from "../Footer";

const Pan = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔹 Header */}
      <header className="bg-gray-900 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">My Awesome Blog</h1>
      </header>

      {/* 🔹 Main Content */}
      <main className="container mx-auto px-4 py-10">
        <article className="bg-white shadow-md rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            How to Build a Modern Blog with React & Tailwind CSS
          </h2>

          <img
            src="https://source.unsplash.com/800x400/?blog,technology"
            alt="Blog"
            className="w-full h-64 object-cover rounded mb-6"
          />

          <p className="text-gray-700 mb-4 leading-relaxed">
            Building a modern blog is easier than ever using React and Tailwind
            CSS. You can create responsive layouts quickly and efficiently.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Tailwind provides utility-first CSS classes that help you design
            beautiful interfaces without writing custom CSS. React components
            let you reuse UI elements like headers, footers, and cards
            efficiently.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">Getting Started</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            First, set up a React project using create-react-app or Vite. Then,
            install Tailwind CSS and configure it according to the official
            documentation.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            Creating Components
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Create reusable components like Header, Footer, BlogCard, and
            BlogList. Use props to pass dynamic content to your cards.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            Styling with Tailwind
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Use utility classes to handle spacing, typography, and layout.
            Tailwind's responsive classes make your blog mobile-friendly
            effortlessly.
          </p>
        </article>
      </main>

      {/* 🔹 Footer */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        &copy; {new Date().getFullYear()} My Awesome Blog. All rights reserved.
      </footer>
      <Footer />
    </div>
  );
};

export default Pan;
