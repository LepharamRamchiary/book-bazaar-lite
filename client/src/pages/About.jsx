import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">About Developer's Blog</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>Welcome to Book Bazaar Lite! This was created by Me (Lepharam Ramchiary) as a personal project to share my thoughts and ideas with the world. I'm a passionate developer who loves to write about technology, coding, and everything in between.</p>
            <p>Book Bazaar Lite is a web application designed to provide an e-commerce-like experience for book lovers. Here, you can search for books, purchase them, and place orders seamlessly. Whether you're looking for your next great read or a specific title, Book Bazaar Lite makes it easy to find and buy books online.</p>
            <p>With a user-friendly interface and smooth navigation, the platform ensures a hassle-free shopping experience. Stay tuned for more features and updates to enhance your book-buying journey!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
