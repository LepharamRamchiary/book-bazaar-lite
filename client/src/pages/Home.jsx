import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BannerToAction from "../components/BannerToAction";
import BookCard from "../components/BookCard";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Home() {
  const [books, setBooks] = useState([]);

  // console.log(books);
  

  useEffect(() => {
    const fetchBooks = async() => {
      const res = await fetch(`${API_BASE_URL}/api/books/get-all-book`);
      const data = await res.json()
      // console.log(data);
      // console.log(data.data.books[0].price);
      
      
      setBooks(data.data.books)
    }
    fetchBooks()
  }, [])
  return (
    <div>
      <div className="flex flex-col gap-6 px-3 p-28 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl text-center">
          Welcome to Book Bazaar Lite
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm text-center text-wrap">
          Welcome to Book Bazaar Lite! This is a simple website I built to
          develop my skills. Here, you can explore, order books, and experience
          a basic e-commerce platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to=""
            className="text-xs sm:text-sm text-white font-bold hover:underline text-center bg-gradient-to-r from-blue-700 via-pink-500 to-orange-400 dark:text-white p-2 rounded-lg"
          >
            Get Start
          </Link>
          <Link
            to=""
            className="text-xs sm:text-sm text-white font-bold hover:underline text-center bg-gradient-to-r from-blue-700 via-pink-500 to-orange-400 dark:text-white p-2 rounded-lg"
          >
            Connect with me
          </Link>
        </div>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <BannerToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
          {books && books.length > 0 && (
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-center">Recent added books</h2>
              <div className="flex flex-wrap gap-4 p-3 justify-center">
                {books.map((book) => (
                  <BookCard key={book._id} book={book} />
                ))}
              </div>
              <Link
              to="/search"
              className="text-lg text-teal-500 hover:underline text-center"
              >
                 View all Books
              </Link>
            </div>
          )}
      </div>
    </div>
  );
}

export default Home;
