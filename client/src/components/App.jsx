import React, { useEffect, useState } from "react";
import Reset from './Reset.jsx'


export default function App() {
  const [cardNumber, setCardNumber] = useState(0)
  const [viewCard, setViewCard] = useState([]);
  const [Paired, setPaired] = useState([]);

  const cards = [
    {  name: "2C" },
    {  name: "4S" },
    {  name: "6H" },
    {  name: "7C" },
    {  name: "KC" },
    {  name: "10S" }
  ];

  const cardPool = [...cards, ...cards];

  function flipCard(index) {
    setViewCard((view) => [...view, index]);
  }

  useEffect(() => {
    if (viewCard < 2) return;

    const firstMatched = cardPool[viewCard[0]];
    const secondMatched = cardPool[viewCard[1]];

    if (secondMatched && firstMatched.name === secondMatched.name) {
      setPaired([...Paired, firstMatched.name]);
    }

    if (viewCard.length === 2) 
    setTimeout(() => 
    setViewCard([]), 1000);
  }, [viewCard]);

  return (
    <div className="App">
    <Reset />
      <div className="cards">
        {cardPool.map((cards, index) => {

          let isFlipped = false;

          if (viewCard.includes(index)) isFlipped = true;
          if (Paired.includes(cards.name)) isFlipped = true;
          return (
            <div
            className={`flip-card ${isFlipped ? "flipped" : ""} `}
            key={index}
            onClick={() => flipCard(index)}
            >
            <div className="inner">
              <div className="front">
                <img src={`PNG/${cards.name}.png`} alt="Show Card" width="150" />
              </div>
              <div className="back"></div>
            </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}


