import React from "react";


const TaxPage = () => {
  return (
    <div className="bg-backgroundGray min-h-screen text-primary">
      {/* Navigation Bar */}
      <nav className="bg-primary text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Tax Information</h1>
          <button className="bg-accent px-4 py-2 rounded text-white">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-backgroundLightBlue text-center py-12">
        <h2 className="text-3xl font-semibold">Tax Slabs & GST Rates 2025</h2>
        <p className="text-secondaryText mt-2">
          Stay updated with the latest tax and GST changes.
        </p>
      </header>

      {/* Tax Slabs Section */}
      <section className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold">Income Tax Slabs for 2025</h3>
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-4">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-3 px-4">Income Range</th>
              <th className="py-3 px-4">Tax Rate</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="border-b">
              <td className="py-3 px-4">Up to ₹4,00,000</td>
              <td className="py-3 px-4">Nil</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">₹4,00,001 to ₹8,00,000</td>
              <td className="py-3 px-4">5%</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">₹8,00,001 to ₹12,00,000</td>
              <td className="py-3 px-4">10%</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">₹12,00,001 to ₹16,00,000</td>
              <td className="py-3 px-4">15%</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">₹16,00,001 to ₹20,00,000</td>
              <td className="py-3 px-4">20%</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Above ₹24,00,000</td>
              <td className="py-3 px-4">30%</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* GST Rates Table */}
      <section className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold">Updated GST Rates (2025)</h3>
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-4">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Old GST Rate</th>
              <th className="py-3 px-4">New GST Rate</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="border-b">
              <td className="py-3 px-4">Railways Goods & Parts</td>
              <td className="py-3 px-4">12%</td>
              <td className="py-3 px-4">18%</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">Pens</td>
              <td className="py-3 px-4">12%</td>
              <td className="py-3 px-4">18%</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">Metal Concentrates & Ores</td>
              <td className="py-3 px-4">5%</td>
              <td className="py-3 px-4">18%</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">Renewable Energy Devices</td>
              <td className="py-3 px-4">5%</td>
              <td className="py-3 px-4">12%</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">Scrap & Polyurethanes</td>
              <td className="py-3 px-4">5%</td>
              <td className="py-3 px-4">18%</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-6 mt-10">
        <p>&copy; 2025 Tax Info. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TaxPage;