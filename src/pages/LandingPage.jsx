import { Link } from "react-router-dom";
import { useState } from "react";

const LandingPage = ({ user, setUser }) => {
  return (
    <div className=" bg-[url('images/bg8.png')] bg-center bg-cover flex flex-col items-center justify-center h-screen ">
      <div className="">
        <h1 className="lg:text-7xl xs:text-3xl sm:text-4xl font-bold mb-20 font-main text-yellow-500 text-nowrap [text-shadow:_5px_-1px_2px_rgba(24,69,129,1)]">
          Welcome to PokéFight!
        </h1>
      </div>
      <div className="relative ">
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Enter your nickname"
          className=" border p-4 font-secondary rounded mb-6 "
        />
      </div>

      <Link
        to="/choose-pokemon"
        className="btn bg-red-600 text-white font-secondary hover:bg-red-800"
      >
        Start Journey
      </Link>
    </div>
  );
};

export default LandingPage;
