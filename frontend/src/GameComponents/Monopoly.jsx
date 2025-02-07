import React, { useState, useEffect } from "react";

const Monopoly = () => {
  const [players, setPlayers] = useState([
    { name: "Player 1", money: 1500, position: 0, properties: [] },
    { name: "Player 2", money: 1500, position: 0, properties: [] },
  ]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [status, setStatus] = useState("");
  const [diceRoll, setDiceRoll] = useState(0);
  const [instructionsVisible, setInstructionsVisible] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  const boardProperties = [
    { name: "Go", price: 0, type: "special" },
    { name: "Mediterranean Avenue", price: 60, type: "property" },
    { name: "Community Chest", price: 0, type: "special" },
    { name: "Baltic Avenue", price: 60, type: "property" },
    { name: "Income Tax", price: 200, type: "special" },
    { name: "Reading Railroad", price: 200, type: "property" },
    { name: "Oriental Avenue", price: 100, type: "property" },
    { name: "Chance", price: 0, type: "special" },
    { name: "Vermont Avenue", price: 100, type: "property" },
    { name: "Connecticut Avenue", price: 120, type: "property" },
  ];

  useEffect(() => {
    if (players.filter(player => player.money <= 0).length === players.length - 1) {
      setGameOver(true);
      setStatus(`${players[currentPlayerIndex].name} wins!`);
    }
  }, [players]);

  const rollDice = () => {
    if (gameOver) return;

    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);

    const newPlayerPosition = players[currentPlayerIndex].position + roll;
    if (newPlayerPosition >= boardProperties.length) {
      setPlayers((prevPlayers) => {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[currentPlayerIndex].position = newPlayerPosition - boardProperties.length;
        updatedPlayers[currentPlayerIndex].money += 200; // Collect $200 for passing GO
        return updatedPlayers;
      });
      setStatus(`${players[currentPlayerIndex].name} passed GO! Collected $200.`);
    } else {
      setPlayers((prevPlayers) => {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[currentPlayerIndex].position = newPlayerPosition;
        return updatedPlayers;
      });
      handleSquareAction(newPlayerPosition);
    }
  };

  const handleSquareAction = (position) => {
    const currentSquare = boardProperties[position];
    const player = players[currentPlayerIndex];

    if (currentSquare.type === "property") {
      if (player.money >= currentSquare.price) {
        setStatus(`${player.name} bought ${currentSquare.name} for $${currentSquare.price}.`);
        setPlayers((prevPlayers) => {
          const updatedPlayers = [...prevPlayers];
          updatedPlayers[currentPlayerIndex].money -= currentSquare.price;
          updatedPlayers[currentPlayerIndex].properties.push(currentSquare.name);
          return updatedPlayers;
        });
      } else {
        setStatus(`${player.name} doesn't have enough money to buy ${currentSquare.name}.`);
      }
    } else if (currentSquare.type === "special") {
      if (currentSquare.name === "Go") {
        setPlayers((prevPlayers) => {
          const updatedPlayers = [...prevPlayers];
          updatedPlayers[currentPlayerIndex].money += 200;
          return updatedPlayers;
        });
        setStatus(`${player.name} passed Go and collected $200.`);
      } else if (currentSquare.name === "Income Tax") {
        setPlayers((prevPlayers) => {
          const updatedPlayers = [...prevPlayers];
          updatedPlayers[currentPlayerIndex].money -= 200;
          return updatedPlayers;
        });
        setStatus(`${player.name} paid $200 in Income Tax.`);
      }
    }
  };

  const nextPlayer = () => {
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
    setStatus("");
  };

  const handleStartGame = () => {
    setGameOver(false);
    setPlayers([
      { name: "Player 1", money: 1500, position: 0, properties: [] },
      { name: "Player 2", money: 1500, position: 0, properties: [] },
    ]);
    setCurrentPlayerIndex(0);
    setStatus("");
    setGameStarted(true);
    setInstructionsVisible(false); // Hide instructions after game starts
  };

  return (
    <div className="flex flex-col items-center p-5  text-white bg-opacity-90">
      <h1 className="text-4xl font-bold mb-8">Monopoly Finance Game</h1>

      {gameStarted ? (
        gameOver ? (
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center w-full max-w-md">
            <h2 className="text-2xl text-red-600">Game Over!</h2>
            <p className="text-lg text-gray-700">{status}</p>
            <button
              onClick={handleStartGame}
              className="mt-6 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
            >
              Start New Game
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-yellow-300">{players[currentPlayerIndex].name}'s Turn</h2>

            <div className="flex justify-center space-x-6 mb-4">
              <button
                onClick={rollDice}
                className="bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600 transition"
              >
                Roll Dice
              </button>
              <button
                onClick={nextPlayer}
                className="bg-gray-500 text-white p-4 rounded-lg shadow-lg hover:bg-gray-600 transition"
              >
                Next Player
              </button>
            </div>

            <div className="text-xl text-gray-200">{status}</div>

            <div className="flex justify-around space-x-8">
              {players.map((player, index) => (
                <div key={index} className="bg-white text-black p-4 rounded-lg shadow-lg w-1/4 text-center">
                  <h3 className="font-bold text-lg text-blue-600">{player.name}</h3>
                  <p className="text-gray-600">Money: ${player.money}</p>
                  <p className="text-gray-600">Position: {boardProperties[player.position].name}</p>
                  <p className="text-gray-600">Properties: {player.properties.join(", ") || "None"}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-yellow-300">Board</h3>
              <div className="grid grid-cols-5 gap-4 mt-4">
                {boardProperties.map((square, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg text-center transition ${
                      players.some((player) => player.position === index)
                        ? "bg-yellow-200 border-4 border-yellow-500"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    <p className="text-lg">{square.name}</p>
                    <p className="text-sm text-gray-400">{square.type === "property" ? `$${square.price}` : ""}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center w-full max-w-md">
          <h2 className="text-2xl text-blue-600">Instructions</h2>
          <p className="text-gray-700 mt-4">
            - Each player starts with $1500.
            <br />
            - Players take turns rolling the dice to move along the board.
            <br />
            - If you land on an unowned property, you can buy it.
            <br />
            - Players collect $200 when they pass GO.
            <br />
            - The game ends when only one player remains with money.
          </p>
          <button
            onClick={handleStartGame}
            className="mt-6 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
          >
            Start Game
          </button>
        </div>
      )}
    </div>
  );
};

export default Monopoly;
