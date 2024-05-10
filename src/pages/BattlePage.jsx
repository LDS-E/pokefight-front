import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import Loading from "../public/images/Loading.gif";
import axios from "axios";

import "animate.css";
const BattlePage = ({ battlefield }) => {
  const flygon = "https://pokefight-backend-9t63.onrender.com/api/pokemons/12";
  const azumarill =
    "https://pokefight-backend-9t63.onrender.com/api/pokemons/234";
  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [oppPokemon, setOppPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isWinning, setIsWinning] = useState(false);
  const [isLosing, setIsLosing] = useState(false);
  const [fightResult, setFightResult] = useState("");
  const [isFaster, setIsFaster] = useState("");
  const [battleLog, setBattleLog] = useState("");
  const typesStyle = {
    Normal: "type-normal",
    Fire: "type-fire",
    Water: "type-water",
    Grass: "type-grass",
    Electric: "type-electric",
    Ice: "type-ice",
    Fighting: "type-fighting",
    Poison: "type-poison",
    Ground: "type-ground",
    Flying: "type-flying",
    Psychic: "type-psychic",
    Bug: "type-bug",
    Rock: "type-rock",
    Ghost: "type-ghost",
    Dragon: "type-dragon",
    Dark: "type-dark",
    Steel: "type-steel",
    Fairy: "type-fairy",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const flygonResponse = await axios.get(flygon);
        setOppPokemon(flygonResponse.data);
        const azumarillResponse = await axios.get(azumarill);
        setPlayerPokemon(azumarillResponse.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  //Fighting logic
  const fight = () => {
    if (oppPokemon?.base.Attack >= playerPokemon?.base.Defense * 2) {
      setIsLosing(true);
      return (
        <p>
          {oppPokemon.name} is too strong for {playerPokemon.name}. It is an
          OHKO.
        </p>
      );
    } else if (playerPokemon?.base.Attack >= oppPokemon?.base.Defense * 2) {
      setIsWinning(true);
      return (
        <p className="animate__animated animate__fadeInUpBig">
          {playerPokemon.name} is too strong for {oppPokemon.name}. It is an
          OHKO.
        </p>
      );
    } else if (oppPokemon?.base.Attack >= playerPokemon?.base.Defense) {
      setIsLosing(true);
      return (
        <p className="[text-shadow:_3px_3px_0px_rgba(0,0,0,0.6)]">
          The battle was close but {oppPokemon.name} is the winner
        </p>
      );
    } else if (playerPokemon?.base.Attack >= oppPokemon?.base.Defense) {
      setIsWinning(true);
      return (
        <p className="animate__animated animate__fadeInUpBig">
          The battle was close but {playerPokemon?.name} is the winner
        </p>
      );
    } else if (oppPokemon?.base.HP >= playerPokemon?.base.HP) {
      setIsLosing(true);
      return <p>The battle was close but {oppPokemon.name} is the winner</p>;
    } else if (playerPokemon?.base.HP >= oppPokemon?.base.HP) {
      setIsWinning(true);
      return (
        <p className="animate__animated animate__fadeInUp">
          The battle was close but {playerPokemon?.name} is the winner
        </p>
      );
    }

    return (
      <p>
        The battle was balanced! It is a draw therefore the referee declared you
        the winner
      </p>
    );
  };
  //Faster pokemon
  const fasterPokemon = () => {
    if (playerPokemon?.base.Speed > oppPokemon?.base.Speed) {
      return (
        <p className="text-center text-balance animate__animated animate__fadeInDown [text-shadow:_3px_3px_0px_rgba(0,0,0,0.6)] ">
          It seems that {playerPokemon?.name} is faster than {oppPokemon?.name}.{" "}
          <br />
          {playerPokemon?.name} will attack first!
        </p>
      );
    }
    if (oppPokemon?.base.Speed > playerPokemon?.base.Speed) {
      return (
        <p className="text-center text-balance animate__fadeInDown ">
          It seems that {oppPokemon?.name} is faster than {playerPokemon?.name}.{" "}
          <br /> {oppPokemon?.name} will attack first!
        </p>
      );
    }
  };
  //Battle Log Attacking order
  const attackingOrder = () => {
    if (playerPokemon?.base.Speed > oppPokemon?.base.Speed) {
      return (
        <div className=" text-center text-balance overflow-hidden">
          <p className="text-center text-balance animate__animated  animate__bounceInRight ">
            {playerPokemon?.name} starts attacking,
          </p>
          <p className="text-center text-balance animate__animated  animate__bounceInLeft">
            {oppPokemon?.name} fight back with his own attack,
          </p>
          <p className="text-center text-balance animate__animated  animate__backInUp">
            The Pokemons keep fighting for a while.
          </p>
        </div>
      );
    }
    if (oppPokemon?.base.Speed > playerPokemon?.base.Speed) {
      return (
        <div>
          <p className="text-center text-balance animate__animated  animate__bounceInRight ">
            {oppPokemon?.name} starts attacking,
          </p>
          <p className="text-center text-balance animate__animated  animate__bounceInLeft">
            {playerPokemon?.name} fight back with his own attack,
          </p>
          <p className="text-center text-balance animate__animated  animate__bounceIn">
            The Pokemons keep fighting for a while.
          </p>
        </div>
      );
    }
  };

  //Disable button
  const handleStartFight = () => {
    setIsDisabled(true);
    setFightResult("");
    //Store the faster pokemon and render after 500ms
    const fasterTimeout = setTimeout(() => {
      const faster = fasterPokemon();
      setIsFaster(faster);
    }, 1500);
    //Store attack order and render after 1s
    const orderTimeout = setTimeout(() => {
      const order = attackingOrder();
      setBattleLog(order);
    }, 2500);

    //Store the fight result
    const resultTimout = setTimeout(() => {
      const result = fight();
      setFightResult(result);
    }, 4000);
    //Reset all back
    const resetTimeout = setTimeout(() => {
      setIsDisabled(false);
      setIsWinning(false);
      setIsLosing(false);
      setIsFaster("");
      setBattleLog("");
    }, 7000);

    return () => {
      clearTimeout(fasterTimeout);
      clearTimeout(orderTimeout);
      clearTimeout(resultTimout);
      clearTimeout(resetTimeout);
    };
  };

  return (
    <div className="bg-[url('images/BattleBg2.png')] bg-center bg-cover h-screen overflow-auto">
      <NavBar />
      {isLoading ? (
        <img src={Loading} width={60} />
      ) : (
        <div className="w-[300px] sm:w-[800px] text-center flex  flex-col justify-center items-center mx-auto my-0">
          {playerPokemon && (
            <div className="relative  mt-8 border-4 border-gray-500  rounded-lg ">
              <img className="w-[800px]" src={battlefield} alt={battlefield} />

              <img
                src={playerPokemon.images.backImg}
                className={`                                                                  

                  absolute bottom-20 left-4 h-24 w-24 sm:bottom-32 sm:left-20 sm:w-30  sm:h-30 ${
                    isDisabled && "animate__animated animate__shakeX"
                  }
                  `}
              />
              {isLosing ? (
                <div className="sm:absolute sm:bottom-0 sm:right-0 bg-gray-300/70 sm:p-4 sm:rounded-lg sm:m-4 sm:w-[200px] sm:block hidden">
                  <p className="opacity-50">{playerPokemon.name}</p>
                  <div className="h-2 my-2 border-2 border-red-600 opacity-50"></div>
                  <div className="flex justify-center items-center gap-4 opacity-50">
                    <p
                      className={`uppercase ${
                        typesStyle[playerPokemon.type[0]]
                      }`}
                    >
                      {playerPokemon.type[0]}
                    </p>
                    {playerPokemon.type[1] && (
                      <p
                        className={`uppercase ${
                          typesStyle[playerPokemon.type[1]]
                        }`}
                      >
                        {playerPokemon.type[1]}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="sm:absolute sm:bottom-0 sm:right-0 bg-gray-300/70 sm:p-4 sm:rounded-lg sm:m-4 sm:w-[200px] sm:block hidden">
                  <p>{playerPokemon.name}</p>
                  <div className="h-2 my-2 bg-green-600"></div>
                  <div className="flex justify-center items-center gap-4">
                    <p
                      className={`uppercase ${
                        typesStyle[playerPokemon.type[0]]
                      }`}
                    >
                      {playerPokemon.type[0]}
                    </p>
                    {playerPokemon.type[1] && (
                      <p
                        className={`uppercase ${
                          typesStyle[playerPokemon.type[1]]
                        }`}
                      >
                        {playerPokemon.type[1]}
                      </p>
                    )}
                  </div>
                </div>
              )}
              <img
                src={oppPokemon.images.frontImg}
                className={`absolute top-0 right-8 h-20 w-20 sm:top-24 sm:right-24 sm:w-30 sm:h-30 ${
                  isDisabled && "animate__animated animate__shakeX"
                }`}
              />
              {isWinning ? (
                <div className="sm:absolute sm:top-0 sm:left-0 bg-gray-300/70 sm:p-4 sm:rounded-lg sm:m-4 sm:w-[200px] sm:block hidden">
                  <p className="opacity-50">{oppPokemon.name}</p>
                  <div className="h-2 my-2 border-2 border-red-600 opacity-50"></div>
                  <div className="flex justify-center items-center gap-4 opacity-50 ">
                    <p
                      className={`uppercase ${typesStyle[oppPokemon.type[0]]}`}
                    >
                      {oppPokemon.type[0]}
                    </p>
                    {oppPokemon.type[1] && (
                      <p
                        className={`uppercase ${
                          typesStyle[oppPokemon.type[1]]
                        }`}
                      >
                        {oppPokemon.type[1]}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="sm:absolute sm:top-0 sm:left-0 bg-gray-300/70 sm:p-4 sm:rounded-lg sm:m-4 sm:w-[200px] sm:block hidden">
                  <p>{oppPokemon.name}</p>

                  <div className="h-2 my-2 bg-green-600"></div>
                  <div className="flex justify-center items-center gap-4  ">
                    <p
                      className={`uppercase ${typesStyle[oppPokemon.type[0]]}`}
                    >
                      {oppPokemon.type[0]}
                    </p>
                    {oppPokemon.type[1] && (
                      <p
                        className={`uppercase ${
                          typesStyle[oppPokemon.type[1]]
                        }`}
                      >
                        {oppPokemon.type[1]}
                      </p>
                    )}
                  </div>
                </div>
              )}
              <div className="flex  justify-between items-center bg-gray-300/70 lg:hidden">
                <div className="flex flex-col justify-center items-center">
                  <p>{playerPokemon.name}</p>
                  <p
                    className={`uppercase ${typesStyle[playerPokemon.type[0]]}`}
                  >
                    {playerPokemon.type[0]}
                  </p>
                  {playerPokemon.type[1] && (
                    <p
                      className={`uppercase ${
                        typesStyle[playerPokemon.type[1]]
                      }`}
                    >
                      {playerPokemon.type[1]}
                    </p>
                  )}
                </div>
                <div>VS</div>
                <div className="flex flex-col justify-center items-center">
                  <p>{oppPokemon.name}</p>
                  <p className={`uppercase ${typesStyle[oppPokemon.type[0]]}`}>
                    {oppPokemon.type[0]}
                  </p>
                  {oppPokemon.type[1] && (
                    <p
                      className={`uppercase ${typesStyle[oppPokemon.type[1]]}`}
                    >
                      {oppPokemon.type[1]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
          <button
            onClick={handleStartFight}
            disabled={isDisabled}
            className="btn bg-red-500 hover:bg-red-500 text-white mt-4 mx-auto disabled:bg-red-300 disabled:text-black"
          >
            Start fight
          </button>

          {isWinning ? (
            <h1 className="animate__animated animate__fadeInDownBig absolute text-4xl shadow-[0_0_0_10000px_rgba(0,0,0,.40)] bg-[#00000066] [text-shadow:_3px_3px_0px_rgba(0,0,0,0.6)] text-white  font-main">
              Congratulation, you won!
            </h1>
          ) : (
            ""
          )}
          {isLosing ? (
            <h1 className="animate__animated animate__fadeInDownBig absolute text-4xl shadow-[0_0_0_10000px_rgba(0,0,0,.40)] bg-[#00000066] [text-shadow:_3px_3px_0px_rgba(0,0,0,0.6)] text-white  font-main">
              You lost!
            </h1>
          ) : (
            ""
          )}
        </div>
      )}
      <div className="text-white font-secondary mt-16 flex flex-col justify-center items-center overflow-hidden bg-red-500/50 w-[600px] mx-auto rounded-xl p-4 gap-2 ">
        <h1 className="text-4xl mb-4 p-4">Battle Log:</h1>
        {isFaster}
        {battleLog}
        {fightResult}
      </div>
    </div>
  );
};

export default BattlePage;
