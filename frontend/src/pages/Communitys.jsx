import React, { useState, useEffect } from "react";

const Communitys = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [connections, setConnections] = useState(new Set());
  const [financialUpdates, setFinancialUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState("");

  const networkData = [
    { id: 1, name: "Veeresh", domain: "Financial Analyst", image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" },
    { id: 2, name: "Sabari", domain: "Investment Banker", image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" },
    { id: 3, name: "Dinesh", domain: "Risk Manager", image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" },
    { id: 4, name: "Atharv", domain: "Financial Software Developer", image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" },
    { id: 5, name: "Arvind", domain: "Quantitative Analyst", image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" },
    { id: 6, name: "Gokulnath", domain: "Investment Banker", image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" },
    { id: 7, name: "Sanjaay", domain: "Accountant", image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" },
    { id: 8, name: "Prakash", domain: "Accountant", image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" },
    { id: 9, name: "Chagan", domain: "Risk Manager", image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" },

  ];

  const uniqueNetworkData = Array.from(
    new Set(networkData.map((item) => JSON.stringify(item)))
  ).map((item) => JSON.parse(item));

  const roles = ["All", ...new Set(uniqueNetworkData.map((person) => person.domain))];

  const filteredData = uniqueNetworkData.filter((person) => {
    const matchesRole = selectedRole === "All" || person.domain === selectedRole;
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  useEffect(() => {
    const sampleUpdates = [
      "Stock markets hit a new high today!",
      "Federal Reserve announces interest rate cuts.",
      "Top 5 investment strategies for 2025.",
    ];
    setFinancialUpdates(sampleUpdates);
  }, []);

  const openModal = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  const handleConnect = (person) => {
    if (connections.has(person.id)) {
      alert(`${person.name} is already connected.`);
      return;
    }

    setConnections((prev) => new Set(prev.add(person.id)));
    alert(`You are now connected with ${person.name}`);
  };

  const addFinancialUpdate = () => {
    if (newUpdate.trim()) {
      setFinancialUpdates((prev) => [newUpdate, ...prev]);
      setNewUpdate("");
    } else {
      alert("Please enter a valid update.");
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      <div className="flex h-screen">
        <div className="w-64 bg-gray-200 p-5">
          <h2 className="text-xl font-bold mb-5">Roles</h2>
          <ul className="space-y-2">
            {roles.map((role) => (
              <li
                key={role}
                className={`cursor-pointer p-2 rounded-md ${
                  selectedRole === role
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                } hover:bg-blue-400 hover:text-white transition-colors`}
                onClick={() => setSelectedRole(role)}
              >
                {role}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-grow p-5 flex">
          <div className="w-3/4 pr-5">
            <div className="flex justify-center mb-5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name..."
                className="border border-gray-300 rounded-md px-4 py-2 w-80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-wrap gap-5 justify-center">
              {filteredData.length > 0 ? (
                filteredData.map((person) => (
                  <div
                    key={person.id}
                    className="bg-gray-100 border border-gray-300 rounded-lg p-5 w-64 text-center shadow-sm transition-transform transform hover:translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex justify-center mb-4 animate-none">
                      <img
                        src={person.image}
                        alt={`${person.name}'s profile`}
                        className="rounded-full w-24 h-24 object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {person.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {person.domain}
                    </p>
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => openModal(person)}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition-colors"
                      >
                        Message
                      </button>
                      <button
                        onClick={() => handleConnect(person)}
                        className={`py-2 px-4 rounded-md text-sm transition-colors ${
                          connections.has(person.id)
                            ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                            : "bg-green-500 text-white hover:bg-green-700"
                        }`}
                      >
                        {connections.has(person.id) ? "Connected" : "Connect"}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No results found</p>
              )}
            </div>
          </div>

          <div className="w-1/4 bg-gray-50 border-l border-gray-300 p-5">
            <h2 className="text-2xl font-bold mb-5">Latest Financial News</h2>
            <textarea
              value={newUpdate}
              onChange={(e) => setNewUpdate(e.target.value)}
              placeholder="Share an update..."
              className="w-full p-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              onClick={addFinancialUpdate}
              className="bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-700 transition-colors mb-5"
            >
              Post Update
            </button>
            <ul className="space-y-3">
              {financialUpdates.map((update, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-3 rounded-md shadow-sm hover:bg-gray-200 transition-colors"
                >
                  {update}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">Message {selectedPerson?.name}</h2>
              <textarea
                placeholder="Type your message here..."
                className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert(`Message sent to ${selectedPerson?.name}`);
                    closeModal();
                  }}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Communitys;
