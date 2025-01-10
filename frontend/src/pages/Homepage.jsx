function Homepage() {
  return (
    <div className="bg-gradient-to-b from-[#457B9D] to-[#A8DADC] min-h-screen flex flex-col justify-between">
      {/* Navigation Bar */}
      <nav className="bg-[#FFFFFF] shadow-lg px-6 py-4 flex justify-between items-center">
        <div className="text-[#1D3557] text-2xl font-bold">FinQuest</div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-[#6C757D] hover:text-[#1D3557] transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#6C757D] hover:text-[#1D3557] transition duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#6C757D] hover:text-[#1D3557] transition duration-300"
            >
              Contact
            </a>
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
        <button className="bg-[#457B9D] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#74C2E1] transition duration-300">
          Get Started
        </button>
      </header>


      {/* Footer */}
      <footer className="bg-[#F1FAEE] text-[#1D3557] py-4 text-center">
        <div className="flex justify-center space-x-6">
          {/* <a href="#" className="hover:opacity-80 transition duration-300">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#" className="hover:opacity-80 transition duration-300">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="hover:opacity-80 transition duration-300">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a> */}
        </div>
        <p className="mt-4">&copy; 2025 FinQuest. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;