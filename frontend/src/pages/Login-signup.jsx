import React, { useState } from 'react';

function Login_signup() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#86A788] to-[#FFFDEC]">
      <div className="w-[400px] bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        {/* Navigation buttons */}
        {/* <div className="w-full flex gap-2 mb-6">
          <button
            className={`flex-1 py-3 text-lg font-bold text-center border-2 rounded-lg cursor-pointer transition-colors duration-300 ${
              isLogin ? 'bg-[#508D4E] text-white' : 'bg-white text-[#508D4E]'
            }`}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className={`flex-1 py-3 text-lg font-bold text-center border-2 rounded-lg cursor-pointer transition-colors duration-300 ${
              !isLogin ? 'bg-[#508D4E] text-white' : 'bg-white text-[#508D4E]'
            }`}
            onClick={handleSignupClick}
          >
            Sign Up
          </button>
        </div> */}

        {/* Main section for login or signup */}
        <div className="w-full">
          {isLogin ? (
            <div className="flex flex-col items-center w-full">
              <h2 className="text-2xl font-bold text-[#508D4E] mb-4">Welcome Back!</h2>
              <input type="text" placeholder="Username" className="w-full py-2 px-4 mb-3 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#508D4E]" />
              <br />
              <input type="password" placeholder="Password" className="w-full py-2 px-4 mb-3 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#508D4E]" />
              <div className="w-full flex justify-between items-center mb-3">
                <label className="flex items-center space-x-2 text-lg">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-[#508D4E] text-sm">Forgot password?</a>
              </div>
              <button className="w-full py-3 text-lg font-bold text-white bg-[#508D4E] rounded-lg cursor-pointer hover:bg-[#376936] transition-colors duration-300">
                Login
              </button>
              <a href="#" className="mt-3 text-sm text-[#508D4E]" onClick={handleSignupClick}>No Account? Create one</a>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full">
              <h2 className="text-2xl font-bold text-[#508D4E] mb-4">Create Your Account</h2>
              <input type="email" placeholder="Email" className="w-full py-2 px-4 mb-3 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#508D4E]" />
              <input type="text" placeholder="Username" className="w-full py-2 px-4 mb-3 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#508D4E]" />
              <input type="password" placeholder="Password" className="w-full py-2 px-4 mb-3 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#508D4E]" />
              <button className="w-full py-3 text-lg font-bold text-white bg-[#508D4E] rounded-lg cursor-pointer hover:bg-[#376936] transition-colors duration-300">
                Sign Up
              </button>
              <a href="#" className="mt-3 text-sm text-[#508D4E]" onClick={handleLoginClick}>Already an User ! Sign In</a>


            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login_signup;
