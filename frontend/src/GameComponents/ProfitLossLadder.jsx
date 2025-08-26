import React, { useState, useEffect } from "react";
import {
  Bitcoin,
  TrendingUp,
  TrendingDown,
  ArrowUpDown,
  Trophy,
  Info,
} from "lucide-react";

const initialCryptos = [
  { symbol: "BTC", name: "Bitcoin", price: 45000, change24h: 2.5, holdings: 0, icon: "₿" },
  { symbol: "ETH", name: "Ethereum", price: 3200, change24h: -1.2, holdings: 0, icon: "⟠" },
  { symbol: "BNB", name: "Binance Coin", price: 450, change24h: 3.1, holdings: 0, icon: "🟡" },
  { symbol: "SOL", name: "Solana", price: 180, change24h: 5.8, holdings: 0, icon: "◎" },
  { symbol: "ADA", name: "Cardano", price: 1.2, change24h: -2.1, holdings: 0, icon: "♦" },
];

export default function CryptoTradingGame() {
  const [cryptos, setCryptos] = useState(initialCryptos);
  const [balance, setBalance] = useState(10000);
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [timeLeft, setTimeLeft] = useState(120);
  const [trades, setTrades] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [tradeAmount, setTradeAmount] = useState(1000);

  // 🎯 difficulty settings
  const difficultySettings = {
    easy: 0.05,   // ±5%
    medium: 0.1,  // ±10%
    hard: 0.2,    // ±20%
  };

  // 📈 simulate price changes
  useEffect(() => {
    if (!gameStarted || !difficulty) return;
    const interval = setInterval(() => {
      const volatility = difficultySettings[difficulty];
      setCryptos((prev) =>
        prev.map((crypto) => {
          const changeFactor = 1 + (Math.random() - 0.5) * volatility;
          return {
            ...crypto,
            price: Math.max(crypto.price * changeFactor, crypto.price * 0.1),
            change24h: (Math.random() - 0.5) * volatility * 100,
          };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [gameStarted, difficulty]);

  // ⏳ countdown timer
  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, gameStarted]);

  // 💰 portfolio calculations
  const calculateTotalValue = () => {
    const portfolioValue = cryptos.reduce(
      (total, crypto) => total + crypto.holdings * crypto.price,
      0
    );
    return balance + portfolioValue;
  };

  const totalValue = calculateTotalValue();
  const profit = totalValue - 10000;
  const profitPercentage = (profit / 10000) * 100;

  // 📊 buy/sell functions
  const buyCrypto = (crypto) => {
    if (balance >= tradeAmount) {
      const amount = tradeAmount / crypto.price;
      setBalance(balance - tradeAmount);
      setCryptos((prev) =>
        prev.map((c) =>
          c.symbol === crypto.symbol ? { ...c, holdings: c.holdings + amount } : c
        )
      );
      setTrades([{ type: "buy", symbol: crypto.symbol, amount, price: crypto.price }, ...trades]);
    }
  };

  const sellCrypto = (crypto) => {
    if (crypto.holdings > 0) {
      const sellAmount = Math.min(crypto.holdings, tradeAmount / crypto.price);
      const sellValue = sellAmount * crypto.price;
      setBalance(balance + sellValue);
      setCryptos((prev) =>
        prev.map((c) =>
          c.symbol === crypto.symbol ? { ...c, holdings: c.holdings - sellAmount } : c
        )
      );
      setTrades([{ type: "sell", symbol: crypto.symbol, amount: sellAmount, price: crypto.price }, ...trades]);
    }
  };

  // 📝 BEFORE GAME START: Instructions + Difficulty
  if (!gameStarted) {
    return (
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-4">
          <Bitcoin className="text-yellow-500" /> Crypto Trading Simulator
        </h2>
        <p className="text-gray-600 mb-6 flex items-center gap-2 justify-center">
          <Info className="w-5 h-5 text-blue-500" />
          Trade cryptocurrencies, manage risk, and climb the profit ladder!
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
          <h3 className="font-semibold mb-2">📖 How to Play</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
            <li>You start with <b>$10,000</b> virtual money.</li>
            <li>Select a crypto and choose Buy or Sell.</li>
            <li>Prices change every 3 seconds based on difficulty.</li>
            <li>Climb the ladder by making profits. Don’t fall with losses!</li>
            <li>The game ends when the timer runs out.</li>
          </ul>
        </div>

        <h3 className="font-semibold mb-3">🎯 Choose Difficulty</h3>
        <div className="flex justify-center gap-4 mb-6">
          {["easy", "medium", "hard"].map((level) => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`px-4 py-2 rounded-lg border font-medium ${
                difficulty === level ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        <button
          onClick={() => { if (difficulty) { setGameStarted(true); setTimeLeft(120); } }}
          disabled={!difficulty}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          Start Game
        </button>
      </div>
    );
  }

  // 🎮 GAMEPLAY SCREEN
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8">
      {/* header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Bitcoin className="text-yellow-500" /> Crypto Trading Simulator
        </h2>
        <div className="flex items-center gap-4">
          <span className="font-semibold">💰 ${totalValue.toFixed(2)}</span>
          <span className="px-3 py-1 border rounded-lg">
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500 text-sm">Balance</p>
          <p className="text-lg font-bold">${balance.toFixed(2)}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500 text-sm">Portfolio</p>
          <p className="text-lg font-bold">${(totalValue - balance).toFixed(2)}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500 text-sm">Profit</p>
          <p className={`text-lg font-bold ${profit >= 0 ? "text-green-600" : "text-red-600"}`}>
            {profit >= 0 ? "+" : ""}${profit.toFixed(2)}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500 text-sm">ROI</p>
          <p className={`text-lg font-bold ${profitPercentage >= 0 ? "text-green-600" : "text-red-600"}`}>
            {profitPercentage.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* 🚀 Profit/Loss Ladder effect */}
      <div className="mb-6 text-center">
        {profit > 0 ? (
          <p className="text-green-600 font-semibold flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5" /> You’re climbing the ladder! Keep going!
          </p>
        ) : (
          <p className="text-red-600 font-semibold">You’re slipping down the ladder. Recover fast!</p>
        )}
      </div>

      {/* layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Market overview */}
        <div>
          <h3 className="font-semibold flex items-center gap-2 mb-3">
            <ArrowUpDown className="w-4 h-4" /> Market Overview
          </h3>
          <div className="space-y-2">
            {cryptos.map((crypto) => (
              <div
                key={crypto.symbol}
                onClick={() => setSelectedCrypto(crypto)}
                className={`p-4 border rounded-lg cursor-pointer flex justify-between items-center hover:shadow ${
                  selectedCrypto?.symbol === crypto.symbol ? "border-blue-600 bg-blue-50" : "border-gray-200"
                }`}
              >
                <div className="flex gap-3 items-center">
                  <span className="text-2xl">{crypto.icon}</span>
                  <div>
                    <p className="font-semibold">{crypto.symbol}</p>
                    <p className="text-sm text-gray-500">{crypto.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${crypto.price.toFixed(2)}</p>
                  <p className={`text-sm flex items-center gap-1 ${crypto.change24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {crypto.change24h >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {crypto.change24h >= 0 ? "+" : ""}{crypto.change24h.toFixed(1)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trading Panel */}
        <div>
          <h3 className="font-semibold mb-3">Trading Panel</h3>
          {selectedCrypto ? (
            <div className="border rounded-lg p-6 bg-gray-50">
              <div className="text-center mb-4">
                <span className="text-3xl">{selectedCrypto.icon}</span>
                <h4 className="text-xl font-bold">{selectedCrypto.symbol}</h4>
                <p className="text-gray-500">{selectedCrypto.name}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => buyCrypto(selectedCrypto)}
                  disabled={balance < tradeAmount}
                  className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
                >
                  Buy
                </button>
                <button
                  onClick={() => sellCrypto(selectedCrypto)}
                  disabled={selectedCrypto.holdings === 0}
                  className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 disabled:bg-gray-400"
                >
                  Sell
                </button>
              </div>
              <p className="text-xs text-center mt-2 text-gray-500">
                Trade {(tradeAmount / selectedCrypto.price).toFixed(4)} {selectedCrypto.symbol}
              </p>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-400 border rounded-lg">
              Select a cryptocurrency to trade
            </div>
          )}

          {trades.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Recent Trades</h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {trades.map((trade, i) => (
                  <div key={i} className="flex justify-between text-sm p-2 border rounded-lg">
                    <span className={trade.type === "buy" ? "text-green-600" : "text-red-600"}>
                      {trade.type.toUpperCase()} {trade.symbol}
                    </span>
                    <span>{trade.amount.toFixed(4)} @ ${trade.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
