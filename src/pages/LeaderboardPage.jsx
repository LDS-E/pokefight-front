import { Link } from "react-router-dom";

const LeaderboardPage = () => {
  //  ranking data
  const rankingData = []; // returning array

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Player's Ranking</h2>
        <div className="w-1/2">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Nickname</th>
                <th className="px-4 py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {rankingData.map((player, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{player.nickname}</td>
                  <td className="border px-4 py-2">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <Link
            to="/battle"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 hover:bg-blue-600"
          >
            Start Battle
          </Link>
          <Link
            to="/choose-pokemon"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Choose Pokémon
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
