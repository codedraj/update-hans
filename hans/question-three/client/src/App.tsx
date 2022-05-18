import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BoardComp from "./comps/BoardComp/BoardComp";
import { useState } from "react";
import { createContext } from "react";
import LoginPage from "./comps/LoginPage/LoginPage";
import RegisterPage from "./comps/RegisterPage/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectBoardConfig from "./comps/WelcomPage/SelectBoardConfig";
import IndexPage from "./comps/WelcomPage/IndexPage";

export const BoardContext = createContext({});

function App() {
  const [boardState, setBoardState]: any = useState([]);
  const [boardSize, setBoardSize] = useState({ y: 0, x: 0 });
  const [authMessage, setAuthMessage] = useState(null);
  const [equation, setEquation] = useState();
  const [currentPosition, setCurrentPosition] = useState({
    x: 0,
    y: 0,
  });
  const [historyData, setHistoryData] = useState();

  return (
    <div id="cont">
      <BoardContext.Provider
        value={{
          boardState,
          setBoardState,
          boardSize,
          setBoardSize,
          authMessage,
          setAuthMessage,
          equation,
          setEquation,
          currentPosition,
          setCurrentPosition,
          historyData,
          setHistoryData,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/selectGame" element={<SelectBoardConfig />} />
              <Route path="/board" element={<BoardComp />} />
            </Routes>
          </div>
        </BrowserRouter>
      </BoardContext.Provider>
    </div>
  );
}

export default App;
