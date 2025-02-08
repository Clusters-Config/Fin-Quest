import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const TaxPage = () => {
  return (
    <div className="bg-[#F4F4F4] min-h-screen text-gray-900">
      {/* Navbar */}
      <nav className="bg-[#002147] p-4 w-full flex justify-between items-center shadow-md">
        <h1 className="text-white text-xl font-extrabold">Taxes</h1>
      </nav>

      {/* Hero Section */}
      <div className="mt-16 sm:mt-20 md:mt-14 bg-[#F4F4F4] py-2">
        <motion.h1
          className="text-center text-3xl sm:text-4xl text-[#002147] font-extrabold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Your 2025 Tax & GST Resource Hub
        </motion.h1>
        <motion.p
          className="text-center text-base sm:text-lg mt-2 text-[#6C757D]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          "Taxes are what we pay for civilized society."
        </motion.p>
      </div>

      {/* Tax Information Cards */}
      <div className="mt-8 text-center px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* What Are Taxes Card */}
        <motion.div
          className="flip-card bg-white rounded-lg shadow-lg w-full h-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front p-6">
              <h3 className="text-2xl font-semibold text-[#002147] mb-4">What Are Taxes?</h3>
              <p className="text-[#6C757D] text-base">Taxes are mandatory payments made to the government to fund public services.</p>
            </div>
            <div className="flip-card-back p-6 bg-[#002147] text-white">
              <p className="text-[#F4F4F4]">
                Taxes help the government maintain services like schools, healthcare, roads, and safety.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Are Taxes Important Card */}
        <motion.div
          className="flip-card bg-white rounded-lg shadow-lg w-full h-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front p-6">
              <h3 className="text-2xl font-semibold text-[#002147] mb-4">Why Are Taxes Important?</h3>
              <p className="text-[#6C757D] text-base">Taxes are crucial for funding essential public services such as healthcare and education.</p>
            </div>
            <div className="flip-card-back p-6 bg-[#002147] text-white">
              <p className="text-[#F4F4F4]">
                Without taxes, it would be impossible to maintain essential infrastructure and services in the country.
              </p>
            </div>
          </div>
        </motion.div>

        {/* New Card - Benefits of Taxation */}
        <motion.div
          className="flip-card bg-white rounded-lg shadow-lg w-full h-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front p-6">
              <h3 className="text-2xl font-semibold text-[#002147] mb-4">Benefits of Taxation</h3>
              <p className="text-[#6C757D] text-base">Taxation allows governments to provide benefits like social security, pensions, and public goods.</p>
            </div>
            <div className="flip-card-back p-6 bg-[#002147] text-white">
              <p className="text-[#F4F4F4]">
                Taxes help fund public services that benefit society as a whole, ensuring a stable and equitable society.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* New Tax Regime Section */}
      <div className="bg-[#E9F7EF] py-8 mt-10 mx-6 rounded-lg shadow-lg">
        <motion.h3
          className="text-2xl font-semibold text-[#002147] text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Understanding the New Tax Regime (2025)
        </motion.h3>
        <motion.p
          className="text-[#6C757D] text-lg text-center mx-auto w-11/12 md:w-3/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          The new tax regime in India aims to simplify the tax structure with reduced tax rates and removal of many exemptions. This regime is beneficial for those who do not have significant deductions or exemptions. To learn more about the new tax slabs, please visit the official government website.
        </motion.p>
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <a
            href="https://www.incometaxindia.gov.in/pages/tax-information-services.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F39C12] text-white px-6 py-2 rounded-lg font-bold"
          >
            Learn More About the New Tax Regime
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-[#002147] text-white text-center py-4 mt-10">
        <motion.p
          className="text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &copy; 2025 Tax Info. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default TaxPage;
