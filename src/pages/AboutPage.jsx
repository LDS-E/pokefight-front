import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-[#221F1F] min-h-screen pt-24">
      <div className="container pt-4 mx-auto">
        <h2 className="text-2xl font-main mb-4 text-yellow-500">
          About PokéArena
        </h2>
        <p className="text-white font-secondary">
          Welcome to PokéArena, where you embark on an exciting journey to
          become the ultimate Pokémon Trainer!
        </p>
        <p className="text-white font-secondary">
          Here's a step-by-step guide to get you started:
        </p>
        <h2 className="text-xl font-main mt-6 mb-2 text-yellow-500">
          Step 1: Register, Choose Your and opponent Pokémon
        </h2>
        <p className="text-white font-secondary">
          On the landing page, enter your desired nickname and click "Start
          Journey" to begin.
        </p>
        <p className="text-white font-secondary">
          Explore the Pokédex, select your and opponent Pokémon. Click on a
          Pokémon to view detailed information.
        </p>
        <h2 className="text-xl font-main mt-6 mb-2 text-yellow-500">
          Step 2: Select Your Battle Field
        </h2>
        <p className="text-white font-secondary">
          Choose from four different battle environments: Forest, Mountain,
          Water, and Neutral.
        </p>
        <p className="text-white font-secondary">
          Pick the field that intrigues you the most to start your battle.
        </p>
        <h2 className="text-xl font-main mt-6 mb-2 text-yellow-500">
          Step 3: Prepare for Battle
        </h2>
        <p className="text-white font-secondary">
          In the battle page, your chosen Pokémon will be ready to fight! An
          opponent Pokémon will be randomly selected by the application logic.
        </p>
        <p className="text-white font-secondary">
          Both Pokémon will be placed in the battlefield chosen by you earlier,
          enhancing the immersive experience. After the battle, the winner will
          be announced, and you'll have the option to continue battling or end
          your journey.
        </p>
        <h2 className="text-xl font-main mt-6 mb-2 text-yellow-500">
          Step 4: Check Your Ranking
        </h2>
        <p className="text-white font-secondary">
          Visit the Leaderboard page to see your current score, updated based on
          your wins and losses.
        </p>
        <p className="text-white font-secondary">
          Always strive to improve your ranking!
        </p>
        <h2 className="text-xl font-main mt-6 mb-2 text-yellow-500">
          Step 5: Explore the Pokémon Journey
        </h2>
        <p className="text-white font-secondary">
          On the "About" page, you'll find detailed information on how the game
          works and how you can make the most of the application.
        </p>
        <p className="text-white font-secondary">
          Read about the victory, defeat, and scoring criteria to better
          understand your journey.
        </p>
        <p className="text-white font-secondary">
          Have fun and good luck in your Pokémon battles!
        </p>
        <div className="flex justify-center items-center mt-8">
          <Link
            to="/"
            className="btn bg-red-600 text-white font-secondary hover:bg-red-800"
          >
            Start Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
