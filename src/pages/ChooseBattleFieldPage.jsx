import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const ChooseBattleFieldPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Choose the Battle Field:</h2>
          <div className="flex justify-between">
            <div className="m-4 p-4 bg-gray-200 rounded-md cursor-pointer">
              Forest
            </div>
            <div className="m-4 p-4 bg-gray-200 rounded-md cursor-pointer">
              Mountain
            </div>
          </div>
          <div className="flex justify-between">
            <div className="m-4 p-4 bg-gray-200 rounded-md cursor-pointer">
              Water
            </div>
            <div className="m-4 p-4 bg-gray-200 rounded-md cursor-pointer">
              Neutral
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default ChooseBattleFieldPage;
