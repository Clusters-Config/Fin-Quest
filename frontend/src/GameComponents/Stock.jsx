import React, { useEffect, useRef, useState } from "react";

const INITIAL_ROUNDS = 5;
const MIN_CONF = 10;
const MAX_CONF = 100;

const TICKER_MESSAGES = [
  "Market volatility increasing this week",
  "Tech sector shows strong earnings",
  "Federal Reserve meeting this Wednesday",
  "Oil prices continue to climb",
  "Global markets show mixed signals",
  "Inflation data better than expected",
  "Retail sales surpass estimates",
  "Housing market cooling down",
];

function generateInitialData() {
  const now = Date.now();
  let price = 100 + Math.random() * 6;
  const data = [];
  for (let i = -119; i <= 0; i++) {
    price += (Math.random() - 0.48) * (0.6 + Math.random() * 0.9);
    data.push({
      time: now + i * 30000,
      value: +price.toFixed(2),
    });
  }
  return data;
}

function confettiAnimation(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const particles = [];
  const particleCount = 50;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 2,
      speedX: Math.random() * 4 - 2,
      speedY: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let stillActive = false;
    particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.speedY += 0.05;

      if (p.y < canvas.height) stillActive = true;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    if (stillActive) {
      requestAnimationFrame(animate);
    }
  }
  animate();
}

