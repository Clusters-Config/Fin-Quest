// import axios from "axios";
// import { useState, useEffect } from "react";
// import Chat from "../Services/Chat";
// import { FaUserCircle, FaSearch, FaCommentDots, FaLink, FaThumbsUp, FaShareAlt } from 'react-icons/fa';
// import Contatos from "../assets/Tik tok profile picture.jpeg"
// import Footer from "../Services/Footer";
// import Header from "../Services/Header";
// import { useLocation } from "react-router-dom";

// const Communities = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedRole, setSelectedRole] = useState("All");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPerson, setSelectedPerson] = useState(null);
//   const [isConnectDialogOpen, setIsConnectDialogOpen] = useState(false);
//   const [connections, setConnections] = useState(new Set());
//   const [financialUpdates, setFinancialUpdates] = useState([]);
//   const [likes, setLikes] = useState({});
//   const [users, setusers] = useState([]);
//   const [messages, setmessages] = useState([]);
//   const [user, setuser] = useState("");
//   const [wholeuser, setwholeuser] = useState('');
//   const [message, setmessage] = useState("");
//   let BASE_URL = "https://fin-quest-y9ub.onrender.com";
//   const { pathname } = useLocation();


//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   const uniqueNetworkData = Array.from(
//     new Set(users.map((item) => JSON.stringify(item)))
//   ).map((item) => JSON.parse(item));

//   const roles = ["All", ...new Set(uniqueNetworkData.map((person) => person.role))];

//   const filteredData = uniqueNetworkData.filter((person) => {
//     const matchesRole = selectedRole === "All" || person.role === selectedRole;
//     const matchesSearch = person?.profile[0]?.firstname.toLowerCase().includes(searchQuery.toLowerCase()) || person?.username.toLowerCase().includes(searchQuery.toLowerCase());
//     const isNotLoggedInUser = person.email !== wholeuser;
//     return matchesRole && matchesSearch && isNotLoggedInUser;
//   });

//   useEffect(() => {
//     axios.get(`${BASE_URL}/communitychat/getuser`).then((res) => {
//       setusers(res.data);
//     });
//   }, []);

//   useEffect(() => {
//     axios.defaults.withCredentials = true;
//     axios.get("https://fin-quest-y9ub.onrender.com/verify").then((res) => {
//       setwholeuser(res.data.email);
//       setuser(res.data.email);
//     });
//   }, []);

//   useEffect(() => {
//     if (wholeuser) {
//       axios.post(`${BASE_URL}/communitychat/getconnections`, { user: wholeuser })
//         .then(res => {
//           setConnections(new Set(res.data));
//         });
//     }
//   }, [wholeuser]);

//   const api = "pub_668680cb7f49ae92853a14cd9534d380d7b80";
//   useEffect(() => {
//     const fetchFinancialUpdates = async () => {
//       try {
//         const response = await fetch(
//           `https://newsdata.io/api/1/news?apikey=${api}&q=finance%20news&country=in&language=en`
//         );
//         const data = await response.json();
//         const result = data.results.slice(0, 5);
//         const updates = result.map((item) => item?.title);
//         setFinancialUpdates(updates);
//       } catch (error) {
//         setFinancialUpdates(["Unable to fetch news at the moment."]);
//       }
//     };

//     fetchFinancialUpdates();
//   }, []);

//   const setmsg = (person) => {
//     axios
//       .post(`${BASE_URL}/communitychat/getmessages`, {
//         user: user,
//         receiver: person.email,
//       })
//       .then((res) => setmessages(res.data));
//   };

//   const openModal = (person) => {
//     setmsg(person);
//     setSelectedPerson(person);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedPerson(null);
//   };

//   const handleConnect = (person) => {
//     if (connections.has(person.email)) {
//       alert(`${person.username} is already connected.`);
//       return;
//     }
//     axios.post(`${BASE_URL}/communitychat/addconnection`, { user: wholeuser, connector: person.email })
//       .then(() => {
//         setConnections(prev => new Set([...prev, person.email]));
//         setSelectedPerson(person);
//         setIsConnectDialogOpen(true);
//       });
//   };

