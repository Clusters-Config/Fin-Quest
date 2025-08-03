// Full React code with all requested enhancements
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faChalkboardTeacher,
  faHandshake,
  faSearch,
  faPaperPlane,
  faHeart,
  faMessage,
  faShare
} from '@fortawesome/free-solid-svg-icons';

const DiscussionBoard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [discussion, setDiscussion] = useState("");
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Ravi Patel",
      content: "Does anyone have tips for preparing for the CFA Level II exam?",
      hashtags: ["#investing"],
      timestamp: "2 hours ago",
      likes: 3,
      replies: 2
    },
    {
      id: 2,
      user: "Sneha Iyer",
      content: "We are conducting a webinar on Financial Modeling next week! Join in!",
      hashtags: ["#budgeting"],
      timestamp: "5 hours ago",
      likes: 1,
      replies: 1
    },
    {
      id: 3,
      user: "Ajay Kumar",
      content: "Looking for study group members for the Investment Analysis track.",
      hashtags: ["#student"],
      timestamp: "1 day ago",
      likes: 2,
      replies: 0
    },
  ]);

  const popularHashtags = [
    { tag: "#budgeting", count: 156 },
    { tag: "#investing", count: 134 },
    { tag: "#student", count: 89 },
    { tag: "#careers", count: 67 },
  ];

  const handlePost = () => {
    if (username.trim() && discussion.trim()) {
      const newPost = {
        id: posts.length + 1,
        user: username,
        content: discussion,
        hashtags: suggestedTags.filter(tag => discussion.includes(tag)),
        timestamp: "Just now",
        likes: 0,
        replies: 0
      };
      setPosts([newPost, ...posts]);
      setUsername("");
      setDiscussion("");
    }
  };
  

  const suggestedTags = ["#budgeting", "#investing", "#student"];

  const filteredPosts = posts.filter(post =>
    post.content.toLowerCase().includes(search.toLowerCase()) ||
    post.hashtags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  const likePost = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow mb-10 border flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-green-800">Discussion Board</h1>
          <p className="text-gray-600">Ask questions, share insights, and collaborate with peers.</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">Active Discussions: 4</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">Members Online: 247</span>
        </div>
      </div>
      {/* Tabs */}
            <div className="flex justify-center gap-4 mb-8 text-sm font-medium text-gray-600">
                {[
                    { name: "Groups", path: "/ForumPage" },
                    { name: "Webinars", path: "/Webinar" },
                    { name: "Experts", path: "/Experts" },
                    { name: "Tools", path: "/Tools" },
                     { name: "Discussionboard", path: "/Discussionboard" },

                ].map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => navigate(tab.path)}
                        className={`px-4 py-2 rounded-md border text-gray-600 bg-gray-50 hover:border-b-2 hover:border-blue-600 transition duration-200 ${window.location.pathname === tab.path
                                ? "border-b-2 border-blue-900 text-blue-900 bg-gray-100"
                                : ""
                            }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="flex items-center bg-white p-3 rounded-lg shadow">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search discussions, topics, or tags..."
            className="w-full focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Create Post */}
          <div className="bg-white p-4 rounded-xl shadow">
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 mb-3"
              placeholder="Start a new discussion..."
              value={discussion}
              onChange={(e) => setDiscussion(e.target.value)}
            ></textarea>
            <div className="flex gap-2 mb-4">
              {suggestedTags.map(tag => (
                <span
                  key={tag}
                  onClick={() => setDiscussion(discussion + ' ' + tag)}
                  className="cursor-pointer bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200"
                >{tag}</span>
              ))}
            </div>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-50"
              onClick={handlePost}
              disabled={!discussion.trim() || !username.trim()}
            >
              <FontAwesomeIcon icon={faPaperPlane} /> Post Discussion
            </button>
            <input
              className="mt-3 w-full border border-gray-300 rounded-md p-2"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Discussion Feed */}
          {filteredPosts.map(post => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-xl shadow border hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-200 text-green-800 w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  {post.user[0]}
                </div>
                <div>
                  <p className="font-semibold text-green-800">{post.user}</p>
                  <p className="text-sm text-gray-400">{post.timestamp}</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-1">Discussion</h3>
              <p className="text-gray-700 mb-2">{post.content}</p>
              <div className="flex gap-2 flex-wrap mb-3">
                {post.hashtags.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>
              <div className="flex gap-6 text-sm text-gray-600">
                <button onClick={() => likePost(post.id)} className="flex items-center gap-1 hover:text-red-500">
                  <FontAwesomeIcon icon={faHeart} /> {post.likes}
                </button>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faMessage} /> {post.replies}
                </span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faShare} /> Share
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-3 text-green-800">Popular Topics</h3>
            {popularHashtags.map(item => (
              <div key={item.tag} className="flex justify-between py-1">
                <span className="text-blue-700">{item.tag}</span>
                <span className="text-gray-600 text-sm">{item.count} posts</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-3 text-green-800">Community Guidelines</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Be respectful and kind</li>
              <li>Stay on topic</li>
              <li>No spam or self-promotion</li>
              <li>Use clear, constructive language</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-3 text-green-800">Recent Activity</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li><strong>Rajiv</strong> liked a post</li>
              <li><strong>Meera</strong> replied to a discussion</li>
              <li><strong>Alok</strong> started a new topic</li>
              <li><strong>Anita</strong> joined the thread</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionBoard;
