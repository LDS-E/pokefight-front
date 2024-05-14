const ProgressBar = ({ label, value, minValue, maxValue, color, border }) => {
  // Calcula a porcentagem do valor em relação ao mínimo e máximo
  const percentage = ((value - minValue) / (maxValue - minValue)) * 100;

  // Estilo para a barra de progresso com a cor definida
  const barStyle = {
    width: `${percentage}%`,
    backgroundColor: color,
    border: border, // Adiciona a borda
  };

  return (
    <div>
      <div className="mb-1 text-base text-white font-bold font-secondary dark:text-white">
        {label}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div
          className="h-2.5 rounded-full dark:bg-gray-300"
          style={barStyle}
        ></div>
      </div>
    </div>
  );
};

const PokemonStats = ({ pokemon }) => {
  const stats = pokemon.base;

  // Valores mínimos e máximos para cada atributo
  const minValues = {
    HP: 1,
    Attack: 5,
    Defense: 5,
    SpAttack: 10,
    SpDefense: 20,
    Speed: 5,
  };

  const maxValues = {
    HP: 255,
    Attack: 190,
    Defense: 230,
    SpAttack: 194,
    SpDefense: 230,
    Speed: 180,
  };

  return (
    <div>
      <ProgressBar
        label="HP"
        value={stats.HP}
        minValue={minValues.HP}
        maxValue={maxValues.HP}
        color="#4CAF50" // Verde
        border="2px solid black" // Borda preta
      />
      <ProgressBar
        label="Attack"
        value={stats.Attack}
        minValue={minValues.Attack}
        maxValue={maxValues.Attack}
        color="#F44336" // Vermelho
        border="2px solid black" // Borda preta
      />
      <ProgressBar
        label="Defense"
        value={stats.Defense}
        minValue={minValues.Defense}
        maxValue={maxValues.Defense}
        color="#2196F3" // Azul
        border="2px solid black" // Borda preta
      />
      <ProgressBar
        label="SpAttack"
        value={stats.SpAttack}
        minValue={minValues.SpAttack}
        maxValue={maxValues.SpAttack}
        color="#FF9800" // Laranja
        border="2px solid black" // Borda preta
      />
      <ProgressBar
        label="SpDefense"
        value={stats.SpDefense}
        minValue={minValues.SpDefense}
        maxValue={maxValues.SpDefense}
        color="#9C27B0" // Roxo
        border="2px solid black" // Borda preta
      />
      <ProgressBar
        label="Speed"
        value={stats.Speed}
        minValue={minValues.Speed}
        maxValue={maxValues.Speed}
        color="#FFEB3B" // Amarelo
        border="2px solid black" // Borda preta
      />
    </div>
  );
};

export default PokemonStats;
