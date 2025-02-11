import React from "react";

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
  // Added more stories to make it closer to 20
  {
    id: 4,
    title: "The Power of Saving Early",
    summary: "How early investments can set you up for financial success...",
    content:
      "Sana started saving ₹2,000 a month at the age of 20. By the time she turned 30, her savings, combined with smart investments, had turned into a substantial corpus, allowing her to purchase her first home...",
    color: "bg-purple-500",
  },
  {
    id: 5,
    title: "The Cryptocurrency Gamble",
    summary: "A 30-year-old man’s experience with cryptocurrency investments...",
    content:
      "After hearing about Bitcoin's success stories, Vikram invested all his savings in crypto. In just 6 months, his portfolio skyrocketed, but a sudden market crash wiped out most of his gains. He learned the importance of diversification and risk management...",
    color: "bg-yellow-500",
  },
  {
    id: 6,
    title: "From Debt to Financial Stability",
    summary: "How a couple escaped the debt cycle and achieved financial freedom...",
    content:
      "Aditi and Raghav were drowning in debt due to personal loans and credit cards. They took a 3-year journey, cutting expenses, refinancing loans, and building an emergency fund. Today, they are debt-free and have started investing for the future...",
    color: "bg-red-600",
  },
    {
      id: 7,
      title: "The Millionaire who Started from Scratch",
      summary: "How a self-taught entrepreneur went from zero to millionaire status...",
      content:
        "Ankur started his journey with no formal education or business background. He spent years learning, failing, and pivoting his small business until he turned it into a million-dollar company through sheer determination and adaptability...",
      color: "bg-teal-500",
    },
    {
      id: 8,
      title: "Living on a Tight Budget",
      summary: "How one couple managed to save 50% of their income despite a modest salary...",
      content:
        "Ravi and Priya, both earning modest salaries, decided to take control of their finances. By tracking every penny, avoiding unnecessary expenses, and saving aggressively, they were able to save enough for a house down payment in just 3 years...",
      color: "bg-orange-500",
    },
    {
      id: 9,
      title: "The $10,000 Mistake",
      summary: "How poor financial decisions led to a $10,000 loss...",
      content:
        "Nisha, driven by FOMO, invested a large sum in a risky venture without proper research. Unfortunately, the investment went south, and she lost ₹10,000. This experience taught her the importance of research and patience in investing...",
      color: "bg-pink-500",
    },
    {
      id: 10,
      title: "The Side Hustle That Turned into a Full-Time Job",
      summary: "How a part-time freelance writer built a full-time career...",
      content:
        "Madhuri started writing blogs on the side while working as an assistant manager. Over time, her freelance writing gigs grew, and within 2 years, she was able to quit her day job and make a full-time income as a writer, allowing her to travel and live comfortably...",
      color: "bg-blue-400",
    },
    {
      id: 11,
      title: "The High-Risk High-Reward Investor",
      summary: "How a high-risk investor navigated through huge market volatility...",
      content:
        "Ashok was always attracted to high-risk, high-reward investments. After experiencing significant losses in his early 20s, he carefully honed his strategies. Eventually, his bold moves paid off with substantial returns, but not without lessons learned the hard way...",
      color: "bg-indigo-600",
    },
    {
      id: 12,
      title: "The Struggle with Student Loans",
      summary: "How a recent graduate paid off ₹4 lakh in student loans...",
      content:
        "Manish graduated with a degree but was burdened by ₹4 lakh in student loans. Instead of spending on luxuries, he committed to aggressive loan repayment, working multiple jobs. After 3 years, he cleared the debt, proving that discipline and focus lead to freedom...",
      color: "bg-teal-600",
    },
    {
      id: 13,
      title: "The Lost Opportunity",
      summary: "How ignoring a potential business opportunity cost ₹50,000...",
      content:
        "Geeta had the chance to invest in a friend's tech startup, but she hesitated, thinking the risk was too high. Five years later, that same startup was worth over ₹50 crore. Geeta learned the valuable lesson of recognizing opportunities when they arise...",
      color: "bg-yellow-700",
    },
    {
      id: 14,
      title: "The Power of Financial Independence",
      summary: "How a young couple retired early by focusing on financial independence...",
      content:
        "Ravi and Leela, both in their early 30s, adopted the FIRE (Financial Independence, Retire Early) movement. They saved aggressively, lived frugally, and invested wisely. By 40, they had accumulated enough wealth to retire early and travel the world...",
      color: "bg-green-400",
    },
    {
      id: 15,
      title: "The Power of Networking in Business",
      summary: "How building relationships led to a successful business venture...",
      content:
        "Nikhil, a small business owner, knew that networking was key to growth. By attending events, engaging with mentors, and fostering relationships, he managed to land a high-profile investor who turned his local business into a nationwide success...",
      color: "bg-red-700",
    },
    {
      id: 16,
      title: "The Financial Setback of 2020",
      summary: "How the pandemic caused major financial challenges for a small business...",
      content:
        "Amrita’s small clothing business was thriving until the pandemic struck. With a drastic fall in sales, she had to lay off employees and reimagine her business. By shifting to online sales and focusing on digital marketing, she bounced back within a year...",
      color: "bg-blue-700",
    },
  
  
  
  // Add more up to 20 stories
];

