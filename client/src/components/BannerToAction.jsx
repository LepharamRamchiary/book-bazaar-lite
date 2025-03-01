import React from "react";

function BannerToAction() {
  const cards = [
    {
      title: "Place Your Order",
      description: "Full Stack using MERN",
      image:
        "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://developer-hub-blog.onrender.com",
      gradientColors: "from-cyan-400 to-teal-500",
    },
    {
      title: "Payment Method",
      description: "Full Stack using React and RapidAPI",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/800px-Youtube_shorts_icon.svg.png",
      link: "https://youtube-clone-six-amber.vercel.app",
      gradientColors: "from-red-400 to-pink-500",
    },
    {
      title: "Explore eco",
      description: "Frontend only using React",
      image:
        "https://images.squarespace-cdn.com/content/v1/659d8eadf813547580d2b589/ffe8b348-d2fa-45c9-9fca-d7b152f1a3e3/website-homepage-logo-for-print-large.png?format=1500w",
      link: "https://explore-echo-rust.vercel.app",
      gradientColors: "from-green-400 to-blue-500",
    },
  ];

  return (
    <div className="p-5 w-full">
      <div className="max-w-4xl mx-auto space-y-10">
        {cards.map((card, index) => {
          if (index % 2 === 0) {
            return (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-4 items-center"
              >
                {/* Left side: Card */}
                <div className="flex justify-center md:justify-start">
                  <div className="card-parent">
                    <div
                      className={`card bg-gradient-to-br ${card.gradientColors} w-60 h-60 md:w-72 md:h-72 flex items-center justify-center rounded-lg shadow-lg`}
                    >
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
                </div>

                {/* Right side: Description */}
                <div className="flex items-center justify-center md:justify-start">
                  <p className="text-center md:text-left text-gray-700 animate-fade-in">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          }
          else {
            return (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-4 items-center"
              >
                {/* Left side: Description */}
                <div className="flex items-center justify-center md:justify-end order-2 md:order-1">
                  <p className="text-center md:text-right text-gray-700 animate-fade-in">
                    {card.description}
                  </p>
                </div>

                {/* Right side: Card */}
                <div className="flex justify-center md:justify-end order-1 md:order-2 w-full">
                  <div className="card-parent w-full flex justify-center md:justify-end">
                    <div
                      className={`card bg-gradient-to-br ${card.gradientColors} w-60 h-60 md:w-72 md:h-72 flex items-center justify-center rounded-lg shadow-lg`}
                    >
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
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default BannerToAction;
