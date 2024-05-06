import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";

const ChoosePokemonPage = () => {
  const [pokedex, setPokedex] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://pokeapi.co/api/v2/pokemon?limit=151"
  //       );
  //       const pokemons = response.data.results.map((pokemon, index) => ({
  //         id: index + 1,
  //         name: pokemon.name,
  //         image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
  //           index + 1
  //         }.png`,
  //       }));
  //       setPokedex(pokemons);
  //     } catch (error) {
  //       console.error("Error fetching Pokémon data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // console.log(pokedex);
  // const handlePokemonClick = (pokemon) => {
  //   // Implement logic to display detailed information of the clicked Pokémon
  // };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center">
        <span className="type-normal">NORMAL</span> <br />
        <span className="type-fire">FIRE</span> <br />
        <span className="type-water">WATER</span> <br />
        <span className="type-grass">GRASS</span> <br />
        <span className="type-electric">ELECTRIC</span> <br />
        <span className="type-ice">ICE</span> <br />
        <span className="type-fighting">FIGHTING</span> <br />
        <span className="type-poison">POISON</span> <br />
        <span className="type-ground">GROUND</span> <br />
        <span className="type-flying">FLYING</span> <br />
        <span className="type-psyhic">PSYHIC</span> <br />
        <span className="type-bug">BUG</span> <br />
        <span className="type-rock">ROCK</span> <br />
        <span className="type-ghost">GHOST</span> <br />
        <span className="type-dragon">DRAGON</span> <br />
        <span className="type-dark">DARK</span> <br />
        <span className="type-steel">STEEL</span> <br />
        <span className="type-fairy">FAIRY</span> <br />
      </div>

      {/* {pokedex.map((pokemon) => (
        <div key={pokemon.id}>
          <img src={pokemon.images.backImg} alt="" />
          <div>{pokemon.name}</div>
        </div>
      ))} */}

      {/* <div>{isOpening && pokedex[0].name} </div> */}
      {/* <div className="flex flex-wrap justify-center">
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
      </div> */}
    </div>
  );
};

export default ChoosePokemonPage;
