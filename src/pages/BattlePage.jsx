import { useState, useEffect } from "react";
import Loading from "../public/images/Loading.gif";
import axios from "axios";

import "animate.css";
const BattlePage = ({ battlefield }) => {
  const flygon = "https://pokefight-backend-9t63.onrender.com/api/pokemons/1";
  const azumarill =
    "https://pokefight-backend-9t63.onrender.com/api/pokemons/376";
  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [oppPokemon, setOppPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isWinning, setIsWinning] = useState(false);
  const [isLosing, setIsLosing] = useState(false);
  const [fightResult, setFightResult] = useState("");
  const [isFaster, setIsFaster] = useState("");
  const [battleLog, setBattleLog] = useState("");
  const [background, setBackground] = useState("");
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

  const randomBackground = [
    "bg-[url('images/BattleBg1.png')]",
    "bg-[url('images/BattleBg2.png')]",
    "bg-[url('images/BattleBg3.png')]",
    "bg-[url('images/BattleBg4.png')]",
  ];

  const getRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * randomBackground.length);
    console.log(randomIndex);
    setBackground(randomBackground[randomIndex]);
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
    getRandomBackground();
  }, []);

  //* Fighting logic

  const fight = () => {
    if (oppPokemon?.base.Attack >= playerPokemon?.base.Defense * 2) {
      setIsLosing(true);
      return (
        <p className="winnerPoke animate__animated animate__fadeInUpBig">
          {oppPokemon.name} is too strong for {playerPokemon.name}. It is an
          OHKO.
        </p>
      );
    } else if (playerPokemon?.base.Attack >= oppPokemon?.base.Defense * 2) {
      setIsWinning(true);
      return (
        <p className="winnerPoke animate__animated animate__fadeInUpBig">
          {playerPokemon.name} is too strong for {oppPokemon.name}. It is an
          OHKO.
        </p>
      );
    } else if (oppPokemon?.base.Attack >= playerPokemon?.base.Defense) {
      setIsLosing(true);
      return (
        <p className="winnerPoke animate__animated animate__fadeInUpBig">
          The battle was close but {oppPokemon.name} is the winner.
        </p>
      );
    } else if (playerPokemon?.base.Attack >= oppPokemon?.base.Defense) {
      setIsWinning(true);
      return (
        <p className="winnerPoke animate__animated animate__fadeInUpBig">
          The battle was close but {playerPokemon?.name} is the winner.
        </p>
      );
    } else if (oppPokemon?.base.HP >= playerPokemon?.base.HP) {
      setIsLosing(true);
      return (
        <p className="winnerPoke animate__animated animate__fadeInUpBig">
          The battle was close but {oppPokemon.name} is the winner.
        </p>
      );
    } else if (playerPokemon?.base.HP >= oppPokemon?.base.HP) {
      setIsWinning(true);
      return (
        <p className="winnerPoke animate__animated animate__fadeInUpBig">
          The battle was close but {playerPokemon?.name} is the winner.
        </p>
      );
    }

    return (
      <p className="winnerPoke animate__animated animate__fadeInUpBig">
        The battle was balanced! It is a draw therefore the referee declared you
        the winner!
      </p>
    );
  };

  //** Faster pokemon
  const fasterPokemon = () => {
    if (playerPokemon?.base.Speed > oppPokemon?.base.Speed) {
      return (
        <p className="fasterPoke animate__animated animate__fadeInDown">
          It seems that your {playerPokemon?.name} is faster than enemy{" "}
          {oppPokemon?.name}. <br />
          {playerPokemon?.name} will attack first!
        </p>
      );
    }
    if (oppPokemon?.base.Speed > playerPokemon?.base.Speed) {
      return (
        <p className="fasterPoke animate__animated animate__fadeInDown">
          It seems that enemy {oppPokemon?.name} is faster than your{" "}
          {playerPokemon?.name}. <br /> {oppPokemon?.name} will attack first!
        </p>
      );
    }
  };

  //*Battle Log Attacking order
  const attackingOrder = () => {
    if (
      playerPokemon?.base.Speed > oppPokemon?.base.Speed &&
      playerPokemon?.base.Attack >= oppPokemon?.base.Defense * 2
    ) {
      return (
        <div className="orderContainer">
          <p className="orderPoke animate__animated  animate__bounceInRight  ">
            {playerPokemon?.name} starts attacking,
          </p>
        </div>
      );
    }
    if (
      oppPokemon?.base.Speed > playerPokemon?.base.Speed &&
      oppPokemon?.base.Attack >= playerPokemon?.base.Defense * 2
    ) {
      return (
        <div className="orderContainer">
          <p className="orderPoke animate__animated  animate__bounceInRight">
            {oppPokemon?.name} starts attacking,
          </p>
        </div>
      );
    }

    if (playerPokemon?.base.Speed > oppPokemon?.base.Speed) {
      return (
        <div className="orderContainer">
          <p className="orderPoke animate__animated  animate__bounceInRight">
            {playerPokemon?.name} starts attacking,
          </p>
          <p className="orderPoke animate__animated  animate__bounceInLeft">
            {oppPokemon?.name} fight back with his own attack,
          </p>
          <p className="orderPoke animate__animated  animate__backInUp">
            The Pokemons keep fighting for a while.
          </p>
        </div>
      );
    }
    if (oppPokemon?.base.Speed > playerPokemon?.base.Speed) {
      return (
        <div>
          <p className="orderPoke animate__animated animate__bounceInRight">
            {oppPokemon?.name} starts attacking,
          </p>
          <p className="orderPoke animate__animated animate__bounceInLeft">
            {playerPokemon?.name} fight back with his own attack,
          </p>
          <p className="orderPoke animate__animated animate__backInUp">
            The Pokemons keep fighting for a while.
          </p>
        </div>
      );
    }
  };

  //*Disable button
  const handleStartFight = () => {
    setIsDisabled(true);
    setFightResult("");
    setIsFaster("");
    setBattleLog("");

    //**Store the faster pokemon and render after 500ms
    const fasterTimeout = setTimeout(() => {
      const faster = fasterPokemon();
      setIsFaster(faster);
    }, 1500);

    //**Store attack order and render after 1s
    const orderTimeout = setTimeout(() => {
      const order = attackingOrder();
      setBattleLog(order);
    }, 2500);

    //*Store the fight result
    const resultTimout = setTimeout(() => {
      const result = fight();
      setFightResult(result);
    }, 4000);

    //*Reset all back
    const resetTimeout = setTimeout(() => {
      setIsWinning(false);
      setIsLosing(false);
      setIsDisabled(false);
    }, 7000);

    return () => {
      clearTimeout(fasterTimeout);
      clearTimeout(orderTimeout);
      clearTimeout(resultTimout);
      clearTimeout(resetTimeout);
    };
  };

  return (
    <div
      className={`${background} bg-no-repeat bg-cover  bg-center pt-24 min-h-screen `}
    >
      {isLoading ? (
        <img src={Loading} width={60} />
      ) : (
        <div className="fight-container">
          {playerPokemon && (
            <div className="relative  mt-8 border-4 border-zinc-500  rounded-lg ">
              <img
                className="w-[300px] sm:w-[570px] lg:w-[1024px]"
                src={battlefield}
                alt={battlefield}
              />

              <img
                src={playerPokemon.images.backImg}
                className={`playerPokemon ${
                  isDisabled && "animate__animated animate__shakeX"
                }
                  `}
              />
              {isLosing ? (
                <div className="playerPokemonHp">
                  <p className="opacity-50 font-secondary tracking-wider">
                    {playerPokemon.name}
                  </p>
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
                <div className="playerPokemonHp">
                  <p className="font-secondary tracking-wider">
                    {playerPokemon.name}
                  </p>
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
                className={`oppPokemon ${
                  isDisabled && "animate__animated animate__shakeX"
                }`}
              />
              {isWinning ? (
                <div className="oppPokemonHp">
                  <p className="opacity-50 font-secondary tracking-wider">
                    {oppPokemon.name}
                  </p>
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
                <div className="oppPokemonHp">
                  <p className="font-secondary tracking-wider">
                    {oppPokemon.name}
                  </p>

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
              <div className="flex justify-between  bg-zinc-300/70 sm:hidden">
                <div className="flex flex-col items-center justify-around m-4 gap-0.5">
                  <p className="self-start">{playerPokemon.name}</p>
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
                <div className="self-center">VS</div>
                <div className="flex flex-col items-center justify-around m-4 gap-0.5">
                  <p className="">{oppPokemon.name}</p>
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
            className="btn bg-red-600 hover:bg-red-800 text-white mt-4 mx-auto disabled:bg-red-300 disabled:text-black font-secondary"
          >
            Start fight
          </button>

          {isWinning ? (
            <h1 className="animate__animated animate__fadeInDownBig announcerText ">
              Congratulation, you won!
            </h1>
          ) : (
            ""
          )}
          {isLosing ? (
            <h1 className="animate__animated animate__fadeInDownBig announcerText">
              You lost!
            </h1>
          ) : (
            ""
          )}
        </div>
      )}
      <div className="battleLogContaier">
        <h1 className="text-4xl mb-4 p-4">Battle Log:</h1>
        {isFaster}
        {battleLog}
        {fightResult}
      </div>
    </div>
  );
};

export default BattlePage;
