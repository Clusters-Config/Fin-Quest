import React from "react";

const TaxPage = () => {
  return (
    <div className="bg-[#F4F4F4] min-h-screen text-gray-900">
      {/* Navbar */}
      <nav className="bg-[#002147] p-4 w-full fixed top-0 left-0 z-10 flex justify-between items-center shadow-md">
        <h1 className="text-white text-xl font-extrabold">Taxes</h1>
      </nav>

      {/* Hero Section */}
      <div className="mt-16 sm:mt-20 md:mt-14 bg-[#F4F4F4] py-2">
        <h1 className="text-center text-3xl sm:text-4xl text-[#002147] font-extrabold">
          Your 2025 Tax & GST Resource Hub
        </h1>   
        <p className="text-center text-base sm:text-lg mt-2 text-[#6C757D]">
          "Taxes are what we pay for civilized society."
        </p>
      </div>

      {/* Tax Slabs Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#002147]">Income Tax Slabs for 2025</h3>
      </div>
      <section className="mx-auto h-auto py-4 px-4 ">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#002147] text-white">
            <tr>
              <th className="py-2 px-4">Income Range</th>
              <th className="py-2 px-4">Tax Rate</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="border-b">
              <td className="py-2 px-4">Up to ₹4,00,000</td>
              <td className="py-2 px-4">Nil</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">₹4,00,001 to ₹8,00,000</td>
              <td className="py-2 px-4">5%</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">₹8,00,001 to ₹12,00,000</td>
              <td className="py-2 px-4">10%</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">₹12,00,001 to ₹16,00,000</td>
              <td className="py-2 px-4">15%</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">₹16,00,001 to ₹20,00,000</td>
              <td className="py-2 px-4">20%</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Above ₹24,00,000</td>
              <td className="py-2 px-4">30%</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* GST Rates Table */}
      <div className="text-center mt-4">
        <h3 className="text-2xl font-bold text-[#002147]">Updated GST Rates (2025)</h3>
      </div>
      <section className="h-auto mx-auto px-6 py-4">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#002147] text-white">
            <tr>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Old GST Rate</th>
              <th className="py-2 px-4">New GST Rate</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="border-b">
              <td className="py-2 px-4">Railways Goods & Parts</td>
              <td className="py-2 px-4">12%</td>
              <td className="py-2 px-4">18%</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Pens</td>
              <td className="py-2 px-4">12%</td>
              <td className="py-2 px-4">18%</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Metal Concentrates & Ores</td>
              <td className="py-2 px-4">5%</td>
              <td className="py-2 px-4">18%</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Renewable Energy Devices</td>
              <td className="py-2 px-4">5%</td>
              <td className="py-2 px-4">12%</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Scrap & Polyurethanes</td>
              <td className="py-2 px-4">5%</td>
              <td className="py-2 px-4">18%</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer className="bg-[#002147] text-white text-center py-4 mt-6">
        <p>&copy; 2025 Tax Info. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TaxPage;