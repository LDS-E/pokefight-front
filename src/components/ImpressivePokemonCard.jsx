import React from "react";
import PokemonStats from "./PokemonStats";

const ImpressivePokemonCard = ({
  pokemon,
  onClose,
  onSelect,
  onSelectOpp,
  opponentPokemon,
  setOpponentPokemon,
  playerPokemon,
  setPlayerPokemon,
}) => {
  // const handleSelectClick = () => {
  //   onSelect(pokemon);
  //   onClose();
  // };
  // const handleOppClick = () => {
  //   onSelectOpp(opponentPokemon);
  //   onClose();
  // };

  const handlePlayerPokemon = () => {
    setPlayerPokemon(pokemon);
    onClose();
  };
  const handleOppoentPokemon = () => {
    setOpponentPokemon(pokemon);
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
                className={`mx-2 uppercase ${
                  type === "Normal"
                    ? "type-normal "
                    : type === "Fire"
                    ? "type-fire"
                    : type === "Water"
                    ? "type-water "
                    : type === "Grass"
                    ? "type-grass "
                    : type === "Electric"
                    ? "type-electric"
                    : type === "Ice"
                    ? "type-ice"
                    : type === "Fighting"
                    ? "type-fighting"
                    : type === "Poison"
                    ? "type-poison"
                    : type === "Ground"
                    ? "type-ground"
                    : type === "Flying"
                    ? "type-flying"
                    : type === "Psychic"
                    ? "type-psychic"
                    : type === "Bug"
                    ? "type-bug"
                    : type === "Rock"
                    ? "type-rock"
                    : type === "Ghost"
                    ? "type-ghost"
                    : type === "Dragon"
                    ? "type-dragon"
                    : type === "Dark"
                    ? "type-dark"
                    : type === "Steel"
                    ? "type-steel"
                    : type === "Fairy"
                    ? "type-fairy "
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
          className="btn bg-red-600 text-white font-secondary hover:bg-white py-2 px-4 mb-4 hover:text-red-600"
          onClick={handlePlayerPokemon}
        >
          Select Pokémon
        </button>
        <button
          className="btn bg-white text-red-600 font-secondary hover:bg-red-600 hover:text-white py-2 px-4 mb-4 border border-red-600"
          onClick={handleOppoentPokemon}
        >
          Select opponent Pokémon
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
