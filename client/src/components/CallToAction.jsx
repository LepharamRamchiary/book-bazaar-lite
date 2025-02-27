import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  const cards = [
    {
      title: "Developer's Blog",
      description: "Full Stack using MERN",
      image:
        "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://developer-hub-blog.onrender.com",
      gradientColors: "from-cyan-400 to-teal-500",
    },
    {
      title: "Youtube Clone",
      description: "Full Stack using React and RapidAPI",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/800px-Youtube_shorts_icon.svg.png",
      link: "https://youtube-clone-six-amber.vercel.app",
      gradientColors: "from-red-400 to-pink-500",
    },
    {
      title: "ExploreEcho",
      description: "Frontend only using React",
      image:
        "https://images.squarespace-cdn.com/content/v1/659d8eadf813547580d2b589/ffe8b348-d2fa-45c9-9fca-d7b152f1a3e3/website-homepage-logo-for-print-large.png?format=1500w",
      link: "https://explore-echo-rust.vercel.app",
      gradientColors: "from-green-400 to-blue-500",
    },
    
  ];

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="card-parent">
            <div className={`card bg-gradient-to-br ${card.gradientColors}`}>
              <div className="glass"></div>

              <div className="logo">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>
                <span className="circle circle4"></span>
                <span className="circle circle5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </span>
              </div>

              <div className="content">
                <span className="title">{card.title}</span>
                <span className="text">{card.description}</span>
              </div>

              <div className="bottom">
                <div className="social-buttons-container">
                  <button className="social-button">
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-more-button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />

                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
