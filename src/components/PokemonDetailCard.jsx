import React from "react";

const PokemonDetailCard = ({ pokemon, onClose, onSelectAgain }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-4 rounded-md">
        <button
          className="absolute top-0 right-0 m-2 px-2 py-1 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400"
          onClick={onClose}
        >
          X
        </button>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-24 h-24 mb-2 mx-auto"
        />
        <h3 className="text-center font-bold">{pokemon.name}</h3>
        <div className="flex justify-center">
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className="px-2 py-1 mx-1 bg-gray-200 rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
        {/* Add more details as needed */}
        <div className="mt-4 flex justify-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 hover:bg-blue-600"
            onClick={() => onSelectAgain(pokemon)}
          >
            Select Pokémon
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