//   const closeConnectDialog = () => {
//     setIsConnectDialogOpen(false);
//     setSelectedPerson(null);
//   };

//   const handleLike = (index) => {
//     setLikes((prevLikes) => ({
//       ...prevLikes,
//       [index]: !prevLikes[index],
//     }));
//   };

//   const handleShare = (update) => {
//     alert(`Shared: ${update}`);
//   };

//   useEffect(() => {
//     if (isModalOpen && selectedPerson) {
//       const interval = setInterval(() => {
//         setmsg(selectedPerson);
//       }, 1500);
//       return () => clearInterval(interval);
//     }
//   }, [isModalOpen, selectedPerson, user]);

//   return (
//     <div className="bg-white min-h-screen font-sans text-[#212121]">
//       <h1 id="#"></h1>
//       <Header />
//       <Chat />
//       <div className="w-full px-8 py-8  mt-16">
//         <h1 className="text-5xl font-extrabold text-[#0A66C2] text-center mb-10 pt-5">
//           Community Network
//         </h1>

//         <div className="flex flex-col lg:flex-row gap-8 w-full">
//           {/* Roles Filter Sidebar */}
//           <div className="w-full lg:w-72 bg-white rounded-xl shadow-lg p-6">
//             <h2 className="text-2xl font-bold text-[#212121] mb-6">Filter by Role</h2>
//             <ul className="space-y-4">
//               {roles.map((role) => (
//                 <li key={role}>
//                   <label
//                     className={`flex items-center gap-3 cursor-pointer p-3 rounded-lg transition-all duration-300 ${selectedRole === role
//                       ? "bg-[#0A66C2] text-white shadow-md"
//                       : "bg-[#F0F2F5] text-[#212121] hover:bg-[#E2E8F0]"
//                       }`}
//                   >
//                     <input
//                       type="radio"
//                       name="role"
//                       value={role}
//                       checked={selectedRole === role}
//                       onChange={() => setSelectedRole(role)}
//                       className="hidden"
//                     />
//                     <span className="text-xl">
//                       <FaUserCircle />
//                     </span>
//                     <span className="font-semibold">{role}</span>
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Main Content Area */}
//           <div className="flex-1">
//             {/* User Cards Section */}
//             <div className="relative mb-8">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search by name..."
//                 className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-colors"
//               />
//               <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-scroll max-h-screen ">
//               {filteredData.length > 0 ? (
//                 filteredData.map((person) => (
//                   <div
//                     key={person._id}
//                     className="bg-white rounded-xl shadow-md overflow-hidden p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-lg duration-300"
//                   >
//                     <div className="flex justify-center mb-5">
//                       <img
//                         src={
//                           person.image || Contatos

//                         }
//                         alt={`${person.username}'s profile`}
//                         className="rounded-full w-28 h-28 object-cover border-4 border-gray-100"
//                       />
//                     </div>
//                     <h3 className="text-2xl font-bold text-[#0A66C2] mb-1">{person?.profile[0]?.firstname || person.username}</h3>
//                     <p className="text-md text-gray-500 mb-4">{person.role}</p>
//                     <div className="flex flex-col gap-3">
//                       <button
//                         onClick={() => openModal(person)}
//                         className="flex items-center justify-center gap-2 bg-[#0A66C2] text-white py-3 px-4 rounded-full text-md font-semibold hover:bg-[#004182] transition-colors"
//                       >
//                         <FaCommentDots /> Message
//                       </button>
//                       <button
//                         onClick={() => handleConnect(person)}
//                         className={`flex items-center justify-center gap-2 py-3 px-4 rounded-full text-md font-semibold transition-colors ${connections.has(person.email)
//                           ? "bg-gray-300 text-gray-700 cursor-not-allowed"
//                           : "bg-[#FFC04C] text-[#212121] hover:bg-[#e6a943]"
//                           }`}
//                       >
//                         <FaLink />
//                         {connections.has(person.email) ? "Connected" : "Connect"}
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-500 text-center col-span-full">No results found.</p>
//               )}
//             </div>
//           </div>

