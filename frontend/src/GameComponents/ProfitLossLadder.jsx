import React, { useState, useEffect } from "react";

const App = () => {
  const [player1Amount, setPlayer1Amount] = useState(100);
  const [player2Amount, setPlayer2Amount] = useState(100);
  const [player3Amount, setPlayer3Amount] = useState(100);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [status, setStatus] = useState("");
  const [currentPosition, setCurrentPosition] = useState({ 1: 0, 2: 0, 3: 0 });
  const [diceNumber, setDiceNumber] = useState(1); // This will be the dice roll number
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    generateGrid();
  }, []);

  const generateGrid = () => {
    let grid = Array(100).fill({ type: "neutral", amount: 0 });

    // Randomly place 15 profit tiles
    let profitCount = 0;
    while (profitCount < 15) {
      const randomIndex = Math.floor(Math.random() * 100);
      if (grid[randomIndex].type === "neutral") {
        grid[randomIndex] = { type: "profit", amount: Math.floor(Math.random() * 51) + 10 };
        profitCount++;
      }
    }

    // Randomly place 20 loss tiles
    let lossCount = 0;
    while (lossCount < 20) {
      const randomIndex = Math.floor(Math.random() * 100);
      if (grid[randomIndex].type === "neutral") {
        grid[randomIndex] = { type: "loss", amount: Math.floor(Math.random() * 41) + 10 };
        lossCount++;
      }
    }

    setSquares(grid);
  };

  const rollDice = () => {
    if (gameOver) return;

    const diceRoll = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
    setDiceNumber(diceRoll);

    let newPosition = currentPosition[currentPlayer] + diceRoll;
    if (newPosition >= 100) newPosition = 99; // Prevent exceeding grid

    setCurrentPosition({ ...currentPosition, [currentPlayer]: newPosition });

    const square = squares[newPosition];
    updateAmount(square);

    if (player1Amount <= 0 || player2Amount <= 0 || player3Amount <= 0) {
      setGameOver(true);
      setStatus(`Game Over! Player ${currentPlayer} has no money left!`);
    }

    setCurrentPlayer((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const updateAmount = (square) => {
    if (square.type === "profit") {
      setStatus(`Player ${currentPlayer} landed on Profit! Gained $${square.amount}!`);
      if (currentPlayer === 1) setPlayer1Amount(player1Amount + square.amount);
      else if (currentPlayer === 2) setPlayer2Amount(player2Amount + square.amount);
      else setPlayer3Amount(player3Amount + square.amount);
    } else if (square.type === "loss") {
      setStatus(`Player ${currentPlayer} landed on Loss! Lost $${square.amount}!`);
      if (currentPlayer === 1) setPlayer1Amount(player1Amount - square.amount);
      else if (currentPlayer === 2) setPlayer2Amount(player2Amount - square.amount);
      else setPlayer3Amount(player3Amount - square.amount);
    } else {
      setStatus(`Player ${currentPlayer} landed on Neutral.`);
    }
  };

  return (
    <div className="container mx-auto p-5 bg-[#F8FAFC]">
      <div className="text-center mb-6">
        {/* Players' Information */}
        <div className="flex justify-around mb-6">
          {[1, 2, 3].map((player) => (
            <div key={player} className={`p-4 rounded-lg shadow-md w-1/4 text-white ${player === currentPlayer ? "bg-blue-600" : "bg-gray-600"}`}>
              <h2 className="text-xl font-bold">Player {player}</h2>
              <p className="text-lg">Amount: ${player === 1 ? player1Amount : player === 2 ? player2Amount : player3Amount}</p>
            </div>
          ))}
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-10 gap-1 mb-6 border-4 border-blue-500 p-2 rounded-lg">
          {squares.map((square, index) => (
            <div
              key={index}
              className={`h-16 w-16 flex items-center justify-center border-2 rounded-lg text-center shadow-md transition-all ${
                square.type === "profit"
                  ? "bg-green-400 text-white hover:bg-green-500"
                  : square.type === "loss"
                  ? "bg-red-400 text-white hover:bg-red-500"
                  : "bg-gray-300 text-black hover:bg-gray-400"
              } ${currentPosition[1] === index ? "border-4 border-yellow-400" : ""} 
                 ${currentPosition[2] === index ? "border-4 border-purple-400" : ""} 
                 ${currentPosition[3] === index ? "border-4 border-cyan-400" : ""}`}
            >
              {square.type === "profit" && `+${square.amount} 💰`}
              {square.type === "loss" && `-${square.amount} 💸`}
              {square.type === "neutral" && "Neutral"}
            </div>
          ))}
        </div>

        {/* Dice Rolling */}
        <div className="flex flex-col items-center">
          <button onClick={rollDice} className="px-4 py-2 rounded-lg shadow-lg focus:outline-none transition-all bg-yellow-500 text-white hover:bg-yellow-600">
            Roll Dice
          </button>
          <h3 className="text-lg font-semibold mt-3 text-[#002147]">Rolled: {diceNumber}</h3>
        </div>

        {/* Status Message */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-[#002147]">{status}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
