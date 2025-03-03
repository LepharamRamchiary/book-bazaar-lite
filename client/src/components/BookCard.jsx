import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="group relative w-full border-none shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] h-[350px] overflow-hidden sm:w-[200px] transition-all">
      <Link to={``}>
        <img
          src={book.image}
          alt={book.isbn}
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{book.title}</p>
        <span className="italic text-sm">{book.genre}</span>
        <Link
          to={``}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-3xl m-2"
        >
          Buy
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
