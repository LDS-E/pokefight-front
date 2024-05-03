import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ChoosePokemonPage from "./pages/ChoosePokemonPage";
import ChooseBattleFieldPage from "./pages/ChooseBattleFieldPage";
import BattlePage from "./pages/BattlePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/choose-pokemon" element={<ChoosePokemonPage />} />
          <Route
            path="/choose-battle-field"
            element={<ChooseBattleFieldPage />}
          />
          <Route path="/battle" element={<BattlePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>{" "}
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
