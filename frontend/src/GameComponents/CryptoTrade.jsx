import React, { useState, useEffect } from "react";
import {
  Bitcoin,
  TrendingUp,
  TrendingDown,
  ArrowUpDown,
  Trophy,
  Info,
  Clock,
  Target,
  Zap,
  DollarSign,
  Activity,
  Gamepad2,
  Play
} from "lucide-react";

const initialCryptos = [
  { symbol: "BTC", name: "Bitcoin", price: 45000, change24h: 2.5, holdings: 0, icon: "₿", color: "text-orange-500" },
  { symbol: "ETH", name: "Ethereum", price: 3200, change24h: -1.2, holdings: 0, icon: "⟠", color: "text-blue-500" },
  { symbol: "BNB", name: "Binance Coin", price: 450, change24h: 3.1, holdings: 0, icon: "🟡", color: "text-yellow-500" },
  { symbol: "SOL", name: "Solana", price: 180, change24h: 5.8, holdings: 0, icon: "◎", color: "text-purple-500" },
  { symbol: "ADA", name: "Cardano", price: 1.2, change24h: -2.1, holdings: 0, icon: "♦", color: "text-indigo-500" },
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
  const [gameOver, setGameOver] = useState(false);
  const [bestProfit, setBestProfit] = useState(0);
  const [tradeCount, setTradeCount] = useState(0);

  const difficultySettings = {
    easy: { volatility: 0.05, name: "Beginner", color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200" },
    medium: { volatility: 0.1, name: "Intermediate", color: "text-yellow-600", bgColor: "bg-yellow-50", borderColor: "border-yellow-200" },
    hard: { volatility: 0.2, name: "Expert", color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200" },
  };

  // Price simulation with smoother changes
  useEffect(() => {
    if (!gameStarted || !difficulty || gameOver) return;
    const interval = setInterval(() => {
      const volatility = difficultySettings[difficulty].volatility;
      setCryptos((prev) =>
        prev.map((crypto) => {
          const changeFactor = 1 + (Math.random() - 0.5) * volatility;
          const newPrice = Math.max(crypto.price * changeFactor, crypto.price * 0.1);
          const change24h = ((newPrice - crypto.price) / crypto.price) * 100;
          return {
            ...crypto,
            price: newPrice,
            change24h: change24h,
          };
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [gameStarted, difficulty, gameOver]);

  // Timer with smooth countdown
  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameStarted && timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameStarted, gameOver]);

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

  const buyCrypto = (crypto) => {
    if (balance >= tradeAmount) {
      const amount = tradeAmount / crypto.price;
      setBalance(balance - tradeAmount);
      setCryptos((prev) =>
        prev.map((c) =>
          c.symbol === crypto.symbol ? { ...c, holdings: c.holdings + amount } : c
        )
      );
      setTrades([{ type: "buy", symbol: crypto.symbol, amount, price: crypto.price, timestamp: Date.now() }, ...trades.slice(0, 9)]);
      setTradeCount(tradeCount + 1);
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
      setTrades([{ type: "sell", symbol: crypto.symbol, amount: sellAmount, price: crypto.price, timestamp: Date.now() }, ...trades.slice(0, 9)]);
      setTradeCount(tradeCount + 1);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const getProfitLevel = () => {
    if (profit >= 5000) return { level: "🚀 Crypto King", color: "text-purple-600" };
    if (profit >= 2000) return { level: "💎 Diamond Hands", color: "text-blue-600" };
    if (profit >= 1000) return { level: "📈 Rising Trader", color: "text-green-600" };
    if (profit >= 0) return { level: "🎯 Breaking Even", color: "text-gray-600" };
    if (profit >= -1000) return { level: "📉 Minor Loss", color: "text-orange-600" };
    return { level: "💥 Major Loss", color: "text-red-600" };
  };

  // Pre-game screen
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Gamepad2 className="w-12 h-12" />
                <h1 className="text-4xl font-bold">Crypto Trading Arena</h1>
              </div>
              <p className="text-xl opacity-90">Master the markets, climb the profit ladder!</p>
            </div>

            <div className="p-8">
              {/* Game Rules */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-blue-600" />
                  How to Play
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                      <p className="text-gray-700">Start with <span className="font-bold text-green-600">$10,000</span> virtual capital</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                      <p className="text-gray-700">Buy low, sell high on 5 major cryptocurrencies</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                      <p className="text-gray-700">Prices update every 2 seconds based on difficulty</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                      <p className="text-gray-700">You have <span className="font-bold text-orange-600">2 minutes</span> to maximize profits</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</div>
                      <p className="text-gray-700">Climb the profit ladder to become Crypto King!</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</div>
                      <p className="text-gray-700">Beat your best score and master the markets</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Difficulty Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  Choose Your Challenge
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(difficultySettings).map(([level, settings]) => (
                    <div
                      key={level}
                      onClick={() => setDifficulty(level)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        difficulty === level
                          ? `${settings.bgColor} ${settings.borderColor} shadow-lg`
                          : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <div className="text-center">
                        <div className={`text-2xl font-bold mb-2 ${settings.color}`}>
                          {level === 'easy' && '🟢'} 
                          {level === 'medium' && '🟡'} 
                          {level === 'hard' && '🔴'}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{settings.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          ±{(settings.volatility * 100).toFixed(0)}% price swings
                        </p>
                        <div className="text-xs text-gray-500">
                          {level === 'easy' && 'Perfect for beginners'}
                          {level === 'medium' && 'Balanced challenge'}
                          {level === 'hard' && 'For trading veterans'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Start Button */}
              <div className="text-center">
                <button
                  onClick={() => {
                    if (difficulty) {
                      setGameStarted(true);
                      setTimeLeft(120);
                      setBestProfit(Math.max(bestProfit, profit));
                    }
                  }}
                  disabled={!difficulty}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg text-lg flex items-center gap-3 mx-auto"
                >
                  <Play className="w-6 h-6" />
                  Start Trading Adventure
                </button>
                <p className="text-gray-500 text-sm mt-3">
                  {difficulty ? "Ready to trade!" : "Select a difficulty level first"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Game Over Screen
  if (gameOver) {
    const profitLevel = getProfitLevel();
    const isNewRecord = profit > bestProfit;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className={`${profit >= 0 ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-gradient-to-r from-red-600 to-pink-600'} text-white p-8 text-center`}>
              <Trophy className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-2">Trading Complete!</h1>
              <p className={`text-xl ${profitLevel.color.replace('text-', 'text-white opacity-90')}`}>
                {profitLevel.level}
              </p>
              {isNewRecord && profit > 0 && (
                <div className="mt-3 bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full inline-block font-semibold">
                  🏆 NEW RECORD!
                </div>
              )}
            </div>

            <div className="p-8">
              {/* Performance Stats */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 text-center">
                  <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Final Balance</p>
                  <p className="text-2xl font-bold text-gray-800">${balance.toFixed(2)}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 text-center">
                  <Activity className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Portfolio Value</p>
                  <p className="text-2xl font-bold text-gray-800">${(totalValue - balance).toFixed(2)}</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-6 rounded-2xl border border-emerald-200 text-center">
                  <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Total Profit/Loss</p>
                  <p className={`text-2xl font-bold ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {profit >= 0 ? '+' : ''}${profit.toFixed(2)}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200 text-center">
                  <Zap className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">ROI</p>
                  <p className={`text-2xl font-bold ${profitPercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {profitPercentage >= 0 ? '+' : ''}{profitPercentage.toFixed(1)}%
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="text-center">
                <button
                  onClick={() => {
                    setCryptos(initialCryptos);
                    setBalance(10000);
                    setTrades([]);
                    setTradeCount(0);
                    setSelectedCrypto(null);
                    setGameStarted(false);
                    setGameOver(false);
                    setDifficulty(null);
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg flex items-center gap-3 mx-auto"
                >
                  <Play className="w-6 h-6" />
                  Play Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Game Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Bitcoin className="w-8 h-8 text-orange-500" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Crypto Trading Arena</h1>
                <p className="text-sm text-gray-600">{difficultySettings[difficulty].name} Mode</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Total Value</p>
                <p className="text-xl font-bold text-gray-800">${totalValue.toFixed(2)}</p>
              </div>
              <div className={`px-4 py-2 rounded-xl border-2 flex items-center gap-2 ${
                timeLeft <= 30 ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'
              }`}>
                <Clock className={`w-5 h-5 ${timeLeft <= 30 ? 'text-red-500' : 'text-blue-500'}`} />
                <span className={`font-bold text-lg ${timeLeft <= 30 ? 'text-red-600' : 'text-blue-600'}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-500">Cash Balance</span>
            </div>
            <p className="text-xl font-bold text-gray-800">${balance.toFixed(2)}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-500">Portfolio</span>
            </div>
            <p className="text-xl font-bold text-gray-800">${(totalValue - balance).toFixed(2)}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-500">P&L</span>
            </div>
            <p className={`text-xl font-bold ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {profit >= 0 ? '+' : ''}${profit.toFixed(2)}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-orange-600" />
              <span className="text-sm text-gray-500">ROI</span>
            </div>
            <p className={`text-xl font-bold ${profitPercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {profitPercentage >= 0 ? '+' : ''}{profitPercentage.toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Main Trading Interface */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Market Overview */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <ArrowUpDown className="w-5 h-5 text-blue-600" />
              Market Overview
            </h2>
            <div className="space-y-3">
              {cryptos.map((crypto) => (
                <div
                  key={crypto.symbol}
                  onClick={() => setSelectedCrypto(crypto)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                    selectedCrypto?.symbol === crypto.symbol
                      ? "bg-blue-50 border-2 border-blue-300 shadow-md"
                      : "bg-gray-50 border border-gray-200 hover:shadow-md hover:bg-gray-100"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{crypto.icon}</div>
                      <div>
                        <p className="font-bold text-gray-800">{crypto.symbol}</p>
                        <p className="text-sm text-gray-500">{crypto.name}</p>
                        {crypto.holdings > 0 && (
                          <p className="text-xs text-blue-600 font-medium">
                            Holdings: {crypto.holdings.toFixed(6)}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-800">${crypto.price.toFixed(2)}</p>
                      <div className={`flex items-center gap-1 text-sm ${
                        crypto.change24h >= 0 ? "text-green-600" : "text-red-600"
                      }`}>
                        {crypto.change24h >= 0 ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {crypto.change24h >= 0 ? "+" : ""}{crypto.change24h.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trading Panel */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Trading Panel</h2>
            {selectedCrypto ? (
              <div className="space-y-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-2">{selectedCrypto.icon}</div>
                  <h3 className="font-bold text-gray-800">{selectedCrypto.symbol}</h3>
                  <p className="text-sm text-gray-500">{selectedCrypto.name}</p>
                  <p className="text-lg font-bold mt-2">${selectedCrypto.price.toFixed(2)}</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Trade Amount</label>
                    <input
                      type="number"
                      value={tradeAmount}
                      onChange={(e) => setTradeAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="0"
                      step="100"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => buyCrypto(selectedCrypto)}
                      disabled={balance < tradeAmount}
                      className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
                    >
                      BUY
                    </button>
                    <button
                      onClick={() => sellCrypto(selectedCrypto)}
                      disabled={selectedCrypto.holdings === 0}
                      className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
                    >
                      SELL
                    </button>
                  </div>
                  
                  <p className="text-xs text-center text-gray-500">
                    Trade: {(tradeAmount / selectedCrypto.price).toFixed(6)} {selectedCrypto.symbol}
                  </p>
                </div>

                {trades.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Recent Trades</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {trades.slice(0, 5).map((trade, i) => (
                        <div key={i} className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-lg">
                          <span className={`font-medium ${trade.type === "buy" ? "text-green-600" : "text-red-600"}`}>
                            {trade.type.toUpperCase()} {trade.symbol}
                          </span>
                          <div className="text-right">
                            <div className="text-gray-800">{trade.amount.toFixed(4)}</div>
                            <div className="text-xs text-gray-500">${trade.price.toFixed(2)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-400">
                <ArrowUpDown className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Select a cryptocurrency from the market to start trading</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}