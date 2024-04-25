function Loading({ gif, text }) {
  return (
    <div className="load">
      <img src={gif} alt="Minion in motion" />
      <p>{text}</p>
    </div>
  );
}

export { Loading };
