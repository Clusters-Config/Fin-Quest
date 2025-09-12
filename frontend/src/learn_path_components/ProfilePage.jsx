import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

// ProfilePage component with a new UI design
const ProfilePage = () => {
  const [email, setemail] = useState();
  const [udob, setudob] = useState();
  const [phone, setphone] = useState();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [role, setrole] = useState("Student");
  const [progresss, setprogress] = useState();

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
  const [modules, setModules] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("https://fin-quest-y9ub.onrender.com/verify", { withCredentials: true }).then((res) => {
      setemail(res.data.email);
    });
  }, []);

  const handleLogOut = () => {
    axios.defaults.withCredentials = true;
    axios.get("https://fin-quest-y9ub.onrender.com/clearcookies", { withCredentials: true }).then((res) => {
      console.log(res)
      navigate("/", { state: { login: true } });
    });
  };

  const handleUpdate = () => {
    navigate("/profile");
  };

  useEffect(() => {
    if (email) {
      axios.post("https://fin-quest-y9ub.onrender.com/finduser", { email }).then((res) => {
        setudob(res?.data?.user?.profile[0]?.dob);
        setphone(res?.data?.user?.profile[0]?.phone);
        setfirstname(res?.data?.user?.profile[0]?.firstname || "");
        setlastname(res?.data?.user?.profile[0]?.lastname || "");
        setrole(res?.data?.user?.profile[0]?.role || "Student");
      });

      axios.post("https://fin-quest-y9ub.onrender.com/finduserlearning", { email }).then((res) => {
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
    }
  }, [email]);

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
  }, [Accounting1, Accounting2, FAccounting1, FAccounting2, Financial1, Financial2, Saving1, Saving2, Interest1, Interest2, Investment1, Investment2, Investment3]);

  useEffect(() => {
    setModules([
      { name: "Module 1: Accounting for Beginners", progress: Accounting },
      { name: "Module 2: Fundamentals of Accounting", progress: FAccounting },
      { name: "Module 3: Basic Financial Concepts", progress: Financial },
      { name: "Module 4: Saving & Budgeting", progress: Saving },
      { name: "Module 5: Understanding Interest Rates", progress: Interest },
      { name: "Module 6: Investment Basics", progress: Investment },
    ].filter(module => module.progress !== undefined));
  }, [Accounting, FAccounting, Financial, Saving, Interest, Investment]);

  const student = {
    photo:
      "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png",
    name: firstname + " " + lastname,
    dob: udob,
    phone: phone,
    email: email,
    role: role,
    achievements: [
      `Achieved ${FAccounting}% Progress in Module 2: Fundamentals of Accounting`,
      "Won 'Student of the Month' award for December 2024",
    ],
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 text-center text-xl font-semibold shadow-lg">
        My Learning Path
      </nav>
      {udob ? (
        <div className="bg-gray-100 min-h-screen p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header and Action Buttons */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Student Profile</h1>
              <div className="flex space-x-4">
                <Button variant="outlined" onClick={handleUpdate} className="text-gray-700 border-gray-700 hover:bg-gray-200 transition-colors">
                  Update Profile
                </Button>
                <Button variant="contained" onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 text-white transition-colors">
                  Logout
                </Button>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Card */}
              <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <img
                  src={student.photo}
                  alt="Student"
                  className="w-32 h-32 rounded-full ring-4 ring-blue-500 mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-900">{student.name}</h2>
                <p className="text-gray-500 mt-2 text-sm">{student.email}</p>
                <div className="w-full mt-6 text-left space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <span className="font-semibold w-24">D.O.B:</span> {student.dob}
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold w-24">Phone:</span> {student.phone}
                  </p>

                  <p className="flex items-center">
                    <span className="font-semibold w-24">Role: </span> {student.role}
                  </p>
                </div>
              </div>

              {/* Learning Progress Card */}
              <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Learning Progress</h3>
                <div className="space-y-6">
                  {modules.map((module, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-center justify-between">
                      <p className="text-gray-700 font-medium mb-2 sm:mb-0 sm:w-2/5">
                        {module.name}
                      </p>
                      <div className="w-full sm:w-3/5">
                        <div className="bg-gray-200 rounded-full h-2.5">
                          <div
                            className="h-2.5 rounded-full transition-all duration-500 ease-in-out"
                            style={{
                              width: `${module.progress}%`,
                              background: `linear-gradient(to right, #4CAF50, #8BC34A)`
                            }}
                          ></div>
                        </div>
                        <p className="text-sm text-right text-gray-500 mt-1">
                          {module.progress}% Completed
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements Card */}
              <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Achievements
                </h3>
                <ul className="list-disc pl-6 space-y-4">
                  {student.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-600 leading-relaxed">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning Path Overview Card */}
              <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Learning Path
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This learning path consists of a series of modules designed to guide you from foundational knowledge to advanced topics in finance. Keep up the great work to achieve mastery!
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
          <CircularProgress color="inherit" />
          <p className="ml-4 text-xl"> Update your profile or login again</p>
        </Backdrop>
      )}
    </>
  );
};

export default ProfilePage;