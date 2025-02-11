import { Link } from "react-router-dom"; 
import { FaUserCircle } from "react-icons/fa";
import { useEffect ,useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext"
import { useNavigate } from "react-router-dom";

  

// import { useState } from "react";



function Homepage() {
  const {useremail,setuseremail,login} = useAuth();
  const [email ,setEmail] = useState("");
  const [password ,setpassword] = useState("");
  const navigate = useNavigate();
  const[showtoast , setshowtoast] = useState(false)
  const[username,setusername] = useState();

  useEffect(()=>{
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:4047/verify",{withCredentials: true})
    .then(res=>{
      console.log(res)
      setEmail(res.data?.email),
      setpassword(res.data?.password)
      setuseremail(res.data?.email) 
      setusername(res.data?.username)
    })
  },[])

  useEffect(() => {
    if(email){
    axios.post("http://localhost:4047/login",{email,password})
    .then(res=>{
      if(res.data.valid){
        navigate("/")}
        if(!showtoast){

          setshowtoast(true);
        }
    })  
  }});


  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-[#002147] shadow-lg px-6 py-4 flex justify-between items-center">
        <div className="text-[#F39C12] text-2xl font-bold">Fin-Quest</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-[#F39C12] transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="text-white hover:text-[#F39C12] transition duration-300">
              Features
            </Link>
          </li>
          <li>
            <Link to="/login" id="loginbtn" className="text-white hover:text-[#F39C12] transition duration-300">
            {username ? username :"Login"}
            </Link>
          </li>
          <li>
            <Link to="/Profile" className="text-white hover:text-[#F39C12] transition duration-300">
              <FaUserCircle size={24} />
            </Link>
         
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 space-y-6 bg-[#F4F4F4]">
        <h1 className="text-5xl font-bold text-[#002147]">
          Learn Finance Through <span className="text-[#F39C12]">Play & Strategy!</span>
        </h1>
        <p className="text-lg text-[#6C757D] leading-relaxed max-w-3xl mx-auto">
          A gamified learning experience that makes financial literacy easy, engaging, and fun!
        </p>
        <div className="space-x-4">
          <Link to="/features">
            <button className="bg-[#F39C12] text-[#002147] px-6 py-3 rounded-lg shadow-lg hover:bg-[#e67e22] transition duration-300">
              Start Your Quest
            </button>
          </Link>
        </div>
      </header>

      {/* Why Choose Fin-Quest */}
      <section className="text-center bg-[#F8FAFC] py-16">
        <h2 className="text-3xl font-bold text-[#002147] mb-6">Why Choose Fin-Quest?</h2>
        <p className="text-[#6C757D] max-w-3xl mx-auto mb-12">
          We make financial literacy engaging, practical, and accessible to everyone.  
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
          <div className="bg-white shadow-md p-6 rounded-lg text-center border-t-4 border-[#F39C12]">
            <h3 className="text-xl font-semibold text-[#002147]">Real-Life Scenarios</h3>
            <p className="text-[#6C757D] mt-2">
              Learn through real-world finance case studies. Our lessons draw inspiration from actual events, helping you understand complex financial concepts in a relatable way. You'll gain the skills to handle your own financial decisions confidently and wisely.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center border-t-4 border-[#F39C12]">
            <h3 className="text-xl font-semibold text-[#002147]">Engaging Gameplay</h3>
            <p className="text-[#6C757D] mt-2">
              Finance lessons designed like interactive quests. Dive into challenges and puzzles that keep you actively engaged as you learn. Whether you're tracking expenses or building investment strategies, you'll find every task both fun and educational.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center border-t-4 border-[#F39C12]">
            <h3 className="text-xl font-semibold text-[#002147]">Gamified Rewards</h3>
            <p className="text-[#6C757D] mt-2">
              Earn badges and points as you learn. Celebrate your milestones and progress with rewards that motivate you to keep learning. The more you complete, the higher your achievements, and the more confident you become in your financial knowledge.
            </p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#002147] text-white py-4 px-6 text-center">
        <p className="text-lg italic">"Empowering financial literacy through gamification."</p>
        <p className="text-sm mt-2">&copy; 2025 Fin-Quest. All Rights Reserved.</p>
      </footer>

      
    </div>
  );
}

export default Homepage;
