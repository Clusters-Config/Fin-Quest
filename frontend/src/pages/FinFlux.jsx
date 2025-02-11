import React, { useState } from "react";
import VideoCard from "../FinFlux_components/VideoCard";

const FinFlix = () => {
  const [videos] = useState([
    {
      id: 1,
      title: "Stock Market Basics",
      description: "Learn how stocks work in 60 seconds!",
      url: "https://www.youtube.com/shorts/2yvNtyIf5Bs?feature=share",  // YouTube URL
      isPaid: true,
    },
    {
      id: 2,
      title: "How to Save Money?",
      description: "Best money-saving tips for students.",
      url: "https://www.youtube.com/shorts/qD3FudqQfVY?feature=share",  // Local video file
      isPaid: false,
    },
  ]);

  return (
    <div className="h-screen overflow-y-scroll snap-mandatory snap-y">
      {videos.map((video) => (
        <div key={video.id} className="snap-start">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
};

export default FinFlix;