export default function StockPredictionGame() {
  const chartRef = useRef(null);
  const confettiRef = useRef(null);

  const [data, setData] = useState(() => generateInitialData());
  const [round, setRound] = useState(1);
  const [confidence, setConfidence] = useState(50);
  const [direction, setDirection] = useState("up");
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [correctPredictions, setCorrectPredictions] = useState(0);
  const [ticker, setTicker] = useState([...TICKER_MESSAGES]);
  const [loading, setLoading] = useState(false);
  const [lastResult, setLastResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    function resize() {
      if (!chartRef.current) return;
      const canvas = chartRef.current;
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = 280;
      drawChart();
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [data]);

  useEffect(() => {
    if (loading) return;
    const interval = setInterval(() => {
      setData((prev) => {
        const last = prev[prev.length - 1];
        let next = last.value + (Math.random() - 0.48) * (0.5 + Math.random());
        next = +next.toFixed(2);
        const nextTime = Date.now();
        const newData = [...prev.slice(-119), { time: nextTime, value: next }];
        return newData;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicker((t) => {
        const nextMsg = TICKER_MESSAGES[Math.floor(Math.random() * TICKER_MESSAGES.length)];
        return [nextMsg, ...t].slice(0, 4);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  function drawChart() {
    if (!chartRef.current) return;
    const canvas = chartRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;

    ctx.clearRect(0, 0, width, height);

    // Grid
    ctx.strokeStyle = "rgba(156, 163, 175, 0.2)";
    ctx.lineWidth = 1;
    for (let i = 1; i <= 4; i++) {
      const y = (height * i) / 5;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    const values = data.map((d) => d.value);
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const range = maxVal - minVal || 1;

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.3)");
    gradient.addColorStop(1, "rgba(59, 130, 246, 0.05)");

    ctx.beginPath();
    data.forEach((point, i) => {
      const x = padding + ((width - 2 * padding) * i) / (data.length - 1);
      const y = height - padding - ((point.value - minVal) / range) * (height - 2 * padding);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.lineTo(width - padding, height - padding);
    ctx.lineTo(padding, height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#3B82F6";
    data.forEach((point, i) => {
      const x = padding + ((width - 2 * padding) * i) / (data.length - 1);
      const y = height - padding - ((point.value - minVal) / range) * (height - 2 * padding);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Current price point
    const lastPoint = data[data.length - 1];
    const lastX = width - padding;
    const lastY = height - padding - ((lastPoint.value - minVal) / range) * (height - 2 * padding);
    
    ctx.fillStyle = "#3B82F6";
    ctx.beginPath();
    ctx.arc(lastX, lastY, 5, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Price label
    ctx.fillStyle = "#1F2937";
    ctx.font = "bold 14px -apple-system, system-ui, sans-serif";
    const priceText = `$${lastPoint.value.toFixed(2)}`;
    const textWidth = ctx.measureText(priceText).width;
    ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
    ctx.fillRect(lastX - textWidth/2 - 8, lastY - 25, textWidth + 16, 20);
    ctx.fillStyle = "#1F2937";
    ctx.fillText(priceText, lastX - textWidth/2, lastY - 10);
  }

  useEffect(() => {
    drawChart();
  }, [data]);

  function submitPrediction() {
    if (loading || round > INITIAL_ROUNDS) return;
    setLoading(true);

    setTimeout(() => {
      const currentPrice = data[data.length - 1].value;
      const volFactor = 1 + (confidence - 50) / 70;
      const futureChange = (Math.random() - 0.5) * (1.2 * volFactor);
      const futurePrice = +(currentPrice + futureChange).toFixed(2);

      const predictedUp = direction === "up";
      const actualUp = futurePrice >= currentPrice;
      const correct = predictedUp === actualUp;

      const basePoints = 100;
      const confMultiplier = confidence / 100;
      const rawPoints = Math.round(basePoints * confMultiplier);
      const points = correct
        ? Math.round(rawPoints * (1 + Math.min(streak, 4) * 0.15))
        : Math.round(rawPoints * 0.5);
      const penalty = correct ? 0 : Math.round(rawPoints * 0.6);

      setScore((s) => (correct ? s + points : Math.max(0, s - penalty)));
      setStreak((st) => (correct ? st + 1 : 0));
      setCorrectPredictions(prev => correct ? prev + 1 : prev);
      setLastResult({ correct, currentPrice, futurePrice, points, penalty });
      setShowResult(true);

      setData((prev) => {
        const newData = [...prev.slice(1), { time: Date.now(), value: futurePrice }];
        return newData;
      });

      setRound((r) => Math.min(INITIAL_ROUNDS, r + 1));
      setLoading(false);

      if (correct) {
        confettiAnimation(confettiRef.current);
      }
    }, 1200);
  }

  function resetGame() {
    setRound(1);
    setStreak(0);
    setScore(0);
    setCorrectPredictions(0);
    setConfidence(50);
    setDirection("up");
    setLastResult(null);
    setShowResult(false);
    setData(generateInitialData());
  }

  const accuracy = round > 1 ? Math.round((correctPredictions / (round - 1)) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 mt-7">Stock Prediction Challenge</h1>
          <p className="text-gray-600">Predict market movements and test your trading skills</p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Chart Section - Takes up 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Live Price Chart</h2>
                <div className="text-2xl font-bold text-blue-600">
                  ${data[data.length - 1]?.value.toFixed(2)}
                </div>
              </div>
              <canvas ref={chartRef} className="w-full" style={{ height: '280px' }} />
            </div>

            {/* Prediction Controls */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Make Your Prediction</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <button
                  onClick={() => setDirection("up")}
                  className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                    direction === "up"
                      ? "bg-green-50 border-green-500 text-green-700"
                      : "bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  📈 Price Will Go Up
                </button>
                <button
                  onClick={() => setDirection("down")}
                  className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                    direction === "down"
                      ? "bg-red-50 border-red-500 text-red-700"
                      : "bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  📉 Price Will Go Down
                </button>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">Confidence Level</label>
                  <span className="text-sm font-semibold text-gray-900">{confidence}%</span>
                </div>
                <input
                  type="range"
                  min={MIN_CONF}
                  max={MAX_CONF}
                  value={confidence}
                  onChange={(e) => setConfidence(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${confidence}%, #E5E7EB ${confidence}%, #E5E7EB 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Low Risk</span>
                  <span>High Risk</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={submitPrediction}
                  disabled={loading || round > INITIAL_ROUNDS}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {loading ? "Evaluating..." : "Submit Prediction"}
                </button>
                <button
                  onClick={resetGame}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Reset Game
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Game Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Game Progress</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Round</span>
                    <span className="font-medium">{round}/{INITIAL_ROUNDS}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${(round / INITIAL_ROUNDS) * 100}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Score</span>
                  <span className="font-bold text-lg text-green-600">{score}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Accuracy</span>
                  <span className="font-medium">{accuracy}%</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Streak</span>
                  <span className="font-medium">{streak}</span>
                </div>
              </div>
            </div>

            {/* Market News Ticker */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Market News</h3>
              <div className="space-y-2 text-sm text-gray-600 max-h-32 overflow-hidden">
                {ticker.slice(0, 3).map((msg, i) => (
                  <div key={i} className="py-1 border-l-2 border-blue-500 pl-2">
                    {msg}
                  </div>
                ))}
              </div>
            </div>

            {/* Trading Tips */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Tips</h3>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="bg-blue-50 p-2 rounded">
                  <span className="font-medium text-blue-700">Trend:</span> Look for patterns in recent price movements
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <span className="font-medium text-green-700">Risk:</span> Higher confidence = higher reward/penalty
                </div>
                <div className="bg-yellow-50 p-2 rounded">
                  <span className="font-medium text-yellow-700">Streak:</span> Consecutive wins boost your score
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confetti Canvas */}
      <canvas
        ref={confettiRef}
        className="fixed inset-0 pointer-events-none z-50"
      />

      {/* Result Modal */}
      {showResult && lastResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 text-center">
            <div className={`text-4xl mb-3 ${lastResult.correct ? 'text-green-600' : 'text-red-600'}`}>
              {lastResult.correct ? '🎉' : '😞'}
            </div>
            <h3 className={`text-xl font-bold mb-2 ${lastResult.correct ? 'text-green-600' : 'text-red-600'}`}>
              {lastResult.correct ? 'Correct!' : 'Wrong Prediction'}
            </h3>
            <p className="text-gray-600 mb-2">
              ${lastResult.currentPrice.toFixed(2)} → ${lastResult.futurePrice.toFixed(2)}
            </p>
            <p className={`text-2xl font-bold mb-4 ${lastResult.correct ? 'text-green-600' : 'text-red-600'}`}>
              {lastResult.correct ? `+${lastResult.points}` : `-${lastResult.penalty || 0}`} points
            </p>
            <button
              onClick={() => setShowResult(false)}
              className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${
                lastResult.correct ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}