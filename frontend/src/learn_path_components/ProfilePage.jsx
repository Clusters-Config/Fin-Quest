import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../pages/AuthContext";
const ProfilePage = () => {
  const[email,setemail] = useState()
  const[udob,setudob] = useState();
  const[dob,setdob] = useState();
  const[phone,setphone] = useState();
  const [firstname , setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const{useremail} = useAuth()
  axios.defaults.withCredentials = true
  useEffect(()=>{
    console.log("verify")
    axios.get("http://localhost:4047/verify").then(res=>{
      console.log("res"+res)
      setemail(res.data.email)
      console.log(res)
    })
  })

  useEffect(()=>{
    console.log(useremail)
    axios.post("http://localhost:4047/finduser",{email})
    .then(res=>{
      console.log(res.data);
      setudob(res.data.user.profile[0].dob)
      setphone(res.data.user.profile[0].phone)
      setfirstname(res.data.user.profile[0].firstname)
      setlastname(res.data.user.profile[0].lastname)
      console.log(res.data.user.profile[0].dob)
      console.log(udob)
    })
  })

  const student = {
    photo: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png",
    name: firstname+" "+lastname,
    dob: udob,
    phone: phone,
    email:email,
    achievements: [
      "Completed Module 1: Basic Terminologies",
      "Achieved 95% Progress in Module 2: Fundamentals of Accounting",
      "Won 'Student of the Month' award for December 2024",
    ],
  };

  // Learning modules progress
  const [modules, setModules] = useState([
    { name: "Module 1: Basic Terminologies", progress: 100 },
    { name: "Module 2: Fundamentals of Accounting", progress: 95 },
    { name: "Module 3: Basic Financial Concepts", progress: 30 },
    { name: "Module 4: Understanding Interest Rates", progress: 10 },
    { name: "Module 5: Investment Basics", progress: 0 },
  ]);

  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      {/* Navbar */}
      <nav className="bg-[#002147] text-white p-4 text-center text-xl font-semibold">
        My Learning Path
      </nav>

      {/* Profile Container */}
      <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">

        {/* Profile Header */}
        <h2 className="text-[#002147] text-2xl font-bold mb-6">Student Profile</h2>

        {/* Student Info */}
        <div className="flex flex-col sm:flex-row gap-6 mb-6">
  {/* Left Section - Student Photo */}
  <div className="w-full sm:w-1/3 flex justify-center items-center">
    <div className="bg-[#F8FAFC] p-6 rounded-lg shadow-md">
      <img
        src={student.photo}
        alt="Student"
        className="w-24 h-24 rounded-full mx-auto"
      />
    </div>
  </div>

  {/* Right Section - Student Details */}
  <div className="w-full sm:w-2/3">
    <div className="bg-[#F8FAFC] p-6 rounded-lg shadow-md">
      <p className="text-lg font-semibold text-[#002147] mb-4">{student.name}</p>
      <p className="text-[#6C757D] mb-2">Date of Birth: {student.dob}</p>
      <p className="text-[#6C757D] mb-2">Phone: {student.phone}</p>
      <p className="text-[#6C757D]">Email: {student.email}</p>
    </div>
  </div>
</div>


          {/* Learning Path Progress */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#002147] mb-4">Learning Progress</h3>
          {modules.map((module, index) => (
            <div key={index} className="mb-4">
              <p className="text-[#6C757D] font-medium">{module.name}</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="h-4 bg-[#F39C12] rounded-full"
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-[#002147]">{module.progress}% Completed</p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-[#F8FAFC] p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-[#002147] text-xl font-bold mb-4">Achievements</h3>
          <ul className="list-disc pl-6 space-y-2">
            {student.achievements.map((achievement, index) => (
              <li key={index} className="text-[#6C757D]">{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Learning Path Overview */}
        <div className="bg-[#F8FAFC] p-6 rounded-lg shadow-md">
          <h3 className="text-[#002147] text-xl font-bold mb-4">Learning Path Overview</h3>
          <p className="text-[#6C757D]">
            This learning path consists of three modules, guiding students from basics to
            advanced topics. Keep progressing and complete all modules to achieve mastery!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
