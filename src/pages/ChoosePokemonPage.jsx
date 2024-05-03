import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const ChoosePokemonPage = () => {
  // Pokedex data
  const pokedex = []; // Fill with Pokedex data

  const handlePokemonClick = (pokemon) => {
    // Implement logic to display detailed information of the clicked Pokémon
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-wrap justify-center">
        {pokedex.map((pokemon) => (
          <div
            key={pokemon.id}
            className="m-4 p-4 bg-gray-200 rounded-md cursor-pointer"
            onClick={() => handlePokemonClick(pokemon)}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-24 h-24 mb-2"
            />
            <p className="text-center">{pokemon.name}</p>
          </div>
        ))}
        <div className="mt-8">
          <Link
            to="/battle"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 hover:bg-blue-600"
          >
            Start Battle
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

export default ChoosePokemonPage;
