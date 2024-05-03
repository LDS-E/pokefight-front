import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const BattlePage = () => {
  // Implement logic to display Pokémon and battle field

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-screen">
        <div>
          {/* Here will be rendered the battle field with Pokémon */}
          <h2 className="text-2xl font-bold mb-4">Pokémon Battle</h2>
          {/* Implement display of Pokémon and battle field */}
          <div>User's Pokémon</div>
          <div>Opponent's Pokémon</div>
          <Link
            to="/battle"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 hover:bg-blue-600"
          >
            Continue Battling
          </Link>
          <Link
            to="/leaderboard"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BattlePage;
