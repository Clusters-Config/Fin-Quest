// import React, { useState, useEffect, useRef } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
// import { TrendingUp, TrendingDown, DollarSign, Target, Trophy, BookOpen, User, Bell, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';

// const StockTradingSimulator = () => {
//   // Core State Management
//   const [user, setUser] = useState({
//     name: 'Demo User',
//     balance: 1000000,
//     totalValue: 1000000,
//     score: 0,
//     level: 1,
//     badges: []
//   });

//   const [activeSection, setActiveSection] = useState('dashboard');
//   const [stocks, setStocks] = useState([
//     { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2456.75, change: 2.34, changePercent: 0.095, volume: 1234567, pe: 24.5, marketCap: 1659000 },
//     { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3678.90, change: -15.60, changePercent: -0.42, volume: 987654, pe: 28.7, marketCap: 1343000 },
//     { symbol: 'INFY', name: 'Infosys Limited', price: 1456.20, change: 8.75, changePercent: 0.60, volume: 2345678, pe: 22.3, marketCap: 603000 },
//     { symbol: 'HDFCBANK', name: 'HDFC Bank Limited', price: 1634.85, change: -5.25, changePercent: -0.32, volume: 1567890, pe: 19.8, marketCap: 900000 },
//     { symbol: 'ICICIBANK', name: 'ICICI Bank Limited', price: 945.30, change: 12.40, changePercent: 1.33, volume: 3456789, pe: 16.5, marketCap: 665000 },
//     { symbol: 'BHARTIARTL', name: 'Bharti Airtel Limited', price: 567.80, change: 3.20, changePercent: 0.57, volume: 4567890, pe: 45.2, marketCap: 304000 }
//   ]);

//   const [portfolio, setPortfolio] = useState([
//     { symbol: 'RELIANCE', quantity: 10, avgPrice: 2400, currentPrice: 2456.75 },
//     { symbol: 'TCS', quantity: 5, avgPrice: 3700, currentPrice: 3678.90 }
//   ]);

//   const [predictions, setPredictions] = useState([
//     { id: 1, symbol: 'RELIANCE', prediction: 'UP', timeframe: 'Daily', result: 'WIN', points: 10, date: '2024-01-15' },
//     { id: 2, symbol: 'TCS', prediction: 'DOWN', timeframe: 'Weekly', result: 'LOSS', points: -5, date: '2024-01-14' }
//   ]);

//   const [trades, setTrades] = useState([
//     { id: 1, symbol: 'RELIANCE', type: 'BUY', quantity: 10, price: 2400, total: 24000, date: '2024-01-10', time: '10:30 AM' },
//     { id: 2, symbol: 'TCS', type: 'BUY', quantity: 5, price: 3700, total: 18500, date: '2024-01-12', time: '02:15 PM' }
//   ]);

//   const [leaderboard] = useState([
//     { rank: 1, name: 'Trading Master', returns: 45.6, portfolio: 1456000 },
//     { rank: 2, name: 'Bull Rider', returns: 38.2, portfolio: 1382000 },
//     { rank: 3, name: 'Demo User', returns: 12.3, portfolio: 1123000 },
//     { rank: 4, name: 'Market Ninja', returns: 8.7, portfolio: 1087000 },
//     { rank: 5, name: 'Stock Guru', returns: 6.4, portfolio: 1064000 }
//   ]);

//   const [selectedStock, setSelectedStock] = useState(stocks[0]);
//   const [orderType, setOrderType] = useState('BUY');
//   const [orderQuantity, setOrderQuantity] = useState(1);
//   const [predictionStock, setPredictionStock] = useState(stocks[0]);
//   const [predictionDirection, setPredictionDirection] = useState('UP');
//   const [predictionTimeframe, setPredictionTimeframe] = useState('Daily');
//   const [showTradingMentor, setShowTradingMentor] = useState(false);
//   const [mentorMessage, setMentorMessage] = useState('');

//   // Chart data generation
//   const generateChartData = (symbol) => {
//     const data = [];
//     const basePrice = stocks.find(s => s.symbol === symbol)?.price || 100;
//     for (let i = 29; i >= 0; i--) {
//       const date = new Date();
//       date.setDate(date.getDate() - i);
//       const variation = (Math.random() - 0.5) * 0.1;
//       const price = basePrice * (1 + variation * (i / 30));
//       data.push({
//         date: date.toLocaleDateString(),
//         price: Math.round(price * 100) / 100,
//         volume: Math.floor(Math.random() * 1000000) + 500000
//       });
//     }
//     return data;
//   };

//   const chartData = generateChartData(selectedStock.symbol);

//   // Simulate real-time price updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStocks(prevStocks => 
//         prevStocks.map(stock => {
//           const change = (Math.random() - 0.5) * 20;
//           const newPrice = Math.max(stock.price + change, stock.price * 0.9);
//           const changePercent = ((newPrice - stock.price) / stock.price) * 100;
//           return {
//             ...stock,
//             price: Math.round(newPrice * 100) / 100,
//             change: Math.round(change * 100) / 100,
//             changePercent: Math.round(changePercent * 100) / 100
//           };
//         })
//       );

//       // Update portfolio values
//       setPortfolio(prevPortfolio => 
//         prevPortfolio.map(holding => {
//           const currentStock = stocks.find(s => s.symbol === holding.symbol);
//           return {
//             ...holding,
//             currentPrice: currentStock?.price || holding.currentPrice
//           };
//         })
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [stocks]);

//   // Trading Logic
//   const executeTrade = () => {
//     const stock = selectedStock;
//     const total = stock.price * orderQuantity;
    
//     if (orderType === 'BUY') {
//       if (user.balance >= total) {
//         setUser(prev => ({ ...prev, balance: prev.balance - total }));
//         setPortfolio(prev => {
//           const existing = prev.find(p => p.symbol === stock.symbol);
//           if (existing) {
//             const newQuantity = existing.quantity + orderQuantity;
//             const newAvgPrice = ((existing.avgPrice * existing.quantity) + total) / newQuantity;
//             return prev.map(p => 
//               p.symbol === stock.symbol 
//                 ? { ...p, quantity: newQuantity, avgPrice: newAvgPrice, currentPrice: stock.price }
//                 : p
//             );
//           } else {
//             return [...prev, {
//               symbol: stock.symbol,
//               quantity: orderQuantity,
//               avgPrice: stock.price,
//               currentPrice: stock.price
//             }];
//           }
//         });
        
//         setTrades(prev => [{
//           id: prev.length + 1,
//           symbol: stock.symbol,
//           type: 'BUY',
//           quantity: orderQuantity,
//           price: stock.price,
//           total: total,
//           date: new Date().toLocaleDateString(),
//           time: new Date().toLocaleTimeString()
//         }, ...prev]);

//         showMentorTip(`Great buy! You've purchased ${orderQuantity} shares of ${stock.symbol} at ₹${stock.price}. Remember to diversify your portfolio and monitor the PE ratio (${stock.pe}).`);
//       } else {
//         alert('Insufficient balance!');
//       }
//     } else {
//       const holding = portfolio.find(p => p.symbol === stock.symbol);
//       if (holding && holding.quantity >= orderQuantity) {
//         setUser(prev => ({ ...prev, balance: prev.balance + total }));
//         setPortfolio(prev => 
//           prev.map(p => 
//             p.symbol === stock.symbol 
//               ? { ...p, quantity: p.quantity - orderQuantity }
//               : p
//           ).filter(p => p.quantity > 0)
//         );

//         setTrades(prev => [{
//           id: prev.length + 1,
//           symbol: stock.symbol,
//           type: 'SELL',
//           quantity: orderQuantity,
//           price: stock.price,
//           total: total,
//           date: new Date().toLocaleDateString(),
//           time: new Date().toLocaleTimeString()
//         }, ...prev]);

//         const profit = (stock.price - holding.avgPrice) * orderQuantity;
//         showMentorTip(`Sold ${orderQuantity} shares of ${stock.symbol}. ${profit > 0 ? `Profit: ₹${profit.toFixed(2)}` : `Loss: ₹${Math.abs(profit).toFixed(2)}`}. ${profit > 0 ? 'Well done!' : 'Learn from this trade and analyze what went wrong.'}`);
//       } else {
//         alert('Insufficient shares to sell!');
//       }
//     }
//   };

//   // Prediction Logic
//   const makePrediction = () => {
//     const newPrediction = {
//       id: predictions.length + 1,
//       symbol: predictionStock.symbol,
//       prediction: predictionDirection,
//       timeframe: predictionTimeframe,
//       result: 'PENDING',
//       points: 0,
//       date: new Date().toLocaleDateString()
//     };

//     setPredictions(prev => [newPrediction, ...prev]);
    
//     // Simulate result after 3 seconds for demo
//     setTimeout(() => {
//       const isCorrect = Math.random() > 0.4; // 60% success rate for demo
//       const points = isCorrect ? 10 : -5;
      
//       setPredictions(prev => 
//         prev.map(p => 
//           p.id === newPrediction.id 
//             ? { ...p, result: isCorrect ? 'WIN' : 'LOSS', points }
//             : p
//         )
//       );

//       setUser(prev => ({ 
//         ...prev, 
//         score: prev.score + points,
//         level: Math.floor((prev.score + points) / 100) + 1
//       }));

//       showMentorTip(isCorrect 
//         ? `Excellent prediction! You earned ${points} points. Your analysis skills are improving!`
//         : `This prediction didn't work out, but that's part of learning. Analyze the market trends and try again!`
//       );
//     }, 3000);

