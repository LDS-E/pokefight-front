import { Link } from "react-router-dom";
import { GiNightSleep, GiSun, GiSunCloud } from "react-icons/gi";
import { useState } from "react";

const ChooseBattleFieldPage = ({ setBattlefied }) => {
  const [forestWeather, setForestWeather] = useState("/images/Forest_day.png");
  console.log(forestWeather);
  const [oceanWeather, setOceanWeather] = useState("/images/Ocean_day.webp");
  return (
    <div className="bg-[url('/images/Newbattlefield.png')] bg-no-repeat bg-cover  bg-center flex flex-col min-h-screen">
      <h1 className="text-center text-4xl m-8 font-main text-white ">
        Choose your Battlefield:
      </h1>

      <div className="battlefield-container p-8">
        <div className="battlefield group">
          <div className="weatherContainer">
            <GiSunCloud
              onClick={() => setForestWeather("/images/Forest_day.png")}
              className={`weatherStyle text-blue-200 rounded-l-3xl rounded-bl-none ${
                forestWeather === "/images/Forest_day.png"
                  ? "bg-[#87b699] border-y-4 border-l-4 border-white"
                  : "bg-[#293F32] border-b"
              }`}
            />
            <GiSun
              onClick={() => setForestWeather("/images/Forest_afternoon.png")}
              className={`weatherStyle text-orange-500   ${
                forestWeather === "/images/Forest_afternoon.png"
                  ? "bg-[#87b699] border-y-4 border-l-4 border-white"
                  : "bg-[#293F32] "
              }`}
            />
            <GiNightSleep
              onClick={() => setForestWeather("/images/Forest_night.webp")}
              className={`weatherStyle text-yellow-200 rounded-l-3xl rounded-t-none  ${
                forestWeather === "/images/Forest_night.webp"
                  ? "bg-[#87b699] border-y-4 border-l-4 border-white "
                  : "bg-[#293F32] border-t"
              }`}
            />
          </div>
          <Link
            className="z-20"
            onClick={() => {
              setBattlefied(forestWeather);
            }}
            to="/battle"
          >
            <h3 className="battlefieldName   bg-[#748C41]/80 ">Forest</h3>
            <button className=" selectBattlefieldBtn">Select</button>
            <img
              className="w-[570px] rounded-3xl hover:border-4 hover:border-red-500  "
              src={forestWeather}
              alt="Forest"
            />
          </Link>
        </div>

        <div className="battlefield justify-self-start flex-row-reverse group">
          <div className="weatherContainer invisible">
            <GiSunCloud
              onClick={() => setForestWeather("/images/Forest_day.png")}
              className={`weatherStyle text-blue-200 rounded-l-3xl rounded-bl-none ${
                forestWeather === "/images/Forest_day.png"
                  ? "bg-[#87b699] border-y-4 border-l-4 border-white"
                  : "bg-[#293F32] border-b"
              }`}
            />
            <GiSun
              onClick={() => setForestWeather("/images/Forest_afternoon.png")}
              className={`weatherStyle text-orange-500   ${
                forestWeather === "/images/Forest_afternoon.png"
                  ? "bg-[#87b699] border-y-4 border-l-4 border-white"
                  : "bg-[#293F32] "
              }`}
            />
            <GiNightSleep
              onClick={() => setForestWeather("/images/Forest_night.webp")}
              className={`weatherStyle text-yellow-200 rounded-l-3xl rounded-t-none  ${
                forestWeather === "/images/Forest_night.webp"
                  ? "bg-[#87b699] border-y-4 border-l-4 border-white "
                  : "bg-[#293F32] border-t"
              }`}
            />
          </div>
          <Link
            onClick={() => {
              setBattlefied("/images/Cave_ice.png");
            }}
            to="/battle"
          >
            <h3 className="battlefieldName   bg-[#99C9D9]/80 -ml-6 md:-ml-8">
              Ice Cave
            </h3>
            <button className=" selectBattlefieldBtn -ml-6 md:-ml-8">
              Select
            </button>
            <img
              className="w-[570px] rounded-3xl hover:border-4 hover:border-red-500  "
              src="/images/Cave_ice.png"
              alt="IceCave"
            />
          </Link>
        </div>
        <div className="battlefield group">
          <div className="weatherContainer">
            <GiSunCloud
              onClick={() => setOceanWeather("/images/Ocean_day.webp")}
              className={`weatherStyle text-blue-200 rounded-l-3xl rounded-bl-none ${
                oceanWeather === "/images/Ocean_day.webp"
                  ? "bg-[#7da2ca] border-y-4 border-l-4 border-white"
                  : "bg-[#265e9b] border-b"
              }`}
            />
            <GiSun
              onClick={() => setOceanWeather("/images/Ocean_afternoon.webp")}
              className={`weatherStyle text-orange-500   ${
                oceanWeather === "/images/Ocean_afternoon.webp"
                  ? "bg-[#7da2ca] border-y-4 border-l-4 border-white"
                  : "bg-[#265e9b] "
              }`}
            />
            <GiNightSleep
              onClick={() => setOceanWeather("/images/Ocean_night.webp")}
              className={`weatherStyle text-yellow-200 rounded-l-3xl rounded-t-none  ${
                oceanWeather === "/images/Ocean_night.webp"
                  ? "bg-[#7da2ca] border-y-4 border-l-4 border-white "
                  : "bg-[#265e9b] border-t"
              }`}
            />
          </div>
          <Link
            className="z-20"
            onClick={() => {
              setBattlefied(oceanWeather);
            }}
            to="/battle"
          >
            <h3 className="battlefieldName bg-[#3479C1]/60 ml-8">Ocean</h3>
            <button className=" selectBattlefieldBtn">Select</button>
            <img
              className="w-[570px] rounded-3xl hover:border-4 hover:border-red-500  "
              src={oceanWeather}
              alt="Ocean"
              width={500}
            />
          </Link>
        </div>
        <div className="battlefield justify-self-start flex-row-reverse group">
          <div className="weatherContainer invisible">
            <GiSunCloud
              onClick={() => setForestWeather("/images/Forest_day.png")}
              className={`weatherStyle text-blue-200 rounded-l-3xl rounded-bl-none ${
                forestWeather === "/images/Forest_day.png"
                  ? "bg-[#87b699] border-y-4 border-l-4 border-white"
                  : "bg-[#293F32] border-b"
              }`}
            />
            <GiSun
              onClick={() => setForestWeather("/images/Forest_afternoon.png")}
              className={`weatherStyle text-orange-500   ${
                forestWeather === "/images/Forest_afternoon.png"
                  ? "bg-[#87b699] border-y-4 border-l-4 border-white"
                  : "bg-[#293F32] "
              }`}
            />
            <GiNightSleep
              onClick={() => setForestWeather("/images/Forest_night.webp")}
              className={`weatherStyle text-yellow-200 rounded-l-3xl rounded-t-none  ${
                forestWeather === "/images/Forest_night.webp"
                  ? "bg-[#87b699] border-y-4 border-l-4 border-white "
                  : "bg-[#293F32] border-t"
              }`}
            />
          </div>
          <Link
            onClick={() => {
              setBattlefied("/images/Cave.png");
            }}
            to="/battle"
          >
            <h3 className="battlefieldName bg-[#B59069]/70 -ml-6 md:-ml-8">
              Cave
            </h3>
            <button className=" selectBattlefieldBtn -ml-6 md:-ml-8">
              Select
            </button>
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
