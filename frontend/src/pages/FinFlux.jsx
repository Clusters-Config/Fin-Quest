 import React, { useEffect, useState, useRef } from "react";
import { PlayCircle, Video, Scissors, Heart, Share2, MessageCircle, Bookmark, ChevronUp, ChevronDown, X, Pause, Play, Volume2, VolumeX } from "lucide-react";
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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showReelsView, setShowReelsView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [interactions, setInteractions] = useState({});
  const [loading, setLoading] = useState(true);
  const videoRefs = useRef([]);
  const reelsContainerRef = useRef(null);

  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  // Format view count
  const formatViewCount = (count) => {
    const num = parseInt(count);
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const initializeInteractions = (videoList) => {
    const initialInteractions = {};
    videoList.forEach(video => {
      initialInteractions[video.id] = {
        liked: false,
        bookmarked: false,
        likes: video.likes || Math.floor(Math.random() * 500) + 50
      };
    });
    setInteractions(initialInteractions);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20&type=video`
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

        const [detailsRes, statsRes] = await Promise.all([
          fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=contentDetails`
          ),
          fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=statistics`
          )
        ]);

        const detailsData = await detailsRes.json();
        const statsData = await statsRes.json();

        if (!detailsRes.ok || detailsData.error) {
          console.error("Error fetching video details:", detailsData);
          setError(`YouTube API Error: ${detailsData.error?.message || 'Failed to fetch video details.'}`);
          return;
        }

        const merged = videoItems.map((v, i) => ({
          id: v.id.videoId,
          title: decodeHtml(v.snippet.title),
          thumbnail: v.snippet.thumbnails.maxres?.url || v.snippet.thumbnails.high.url,
          duration: detailsData.items[i]?.contentDetails?.duration || "N/A",
          publishedAt: v.snippet.publishedAt,
          description: v.snippet.description,
          views: formatViewCount(statsData.items[i]?.statistics?.viewCount || 0),
          likes: parseInt(statsData.items[i]?.statistics?.likeCount || 0),
          embedUrl: `https://www.youtube.com/embed/${v.id.videoId}?autoplay=1&controls=1&rel=0&modestbranding=1&enablejsapi=1`
        }));

        setVideos(merged);
        initializeInteractions(merged);
        setError(null); // Clear any previous errors on success
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Network error: Failed to connect to YouTube API. Please check your internet connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const parseDuration = (iso) => {
    if (!iso) return 0;
    const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    const hours = match?.[1] ? parseInt(match[1]) : 0;
    const minutes = match?.[2] ? parseInt(match[2]) : 0;
    const seconds = match?.[3] ? parseInt(match[3]) : 0;
    return hours * 3600 + minutes * 60 + seconds;
  };

  const formatDuration = (iso) => {
    const total = parseDuration(iso);
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const filteredVideos = videos.filter((v) => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase());
    const duration = parseDuration(v.duration);

    if (filter === "videos") return matchesSearch && duration >= 60;
    if (filter === "shorts") return matchesSearch && duration < 60;
    return matchesSearch;
  });

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
    setShowReelsView(true);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const handleCloseReels = () => {
    setShowReelsView(false);
    setIsPlaying(false);
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < filteredVideos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setIsPlaying(true); // Auto-play next video
    }
  };

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setIsPlaying(true); // Auto-play previous video
    }
  };

  const handleInteraction = (videoId, type) => {
    setInteractions(prev => ({
      ...prev,
      [videoId]: {
        ...prev[videoId],
        [type]: !prev[videoId][type],
        likes: type === 'liked' 
          ? prev[videoId].liked 
            ? prev[videoId].likes - 1 
            : prev[videoId].likes + 1
          : prev[videoId].likes
      }
    }));
  };

  // Auto-scroll and continuous play for shorts
  useEffect(() => {
    if (filter !== "shorts" || showReelsView) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.7
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const iframe = entry.target;
        const index = parseInt(iframe.dataset.index);
        
        if (entry.isIntersecting) {
          // Auto-play the current video
          setTimeout(() => {
            iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
          }, 200);
        } else {
          // Pause other videos
          iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRefs = videoRefs.current.filter(Boolean);
    currentRefs.forEach((iframe) => {
      if (iframe) observer.observe(iframe);
    });

    return () => {
      currentRefs.forEach((iframe) => {
        if (iframe) observer.unobserve(iframe);
      });
    };
  }, [filter, filteredVideos, showReelsView]);

  // Keyboard navigation for reels
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (showReelsView) {
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          handlePrevVideo();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          handleNextVideo();
        } else if (e.key === 'Escape') {
          handleCloseReels();
        } else if (e.key === ' ') {
          e.preventDefault();
          setIsPlaying(!isPlaying);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showReelsView, currentVideoIndex, filteredVideos.length, isPlaying]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-gray-800 text-xl font-semibold mb-2">Loading FinQuest Videos</h2>
          <p className="text-gray-600">Fetching the latest financial insights...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-gradient-to-r from-pink-100 to-pink-200 py-12 text-center">
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
                className="flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors"
              >
                <Filter className="w-5 h-5 text-gray-600" />
                Filter
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200 z-20">
                  <ul className="py-2 text-sm text-gray-700">
                    <li
                      className="px-4 py-2 hover:bg-pink-100 cursor-pointer transition-colors"
                      onClick={() => {
                        setFilter("all");
                        setShowDropdown(false);
                      }}
                    >
                      All
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-pink-100 cursor-pointer transition-colors"
                      onClick={() => {
                        setFilter("videos");
                        setShowDropdown(false);
                      }}
                    >
                      Videos
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-pink-100 cursor-pointer transition-colors"
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
              className={`flex items-center gap-1 cursor-pointer transition-colors ${filter === "all" ? "text-pink-600" : "hover:text-pink-500"}`}
              onClick={() => setFilter("all")}
            >
              <PlayCircle className="w-4 h-4" /> All
            </div>
            <div
              className={`flex items-center gap-1 cursor-pointer transition-colors ${filter === "videos" ? "text-pink-600" : "hover:text-pink-500"}`}
              onClick={() => setFilter("videos")}
            >
              <Video className="w-4 h-4" /> Videos
            </div>
            <div
              className={`flex items-center gap-1 cursor-pointer transition-colors ${filter === "shorts" ? "text-pink-600" : "hover:text-pink-500"}`}
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

        {/* Video Display */}
        {filter === "shorts" ? (
          // Enhanced Shorts Reel View with auto-scroll
          <div className="max-w-md mx-auto mt-8 px-4 flex flex-col gap-6">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className="relative bg-black rounded-xl overflow-hidden shadow-lg h-[80vh] flex items-center justify-center group cursor-pointer"
                onClick={() => handleVideoClick(index)}
              >
                {/* Enhanced iframe with better autoplay control */}
                <iframe
                  ref={(el) => (videoRefs.current[index] = el)}
                  data-index={index}
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=${index === 0 ? 1 : 0}&controls=1&loop=1&playlist=${video.id}&enablejsapi=1&mute=${index === 0 ? 0 : 1}&modestbranding=1&rel=0`}
                  title={video.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading={index < 3 ? "eager" : "lazy"} // Load first 3 immediately
                />
                
                {/* Enhanced overlay with interactions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {/* Play indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-80" />
                  </div>
                  
                  {/* Quick actions */}
                  <div className="absolute right-4 bottom-32 flex flex-col items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleInteraction(video.id, 'liked');
                      }}
                      className={`p-2 rounded-full transition-all ${
                        interactions[video.id]?.liked 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${interactions[video.id]?.liked ? 'fill-current' : ''}`} />
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleInteraction(video.id, 'bookmarked');
                      }}
                      className={`p-2 rounded-full transition-all ${
                        interactions[video.id]?.bookmarked 
                          ? 'bg-yellow-500 text-white' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${interactions[video.id]?.bookmarked ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Enhanced video info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-lg font-semibold line-clamp-2 mb-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">
                      {formatDuration(video.duration)}
                    </span>
                    {video.views && (
                      <span className="text-white/60 text-xs">
                        {video.views} views
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Enhanced Grid View
          <div className="max-w-6xl mx-auto mt-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => handleVideoClick(index)}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl hover:scale-105 transition-all cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {formatDuration(video.duration)}
                  </span>
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">
                    {video.title}
                  </h3>
                  {video.views && (
                    <p className="text-gray-500 text-xs">{video.views} views</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Reels Modal */}
      {showReelsView && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={handleCloseReels}
            className="absolute top-4 right-4 text-white hover:bg-white/10 p-2 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={handlePrevVideo}
            disabled={currentVideoIndex === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-colors z-10 ${
              currentVideoIndex === 0 ? 'opacity-30' : 'hover:bg-white/10'
            }`}
          >
            <ChevronUp className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNextVideo}
            disabled={currentVideoIndex === filteredVideos.length - 1}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-colors z-10 ${
              currentVideoIndex === filteredVideos.length - 1 ? 'opacity-30' : 'hover:bg-white/10'
            }`}
          >
            <ChevronDown className="w-6 h-6" />
          </button>

          {/* Video container */}
          <div className="relative w-full h-full max-w-md mx-auto">
            {isPlaying && filteredVideos[currentVideoIndex] ? (
              <iframe
                src={`${filteredVideos[currentVideoIndex].embedUrl}&autoplay=1${isMuted ? '&mute=1' : ''}`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={filteredVideos[currentVideoIndex].title}
                key={`${filteredVideos[currentVideoIndex].id}-${currentVideoIndex}`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <img
                  src={filteredVideos[currentVideoIndex]?.thumbnail}
                  alt={filteredVideos[currentVideoIndex]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="text-white hover:bg-white/10 p-4 rounded-full transition-colors"
                  >
                    <Play className="w-16 h-16" />
                  </button>
                </div>
              </div>
            )}

            {/* Video info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
                {filteredVideos[currentVideoIndex]?.title}
              </h3>
              <div className="flex items-center gap-3 text-white/70 text-sm mb-4">
                {filteredVideos[currentVideoIndex]?.views && (
                  <>
                    <span>{filteredVideos[currentVideoIndex].views} views</span>
                    <span>•</span>
                  </>
                )}
                <span>{formatDuration(filteredVideos[currentVideoIndex]?.duration)}</span>
              </div>
            </div>

            {/* Interactive buttons */}
            <div className="absolute right-4 bottom-32 flex flex-col items-center gap-4">
              {/* Audio Control */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <div className="flex flex-col items-center">
                <button
                  onClick={() => handleInteraction(filteredVideos[currentVideoIndex]?.id, 'liked')}
                  className={`p-3 rounded-full transition-all ${
                    interactions[filteredVideos[currentVideoIndex]?.id]?.liked 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${interactions[filteredVideos[currentVideoIndex]?.id]?.liked ? 'fill-current' : ''}`} />
                </button>
                <span className="text-white text-xs mt-1">
                  {interactions[filteredVideos[currentVideoIndex]?.id]?.likes || 0}
                </span>
              </div>

              <button className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all">
                <MessageCircle className="w-5 h-5" />
              </button>

              <button className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all">
                <Share2 className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleInteraction(filteredVideos[currentVideoIndex]?.id, 'bookmarked')}
                className={`p-3 rounded-full transition-all ${
                  interactions[filteredVideos[currentVideoIndex]?.id]?.bookmarked 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${interactions[filteredVideos[currentVideoIndex]?.id]?.bookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
            {filteredVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentVideoIndex(index);
                  setIsPlaying(true);
                }}
                className={`w-1 h-8 rounded-full transition-all ${
                  index === currentVideoIndex 
                    ? 'bg-white' 
                    : index < currentVideoIndex 
                      ? 'bg-white/50' 
                      : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Keyboard hint */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-sm text-center">
            <p>Use ↑↓ keys to navigate • SPACE to play/pause • ESC to close</p>
            <p className="text-xs mt-1">Scroll down to auto-play next video</p>
          </div>
        </div>
      )}
    </>
  );
}