// function Homepage() {
//     return (
//         <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex flex-col justify-center items-center">
//           <div className="text-center space-y-8">
//             <h1 className="text-5xl font-extrabold text-blue-800 animate-pulse">
//               Welcome to FinQuest!
//             </h1>
//             <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto">
//               Embark on your journey to financial literacy through interactive paths
//               and AI-driven insights.
//             </p>
    
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <a
//                 href="personalized-path.html"
//                 className="card-hover block bg-green-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 text-center"
//               >
//                 Personalized Learning Path
//               </a>
//               <a
//                 href="gamification.html"
//                 className="card-hover block bg-yellow-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 text-center"
//               >
//                 Gamification Adventure
//               </a>
//               <a
//                 href="simulation.html"
//                 className="card-hover block bg-blue-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 text-center"
//               >
//                 Real World Simulation
//               </a>
//               <a
//                 href="ai-insights.html"
//                 className="card-hover block bg-purple-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-purple-600 transform hover:scale-105 transition-all duration-300 text-center"
//               >
//                 AI-Driven Insights
//               </a>
//               <a
//                 href="social-engagement.html"
//                 className="card-hover block bg-red-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 text-center"
//               >
//                 Community Engagement
//               </a>
//               <a
//                 href="facilitator.html"
//                 className="card-hover block bg-indigo-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-indigo-600 transform hover:scale-105 transition-all duration-300 text-center"
//               >
//                 Facilitator
//               </a>
//             </div>
//           </div>
//         </div>
//       );
// }

// export default Homepage;

function Homepage() {
  return (
      <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-indigo-400 to-purple-500 animate-gradient-x opacity-50"></div>

          {/* Floating Decorations */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full filter blur-xl opacity-70 animate-float" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-green-400 rounded-full filter blur-2xl opacity-50 animate-float-slow" />
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-pink-500 rounded-full filter blur-md opacity-60 animate-float-fast" />

          <div className="relative text-center space-y-8">
              <h1 className="text-5xl font-extrabold text-black animate-pulse drop-shadow-md">
                  Welcome to FinQuest!
              </h1>
              <p className="text-lg text-gray-100 leading-relaxed max-w-lg mx-auto">
                  Embark on your journey to financial literacy through interactive paths
                  and AI-driven insights.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a
                      href="personalized-path.html"
                      className="card-hover block bg-green-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all duration-300 text-center"
                  >
                      Personalized Learning Path
                  </a>
                  <a
                      href="gamification.html"
                      className="card-hover block bg-yellow-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-yellow-600 transform hover:scale-110 transition-all duration-300 text-center"
                  >
                      Gamification Adventure
                  </a>
                  <a
                      href="simulation.html"
                      className="card-hover block bg-blue-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-110 transition-all duration-300 text-center"
                  >
                      Real World Simulation
                  </a>
                  <a
                      href="ai-insights.html"
                      className="card-hover block bg-purple-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-purple-600 transform hover:scale-110 transition-all duration-300 text-center"
                  >
                      AI-Driven Insights
                  </a>
                  <a
                      href="social-engagement.html"
                      className="card-hover block bg-red-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-red-600 transform hover:scale-110 transition-all duration-300 text-center"
                  >
                      Community Engagement
                  </a>
                  <a
                      href="facilitator.html"
                      className="card-hover block bg-indigo-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-indigo-600 transform hover:scale-110 transition-all duration-300 text-center"
                  >
                      Facilitator
                  </a>
              </div>
          </div>
      </div>
  );
}

export default Homepage;