const caseStudies = [
  {
    id: 1,
    title: "The ₹100 Startup",
    summary: "How a small business scaled up...",
    content:
      "This case study explores how a small roadside food stall turned into a profitable franchise...",
    color: "bg-indigo-500",
  },
  {
    id: 2,
    title: "Stock Market Boom and Bust",
    summary: "Lessons from stock market cycles...",
    content:
      "A deep dive into the 2008 financial crisis and how investors survived...",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    title: "The Power of Compound Interest",
    summary: "How early investments grow exponentially...",
    content:
      "This case study explains how ₹1,000 per month invested early can turn into ₹1 crore over time...",
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "The Rise of E-Commerce",
    summary: "How the online shopping revolution changed business models...",
    content:
      "This case study focuses on how e-commerce companies like Amazon scaled and revolutionized the retail industry...",
    color: "bg-blue-500",
  },
  {
    id: 5,
    title: "Franchising Success Stories",
    summary: "How successful franchises grow from small businesses...",
    content:
      "Learn how companies like McDonald's and Subway started with a single location and scaled globally through franchising...",
    color: "bg-green-500",
  },
   
    {
      id: 4,
      title: "The Rise of a Tech Startup",
      summary: "How a small tech company disrupted the industry...",
      content:
        "This case study follows a tech startup from its humble beginnings to becoming a market leader. By leveraging innovation, partnerships, and effective marketing, the company was able to scale rapidly and disrupt the industry...",
      color: "bg-teal-500",
    },
    {
      id: 5,
      title: "The Real Estate Investment Strategy",
      summary: "How smart real estate investments led to financial freedom...",
      content:
        "A deep dive into how an individual used real estate investments to create long-term wealth. This case study explores key strategies such as buying rental properties, leveraging debt, and managing cash flow...",
      color: "bg-yellow-500",
    },
    {
      id: 6,
      title: "Navigating a Market Crash",
      summary: "What happened to investors during the 2008 financial crisis...",
      content:
        "This case study looks at the impact of the 2008 financial crisis on investors. Some lost everything, while others used the opportunity to buy undervalued stocks and build significant wealth in the long run...",
      color: "bg-indigo-600",
    },
    {
      id: 7,
      title: "The Billionaire's Investment Portfolio",
      summary: "A look into how billionaires allocate their wealth...",
      content:
        "This case study explores the investment strategies used by some of the wealthiest individuals in the world, focusing on diversified portfolios and risk management that lead to long-term success...",
      color: "bg-purple-500",
    },
    {
      id: 8,
      title: "The Power of Peer-to-Peer Lending",
      summary: "How a new model of lending is changing the financial landscape...",
      content:
        "This case study examines the rise of peer-to-peer (P2P) lending platforms, which allow individuals to lend directly to others, bypassing traditional financial institutions. The study looks at risks, rewards, and market trends...",
      color: "bg-pink-400",
    },
    {
      id: 9,
      title: "The Decline of a Retail Giant",
      summary: "How a once-thriving retail company failed to adapt to e-commerce...",
      content:
        "This case study analyzes the downfall of a major retail giant. Despite its history of success, the company failed to evolve with the shift to online shopping. It highlights lessons in adaptability, technology adoption, and market trends...",
      color: "bg-red-600",
    },
    {
      id: 10,
      title: "The Power of Diversification in Stock Market",
      summary: "How a diversified portfolio helped an investor weather market volatility...",
      content:
        "This case study shows the importance of portfolio diversification in mitigating risk. By spreading investments across sectors, asset classes, and geographies, investors can reduce the impact of market downturns and generate stable returns...",
      color: "bg-blue-500",
    },
    {
      id: 11,
      title: "The Art of Negotiating Business Deals",
      summary: "How negotiation tactics led to a multi-million dollar acquisition...",
      content:
        "This case study discusses the strategic negotiation tactics used by a business owner to secure a multi-million dollar acquisition. It emphasizes the importance of preparation, understanding the other party's needs, and achieving win-win deals...",
      color: "bg-orange-400",
    },
    {
      id: 12,
      title: "The Challenge of Scaling a Startup",
      summary: "The growing pains of a tech startup scaling too quickly...",
      content:
        "This case study explores the challenges faced by a tech startup as it scaled rapidly. From cash flow issues to organizational growing pains, the company struggled to balance expansion with sustainable growth. It highlights the importance of pacing and funding strategies...",
      color: "bg-green-500",
    },
    {
      id: 13,
      title: "Financial Independence Through Index Funds",
      summary: "How investing in low-cost index funds led to financial independence...",
      content:
        "This case study looks at the journey of an individual who achieved financial independence through consistent investments in index funds. It highlights the benefits of passive investing and the power of compound interest over time...",
      color: "bg-teal-600",
    },
  
  // Add more up to 20 case studies
];

function Stories() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen p-8">
      {/* Header */}
      <header className="bg-[#002147] text-white text-center py-6">
        <h1 className="text-3xl font-bold">Financial Storytelling & Case Studies</h1>
        <p className="text-lg mt-4">Learn from real-world financial experiences!</p>
      </header>

      <div className="max-w-8xl mx-auto mt-15 ">
        {/* Financial Stories */}
        <h2 className="text-2xl font-bold text-[#002147] mb-10 mt-10 text-center ">📖 Financial Success & Failure Stories</h2>
        <div className="flex overflow-x-auto space-x-6 py-6 bg-slate-300">
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex-none bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 w-80 ml-4"
            >
              <h3 className={`text-xl font-semibold ${story.color} text-white p-2 rounded`}>
                {story.title}
              </h3>
              <p className="text-[#6C757D] mt-2">
                {story.content} {/* Display the full content directly */}
              </p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <h2 className="text-2xl font-bold text-[#002147] mt-10 mb-10 text-center">📊 Case Studies on Financial Management</h2>
        <div className="flex overflow-x-auto space-x-6 py-6 bg-slate-300">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="flex-none bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 w-80 ml-4"
            >
              <h3 className={`text-xl font-semibold ${caseStudy.color} text-white p-2 rounded`}>
                {caseStudy.title}
              </h3>
              <p className="text-[#6C757D] mt-2">
                {caseStudy.content} {/* Display the full content directly */}
              </p>
            </div>
          ))}
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
