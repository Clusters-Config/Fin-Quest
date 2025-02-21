import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // For carousel styles
import "slick-carousel/slick/slick-theme.css"; // For theme styles

// Financial Stories
const stories = [
  {
    id: 1,
    title: "The Investor Who Started with ₹500",
    summary: "How a student turned ₹500 into ₹50,000 using smart investing...",
    content:
      "At the age of 18, Ravi started investing ₹500 per month in stocks. Over 2 years, he researched and diversified his investments. With patience and knowledge, his portfolio grew to ₹50,000...",
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "A Debt Trap Nightmare",
    summary: "A 22-year-old fell into ₹5 lakh debt due to credit card mismanagement...",
    content:
      "Ramesh, a college student, got his first credit card and started spending beyond his means. Within a year, he accumulated ₹5 lakh debt. It took him 3 years of strict budgeting and financial discipline to recover...",
    color: "bg-red-500",
  },
  {
    id: 3,
    title: "College Dropout to Financial Freedom",
    summary: "A dropout who built multiple income streams...",
    content:
      "Arjun dropped out of college and started freelancing in web development. He reinvested his earnings in online businesses and now earns ₹1 lakh per month through multiple income streams...",
    color: "bg-blue-500",
  },
  {
    id: 4,
    title: "The Power of Compound Interest",
    summary: "How a long-term investment strategy paid off big time...",
    content:
      "Samantha invested ₹1,000 per month into a SIP (Systematic Investment Plan) for 15 years. She was initially skeptical, but after 15 years, she realized her ₹1,000 monthly investment had grown into ₹25,000 per month due to the power of compounding...",
    color: "bg-purple-500",
  },
  {
    id: 5,
    title: "Real Estate Investment Gone Wrong",
    summary: "A man learned the hard way about the risks of real estate investing...",
    content:
      "Suresh invested heavily in real estate, hoping to make quick profits. However, he failed to do proper research and ended up purchasing a property that depreciated in value. His portfolio was severely impacted, and he learned the importance of careful investment...",
    color: "bg-yellow-500",
  },
  {
    id: 6,
    title: "The Startup That Turned into a Fortune",
    summary: "How a young entrepreneur turned a small startup into a multi-million dollar business...",
    content:
      "Kunal started his business with just ₹25,000 in seed capital. He focused on digital marketing and a customer-centric approach. Over time, his business gained traction and eventually reached ₹10 crore in revenue in just 5 years...",
    color: "bg-orange-500",
  },
  {
    id: 7,
    title: "Financial Planning for a Successful Retirement",
    summary: "A case study on how planning early can make retirement comfortable...",
    content:
      "Meena began contributing to her retirement fund at the age of 30, with a disciplined approach. By the time she was 60, her retirement savings had grown to a comfortable ₹2 crore, ensuring a secure and fulfilling life after work...",
    color: "bg-teal-500",
  },
  {
    id: 8,
    title: "The Stock Market Roller Coaster",
    summary: "A story of how volatility in the stock market led to both gains and losses...",
    content:
      "In 2020, Anil decided to start trading stocks. Initially, he saw rapid gains, but he also faced massive losses during the market crash. Through his mistakes, he learned the importance of risk management and diversified his portfolio...",
    color: "bg-pink-500",
  },
];

// Case Studies
const caseStudies = [
  {
    id: 9,
    title: "Successful IPO Investment",
    summary: "How investing in IPOs made a fortune for one investor...",
    content:
      "Shivani invested in an IPO of a tech company in 2018. Over the next 2 years, the stock price grew by 500%, making her investment worth ₹10 lakh. Her strategic investments helped her achieve financial independence.",
    color: "bg-indigo-500",
  },
  {
    id: 10,
    title: "Crypto Investment Success",
    summary: "A case study of crypto investing and its dramatic rise...",
    content:
      "In 2017, Varun invested ₹1 lakh in Bitcoin. By 2021, his investment had grown to ₹50 lakh as the value of Bitcoin surged. His early interest in digital currencies turned him into a successful crypto investor.",
    color: "bg-teal-600",
  },
  {
    id: 11,
    title: "The Debt Recovery Journey",
    summary: "How one man recovered from a massive debt spiral...",
    content:
      "Rajesh found himself drowning in ₹10 lakh of debt after a series of poor financial decisions. Over 5 years, he followed a strict debt recovery plan that included cutting unnecessary expenses and negotiating settlements with creditors.",
    color: "bg-yellow-600",
  },
  {
    id: 12,
    title: "The Millionaire’s Retirement Plan",
    summary: "A case study on how a systematic saving strategy led to early retirement...",
    content:
      "By age 45, Prakash had saved enough money to retire comfortably. His strategy of saving 30% of his income every month, combined with smart investments in stocks and real estate, enabled him to achieve his goal of financial freedom.",
    color: "bg-red-600",
  },
];

function Stories() {
  const settings = {
    dots: false, // Disable dots for navigation
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    nextArrow: (
      <button className="slick-next custom-arrow slick-arrow bg-gradient-to-r from-[#D4AF37] to-[#C68933] p-4 rounded-xl shadow-xl">
        <span className="bg-red text-2xl">❯</span>
      </button>
    ), // Right arrow (gradient dark gold)
    prevArrow: (
      <button className="slick-prev custom-arrow slick-arrow bg-gradient-to-r from-[#D4AF37] to-[#C68933] p-4 rounded-xl shadow-xl">
        <span className="text-red text-2xl">❮</span>
      </button>
    ), // Left arrow (gradient dark gold)
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen p-8">
      {/* Header */}
      <header className="bg-[#002147] text-white text-center py-6">
        <h1 className="text-3xl font-bold">Financial Storytelling & Case Studies</h1>
        <p className="text-lg mt-4">Learn from real-world financial experiences!</p>
      </header>

      <div className="  mt-15">
        {/* Financial Stories */}
        <h2 className="text-2xl font-bold text-[#002147] mb-10 mt-10 text-center">
          📖 Financial Success & Failure Stories
        </h2>
        <div className="story-carousel mx-[5rem] sm:mx-[0.5rem] sm:mb-[-2rem]">
          <Slider {...settings}>
            {stories.map((story) => (
              <div
                key={story.id}
                className="flex-none bg-gold p-4 rounded-lg border-[1px]  transition duration-300">
                <h3 className={`text-xl font-semibold ${story.color} text-white p-2 rounded`}>
                  {story.title}
                </h3>
                <p className="text-[#6C757D] mt-2">{story.summary}</p>
                <p className="text-[#495057] mt-4">{story.content}</p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Case Studies */}
        <h2 className="text-2xl font-bold text-[#002147] mb-10 mt-10 text-center">
          📚 Financial Case Studies
        </h2>
        <div className="case-study-carousel mx-[5rem] sm:mx-[0.5rem] mb-[3rem]">
          <Slider {...settings}>
            {caseStudies.map((caseStudy) => (
              <div className="w-[12rem]">
              <div
                key={caseStudy.id}
                className="flex-none bg-gold p-4 rounded-lg  border-[1px] transition duration-300 "
              >
                <h3 className={`text-xl font-semibold ${caseStudy.color} text-white p-2 rounded`}>
                  {caseStudy.title}
                </h3>
                <p className="text-[#6C757D] mt-2">{caseStudy.summary}</p>
                <p className="text-[#495057] mt-4">{caseStudy.content}</p>
              </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#002147] text-white text-center py-6 mt-10">
        <p>&copy; 2025 Financial Storytelling & Case Studies</p>
      </footer>
    </div>
  );
}

export default Stories;
