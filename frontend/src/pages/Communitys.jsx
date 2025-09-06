import axios from "axios";
import { useState, useEffect } from "react";
import Chat from "../Services/Chat";
import { FaUserCircle, FaSearch, FaCommentDots, FaLink, FaThumbsUp, FaShareAlt } from 'react-icons/fa';
import Contatos from "../assets/Tik tok profile picture.jpeg"
import Footer from "../Services/Footer";
import Header from "../Services/Header";
import { useLocation } from "react-router-dom";

const Communities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isConnectDialogOpen, setIsConnectDialogOpen] = useState(false);
  const [connections, setConnections] = useState(new Set());
  const [financialUpdates, setFinancialUpdates] = useState([]);
  const [likes, setLikes] = useState({});
  const [users, setusers] = useState([]);
  const [messages, setmessages] = useState([]);
  const [user, setuser] = useState("");
  const [wholeuser, setwholeuser] = useState('');
  const [message, setmessage] = useState("");
  let BASE_URL = "http://localhost:4047";
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const uniqueNetworkData = Array.from(
    new Set(users.map((item) => JSON.stringify(item)))
  ).map((item) => JSON.parse(item));

  const roles = ["All", ...new Set(uniqueNetworkData.map((person) => person.role))];

  const filteredData = uniqueNetworkData.filter((person) => {
    const matchesRole = selectedRole === "All" || person.role === selectedRole;
    const matchesSearch = person?.profile[0]?.firstname.toLowerCase().includes(searchQuery.toLowerCase()) || person?.username.toLowerCase().includes(searchQuery.toLowerCase());
    const isNotLoggedInUser = person.email !== wholeuser;
    return matchesRole && matchesSearch && isNotLoggedInUser;
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/communitychat/getuser`).then((res) => {
      setusers(res.data);
    });
  }, []);

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
          `https://newsdata.io/api/1/news?apikey=${api}&q=finance%20news&country=in&language=en`
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
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isModalOpen, selectedPerson, user]);

  return (
    <div className="bg-white min-h-screen font-sans text-[#212121]">
      <h1 id="#"></h1>
      <Header />
      <Chat />
      <div className="w-full px-8 py-8  mt-16">
        <h1 className="text-5xl font-extrabold text-[#0A66C2] text-center mb-10 pt-5">
          Community Network
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Roles Filter Sidebar */}
          <div className="w-full lg:w-72 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#212121] mb-6">Filter by Role</h2>
            <ul className="space-y-4">
              {roles.map((role) => (
                <li key={role}>
                  <label
                    className={`flex items-center gap-3 cursor-pointer p-3 rounded-lg transition-all duration-300 ${selectedRole === role
                      ? "bg-[#0A66C2] text-white shadow-md"
                      : "bg-[#F0F2F5] text-[#212121] hover:bg-[#E2E8F0]"
                      }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={selectedRole === role}
                      onChange={() => setSelectedRole(role)}
                      className="hidden"
                    />
                    <span className="text-xl">
                      <FaUserCircle />
                    </span>
                    <span className="font-semibold">{role}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* User Cards Section */}
            <div className="relative mb-8">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-colors"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-scroll max-h-screen ">
              {filteredData.length > 0 ? (
                filteredData.map((person) => (
                  <div
                    key={person._id}
                    className="bg-white rounded-xl shadow-md overflow-hidden p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-lg duration-300"
                  >
                    <div className="flex justify-center mb-5">
                      <img
                        src={
                          person.image || Contatos

                        }
                        alt={`${person.username}'s profile`}
                        className="rounded-full w-28 h-28 object-cover border-4 border-gray-100"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A66C2] mb-1">{person?.profile[0]?.firstname || person.username}</h3>
                    <p className="text-md text-gray-500 mb-4">{person.role}</p>
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => openModal(person)}
                        className="flex items-center justify-center gap-2 bg-[#0A66C2] text-white py-3 px-4 rounded-full text-md font-semibold hover:bg-[#004182] transition-colors"
                      >
                        <FaCommentDots /> Message
                      </button>
                      <button
                        onClick={() => handleConnect(person)}
                        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-full text-md font-semibold transition-colors ${connections.has(person.email)
                          ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                          : "bg-[#FFC04C] text-[#212121] hover:bg-[#e6a943]"
                          }`}
                      >
                        <FaLink />
                        {connections.has(person.email) ? "Connected" : "Connect"}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center col-span-full">No results found.</p>
              )}
            </div>
          </div>

          {/* Financial News Sidebar */}
          <div className="w-full lg:w-80 bg-white rounded-xl shadow-lg p-6 mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold text-[#212121] mb-6">Latest Financial News</h2>
            <ul className="space-y-4">
              {financialUpdates.map((update, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <p className="text-sm text-[#212121] mb-3">{update}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleLike(index)}
                      className={`flex items-center gap-1 py-2 px-3 rounded-full text-sm font-semibold transition-colors ${likes[index]
                        ? "bg-red-500 text-white"
                        : "bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white"
                        }`}
                    >
                      <FaThumbsUp />
                      {likes[index] ? "Liked" : "Like"}
                    </button>
                    <button
                      onClick={() => handleShare(update)}
                      className="flex items-center gap-1 py-2 px-3 rounded-full text-sm font-semibold bg-gray-300 text-gray-700 hover:bg-[#0A66C2] hover:text-white transition-colors"
                    >
                      <FaShareAlt /> Share
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Message Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Message {selectedPerson?.username}
              </h2>
              <div className="h-64 border border-gray-300 rounded-lg p-3 overflow-y-scroll mb-4 flex flex-col gap-2">
                {messages.map((mess, key) => (
                  <div
                    key={key}
                    className={`rounded-lg py-2 px-4 max-w-[75%] ${mess.sender === user ? "bg-[#0A66C2] text-white self-end" : "bg-gray-200 text-[#212121] self-start"
                      }`}
                  >
                    <p className="text-sm">{mess.message}</p>
                  </div>
                ))}
              </div>
              <textarea
                placeholder="Type your message here..."
                className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A66C2] text-sm resize-none"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              ></textarea>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (!message.trim()) return;
                    axios.post(`${BASE_URL}/communitychat/send`, {
                      user: user,
                      receiver: selectedPerson.email,
                      message: message,
                    });
                    setmessage("");
                    setmsg(selectedPerson);
                  }}
                  className="bg-[#0A66C2] text-white py-2 px-4 rounded-full font-semibold hover:bg-[#004182] transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Connection Dialog Modal */}
        {isConnectDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-xs text-center">
              <h2 className="text-xl font-bold mb-3">Connection Established!</h2>
              <p className="mb-4 text-gray-600">
                You are now connected with <b className="text-[#0A66C2]">{selectedPerson?.username}</b>.
              </p>
              <button
                onClick={closeConnectDialog}
                className="bg-[#0A66C2] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#004182] transition-colors w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Communities;
