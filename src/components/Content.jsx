import "styles/Content.css";
import Scoreboard from "components/Scoreboard";
import Tutorial from "./Tutorial";
import Card from "./Card";

function Content() {
  const pokemon = Array(15).fill(0);

  return (
    <>
      <div className="content">
        <div className="game-info">
          <Tutorial />
          <Scoreboard />
        </div>
        <div className="game-board">
          <div className="cards">
            {pokemon.map((index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
