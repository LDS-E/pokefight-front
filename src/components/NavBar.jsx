// src/components/Navbar.jsx

import { Link } from "react-router-dom";

const NavBar = () => {
  return (

    <nav className="bg-red-800 text-white mb-4 px-4 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Pokémon Battle
        </Link>
        <div>
          <Link to="/choose-pokemon" className="mx-4">
            Choose Pokémon
          </Link>
          <Link to="/choose-battle-field" className="mx-4">
            Choose Battle Field
          </Link>
          <Link to="/battle" className="mx-4">
            Battle
          </Link>
          <Link to="/leaderboard" className="mx-4">
            Leaderboard
          </Link>
          <Link to="/about" className="mx-4">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
