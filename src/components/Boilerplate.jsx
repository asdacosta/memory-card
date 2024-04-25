import { useEffect, useState } from "react";
import minionsNav from "../assets/minions-nav.gif";
import { Card } from "./Card.jsx";
import { ids } from "./ids.js";
import { Info } from "./Info.jsx";
import shuffle from "lodash.shuffle";
import { getImgUrls } from "./FetchImgs.jsx";
import { Score } from "./Score.jsx";

function Boilerplate({ visible }) {
  const [isClicked, setIsClicked] = useState({
    clicked: false,
    display: "none",
    clickedUrls: [],
  });
  const [updatedUrl, setUpdatedUrl] = useState(getImgUrls());
  const [score, setScore] = useState({ current: 0, best: 0 });

  function resetIfCardIsSelectedTwice(event) {
    if (isClicked.clickedUrls.length >= 1) {
      for (const url of isClicked.clickedUrls) {
        if (url === getComputedStyle(event).getPropertyValue("background-image")) {
          setScore((prevScore) => ({ ...prevScore, current: 0 }));
          setIsClicked((prevIsClicked) => ({ ...prevIsClicked, clickedUrls: [] }));
          setTimeout(() => {
            alert("More practice will improve your memory.");
          }, 100);
          return true;
        }
      }
    }
  }

  function updateClickedUrls(event) {
    setIsClicked((prevIsClicked) => ({
      ...prevIsClicked,
      clickedUrls: prevIsClicked.clickedUrls.push(
        getComputedStyle(event).getPropertyValue("background-image")
      ),
    }));
  }

  function updateScores() {
    setScore((prevScore) => ({ ...prevScore, current: prevScore.current + 1 }));
    if (score.current >= score.best) {
      setScore((prevScore) => ({ ...prevScore, best: prevScore.current }));
    }
    if (score.current === 7) {
      setScore((prevScore) => ({ ...prevScore, current: 0 }));
      setIsClicked((prevIsClicked) => ({ ...prevIsClicked, clickedUrls: [] }));
      setTimeout(() => {
        alert("You have good memory!");
      }, 100);
      return true;
    }
  }

  async function flipCard(event) {
    const isSelectedTwice = resetIfCardIsSelectedTwice(event.currentTarget);
    if (isSelectedTwice === true) return;
    updateClickedUrls(event.currentTarget);
    const currentIsHighest = updateScores();
    if (currentIsHighest === true) return;

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

    // Flip 180deg
    setIsClicked({ ...isClicked, clicked: true });
    await flipDeg();
    setIsClicked({ ...isClicked, display: "block" });
    await flipDeg("-180", 500);

    // Shuffle urls
    setUpdatedUrl(shuffle(updatedUrl));

    // Flip to default
    await flipDeg();
    setIsClicked({ ...isClicked, clicked: false, display: "none" });
    await flipDeg("0", 200, "auto");

    event.target.classList.remove("clicked");
  }

  let cards = ids.map((id, index) => (
    <Card
      key={id}
      imgUrl={`url(${updatedUrl[index]})`}
      onClick={flipCard}
      isClicked={isClicked}
    />
  ));

  return (
    <>
      <div style={{ visibility: visible }} className="cover"></div>
      <section style={{ visibility: visible }} className="main-body">
        <nav>
          <img src={minionsNav} alt="Title" />
        </nav>
        <section className="details">
          <Score current={score.current} best={score.best} />
          <Info />
        </section>
        <section className="cards">{cards}</section>
      </section>
    </>
  );
}

export { Boilerplate };
