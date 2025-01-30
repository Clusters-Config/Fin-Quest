import React, { useState, useEffect } from "react";

const App = () => {
  const [player1Amount, setPlayer1Amount] = useState(100);
  const [player2Amount, setPlayer2Amount] = useState(100);
  const [player3Amount, setPlayer3Amount] = useState(100);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [status, setStatus] = useState("");

  // Initialize the grid with 100 squares (10x10 grid)
  const [squares, setSquares] = useState([]);

  // Function to generate the grid with random profit and loss
  const generateGrid = () => {
    let grid = Array(100).fill({ type: "neutral", amount: 0 }); // start with all neutral tiles
    
    // Randomly place 15 profit tiles
    let profitCount = 0;
    while (profitCount < 15) {
      const randomIndex = Math.floor(Math.random() * 100);
      if (grid[randomIndex].type === "neutral") {
        grid[randomIndex] = { type: "profit", amount: Math.floor(Math.random() * 51) + 10 }; // Random profit between 10 and 60
        profitCount++;
      }
    }

    // Randomly place 20 loss tiles
    let lossCount = 0;
    while (lossCount < 20) {
      const randomIndex = Math.floor(Math.random() * 100);
      if (grid[randomIndex].type === "neutral") {
        grid[randomIndex] = { type: "loss", amount: Math.floor(Math.random() * 41) + 10 }; // Random loss between 10 and 50
        lossCount++;
      }
    }

    setSquares(grid);
  };

  useEffect(() => {
    generateGrid(); // Call on component mount to generate the grid
  }, []);

  const updateAmount = (square) => {
    if (square.type === "profit") {
      setStatus(`Player ${currentPlayer} landed on Profit! Amount increased!`);
      if (currentPlayer === 1) {
        setPlayer1Amount(player1Amount + square.amount);
      } else if (currentPlayer === 2) {
        setPlayer2Amount(player2Amount + square.amount);
      } else {
        setPlayer3Amount(player3Amount + square.amount);
      }
    } else if (square.type === "loss") {
      setStatus(`Player ${currentPlayer} landed on Loss! Amount decreased!`);
      if (currentPlayer === 1) {
        setPlayer1Amount(player1Amount - square.amount);
      } else if (currentPlayer === 2) {
        setPlayer2Amount(player2Amount - square.amount);
      } else {
        setPlayer3Amount(player3Amount - square.amount);
      }
    } else {
      setStatus(`Player ${currentPlayer} landed on Neutral! No change.`);
    }
  };

  const rollDice = () => {
    if (gameOver) return;

    const diceRoll = Math.floor(Math.random() * 100); // Roll a dice to get a random square
    const square = squares[diceRoll];
    updateAmount(square);

    if (player1Amount <= 0 || player2Amount <= 0 || player3Amount <= 0) {
      setGameOver(true);
      setStatus(`Game Over! Player ${currentPlayer} has no money left!`);
    }

    setCurrentPlayer((prev) => (prev === 3 ? 1 : prev + 1));
  };

  return (
    <div className="container mx-auto p-5 bg-[#F8FAFC]">
      <div className="text-center mb-6">
        {/* Player Info - Separate Divs */}
        <div className="flex justify-around mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md w-1/4">
            <h2 className="text-xl font-bold text-[#002147] mb-2">Player 1</h2>
            <p className="text-lg text-[#6C757D]">Amount: ${player1Amount}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-1/4">
            <h2 className="text-xl font-bold text-[#002147] mb-2">Player 2</h2>
            <p className="text-lg text-[#6C757D]">Amount: ${player2Amount}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-1/4">
            <h2 className="text-xl font-bold text-[#002147] mb-2">Player 3</h2>
            <p className="text-lg text-[#6C757D]">Amount: ${player3Amount}</p>
          </div>
        </div>

        {/* Grid of 100 squares */}
        <div className="grid grid-cols-10 gap-1 mb-6">
          {squares.map((square, index) => (
            <div
              key={index}
              className={`h-16 w-16 flex items-center justify-center border-2 rounded-lg text-center shadow-md transition-all ${
                square.type === "profit"
                  ? "bg-green-400 text-white hover:bg-green-500"
                  : square.type === "loss"
                  ? "bg-red-400 text-white hover:bg-red-500"
                  : "bg-gray-300 text-black hover:bg-gray-400"
              }`}
            >
              {square.type === "profit" && `+${square.amount} 💰`}
              {square.type === "loss" && `-${square.amount} 💸`}
              {square.type === "neutral" && "Neutral"}
            </div>
          ))}
        </div>

        {/* Roll Dice Button */}
        <button
          onClick={rollDice}
          className="px-6 py-3 bg-[#F39C12] text-white rounded-lg hover:bg-[#F39C12] focus:outline-none shadow-lg transition-all"
        >
          Roll Dice
        </button>

        {/* Status */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-[#002147]">{status}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