//     showMentorTip(`Prediction recorded! In ${predictionTimeframe.toLowerCase()} timeframe, you predict ${predictionStock.symbol} will go ${predictionDirection}. Let's see how it plays out!`);
//   };

//   const showMentorTip = (message) => {
//     setMentorMessage(message);
//     setShowTradingMentor(true);
//     setTimeout(() => setShowTradingMentor(false), 5000);
//   };

//   // Calculate portfolio value
//   const portfolioValue = portfolio.reduce((total, holding) => 
//     total + (holding.currentPrice * holding.quantity), 0);
  
//   const totalValue = user.balance + portfolioValue;
//   const totalReturns = ((totalValue - 1000000) / 1000000) * 100;

//   // UI Components
//   const StockCard = ({ stock, onClick }) => (
//     <div 
//       onClick={onClick}
//       className="bg-white rounded-xl p-6 card-shadow cursor-pointer trading-card border-l-4 border-blue-500"
//     >
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <h3 className="font-bold text-lg text-gray-800">{stock.symbol}</h3>
//           <p className="text-sm text-gray-600">{stock.name}</p>
//         </div>
//         <div className="text-right">
//           <p className="text-2xl font-bold">₹{stock.price.toFixed(2)}</p>
//           <p className={`flex items-center ${stock.change >= 0 ? 'profit' : 'loss'}`}>
//             {stock.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
//             ₹{Math.abs(stock.change).toFixed(2)} ({Math.abs(stock.changePercent).toFixed(2)}%)
//           </p>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 gap-4 text-sm">
//         <div>
//           <p className="text-gray-600">Volume</p>
//           <p className="font-semibold">{(stock.volume / 1000000).toFixed(2)}M</p>
//         </div>
//         <div>
//           <p className="text-gray-600">P/E Ratio</p>
//           <p className="font-semibold">{stock.pe}</p>
//         </div>
//         <div>
//           <p className="text-gray-600">Mkt Cap</p>
//           <p className="font-semibold">₹{(stock.marketCap / 1000).toFixed(0)}K Cr</p>
//         </div>
//       </div>
//     </div>
//   );

//   const TradingMentor = () => (
//     showTradingMentor && (
//       <div className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm z-50 animate-bounce-slow">
//         <div className="flex items-start space-x-3">
//           <div className="bg-white/20 p-2 rounded-full">
//             <BookOpen size={24} />
//           </div>
//           <div>
//             <h4 className="font-bold mb-2">Trading Mentor 🤖</h4>
//             <p className="text-sm">{mentorMessage}</p>
//           </div>
//         </div>
//       </div>
//     )
//   );

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'dashboard':
//         return (
//           <div className="space-y-6  mt-10">
//             {/* Portfolio Overview */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
//               <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-blue-100">Total Value</p>
//                     <p className="text-3xl font-bold">₹{totalValue.toLocaleString()}</p>
//                   </div>
//                   <DollarSign size={32} />
//                 </div>
//               </div>
              
//               <div className="bg-white rounded-xl p-6 card-shadow">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-600">Available Cash</p>
//                     <p className="text-2xl font-bold">₹{user.balance.toLocaleString()}</p>
//                   </div>
//                   <div className="bg-green-100 p-3 rounded-full">
//                     <DollarSign className="text-green-600" size={24} />
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl p-6 card-shadow">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-600">Total Returns</p>
//                     <p className={`text-2xl font-bold ${totalReturns >= 0 ? 'profit' : 'loss'}`}>
//                       {totalReturns >= 0 ? '+' : ''}{totalReturns.toFixed(2)}%
//                     </p>
//                   </div>
//                   <div className={`p-3 rounded-full ${totalReturns >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
//                     {totalReturns >= 0 ? 
//                       <TrendingUp className="text-green-600" size={24} /> : 
//                       <TrendingDown className="text-red-600" size={24} />
//                     }
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl p-6 card-shadow">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-600">Score & Level</p>
//                     <p className="text-2xl font-bold">{user.score} pts | L{user.level}</p>
//                   </div>
//                   <div className="bg-yellow-100 p-3 rounded-full">
//                     <Trophy className="text-yellow-600" size={24} />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Market Overview */}
//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">Market Overview</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {stocks.map(stock => (
//                   <StockCard key={stock.symbol} stock={stock} onClick={() => setSelectedStock(stock)} />
//                 ))}
//               </div>
//             </div>

//             {/* Price Chart */}
//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">{selectedStock.symbol} Price Chart</h2>
//               <div className="h-80">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={chartData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="date" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line 
//                       type="monotone" 
//                       dataKey="price" 
//                       stroke="#3B82F6" 
//                       strokeWidth={2}
//                       dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>
//         );

//       case 'prediction':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">Make a Prediction</h2>
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"> 
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Select Stock</label>
//                   <select 
//                     value={predictionStock.symbol}
//                     onChange={(e) => setPredictionStock(stocks.find(s => s.symbol === e.target.value))}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   >
//                     {stocks.map(stock => (
//                       <option key={stock.symbol} value={stock.symbol}>{stock.symbol}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Direction</label>
//                   <select 
//                     value={predictionDirection}
//                     onChange={(e) => setPredictionDirection(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="UP">📈 UP</option>
//                     <option value="DOWN">📉 DOWN</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Timeframe</label>
//                   <select 
//                     value={predictionTimeframe}
//                     onChange={(e) => setPredictionTimeframe(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="Intraday">⏰ Intraday</option>
//                     <option value="Daily">📅 Daily</option>
//                     <option value="Weekly">📊 Weekly</option>
//                   </select>
//                 </div>

//                 <div className="flex items-end">
//                   <button 
//                     onClick={makePrediction}
//                     className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-green-600 hover:to-blue-700 transition duration-300 flex items-center justify-center space-x-2"
//                   >
//                     <Target size={20} />
//                     <span>Predict</span>
//                   </button>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
//                 <p className="text-sm text-gray-700">
//                   <strong>Current Analysis:</strong> {predictionStock.symbol} is trading at ₹{predictionStock.price} 
//                   with a P/E ratio of {predictionStock.pe}. {predictionStock.change >= 0 ? 'Positive momentum' : 'Negative momentum'} 
//                   with {Math.abs(predictionStock.changePercent).toFixed(2)}% change.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">Prediction History</h2>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50">
//                       <th className="text-left p-4">Stock</th>
//                       <th className="text-left p-4">Prediction</th>
//                       <th className="text-left p-4">Timeframe</th>
//                       <th className="text-left p-4">Result</th>
//                       <th className="text-left p-4">Points</th>
//                       <th className="text-left p-4">Date</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {predictions.map(prediction => (
//                       <tr key={prediction.id} className="border-b">
//                         <td className="p-4 font-semibold">{prediction.symbol}</td>
//                         <td className="p-4">
//                           <span className={`flex items-center ${prediction.prediction === 'UP' ? 'profit' : 'loss'}`}>
//                             {prediction.prediction === 'UP' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
//                             {prediction.prediction}
//                           </span>
//                         </td>
//                         <td className="p-4">{prediction.timeframe}</td>
//                         <td className="p-4">
//                           <span className={`px-2 py-1 rounded text-xs font-semibold ${
//                             prediction.result === 'WIN' ? 'bg-green-100 text-green-800' :
//                             prediction.result === 'LOSS' ? 'bg-red-100 text-red-800' :
//                             'bg-yellow-100 text-yellow-800'
//                           }`}>
//                             {prediction.result}
//                           </span>
//                         </td>
//                         <td className={`p-4 font-bold ${prediction.points >= 0 ? 'profit' : 'loss'}`}>
//                           {prediction.points > 0 ? '+' : ''}{prediction.points}
//                         </td>
//                         <td className="p-4 text-gray-600">{prediction.date}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         );

//       case 'trading':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-xl p-6 card-shadow mt-10">
//               <h2 className="text-2xl font-bold mb-6">Place Order</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Select Stock</label>
//                   <select 
//                     value={selectedStock.symbol}
//                     onChange={(e) => setSelectedStock(stocks.find(s => s.symbol === e.target.value))}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   >
//                     {stocks.map(stock => (
//                       <option key={stock.symbol} value={stock.symbol}>
//                         {stock.symbol} - ₹{stock.price}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Order Type</label>
//                   <div className="flex space-x-4">
//                     <button 
//                       onClick={() => setOrderType('BUY')}
//                       className={`flex-1 py-3 px-6 rounded-lg font-semibold transition ${
//                         orderType === 'BUY' 
//                           ? 'bg-green-500 text-white' 
//                           : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                       }`}
//                     >
//                       BUY
//                     </button>
//                     <button 
//                       onClick={() => setOrderType('SELL')}
//                       className={`flex-1 py-3 px-6 rounded-lg font-semibold transition ${
//                         orderType === 'SELL' 
//                           ? 'bg-red-500 text-white' 
//                           : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                       }`}
//                     >
//                       SELL
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
//                   <input 
//                     type="number"
//                     value={orderQuantity}
//                     onChange={(e) => setOrderQuantity(parseInt(e.target.value) || 1)}
//                     min="1"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Total Amount</label>
//                   <div className="p-3 bg-gray-50 rounded-lg text-xl font-bold">
//                     ₹{(selectedStock.price * orderQuantity).toLocaleString()}
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 p-4 bg-blue-50 rounded-lg">
//                 <h3 className="font-semibold mb-2">Stock Analysis</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//                   <div>
//                     <p className="text-gray-600">Current Price</p>
//                     <p className="font-semibold">₹{selectedStock.price}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600">Today's Change</p>
//                     <p className={selectedStock.change >= 0 ? 'profit' : 'loss'}>
//                       {selectedStock.change >= 0 ? '+' : ''}₹{selectedStock.change} ({selectedStock.changePercent}%)
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600">P/E Ratio</p>
//                     <p className="font-semibold">{selectedStock.pe}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600">Volume</p>
//                     <p className="font-semibold">{(selectedStock.volume / 1000000).toFixed(1)}M</p>
//                   </div>
//                 </div>
//               </div>

