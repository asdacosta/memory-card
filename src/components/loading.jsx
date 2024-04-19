import loadGif from "../assets/load.gif";

function Loading() {
  return (
    <div className="load">
      <img src={loadGif} alt="Minion in motion" />
      <p>Initializing...</p>
    </div>
  );
}

export { Loading };
