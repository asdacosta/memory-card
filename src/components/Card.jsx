import { useState } from "react";
import bananaImage from "../assets/banana.png";

function Card({ imgUrl, onClick, isClicked }) {
  const [skew, setSkew] = useState({ x: 0, y: 0 });

  function startSkew(event) {
    const bounding = event.currentTarget.getBoundingClientRect();
    const centerX = bounding.left + bounding.width / 2;
    const centerY = bounding.top + bounding.height / 2;
    const angleX = ((event.clientX - centerX) / bounding.width) * 20;
    const angleY = ((centerY - event.clientY) / bounding.width) * 20;
    setSkew({ x: angleX, y: angleY });
  }

  function resetSkew(event) {
    if (event.currentTarget.classList.contains("clicked")) {
      return;
    }
    setSkew({ x: 0, y: 0 });
  }

  return (
    <div
      onClick={onClick}
      onMouseMove={startSkew}
      onMouseOut={resetSkew}
      style={{
        transform: `perspective(1000px) rotateX(${-skew.y}deg) rotateY(${-skew.x}deg)`,
        backgroundImage: `${imgUrl}`,
      }}
    >
      <img
        src={bananaImage}
        alt="Banana background"
        className="banana-bg"
        style={{ display: `${isClicked.display}` }}
      />
    </div>
  );
}

export { Card };
