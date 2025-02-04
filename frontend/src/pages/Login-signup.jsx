import { useState } from 'react';

function Login_signup() {
  const [isLogin, setIsLogin] = useState();

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F8FAFC]">
      <div className="w-[400px] bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        {/* Main section for login or signup */}
        <div className="w-full">
          {isLogin ? (
            <div className="flex flex-col items-center w-full">
              <h2 className="text-2xl font-bold text-[#002147] mb-4">Welcome Back!</h2>
              <input type="text" placeholder="Email" className="w-full py-2 px-4 mt-1 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]" />
              <br />
              <input type="password" placeholder="Password" className="w-full py-2 px-4 mb-4 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]" />
              <div className="w-full flex justify-between items-center mb-3">
                <label className="flex items-center space-x-2 text-lg text-[#6C757D]">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-[#F39C12] text-sm">Forgot password?</a>
              </div>
              <button className="w-full py-3 text-lg font-bold text-white bg-[#F39C12] rounded-lg cursor-pointer hover:bg-[#e68912] transition-colors duration-300">
                Login
              </button >
              <h2 className="mt-3 text-sm text-[#002147]">No Account?
              <a href="#"  onClick={handleSignupClick}> Create one</a>
              </h2>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full">
              <h2 className="text-2xl font-bold text-[#002147] mb-4">Create Your Account</h2>
              <input type="text" placeholder="Username" className="w-full py-2 px-4 mb-3 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]" />
              <input type="email" placeholder="Email" className="w-full py-2 px-4 mb-3 mt-1 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]" />
              <input type="password" placeholder="Password" className="w-full py-2 px-4 mt-1 mb-3 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]" />
              <button className="w-full py-3 mt-1  text-lg font-bold text-white bg-[#F39C12] rounded-lg cursor-pointer hover:bg-[#e68912] transition-colors duration-300">
                Sign Up
              </button>
              <h2 className="mt-3 text-sm text-[#002147]">Already an User!  
              <a href="#"  onClick={handleLoginClick}> Sign In</a>
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login_signup;
