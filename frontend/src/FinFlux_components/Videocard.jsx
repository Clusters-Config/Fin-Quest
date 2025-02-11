import React from "react";

const VideoCard = ({ video }) => {
  // Check if the URL is a YouTube link
  const isYouTube = video.url.includes("youtube.com") || video.url.includes("youtu.be");

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-white">
      {isYouTube ? (
        // Embed YouTube video using iframe with no branding
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${new URL(video.url).pathname.split('/')[2]}?modestbranding=1&rel=0&showinfo=0`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      ) : (
        // Display regular video file if not YouTube
        <video
          src={video.url}
          controls
          autoPlay
          className="w-full h-full object-cover"
        ></video>
      )}

      {/* Video description */}
      <div className="absolute bottom-4 left-4">
        <h2 className="text-lg font-bold">{video.title}</h2>
        <p className="text-sm">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
   