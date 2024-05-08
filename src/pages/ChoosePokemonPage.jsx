import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import PokemonDetailCard from "../components/PokemonDetailCard";
import "../index.css";

const ChoosePokemonPage = () => {
  const [pokedex, setPokedex] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const limit = 50;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://pokefight-backend-9t63.onrender.com/api/pokemons?limit=${limit}&page=${page}`;

        if (searchTerm) {
          url += `&search=${searchTerm}`;
        }

        if (selectedTypes.length > 0) {
          url += `&types=${selectedTypes.join(",")}`;
        }

        const response = await axios.get(url);
        setPokedex(response.data.pokemons);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, [page, searchTerm, selectedTypes]);

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handleTypeSelect = (type) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((selectedType) => selectedType !== type)
      : [...selectedTypes, type];
    setSelectedTypes(updatedTypes);
  };

  const renderTypeButtons = () => {
    return (
      <div className="flex flex-wrap justify-center mt-4">
        {[
          { type: "Normal", color: "bg-gray-400" },
          { type: "Fire", color: "bg-red-500" },
          { type: "Water", color: "bg-blue-500" },
          { type: "Electric", color: "bg-yellow-400" },
          { type: "Grass", color: "bg-green-500" },
          { type: "Ice", color: "bg-blue-200" },
          { type: "Fighting", color: "bg-red-700" },
          { type: "Poison", color: "bg-purple-600" },
          { type: "Ground", color: "bg-yellow-800" },
          { type: "Flying", color: "bg-blue-300" },
          { type: "Psychic", color: "bg-pink-500" },
          { type: "Bug", color: "bg-green-700" },
          { type: "Rock", color: "bg-gray-600" },
          { type: "Ghost", color: "bg-purple-700" },
          { type: "Dragon", color: "bg-indigo-600" },
          { type: "Dark", color: "bg-black" },
          { type: "Steel", color: "bg-gray-500" },
          { type: "Fairy", color: "bg-pink-300" },
        ].map(({ type, color }) => (
          <button
            key={type}
            onClick={() => handleTypeSelect(type)}
            className={`m-2 py-1 px-3 rounded-lg text-white text-sm border border-white ${
              selectedTypes.includes(type) ? color : "bg-gray-400"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    );
  };

  const renderPageButtons = () => {
    const pages = [];
    const startPage = Math.max(1, page - 3);
    const endPage = Math.min(totalPages, page + 3);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`${
            i === page
              ? "bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600"
              : "bg-gray-300 text-gray-600 py-2 px-4 rounded-md mr-2 hover:bg-gray-400"
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseDetailCard = () => {
    setSelectedPokemon(null);
  };

  const handleSelect = (selectedPokemon) => {
    // Aqui você pode fazer o que for necessário com o Pokémon selecionado
    console.log("Pokemon selecionado:", selectedPokemon);
    // Por exemplo, você pode querer atualizar o estado com o Pokémon selecionado
    setSelectedPokemon(selectedPokemon);
  };

  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <div className="flex justify-center mt-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Pokémon..."
          className="border border-gray-300 rounded-md px-4 py-2 mr-4"
        />
      </div>
      {renderTypeButtons()}
      <div className="flex flex-wrap justify-center">
        {pokedex.map((pokemon) => (
          <div
            key={pokemon.id}
            className="m-4 p-4 bg-gray-200 rounded-md cursor-pointer"
            onClick={() => handlePokemonClick(pokemon)}
          >
            <img
              src={pokemon.images.imageUrl}
              alt={pokemon.name}
              className="w-24 h-24 mb-2"
            />
            <p className="text-center">{pokemon.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={prevPage}
          className={`${
            page === 1
              ? "bg-gray-300 text-gray-600 py-2 px-4 rounded-md mr-4 hover:bg-gray-400"
              : "bg-blue-500 text-white py-2 px-4 rounded-md mr-4 hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        {renderPageButtons()}
        <button
          onClick={nextPage}
          className={`${
            page === totalPages
              ? "bg-gray-300 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-400"
              : "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
      {selectedPokemon && (
        <PokemonDetailCard
          pokemon={selectedPokemon}
          onClose={handleCloseDetailCard}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default ChoosePokemonPage;
