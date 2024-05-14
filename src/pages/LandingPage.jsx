import { Link } from "react-router-dom";
import { useState } from "react";

const LandingPage = ({ user, setUser }) => {
  // Define um estado para rastrear se o campo de entrada do nickname está vazio
  const [isNicknameEmpty, setIsNicknameEmpty] = useState(true);

  // Função para verificar se o campo de entrada do nickname está vazio
  const handleInputChange = (e) => {
    setUser(e.target.value); // Atualiza o estado do nickname
    setIsNicknameEmpty(e.target.value === ""); // Define isNicknameEmpty para true se o campo estiver vazio
  };

  return (
    <div className=" bg-[url('images/bg8.png')] bg-center bg-cover flex flex-col items-center justify-center h-screen ">
      <div className="">
        <h1 className="text-7xl font-bold mb-20 lg:text-7xl xs:text-xl sm:text-4xl font-main text-yellow-500 text-nowrap [text-shadow:_5px_-1px_2px_rgba(24,69,129,1)]">
          Welcome to PokéArena!
        </h1>
      </div>
      <div className="relative ">
        <input
          value={user}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your nickname"
          className=" border p-4 font-secondary rounded mb-6 "
        />
      </div>

      {/* Desativa o botão se o campo de entrada do nickname estiver vazio */}
      <Link
        to="/choose-pokemon"
        className={`btn bg-red-600 text-white font-secondary hover:bg-red-800 ${
          isNicknameEmpty && "opacity-50 pointer-events-none" // Aplica opacidade e desativa eventos de clique se o campo estiver vazio
        }`}
      >
        Start Journey
      </Link>
    </div>
  );
};

export default LandingPage;
