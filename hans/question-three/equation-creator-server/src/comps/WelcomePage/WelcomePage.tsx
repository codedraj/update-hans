import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../App";
import "./index.css";

function WelcomePage() {
  const { setGameType }: any = useContext(GameContext);
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    setGameType(e.target.innerText);
    navigate("/selectboard");
  };
  return (
    <div>
      <div id="container">
        <Button onClick={handleClick} id="el">
          Casual
        </Button>
        <h3 id="el" style={{ color: "white" }}>
          {" OR "}
        </h3>
        <Button onClick={handleClick} id="el">
          Competetive
        </Button>
      </div>
    </div>
  );
}

export default WelcomePage;
