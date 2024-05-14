import { Link } from "react-router-dom";
import { MdLeaderboard } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="bg-red-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold ">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/images/logo.png"
              alt=""
              width={50}
              className="hover:rotate-180 transition-all duration-1000"
            />
            <span>PokeFight</span>
          </div>
        </Link>

        <div className="flex justify-center items-center">
          <Link
            to="/leaderboard"
            className="mx-4 flex justify-center items-center gap-2 group"
          >
            <p className="-translate-x-full font-secondary group-hover:translate-x-0 transition-all duration-1000 opacity-0 group-hover:opacity-100">
              Leaderboard
            </p>
            <MdLeaderboard className="text-white text-3xl" />
          </Link>
          <Link to="/about" className="mx-4 font-secondary">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
