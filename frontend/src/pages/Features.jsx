import { Link } from "react-router-dom";

function FeaturesPage() {
  return (
    <div className="bg-gradient-to-b from-[#A8DADC] to-[#FFFFFF] min-h-screen flex flex-col justify-between">
      {/* Navigation Bar */}
      <nav className="bg-[#FFFFFF] shadow-lg px-6 py-4 flex justify-between items-center">
        <div className="text-[#1D3557] text-2xl font-bold">FinQuest</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-[#6C757D] hover:text-[#1D3557] transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="text-[#6C757D] hover:text-[#1D3557] transition duration-300"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-[#6C757D] hover:text-[#1D3557] transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10 max-w-5xl mx-auto">
        <Link
          to="/Learning_paths"
          className="block bg-[#A8DADC] text-[#1D3557] py-4 px-8 rounded-lg shadow-lg hover:bg-[#74C2E1] hover:scale-105 transform transition duration-300 text-center"
        >
          Personalized Learning Path
        </Link>
        <Link
          to="/Game"
          className="block bg-[#F1FAEE] text-[#1D3557] py-4 px-8 rounded-lg shadow-lg hover:bg-[#74C2E1] hover:scale-105 transform transition duration-300 text-center"
        >
          Gamification Adventure
        </Link>
        <Link
          to="/Simulations"
          className="block bg-[#457B9D] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#74C2E1] hover:scale-105 transform transition duration-300 text-center"
        >
          Real World Simulation
        </Link>
        <Link
          to="/Chat"
          className="block bg-[#1D3557] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#74C2E1] hover:scale-105 transform transition duration-300 text-center"
        >
          AI-Driven Insights
        </Link>
        <Link
          to="/Communitys"
          className="block bg-[#F1FAEE] text-[#1D3557] py-4 px-8 rounded-lg shadow-lg hover:bg-[#74C2E1] hover:scale-105 transform transition duration-300 text-center"
        >
          Community Engagement
        </Link>
        <Link
          to="/Facilitators"
          className="block bg-[#A8DADC] text-[#1D3557] py-4 px-8 rounded-lg shadow-lg hover:bg-[#74C2E1] hover:scale-105 transform transition duration-300 text-center"
        >
          Facilitators
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#F1FAEE] text-[#1D3557] py-4 text-center">
        {/* <div className="flex justify-center space-x-6">
          <a href="#" className="hover:opacity-80 transition duration-300">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#" className="hover:opacity-80 transition duration-300">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="hover:opacity-80 transition duration-300">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div> */}
        <p className="mt-4">&copy; 2025 FinQuest. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default FeaturesPage;