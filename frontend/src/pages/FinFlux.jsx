import React, { useState, useEffect } from "react";
import Chat from "../Services/Chat";

export default function FinFlux() {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || "NO_API_KEY";
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || "NO_CHANNEL_ID";

  useEffect(() => {
    console.log("API_KEY:", API_KEY);
    console.log("CHANNEL_ID:", CHANNEL_ID);
  }, []);

  // ✨ Change these three lines to whatever you want
  const line1 = "💰 Your Money, Your Power — Use It ⚡";
  const line2 = "🛒 Turn Everyday Spending Into Lasting Wealth";
  const line3 = "🎯 Watch Now, Change Your Future Forever 🚀";

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [typedText, setTypedText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const fullHeading = "Recommended Videos";

  const categories = ["ALL", "VIDEOS", "SHORTS"];

  useEffect(() => {
    async function fetchVideos() {
      try {
        if (
          !API_KEY ||
          !CHANNEL_ID ||
          API_KEY === "NO_API_KEY" ||
          CHANNEL_ID === "NO_CHANNEL_ID"
        ) {
          throw new Error("API_KEY or CHANNEL_ID is missing or invalid.");
        }

        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=12`
        );

        console.log("Fetch response status:", res.status);

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error.message || "Failed to fetch videos");
        }

        const data = await res.json();
        console.log("API response data:", data);

        if (data.items) {
          const onlyVideos = data.items.filter(
            (item) => item.id.kind === "youtube#video"
          );
          setVideos(onlyVideos);
        }
      } catch (err) {
        console.error("Error fetching videos:", err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, [API_KEY, CHANNEL_ID]);

  // Typewriter effect for the heading
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullHeading.slice(0, index + 1));
      index++;
      if (index === fullHeading.length) clearInterval(interval);
    }, 100); // typing speed
    return () => clearInterval(interval);
  }, []);

  if (loading)
    return <p style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>Loading videos...</p>;
  if (videos.length === 0)
    return <p style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>No videos found.</p>;

  // Filtering logic
  const filteredVideos = videos.filter((video) => {
    const text = `${video.snippet.title} ${video.snippet.description}`.toLowerCase();
    const matchesSearch = text.includes(searchTerm.toLowerCase());

    if (selectedCategory === "ALL") return matchesSearch;
    if (selectedCategory === "VIDEOS")
      return matchesSearch && !video.snippet.title.toLowerCase().includes("short");
    if (selectedCategory === "SHORTS")
      return matchesSearch && video.snippet.title.toLowerCase().includes("short");

    return matchesSearch;
  });

  const featuredVideo = filteredVideos[0];
  const otherVideos = filteredVideos.slice(1);

  return (
    <>
      <style>{`
        /* Responsive styles */
        @media (max-width: 768px) {
          .featured-container {
            flex-direction: column !important;
            padding: 15px !important;
          }
          .featured-text {
            padding-right: 0 !important;
            margin-bottom: 20px;
          }
          .featured-image {
            margin-left: 0 !important;
            width: 100% !important;
          }
          .video-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important;
          }
          input.search-input {
            width: 90% !important;
          }
        }
        @media (max-width: 480px) {
          .featured-text h1 {
            font-size: 22px !important;
          }
          .featured-text p {
            font-size: 13px !important;
          }
          .video-grid {
            grid-template-columns: 1fr !important;
          }
          .video-card iframe {
            height: 150px !important;
          }
        }
      `}</style>

      <div
        style={{
          backgroundColor: "#0b0f19",
          color: "#fff",
          minHeight: "100vh",
          padding: "20px",
          fontFamily: "Arial, sans-serif", // 👈 now everything is Arial
        }}
      >
        <Chat/>
        {/* Featured Section */}
        {featuredVideo && (
          <div
            className="featured-container"
            style={{
              display: "flex",
              padding: "20px",
              background: "#1a1f2e",
              borderRadius: "12px",
              marginBottom: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="featured-text"
              style={{ flex: 1, paddingRight: "20px" }}
            >
              <h2 style={{ fontSize: "14px", opacity: 0.8 }}>FinQuest</h2>

              <h1
                style={{
                  fontSize: "28px",
                  margin: "10px 0",
                  whiteSpace: "pre-line",
                }}
              >
                {line1}
                {"\n"}
                {line2}
                {"\n"}
                {line3}
              </h1>

              <p style={{ fontSize: "14px" }}>
                {featuredVideo.snippet.description}
              </p>
              <a
                href={`https://www.youtube.com/watch?v=${featuredVideo.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#d63384",
                  borderRadius: "6px",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                ▶ Watch Now
              </a>
            </div>

            {/* Image container */}
            <div
              className="featured-image"
              style={{
                flex: 1,
                marginLeft: "40px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
                alt={`${line1} ${line2} ${line3}`}
                style={{
                  width: "70%",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        )}

        {/* Search + Categories */}
        <div style={{ textAlign: "center", margin: "20px" }}>
          {/* Search bar */}
          <input
            className="search-input"
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "10px",
              width: "60%",
              maxWidth: "300px",
              borderRadius: "20px",
              border: "none",
              outline: "none",
              fontSize: "14px",
              color: "black",
              backgroundColor: "white",
              transition: "width 0.3s ease",
              marginRight: "10px",
              fontFamily: "Arial, sans-serif",
            }}
          />

          {/* Category Buttons */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 16px",
                margin: "5px",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                backgroundColor:
                  selectedCategory === cat ? "#d63384" : "#444",
                color: "white",
                transition: "background 0.2s ease",
                fontFamily: "Arial, sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recommended Videos */}
        <div>
          <h2
            style={{
              marginBottom: "15px",
              fontSize: "24px",
              borderRight: "2px solid #d63384",
              display: "inline-block",
              paddingRight: "5px",
              animation: "blink 0.7s steps(2, start) infinite",
              whiteSpace: "nowrap",
            }}
          >
            {typedText}
          </h2>

          <div
            className="video-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {otherVideos.length > 0 ? (
              otherVideos.map((video) => (
                <div
                  key={video.id.videoId}
                  className="video-card"
                  style={{
                    background: "#1a1f2e",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    transition: "transform 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <iframe
                    width="100%"
                    height="180"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                  <div style={{ padding: "10px" }}>
                    <h3 style={{ fontSize: "16px", margin: 0 }}>
                      {video.snippet.title}
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              <p
                style={{
                  color: "#ccc",
                  gridColumn: "1 / -1",
                  textAlign: "center",
                }}
              >
                No videos match your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
