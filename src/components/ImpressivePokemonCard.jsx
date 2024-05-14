import React from "react";
import PokemonStats from "./PokemonStats";

const ImpressivePokemonCard = ({ pokemon, onClose, onSelect }) => {
  const handleSelectClick = () => {
    onSelect(pokemon);
    onClose();
  };

  return (
    <div className="rounded overflow-hidden shadow-lg fixed inset-0 z-50 flex items-center justify-center">
      <div className="px-6 py-4 bg-gray-500 bg-opacity-90 rounded-lg shadow-[0_0_0_10000px_rgba(0,0,0,.40)]">
        <div className="font-bold font-secondary text-white text-5xl mb-2">
          {pokemon.name}
        </div>
        <img
          className="w-full"
          src={pokemon.images.imageUrl}
          alt={pokemon.name}
        />
        <div className="mt-4">
          <div className="flex justify-center mt-4">
            {pokemon.type.map((type) => (
              <div
                key={type}
                className={`mr-2 py-1 px-3 rounded-lg text-white font-secondary ${
                  type === "Normal"
                    ? "bg-gray-400"
                    : type === "Fire"
                    ? "bg-red-500"
                    : type === "Water"
                    ? "bg-blue-500"
                    : type === "Grass"
                    ? "bg-green-500"
                    : type === "Electric"
                    ? "bg-yellow-400"
                    : type === "Ice"
                    ? "bg-blue-200"
                    : type === "Fighting"
                    ? "bg-red-700"
                    : type === "Poison"
                    ? "bg-purple-600"
                    : type === "Ground"
                    ? "bg-yellow-800"
                    : type === "Flying"
                    ? "bg-blue-300"
                    : type === "Psychic"
                    ? "bg-pink-500"
                    : type === "Bug"
                    ? "bg-green-700"
                    : type === "Rock"
                    ? "bg-gray-600"
                    : type === "Ghost"
                    ? "bg-purple-700"
                    : type === "Dragon"
                    ? "bg-indigo-600"
                    : type === "Dark"
                    ? "bg-black"
                    : type === "Steel"
                    ? "bg-gray-500"
                    : type === "Fairy"
                    ? "bg-pink-300"
                    : ""
                }`}
              >
                {type}
              </div>
            ))}
          </div>
          <PokemonStats pokemon={pokemon} />
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-col">
        <button
          className="btn bg-red-600 text-white font-secondary hover:bg-red-800 py-2 px-4 mb-4"
          onClick={handleSelectClick}
        >
          Select Pokémon
        </button>
        <button
          className="btn bg-blue-600 text-white font-secondary hover:bg-blue-800 py-2 px-4"
          onClick={onClose}
        >
          Change Pokémon
        </button>
      </div>
    </div>
  );
};

export default ImpressivePokemonCard;
