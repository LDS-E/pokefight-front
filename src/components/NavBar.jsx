import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-red-800 text-white font-secondary px-4 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Pokémon Battle
        </Link>
        <div className="hidden md:flex">
          {" "}
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
      {/* Menu que será exibido em telas menores */}
      <div className="md:hidden text-center mt-4">
        {" "}
        {/* Oculto em telas maiores que médio */}
        <Link to="/choose-pokemon" className="block py-2">
          Choose Pokémon
        </Link>
        <Link to="/choose-battle-field" className="block py-2">
          Choose Battle Field
        </Link>
        <Link to="/battle" className="block py-2">
          Battle
        </Link>
        <Link to="/leaderboard" className="block py-2">
          Leaderboard
        </Link>
        <Link to="/about" className="block py-2">
          About
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
