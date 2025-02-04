import { useState } from 'react';
import axios from "axios";

function Signup() {

    const[username, setusername] = useState();
    const[email, setemail] = useState();
    const[password, setpassword] = useState();

    const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post("http://127.0.0.1:3004/signup",{username,email,password})
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
  

    return (
  
      <div className="min-h-screen flex justify-center items-center bg-[#F8FAFC]">
        <div className="w-[400px] bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          {/* Main section for login or signup */}
           <div className="w-full">
            <div className="flex flex-col items-center w-full">
                
                <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-[#002147] mb-4">Create Your Account</h2>
                <input type="text" placeholder="Username" className="w-full py-2 px-4 mb-3 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]" 
                onChange={(e)=>setusername(e.target.value)}/>
                <input type="email" placeholder="Email" className="w-full py-2 px-4 mb-3 mt-1 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]" 
                onChange={(e)=>setemail(e.target.value)}/>
                <input type="password" placeholder="Password" className="w-full py-2 px-4 mt-1 mb-3 border-2 rounded-lg text-lg border-[#A5B68D] outline-none focus:border-[#F39C12] text-[#002147]" 
                onChange={(e)=>setpassword(e.target.value)}/>
                <button className="w-full py-3 mt-1  text-lg font-bold text-white bg-[#F39C12] rounded-lg cursor-pointer hover:bg-[#e68912] transition-colors duration-300" type='submit' >
                  Sign Up
                </button>
                <h2 className="mt-3 text-sm text-[#002147] text-center">Already an User!  
                <a href="/login" > Sign In</a>
                </h2>
                
                </form>
              </div>
              </div>
        </div>
      </div>
    );
  
  }
  
  export default Signup;