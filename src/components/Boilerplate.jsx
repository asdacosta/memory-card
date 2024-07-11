import { useEffect, useState } from "react";
import minionsNav from "../assets/minions-nav.gif";
import { Card } from "./Card.jsx";
import { ids } from "./ids.js";
import { Info } from "./Info.jsx";
import shuffle from "lodash.shuffle";
import { getImgUrls } from "./FetchImgs.jsx";
import { Score } from "./Score.jsx";
import clearGif from "../assets/clear.gif";
import { Loading } from "./Loading.jsx";
import wonGif from "../assets/won.gif";

function Boilerplate({ visible }) {
  const [isClicked, setIsClicked] = useState({
    clicked: false,
    display: "none",
    clickedUrls: [],
  });
  const [updatedUrl, setUpdatedUrl] = useState(getImgUrls());
  const [score, setScore] = useState({ current: 0, best: 0 });
  const [revealLoad, setRevealLoad] = useState({
    text: null,
    gif: null,
    reveal: false,
    display: "grid",
  });

  function resetIfCardIsSelectedTwice(event) {
    if (isClicked.clickedUrls.length >= 1) {
      for (const url of isClicked.clickedUrls) {
        if (url === getComputedStyle(event).getPropertyValue("background-image")) {
          setScore((prevScore) => ({ ...prevScore, current: 0 }));
          setIsClicked((prevIsClicked) => ({ ...prevIsClicked, clickedUrls: [] }));
          setRevealLoad({
            text: "Let me help wipe your memory.",
            gif: clearGif,
            reveal: true,
            display: "none",
          });
          setTimeout(() => {
            setRevealLoad({
              text: "Let me help wipe your memory.",
              gif: clearGif,
              reveal: false,
              display: "grid",
            });
          }, 6000);
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
      setRevealLoad({
        text: "You have good memory!",
        gif: wonGif,
        reveal: true,
        display: "none",
      });
      setTimeout(() => {
        setRevealLoad({
          text: "You have good memory!",
          gif: wonGif,
          reveal: false,
          display: "grid",
        });
      }, 1800);
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
      {revealLoad.reveal ? <Loading gif={revealLoad.gif} text={revealLoad.text} /> : null}
      <div
        style={{ visibility: visible, display: revealLoad.display }}
        className="cover"
      ></div>
      <section
        style={{ visibility: visible, display: revealLoad.display }}
        className="main-body"
      >
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
