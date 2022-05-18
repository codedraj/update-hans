import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import WelcomePage from "./comps/WelcomePage/WelcomePage";
import { createContext, useState } from "react";
import GetConfig from "./comps/WelcomePage/GetConfig";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./comps/LoginPage/LoginPage";
import RegisterPage from "./comps/RegisterPage/RegisterPage";
import BoardComp from "./comps/BoardComp/BoardComp";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient: any = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

export const GameContext = createContext({});

function App() {
  const [gameType, setGameType] = useState("");
  const [boardConfig, setBoardConfig] = useState({
    y: 0,
    x: 0,
  });
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [board, setBoard] = useState();

  const [data, setData] = useState();
  return (
    <GameContext.Provider
      value={{
        gameType,
        setGameType,
        setBoardConfig,
        boardConfig,
        board,
        setBoard,
        position,
        setPosition,
        queryClient,
        data,
        setData,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route
                path="/selectboard"
                element={<GetConfig gameTypeProp={gameType} />}
              />
              <Route path="/game" element={<BoardComp />} />
            </Routes>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </GameContext.Provider>
  );
}

export default App;
