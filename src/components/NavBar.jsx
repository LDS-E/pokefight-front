import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md"; // Importing the Menu icon
import { MdLeaderboard } from "react-icons/md"; //Importing the Leaderboard icon

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-600 text-white p-4 font-secondary fixed w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-secondary font-bold">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/images/logo.png"
              alt=""
              width={50}
              className="hover:rotate-180 transition-all duration-1000"
            />
            <span>PokéFight</span>
          </div>
        </Link>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <MdMenu className="text-white text-3xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-red-600 text-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/leaderboard"
                className="block px-3 py-2 text-base font-medium font-secondary text-white rounded-md hover:bg-[#221F1F] hover:text-white"
              >
                Leaderboard
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium font-secondary text-white rounded-md hover:bg-[#221F1F] hover:text-white"
              >
                About
              </Link>
            </div>
          </div>
        )}

        {/* Regular Menu */}
        <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-2">
          <Link
            to="/leaderboard"
            className="mx-4 flex justify-center items-center gap-2 group"
          >
            <p className="-translate-x-full font-bold font-secondary group-hover:translate-x-0 transition-all duration-1000 opacity-0 group-hover:opacity-100">
              Leaderboard
            </p>
            <MdLeaderboard className="text-white text-3xl" />
          </Link>
          <Link to="/about" className="mx-4 pr-4 font-bold font-secondary">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
