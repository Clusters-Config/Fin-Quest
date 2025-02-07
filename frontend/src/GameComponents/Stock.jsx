import React, { useState, useEffect } from "react";

const Stock = () => {
  const [balance, setBalance] = useState(1000);
  const [stocks, setStocks] = useState({
    Apple: 100, Tesla: 150, Amazon: 200, Google: 250, Microsoft: 180,
    Meta: 120, Netflix: 130, Nvidia: 220, Intel: 90, IBM: 160,
    Adobe: 140, Salesforce: 170, Twitter: 80, Uber: 110, Airbnb: 190
  });
  const [portfolio, setPortfolio] = useState({ Apple: 0, Tesla: 0, Amazon: 0, Google: 0, Microsoft: 0, Meta: 0, Netflix: 0, Nvidia: 0, Intel: 0, IBM: 0, Adobe: 0, Salesforce: 0, Twitter: 0, Uber: 0, Airbnb: 0 });
  const [round, setRound] = useState(1);
  const [dice, setDice] = useState(1);
  const [message, setMessage] = useState("Welcome to the Stock Market!");
  const [news, setNews] = useState("");
  const [showInstructions, setShowInstructions] = useState(true);
  const maxRounds = 10;

  useEffect(() => {
    if (round > maxRounds) {
      setMessage("Game Over! Your final portfolio value is: $" + calculatePortfolioValue());
    } else {
      updateStockPrices();
      generateNews();
    }
  }, [round]);

  const rollDice = () => {
    if (round > maxRounds) return;
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    setDice(diceRoll);
    setRound((prev) => prev + 1);
  };

  const updateStockPrices = () => {
    const newStocks = { ...stocks };
    Object.keys(newStocks).forEach((stock) => {
      const change = Math.floor(Math.random() * 41) - 20;
      newStocks[stock] = Math.max(10, newStocks[stock] + change);
    });
    setStocks(newStocks);
  };

  const generateNews = () => {
    const newsEvents = [
      "Tech stocks are booming!",
      "Economic downturn affects stock prices.",
      "New government policies benefit the market!",
      "Stock market crash rumors circulate.",
      "Investor confidence at an all-time high!",
      "AI stocks surge amid innovation breakthroughs.",
      "Federal Reserve announces new interest rate policy.",
      "Global trade tensions impact major tech companies.",
      "Crypto markets influence traditional stocks!",
      "Unexpected earnings reports shake the market!"
    ];
    setNews(newsEvents[Math.floor(Math.random() * newsEvents.length)]);
  };

  const buyStock = (stock) => {
    if (balance >= stocks[stock]) {
      setBalance(balance - stocks[stock]);
      setPortfolio({ ...portfolio, [stock]: portfolio[stock] + 1 });
    } else {
      setMessage("Not enough balance to buy " + stock);
    }
  };

  const sellStock = (stock) => {
    if (portfolio[stock] > 0) {
      setBalance(balance + stocks[stock]);
      setPortfolio({ ...portfolio, [stock]: portfolio[stock] - 1 });
    } else {
      setMessage("No shares of " + stock + " to sell!");
    }
  };

  const calculatePortfolioValue = () => {
    let total = balance;
    Object.keys(portfolio).forEach((stock) => {
      total += portfolio[stock] * stocks[stock];
    });
    return total;
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      {showInstructions ? (
        <div className="text-center flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold">Welcome to the Stock Market Game</h1>
          <ul className="text-gray-600 mt-4 text-left list-disc px-6">
            <li>Buy and sell stocks to maximize your profit over {maxRounds} rounds.</li>
            <li>Roll the dice each round to simulate market movements.</li>
            <li>Stock prices fluctuate based on random events and market trends.</li>
            <li>Each round, you get new market news that may affect stock prices.</li>
            <li>Try to manage your balance wisely to avoid running out of cash.</li>
            <li>At the end of {maxRounds} rounds, your final portfolio value will determine your success.</li>
          </ul>
          <button
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setShowInstructions(false)}
          >
            Start Game
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-center">Stock Market Game</h1>
          <p className="text-center text-gray-600">Round: {round}/{maxRounds}</p>
          <p className="text-center text-lg font-semibold">Balance: ${balance}</p>
          <p className="text-center text-green-500">{message}</p>
          <p className="text-center text-blue-500 font-semibold">Market News: {news}</p>

          <div className="mt-4">
            {Object.keys(stocks).map((stock) => (
              <div key={stock} className="flex justify-between p-2 border-b">
                <span>{stock}: ${stocks[stock]}</span>
                <div>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2" onClick={() => buyStock(stock)}>Buy</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => sellStock(stock)}>Sell</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg" onClick={rollDice}>Roll Dice</button>
            <p className="text-lg mt-2">Rolled: {dice}</p>
          </div>

          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold">Portfolio Value: ${calculatePortfolioValue()}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Stock;
