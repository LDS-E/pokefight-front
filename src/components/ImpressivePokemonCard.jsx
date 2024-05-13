import React from "react";
import PokemonStats from "./PokemonStats";

const ImpressivePokemonCard = ({ pokemon, onClose, onSelect }) => {
  const handleSelectClick = () => {
    onSelect(pokemon);
    onClose();
  };

  return (
    <div className="rounded overflow-hidden shadow-lg fixed inset-0 z-50 flex items-center justify-center">
      <div className="px-6 py-4 bg-gray-500 bg-opacity-60 rounded-lg">
        <div className="font-bold font-secondary text-5xl mb-2">
          {pokemon.name}
        </div>
        <img
          className="w-full"
          src={pokemon.images.imageUrl}
          alt={pokemon.name}
        />
        <div className="mt-4">
          <p className="text-gray-700 text-base">
            Type: {pokemon.type.join(", ")}
          </p>
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
