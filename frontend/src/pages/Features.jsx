import { Link } from "react-router-dom";
import { FaBook, FaGamepad, FaChartLine, FaRobot, FaUsers, FaCalculator, FaRoute, FaNewspaper, FaBriefcase } from "react-icons/fa"; 

function FeaturesPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      
      {/* Navigation Bar */}
      <nav className="bg-[#002147] shadow-lg px-6 py-4 flex justify-between items-center">
        <div className="text-[#6A5ACD] text-2xl font-bold">Finance Fusion Paths</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-[#6A5ACD] transition duration-300"
            >
              <FaBook className="w-6 h-6 inline-block" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Title & Subtitle */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-semibold text-[#6A5ACD]">Finance Fusion Paths</h1>
        <p className="text-gray-600 mt-2">
          Your all-in-one platform for mastering personal finance through interactive learning and real-world applications.
        </p>
      </div>

      {/* Features Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-10 max-w-6xl mx-auto">
        {[ 
          { path: "/Learning_paths", label: "Learning Path", desc: "Master financial concepts through structured learning paths", icon: <FaBook className="text-blue-500 w-8 h-8" /> },
          { path: "/Game", label: "Gamification", desc: "Learn while earning points and badges", icon: <FaGamepad className="text-purple-500 w-8 h-8" /> },
          { path: "/Simulations", label: "Real World Simulation", desc: "Practice with real market scenarios", icon: <FaChartLine className="text-green-500 w-8 h-8" /> },
          { path: "/Chat", label: "AI Driven", desc: "Get personalized financial insights powered by AI", icon: <FaRobot className="text-red-500 w-8 h-8" /> },
          { path: "/Communitys", label: "Community", desc: "Connect with fellow finance enthusiasts", icon: <FaUsers className="text-yellow-500 w-8 h-8" /> },
          { path: "/TaxPage", label: "Taxes", desc: "Understand and optimize your tax planning", icon: <FaCalculator className="text-pink-500 w-8 h-8" /> },
          { path: "/Stories", label: "Financial Journeys", desc: "Track your progress and set financial goals", icon: <FaRoute className="text-blue-500 w-8 h-8" /> },
          { path: "/FinFlux", label: "FinFlux", desc: "Stay updated with market trends and analysis", icon: <FaNewspaper className="text-orange-500 w-8 h-8" /> },
          { path: "/SideHustleFinder", label: "Side Hustle", desc: "Discover and manage additional income streams", icon: <FaBriefcase className="text-teal-500 w-8 h-8" /> }
        ].map((feature) => (
          <Link
            key={feature.path}
            to={feature.path}
            className="block bg-white text-black py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 text-center border border-gray-300"
          >
            <div className="flex flex-col items-center">
              {feature.icon}
              <h2 className="text-lg font-semibold mt-3">{feature.label}</h2>
              <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
              <div className="mt-4 flex justify-center items-center gap-4">
                {/* This will make all buttons align horizontally */}
                <button className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300 text-sm">
                  Explore {feature.label}
                </button>
                 
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-[#002147] text-white py-4 text-center mt-auto">
        <p>&copy; 2025 Finance Fusion Paths. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default FeaturesPage;