//               <button 
//                 onClick={executeTrade}
//                 className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 text-lg font-semibold"
//               >
//                 {orderType} {orderQuantity} shares of {selectedStock.symbol}
//               </button>
//             </div>

//             {/* Recent Trades */}
//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">Recent Trades</h2>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50">
//                       <th className="text-left p-4">Stock</th>
//                       <th className="text-left p-4">Type</th>
//                       <th className="text-left p-4">Quantity</th>
//                       <th className="text-left p-4">Price</th>
//                       <th className="text-left p-4">Total</th>
//                       <th className="text-left p-4">Date & Time</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {trades.map(trade => (
//                       <tr key={trade.id} className="border-b">
//                         <td className="p-4 font-semibold">{trade.symbol}</td>
//                         <td className="p-4">
//                           <span className={`px-2 py-1 rounded text-xs font-semibold ${
//                             trade.type === 'BUY' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                           }`}>
//                             {trade.type}
//                           </span>
//                         </td>
//                         <td className="p-4">{trade.quantity}</td>
//                         <td className="p-4">₹{trade.price}</td>
//                         <td className="p-4 font-semibold">₹{trade.total.toLocaleString()}</td>
//                         <td className="p-4 text-gray-600">{trade.date} {trade.time}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         );

//       case 'portfolio':
//         return (
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//               <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl p-6">
//                 <h3 className="text-lg font-semibold mb-2">Portfolio Value</h3>
//                 <p className="text-3xl font-bold">₹{portfolioValue.toLocaleString()}</p>
//                 <p className="text-green-100">Invested: ₹{portfolio.reduce((total, p) => total + (p.avgPrice * p.quantity), 0).toLocaleString()}</p>
//               </div>

//               <div className="bg-white rounded-xl p-6 card-shadow">
//                 <h3 className="text-lg font-semibold mb-2">Total P&L</h3>
//                 <p className={`text-3xl font-bold ${(portfolioValue - portfolio.reduce((total, p) => total + (p.avgPrice * p.quantity), 0)) >= 0 ? 'profit' : 'loss'}`}>
//                   ₹{(portfolioValue - portfolio.reduce((total, p) => total + (p.avgPrice * p.quantity), 0)).toLocaleString()}
//                 </p>
//                 <p className="text-gray-600">Unrealized P&L</p>
//               </div>

//               <div className="bg-white rounded-xl p-6 card-shadow">
//                 <h3 className="text-lg font-semibold mb-2">Available Cash</h3>
//                 <p className="text-3xl font-bold">₹{user.balance.toLocaleString()}</p>
//                 <p className="text-gray-600">Ready to invest</p>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">Holdings</h2>
//               {portfolio.length > 0 ? (
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-gray-50">
//                         <th className="text-left p-4">Stock</th>
//                         <th className="text-left p-4">Quantity</th>
//                         <th className="text-left p-4">Avg Price</th>
//                         <th className="text-left p-4">Current Price</th>
//                         <th className="text-left p-4">Current Value</th>
//                         <th className="text-left p-4">P&L</th>
//                         <th className="text-left p-4">P&L %</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {portfolio.map(holding => {
//                         const currentValue = holding.currentPrice * holding.quantity;
//                         const investedValue = holding.avgPrice * holding.quantity;
//                         const pnl = currentValue - investedValue;
//                         const pnlPercent = (pnl / investedValue) * 100;

//                         return (
//                           <tr key={holding.symbol} className="border-b">
//                             <td className="p-4 font-semibold">{holding.symbol}</td>
//                             <td className="p-4">{holding.quantity}</td>
//                             <td className="p-4">₹{holding.avgPrice.toFixed(2)}</td>
//                             <td className="p-4">₹{holding.currentPrice.toFixed(2)}</td>
//                             <td className="p-4 font-semibold">₹{currentValue.toLocaleString()}</td>
//                             <td className={`p-4 font-bold ${pnl >= 0 ? 'profit' : 'loss'}`}>
//                               {pnl >= 0 ? '+' : ''}₹{pnl.toFixed(2)}
//                             </td>
//                             <td className={`p-4 font-bold ${pnl >= 0 ? 'profit' : 'loss'}`}>
//                               {pnl >= 0 ? '+' : ''}{pnlPercent.toFixed(2)}%
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : (
//                 <div className="text-center py-12">
//                   <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
//                     <DollarSign size={48} className="text-gray-400" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-700 mb-2">No Holdings Yet</h3>
//                   <p className="text-gray-500 mb-6">Start trading to build your portfolio</p>
//                   <button 
//                     onClick={() => setActiveSection('trading')}
//                     className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
//                   >
//                     Start Trading
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Portfolio Allocation Chart */}
//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">Portfolio Allocation</h2>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={portfolio.map(p => ({
//                     symbol: p.symbol,
//                     value: p.currentPrice * p.quantity
//                   }))}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="symbol" />
//                     <YAxis />
//                     <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Value']} />
//                     <Bar dataKey="value" fill="#3B82F6" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>
//         );

//       case 'leaderboard':
//         return (
//           <div className="space-y-6 mt-10">
//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">Top Performers</h2>
//               <div className="space-y-4">
//                 {leaderboard.map((player, index) => (
//                   <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg ${
//                     player.name === 'Demo User' ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'
//                   }`}>
//                     <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
//                       index === 0 ? 'bg-yellow-400 text-yellow-900' :
//                       index === 1 ? 'bg-gray-300 text-gray-700' :
//                       index === 2 ? 'bg-orange-400 text-orange-900' :
//                       'bg-blue-100 text-blue-700'
//                     }`}>
//                       {index < 3 ? ['🥇', '🥈', '🥉'][index] : player.rank}
//                     </div>
                    
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-lg">{player.name}</h3>
//                       <p className="text-gray-600">Portfolio: ₹{player.portfolio.toLocaleString()}</p>
//                     </div>
                    
//                     <div className="text-right">
//                       <p className={`text-2xl font-bold ${player.returns >= 0 ? 'profit' : 'loss'}`}>
//                         +{player.returns}%
//                       </p>
//                       <p className="text-gray-600">Returns</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">Achievements & Badges</h2>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg p-4 text-center">
//                   <div className="text-3xl mb-2">🎯</div>
//                   <h3 className="font-semibold">First Trade</h3>
//                   <p className="text-xs opacity-90">Complete your first trade</p>
//                 </div>
                
//                 <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-4 text-center">
//                   <div className="text-3xl mb-2">💰</div>
//                   <h3 className="font-semibold">Profit Maker</h3>
//                   <p className="text-xs opacity-90">Earn ₹10,000 profit</p>
//                 </div>
                
//                 <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg p-4 text-center opacity-50">
//                   <div className="text-3xl mb-2">🚀</div>
//                   <h3 className="font-semibold">High Roller</h3>
//                   <p className="text-xs opacity-90">Portfolio value ₹15 lakh</p>
//                 </div>
                
//                 <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white rounded-lg p-4 text-center opacity-50">
//                   <div className="text-3xl mb-2">🎓</div>
//                   <h3 className="font-semibold">Market Expert</h3>
//                   <p className="text-xs opacity-90">Score 1000+ points</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">Weekly Challenge</h2>
//               <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold mb-2">🎯 Predict Nifty 50 Closing Price</h3>
//                 <p className="text-gray-700 mb-4">Current Nifty 50: 21,456.78 | Your Prediction: ____</p>
//                 <div className="flex space-x-4">
//                   <input 
//                     type="number" 
//                     placeholder="Enter your prediction"
//                     className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   />
//                   <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
//                     Submit
//                   </button>
//                 </div>
//                 <p className="text-sm text-gray-600 mt-2">Winner gets 500 bonus points! Challenge ends Friday 6 PM.</p>
//               </div>
//             </div>
//           </div>
//         );

//        case 'learning':
//         return (
//           <div className="space-y-6 mt-10">
//             {/* Getting Started Guide */}
//             <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-4">🚀 Welcome to TradePro Simulator!</h2>
//               <p className="text-blue-100 mb-4">
//                 Learn stock trading risk-free with virtual money. Master the basics, build strategies, and compete with others!
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="bg-white/20 p-4 rounded-lg">
//                   <h3 className="font-semibold mb-2">💰 Virtual Money</h3>
//                   <p className="text-sm text-blue-100">Start with ₹10 lakh virtual cash</p>
//                 </div>
//                 <div className="bg-white/20 p-4 rounded-lg">
//                   <h3 className="font-semibold mb-2">📊 Real Market Data</h3>
//                   <p className="text-sm text-blue-100">Trade with live-like stock prices</p>
//                 </div>
//                 <div className="bg-white/20 p-4 rounded-lg">
//                   <h3 className="font-semibold mb-2">🏆 Scoring System</h3>
//                   <p className="text-sm text-blue-100">Earn points and climb levels</p>
//                 </div>
//               </div>
//             </div>

