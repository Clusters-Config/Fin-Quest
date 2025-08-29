// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast ,Slide ,Bounce} from 'react-toastify';

// function Signup() {
//   const [username, setusername] = useState();
//   const [email, setemail] = useState();
//   const [password, setpassword] = useState();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:4047/signup", { username, email, password })
//       .then((res) => {
//         if (res.status === 200) {
//           navigate("/login");
//           toast.success("Signup Successful")
//         }
//       })
//       .catch((err) => {
//         toast.error("User alredy exist")
//         console.log(err);
//       });
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-[#F8FAFC]">
//       <div className="w-[400px] bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
//         {/* Main section for login or signup */}
//         <div className="w-full">
//           <div className="flex flex-col items-center w-full">
//             <form onSubmit={handleSubmit}>
//               <h2 className="text-2xl font-bold text-[#002147] mb-4">
//                 Create Your Account
//               </h2>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full py-2 px-4 mb-3 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]"
//                 onChange={(e) => setusername(e.target.value)}
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full py-2 px-4 mb-3 mt-1 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]"
//                 onChange={(e) => setemail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full py-2 px-4 mt-1 mb-3 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]"
//                 onChange={(e) => setpassword(e.target.value)}
//               />
//               <button
//                 className="w-full py-3 mt-1  text-lg font-bold text-white bg-[#F39C12] rounded-lg cursor-pointer hover:bg-[#e68912] transition-colors duration-300"
//                 type="submit"
//               >
//                 Sign Up
//               </button>
//               <ToastContainer  transition={Bounce}/>
//               <h2 className="mt-3 text-sm text-[#002147] text-center">
//                 Already an User!
//                 <a href="/login"> Sign In</a>
//               </h2>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/fin-logo.jpg"; // FinQuest Logo

function Signup() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const[role, setrole] = useState('Student')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4047/signup", { username, email, password , role})
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
          toast.success("Signup Successful 🎉");
        }
      })
      .catch((err) => {
        toast.error("User already exists ❌");
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#043927] via-[#064f38] to-[#022d1f] px-6">
      
      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 w-full max-w-5xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left Side - Branding */}
        <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-b from-[#024d36] to-[#013322] text-white">
          <img
            src={logo}
            alt="FinQuest Logo"
            className="w-32 h-32 mb-6 drop-shadow-lg rounded-full border-4 border-white/30"
          />
          <h2 className="text-4xl font-extrabold mb-4 text-center">
            Welcome to <span className="text-[#F39C12]">FinQuest</span>
          </h2>
          <p className="text-gray-200 text-center max-w-sm leading-relaxed">
            Master finance with engaging <span className="font-semibold">quizzes, games & simulations</span>. 
            Your journey to becoming a financial pro starts here.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#1B2838] mb-6 text-center">
            Create Your Account
          </h3>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full py-3 px-4 rounded-xl text-gray-800 text-base 
                         border border-gray-300 focus:border-[#F39C12] 
                         bg-white/80 shadow-sm outline-none transition"
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 px-4 rounded-xl text-gray-800 text-base 
                         border border-gray-300 focus:border-[#F39C12] 
                         bg-white/80 shadow-sm outline-none transition"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 px-4 rounded-xl text-gray-800 text-base 
                         border border-gray-300 focus:border-[#F39C12] 
                         bg-white/80 shadow-sm outline-none transition"
              onChange={(e) => setpassword(e.target.value)}
            />

            <select
              className="w-full py-3 px-4 rounded-xl text-gray-800 text-base 
                         border border-gray-300 focus:border-[#F39C12] 
                         bg-white/80 shadow-sm outline-none transition"
              defaultValue="Student"
              value={role}

              onChange={(e)=>setrole(e.target.value)}
            >
              <option value="Student">Student</option>
              <option value="Financial-Analyst">Financial Analyst</option>
              <option value="Investment-Banker">Investment Banker</option>
              <option value="Risk-Manager">Risk Manager</option>
              <option value="Financial-Software-Developer">Financial Software Developer</option>
              <option value="Quantitative-Analyst">Quantitative Analyst</option>
              <option value="Accountant">Accountant</option>
              <option value="Other">Other</option>

            </select>

            {/* CTA */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-bold text-white 
                         bg-gradient-to-r from-[#F39C12] to-[#e67e22] 
                         rounded-xl cursor-pointer hover:scale-[1.02] 
                         transition transform duration-300 shadow-lg"
            >
              Sign Up
            </button>

            <ToastContainer transition={Bounce} />

            {/* Secondary Link */}
            <p className="mt-6 text-sm text-gray-700 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-[#F39C12] font-semibold hover:underline">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
