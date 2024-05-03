import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">About Pokémon Battle</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
          eros nec ligula convallis, sit amet finibus nisi bibendum.
        </p>
        {/* Add more details about the game here */}
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

export default AboutPage;
