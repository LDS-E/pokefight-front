import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import PokemonDetailCard from "../components/PokemonDetailCard"; // Importando o componente

const ChoosePokemonPage = () => {
  const [pokedex, setPokedex] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null); // State para controlar o Pokémon selecionado
  const limit = 50; // Número máximo de resultados por página

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokefight-backend-9t63.onrender.com/api/pokemons?limit=${limit}&page=${page}&search=${searchTerm}`
        );
        setPokedex(response.data.pokemons);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, [page, searchTerm]); // Atualiza quando a página ou o termo de busca mudam

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
    setPage(1); // Reinicia a página para a primeira ao iniciar uma nova busca
  };

  // Função para renderizar os botões de página
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

  // Função para lidar com o clique em um Pokémon
  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  // Função para fechar a janela de detalhes do Pokémon
  const handleCloseDetailCard = () => {
    setSelectedPokemon(null);
  };

  return (
    <div>
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
      <div className="flex flex-wrap justify-center">
        {pokedex.map((pokemon) => (
          <div
            key={pokemon.id}
            className="m-4 p-4 bg-gray-200 rounded-md cursor-pointer"
            onClick={() => handlePokemonClick(pokemon)} // Adicionando o handler de clique no Pokémon
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
      {selectedPokemon && ( // Renderiza o card de detalhes apenas se um Pokémon estiver selecionado
        <PokemonDetailCard
          pokemon={selectedPokemon}
          onClose={handleCloseDetailCard}
        />
      )}
    </div>
  );
};

export default ChoosePokemonPage;
