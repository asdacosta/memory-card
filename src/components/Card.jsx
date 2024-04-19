import { useState } from "react";

function Card() {
  const [skew, setSkew] = useState({ x: 0, y: 0 });

  function startSkew(event) {
    const bounding = event.currentTarget.getBoundingClientRect();
    const centerX = bounding.left + bounding.width / 2;
    const centerY = bounding.top + bounding.height / 2;
    const angleX = ((centerX - event.clientX) / bounding.width) * 15;
    const angleY = ((centerY - event.clientY) / bounding.width) * 15;
    setSkew({ x: angleX, y: angleY });
  }

  function resetSkew() {
    setSkew({ x: 0, y: 0 });
  }

  return (
    <div
      onMouseMove={startSkew}
      onMouseOut={resetSkew}
      style={{
        transform: `perspective(1000px) rotateX(${-skew.y}deg) rotateY(${-skew.x}deg)`,
      }}
    ></div>
  );
}

export { Card };
