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
      time: now + i * 30000, // 30 seconds intervals
      value: +price.toFixed(2),
    });
  }
  return data;
}

function confettiAnimation(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const particles = [];
  const particleCount = 200;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 2,
      speedX: Math.random() * 6 - 3,
      speedY: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let stillActive = false;
    particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.speedY += 0.1; // gravity

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
  const [ticker, setTicker] = useState([...TICKER_MESSAGES]);
  const [loading, setLoading] = useState(false);
  const [lastResult, setLastResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Resize canvas to container width
  useEffect(() => {
    function resize() {
      if (!chartRef.current) return;
      const canvas = chartRef.current;
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = 400;
      drawChart();
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [data]);

  // Update chart every 2 seconds with new data point
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

  // Rotate ticker messages every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTicker((t) => {
        const nextMsg = TICKER_MESSAGES[Math.floor(Math.random() * TICKER_MESSAGES.length)];
        return [nextMsg, ...t].slice(0, 8);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Draw chart function with requested colors and shaded area
  function drawChart() {
    if (!chartRef.current) return;
    const canvas = chartRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;

    ctx.clearRect(0, 0, width, height);

    // Draw grid lines (light bluish overlay)
    ctx.strokeStyle = "rgba(173, 216, 230, 0.15)"; // light blue, faint
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      // vertical
      const x = padding + ((width - 2 * padding) * i) / 5;
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, height - padding);
      ctx.stroke();

      // horizontal
      const y = padding + ((height - 2 * padding) * i) / 5;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    // Scale data
    const values = data.map((d) => d.value);
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const range = maxVal - minVal || 1;

    // Draw shaded area under line (light blue fill)
    ctx.beginPath();
    data.forEach((point, i) => {
      const x = padding + ((width - 2 * padding) * i) / (data.length - 1);
      const y = height - padding - ((point.value - minVal) / range) * (height - 2 * padding);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    // Close path to bottom right and bottom left
    ctx.lineTo(width - padding, height - padding);
    ctx.lineTo(padding, height - padding);
    ctx.closePath();
    ctx.fillStyle = "rgba(173, 216, 230, 0.3)"; // light blue fill
    ctx.fill();

    // Draw line (blue)
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#1D4ED8"; // blue line
    data.forEach((point, i) => {
      const x = padding + ((width - 2 * padding) * i) / (data.length - 1);
      const y = height - padding - ((point.value - minVal) / range) * (height - 2 * padding);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Draw circular points on line (blue)
    data.forEach((point, i) => {
      const x = padding + ((width - 2 * padding) * i) / (data.length - 1);
      const y = height - padding - ((point.value - minVal) / range) * (height - 2 * padding);
      ctx.beginPath();
      ctx.fillStyle = "#1D4ED8";
      ctx.arc(x, y, 3, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Draw last point circle bigger (blue)
    const lastPoint = data[data.length - 1];
    const lastX = width - padding;
    const lastY = height - padding - ((lastPoint.value - minVal) / range) * (height - 2 * padding);
    ctx.fillStyle = "#1D4ED8";
    ctx.beginPath();
    ctx.arc(lastX, lastY, 6, 0, 2 * Math.PI);
    ctx.fill();

    // Draw current price label (purple text)
    ctx.fillStyle = "#7C3AED"; // purple
    ctx.font = "bold 14px monospace";
    ctx.fillText(`$${lastPoint.value.toFixed(2)}`, lastX - 40, lastY - 15);
  }

  // Redraw chart on data change
  useEffect(() => {
    drawChart();
  }, [data]);

  // Handle prediction submit
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
      setLastResult({ correct, currentPrice, futurePrice, points, penalty });
      setShowResult(true);

      // Update ticker
      setTicker((t) => {
        const resultMsg = `${correct ? "✅ WIN" : "❌ LOSS"}: ${
          correct ? "+" + points : "-" + penalty
        } points`;
        return [resultMsg, ...t].slice(0, 8);
      });

      // Add future price to data
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
    setConfidence(50);
    setDirection("up");
    setLastResult(null);
    setShowResult(false);
    setData(generateInitialData());
  }

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background:
          "linear-gradient(135deg, #f0f4f8 0%, #dbeafe 100%)", // light gray to pale blue gradient
        minHeight: "100vh",
        color: "#333333", // dark gray subtitle text
        padding: 20,
        maxWidth: 1400,
        margin: "0 auto",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Faint candlestick pattern overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      />

      <header
        style={{
          textAlign: "center",
          marginBottom: 30,
          padding: 20,
          background: "rgba(255, 255, 255, 0.8)", // light gray/white overlay
          borderRadius: 20,
          border: "1px solid #cbd5e1", // faint bluish border
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#2EAD68", // green title text
            marginBottom: 10,
            fontWeight: "bold",
          }}
        >
          Interactive Stock Prediction Challenge
        </h1>
        <p style={{ color: "#333333", fontSize: "1.1rem" }}>
          Predict market movements and test your trading skills
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 20,
          position: "relative",
          zIndex: 1,
        }}
      >
        <main>
          <div
            style={{
              background: "white",
              borderRadius: 20,
              padding: 20,
              border: "1px solid #cbd5e1",
              position: "relative",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <canvas
              ref={chartRef}
              style={{
                width: "100%",
                height: 400,
                borderRadius: 12,
                display: "block",
              }}
            />

            <div
              style={{
                background: "white",
                borderRadius: 16,
                padding: 20,
                marginTop: 20,
                border: "1px solid #cbd5e1",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                <button
                  onClick={() => setDirection("up")}
                  className={direction === "up" ? "active" : ""}
                  style={{
                    flex: 1,
                    padding: 15,
                    borderRadius: 12,
                    backgroundColor: direction === "up" ? "#2EAD68" : "#d1fae5", // green bg or light green
                    border: "none",
                    color: direction === "up" ? "white" : "#065f46",
                    fontWeight: "bold",
                    fontSize: 16,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    userSelect: "none",
                    transition: "background-color 0.3s",
                  }}
                >
                  ↗️ Up
                </button>
                <button
                  onClick={() => setDirection("down")}
                  className={direction === "down" ? "active" : ""}
                  style={{
                    flex: 1,
                    padding: 15,
                    borderRadius: 12,
                    backgroundColor: direction === "down" ? "#ef4444" : "#fee2e2", // red bg or light red
                    border: "none",
                    color: direction === "down" ? "white" : "#991b1b",
                    fontWeight: "bold",
                    fontSize: 16,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    userSelect: "none",
                    transition: "background-color 0.3s",
                  }}
                >
                  ↘️ Down
                </button>
              </div>

              <div style={{ marginBottom: 10, color: "#9ca3af", fontSize: 14 }}>
                Select Up or Down and adjust your confidence level
              </div>

              <div style={{ marginBottom: 20 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 10,
                    color: "#6b7280",
                    fontWeight: "600",
                  }}
                >
                  <span>Confidence Level</span>
                  <span>{confidence}%</span>
                </div>
                <input
                  type="range"
                  min={MIN_CONF}
                  max={MAX_CONF}
                  value={confidence}
                  onChange={(e) => setConfidence(Number(e.target.value))}
                  style={{
                    width: "100%",
                    height: 8,
                    borderRadius: 10,
                    background: "#bfdbfe", // light blue track
                    outline: "none",
                    WebkitAppearance: "none",
                    cursor: "pointer",
                  }}
                />
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={submitPrediction}
                  disabled={loading || round > INITIAL_ROUNDS}
                  style={{
                    flex: 2,
                    padding: 15,
                    background: "#1D4ED8", // blue button
                    color: "white",
                    border: "none",
                    borderRadius: 12,
                    fontWeight: "bold",
                    fontSize: 16,
                    cursor: loading || round > INITIAL_ROUNDS ? "not-allowed" : "pointer",
                    opacity: loading || round > INITIAL_ROUNDS ? 0.6 : 1,
                    transition: "all 0.3s ease",
                    userSelect: "none",
                  }}
                >
                  {loading ? "⏳ Evaluating..." : "🎯 Place Prediction"}
                </button>
                <button
                  onClick={resetGame}
                  style={{
                    padding: "15px 20px",
                    background: "#f3f4f6", // light gray
                    color: "#374151", // dark gray text
                                        border: "1px solid #d1d5db", // gray border
                    borderRadius: 12,
                    cursor: "pointer",
                    userSelect: "none",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = "#e5e7eb"}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = "#f3f4f6"}
                >
                  🔄 Reset
                </button>
              </div>
            </div>
          </div>
        </main>

        <aside
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <section
            style={{
              background: "white",
              borderRadius: 20,
              padding: 20,
              border: "1px solid #cbd5e1",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15, color: "#374151" }}>
              Game Stats
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              {[
                { label: "Round", value: `${round}/${INITIAL_ROUNDS}`, color: "#60a5fa" }, // light blue progress bar color
                { label: "Score", value: score, color: "#2EAD68" }, // green
                { label: "Accuracy", value: "0%", color: "#1D4ED8" }, // blue (placeholder)
                { label: "Streak", value: streak, color: "#bfdbfe", textColor: "#1e40af" }, // light blue bg, dark blue text
              ].map(({ label, value, color, textColor }) => (
                <div
                  key={label}
                  style={{
                    background: label === "Streak" ? color : "rgba(30, 41, 59, 0.1)",
                    padding: 12,
                    borderRadius: 12,
                    textAlign: "center",
                    color: label === "Streak" ? textColor : "#374151",
                    fontWeight: label === "Score" ? "bold" : "normal",
                    fontSize: label === "Score" ? 24 : 16,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ fontSize: 14, marginBottom: 5, fontWeight: "600" }}>{label}</div>
                  <div style={{ fontSize: 20 }}>{value}</div>
                  {label === "Round" && (
                    <div
                      style={{
                        marginTop: 6,
                        height: 6,
                        width: "100%",
                        backgroundColor: "#dbeafe",
                        borderRadius: 3,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${(round / INITIAL_ROUNDS) * 100}%`,
                          height: "100%",
                          backgroundColor: "#60a5fa",
                          borderRadius: 3,
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section
            style={{
              background: "white",
              borderRadius: 20,
              padding: 20,
              border: "1px solid #cbd5e1",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15, color: "#374151" }}>
              Market News
            </h2>
            <div
              style={{
                height: 120,
                overflow: "hidden",
                position: "relative",
                color: "#6b7280",
                fontSize: 14,
                whiteSpace: "nowrap",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  animation: "ticker-scroll 25s linear infinite",
                }}
              >
                {ticker.map((msg, i) => (
                  <span key={i} style={{ marginRight: 40 }}>
                    {msg} •
                  </span>
                ))}
              </div>
              <style>{`
                @keyframes ticker-scroll {
                  0% { transform: translateX(100%); }
                  100% { transform: translateX(-100%); }
                }
              `}</style>
            </div>
          </section>

          <section
            style={{
              background: "white",
              borderRadius: 20,
              padding: 20,
              border: "1px solid #cbd5e1",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15, color: "#374151" }}>
              Trading Tips
            </h2>
            <div style={{ display: "grid", gap: 12 }}>
              <div
                style={{
                  background: "#dbeafe",
                  padding: 12,
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#1e40af",
                    marginBottom: 5,
                  }}
                >
                  Trend Analysis
                </div>
                <div style={{ color: "#374151", fontSize: 14 }}>
                  Look for consistent higher highs and lower lows to identify trends.
                </div>
              </div>
              <div
                style={{
                  background: "#d1fae5",
                  padding: 12,
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#065f46",
                    marginBottom: 5,
                  }}
                >
                  Risk Management
                </div>
                <div style={{ color: "#374151", fontSize: 14 }}>
                  Higher confidence increases both potential rewards and risks.
                </div>
              </div>
              <div
                style={{
                  background: "#fee2e2",
                  padding: 12,
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#991b1b",
                    marginBottom: 5,
                  }}
                >
                  Psychology
                </div>
                <div style={{ color: "#374151", fontSize: 14 }}>
                  Stay disciplined and avoid emotional trading decisions.
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>

      {/* Confetti canvas */}
      <canvas
        ref={confettiRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 999,
        }}
      />

      {/* Result Modal */}
      {showResult && lastResult && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: 30,
            borderRadius: 20,
            border: "1px solid #cbd5e1",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            zIndex: 1000,
            textAlign: "center",
            minWidth: 300,
            color: lastResult.correct ? "#2EAD68" : "#ef4444",
            animation: "fade-in 0.3s ease-out",
          }}
        >
          <h3 style={{ marginBottom: 20 }}>
            {lastResult.correct ? "✅ Correct Prediction!" : "❌ Prediction Missed"}
          </h3>
          <p style={{ marginBottom: 10, color: "#6b7280" }}>
            ${lastResult.currentPrice.toFixed(2)} → ${lastResult.futurePrice.toFixed(2)}
          </p>
          <p style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
            {lastResult.correct ? `+${lastResult.points}` : `-${lastResult.penalty || 0}`}
          </p>
          <button
            onClick={() => setShowResult(false)}
            style={{
              padding: "10px 20px",
              background: lastResult.correct ? "#2EAD68" : "#ef4444",
              color: "white",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              userSelect: "none",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = lastResult.correct ? "#249a5a" : "#dc2626"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = lastResult.correct ? "#2EAD68" : "#ef4444"}
          >
            Continue
          </button>
          <style>{`
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
