import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Import profile icon

function Homepage() {
  return (
    <div className="bg-gradient-to-b from-[#457B9D] to-[#A8DADC] min-h-screen flex flex-col justify-between">
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
              to="/login"
              className="text-[#6C757D] hover:text-[#1D3557] transition duration-300"
            >
              Login
            </Link>
          </li>
          <li>
            {/* Profile Icon */}
            <Link
              to="/components/ProfilePage"
              className="text-[#6C757D] hover:text-[#1D3557] transition duration-300">
              <FaUserCircle size={24} /> {/* Profile icon */}
            </Link>

          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 space-y-6">
        <h1 className="text-5xl font-bold text-[#1D3557]">
          Welcome to FinQuest!
        </h1>
        <p className="text-lg text-[#1D1616] leading-relaxed max-w-3xl mx-auto">
          Embark on your journey to financial literacy through interactive
          paths and AI-driven insights.
        </p>
        <Link to="/features">
          <button className="bg-[#457B9D] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#74C2E1] transition duration-300">
            Get Started
          </button>
        </Link>
      </header>

      {/* Footer */}
      <footer className="bg-[#F1FAEE] text-[#1D3557] py-4 text-center">
        <p className="mt-4">&copy; 2025 FinQuest. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
