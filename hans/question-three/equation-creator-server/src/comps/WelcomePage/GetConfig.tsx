import React, { useContext } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../App";
import { setEquationObject } from "../../redux/userSlice";
import { fetchEquation } from "../../service/handleFetchEquation";
import boardDefault, { setBoardDefault } from "../BoardComp/defaultBoard";

type Props = {
  gameTypeProp: String;
};

const GetConfig = (props: Props) => {
  const { gameTypeProp } = props;
  const { equationObject } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const { setBoardConfig, boardConfig, setBoard, data, setData }: any =
    useContext(GameContext);
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    setBoardConfig({
      ...boardConfig,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(boardConfig);
    const newBoard = setBoardDefault(
      boardDefault,
      boardConfig.y,
      boardConfig.x
    );
    const equationData = await fetchEquation(boardConfig.x);
    dispatch(setEquationObject(equationData));
    setData(equationData);
    setBoard(newBoard);
    navigate("/game");
  };
  if (gameTypeProp === "Casual") {
    return (
      <div>
        <h1 style={{ color: "white" }}>Select Board Size</h1>
        <br></br>
        <Form
          onSubmit={handleSubmit}
          style={{
            color: "white",
            width: "10rem",
            maxWidth: "20vw",
          }}
          className="container"
        >
          <FloatingLabel controlId="floatingSelect" label="Number Of Tries">
            <Form.Select
              name="y"
              onChange={handleChange}
              aria-label="Floating label select example"
            >
              <option>Select Number of Tries</option>
              <option value="5">Five</option>
              <option value="6">Six</option>
              <option value="7">Seven</option>
              <option value="8">Eight</option>
              <option value="9">Nine</option>
            </Form.Select>
          </FloatingLabel>
          <br></br>
          <FloatingLabel controlId="floatingSelect" label="Length of Equation">
            <Form.Select
              name="x"
              onChange={handleChange}
              aria-label="Floating label select example"
            >
              <option>Select Length of Equation</option>
              <option value="5">Five</option>
              <option value="6">Six</option>
              <option value="7">Seven</option>
              <option value="8">Eight</option>
              <option value="9">Nine</option>
            </Form.Select>
          </FloatingLabel>
          <br></br>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  } else {
    return (
      <div>
        <h1 style={{ color: "white" }}>Select Board Size</h1>
        <br></br>
        <Form
          onSubmit={handleSubmit}
          style={{
            color: "white",
            width: "10rem",
            maxWidth: "20vw",
          }}
          className="container"
        >
          <FloatingLabel controlId="floatingSelect" label="Number Of Tries">
            <Form.Select
              name="y"
              onChange={handleChange}
              aria-label="Floating label select example"
            >
              <option>Select Number of Tries</option>
              <option value="6">Six</option>
              <option value="7">Seven</option>
            </Form.Select>
          </FloatingLabel>
          <br></br>
          <FloatingLabel controlId="floatingSelect" label="Length of Equation">
            <Form.Select
              name="x"
              onChange={handleChange}
              aria-label="Floating label select example"
            >
              <option>Select Length of Equation</option>
              <option value="8">Eight</option>
              <option value="9">Nine</option>
            </Form.Select>
          </FloatingLabel>
          <br></br>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
};

export default GetConfig;
