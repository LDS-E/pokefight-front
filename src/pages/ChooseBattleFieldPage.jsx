import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const ChooseBattleFieldPage = ({ setBattlefied }) => {
  return (
    <div className="bg-[url('/images/Newbattlefield.png')] bg-center bg-cover h-screen  overflow-auto">
      <NavBar />
      <h1 className="text-center text-4xl m-8 font-main text-white ">
        Choose your Battlefield:
      </h1>

      <div className="battlefield-container p-8">
        <div className="battlefield group">
          <Link
            onClick={() => {
              setBattlefied("/images/Forest_day.png");
            }}
            to="/battle"
          >
            <h3 className="battlefieldName   bg-[#748C41]/80">Forest</h3>
            <button className=" selectBattlefieldBtn">Select</button>
            <img
              className="w-[570px] rounded-3xl hover:border-4 hover:border-red-500  "
              src="/images/Forest_day.png"
              alt="Forest"
            />
          </Link>
        </div>
        <div className="battlefield justify-self-start group">
          <Link
            onClick={() => {
              setBattlefied("/images/Cave_ice.png");
            }}
            to="/battle"
          >
            <h3 className="battlefieldName   bg-[#99C9D9]/80">Ice Cave</h3>
            <button className=" selectBattlefieldBtn">Select</button>
            <img
              className="w-[570px] rounded-3xl hover:border-4 hover:border-red-500  "
              src="/images/Cave_ice.png"
              alt="IceCave"
            />
          </Link>
        </div>
        <div className="battlefield group">
          <Link
            onClick={() => {
              setBattlefied("/images/Ocean_afternoon.webp");
            }}
            to="/battle"
          >
            <h3 className="battlefieldName bg-[#3479C1]/60">Ocean</h3>
            <button className=" selectBattlefieldBtn">Select</button>
            <img
              className="w-[570px] rounded-3xl hover:border-4 hover:border-red-500  "
              src="/images/Ocean_afternoon.webp"
              alt="Ocean"
              width={500}
            />
          </Link>
        </div>
        <div className="battlefield justify-self-start group">
          <Link
            onClick={() => {
              setBattlefied("/images/Cave.png");
            }}
            to="/battle"
          >
            <h3 className="battlefieldName bg-[#B59069]/70">Cave</h3>
            <button className=" selectBattlefieldBtn">Select</button>
            <img
              className="w-[570px] rounded-3xl hover:border-4 hover:border-red-500  "
              src="/images/Cave.png"
              alt="Cave"
              width={500}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseBattleFieldPage;
