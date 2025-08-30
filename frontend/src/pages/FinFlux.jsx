import React, { useEffect, useState, useRef } from "react";
import { PlayCircle, Video, Scissors } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Search, Filter } from "lucide-react";

export default function VideoGallery() {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || "NO_API_KEY";
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || "NO_CHANNEL_ID";

  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showDropdown, setShowDropdown] = useState(false);
  const videoRefs = useRef([]);


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

        if (!res.ok || data.error) {
          console.error("Error fetching videos from API:", data);
          setError(`YouTube API Error: ${data.error?.message || 'Failed to fetch videos. Please check the API key.'}`);
          setVideos([]);
          return;
        }

        if (!data.items || data.items.length === 0) {
          console.error("No video items found:", data);
          setError("No videos found for this channel.");
          setVideos([]);
          return;
        }

        const videoItems = data.items.filter(
          (item) => item.id.kind === "youtube#video"
        );

        if (videoItems.length === 0) {
          setError("No video content found for this channel.");
          setVideos([]);
          return;
        }

        const videoIds = videoItems.map((v) => v.id.videoId).join(",");

        const detailsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=contentDetails`
        );
        const detailsData = await detailsRes.json();

        if (!detailsRes.ok || detailsData.error) {
          console.error("Error fetching video details:", detailsData);
          setError(`YouTube API Error: ${detailsData.error?.message || 'Failed to fetch video details.'}`);
          return;
        }

        const merged = videoItems.map((v, i) => ({
          id: v.id.videoId,
          title: decodeHtml(v.snippet.title),
          thumbnail: v.snippet.thumbnails.high.url,
          duration: detailsData.items[i]?.contentDetails?.duration || "N/A",
        }));

        setVideos(merged);
        setError(null); // Clear any previous errors on success
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Network error: Failed to connect to YouTube API. Please check your internet connection.");
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


  useEffect(() => {
    if (filter !== "shorts") return;

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px', // Slightly less restrictive margin
      threshold: 0.6 // Lower threshold for easier triggering
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const iframe = entry.target;
        if (entry.isIntersecting) {
          // Play and unmute the current video
          setTimeout(() => {
            iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
          }, 100); // Small delay to ensure iframe is ready
        } else {
          // Pause and mute other videos
          iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          iframe.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}', '*');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Clear previous refs and observe current iframe elements
    const currentRefs = videoRefs.current.filter(Boolean);
    currentRefs.forEach((iframe) => {
      if (iframe) observer.observe(iframe);
    });

    return () => {
      currentRefs.forEach((iframe) => {
        if (iframe) observer.unobserve(iframe);
      });
    };
  }, [filter, filteredVideos]);

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
            loop={true}
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

      {error && (
        <div className="max-w-6xl mx-auto mt-8 px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <div className="text-red-600 font-medium mb-2">⚠️ Unable to Load Videos</div>
            <p className="text-red-500 text-sm">{error}</p>
            <p className="text-gray-600 text-xs mt-2">
              Please check your YouTube API key configuration in the environment variables.
            </p>
          </div>
        </div>
      )}

      {filter === "shorts" ? (

        <div className="max-w-md mx-auto mt-8 px-4 flex flex-col gap-6">
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              className="relative bg-black rounded-xl overflow-hidden shadow-lg h-[80vh] flex items-center justify-center"
            >
              <iframe
                ref={(el) => (videoRefs.current[index] = el)}
                src={`https://www.youtube.com/embed/${video.id}?autoplay=${index === 0 ? 1 : 0}&controls=1&loop=1&playlist=${video.id}&enablejsapi=1&mute=${index === 0 ? 0 : 1}`}
                title={video.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white bg-gradient-to-t from-black/70 to-transparent p-4 rounded-lg">
                <h3 className="text-lg font-semibold line-clamp-2">
                  {video.title}
                </h3>
                <span className="text-sm opacity-75">
                  {formatDuration(video.duration)}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (

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