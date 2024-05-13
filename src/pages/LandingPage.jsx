import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";

const LandingPage = () => {
  const [after, setAfter] = useState("");
  return (
    <div className=" ">
      <div className=" bg-[url('images/bg8.png')]  bg-center bg-cover flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4 font-main text-yellow-500 [text-shadow:_5px_-1px_2px_rgba(24,69,129,1)]">
          Welcome to PokéFight!
        </h1>
        <h1 className="text-4xl font-bold mb-4 font-secondary text-yellow-500 [text-shadow:_5px_-1px_2px_rgba(24,69,129,1)]">
          Welcome to Pokémon Journey!
        </h1>
        <div className="relative">
          {/* <div
            className={`after:absolute after:w-1 after:h-2 after:bg-red-500 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-1000 hover:after:content-['asdadasdsad']`}
          ></div> */}
          <input
            value={after}
            onChange={(e) => setAfter(e.target.value)}
            type="text"
            placeholder="Enter your nickname"
            className=" border p-2 rounded-md mb-4 "
          />
        </div>

        <button className="btn bg-red-600 text-white font-secondary hover:bg-red-800 ">
          Start Journey
        </button>

        <Link
          to="/choose-pokemon"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Start Journey
        </Link>

        <Link
          to="/battle"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-8"
        >
          Battle
        </Link>
        <Link
          to="/choose-battle-field"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-8"
        >
          Battlefield
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
