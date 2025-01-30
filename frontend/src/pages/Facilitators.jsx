import React from "react";

const Facilitator = () => {
  const services = [
    {
      title: "How to Withdraw Money from a Bank",
      instructions: [
        "Visit your nearest bank branch.",
        "Fill out the withdrawal slip with accurate details.",
        "Submit the slip to the cashier along with your passbook/ID.",
        "Wait for the cashier to process your request.",
        "Collect your money and receipt from the cashier.",
      ],
      video: "https://www.youtube.com/embed/example1", // Replace with actual video link
    },
    {
      title: "How to Deposit Money in a Bank",
      instructions: [
        "Visit the bank and collect a deposit slip.",
        "Fill in the required details such as account number and amount.",
        "Submit the slip along with the money to the cashier.",
        "Wait for the cashier to process your deposit.",
        "Collect the receipt as proof of deposit.",
      ],
      video: "https://www.youtube.com/embed/example2", // Replace with actual video link
    },
    {
      title: "How to Check Account Balance",
      instructions: [
        "Visit the ATM of your bank.",
        "Insert your debit/ATM card into the machine.",
        "Enter your PIN and choose 'Balance Inquiry' from the menu.",
        "Wait for the machine to display your account balance.",
        "Take back your card after the transaction.",
      ],
      video: "https://www.youtube.com/embed/example3", // Replace with actual video link
    },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <header className="bg-[#002147] text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Facilitator Services</h1>
        <p className="mt-2">Your Guide to Essential Financial Tasks</p>
      </header>

      {/* Services Section */}
      <section className="mt-8 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-[#002147] mb-6 text-center">
          Services & Instructions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#002147] mb-4">
                {service.title}
              </h3>
              <ol className="list-decimal list-inside text-[#6C757D] space-y-2">
                {service.instructions.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
              <div className="mt-4">
                <iframe
                  className="w-full h-48 rounded-lg"
                  src={service.video}
                  title={`Video for ${service.title}`} // Fixed string interpolation
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>

       
      {/* Footer */}
      <footer className="bg-[#002147] text-white py-6 px-6 text-center">
        
        <p className="text-sm mt-2">&copy; 2025 Fin-Quest. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Facilitator;
