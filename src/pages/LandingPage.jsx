import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to Pokémon Journey!</h1>
        <input
          type="text"
          placeholder="Enter your nickname"
          className="border p-2 rounded-md mb-4"
        />
        <Link
          to="/choose-pokemon"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Start Journey
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
