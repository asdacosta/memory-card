function Score({ current, best }) {
  return (
    <section>
      <p>
        Current Score: <span>{current}</span>
      </p>
      <p>
        Best Score: <span>{best}</span>
      </p>
    </section>
  );
}

export { Score };
