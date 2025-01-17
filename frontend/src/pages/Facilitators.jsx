import React, { useState } from "react";

const Facilitators = () => {
  // Search Bar -Hook
  const [searchQuery, setSearchQuery] = useState("");
  // Side bar - Hook
  const [selectedRole, setSelectedRole] = useState("All");

  // Sample Data 
  const networkData = [
    { 
      id: 1, 
      name: "Veeresh", 
      domain: "Financial Analyst", 
      image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" 
    },
    { 
      id: 2, 
      name: "Sabari", 
      domain: "Investment Banker", 
      image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" 
    },
    { 
      id: 3, 
      name: "Dinesh", 
      domain: "Risk Manager", 
      image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" 
    },
    { 
      id: 4, 
      name: "Atharv", 
      domain: "Financial Software Developer", 
      image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" 
    },
    { 
      id: 5, 
      name: "Arvind", 
      domain: "Quantitative Analyst", 
      image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" 
    },
    { 
      id: 6, 
      name: "Gokulnath", 
      domain: "Investment Banker", 
      image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" 
    },
    { 
      id: 7, 
      name: "Sanjaay", 
      domain: "Accountant", 
      image: "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png" 
    },
  ];

  // Remove duplicates based on name and domain
  const uniqueNetworkData = Array.from(
    new Set(networkData.map((item) => JSON.stringify(item)))
  ).map((item) => JSON.parse(item));

  // Extract unique roles for the sidebar
  const roles = ["All", ...new Set(uniqueNetworkData.map((person) => person.domain))];

  // Filter data based on the search query and selected role
  const filteredData = uniqueNetworkData.filter((person) => {
    const matchesRole = selectedRole === "All" || person.domain === selectedRole;
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-200 p-5">
        <h2 className="text-xl font-bold mb-5">Roles</h2>
        <ul className="space-y-2">
          {roles.map((role) => (
            <li
              key={role}
              className={`cursor-pointer p-2 rounded-md ${
                selectedRole === role ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
              } hover:bg-blue-400 hover:text-white transition-colors`}
              onClick={() => setSelectedRole(role)}
            >
              {role}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-5">
        {/* Search Bar */}
        <div className="flex justify-center mb-5">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name..."
            className="border border-gray-300 rounded-md px-4 py-2 w-80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <br />

        {/* Facilitator Cards */}
        <div className="flex flex-wrap gap-5 justify-center">
          {filteredData.length > 0 ? (
            filteredData.map((person) => (
              <div
                key={person.id}
                className="bg-gray-100 border border-gray-300 rounded-lg p-5 w-64 text-center shadow-sm transition-transform transform hover:translate-y-1 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={person.image}
                    alt={`${person.name}'s profile`}
                    className="rounded-full w-24 h-24 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{person.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{person.domain}</p>
                <div className="flex gap-2 justify-center">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition-colors">
                    Message
                  </button>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-md text-sm hover:bg-green-700 transition-colors">
                    Connect
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Facilitators;
