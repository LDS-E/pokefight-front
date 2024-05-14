import { useState, useEffect } from "react";
import Loading from "/images/Loading.gif";
import { Link } from "react-router-dom";
import "animate.css";
const BattlePage = ({
  battlefield,
  pokemon,
  opponentPokemon,
  playerPokemon,
}) => {
  console.log(pokemon);

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
    "bg-[url('/images/BattleBg1.png')]",
    "bg-[url('/images/BattleBg2.png')]",
    "bg-[url('/images/BattleBg3.png')]",
    "bg-[url('/images/BattleBg4.png')]",
  ];

  const getRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * randomBackground.length);
    console.log(randomIndex);
    setBackground(randomBackground[randomIndex]);
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     setIsLoading(true);
    //     const flygonResponse = await axios.get(flygon);
    //     setOppPokemon(flygonResponse.data);
    //     const azumarillResponse = await axios.get(azumarill);
    //     setPlayerPokemon(azumarillResponse.data);
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchData();
    getRandomBackground();
  }, []);

  //* Fighting logic

  const fight = () => {
    if (opponentPokemon?.base.Attack >= playerPokemon?.base.Defense * 2) {
      setIsLosing(true);
      return (
        <p className="winnerPoke animate__animated animate__fadeInUpBig">
          {opponentPokemon.name} is too strong for {playerPokemon.name}. It is
          an OHKO.
        </p>
      );
    } else if (
      playerPokemon?.base.Attack >=
      opponentPokemon?.base.Defense * 2
    ) {
      setIsWinning(true);
      return (
        <p className="winnerPoke animate__animated animate__fadeInUpBig">
          {playerPokemon.name} is too strong for {opponentPokemon.name}. It is
          an OHKO.
        </p>
      );
    } else if (opponentPokemon?.base.Attack >= playerPokemon?.base.Defense) {
      setIsLosing(true);
      return (
        <p className="winnerPoke animate__animated animate__fadeInUpBig">
          The battle was close but {opponentPokemon.name} is the winner.
        </p>
      );
    } else if (playerPokemon?.base.Attack >= opponentPokemon?.base.Defense) {
      setIsWinning(true);
      return (
        <p className="winnerPoke animate__animated animate__fadeInUpBig">
          The battle was close but {playerPokemon?.name} is the winner.
        </p>
      );
    } else if (opponentPokemon?.base.HP >= playerPokemon?.base.HP) {
      setIsLosing(true);
      return (
        <p className="winnerPoke animate__animated animate__fadeInUpBig">
          The battle was close but {opponentPokemon.name} is the winner.
        </p>
      );
    } else if (playerPokemon?.base.HP >= opponentPokemon?.base.HP) {
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
    if (playerPokemon?.base.Speed > opponentPokemon?.base.Speed) {
      return (
        <p className="fasterPoke animate__animated animate__fadeInDown">
          It seems that your {playerPokemon?.name} is faster than enemy{" "}
          {opponentPokemon?.name}. <br />
          {playerPokemon?.name} will attack first!
        </p>
      );
    }
    if (opponentPokemon?.base.Speed > playerPokemon?.base.Speed) {
      return (
        <p className="fasterPoke animate__animated animate__fadeInDown">
          It seems that enemy {opponentPokemon?.name} is faster than your{" "}
          {playerPokemon?.name}. <br /> {opponentPokemon?.name} will attack
          first!
        </p>
      );
    }
  };

  //*Battle Log Attacking order
  const attackingOrder = () => {
    if (
      playerPokemon?.base.Speed > opponentPokemon?.base.Speed &&
      playerPokemon?.base.Attack >= opponentPokemon?.base.Defense * 2
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
      opponentPokemon?.base.Speed > playerPokemon?.base.Speed &&
      opponentPokemon?.base.Attack >= playerPokemon?.base.Defense * 2
    ) {
      return (
        <div className="orderContainer">
          <p className="orderPoke animate__animated  animate__bounceInRight">
            {opponentPokemon?.name} starts attacking,
          </p>
        </div>
      );
    }

    if (playerPokemon?.base.Speed > opponentPokemon?.base.Speed) {
      return (
        <div className="orderContainer">
          <p className="orderPoke animate__animated  animate__bounceInRight">
            {playerPokemon?.name} starts attacking,
          </p>
          <p className="orderPoke animate__animated  animate__bounceInLeft">
            {opponentPokemon?.name} fight back with his own attack,
          </p>
          <p className="orderPoke animate__animated  animate__backInUp">
            The Pokemons keep fighting for a while.
          </p>
        </div>
      );
    }
    if (opponentPokemon?.base.Speed > playerPokemon?.base.Speed) {
      return (
        <div>
          <p className="orderPoke animate__animated animate__bounceInRight">
            {opponentPokemon?.name} starts attacking,
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
    // const resetTimeout = setTimeout(() => {
    //   setIsWinning(false);
    //   setIsLosing(false);
    //   setIsDisabled(false);
    // }, 7000);

    return () => {
      clearTimeout(fasterTimeout);
      clearTimeout(orderTimeout);
      clearTimeout(resultTimout);
      // clearTimeout(resetTimeout);
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
                src={opponentPokemon.images.frontImg}
                className={`opponentPokemon ${
                  isDisabled && "animate__animated animate__shakeX"
                }`}
              />
              {isWinning ? (
                <div className="oppPokemonHp">
                  <p className="opacity-50 font-secondary tracking-wider">
                    {opponentPokemon.name}
                  </p>
                  <div className="h-2 my-2 border-2 border-red-600 opacity-50"></div>
                  <div className="flex justify-center items-center gap-4 opacity-50 ">
                    <p
                      className={`uppercase ${
                        typesStyle[opponentPokemon.type[0]]
                      }`}
                    >
                      {opponentPokemon.type[0]}
                    </p>
                    {opponentPokemon.type[1] && (
                      <p
                        className={`uppercase ${
                          typesStyle[opponentPokemon.type[1]]
                        }`}
                      >
                        {opponentPokemon.type[1]}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="oppPokemonHp">
                  <p className="font-secondary tracking-wider">
                    {opponentPokemon.name}
                  </p>

                  <div className="h-2 my-2 bg-green-600"></div>
                  <div className="flex justify-center items-center gap-4  ">
                    <p
                      className={`uppercase ${
                        typesStyle[opponentPokemon.type[0]]
                      }`}
                    >
                      {opponentPokemon.type[0]}
                    </p>
                    {opponentPokemon.type[1] && (
                      <p
                        className={`uppercase ${
                          typesStyle[opponentPokemon.type[1]]
                        }`}
                      >
                        {opponentPokemon.type[1]}
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
                  <p className="">{opponentPokemon.name}</p>
                  <p
                    className={`uppercase ${
                      typesStyle[opponentPokemon.type[0]]
                    }`}
                  >
                    {opponentPokemon.type[0]}
                  </p>
                  {opponentPokemon.type[1] && (
                    <p
                      className={`uppercase ${
                        typesStyle[opponentPokemon.type[1]]
                      }`}
                    >
                      {opponentPokemon.type[1]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
          <button
            onClick={handleStartFight}
            disabled={isDisabled}
            className="btn bg-red-600 hover:bg-red-800 text-white mt-4 mx-auto disabled:hidden disabled:text-black font-secondary"
          >
            Start fight
          </button>

          {isWinning ? (
            <div className="animate__animated animate__fadeInDownBig announcerText">
              <p className="m-4 [text-shadow:_3px_3px_0px_rgba(0,0,0,0.6)]">
                Congratulations, <br /> you won!
              </p>
              <div className="flex gap-4 justify-center items-center">
                <Link
                  to="/leaderboard"
                  className="btn  bg-yellow-500 hover:bg-yellow-100 text-black"
                >
                  Leaderboard
                </Link>
                <Link
                  to="/choose-pokemon"
                  className="btn  bg-blue-600 text-white hover:bg-blue-800"
                >
                  Play again
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
          {isLosing ? (
            <div className="animate__animated animate__fadeInDownBig announcerText">
              <p className="m-4 [text-shadow:_3px_3px_0px_rgba(0,0,0,0.6)]">
                You lost!
              </p>
              <div className="flex gap-4 justify-center items-center">
                <Link
                  to="/leaderboard"
                  className="btn  bg-yellow-500 hover:bg-yellow-100 text-black"
                >
                  Leaderboard
                </Link>
                <Link
                  to="/choose-pokemon"
                  className="btn  bg-blue-600 text-white hover:bg-blue-800"
                >
                  Retry
                </Link>
              </div>
            </div>
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

//todo buttons on Win/Lose Visit Leaderboard and Restart Fight

export default BattlePage;
