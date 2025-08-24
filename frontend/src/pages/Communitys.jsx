import axios from "axios";
import { useState, useEffect } from "react";

const Communitys = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isConnectDialogOpen, setIsConnectDialogOpen] = useState(false);
  const [connections, setConnections] = useState(new Set()); // store emails
  const [financialUpdates, setFinancialUpdates] = useState([]);
  const [likes, setLikes] = useState({});
  const [users, setusers] = useState([]);
  const [messages, setmessages] = useState([]);
  const [user, setuser] = useState("");
  const [wholeuser, setwholeuser] = useState('');
  const [message, setmessage] = useState("");
  let BASE_URL = "http://localhost:4047";

  const uniqueNetworkData = Array.from(
    new Set(users.map((item) => JSON.stringify(item)))
  ).map((item) => JSON.parse(item));

  const roles = ["All", ...new Set(uniqueNetworkData.map((person) => person.role))];

  const filteredData = uniqueNetworkData.filter((person) => {
    const matchesRole = selectedRole === "All" || person.role === selectedRole;
    const matchesSearch = person.username.toLowerCase().includes(searchQuery.toLowerCase());
    const isNotLoggedInUser = person.email !== wholeuser; // exclude logged-in user
    return matchesRole && matchesSearch && isNotLoggedInUser;
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/communitychat/getuser`).then((res) => {
      setusers(res.data);
    });
  }, [users.length]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:4047/verify").then((res) => {
      setwholeuser(res.data.email);
      setuser(res.data.email);
    });
  }, []);


  useEffect(() => {
    if (wholeuser) {
      axios.post(`${BASE_URL}/communitychat/getconnections`, { user: wholeuser })
        .then(res => {
          setConnections(new Set(res.data));
        });
    }
  }, [wholeuser]);

  const api = "pub_668680cb7f49ae92853a14cd9534d380d7b80";
  useEffect(() => {
    const fetchFinancialUpdates = async () => {
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_66696cd93cb944d498af66a299cc4fbf91308&q=finance%20news&country=in&language=en`
        );
        const data = await response.json();
        const result = data.results.slice(0, 5);
        const updates = result.map((item) => item?.title);
        setFinancialUpdates(updates);
      } catch (error) {
        setFinancialUpdates(["Unable to fetch news at the moment."]);
      }
    };

    fetchFinancialUpdates();
  }, []);

  const setmsg = (person) => {
    axios
      .post(`${BASE_URL}/communitychat/getmessages`, {
        user: user,
        receiver: person.email,
      })
      .then((res) => setmessages(res.data));
  };

  const openModal = (person) => {
    setmsg(person);
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  const handleConnect = (person) => {
    if (connections.has(person.email)) {
      alert(`${person.username} is already connected.`);
      return;
    }
    axios.post(`${BASE_URL}/communitychat/addconnection`, { user: wholeuser, connector: person.email })
      .then(() => {
        setConnections(prev => new Set([...prev, person.email]));
        setSelectedPerson(person);
        setIsConnectDialogOpen(true);
      });
  };

  const closeConnectDialog = () => {
    setIsConnectDialogOpen(false);
    setSelectedPerson(null);
  };

  const handleLike = (index) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [index]: !prevLikes[index],
    }));
  };

  const handleShare = (update) => {
    alert(`Shared: ${update}`);
  };

  useEffect(() => {
    if (isModalOpen && selectedPerson) {
      const interval = setInterval(() => {
        setmsg(selectedPerson);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isModalOpen, selectedPerson, user]);

  return (
    <div className="bg-[rgb(224,247,250,0.1)] text-[rgb(1,87,155)] min-h-screen">
      <h1 className="text-4xl font-bold text-center text-[#01579B] mb-6 pt-5">
        Community Engagement
      </h1>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-64 bg-[#E1F5FE] p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-5">Roles</h2>
          <ul className="space-y-2">
            {roles.map((role) => (
              <li key={role} className="flex items-center">
                <input
                  type="radio"
                  id={role}
                  name="role"
                  value={role}
                  checked={selectedRole === role}
                  onChange={() => setSelectedRole(role)}
                  className="mr-2"
                />
                <label
                  htmlFor={role}
                  className={`cursor-pointer p-2 rounded-md ${selectedRole === role
                    ? "bg-[#0288D1] text-white"
                    : "bg-[#E1F5FE] text-[#01579B]"
                    } hover:bg-[#0288D1] hover:text-white transition-colors`}
                >
                  {role}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-grow p-5 flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4 pr-0 lg:pr-5">
            <div className="flex justify-center mb-5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name..."
                className="border border-gray-300 rounded-md px-4 py-2 w-full lg:w-80 text-sm focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
              {filteredData.length > 0 ? (
                filteredData.map((person) => (
                  
                  
                  <div
                    key={person._id}
                    className="bg-[#FFFFFF] border border-gray-300 rounded-lg p-5 text-center shadow-sm transition-transform transform hover:translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex justify-center mb-4">
                      <img
                        src={
                          person.image ||
                          "https://i.pinimg.com/originals/e7/13/89/e713898b573d71485de160a7c29b755d.png"
                        }
                        alt={`${person.username}'s profile`}
                        className="rounded-full w-24 h-24 object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#01579B] mb-2">
                      {person.username}
                    </h3>
                    <p className="text-sm text-[#6C757D] mb-4">{person.role}</p>
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => openModal(person)}
                        className="bg-[#0288D1] text-white py-2 px-4 rounded-md text-sm hover:bg-[#01579B] transition-colors"
                      >
                        Message
                      </button>
                      <button
                        onClick={() => handleConnect(person)}
                        className={`py-2 px-4 rounded-md text-sm transition-colors ${connections.has(person.email)
                          ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                          : "bg-[#0288D1] text-white hover:bg-[#01579B]"
                          }`}
                      >
                        {connections.has(person.email) ? "Connected" : "Connect"}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No results found</p>
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/4 bg-[#E1F5FE] border-t lg:border-t-0 lg:border-l border-gray-300 p-5 mt-5 lg:mt-0">
            <h2 className="text-2xl font-bold mb-5">Latest Financial News</h2>
            <ul className="space-y-3">
              {financialUpdates.map((update, index) => (
                <li
                  key={index}
                  className="bg-[#FFFFFF] p-3 rounded-md shadow-sm hover:bg-gray-200 transition-colors"
                >
                  <p>{update}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleLike(index)}
                      className={`py-1 px-3 rounded-md text-sm transition-colors ${likes[index]
                        ? "bg-red-500 text-white"
                        : "bg-gray-300 text-gray-800"
                        } hover:bg-red-500 hover:text-white`}
                    >
                      {likes[index] ? "Liked" : "Like"}
                    </button>
                    <button
                      onClick={() => handleShare(update)}
                      className="py-1 px-3 rounded-md text-sm bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      Share
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">
                Message {selectedPerson?.username}
              </h2>
              <ul className="h-[200px] border px-3 overflow-y-scroll flex flex-col">
                {messages.map((mess, key) => (
                  <li
                    key={key}
                    style={{
                      justifyContent:
                        mess.sender === user ? "flex-end" : "flex-start",
                      display: "flex",
                      border: "1px solid",
                      backgroundColor:
                        mess.sender === user ? "gray" : "white",
                    }}
                    className="rounded-md px-2 py-1 mb-2"
                  >
                    <p className="text-black" style={{ color: mess.sender === user ? "white" : "black" }}>{mess.message}</p>
                  </li>
                ))}
              </ul>
              <textarea
                placeholder="Type your message here..."
                className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000000]"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
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
                    axios.post(`${BASE_URL}/communitychat/send`, {
                      user: user,
                      receiver: selectedPerson.email,
                      message: message,
                    });
                    setmessage("");
                    setmsg(selectedPerson);
                  }}
                  className="bg-[#0288D1] text-white py-2 px-4 rounded-md hover:bg-[#01579B] transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
        {isConnectDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg shadow-lg w-80">
              <h2 className="text-lg font-bold mb-4">Connection Established</h2>
              <p className="mb-4">
                You are now connected with <b>{selectedPerson?.username}</b>!
              </p>
              <p className="mb-4">Role: {selectedPerson?.role}</p>
              <button
                onClick={closeConnectDialog}
                className="bg-[#0288D1] text-white py-2 px-4 rounded-md hover:bg-[#01579B] transition-colors w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Communitys;
