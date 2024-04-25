import { useState } from "react";
import minionsNav from "../assets/minions-nav.gif";
import { Card } from "./Card.jsx";

function Boilerplate({ urls }) {
  const [isClicked, setIsClicked] = useState({ clicked: false, display: "none" });
  const cardArray = Array.from({ length: 8 }).fill(null);

  async function flipCard(event) {
    event.target.classList.add("clicked");

    async function flipDeg(deg = -90, timeout = 200, pointer = "none") {
      const cards = document.querySelectorAll(".cards > div");
      cards.forEach((card) => {
        card.style.pointerEvents = `${pointer}`;
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

  // Use unique keys
  const cards = cardArray.map((card, index) => (
    <Card
      key={index}
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
          <section>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>
            </div>
            <p>Avoid selecting the same card twice to put your memory to the test.</p>
          </section>
        </section>
        <section className="cards">{cards}</section>
      </section>
    </>
  );
}

export { Boilerplate };
