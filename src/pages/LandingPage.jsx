import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";

const LandingPage = () => {
  const [after, setAfter] = useState(false);
  return (
    <div className=" ">
      <NavBar />
      <div className=" bg-[url('images/bg8.png')]  bg-center bg-cover flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to Pokémon Journey!</h1>

        <input
          type="text"
          placeholder="Enter your nickname"
          className=" border p-2 rounded-md mb-4 "
        />

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
      <div className="grid grid-cols-2 bg-red-300">
        <img src="/images/Cave.png" alt="" />
        <img src="/images/Cave.png" alt="" />
        <img src="/images/Cave.png" alt="" />
        <img src="/images/Cave.png" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
