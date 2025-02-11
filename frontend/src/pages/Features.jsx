import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';  // Import the Home icon from react-icons

function FeaturesPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      

      {/* Navigation Bar */}
      <nav className="bg-[#002147] shadow-lg px-6 py-4 flex justify-between items-center">
        <div className="text-[#F39C12] text-2xl font-bold">FinQuest</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-[#F39C12] transition duration-300"
            >
              <FaHome className="w-6 h-6 inline-block" /> {/* Display the home icon */}
            </Link>
          </li>
        </ul>
      </nav>


      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10 max-w-5xl mx-auto mt-20"> {/* Increased margin-top */}
        <Link
          to="/Learning_paths"
          className="block bg-[#F39C12] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#e67e22] hover:scale-105 transform transition duration-300 text-center"
        >
          Personalized Learning Path
        </Link>
        <Link
          to="/Game"
          className="block bg-[#002147] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#1F4068] hover:scale-105 transform transition duration-300 text-center"
        >
          Gamification Adventure
        </Link>
        <Link
          to="/Simulations"
          className="block bg-[#F39C12] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#1F4068] hover:scale-105 transform transition duration-300 text-center"
        >
          Real World Simulation
        </Link>
        <Link
          to="/Chat"
          className="block bg-[#002147] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#e67e22] hover:scale-105 transform transition duration-300 text-center"
        >
          AI-Driven Insights
        </Link>
        <Link
          to="/Communitys"
          className="block bg-[#F39C12] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#1F4068] hover:scale-105 transform transition duration-300 text-center"
        >
          Community Engagement
        </Link>
        <Link
          to="/TaxPage"
          className="block bg-[#002147] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#1F4068] hover:scale-105 transform transition duration-300 text-center"
        >
          Taxes
        </Link>
        <Link
          to="/Stories"
          className="block bg-[#F39C12] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#1F4068] hover:scale-105 transform transition duration-300 text-center"
        >
          Financial Journeys
        </Link>
        <Link
          to="/FinFlux"
          className="block bg-[#002147] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#1F4068] hover:scale-105 transform transition duration-300 text-center"
        >
          FinFlux
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#002147] text-white py-4 text-center mt-auto">
        <p className="mt-4">&copy; 2025 FinQuest. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default FeaturesPage;
