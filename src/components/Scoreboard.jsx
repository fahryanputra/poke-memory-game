import "styles/Scoreboard.css";

function Scoreboard() {
  return (
    <>
      <div className="scoreboard">
        <div className="left score-label">
          <p>Score</p>
          <p>High Score</p>
        </div>
        <div className="right score-value">
          <p> : 0</p>
          <p> : 0</p>
        </div>
      </div>
    </>
  );
}

export default Scoreboard;
