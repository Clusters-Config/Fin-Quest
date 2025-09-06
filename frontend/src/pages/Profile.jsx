import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

function ProfilePage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhonenumber] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [role, setRole] = useState("Student");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [useremail, setuseremail] = useState("");


  // const { useremail } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:4047/verify", { withCredentials: true })
      .then((res) => {
        // console.log(res)
        setuseremail(res.data.email || "");
        setFirstname(res.data.firstname || "");
        setLastname(res.data.lastname || "");
        setDob(res.data.dob || "");
        setPhonenumber(res.data.phone || "");
        setHobbies(res.data.hobbies || "");
        setRole(res.data.role || "Student");
      })
      .catch((err) => console.error(err));
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reload

    try {
      await axios.post("http://localhost:4047/profile", {
        useremail,
        firstname,
        lastname,
        dob,
        phone,
        hobbies,
        role,
      }, { withCredentials: true });

      toast.success("Profile updated successfully!", { transition: Bounce });
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Error updating profile!", { transition: Bounce });
    }
  };

  const handleTermsClick = () => setShowTermsModal(true);
  const handleCloseModal = () => setShowTermsModal(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 text-[#6C757D]">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#002147] mb-8 text-center">
          Your Profile
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* First Name */}
            <div className="flex items-center">
              <div className="flex-grow">
                <label className="block text-[#6C757D] font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="mt-1 p-2 border rounded-md w-full focus:ring-[#F39C12] focus:border-[#F39C12] bg-[#F4F4F4] text-[#002147]"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="flex items-center">
              <div className="flex-grow">
                <label className="block text-[#6C757D] font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="mt-1 p-2 border rounded-md w-full focus:ring-[#F39C12] focus:border-[#F39C12] bg-[#F4F4F4] text-[#002147]"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="flex items-center">
              <div className="flex-grow">
                <label className="block text-[#6C757D] font-medium">
                  Date of Birth
                </label>
                <input
                  type="date"
                  placeholder="DOB"
                  className="mt-1 p-2 border rounded-md w-full focus:ring-[#F39C12] focus:border-[#F39C12] bg-[#F4F4F4] text-[#002147]"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center">
              <div className="flex-grow">
                <label className="block text-[#6C757D] font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mt-1 p-2 border rounded-md w-full focus:ring-[#F39C12] focus:border-[#F39C12] bg-[#F4F4F4] text-[#002147]"
                  value={phone}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>
            </div>

            {/* Hobbies */}
            <div className="flex flex-col">
              <label className="block text-[#6C757D] font-medium mb-2">
                Hobbies of Interest
              </label>
              <textarea
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
                placeholder="List your hobbies..."
                className="mt-1 p-2 border rounded-md w-full focus:ring-[#F39C12] focus:border-[#F39C12] bg-[#F4F4F4] text-[#002147]"
                rows="3"
              ></textarea>
            </div>

            {/* Role Select */}
            <select
              className="w-full py-3 px-4 rounded-xl text-gray-800 text-base border border-gray-300 focus:border-[#F39C12] bg-white/80 shadow-sm outline-none transition"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Student">Student</option>
              <option value="Financial-Analyst">Financial Analyst</option>
              <option value="Investment-Banker">Investment Banker</option>
              <option value="Risk-Manager">Risk Manager</option>
              <option value="Financial-Software-Developer">
                Financial Software Developer
              </option>
              <option value="Quantitative-Analyst">Quantitative Analyst</option>
              <option value="Accountant">Accountant</option>
              <option value="Other">Other</option>
            </select>

            {/* Terms */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="termsCheckbox"
                checked={isTermsChecked}
                onChange={(e) => setIsTermsChecked(e.target.checked)}
                className="mr-3 w-5 h-5 text-[#F39C12] focus:ring-[#F39C12]"
              />
              <label htmlFor="termsCheckbox" className="text-[#6C757D]">
                I agree to the{" "}
                <span
                  onClick={handleTermsClick}
                  className="text-[#F39C12] cursor-pointer underline"
                >
                  terms and conditions
                </span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-8">
            <button
              type="submit"
              disabled={!isTermsChecked}
              className={`px-6 py-3 font-semibold rounded-md ${isTermsChecked
                ? "bg-[#F39C12] text-white hover:bg-[#e68912] focus:ring focus:ring-[#F39C12]"
                : "bg-[#B0BEC5] text-[#6C757D] cursor-not-allowed"
                }`}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-96 h-86">
            <h3 className="text-xl font-bold mb-4">Terms and Conditions</h3>
            <p className="text-[#6C757D] mb-4">
              By using this website, you agree to our terms and conditions.
              These include user privacy, data handling, and acceptable usage of
              our services. Please read these terms carefully before proceeding.
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-[#F39C12] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#e68912] transition duration-300 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default ProfilePage;
