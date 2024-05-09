// import { Link } from "react-router-dom";
// import NavBar from "../components/NavBar";

// const LeaderboardPage = () => {
//   //  ranking data
//   // const rankingData = []; // returning array

//   return (
//     <div>
//       <NavBar />

//       <h1 className="text-blue text-center my-4 font-bold ">LEADERBOARD</h1>
//       {/* DaisyUI component */}
//       <div className="overflow-x-auto mx-[20%] mt-6 ">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr className="">
//               <th></th>
//               <th>Nickname</th>
//               <th>Wins</th>
//               <th>Loses</th>
//               <th>Pokes</th>
//               <th>Score</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             <tr>
//               <th>1</th>
//               <td>Forevorbog</td>
//               <td>852</td>
//               <td>10</td>
//               <td>96</td>
//               <td>15620</td>
//             </tr>
//             {/* row 2 */}
//             <tr className="hover">
//               <th>2</th>
//               <td>Uzoukwu</td>
//               <td>726</td>
//               <td>17</td>
//               <td>52</td>
//               <td>12580</td>
//             </tr>
//             {/* row 3 */}
//             <tr className="hover">
//               <th>3</th>
//               <td>Julia</td>
//               <td>624</td>
//               <td>18</td>
//               <td>39</td>
//               <td>11630</td>
//             </tr>
//             {/* row 4 */}
//             <tr className="hover">
//               <th>4</th>
//               <td>Krigami</td>
//               <td>603</td>
//               <td>45</td>
//               <td>48</td>
//               <td>11234</td>
//             </tr>
//             {/* row 5 */}
//             <tr className="hover">
//               <th>5</th>
//               <td>Batachi</td>
//               <td>594</td>
//               <td>58</td>
//               <td>45</td>
//               <td>9890</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       {/* ------------------------------- */}

//       {/* DaisyUI component */}

//       <div className="flex flex-col items-center">
//         {/* <h2 className="text-2xl font-bold mb-4">Player's Ranking</h2> */}
//         {/* <div className="w-1/2">
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Position</th>
//                 <th className="px-4 py-2">Nickname</th>
//                 <th className="px-4 py-2">Score</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rankingData.map((player, index) => (
//                 <tr key={index}>
//                   <td className="border px-4 py-2">{index + 1}</td>
//                   <td className="border px-4 py-2">{player.nickname}</td>
//                   <td className="border px-4 py-2">{player.score}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div> */}
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
//       </div>
//     </div >
//   );
// };

// export default LeaderboardPage;

// New table for the leaderboard

// App.js
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
    pokemons: 3,
    wins: 15,
    loses: 10,
    scores: 200,
  },
  {
    position: "🥉",
    nickname: "Brock",
    pokemons: 3,
    wins: 18,
    loses: 7,
    scores: 220,
  },
  {
    position: 4,
    nickname: "Gary",
    pokemons: 3,
    wins: 17,
    loses: 8,
    scores: 230,
  },
  {
    position: 5,
    nickname: "May",
    pokemons: 3,
    wins: 16,
    loses: 9,
    scores: 210,
  },
  {
    position: 6,
    nickname: "Dawn",
    pokemons: 3,
    wins: 14,
    loses: 11,
    scores: 190,
  },
  {
    position: 7,
    nickname: "Serena",
    pokemons: 3,
    wins: 13,
    loses: 12,
    scores: 180,
  },
  {
    position: 8,
    nickname: "Iris",
    pokemons: 3,
    wins: 12,
    loses: 13,
    scores: 170,
  },
  {
    position: 9,
    nickname: "Cynthia",
    pokemons: 3,
    wins: 11,
    loses: 14,
    scores: 160,
  },
  {
    position: 10,
    nickname: "N",
    pokemons: 3,
    wins: 10,
    loses: 15,
    scores: 150,
  },
];

const LeaderboardItem = ({ user }) => {
  const { position, nickname, pokemons, wins, loses, scores } = user;

  return (
    <>
      <tr className="hover:bg-slate-200 text-center">
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-lg text-gray-900 flex items-center">
            <span className="mr-2">{position}</span>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-lg text-gray-900 text-center font-bold"> {nickname}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-lg text-gray-900 text-center"> {pokemons}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-4 py-2 rounded-full bg-green-500 text-white">
            {wins} Wins
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-4 py-2 rounded-full bg-red-500 text-white">
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
        <h1 className="text-4xl setfont font-extrabold text-center text-white mb-8">
          Pokemon Leaderboard 🏆
        </h1>
        <div className="bg-white/[.5] shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr className="text-center">
                <th
                  scope="col"
                  className="px-6 py-3 text-center font-bold text-lg tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 setfont text-center font-thin text-lg tracking-wider"
                >
                  Nickname
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center font-bold text-lg tracking-wider"
                >
                  Pokemons
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center font-bold text-lg tracking-wider"
                >
                  Wins
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center font-bold text-lg tracking-wider"
                >
                  Loses
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center font-bold text-lg tracking-wider"
                >
                  Scores
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leaderboardData.map((user, index) => (
                <LeaderboardItem key={index} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div >
    </>
  );
};

export default LeaderboardPage;
