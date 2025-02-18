import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ToastContainer, toast  ,Bounce} from 'react-toastify';

function Login_signup() {
  const [email,setemail] = useState();
      const [password,setpassword] = useState();
      const { login, setLogin, useremail , setuseremail } = useAuth();
      const navigate = useNavigate();
      axios.defaults.withCredentials = true;
      let valid = false;
      let navi = true;
      
      const handleSubmit = async(e) =>{
       
        e.preventDefault()
        
         await axios.post("http://localhost:4047/login",{email,password})
        .then(res=>{
          valid = res.data.valid
          if(valid){
            navigate("/login");
             navi = false;
             toast.error('Email or password incorrect',{
             });
            // alert("Email or password incorrect")
          }   
        })
        await axios.post("http://localhost:4047/finduser", { email : email } )
        .then(user=>{
          let mail = user.data.user.email
          setuseremail(mail)
         }
        )
        if(navi){
          navigate("/") 
        }
      }
 
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F8FAFC]">
      <div className="w-[400px] bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center w-full">
              <h2 className="text-2xl font-bold text-[#002147] mb-4">
                Welcome Back!
              </h2>
              <input
                type="text"
                placeholder="Email"
                className="w-full py-2 px-4 mt-1 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]"
                onChange={(e) => setemail(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                className="w-full py-2 px-4 mb-4 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]"
                onChange={(e) => setpassword(e.target.value)}
              />
              <div className="w-full flex justify-between items-center mb-3">
                <label className="flex items-center space-x-2 text-lg text-[#6C757D]">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-[#F39C12] text-sm">
                  Forgot password?
                </a>
              </div>
              <button
                className="w-full py-3 text-lg font-bold text-white bg-[#F39C12] rounded-lg cursor-pointer hover:bg-[#e68912] transition-colors duration-300"
                type="submit"
              >
                Login
              </button>
              <ToastContainer  transition={Bounce}/>
              <h2 className="mt-3 text-sm text-[#002147]">
                New User? 
                <a href="signup"> Create one</a>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login_signup;
