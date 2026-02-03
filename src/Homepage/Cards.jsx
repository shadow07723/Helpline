import React from "react";

const Cards = () => {
  // 10 cards ka array
  const cardData = [
    { id: 1, title: "Card 1", desc: "This is card one" },
    { id: 2, title: "Card 2", desc: "This is card two" },
    { id: 3, title: "Card 3", desc: "This is card three" },
    { id: 4, title: "Card 4", desc: "This is card four" },
    { id: 5, title: "Card 5", desc: "This is card five" },
    { id: 6, title: "Card 6", desc: "This is card six" },
    { id: 7, title: "Card 7", desc: "This is card seven" },
    { id: 8, title: "Card 8", desc: "This is card eight" },
    { id: 9, title: "Card 9", desc: "This is card nine" },
    { id: 10, title: "Card 10", desc: "This is card ten" },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "20px" }}>
      {cardData.map((card) => (
        <div
          key={card.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;