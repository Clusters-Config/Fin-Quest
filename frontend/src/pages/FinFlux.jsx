import React, { useEffect, useState } from "react";
import { PlayCircle, Video, Scissors } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Search, Filter } from "lucide-react";

export default function VideoGallery() {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || "NO_API_KEY";
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || "NO_CHANNEL_ID";

  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showDropdown, setShowDropdown] = useState(false);

  // ✅ Decode HTML entities like &quot; into real characters
  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=12`
        );
        const data = await res.json();

        const videoItems = data.items.filter(
          (item) => item.id.kind === "youtube#video"
        );
        const videoIds = videoItems.map((v) => v.id.videoId).join(",");

        const detailsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=contentDetails`
        );
        const detailsData = await detailsRes.json();

        const merged = videoItems.map((v, i) => ({
          id: v.id.videoId,
          title: decodeHtml(v.snippet.title), // ✅ decode applied here
          thumbnail: v.snippet.thumbnails.high.url,
          duration: detailsData.items[i]?.contentDetails?.duration || "N/A",
        }));

        setVideos(merged);
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    };

    fetchVideos();
  }, []);

  const parseDuration = (iso) => {
    if (!iso) return 0;
    const match = iso.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
    const minutes = match?.[1] ? parseInt(match[1]) : 0;
    const seconds = match?.[2] ? parseInt(match[2]) : 0;
    return minutes * 60 + seconds;
  };

  const formatDuration = (iso) => {
    const total = parseDuration(iso);
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const filteredVideos = videos.filter((v) => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase());
    const duration = parseDuration(v.duration);

    if (filter === "videos") return matchesSearch && duration >= 60;
    if (filter === "shorts") return matchesSearch && duration < 60;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-pink-100 to-pink py-12 text-center">
  <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
    FinQuest VideoHub
  </h1>
  <p className="mt-4 text-lg text-gray-600">
    <Typewriter
      words={[
        "Welcome to explore financial insights, strategies, and market trends through videos.",
        "Stay updated with the latest financial knowledge.",
        "Learn, grow, and achieve your financial goals with us!"
      ]}
      loop={true}       // keeps typing infinitely
      cursor
      cursorStyle="|"
      typeSpeed={50}
      deleteSpeed={30}
      delaySpeed={2000}
    />
  </p>
</header>

      {/* Search + Filters */}
      <div className="max-w-4xl mx-auto mt-6 px-4">
        <div className="flex items-center bg-white shadow-md rounded-xl p-1 border border-pink-300">
          <Search className="text-gray-400 w-6 h-6 mr-2" />
          <input
            type="text"
            placeholder="Search videos..."
            className="flex-1 outline-none text-gray-700 text-sm py-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-lg hover:bg-pink-200"
            >
              <Filter className="w-5 h-5 text-gray-600" />
              Filter
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200 z-20">
                <ul className="py-2 text-sm text-gray-700">
                  <li
                    className="px-4 py-2 hover:bg-pink-100 cursor-pointer"
                    onClick={() => {
                      setFilter("all");
                      setShowDropdown(false);
                    }}
                  >
                    All
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-pink-100 cursor-pointer"
                    onClick={() => {
                      setFilter("videos");
                      setShowDropdown(false);
                    }}
                  >
                    Videos
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-pink-100 cursor-pointer"
                    onClick={() => {
                      setFilter("shorts");
                      setShowDropdown(false);
                    }}
                  >
                    Shorts
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Points instead of buttons */}
        <div className="flex gap-6 mt-4 text-gray-700 font-medium justify-center">
          <div
            className={`flex items-center gap-1 cursor-pointer ${filter === "all" ? "text-pink-600" : ""}`}
            onClick={() => setFilter("all")}
          >
            <PlayCircle className="w-4 h-4" /> All
          </div>
          <div
            className={`flex items-center gap-1 cursor-pointer ${filter === "videos" ? "text-pink-600" : ""}`}
            onClick={() => setFilter("videos")}
          >
            <Video className="w-4 h-4" /> Videos
          </div>
          <div
            className={`flex items-center gap-1 cursor-pointer ${filter === "shorts" ? "text-pink-600" : ""}`}
            onClick={() => setFilter("shorts")}
          >
            <Scissors className="w-4 h-4" /> Shorts
          </div>
        </div>
      </div>

      {/* Video Display */}
      {filter === "shorts" ? (
        // Shorts Reel View
        <div className="max-w-md mx-auto mt-8 px-4 flex flex-col gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="relative bg-black rounded-xl overflow-hidden shadow-lg h-[80vh] flex items-center justify-center"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {formatDuration(video.duration)}
                </span>
                <div className="absolute bottom-12 left-4 text-white">
                  <h3 className="text-lg font-semibold line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      ) : (
        // Normal Grid View
        <div className="max-w-6xl mx-auto mt-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl hover:scale-105 transition transform"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {formatDuration(video.duration)}
                </span>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
