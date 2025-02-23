import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const ProfilePage = () => {
  const [email, setemail] = useState();
  const [udob, setudob] = useState();
  const [dob, setdob] = useState();
  const [phone, setphone] = useState();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [uemail, setuemail] = useState("");
  const [progresss, setprogress] = useState();

  // const[Acounting1 , setAccounting1] = useState()
  // const[Acounting2 , setAccounting2] = useState()
  // const[Acounting , setAccounting] = useState()

  const [Terminologies, setTerminologies] = useState();
  const [Accounting1, setAccounting1] = useState();
  const [Accounting2, setAccounting2] = useState();
  const [Accounting, setAccounting] = useState();
  const [FAccounting1, setFAccounting1] = useState();
  const [FAccounting2, setFAccounting2] = useState();
  const [FAccounting, setFAccounting] = useState();
  const [Financial1, setFinancial1] = useState();
  const [Financial2, setFinancial2] = useState();
  const [Financial, setFinancial] = useState();
  const [Saving1, setSaving1] = useState();
  const [Saving2, setSaving2] = useState();
  const [Saving, setSaving] = useState();
  const [Interest1, setInterest1] = useState();
  const [Interest2, setInterest2] = useState();
  const [Interest, setInterest] = useState();
  const [Investment1, setInvestment1] = useState();
  const [Investment2, setInvestment2] = useState();
  const [Investment3, setInvestment3] = useState();
  const [Investment, setInvestment] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:4047/verify").then((res) => {
      setemail(res.data.email);
    });
  }, []);

  const handleLogOut = () => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:4047/clearcookies").then(() => {
      navigate("/", { state: { login: true } });
    });
  };
  useEffect(() => {
    axios.post("http://localhost:4047/finduser", { email }).then((res) => {
      setudob(res?.data?.user?.profile[0]?.dob);
      setphone(res?.data?.user?.profile[0]?.phone);
      setfirstname(res?.data?.user?.profile[0]?.firstname || "");
      setlastname(res?.data?.user?.profile[0]?.lastname || "");
    });
  });

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:4047/finduserlearning", { email })
      .then((res) => {
  
        setAccounting1(res?.data?.accouting[0]?.mod1.path1);
        setAccounting2(res?.data?.accouting[0]?.mod1.path2);
        setFAccounting1(res?.data?.accouting[0]?.mod2.path1);
        setFAccounting2(res?.data?.accouting[0]?.mod2.path2);
        setFinancial1(res?.data?.finance[0]?.mod1.path1);
        setFinancial2(res?.data?.finance[0]?.mod1.path2);
        setSaving1(res?.data?.finance[0]?.mod2.path1);
        setSaving2(res?.data?.finance[0]?.mod2.path2);
        setInterest1(res?.data?.finance[0]?.mod3.path1);
        setInterest2(res?.data?.finance[0]?.mod3.path2);
        setInvestment1(res?.data?.finance[0]?.mod4.path1);
        setInvestment2(res?.data?.finance[0]?.mod4.path2);
        setInvestment3(res?.data?.finance[0]?.mod4.path3);
      });
  });


  useEffect(() => {
    if (Accounting1 >= 70 && Accounting2 >= 70) {
      setAccounting(100);
    } else if (Accounting1 >= 70 || Accounting2 >= 70) {
      setAccounting(50);
    } else {
      setAccounting(0);
    }

    if (FAccounting1 >= 70 && FAccounting2 >= 70) {
      setFAccounting(100);
    } else if (FAccounting1 >= 70 || FAccounting2 >= 70) {
      setFAccounting(50);
    } else {
      setFAccounting(0);
    }

    if (Financial1 >= 70 && Financial2 >= 70) {
      setFinancial(100);
    } else if (Financial1 >= 70 || Financial2 >= 70) {
      setFinancial(50);
    } else {
      setFinancial(0);
    }

    if (Saving1 >= 70 && Saving2 >= 70) {
      setSaving(100);
    } else if (Saving1 >= 70 || Saving2 >= 70) {
      setSaving(50);
    } else {
      setSaving(0);
    }

    if (Interest1 >= 70 && Interest2 >= 70) {
      setInterest(100);
    } else if (Interest1 >= 70 || Interest2 >= 70) {
      setInterest(50);
    } else {
      setInterest(0);
    }

    if (Investment1 >= 70 && Investment2 >= 70 && Investment3 >= 70) {
      setInvestment(100);
    } else if (Investment1 >= 70 && Investment2 >= 70) {
      setInvestment(66);
    } else if (Investment1 >= 70 && Investment3 >= 70) {
      setInvestment(66);
    } else if (Investment2 >= 70 && Investment3 >= 70) {
      setInvestment(66);
    } else if (Investment2 >= 70 || Investment3 >= 70 || Investment1 >= 70) {
      setInvestment(33);
    } else {
      setInvestment(0);
    }
  });

  useEffect(() => {
    setModules([
      { name: "Module 1: Accounting for Beginners", progress: Accounting },
      { name: "Module 2: Fundamentals of Accounting", progress: FAccounting },
      { name: "Module 3: Basic Financial Concepts", progress: Financial },
      { name: "Module 4: Saving & Budgeting", progress: Saving },
      { name: "Module 5: Understanding Interest Rates", progress: Interest },
      { name: "Module 6: Investment Basics", progress: Investment },
    ]);
  }, [Accounting, FAccounting, Financial, Saving, Interest, Investment]);

  const student = {
    photo:
      "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png",
    name: firstname + " " + lastname,
    dob: udob,
    phone: phone,
    email: email,
    achievements: [
      "Achieved 95% Progress in Module 2: Fundamentals of Accounting",
      "Won 'Student of the Month' award for December 2024",
    ],
  };

  // Learning modules progress
  const [modules, setModules] = useState([
    { name: "Module 1: Basic Terminologies", progress: Terminologies },
    { name: "Module 2: Fundamentals of Accounting", progress: 95 },
    { name: "Module 3: Basic Financial Concepts", progress: 30 },
    { name: "Module 4: Understanding Interest Rates", progress: 10 },
    { name: "Module 5: Investment Basics", progress: 0 },
  ]);

  return (
    <>
    <nav className="bg-[#002147] text-white p-4 text-center text-xl font-semibold">
        My Learning Path
      </nav>
    {udob ? <div className="bg-[#F4F4F4] min-h-screen">
      {/* Navbar */}
      
      {/* {email ? (
          <div className="flex justify-end p-4">
            <button
          onClick={handleLogOut}
          className="border border-black p-2 rounded-sm hover:bg-gray-300 transition-all mt-10"
            >
          Logout
            </button>
          </div>
        ) : (
          ""
        )} */}
      {/* Profile Container */}
      <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        {/* Profile Header */}
        <div className="grid grid-cols-2 items-center mb-6">
          <h1 className="text-[#002147] text-2xl font-bold">Student Profile</h1>
          {email ? (
            <div className="flex justify-end">
              <button
                onClick={handleLogOut}
                className="border border-black p-2 rounded-sm hover:bg-gray-300 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

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
              <p className="text-lg font-semibold text-[#002147] mb-4">
                {student.name}
              </p>
              <p className="text-[#6C757D] mb-2">
                Date of Birth: {student.dob}
              </p>
              <p className="text-[#6C757D] mb-2">Phone: {student.phone}</p>
              <p className="text-[#6C757D]">Email: {student.email}</p>
            </div>
          </div>
        </div>

        {/* Learning Path Progress */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#002147] mb-4">
            Learning Progress
          </h3>
          {modules.map((module, index) => (
            <div key={index} className="mb-4">
              <p className="text-[#6C757D] font-medium">{module.name}</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="h-4 bg-[#F39C12] rounded-full"
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-[#002147]">
                {module.progress}% Completed
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-[#F8FAFC] p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-[#002147] text-xl font-bold mb-4">
            Achievements
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {student.achievements.map((achievement, index) => (
              <li key={index} className="text-[#6C757D]">
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Learning Path Overview */}
        <div className="bg-[#F8FAFC] p-6 rounded-lg shadow-md">
          <h3 className="text-[#002147] text-xl font-bold mb-4">
            Learning Path Overview
          </h3>
          <p className="text-[#6C757D]">
            This learning path consists of three modules, guiding students from
            basics to advanced topics. Keep progressing and complete all modules
            to achieve mastery!
          </p>
        </div>
      </div>
    </div> : <Backdrop
  sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
  open
>
  <CircularProgress color="inherit" />
  <h1>Please wait or login again</h1>
</Backdrop>}</>
  );
};

export default ProfilePage;