//             {/* Step-by-Step Guide */}
//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">📋 How to Play - Step by Step</h2>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
//                   <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold mb-2">Start with Dashboard</h3>
//                     <p className="text-gray-700 mb-2">View your portfolio overview, available cash (₹10,00,000), and market overview with 6 major Indian stocks.</p>
//                     <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
//                       <strong>Tip:</strong> Click on any stock card to view its price chart and details
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
//                   <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold mb-2">Make Your First Trade</h3>
//                     <p className="text-gray-700 mb-2">Go to Trading section → Select a stock → Choose BUY/SELL → Enter quantity → Execute trade</p>
//                     <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
//                       <strong>Example:</strong> Buy 10 shares of RELIANCE at current market price
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
//                   <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold mb-2">Make Predictions for Points</h3>
//                     <p className="text-gray-700 mb-2">Go to Predictions → Select stock → Predict UP/DOWN → Choose timeframe → Submit prediction</p>
//                     <div className="text-sm text-purple-600 bg-purple-50 p-2 rounded">
//                       <strong>Rewards:</strong> Correct prediction = +10 points, Wrong = -5 points
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
//                   <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold mb-2">Monitor Your Portfolio</h3>
//                     <p className="text-gray-700 mb-2">Check Portfolio section to see your holdings, profits/losses, and overall performance</p>
//                     <div className="text-sm text-orange-600 bg-orange-50 p-2 rounded">
//                       <strong>Goal:</strong> Grow your portfolio value above ₹10 lakh to show positive returns
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
//                   <div className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold mb-2">Compete on Leaderboard</h3>
//                     <p className="text-gray-700 mb-2">Check your ranking against other players based on portfolio returns and prediction accuracy</p>
//                     <div className="text-sm text-yellow-600 bg-yellow-50 p-2 rounded">
//                       <strong>Challenge:</strong> Try to reach top 3 position for maximum recognition
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Game Features */}
//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">🎮 Game Features Explained</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-4">
//                   <div className="border-l-4 border-blue-500 pl-4">
//                     <h4 className="font-semibold text-lg">Trading System</h4>
//                     <ul className="text-sm text-gray-700 space-y-1 mt-2">
//                       <li>• Real-time price updates every 5 seconds</li>
//                       <li>• Buy/Sell at current market prices</li>
//                       <li>• Track all your trade history</li>
//                       <li>• Portfolio automatically updates values</li>
//                     </ul>
//                   </div>

//                   <div className="border-l-4 border-green-500 pl-4">
//                     <h4 className="font-semibold text-lg">Prediction Game</h4>
//                     <ul className="text-sm text-gray-700 space-y-1 mt-2">
//                       <li>• Predict if stock will go UP or DOWN</li>
//                       <li>• Choose timeframe: Intraday/Daily/Weekly</li>
//                       <li>• Results appear within 3 seconds (demo)</li>
//                       <li>• Earn/lose points based on accuracy</li>
//                     </ul>
//                   </div>

//                   <div className="border-l-4 border-purple-500 pl-4">
//                     <h4 className="font-semibold text-lg">Scoring System</h4>
//                     <ul className="text-sm text-gray-700 space-y-1 mt-2">
//                       <li>• Correct prediction: +10 points</li>
//                       <li>• Wrong prediction: -5 points</li>
//                       <li>• Level up every 100 points</li>
//                       <li>• Unlock achievements and badges</li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="border-l-4 border-red-500 pl-4">
//                     <h4 className="font-semibold text-lg">AI Trading Mentor</h4>
//                     <ul className="text-sm text-gray-700 space-y-1 mt-2">
//                       <li>• Provides tips after each trade</li>
//                       <li>• Explains market concepts</li>
//                       <li>• Gives feedback on predictions</li>
//                       <li>• Appears automatically for 5 seconds</li>
//                     </ul>
//                   </div>

//                   <div className="border-l-4 border-yellow-500 pl-4">
//                     <h4 className="font-semibold text-lg">Stock Information</h4>
//                     <ul className="text-sm text-gray-700 space-y-1 mt-2">
//                       <li>• Price, change %, volume data</li>
//                       <li>• P/E ratio and market cap</li>
//                       <li>• 30-day price charts</li>
//                       <li>• 6 major Indian stocks included</li>
//                     </ul>
//                   </div>

//                   <div className="border-l-4 border-indigo-500 pl-4">
//                     <h4 className="font-semibold text-lg">Portfolio Tracking</h4>
//                     <ul className="text-sm text-gray-700 space-y-1 mt-2">
//                       <li>• View all your holdings</li>
//                       <li>• See profit/loss for each stock</li>
//                       <li>• Portfolio allocation chart</li>
//                       <li>• Total returns calculation</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Pro Tips for Success */}
//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">🏆 Pro Tips for Success</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
//                     <div className="bg-green-500 text-white p-2 rounded-full">
//                       <TrendingUp size={16} />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold">Start Small</h4>
//                       <p className="text-sm text-gray-700">Begin with small trades (1-5 shares) to understand how the system works before making larger investments.</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
//                     <div className="bg-blue-500 text-white p-2 rounded-full">
//                       <Target size={16} />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold">Watch the Patterns</h4>
//                       <p className="text-sm text-gray-700">Observe how stock prices move over time. Look for trends in the charts before making predictions.</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
//                     <div className="bg-purple-500 text-white p-2 rounded-full">
//                       <DollarSign size={16} />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold">Diversify Holdings</h4>
//                       <p className="text-sm text-gray-700">Don't put all money in one stock. Spread across different companies to reduce risk.</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
//                     <div className="bg-orange-500 text-white p-2 rounded-full">
//                       <Trophy size={16} />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold">Focus on Predictions</h4>
//                       <p className="text-sm text-gray-700">Make regular predictions to earn points. Even wrong predictions help you learn market behavior.</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
//                     <div className="bg-red-500 text-white p-2 rounded-full">
//                       <BookOpen size={16} />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold">Learn from Mentor</h4>
//                       <p className="text-sm text-gray-700">Read the AI mentor messages carefully. They contain valuable insights about your trades.</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
//                     <div className="bg-yellow-500 text-white p-2 rounded-full">
//                       <User size={16} />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold">Check Leaderboard</h4>
//                       <p className="text-sm text-gray-700">Regular check your ranking to stay motivated and see what returns other players are achieving.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Reference */}
//             <div className="bg-white rounded-xl p-6 card-shadow">
//               <h2 className="text-2xl font-bold mb-6">📝 Quick Reference Guide</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="bg-blue-50 p-4 rounded-lg">
//                   <h4 className="font-semibold text-blue-800 mb-2">Stock Symbols</h4>
//                   <ul className="text-sm space-y-1">
//                     <li>RELIANCE - Reliance Industries</li>
//                     <li>TCS - Tata Consultancy</li>
//                     <li>INFY - Infosys Limited</li>
//                     <li>HDFCBANK - HDFC Bank</li>
//                     <li>ICICIBANK - ICICI Bank</li>
//                     <li>BHARTIARTL - Bharti Airtel</li>
//                   </ul>
//                 </div>
                
//                 <div className="bg-green-50 p-4 rounded-lg">
//                   <h4 className="font-semibold text-green-800 mb-2">Key Metrics</h4>
//                   <ul className="text-sm space-y-1">
//                     <li><strong>Price:</strong> Current stock price</li>
//                     <li><strong>Change:</strong> Price difference from yesterday</li>
//                     <li><strong>Volume:</strong> Shares traded today</li>
//                     <li><strong>P/E:</strong> Price to Earnings ratio</li>
//                     <li><strong>Mkt Cap:</strong> Total company value</li>
//                   </ul>
//                 </div>

//                 <div className="bg-purple-50 p-4 rounded-lg">
//                   <h4 className="font-semibold text-purple-800 mb-2">Color Codes</h4>
//                   <ul className="text-sm space-y-1">
//                     <li><span className="text-green-600">Green:</span> Positive/Profit</li>
//                     <li><span className="text-red-600">Red:</span> Negative/Loss</li>
//                     <li><span className="text-blue-600">Blue:</span> Neutral/Info</li>
//                     <li><span className="text-yellow-600">Yellow:</span> Pending/Warning</li>
//                     <li><span className="text-gray-600">Gray:</span> Inactive</li>
//                   </ul>
//                 </div>

//                 <div className="bg-orange-50 p-4 rounded-lg">
//                   <h4 className="font-semibold text-orange-800 mb-2">Navigation</h4>
//                   <ul className="text-sm space-y-1">
//                     <li><strong>Dashboard:</strong> Overview</li>
//                     <li><strong>Predictions:</strong> Make predictions</li>
//                     <li><strong>Trading:</strong> Buy/Sell stocks</li>
//                     <li><strong>Portfolio:</strong> View holdings</li>
//                     <li><strong>Leaderboard:</strong> Rankings</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-lg border-b border-gray-200">
//         <div className=" w-full fixed px-6 bg-white">
//           <div className="flex items-center justify-between h-16 ">
//             <div className="flex items-center space-x-8">
//               <div className="flex  space-x-3 ">
//                 <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg ">
//                   <TrendingUp className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ">
//                     TradePro Simulator
//                   </h1>
//                   <p className="text-xs text-gray-500">Master the Markets</p>
//                 </div>
//               </div>

