import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import ChoosePokemonPage from "./pages/ChoosePokemonPage";
import ChooseBattleFieldPage from "./pages/ChooseBattleFieldPage";
import BattlePage from "./pages/BattlePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";

const App = () => {
  const [battlefield, setBattlefied] = useState("");
  const [user, setUser] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          exact
          element={<LandingPage user={user} setUser={setUser} />}
        />
        <Route
          path="/choose-pokemon"
          element={
            <ChoosePokemonPage
              pokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
              opponentPokemon={opponentPokemon}
              setOpponentPokemon={setOpponentPokemon}
              playerPokemon={playerPokemon}
              setPlayerPokemon={setPlayerPokemon}
            />
          }
        />
        <Route
          path="/choose-battle-field"
          element={<ChooseBattleFieldPage setBattlefied={setBattlefied} />}
        />
        <Route
          path="/battle"
          element={
            <BattlePage
              battlefield={battlefield}
              pokemon={selectedPokemon}
              opponentPokemon={opponentPokemon}
              playerPokemon={playerPokemon}
            />
          }
        />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>{" "}
    </div>
  );
};

export default App;
