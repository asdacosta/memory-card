import { useState } from "react";
import minionsNav from "../assets/minions-nav.gif";
import { Card } from "./Card.jsx";
import { ids } from "./ids.js";
import { Info } from "./Info.jsx";

function Boilerplate({ urls }) {
  const [isClicked, setIsClicked] = useState({ clicked: false, display: "none" });

  // Should go outside
  async function flipCard(event) {
    event.target.classList.add("clicked");

    async function flipDeg(deg = -90, timeout = 200, pointer = "none") {
      const cards = document.querySelectorAll(".cards > div");
      cards.forEach((card) => {
        card.style.pointerEvents = pointer;
        card.style.transform = `rotateY(${deg}deg)`;
      });
      await new Promise((resolve) => {
        setTimeout(resolve, timeout);
      });
    }

    setIsClicked({ ...isClicked, clicked: true });
    await flipDeg();
    setIsClicked({ ...isClicked, display: "block" });
    await flipDeg("-180", 500);

    await flipDeg();
    setIsClicked({ clicked: false, display: "none" });
    await flipDeg("0", 200, "auto");

    event.target.classList.remove("clicked");
  }

  const cards = ids.map((id, index) => (
    <Card
      key={id}
      imgUrl={`url(${urls[index]})`}
      onClick={flipCard}
      isClicked={isClicked}
    />
  ));

  return (
    <>
      <div className="cover"></div>
      <section className="main-body">
        <nav>
          <img src={minionsNav} alt="Title" />
        </nav>
        <section className="details">
          <section>
            <p>
              Current Score: <span>0</span>
            </p>
            <p>
              Best Score: <span>0</span>
            </p>
          </section>
          <Info />
        </section>
        <section className="cards">{cards}</section>
      </section>
    </>
  );
}

export { Boilerplate };
