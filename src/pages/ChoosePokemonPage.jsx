import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import PokemonDetailCard from "../components/PokemonDetailCard";

const ChoosePokemonPage = () => {
  const [pokedex, setPokedex] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const pokemons = response.data.results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        }));
        setPokedex(pokemons);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePokemonClick = async (pokemon) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const detailedPokemon = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.front_default,
        types: response.data.types.map((type) => type.type.name),
        // Add more details as needed
      };
      setClickedPokemon(detailedPokemon);
    } catch (error) {
      console.error("Error fetching detailed Pokémon data:", error);
    }
  };

  // Function to close the Pokémon detail card
  const handleCloseDetailCard = () => {
    setClickedPokemon(null);
  };

  // Function to select the Pokémon again after closing the detail card
  const handleSelectPokemonAgain = (pokemon) => {
    setClickedPokemon(null);
    handlePokemonClick(pokemon);
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
      {/* Render the PokemonDetailCard when user clicks on a Pokemon */}
      {clickedPokemon && (
        <PokemonDetailCard
          pokemon={clickedPokemon}
          onClose={handleCloseDetailCard} // Pass the function to close the card
          onSelectAgain={handleSelectPokemonAgain} // Pass the function to select the Pokemon again
        />
      )}
    </div>
  );
};

export default ChoosePokemonPage;
