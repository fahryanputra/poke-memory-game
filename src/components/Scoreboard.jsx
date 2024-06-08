import "styles/Scoreboard.css";

function Scoreboard({ score, highScore }) {
  return (
    <>
      <div className="scoreboard">
        <div className="left score-label">
          <p>Score</p>
          <p>High Score</p>
        </div>
        <div className="right score-value">
          <p className="score value"> : {score}</p>
          <p className="highscore value"> : {highScore}</p>
        </div>
      </div>
    </>
  );
}

export default Scoreboard;
