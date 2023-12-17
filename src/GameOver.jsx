export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner ? <p>{winner} won!</p> : <p>It&apos;s a draw!</p>}</p>
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
