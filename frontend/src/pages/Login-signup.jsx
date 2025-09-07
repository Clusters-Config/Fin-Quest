// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";
// import { ToastContainer, toast  ,Bounce} from 'react-toastify';

// function Login_signup() {
//   const [email,setemail] = useState();
//       const [password,setpassword] = useState();
//       const { login, setLogin, useremail , setuseremail } = useAuth();
//       const navigate = useNavigate();
//       axios.defaults.withCredentials = true;
//       let valid = false;
//       let navi = true;

//       const handleSubmit = async(e) =>{

//         e.preventDefault()

//          await axios.post("https://fin-quest-y9ub.onrender.com/login",{email,password})
//         .then(res=>{
//           valid = res.data.valid
//           if(valid){
//             navigate("/login");
//              navi = false;
//              toast.error('Email or password incorrect',{
//              });
//             // alert("Email or password incorrect")
//           }   
//         })
//         await axios.post("https://fin-quest-y9ub.onrender.com/finduser", { email : email } )
//         .then(user=>{
//           let mail = user.data.user.email
//           setuseremail(mail)
//          }
//         )
//         if(navi){
//           navigate("/") 
//         }
//       }

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-[#F8FAFC]">
//       <div className="w-[400px] bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
//         <div className="w-full">
//           <form onSubmit={handleSubmit}>
//             <div className="flex flex-col items-center w-full">
//               <h2 className="text-2xl font-bold text-[#002147] mb-4">
//                 Welcome Back!
//               </h2>
//               <input
//                 type="text"
//                 placeholder="Email"
//                 className="w-full py-2 px-4 mt-1 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]"
//                 onChange={(e) => setemail(e.target.value)}
//               />
//               <br />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full py-2 px-4 mb-4 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]"
//                 onChange={(e) => setpassword(e.target.value)}
//               />
//               <div className="w-full flex justify-between items-center mb-3">
//                 <label className="flex items-center space-x-2 text-lg text-[#6C757D]">
//                   <input type="checkbox" />
//                   <span>Remember me</span>
//                 </label>
//                 <a href="#" className="text-[#F39C12] text-sm">
//                   Forgot password?
//                 </a>
//               </div>
//               <button
//                 className="w-full py-3 text-lg font-bold text-white bg-[#F39C12] rounded-lg cursor-pointer hover:bg-[#e68912] transition-colors duration-300"
//                 type="submit"
//               >
//                 Login
//               </button>
//               <ToastContainer  transition={Bounce}/>
//               <h2 className="mt-3 text-sm text-[#002147]">
//                 New User? 
//                 <a href="signup"> Create one</a>
//               </h2>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login_signup;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/fin-logo.jpg"; // FinQuest Logo

function Login_signup() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const { setuseremail } = useAuth();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  let valid = false;
  let navi = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("https://fin-quest-y9ub.onrender.com/login", { email, password }, {
        withCredentials: true
      })
      .then((res) => {
        console.log(res)
        valid = res.data.valid;
        axios.get("https://fin-quest-y9ub.onrender.com/verify", { withCredentials: true })
          .then(res => {
            toast.success('Login Successful', {
              position: "top-right",
              autoClose: 2000,});
            if (!res.data.lastname) {
              navigate('/Profile')
            }


          })

      });

    await axios
      .post("https://fin-quest-y9ub.onrender.com/finduser", { email: email }, { withCredentials: true })
      .then((user) => {
        let mail = user.data.user.email;
        setuseremail(mail);
      });

    if (navi) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#043927] via-[#064f38] to-[#022d1f] px-6">
      <ToastContainer transition={Bounce} />

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
            Welcome Back to <span className="text-[#F39C12]">FinQuest</span>
          </h2>
          <p className="text-gray-200 text-center max-w-sm leading-relaxed">
            Login to continue your journey of mastering finance through{" "}
            <span className="font-semibold">quizzes, games & simulations</span>.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#1B2838] mb-6 text-center">
            Login to Your Account
          </h3>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
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

            {/* Remember me + Forgot password */}
            <div className="w-full flex justify-between items-center mb-2 text-sm text-gray-700">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-[#F39C12]" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-[#F39C12] hover:underline">
                Forgot password?
              </a>
            </div>

            {/* CTA */}
            <button
              className="w-full py-3 text-lg font-bold text-white 
                         bg-gradient-to-r from-[#F39C12] to-[#e67e22] 
                         rounded-xl cursor-pointer hover:scale-[1.02] 
                         transition transform duration-300 shadow-lg"
              type="submit"
            >
              Login
            </button>


            {/* Secondary Link */}
            <p className="mt-6 text-sm text-gray-700 text-center">
              New User?{" "}
              <a href="/signup" className="text-[#F39C12] font-semibold hover:underline">
                Create one
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login_signup;
