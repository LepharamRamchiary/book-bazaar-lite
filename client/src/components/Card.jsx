import React from "react";
// import { Card } from "flowbite-react";

function Card() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Card One
            </h2>
            <p className="text-gray-600">
              This is the content for card one. You can add any text or elements
              here.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Card Two
            </h2>
            <p className="text-gray-600">
              This is the content for card two. You can add any text or elements
              here.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Card Three
            </h2>
            <p className="text-gray-600">
              This is the content for card three. You can add any text or
              elements here.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Card Four
            </h2>
            <p className="text-gray-600">
              This is the content for card four. You can add any text or
              elements here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
