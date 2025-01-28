// Profile Page
import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaCalendarAlt,
} from "react-icons/fa";

function ProfilePage() {
  const [profileImage, setProfileImage] = useState(null);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [hobbies, setHobbies] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleSaveChanges = () => {
    alert("Your changes have been saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 p-6 text-gray-800">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Your Profile
        </h1>

        {/* Profile Image Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 mb-4 relative">
            <img
              src={
                profileImage ||
                "https://via.placeholder.com/150?text=Upload+Image"
              }
              alt=""
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          <label
            htmlFor="profileImageUpload"
            className="cursor-pointer px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            Upload Profile Picture
          </label>
          <input
            type="file"
            id="profileImageUpload"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>


        {/* Form Section */}
        <div className="space-y-6">
          {/* First Name */}
          <div className="flex items-center">
            <FaUser className="text-blue-400 w-6 h-6 mr-4" />
            <div className="flex-grow">
              <label className="block text-gray-600 font-medium">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="mt-1 p-2 border rounded-md w-full focus:ring-blue-300 focus:border-blue-400 bg-gray-100 text-gray-800"
              />
            </div>
          </div>


          {/* Last Name */}
          <div className="flex items-center">
            <FaUser className="text-green-400 w-6 h-6 mr-4" />
            <div className="flex-grow">
              <label className="block text-gray-600 font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="mt-1 p-2 border rounded-md w-full focus:ring-green-300 focus:border-green-400 bg-gray-100 text-gray-800"
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="flex items-center">
            <FaCalendarAlt className="text-yellow-400 w-6 h-6 mr-4" />
            <div className="flex-grow">
              <label className="block text-gray-600 font-medium">Date of Birth</label>
              <input
                type="date"
                className="mt-1 p-2 border rounded-md w-full focus:ring-yellow-300 focus:border-yellow-400 bg-gray-100 text-gray-800"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-center">
            <FaPhone className="text-purple-400 w-6 h-6 mr-4" />
            <div className="flex-grow">
              <label className="block text-gray-600 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="mt-1 p-2 border rounded-md w-full focus:ring-purple-300 focus:border-purple-400 bg-gray-100 text-gray-800"
              />
            </div>
          </div>

          {/* Hobbies of Interest */}
          <div className="flex flex-col">
            <label className="block text-gray-600 font-medium mb-2">
              Hobbies of Interest
            </label>
            <textarea
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
              placeholder="List your hobbies..."
              className="mt-1 p-2 border rounded-md w-full focus:ring-blue-300 focus:border-blue-400 bg-gray-100 text-gray-800"
              rows="3"
            ></textarea>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsCheckbox"
              checked={isTermsChecked}
              onChange={(e) => setIsTermsChecked(e.target.checked)}
              className="mr-3 w-5 h-5 text-blue-400 focus:ring-blue-300"
            />
            <label htmlFor="termsCheckbox" className="text-gray-600">
              I agree to the terms and conditions
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleSaveChanges}
            disabled={!isTermsChecked}
            className={`px-6 py-3 font-semibold rounded-md ${
              isTermsChecked
                ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-300"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;