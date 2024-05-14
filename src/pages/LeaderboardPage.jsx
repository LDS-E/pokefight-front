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
    scores: 1369847,
  },
  {
    position: 6,
    nickname: "Dawn",
    pokemons: 141,
    wins: 439,
    loses: 147,
    scores: 1024896,
  },
  {
    position: 7,
    nickname: "Serena",
    pokemons: 117,
    wins: 387,
    loses: 188,
    scores: 938756,
  },
  {
    position: 8,
    nickname: "Iris",
    pokemons: 98,
    wins: 305,
    loses: 201,
    scores: 868599,
  },
  {
    position: 9,
    nickname: "Cynthia",
    pokemons: 81,
    wins: 286,
    loses: 227,
    scores: 780584,
  },
  {
    position: 10,
    nickname: "Niko",
    pokemons: 75,
    wins: 257,
    loses: 278,
    scores: 690479,
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
      hoverclass = "hover:bg-gray-400";
    } else if (position === "🥉") {
      hoverclass = "hover:bg-yellow-700";
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
          <div className="text-lg text-gray-900 text-center font-semibold">
            {" "}
            {nickname}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-lg text-gray-900 text-center"> {pokemons}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-4 py-2 rounded-full text-green-600 font-semibold] [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
            {wins} Wins
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-4 py-2 rounded-full text-white font-semibold">
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
      <div className="bg-[url('/images/Leaderboard1.png')] bg-cover bg-center ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex m-auto justify-center pb-6">
            <h1 className="text-4xl font-main font-extrabold text-center text-white mb-8 pt-24">
              PokéArena Leaderboard
            </h1>
            <p className="text-6xl pt-24">🏆</p>
          </div>

          <div className="bg-white/[.5] shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#221F1F] text-white">
                <tr className="text-center">
                  <th
                    scope="col"
                    className="px-6 pl-0 py-3 text-center font-secondary font-bold text-lg tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-secondary text-center font-bold text-lg tracking-wider"
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
      </div>
    </>
  );
};

export default LeaderboardPage;
