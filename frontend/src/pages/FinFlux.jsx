import React, { useState } from "react";
import VideoCard from "../FinFlux_components/VideoCard";

const FinFlix = () => {
  const [videos] = useState([
    {
      id: 1,
      title: "Basice about loan",
      description:  "Thinking about a loan? 🤔 Understand the basics before you borrow! 💡#LoanTips #SmartBorrowing" ,
      url: "https://www.youtube.com/shorts/JJnOCvKQSkY?feature=share",  // YouTube URL
      isPaid: true,
    },
    {
      id: 2,
      title: "How to Save Money?",
      description:  "Master budgeting, saving & investing for financial success! 💰 Tips for a brighter future.#Finquest",
      url: "https://www.youtube.com/shorts/Yc-k4eW0EQA?feature=share",  // Local video file
      isPaid: false,
    },
    {
      id: 3,
      title: "Interest Rates",
      description:  "Confused about bank interest rates? 🏦 Learn how they work 💡 #Finquest #InterestRates" ,
      url: "https://www.youtube.com/shorts/IQxZgTlYbtQ?feature=share",  // Local video file
      isPaid: false,
    },
    {
      id: 4,
      title: "Basics of Accounting",
      description: "Unlock the basics of accounting! 📊 Learn to manage finances like a pro. #Finquest#Accounting101." ,
      url: "https://www.youtube.com/shorts/F2UPjDEY3os?feature=share",  // Local video file
      isPaid: false,
    },
    {
      id: 5,
      title: "Saving Essentials",
      description: "80% of people spend on essentials. Learn how to save more & manage better! 💡#Finquest #SmartSaving" ,
      url: "https://www.youtube.com/shorts/9sLY6CIzvdo?feature=share",  // Local video file
      isPaid: false,
    },
    {
      id: 6,
      title: "Simple interest",
      description: "🚀 Learn the basics of Simple Interest in under 60 seconds!💡#FinanceTips #SimpleInterest #InvestSmart" ,
      url: "https://www.youtube.com/shorts/oXZt7Bmo91k?feature=share",  // Local video file
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
