function Completed({ todoApp }) {
  return (
    <div className="completed">
      <ul>
        {todoApp.completed.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default Completed;