//           {/* Financial News Sidebar */}
//           <div className="w-full lg:w-80 bg-white rounded-xl shadow-lg p-6 mt-8 lg:mt-0">
//             <h2 className="text-2xl font-bold text-[#212121] mb-6">Latest Financial News</h2>
//             <ul className="space-y-4">
//               {financialUpdates.map((update, index) => (
//                 <li
//                   key={index}
//                   className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
//                 >
//                   <p className="text-sm text-[#212121] mb-3">{update}</p>
//                   <div className="flex gap-3">
//                     <button
//                       onClick={() => handleLike(index)}
//                       className={`flex items-center gap-1 py-2 px-3 rounded-full text-sm font-semibold transition-colors ${likes[index]
//                         ? "bg-red-500 text-white"
//                         : "bg-gray-300 text-gray-700 hover:bg-red-400 hover:text-white"
//                         }`}
//                     >
//                       <FaThumbsUp />
//                       {likes[index] ? "Liked" : "Like"}
//                     </button>
//                     <button
//                       onClick={() => handleShare(update)}
//                       className="flex items-center gap-1 py-2 px-3 rounded-full text-sm font-semibold bg-gray-300 text-gray-700 hover:bg-[#0A66C2] hover:text-white transition-colors"
//                     >
//                       <FaShareAlt /> Share
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Message Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
//               <h2 className="text-2xl font-bold mb-4 text-center">
//                 Message {selectedPerson?.username}
//               </h2>
//               <div className="h-64 border border-gray-300 rounded-lg p-3 overflow-y-scroll mb-4 flex flex-col gap-2">
//                 {messages.map((mess, key) => (
//                   <div
//                     key={key}
//                     className={`rounded-lg py-2 px-4 max-w-[75%] ${mess.sender === user ? "bg-[#0A66C2] text-white self-end" : "bg-gray-200 text-[#212121] self-start"
//                       }`}
//                   >
//                     <p className="text-sm">{mess.message}</p>
//                   </div>
//                 ))}
//               </div>
//               <textarea
//                 placeholder="Type your message here..."
//                 className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A66C2] text-sm resize-none"
//                 value={message}
//                 onChange={(e) => setmessage(e.target.value)}
//               ></textarea>
//               <div className="flex justify-end gap-3 mt-4">
//                 <button
//                   onClick={closeModal}
//                   className="bg-gray-300 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-400 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => {
//                     if (!message.trim()) return;
//                     axios.post(`${BASE_URL}/communitychat/send`, {
//                       user: user,
//                       receiver: selectedPerson.email,
//                       message: message,
//                     });
//                     setmessage("");
//                     setmsg(selectedPerson);
//                   }}
//                   className="bg-[#0A66C2] text-white py-2 px-4 rounded-full font-semibold hover:bg-[#004182] transition-colors"
//                 >
//                   Send
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Connection Dialog Modal */}
//         {isConnectDialogOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-xs text-center">
//               <h2 className="text-xl font-bold mb-3">Connection Established!</h2>
//               <p className="mb-4 text-gray-600">
//                 You are now connected with <b className="text-[#0A66C2]">{selectedPerson?.username}</b>.
//               </p>
//               <button
//                 onClick={closeConnectDialog}
//                 className="bg-[#0A66C2] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#004182] transition-colors w-full"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Communities;
import axios from "axios";
import { useState, useEffect } from "react";
import Chat from "../Services/Chat";
import { FaUserCircle, FaSearch, FaCommentDots, FaLink, FaThumbsUp, FaShareAlt, FaUsers, FaNewspaper, FaFilter, FaTimes, FaPaperPlane, FaCheckCircle, FaClock, FaGlobe } from 'react-icons/fa';
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  let BASE_URL = "https://fin-quest-y9ub.onrender.com";
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
    const matchesSearch = person?.profile?.[0]?.firstname?.toLowerCase().includes(searchQuery.toLowerCase()) || person?.username?.toLowerCase().includes(searchQuery.toLowerCase());
    const isNotLoggedInUser = person.email !== wholeuser;
    return matchesRole && matchesSearch && isNotLoggedInUser;
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/communitychat/getuser`).then((res) => {
      setusers(res.data);
    }).catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("https://fin-quest-y9ub.onrender.com/verify").then((res) => {
      setwholeuser(res.data.email);
      setuser(res.data.email);
    }).catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (wholeuser) {
      axios.post(`${BASE_URL}/communitychat/getconnections`, { user: wholeuser })
        .then(res => {
          setConnections(new Set(res.data));
        }).catch(err => console.log(err));
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
        const result = data.results?.slice(0, 6) || [];
        const updates = result.map((item) => ({
          title: item?.title || "No title available",
          description: item?.description || "No description available",
          url: item?.link || "#",
          source: item?.source_name || "Unknown Source",
          pubDate: item?.pubDate || new Date().toISOString()
        }));
        setFinancialUpdates(updates.length > 0 ? updates : [{
          title: "Unable to fetch news at the moment.",
          description: "Please check your connection and try again later.",
          url: "#",
          source: "System",
          pubDate: new Date().toISOString()
        }]);
      } catch (error) {
        console.log(error);
        setFinancialUpdates([{
          title: "Unable to fetch news at the moment.",
          description: "Please check your connection and try again later.",
          url: "#",
          source: "System",
          pubDate: new Date().toISOString()
        }]);
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
      .then((res) => setmessages(res.data))
      .catch(err => console.log(err));
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
      })
      .catch(err => console.log(err));
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
    alert(`Shared: ${update.title}`);
  };

  useEffect(() => {
    if (isModalOpen && selectedPerson) {
      const interval = setInterval(() => {
        setmsg(selectedPerson);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isModalOpen, selectedPerson, user]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen font-inter text-slate-800">
      <h1 id="#"></h1>
      <Header />
      <Chat />
      
      {/* Hero Section - Compact */}
      <div className="relative overflow-hidden bg-white pt-20 border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20"></div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-200 rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-purple-200 rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 border border-blue-300 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-purple-300 rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <FaUsers className="text-2xl text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Professional Network
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Connect with industry professionals, expand your network, and stay updated
          </p>
          <div className="mt-6 flex justify-center space-x-6 text-slate-700">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl px-6 py-4 border border-blue-200 shadow-md hover:shadow-lg transition-all duration-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">{uniqueNetworkData.length}</div>
              <div className="text-slate-600 text-sm font-medium mt-1">Members</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl px-6 py-4 border border-purple-200 shadow-md hover:shadow-lg transition-all duration-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">{connections.size}</div>
              <div className="text-slate-600 text-sm font-medium mt-1">Connections</div>
            </div>
            <div className="text-center bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl px-6 py-4 border border-indigo-200 shadow-md hover:shadow-lg transition-all duration-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">{roles.length - 1}</div>
              <div className="text-slate-600 text-sm font-medium mt-1">Roles</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8 -mt-4 relative z-20">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-slate-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search professionals by name or username..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-4 rounded-xl font-medium transition-colors duration-200 lg:w-auto w-full justify-center"
            >
              <FaFilter />
              Filter by Role
            </button>
          </div>
          
          {/* Mobile Filter Dropdown */}
          {isFilterOpen && (
            <div className="mt-4 p-4 bg-slate-50 rounded-xl">
              <div className="flex flex-wrap gap-2">
                {roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => {
                      setSelectedRole(role);
                      setIsFilterOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedRole === role
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Desktop Roles Filter Sidebar - Left */}
          <div className="hidden xl:block xl:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <FaFilter className="text-blue-600 text-xl" />
                <h2 className="text-lg font-bold text-slate-800">Roles</h2>
              </div>
              <div className="space-y-2">
                {roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`w-full flex items-center gap-2 p-3 rounded-xl transition-all duration-200 text-left text-sm ${
                      selectedRole === role
                        ? "bg-blue-600 text-white shadow-lg transform scale-105"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <FaUserCircle className="text-base" />
                    <span className="font-medium truncate">{role}</span>
                    {selectedRole === role && <FaCheckCircle className="ml-auto flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - User Cards */}
          <div className="xl:col-span-7">
            {filteredData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredData.map((person) => (
                  <div
                    key={person._id}
                    className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-slate-200 hover:border-blue-300"
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Animated background pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative p-6 z-10">
                      {/* Enhanced Status indicator */}
                      <div className="absolute top-4 right-4 flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full shadow-lg animate-pulse ${connections.has(person.email) ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-slate-300 to-slate-400'}`}></div>
                        {connections.has(person.email) && (
                          <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">Connected</span>
                        )}
                      </div>
                      
                      <div className="flex flex-col items-center text-center">
                        <div className="relative mb-6">
                          {/* Profile image with enhanced styling */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-spin-slow opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            <img
                              src={person.image || Contatos}
                              alt={`${person.username}'s profile`}
                              className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110"
                            />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
                              <FaUserCircle className="text-white text-sm" />
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {person?.profile?.[0]?.firstname || person.username}
                        </h3>
                        
                        <div className="relative mb-6">
                          <p className="text-sm font-semibold bg-gradient-to-r from-slate-100 to-blue-50 text-slate-600 px-4 py-2 rounded-full border border-slate-200 group-hover:from-blue-100 group-hover:to-purple-100 group-hover:border-blue-300 transition-all duration-300">
                            {person.role}
                          </p>
                        </div>
                        
                        <div className="flex flex-col gap-3 w-full">
                          <button
                            onClick={() => openModal(person)}
                            className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                            <div className="relative flex items-center justify-center gap-2">
                              <FaCommentDots className="text-sm" />
                              Message
                            </div>
                          </button>
                          
                          <button
                            onClick={() => handleConnect(person)}
                            className={`group/btn relative overflow-hidden py-3 px-6 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                              connections.has(person.email)
                                ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 cursor-not-allowed border-2 border-green-200"
                                : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
                            }`}
                          >
                            {!connections.has(person.email) && (
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                            )}
                            <div className="relative flex items-center justify-center gap-2">
                              <FaLink className="text-sm" />
                              {connections.has(person.email) ? "Connected" : "Connect"}
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl border border-slate-200">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                  <FaUsers className="relative text-8xl text-slate-300 mx-auto mb-6" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent mb-3">No professionals found</h3>
                <p className="text-slate-500 text-lg">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>

          {/* Financial News Sidebar - Right */}
          <div className="xl:col-span-3">
            <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-2xl border-2 border-blue-200 sticky top-24">
              <div className="p-6 border-b border-blue-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative">
                    <FaNewspaper className="text-blue-600 text-2xl" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Market Insights</h2>
                </div>
                <p className="text-sm text-slate-600">Latest financial news and updates</p>
              </div>
              
              <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
                {financialUpdates.map((update, index) => (
                  <div
                    key={index}
                    className="group relative p-6 border-b border-blue-100 last:border-b-0 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300"
                  >
                    {/* News Article Card */}
                    <div className="space-y-4">
                      {/* Article Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors duration-200">
                            {truncateText(update.title, 80)}
                          </h3>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0 mt-2"></div>
                      </div>
                      
                      {/* Article Description */}
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {truncateText(update.description, 120)}
                      </p>
                      
                      {/* Article Meta */}
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                          <FaGlobe className="text-blue-500" />
                          <span className="font-medium">{truncateText(update.source, 15)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaClock className="text-slate-400" />
                          <span>{formatDate(update.pubDate)}</span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 pt-2">
                        <button
                          onClick={() => handleLike(index)}
                          className={`group/btn flex items-center gap-2 py-2 px-3 rounded-full text-xs font-semibold transition-all duration-300 transform hover:scale-105 ${
                            likes[index]
                              ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md"
                              : "bg-white text-slate-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-500 border border-slate-200 hover:border-red-300"
                          }`}
                        >
                          <FaThumbsUp className={`text-xs ${likes[index] ? 'animate-bounce' : ''}`} />
                          <span>{likes[index] ? "Liked" : "Like"}</span>
                        </button>
                        
                        <button
                          onClick={() => handleShare(update)}
                          className="group/btn flex items-center gap-2 py-2 px-3 rounded-full text-xs font-semibold bg-white text-slate-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 border border-slate-200 hover:border-blue-300 transition-all duration-300 transform hover:scale-105"
                        >
                          <FaShareAlt className="text-xs" />
                          <span>Share</span>
                        </button>
                        
                        {update.url !== "#" && (
                          <a
                            href={update.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-2 py-2 px-3 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-purple-600 shadow-md transition-all duration-300 transform hover:scale-105"
                          >
                            <FaGlobe className="text-xs" />
                            <span>Read</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Message Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedPerson?.image || Contatos}
                      alt="Profile"
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                    <div>
                      <h2 className="text-xl font-bold">
                        {selectedPerson?.profile?.[0]?.firstname || selectedPerson?.username}
                      </h2>
                      <p className="text-blue-200 text-sm">{selectedPerson?.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-8 h-8 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-colors duration-200"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-80 p-4 overflow-y-auto bg-slate-50">
                <div className="space-y-3">
                  {messages.map((mess, key) => (
                    <div
                      key={key}
                      className={`flex ${mess.sender === user ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                          mess.sender === user
                            ? "bg-blue-600 text-white rounded-br-md"
                            : "bg-white text-slate-800 border border-slate-200 rounded-bl-md"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{mess.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 bg-white border-t border-slate-200">
                <div className="flex gap-3">
                  <textarea
                    placeholder="Type your message here..."
                    className="flex-1 p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    rows="2"
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                  />
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
                    className="self-end bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center"
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Connection Dialog Modal */}
        {isConnectDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm text-center overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
                <FaCheckCircle className="text-4xl mx-auto mb-3" />
                <h2 className="text-2xl font-bold">Connection Established!</h2>
              </div>
              <div className="p-6">
                <p className="mb-6 text-slate-600 leading-relaxed">
                  You are now connected with{" "}
                  <span className="font-bold text-blue-600">
                    {selectedPerson?.profile?.[0]?.firstname || selectedPerson?.username}
                  </span>
                  . Start networking and collaborate on exciting opportunities!
                </p>
                <button
                  onClick={closeConnectDialog}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-xl font-semibold transition-colors duration-200 w-full shadow-lg"
                >
                  Continue Networking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #cbd5e1, #94a3b8);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #94a3b8, #64748b);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
        }
        
        /* Enhanced responsive design */
        @media (min-width: 1280px) {
          .xl\:grid-cols-3 > * {
            min-height: 420px;
          }
        }
        
        /* Improved card spacing and alignment */
        @media (min-width: 768px) {
          .md\:grid-cols-2 {
            gap: 1.5rem;
          }
        }
        
        /* News section enhancements */
        .news-card-hover:hover {
          transform: translateX(4px);
        }
        
        /* Smooth transitions for all interactive elements */
        * {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Custom gradient borders */
        .gradient-border {
          background: linear-gradient(white, white) padding-box, 
                      linear-gradient(45deg, #3b82f6, #8b5cf6) border-box;
          border: 2px solid transparent;
        }
        
        /* Enhanced hover effects */
        .card-hover:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Loading states */
        .loading-shimmer {
          background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        /* Focus states for accessibility */
        .focus-ring:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        /* Enhanced news section styling */
        .news-item {
          position: relative;
          overflow: hidden;
        }
        
        .news-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .news-item:hover::before {
          opacity: 1;
        }
        
        /* Better mobile responsiveness */
        @media (max-width: 640px) {
          .mobile-spacing {
            padding: 1rem;
          }
          
          .mobile-text {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Communities;