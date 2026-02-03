import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const cardData = [
    { id: 1, image: "Homeposter1.png", path: "/upi", service: "upi" },
    { id: 2, image: "Homeposter1.png", path: "/pan", service: "pan" },
    { id: 3, image: "Homeposter1.png", path: "/aadhaar", service: "aadhaar" },
    { id: 4, image: "Homeposter1.png", path: "/account", service: "account" },
    { id: 5, image: "Homeposter1.png", path: "/aayush", service: "aayush" },
    { id: 6, image: "Homeposter1.png", path: "/privacy", service: "privacy" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ">
      {cardData.map((card) => (
        <Link
          key={card.id}
          to={card.path}
          state={{ service: card.service }}
          className="group block rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-105"
        >
          <img
            src={card.image}
            alt={card.service}
            className="w-full h-56 object-fill group-hover:brightness-110"
          />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