//               <div className="hidden md:flex space-x-1">
//                 {[
//                   { key: 'dashboard', label: 'Dashboard', icon: TrendingUp },
//                   { key: 'prediction', label: 'Predictions', icon: Target },
//                   { key: 'trading', label: 'Trading', icon: DollarSign },
//                   { key: 'portfolio', label: 'Portfolio', icon: User },
//                   { key: 'leaderboard', label: 'Leaderboard', icon: Trophy },
//                   { key: 'learning', label: 'Learning', icon: BookOpen }
//                 ].map(({ key, label, icon: Icon }) => (
//                   <button
//                     key={key}
//                     onClick={() => setActiveSection(key)}
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
//                       activeSection === key
//                         ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
//                         : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
//                     }`}
//                   >
//                     <Icon size={16} />
//                     <span className="text-sm font-medium">{label}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="text-right hidden md:block">
//                 <p className="text-sm text-gray-600">Total Portfolio</p>
//                 <p className="font-bold">₹{totalValue.toLocaleString()}</p>
//               </div>
//               <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg">
//                 <p className="text-xs">Level {user.level}</p>
//                 <p className="font-bold">{user.score} pts</p>
//               </div>
//               <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
//                 <Bell size={20} className="text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="container mx-auto px-6 py-8">
//         {renderSection()}
//       </main>

//       {/* Trading Mentor */}
//       <TradingMentor />

//       {/* Mobile Navigation */}
//       <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
//         <div className="flex justify-around">
//           {[
//             { key: 'dashboard', icon: TrendingUp },
//             { key: 'prediction', icon: Target },
//             { key: 'trading', icon: DollarSign },
//             { key: 'portfolio', icon: User },
//             { key: 'leaderboard', icon: Trophy }
//           ].map(({ key, icon: Icon }) => (
//             <button
//               key={key}
//               onClick={() => setActiveSection(key)}
//               className={`p-3 rounded-lg transition ${
//                 activeSection === key
//                   ? 'bg-blue-500 text-white'
//                   : 'text-gray-400 hover:text-gray-600'
//               }`}
//             >
//               <Icon size={20} />
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StockTradingSimulator;

import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Target, Trophy, BookOpen, User, Bell, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';

