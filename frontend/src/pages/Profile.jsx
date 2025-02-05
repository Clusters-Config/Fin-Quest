import { useState } from "react";
import axios from "axios";

function ProfilePage() {
  // const [profileImage, setProfileImage] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhonenumber] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [email, setEmail] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setProfileImage(imageUrl);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://127.0.0.1:3007/profile", {
        // profileImage,
        firstname,
        lastname,
        dob,
        phone,
        hobbies,
        email,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 text-[#6C757D]">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#002147] mb-8 text-center">
          Your Profile
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Profile Image Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 mb-4 relative">
              <img
                src={
                  // profileImage ||
                  "https://via.placeholder.com/150?text=Upload+Image"
                }
                alt=""
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
            <label
              htmlFor="profileImageUpload"
              className="cursor-pointer px-4 py-2 bg-[#F39C12] text-white text-sm font-semibold rounded-md hover:bg-[#e68912] focus:ring focus:ring-[#F39C12]"
            >
              Upload Profile Picture
            </label>
            <input
              type="file"
              id="profileImageUpload"
              className="hidden"
              accept="image/*"
              // onChange={handleImageUpload}
            />
          </div>

          {/* Form Section */}
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

            {/* Hobbies of Interest */}
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

            {/* Email */}
            <div className="flex items-center">
              <div className="flex-grow">
                <label className="block text-[#6C757D] font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 p-2 border rounded-md w-full focus:ring-[#F39C12] focus:border-[#F39C12] bg-[#F4F4F4] text-[#002147]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="termsCheckbox"
                checked={isTermsChecked}
                onChange={(e) => setIsTermsChecked(e.target.checked)}
                className="mr-3 w-5 h-5 text-[#F39C12] focus:ring-[#F39C12]"
              />
              <label htmlFor="termsCheckbox" className="text-[#6C757D]">
                I agree to the terms and conditions
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              disabled={!isTermsChecked}
              className={`px-6 py-3 font-semibold rounded-md ${
                isTermsChecked
                  ? "bg-[#F39C12] text-white hover:bg-[#e68912] focus:ring focus:ring-[#F39C12]"
                  : "bg-[#B0BEC5] text-[#6C757D] cursor-not-allowed"
              }`}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
