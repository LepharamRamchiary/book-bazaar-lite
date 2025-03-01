import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BannerToAction from "../components/BannerToAction";

function Home() {
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
    </div>
  );
}

export default Home;