// Custom Candlestick Chart Component using SVG for single-file compatibility
const CandlestickChart = ({ data, selectedStock }) => {
  if (!data || data.length === 0) {
    return (
      <div className="h-80 flex items-center justify-center text-gray-500">
        No chart data available for {selectedStock.symbol}.
      </div>
    );
  }

  // Find min and max values for scaling the chart
  const prices = data.flatMap(d => [d.high, d.low]);
  const minPrice = Math.min(...prices) * 0.95;
  const maxPrice = Math.max(...prices) * 1.05;
  const priceRange = maxPrice - minPrice;

  const width = 800;
  const height = 300;
  const margin = { top: 20, right: 30, bottom: 20, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scaling functions
  const xScale = (index) => (index / (data.length - 1)) * chartWidth;
  const yScale = (price) => chartHeight - ((price - minPrice) / priceRange) * chartHeight;

  // Custom Tooltip state and logic
  const [tooltip, setTooltip] = useState(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - margin.left;
    const mouseY = e.clientY - rect.top - margin.top;

    if (mouseX >= 0 && mouseX <= chartWidth && mouseY >= 0 && mouseY <= chartHeight) {
      const closestIndex = Math.round((mouseX / chartWidth) * (data.length - 1));
      setTooltip({
        data: data[closestIndex],
        x: mouseX + margin.left,
        y: mouseY + margin.top,
      });
    } else {
      setTooltip(null);
    }
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div className="relative w-full overflow-x-auto">
      <div ref={containerRef} className="relative mx-auto" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ width: `${width}px`, height: `${height}px` }}>
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {/* Grid Lines */}
            <line x1="0" y1="0" x2="0" y2={chartHeight} stroke="#e5e7eb" strokeWidth="1" />
            <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="#e5e7eb" strokeWidth="1" />

            {/* Y-Axis Labels */}
            {[0, 0.25, 0.5, 0.75, 1].map(p => {
              const price = minPrice + p * priceRange;
              const y = yScale(price);
              return (
                <g key={y}>
                  <line x1="0" y1={y} x2={chartWidth} y2={y} stroke="#f3f4f6" strokeDasharray="3 3" />
                  <text x="-10" y={y} dy="5" textAnchor="end" fontSize="12" fill="#6b7280">{price.toFixed(2)}</text>
                </g>
              );
            })}

            {/* X-Axis Labels */}
            {data.filter((_, i) => i % Math.floor(data.length / 5) === 0).map((d, i) => (
              <text key={i} x={xScale(data.indexOf(d))} y={chartHeight + 15} textAnchor="middle" fontSize="12" fill="#6b7280">
                {d.date.substring(0, 5)}
              </text>
            ))}

            {/* Candlestick bars and wicks */}
            {data.map((d, i) => {
              const isBullish = d.close > d.open;
              const color = isBullish ? '#10b981' : '#ef4444';
              const x = xScale(i);
              const bodyY = yScale(Math.max(d.open, d.close));
              const bodyHeight = Math.abs(yScale(d.open) - yScale(d.close));
              const wickY1 = yScale(d.high);
              const wickY2 = yScale(d.low);

              return (
                <g key={i}>
                  {/* Wick */}
                  <line x1={x} y1={wickY1} x2={x} y2={wickY2} stroke={color} strokeWidth="1" />
                  {/* Body */}
                  <rect x={x - 4} y={bodyY} width="8" height={Math.max(bodyHeight, 1)} fill={color} />
                </g>
              );
            })}
          </g>
        </svg>

        {tooltip && (
          <div
            className="absolute p-2 bg-white rounded-lg shadow-md text-sm border border-gray-200 pointer-events-none"
            style={{ left: tooltip.x + 10, top: tooltip.y + 10 }}
          >
            <p className="font-semibold mb-1">{tooltip.data.date}</p>
            <p>Open: ₹{tooltip.data.open.toFixed(2)}</p>
            <p>High: ₹{tooltip.data.high.toFixed(2)}</p>
            <p>Low: ₹{tooltip.data.low.toFixed(2)}</p>
            <p>Close: ₹{tooltip.data.close.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const StockTradingSimulator = () => {
  // Core State Management
  const [user, setUser] = useState({
    name: 'Demo User',
    balance: 1000000,
    totalValue: 1000000,
    score: 0,
    level: 1,
    badges: []
  });

  const [activeSection, setActiveSection] = useState('dashboard');
  const [stocks, setStocks] = useState([
    { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2456.75, change: 2.34, changePercent: 0.095, volume: 1234567, pe: 24.5, marketCap: 1659000 },
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3678.90, change: -15.60, changePercent: -0.42, volume: 987654, pe: 28.7, marketCap: 1343000 },
    { symbol: 'INFY', name: 'Infosys Limited', price: 1456.20, change: 8.75, changePercent: 0.60, volume: 2345678, pe: 22.3, marketCap: 603000 },
    { symbol: 'HDFCBANK', name: 'HDFC Bank Limited', price: 1634.85, change: -5.25, changePercent: -0.32, volume: 1567890, pe: 19.8, marketCap: 900000 },
    { symbol: 'ICICIBANK', name: 'ICICI Bank Limited', price: 945.30, change: 12.40, changePercent: 1.33, volume: 3456789, pe: 16.5, marketCap: 665000 },
    { symbol: 'BHARTIARTL', name: 'Bharti Airtel Limited', price: 567.80, change: 3.20, changePercent: 0.57, volume: 4567890, pe: 45.2, marketCap: 304000 }
  ]);

  const [portfolio, setPortfolio] = useState([
    { symbol: 'RELIANCE', quantity: 10, avgPrice: 2400, currentPrice: 2456.75 },
    { symbol: 'TCS', quantity: 5, avgPrice: 3700, currentPrice: 3678.90 }
  ]);

  const [predictions, setPredictions] = useState([
    { id: 1, symbol: 'RELIANCE', prediction: 'UP', timeframe: 'Daily', result: 'WIN', points: 10, date: '2024-01-15' },
    { id: 2, symbol: 'TCS', prediction: 'DOWN', timeframe: 'Weekly', result: 'LOSS', points: -5, date: '2024-01-14' }
  ]);

  const [trades, setTrades] = useState([
    { id: 1, symbol: 'RELIANCE', type: 'BUY', quantity: 10, price: 2400, total: 24000, date: '2024-01-10', time: '10:30 AM' },
    { id: 2, symbol: 'TCS', type: 'BUY', quantity: 5, price: 3700, total: 18500, date: '2024-01-12', time: '02:15 PM' }
  ]);

  const [leaderboard] = useState([
    { rank: 1, name: 'Trading Master', returns: 45.6, portfolio: 1456000 },
    { rank: 2, name: 'Bull Rider', returns: 38.2, portfolio: 1382000 },
    { rank: 3, name: 'Demo User', returns: 12.3, portfolio: 1123000 },
    { rank: 4, name: 'Market Ninja', returns: 8.7, portfolio: 1087000 },
    { rank: 5, name: 'Stock Guru', returns: 6.4, portfolio: 1064000 }
  ]);

  const [selectedStock, setSelectedStock] = useState(stocks[0]);
  const [orderType, setOrderType] = useState('BUY');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [predictionStock, setPredictionStock] = useState(stocks[0]);
  const [predictionDirection, setPredictionDirection] = useState('UP');
  const [predictionTimeframe, setPredictionTimeframe] = useState('Daily');
  const [showTradingMentor, setShowTradingMentor] = useState(false);
  const [mentorMessage, setMentorMessage] = useState('');
  const [showAlert, setShowAlert] = useState({ show: false, message: '' });

  // Custom alert/message box
  const showMessageBox = (message) => {
    setShowAlert({ show: true, message });
    setTimeout(() => setShowAlert({ show: false, message: '' }), 3000);
  };

  // Candlestick chart data generation
  const generateCandleChartData = (symbol) => {
    const data = [];
    let basePrice = stocks.find(s => s.symbol === symbol)?.price || 100;
    
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      const open = basePrice * (1 + (Math.random() - 0.5) * 0.02);
      const close = open * (1 + (Math.random() - 0.5) * 0.04);
      const high = Math.max(open, close) * (1 + Math.random() * 0.02);
      const low = Math.min(open, close) * (1 - Math.random() * 0.02);

      data.push({
        date: date.toLocaleDateString(),
        open: Math.round(open * 100) / 100,
        high: Math.round(high * 100) / 100,
        low: Math.round(low * 100) / 100,
        close: Math.round(close * 100) / 100
      });
      basePrice = close;
    }
    return data;
  };

  const chartData = generateCandleChartData(selectedStock.symbol);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => 
        prevStocks.map(stock => {
          const change = (Math.random() - 0.5) * 20;
          const newPrice = Math.max(stock.price + change, stock.price * 0.9);
          const changePercent = ((newPrice - stock.price) / stock.price) * 100;
          return {
            ...stock,
            price: Math.round(newPrice * 100) / 100,
            change: Math.round(change * 100) / 100,
            changePercent: Math.round(changePercent * 100) / 100
          };
        })
      );

      // Update portfolio values
      setPortfolio(prevPortfolio => 
        prevPortfolio.map(holding => {
          const currentStock = stocks.find(s => s.symbol === holding.symbol);
          return {
            ...holding,
            currentPrice: currentStock?.price || holding.currentPrice
          };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [stocks]);

  // Trading Logic
  const executeTrade = () => {
    const stock = selectedStock;
    const total = stock.price * orderQuantity;
    
    if (orderType === 'BUY') {
      if (user.balance >= total) {
        setUser(prev => ({ ...prev, balance: prev.balance - total }));
        setPortfolio(prev => {
          const existing = prev.find(p => p.symbol === stock.symbol);
          if (existing) {
            const newQuantity = existing.quantity + orderQuantity;
            const newAvgPrice = ((existing.avgPrice * existing.quantity) + total) / newQuantity;
            return prev.map(p => 
              p.symbol === stock.symbol 
                ? { ...p, quantity: newQuantity, avgPrice: newAvgPrice, currentPrice: stock.price }
                : p
            );
          } else {
            return [...prev, {
              symbol: stock.symbol,
              quantity: orderQuantity,
              avgPrice: stock.price,
              currentPrice: stock.price
            }];
          }
        });
        
        setTrades(prev => [{
          id: prev.length + 1,
          symbol: stock.symbol,
          type: 'BUY',
          quantity: orderQuantity,
          price: stock.price,
          total: total,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString()
        }, ...prev]);

        showMentorTip(`Great buy! You've purchased ${orderQuantity} shares of ${stock.symbol} at ₹${stock.price}. Remember to diversify your portfolio and monitor the PE ratio (${stock.pe}).`);
      } else {
        showMessageBox('Insufficient balance!');
      }
    } else {
      const holding = portfolio.find(p => p.symbol === stock.symbol);
      if (holding && holding.quantity >= orderQuantity) {
        setUser(prev => ({ ...prev, balance: prev.balance + total }));
        setPortfolio(prev => 
          prev.map(p => 
            p.symbol === stock.symbol 
              ? { ...p, quantity: p.quantity - orderQuantity }
              : p
          ).filter(p => p.quantity > 0)
        );

        setTrades(prev => [{
          id: prev.length + 1,
          symbol: stock.symbol,
          type: 'SELL',
          quantity: orderQuantity,
          price: stock.price,
          total: total,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString()
        }, ...prev]);

        const profit = (stock.price - holding.avgPrice) * orderQuantity;
        showMentorTip(`Sold ${orderQuantity} shares of ${stock.symbol}. ${profit > 0 ? `Profit: ₹${profit.toFixed(2)}` : `Loss: ₹${Math.abs(profit).toFixed(2)}`}. ${profit > 0 ? 'Well done!' : 'Learn from this trade and analyze what went wrong.'}`);
      } else {
        showMessageBox('Insufficient shares to sell!');
      }
    }
  };

  // Prediction Logic
  const makePrediction = () => {
    const newPrediction = {
      id: predictions.length + 1,
      symbol: predictionStock.symbol,
      prediction: predictionDirection,
      timeframe: predictionTimeframe,
      result: 'PENDING',
      points: 0,
      date: new Date().toLocaleDateString()
    };

    setPredictions(prev => [newPrediction, ...prev]);
    
    // Simulate result after 3 seconds for demo
    setTimeout(() => {
      const isCorrect = Math.random() > 0.4; // 60% success rate for demo
      const points = isCorrect ? 10 : -5;
      
      setPredictions(prev => 
        prev.map(p => 
          p.id === newPrediction.id 
            ? { ...p, result: isCorrect ? 'WIN' : 'LOSS', points }
            : p
        )
      );

      setUser(prev => ({ 
        ...prev, 
        score: prev.score + points,
        level: Math.floor((prev.score + points) / 100) + 1
      }));

      showMentorTip(isCorrect 
        ? `Excellent prediction! You earned ${points} points. Your analysis skills are improving!`
        : `This prediction didn't work out, but that's part of learning. Analyze the market trends and try again!`
      );
    }, 3000);

    showMentorTip(`Prediction recorded! In ${predictionTimeframe.toLowerCase()} timeframe, you predict ${predictionStock.symbol} will go ${predictionDirection}. Let's see how it plays out!`);
  };

  const showMentorTip = (message) => {
    setMentorMessage(message);
    setShowTradingMentor(true);
    setTimeout(() => setShowTradingMentor(false), 5000);
  };

  // Calculate portfolio value
  const portfolioValue = portfolio.reduce((total, holding) => 
    total + (holding.currentPrice * holding.quantity), 0);
  
  const totalValue = user.balance + portfolioValue;
  const totalReturns = ((totalValue - 1000000) / 1000000) * 100;

  // UI Components
  const StockCard = ({ stock, onClick }) => (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl p-6 card-shadow cursor-pointer trading-card border-l-4 border-blue-500"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{stock.symbol}</h3>
          <p className="text-sm text-gray-600">{stock.name}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">₹{stock.price.toFixed(2)}</p>
          <p className={`flex items-center ${stock.change >= 0 ? 'profit' : 'loss'}`}>
            {stock.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            ₹{Math.abs(stock.change).toFixed(2)} ({Math.abs(stock.changePercent).toFixed(2)}%)
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-600">Volume</p>
          <p className="font-semibold">{(stock.volume / 1000000).toFixed(2)}M</p>
        </div>
        <div>
          <p className="text-gray-600">P/E Ratio</p>
          <p className="font-semibold">{stock.pe}</p>
        </div>
        <div>
          <p className="text-gray-600">Mkt Cap</p>
          <p className="font-semibold">₹{(stock.marketCap / 1000).toFixed(0)}K Cr</p>
        </div>
      </div>
    </div>
  );

  const TradingMentor = () => (
    showTradingMentor && (
      <div className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm z-50 animate-bounce-slow">
        <div className="flex items-start space-x-3">
          <div className="bg-white/20 p-2 rounded-full">
            <BookOpen size={24} />
          </div>
          <div>
            <h4 className="font-bold mb-2">Trading Mentor 🤖</h4>
            <p className="text-sm">{mentorMessage}</p>
          </div>
        </div>
      </div>
    )
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6  mt-10">
            {/* Portfolio Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Total Value</p>
                    <p className="text-3xl font-bold">₹{totalValue.toLocaleString()}</p>
                  </div>
                  <DollarSign size={32} />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 card-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Available Cash</p>
                    <p className="text-2xl font-bold">₹{user.balance.toLocaleString()}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <DollarSign className="text-green-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 card-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Total Returns</p>
                    <p className={`text-2xl font-bold ${totalReturns >= 0 ? 'profit' : 'loss'}`}>
                      {totalReturns >= 0 ? '+' : ''}{totalReturns.toFixed(2)}%
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${totalReturns >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                    {totalReturns >= 0 ? 
                      <TrendingUp className="text-green-600" size={24} /> : 
                      <TrendingDown className="text-red-600" size={24} />
                    }
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 card-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Score & Level</p>
                    <p className="text-2xl font-bold">{user.score} pts | L{user.level}</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Trophy className="text-yellow-600" size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Market Overview */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">Market Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stocks.map(stock => (
                  <StockCard key={stock.symbol} stock={stock} onClick={() => setSelectedStock(stock)} />
                ))}
              </div>
            </div>

            {/* Candlestick Chart */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">{selectedStock.symbol} Candlestick Chart</h2>
              <CandlestickChart data={chartData} selectedStock={selectedStock} />
            </div>
          </div>
        );

      case 'prediction':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">Make a Prediction</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"> 
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Stock</label>
                  <select 
                    value={predictionStock.symbol}
                    onChange={(e) => setPredictionStock(stocks.find(s => s.symbol === e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {stocks.map(stock => (
                      <option key={stock.symbol} value={stock.symbol}>{stock.symbol}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Direction</label>
                  <select 
                    value={predictionDirection}
                    onChange={(e) => setPredictionDirection(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="UP">📈 UP</option>
                    <option value="DOWN">📉 DOWN</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeframe</label>
                  <select 
                    value={predictionTimeframe}
                    onChange={(e) => setPredictionTimeframe(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Intraday">⏰ Intraday</option>
                    <option value="Daily">📅 Daily</option>
                    <option value="Weekly">📊 Weekly</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button 
                    onClick={makePrediction}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-green-600 hover:to-blue-700 transition duration-300 flex items-center justify-center space-x-2"
                  >
                    <Target size={20} />
                    <span>Predict</span>
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Current Analysis:</strong> {predictionStock.symbol} is trading at ₹{predictionStock.price} 
                  with a P/E ratio of {predictionStock.pe}. {predictionStock.change >= 0 ? 'Positive momentum' : 'Negative momentum'} 
                  with {Math.abs(predictionStock.changePercent).toFixed(2)}% change.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">Prediction History</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4">Stock</th>
                      <th className="text-left p-4">Prediction</th>
                      <th className="text-left p-4">Timeframe</th>
                      <th className="text-left p-4">Result</th>
                      <th className="text-left p-4">Points</th>
                      <th className="text-left p-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {predictions.map(prediction => (
                      <tr key={prediction.id} className="border-b">
                        <td className="p-4 font-semibold">{prediction.symbol}</td>
                        <td className="p-4">
                          <span className={`flex items-center ${prediction.prediction === 'UP' ? 'profit' : 'loss'}`}>
                            {prediction.prediction === 'UP' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                            {prediction.prediction}
                          </span>
                        </td>
                        <td className="p-4">{prediction.timeframe}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            prediction.result === 'WIN' ? 'bg-green-100 text-green-800' :
                            prediction.result === 'LOSS' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {prediction.result}
                          </span>
                        </td>
                        <td className={`p-4 font-bold ${prediction.points >= 0 ? 'profit' : 'loss'}`}>
                          {prediction.points > 0 ? '+' : ''}{prediction.points}
                        </td>
                        <td className="p-4 text-gray-600">{prediction.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'trading':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 card-shadow mt-10">
              <h2 className="text-2xl font-bold mb-6">Place Order</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Stock</label>
                  <select 
                    value={selectedStock.symbol}
                    onChange={(e) => setSelectedStock(stocks.find(s => s.symbol === e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {stocks.map(stock => (
                      <option key={stock.symbol} value={stock.symbol}>
                        {stock.symbol} - ₹{stock.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order Type</label>
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => setOrderType('BUY')}
                      className={`flex-1 py-3 px-6 rounded-lg font-semibold transition ${
                        orderType === 'BUY' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      BUY
                    </button>
                    <button 
                      onClick={() => setOrderType('SELL')}
                      className={`flex-1 py-3 px-6 rounded-lg font-semibold transition ${
                        orderType === 'SELL' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      SELL
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <input 
                    type="number"
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(parseInt(e.target.value) || 1)}
                    min="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Amount</label>
                  <div className="p-3 bg-gray-50 rounded-lg text-xl font-bold">
                    ₹{(selectedStock.price * orderQuantity).toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Stock Analysis</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Current Price</p>
                    <p className="font-semibold">₹{selectedStock.price}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Today's Change</p>
                    <p className={selectedStock.change >= 0 ? 'profit' : 'loss'}>
                      {selectedStock.change >= 0 ? '+' : ''}₹{selectedStock.change} ({selectedStock.changePercent}%)
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">P/E Ratio</p>
                    <p className="font-semibold">{selectedStock.pe}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Volume</p>
                    <p className="font-semibold">{(selectedStock.volume / 1000000).toFixed(1)}M</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={executeTrade}
                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 text-lg font-semibold"
              >
                {orderType} {orderQuantity} shares of {selectedStock.symbol}
              </button>
            </div>

            {/* Recent Trades */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">Recent Trades</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4">Stock</th>
                      <th className="text-left p-4">Type</th>
                      <th className="text-left p-4">Quantity</th>
                      <th className="text-left p-4">Price</th>
                      <th className="text-left p-4">Total</th>
                      <th className="text-left p-4">Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trades.map(trade => (
                      <tr key={trade.id} className="border-b">
                        <td className="p-4 font-semibold">{trade.symbol}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            trade.type === 'BUY' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {trade.type}
                          </span>
                        </td>
                        <td className="p-4">{trade.quantity}</td>
                        <td className="p-4">₹{trade.price}</td>
                        <td className="p-4 font-semibold">₹{trade.total.toLocaleString()}</td>
                        <td className="p-4 text-gray-600">{trade.date} {trade.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'portfolio':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Portfolio Value</h3>
                <p className="text-3xl font-bold">₹{portfolioValue.toLocaleString()}</p>
                <p className="text-green-100">Invested: ₹{portfolio.reduce((total, p) => total + (p.avgPrice * p.quantity), 0).toLocaleString()}</p>
              </div>

              <div className="bg-white rounded-xl p-6 card-shadow">
                <h3 className="text-lg font-semibold mb-2">Total P&L</h3>
                <p className={`text-3xl font-bold ${(portfolioValue - portfolio.reduce((total, p) => total + (p.avgPrice * p.quantity), 0)) >= 0 ? 'profit' : 'loss'}`}>
                  ₹{(portfolioValue - portfolio.reduce((total, p) => total + (p.avgPrice * p.quantity), 0)).toLocaleString()}
                </p>
                <p className="text-gray-600">Unrealized P&L</p>
              </div>

              <div className="bg-white rounded-xl p-6 card-shadow">
                <h3 className="text-lg font-semibold mb-2">Available Cash</h3>
                <p className="text-3xl font-bold">₹{user.balance.toLocaleString()}</p>
                <p className="text-gray-600">Ready to invest</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">Holdings</h2>
              {portfolio.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-4">Stock</th>
                        <th className="text-left p-4">Quantity</th>
                        <th className="text-left p-4">Avg Price</th>
                        <th className="text-left p-4">Current Price</th>
                        <th className="text-left p-4">Current Value</th>
                        <th className="text-left p-4">P&L</th>
                        <th className="text-left p-4">P&L %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {portfolio.map(holding => {
                        const currentValue = holding.currentPrice * holding.quantity;
                        const investedValue = holding.avgPrice * holding.quantity;
                        const pnl = currentValue - investedValue;
                        const pnlPercent = (pnl / investedValue) * 100;

                        return (
                          <tr key={holding.symbol} className="border-b">
                            <td className="p-4 font-semibold">{holding.symbol}</td>
                            <td className="p-4">{holding.quantity}</td>
                            <td className="p-4">₹{holding.avgPrice.toFixed(2)}</td>
                            <td className="p-4">₹{holding.currentPrice.toFixed(2)}</td>
                            <td className="p-4 font-semibold">₹{currentValue.toLocaleString()}</td>
                            <td className={`p-4 font-bold ${pnl >= 0 ? 'profit' : 'loss'}`}>
                              {pnl >= 0 ? '+' : ''}₹{pnl.toFixed(2)}
                            </td>
                            <td className={`p-4 font-bold ${pnl >= 0 ? 'profit' : 'loss'}`}>
                              {pnl >= 0 ? '+' : ''}{pnlPercent.toFixed(2)}%
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <DollarSign size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No Holdings Yet</h3>
                  <p className="text-gray-500 mb-6">Start trading to build your portfolio</p>
                  <button 
                    onClick={() => setActiveSection('trading')}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                  >
                    Start Trading
                  </button>
                </div>
              )}
            </div>

            {/* Portfolio Allocation Chart */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">Portfolio Allocation</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={portfolio.map(p => ({
                    symbol: p.symbol,
                    value: p.currentPrice * p.quantity
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="symbol" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Value']} />
                    <Bar dataKey="value" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );

      case 'leaderboard':
        return (
          <div className="space-y-6 mt-10">
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">Top Performers</h2>
              <div className="space-y-4">
                {leaderboard.map((player, index) => (
                  <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg ${
                    player.name === 'Demo User' ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'
                  }`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      index === 0 ? 'bg-yellow-400 text-yellow-900' :
                      index === 1 ? 'bg-gray-300 text-gray-700' :
                      index === 2 ? 'bg-orange-400 text-orange-900' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {index < 3 ? ['🥇', '🥈', '🥉'][index] : player.rank}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{player.name}</h3>
                      <p className="text-gray-600">Portfolio: ₹{player.portfolio.toLocaleString()}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${player.returns >= 0 ? 'profit' : 'loss'}`}>
                        +{player.returns}%
                      </p>
                      <p className="text-gray-600">Returns</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">Achievements & Badges</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-semibold">First Trade</h3>
                  <p className="text-xs opacity-90">Complete your first trade</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <h3 className="font-semibold">Profit Maker</h3>
                  <p className="text-xs opacity-90">Earn ₹10,000 profit</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg p-4 text-center opacity-50">
                  <div className="text-3xl mb-2">🚀</div>
                  <h3 className="font-semibold">High Roller</h3>
                  <p className="text-xs opacity-90">Portfolio value ₹15 lakh</p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white rounded-lg p-4 text-center opacity-50">
                  <div className="text-3xl mb-2">🎓</div>
                  <h3 className="font-semibold">Market Expert</h3>
                  <p className="text-xs opacity-90">Score 1000+ points</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">Weekly Challenge</h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">🎯 Predict Nifty 50 Closing Price</h3>
                <p className="text-gray-700 mb-4">Current Nifty 50: 21,456.78 | Your Prediction: ____</p>
                <div className="flex space-x-4">
                  <input 
                    type="number" 
                    placeholder="Enter your prediction"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                    Submit
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2">Winner gets 500 bonus points! Challenge ends Friday 6 PM.</p>
              </div>
            </div>
          </div>
        );

        case 'learning':
        return (
          <div className="space-y-6 mt-10">
            {/* Getting Started Guide */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-4">🚀 Welcome to TradePro Simulator!</h2>
              <p className="text-blue-100 mb-4">
                Learn stock trading risk-free with virtual money. Master the basics, build strategies, and compete with others!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">💰 Virtual Money</h3>
                  <p className="text-sm text-blue-100">Start with ₹10 lakh virtual cash</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">📊 Real Market Data</h3>
                  <p className="text-sm text-blue-100">Trade with live-like stock prices</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">🏆 Scoring System</h3>
                  <p className="text-sm text-blue-100">Earn points and climb levels</p>
                </div>
              </div>
            </div>

            {/* Step-by-Step Guide */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">📋 How to Play - Step by Step</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Start with Dashboard</h3>
                    <p className="text-gray-700 mb-2">View your portfolio overview, available cash (₹10,00,000), and market overview with 6 major Indian stocks.</p>
                    <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
                      <strong>Tip:</strong> Click on any stock card to view its price chart and details
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Make Your First Trade</h3>
                    <p className="text-gray-700 mb-2">Go to Trading section → Select a stock → Choose BUY/SELL → Enter quantity → Execute trade</p>
                    <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
                      <strong>Example:</strong> Buy 10 shares of RELIANCE at current market price
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Make Predictions for Points</h3>
                    <p className="text-gray-700 mb-2">Go to Predictions → Select stock → Predict UP/DOWN → Choose timeframe → Submit prediction</p>
                    <div className="text-sm text-purple-600 bg-purple-50 p-2 rounded">
                      <strong>Rewards:</strong> Correct prediction = +10 points, Wrong = -5 points
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Monitor Your Portfolio</h3>
                    <p className="text-gray-700 mb-2">Check Portfolio section to see your holdings, profits/losses, and overall performance</p>
                    <div className="text-sm text-orange-600 bg-orange-50 p-2 rounded">
                      <strong>Goal:</strong> Grow your portfolio value above ₹10 lakh to show positive returns
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <div className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Compete on Leaderboard</h3>
                    <p className="text-gray-700 mb-2">Check your ranking against other players based on portfolio returns and prediction accuracy</p>
                    <div className="text-sm text-yellow-600 bg-yellow-50 p-2 rounded">
                      <strong>Challenge:</strong> Try to reach top 3 position for maximum recognition
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Features */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">🎮 Game Features Explained</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg">Trading System</h4>
                    <ul className="text-sm text-gray-700 space-y-1 mt-2">
                      <li>• Real-time price updates every 5 seconds</li>
                      <li>• Buy/Sell at current market prices</li>
                      <li>• Track all your trade history</li>
                      <li>• Portfolio automatically updates values</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-lg">Prediction Game</h4>
                    <ul className="text-sm text-gray-700 space-y-1 mt-2">
                      <li>• Predict if stock will go UP or DOWN</li>
                      <li>• Choose timeframe: Intraday/Daily/Weekly</li>
                      <li>• Results appear within 3 seconds (demo)</li>
                      <li>• Earn/lose points based on accuracy</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg">Scoring System</h4>
                    <ul className="text-sm text-gray-700 space-y-1 mt-2">
                      <li>• Correct prediction: +10 points</li>
                      <li>• Wrong prediction: -5 points</li>
                      <li>• Level up every 100 points</li>
                      <li>• Unlock achievements and badges</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-lg">AI Trading Mentor</h4>
                    <ul className="text-sm text-gray-700 space-y-1 mt-2">
                      <li>• Provides tips after each trade</li>
                      <li>• Explains market concepts</li>
                      <li>• Gives feedback on predictions</li>
                      <li>• Appears automatically for 5 seconds</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-lg">Stock Information</h4>
                    <ul className="text-sm text-gray-700 space-y-1 mt-2">
                      <li>• Price, change %, volume data</li>
                      <li>• P/E ratio and market cap</li>
                      <li>• 30-day price charts</li>
                      <li>• 6 major Indian stocks included</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-lg">Portfolio Tracking</h4>
                    <ul className="text-sm text-gray-700 space-y-1 mt-2">
                      <li>• View all your holdings</li>
                      <li>• See profit/loss for each stock</li>
                      <li>• Portfolio allocation chart</li>
                      <li>• Total returns calculation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips for Success */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">🏆 Pro Tips for Success</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-500 text-white p-2 rounded-full">
                      <TrendingUp size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Start Small</h4>
                      <p className="text-sm text-gray-700">Begin with small trades (1-5 shares) to understand how the system works before making larger investments.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-500 text-white p-2 rounded-full">
                      <Target size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Watch the Patterns</h4>
                      <p className="text-sm text-gray-700">Observe how stock prices move over time. Look for trends in the charts before making predictions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                    <div className="bg-purple-500 text-white p-2 rounded-full">
                      <DollarSign size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Diversify Holdings</h4>
                      <p className="text-sm text-gray-700">Don't put all money in one stock. Spread across different companies to reduce risk.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                    <div className="bg-orange-500 text-white p-2 rounded-full">
                      <Trophy size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Focus on Predictions</h4>
                      <p className="text-sm text-gray-700">Make regular predictions to earn points. Even wrong predictions help you learn market behavior.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="bg-red-500 text-white p-2 rounded-full">
                      <BookOpen size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Learn from Mentor</h4>
                      <p className="text-sm text-gray-700">Read the AI mentor messages carefully. They contain valuable insights about your trades.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
                    <div className="bg-yellow-500 text-white p-2 rounded-full">
                      <User size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Check Leaderboard</h4>
                      <p className="text-sm text-gray-700">Regular check your ranking to stay motivated and see what returns other players are achieving.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Reference */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold mb-6">📝 Quick Reference Guide</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Stock Symbols</h4>
                  <ul className="text-sm space-y-1">
                    <li>RELIANCE - Reliance Industries</li>
                    <li>TCS - Tata Consultancy</li>
                    <li>INFY - Infosys Limited</li>
                    <li>HDFCBANK - HDFC Bank</li>
                    <li>ICICIBANK - ICICI Bank</li>
                    <li>BHARTIARTL - Bharti Airtel</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Key Metrics</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>Price:</strong> Current stock price</li>
                    <li><strong>Change:</strong> Price difference from yesterday</li>
                    <li><strong>Volume:</strong> Shares traded today</li>
                    <li><strong>P/E:</strong> Price to Earnings ratio</li>
                    <li><strong>Mkt Cap:</strong> Total company value</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Color Codes</h4>
                  <ul className="text-sm space-y-1">
                    <li><span className="text-green-600">Green:</span> Positive/Profit</li>
                    <li><span className="text-red-600">Red:</span> Negative/Loss</li>
                    <li><span className="text-blue-600">Blue:</span> Neutral/Info</li>
                    <li><span className="text-yellow-600">Yellow:</span> Pending/Warning</li>
                    <li><span className="text-gray-600">Gray:</span> Inactive</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Navigation</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>Dashboard:</strong> Overview</li>
                    <li><strong>Predictions:</strong> Make predictions</li>
                    <li><strong>Trading:</strong> Buy/Sell stocks</li>
                    <li><strong>Portfolio:</strong> View holdings</li>
                    <li><strong>Leaderboard:</strong> Rankings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className=" w-full fixed px-6 bg-white">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center space-x-8">
              <div className="flex  space-x-3 ">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg ">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ">
                    TradePro Simulator
                  </h1>
                  <p className="text-xs text-gray-500">Master the Markets</p>
                </div>
              </div>

              <div className="hidden md:flex space-x-1">
                {[
                  { key: 'dashboard', label: 'Dashboard', icon: TrendingUp },
                  { key: 'prediction', label: 'Predictions', icon: Target },
                  { key: 'trading', label: 'Trading', icon: DollarSign },
                  { key: 'portfolio', label: 'Portfolio', icon: User },
                  { key: 'leaderboard', label: 'Leaderboard', icon: Trophy },
                  { key: 'learning', label: 'Learning', icon: BookOpen }
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === key
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right hidden md:block">
                <p className="text-sm text-gray-600">Total Portfolio</p>
                <p className="font-bold">₹{totalValue.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg">
                <p className="text-xs">Level {user.level}</p>
                <p className="font-bold">{user.score} pts</p>
              </div>
              <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                <Bell size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {renderSection()}
      </main>

      {/* Trading Mentor */}
      <TradingMentor />

      {/* Custom Alert Message Box */}
      {showAlert.show && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50">
          {showAlert.message}
        </div>
      )}

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {[
            { key: 'dashboard', icon: TrendingUp },
            { key: 'prediction', icon: Target },
            { key: 'trading', icon: DollarSign },
            { key: 'portfolio', icon: User },
            { key: 'leaderboard', icon: Trophy }
          ].map(({ key, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`p-3 rounded-lg transition ${
                activeSection === key
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon size={20} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockTradingSimulator;
