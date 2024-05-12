const PokemonDetailCard = ({ pokemon, onClose, onSelect }) => {
  const handleCloseClick = () => {
    onClose();
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleSelectClick = () => {
    onSelect(pokemon);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="bg-black bg-opacity-10 absolute inset-0"
        onClick={handleOverlayClick}
      />
      <div className="max-w-md w-full py-2 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative flex items-center justify-center">
          <img
            src={pokemon.images.imageUrl}
            alt={pokemon.name}
            className=" object-center w-32 h-32"
            style={{ maxWidth: "40%", maxHeight: "40%" }}
          />
          <button
            className="absolute top-0 right-0 p-2 text-xl text-black hover:text-gray-400 focus:outline-none"
            onClick={handleCloseClick}
          >
            <span>&times;</span>
          </button>
        </div>
        <div className="py-2 px-6">
          <h2
            className="flex justify-center text-2xl text-gray-700 font-bold"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
          >
            {pokemon.name}
          </h2>
          <div className="flex justify-center mt-4">
            {pokemon.type.map((type) => (
              <div
                key={type}
                className={`mr-2 py-1 px-3 rounded-lg text-white text-sm ${
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
          <div className="flex justify-center my-4">
            <div className="flex flex-col items-center mx-1">
              <p
                className="text-lg text-gray-700 font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                HP
              </p>
              <p
                className="text-lg text-gray-700 font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                {pokemon.base.HP}
              </p>
            </div>
            <div className="flex flex-col items-center mx-1">
              <p
                className="text-lg text-gray-700 font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                Attack
              </p>
              <p
                className="text-lg text-gray-700 font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                {pokemon.base.Attack}
              </p>
            </div>
            <div className="flex flex-col items-center mx-1">
              <p
                className="text-lg text-gray-700 font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                Defense
              </p>
              <p
                className="text-lg text-gray-700 font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                {pokemon.base.Defense}
              </p>
            </div>
            <div className="flex flex-col items-center mx-1">
              <p
                className="text-lg text-gray-700 font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                SpAttack
              </p>
              <p
                className="text-lg text-gray-700 font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                {pokemon.base.SpAttack}
              </p>
            </div>
            <div className="flex flex-col items-center mx-1">
              <p
                className="text-lg text-gray-700 font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                SpDefense
              </p>
              <p
                className="text-lg text-gray-700 font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                {pokemon.base.SpDefense}
              </p>
            </div>
            <div className="flex flex-col items-center mx-1">
              <p
                className="text-lg text-gray-700 font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                Speed
              </p>
              <p
                className="text-lg text-gray-700 font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                {pokemon.base.Speed}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mx-2 absolute inset-50 hover:text-gray-400 hover:bg-amber-300 ">
            <button
              className="bg-red-800  text-white font-bold py-2 px-4 rounded  hover:bg-black"
              onClick={handleSelectClick}
            >
              Select Pokémon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
