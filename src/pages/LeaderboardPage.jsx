import { Link } from "react-router-dom";
// import NavBar from "../components/NavBar";

// const LeaderboardPage = () => {

//         <div className="mt-8">
//           <Link
//             to="/battle"
//             className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 hover:bg-blue-600"
//           >
//             Start Battle
//           </Link>
//           <Link
//             to="/choose-pokemon"
//             className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//           >
//             Choose Pokémon
//           </Link>
//         </div>
//   );
// };

// export default LeaderboardPage;

// New table for the leaderboard

import React from "react";
import NavBar from "../components/NavBar.jsx";

const leaderboardData = [
  {
    position: "🥇",
    nickname: "Ash",
    pokemons: 567,
    wins: 1004,
    loses: 9,
    scores: 3989089,
  },
  {
    position: "🥈",
    nickname: "Misty",
    pokemons: 428,
    wins: 912,
    loses: 17,
    scores: 2897867,
  },
  {
    position: "🥉",
    nickname: "Brock",
    pokemons: 397,
    wins: 878,
    loses: 29,
    scores: 2365498,
  },
  {
    position: 4,
    nickname: "Gary",
    pokemons: 265,
    wins: 649,
    loses: 87,
    scores: 1967858,
  },
  {
    position: 5,
    nickname: "May",
    pokemons: 198,
    wins: 513,
    loses: 101,
    scores: 210,
  },
  {
    position: 6,
    nickname: "Dawn",
    pokemons: 141,
    wins: 439,
    loses: 147,
    scores: 190,
  },
  {
    position: 7,
    nickname: "Serena",
    pokemons: 117,
    wins: 387,
    loses: 188,
    scores: 180,
  },
  {
    position: 8,
    nickname: "Iris",
    pokemons: 98,
    wins: 305,
    loses: 201,
    scores: 170,
  },
  {
    position: 9,
    nickname: "Cynthia",
    pokemons: 81,
    wins: 286,
    loses: 227,
    scores: 160,
  },
  {
    position: 10,
    nickname: "Nikau",
    pokemons: 75,
    wins: 257,
    loses: 278,
    scores: 150,
  },
];

const LeaderboardItem = ({ user }) => {
  const { position, nickname, pokemons, wins, loses, scores } = user;
  let positionClassName = "text-lg";
  let hoverclass = "";

  if (position === "🥇" || position === "🥈" || position === "🥉") {
    positionClassName = "text-3xl ml-0 "; // Adjust the font size according to your preference
    if (position === "🥇") {
      hoverclass = "hover:bg-yellow-400";
    } else if (position === "🥈") {
      hoverclass = "hover:bg-gray-300";
    } else if (position === "🥉") {
      hoverclass = "hover:bg-amber-700";
    } else {
      hoverclass = "";
    }
  }

  return (
    <>
      <tr className={`hover:bg-slate-200 text-center ${hoverclass}`}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div
            className={`text-lg text-gray-900 flex items-center ml-4 ${positionClassName}`}
          >
            <span className="">{position}</span>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-lg text-gray-900 text-center font-bold">
            {" "}
            {nickname}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-lg text-gray-900 text-center"> {pokemons}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-4 py-2 rounded-full text-green-600">
            {wins} Wins
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-4 py-2 rounded-full text-white">
            {loses} Loses
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
          {scores}
        </td>
      </tr>
    </>
  );
};

const LeaderboardPage = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-8">
        <div className="flex m-auto justify-center pb-6">
          <h1 className="text-4xl setfont font-extrabold text-center text-white mb-8">
            Pokémon Leaderboard
          </h1>
          <p className="text-6xl">🏆</p>
        </div>

        <div className="bg-white/[.5] shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-500 text-white">
              <tr className="text-center">
                <th
                  scope="col"
                  className="px-6 pl-0 py-3 text-center font-secondary font-bold text-lg tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-secondary text-center font-thin text-lg tracking-wider"
                >
                  Nickname
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-secondary text-center font-bold text-lg tracking-wider"
                >
                  Pokemons
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-secondary text-center font-bold text-lg tracking-wider"
                >
                  Wins
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-secondary text-center font-bold text-lg tracking-wider"
                >
                  Loses
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center font-secondary font-bold text-lg tracking-wider"
                >
                  Scores
                </th>
              </tr>
            </thead>
            <tbody className="divide-y font-secondary divide-gray-200">
              {leaderboardData.map((user, index) => (
                <LeaderboardItem key={index} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
      <div className="m-auto items-center text-center pb-14">
        <Link
          to="/battle"
          className="bg-white text-black py-1 px-6 rounded-md mr-4 hover:bg-yellow-500 font-secondary border-amber-500 border-solid border-4"
        >
          Start Battle
        </Link>
        <Link
          to="/choose-pokemon"
          className="bg-white text-black py-1 px-6 rounded-md mr-4 hover:bg-blue-600 font-secondary border-blue-600 border-solid border-4"
        >
          Choose Pokémon
        </Link>
      </div>
    </>
  );
};

export default LeaderboardPage;
