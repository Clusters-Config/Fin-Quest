import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Star, TrendingUp, TrendingDown, DollarSign, Lightbulb } from 'lucide-react';
import Header from '../Services/Header.jsx';
import Footer from '../Services/Footer.jsx';
import { useLocation } from 'react-router-dom';

// Financial Stories with enhanced data
const stories = [
  {
    id: 1,
    title: "The Investor Who Started with ₹500",
    summary: "How a student turned ₹500 into ₹50,000 using smart investing...",
    content: "At the age of 18, Ravi started investing ₹500 per month in stocks. Over 2 years, he researched and diversified his investments. With patience and knowledge, his portfolio grew to ₹50,000...",
    type: "success",
    icon: TrendingUp,
    lesson: "Small consistent investments can grow significantly over time",
    color: "from-emerald-400 to-green-600"
  },
  {
    id: 2,
    title: "A Debt Trap Nightmare",
    summary: "A 22-year-old fell into ₹5 lakh debt due to credit card mismanagement...",
    content: "Ramesh, a college student, got his first credit card and started spending beyond his means. Within a year, he accumulated ₹5 lakh debt. It took him 3 years of strict budgeting and financial discipline to recover...",
    type: "failure",
    icon: TrendingDown,
    lesson: "Credit cards require discipline and should be used wisely",
    color: "from-red-400 to-red-600"
  },
  {
    id: 3,
    title: "College Dropout to Financial Freedom",
    summary: "A dropout who built multiple income streams...",
    content: "Arjun dropped out of college and started freelancing in web development. He reinvested his earnings in online businesses and now earns ₹1 lakh per month through multiple income streams...",
    type: "success",
    icon: DollarSign,
    lesson: "Multiple income streams provide financial security",
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 4,
    title: "The Power of Compound Interest",
    summary: "How a long-term investment strategy paid off big time...",
    content: "Samantha invested ₹1,000 per month into a SIP (Systematic Investment Plan) for 15 years. She was initially skeptical, but after 15 years, she realized her ₹1,000 monthly investment had grown into ₹25,000 per month due to the power of compounding...",
    type: "success",
    icon: Star,
    lesson: "Compound interest is the eighth wonder of the world",
    color: "from-purple-400 to-purple-600"
  },
  {
    id: 5,
    title: "Real Estate Investment Gone Wrong",
    summary: "A man learned the hard way about the risks of real estate investing...",
    content: "Suresh invested heavily in real estate, hoping to make quick profits. However, he failed to do proper research and ended up purchasing a property that depreciated in value. His portfolio was severely impacted, and he learned the importance of careful investment...",
    type: "failure",
    icon: TrendingDown,
    lesson: "Research thoroughly before making investment decisions",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 6,
    title: "The Startup That Turned into a Fortune",
    summary: "How a young entrepreneur turned a small startup into a multi-million dollar business...",
    content: "Kunal started his business with just ₹25,000 in seed capital. He focused on digital marketing and a customer-centric approach. Over time, his business gained traction and eventually reached ₹10 crore in revenue in just 5 years...",
    type: "success",
    icon: TrendingUp,
    lesson: "Customer focus and marketing are key to business success",
    color: "from-orange-400 to-orange-600"
  },
  {
    id: 7,
    title: "The Emergency Fund That Saved a Family",
    summary: "How an emergency fund helped during a medical crisis...",
    content: "Priya and her husband always saved 20% of their income in an emergency fund. When her husband had an unexpected heart attack, they needed ₹3 lakh for surgery. Thanks to their emergency fund, they didn't have to take loans or sell investments during the crisis...",
    type: "success",
    icon: Star,
    lesson: "Emergency funds are crucial for unexpected life events",
    color: "from-teal-400 to-cyan-600"
  },
  {
    id: 8,
    title: "The Get-Rich-Quick Scheme Disaster",
    summary: "A student lost ₹2 lakh in a pyramid scheme...",
    content: "Rohit, attracted by promises of 300% returns in 6 months, invested his entire savings of ₹2 lakh in a 'guaranteed' scheme. Within 3 months, the company vanished, and he lost everything. He learned that if something sounds too good to be true, it probably is...",
    type: "failure",
    icon: TrendingDown,
    lesson: "Avoid get-rich-quick schemes - they're usually scams",
    color: "from-red-400 to-pink-600"
  },
  {
    id: 9,
    title: "The Side Hustle Success Story",
    summary: "How tutoring became a ₹50,000/month business...",
    content: "Anjali started tutoring students online for ₹500/hour while in college. She gradually built a reputation, increased her rates to ₹2,000/hour, and now runs an online coaching academy earning ₹50,000 monthly while pursuing her PhD...",
    type: "success",
    icon: DollarSign,
    lesson: "Side hustles can become significant income sources",
    color: "from-violet-400 to-purple-600"
  },
  {
    id: 10,
    title: "The Insurance Claim That Never Came",
    summary: "Why reading policy fine print matters...",
    content: "Vikram bought the cheapest health insurance without reading the terms. When he needed a ₹1.5 lakh surgery, he discovered his policy had a 2-year waiting period for pre-existing conditions. He had to pay out of pocket and learned to always read insurance fine print...",
    type: "failure",
    icon: TrendingDown,
    lesson: "Always read and understand insurance policy terms",
    color: "from-amber-400 to-orange-600"
  },
  {
    id: 11,
    title: "The Student Who Became Debt-Free",
    summary: "Smart choices led to graduation without education loans...",
    content: "Instead of taking a ₹15 lakh education loan, Madhuri chose a government college, worked part-time, and applied for scholarships. She graduated with a degree in engineering, zero debt, and ₹50,000 in savings, giving her a head start in life...",
    type: "success",
    icon: Star,
    lesson: "Smart education choices can prevent lifelong debt",
    color: "from-green-400 to-emerald-600"
  },
  {
    id: 12,
    title: "The Credit Score Nightmare",
    summary: "How missed EMIs destroyed future loan prospects...",
    content: "Arjun frequently missed his bike EMI payments, thinking it wouldn't matter much. Years later, when he wanted a home loan, banks rejected his application due to his poor credit score. It took him 2 years of disciplined payments to repair his credit...",
    type: "failure",
    icon: TrendingDown,
    lesson: "Maintain a good credit score by paying EMIs on time",
    color: "from-red-400 to-rose-600"
  },
  {
    id: 13,
    title: "The Budget That Changed Everything",
    summary: "How tracking expenses led to financial freedom...",
    content: "Sneha felt she never had money despite earning ₹40,000/month. She started tracking every expense for 3 months and discovered she was spending ₹8,000 on unnecessary subscriptions and eating out. By creating a budget, she now saves ₹15,000 monthly...",
    type: "success",
    icon: DollarSign,
    lesson: "Budgeting and expense tracking are fundamental to financial health",
    color: "from-blue-400 to-indigo-600"
  },
  {
    id: 14,
    title: "The Forex Trading Disaster",
    summary: "How leverage in trading wiped out savings...",
    content: "Confident after watching YouTube tutorials, Rahul started forex trading with ₹1 lakh. Using high leverage, he made ₹50,000 in the first week but lost ₹2 lakh in the second week due to margin calls. He learned that trading without proper knowledge is gambling...",
    type: "failure",
    icon: TrendingDown,
    lesson: "Don't trade with borrowed money or high leverage without expertise",
    color: "from-orange-400 to-red-600"
  },
  {
    id: 15,
    title: "The Tax-Saving Investment Success",
    summary: "How ELSS funds provided dual benefits...",
    content: "Pooja invested ₹1.5 lakh annually in ELSS mutual funds for tax saving under Section 80C. Over 10 years, not only did she save ₹4.5 lakh in taxes, but her investments also grew to ₹25 lakh, providing both tax benefits and wealth creation...",
    type: "success",
    icon: Star,
    lesson: "Tax-saving investments can provide dual benefits",
    color: "from-emerald-400 to-teal-600"
  },
  {
    id: 16,
    title: "The Lifestyle Inflation Trap",
    summary: "How increased salary led to decreased savings...",
    content: "Every time Karan got a salary hike, he upgraded his lifestyle - better apartment, car, gadgets. Despite earning ₹80,000/month, he saved less than when he earned ₹30,000. He realized that lifestyle inflation was eating his increased income and decided to maintain his spending...",
    type: "failure",
    icon: TrendingDown,
    lesson: "Avoid lifestyle inflation - save the increment, don't spend it",
    color: "from-yellow-400 to-amber-600"
  }
];


const caseStudies = [
  {
    id: 17,
    title: "Successful IPO Investment",
    summary: "How investing in IPOs made a fortune for one investor...",
    content: "Shivani invested in an IPO of a tech company in 2018. Over the next 2 years, the stock price grew by 500%, making her investment worth ₹10 lakh. Her strategic investments helped her achieve financial independence.",
    type: "success",
    icon: Star,
    lesson: "Strategic IPO investments can yield exceptional returns",
    color: "from-indigo-400 to-indigo-600"
  },
  {
    id: 18,
    title: "Crypto Investment Success",
    summary: "A case study of crypto investing and its dramatic rise...",
    content: "In 2017, Varun invested ₹1 lakh in Bitcoin. By 2021, his investment had grown to ₹50 lakh as the value of Bitcoin surged. His early interest in digital currencies turned him into a successful crypto investor.",
    type: "success",
    icon: TrendingUp,
    lesson: "Early adoption of emerging technologies can be rewarding",
    color: "from-cyan-400 to-teal-600"
  },
  {
    id: 19,
    title: "The Debt Recovery Journey",
    summary: "How one man recovered from a massive debt spiral...",
    content: "Rajesh found himself drowning in ₹10 lakh of debt after a series of poor financial decisions. Over 5 years, he followed a strict debt recovery plan that included cutting unnecessary expenses and negotiating settlements with creditors.",
    type: "failure",
    icon: TrendingDown,
    lesson: "Disciplined planning can help overcome financial setbacks",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: 20,
    title: "The Millionaire's Retirement Plan",
    summary: "A case study on how a systematic saving strategy led to early retirement...",
    content: "By age 45, Prakash had saved enough money to retire comfortably. His strategy of saving 30% of his income every month, combined with smart investments in stocks and real estate, enabled him to achieve his goal of financial freedom.",
    type: "success",
    icon: Star,
    lesson: "Consistent saving and smart investing enable early retirement",
    color: "from-emerald-400 to-green-600"
  },
  {
    id: 21,
    title: "The Mutual Fund SIP Success",
    summary: "How a 25-year-old built ₹1 crore through systematic investing...",
    content: "Meera started a SIP of ₹5,000 per month at age 25 in diversified equity mutual funds. By age 45, her total investment of ₹12 lakh had grown to ₹1.2 crore, demonstrating the power of consistent investing and market returns over 20 years.",
    type: "success",
    icon: TrendingUp,
    lesson: "Long-term SIPs can create substantial wealth",
    color: "from-blue-400 to-cyan-600"
  },
  {
    id: 22,
    title: "The Gold Investment Mistake",
    summary: "Why physical gold wasn't the best inflation hedge...",
    content: "Sunil invested ₹5 lakh in physical gold in 2010, expecting it to beat inflation. By 2023, while gold prices increased, his returns were only 6% annually. Meanwhile, equity mutual funds in the same period gave 12-15% returns, making him realize diversification importance.",
    type: "failure",
    icon: TrendingDown,
    lesson: "Diversify investments - don't put all money in one asset class",
    color: "from-amber-400 to-yellow-600"
  },
  {
    id: 23,
    title: "The Insurance as Investment Trap",
    summary: "How ULIP policies provided poor returns...",
    content: "Convinced by an agent, Ritu bought a ULIP policy promising 'investment plus insurance'. After 10 years, her ₹2 lakh annual premium yielded only ₹18 lakh maturity, while a term insurance + mutual fund combination would have given ₹35 lakh for the same amount.",
    type: "failure",
    icon: TrendingDown,
    lesson: "Keep insurance and investment separate for better returns",
    color: "from-red-400 to-rose-600"
  },
  {
    id: 24,
    title: "The Dollar-Cost Averaging Victory",
    summary: "How consistent investing beat market timing...",
    content: "During the 2020 market crash, while others tried to time the market, Ashok continued his monthly SIP of ₹10,000. His disciplined approach bought more units at lower prices, and by 2023, his portfolio outperformed friends who stopped investing during the crash.",
    type: "success",
    icon: Star,
    lesson: "Consistent investing beats market timing",
    color: "from-green-400 to-emerald-600"
  },
  {
    id: 25,
    title: "The Fixed Deposit vs Inflation Case",
    summary: "How conservative investing failed to beat inflation...",
    content: "Govind kept ₹10 lakh in fixed deposits for 10 years, earning 6-7% annually. However, with inflation at 6-8%, his real returns were nearly zero. His purchasing power actually decreased, teaching him that ultra-conservative investing has its own risks.",
    type: "failure",
    icon: TrendingDown,
    lesson: "Conservative investments may not beat inflation in the long run",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 26,
    title: "The Real Estate Rental Success",
    summary: "How rental property created passive income...",
    content: "Kavya bought a ₹30 lakh apartment with ₹10 lakh down payment and EMI of ₹20,000. The rental income of ₹18,000 covered most of the EMI, and after 15 years, she owned a property worth ₹80 lakh while generating ₹35,000 monthly rent.",
    type: "success",
    icon: DollarSign,
    lesson: "Rental real estate can provide passive income and capital appreciation",
    color: "from-teal-400 to-cyan-600"
  },
  {
    id: 27,
    title: "The Sectoral Fund Concentration Risk",
    summary: "Why sector-specific investing can be risky...",
    content: "Excited by the tech boom, Nikhil invested all his money in IT sector mutual funds. When the sector corrected in 2022, his portfolio fell 40% while diversified funds fell only 15%. He learned about concentration risk the hard way.",
    type: "failure",
    icon: TrendingDown,
    lesson: "Avoid concentration risk - diversify across sectors",
    color: "from-purple-400 to-pink-600"
  },
  {
    id: 28,
    title: "The Tax Planning Success Story",
    summary: "How smart tax planning saved ₹2 lakh annually...",
    content: "CA Pradeep structured his ₹15 lakh annual income through salary optimization, HRA, LTA, medical allowances, and investments in 80C, 80D. His effective tax rate reduced from 20% to 8%, saving ₹2 lakh yearly which he invested for wealth creation.",
    type: "success",
    icon: Star,
    lesson: "Proper tax planning can significantly increase take-home income",
    color: "from-indigo-400 to-blue-600"
  },
  {
    id: 29,
    title: "The Retirement Planning Delay",
    summary: "How starting retirement planning late proved costly...",
    content: "Rajesh started retirement planning at 45, needing ₹2 crore by 60. He had to invest ₹50,000 monthly to reach his goal. Had he started at 25, only ₹8,000 monthly would have been sufficient, costing him ₹63 lakh more due to the delay.",
    type: "failure",
    icon: TrendingDown,
    lesson: "Start retirement planning early to leverage compound interest",
    color: "from-red-400 to-orange-600"
  },
  {
    id: 30,
    title: "The Emergency Fund Success Story",
    summary: "How emergency planning prevented financial disaster...",
    content: "When COVID-19 hit and Sameer lost his job, his 12-month emergency fund worth ₹6 lakh helped him survive without touching investments or taking loans. He found a new job in 8 months and his investment portfolio continued growing uninterrupted.",
    type: "success",
    icon: Star,
    lesson: "Emergency funds are essential for financial stability",
    color: "from-green-400 to-teal-600"
  }
];

function FinancialStorybook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [activeTab, setActiveTab] = useState('stories');
   const pathname = useLocation()
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
  
  
  const allContent = activeTab === 'stories' ? stories : caseStudies;
  const totalPages = allContent.length;

  const handlePageTurn = (direction) => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setTimeout(() => {
      if (direction === 'next' && currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
      } else if (direction === 'prev' && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
      setIsFlipping(false);
    }, 300);
  };

  const currentStory = allContent[currentPage];
  const IconComponent = currentStory?.icon || BookOpen;

  return (
    <div><Header />
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 mt-20">
      {/* Header */}
      
        <div className="text-center mb-8 ">
        <div className="flex items-center justify-center gap-3 mb-4 ">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Financial Storybook
          </h1>
          <BookOpen className="w-8 h-8 text-indigo-600" />
        </div>
        <p className="text-lg text-indigo-700 font-medium">Learn through real-world financial adventures! 📚✨</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 ">
        <div className="bg-white rounded-full p-1 shadow-lg border-2 border-indigo-200">
          <button
            onClick={() => {
              setActiveTab('stories');
              setCurrentPage(0);
            }}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'stories'
                ? 'bg-gradient-to-r from-indigo-400 to-blue-500 text-white shadow-md'
                : 'text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            📖 Success & Failure Stories
          </button>
          <button
            onClick={() => {
              setActiveTab('cases');
              setCurrentPage(0);
            }}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'cases'
                ? 'bg-gradient-to-r from-indigo-400 to-blue-500 text-white shadow-md'
                : 'text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            📚 Case Studies
          </button>
        </div>
      </div>

      {/* Book Container */}
      <div className="max-w-4xl mx-auto relative ">
        {/* Page Counter */}
        <div className="text-center mb-4">
          <span className="bg-white px-4 py-2 rounded-full shadow-md text-indigo-700 font-semibold border-2 border-indigo-200">
            Page {currentPage + 1} of {totalPages}
          </span>
        </div>

        {/* Book */}
          <div className="relative bg-gradient-to-r from-slate-100 to-blue-100 rounded-3xl shadow-2xl p-8 border-4 border-indigo-200 pl-10">
          {/* Book Spine Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-indigo-300 to-blue-400 rounded-l-3xl border-r-2 border-indigo-400"></div>
          
          {/* Page Content */}
          <div className={`transition-all duration-300 ${isFlipping ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            {/* Story Type Badge */}
            <div className="flex justify-between items-start mb-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold shadow-md bg-gradient-to-r ${currentStory.color}`}>
                <IconComponent className="w-5 h-5" />
                <span className="capitalize">{currentStory.type} Story</span>
              </div>
              <div className="text-right text-indigo-600">
                <div className="text-sm font-medium">Chapter {currentPage + 1}</div>
                <div className="text-xs">{activeTab === 'stories' ? 'Financial Stories' : 'Case Studies'}</div>
              </div>
            </div>

            {/* Story Title */}
            <h2 className="text-3xl font-bold text-indigo-900 mb-4 leading-tight">
              {currentStory.title}
            </h2>

            {/* Story Summary */}
            <div className="bg-white bg-opacity-60 rounded-2xl p-4 mb-6 border border-indigo-200">
              <p className="text-indigo-800 font-medium italic">"{currentStory.summary}"</p>
            </div>

            {/* Story Content */}
            <div className="bg-white bg-opacity-40 rounded-2xl p-6 mb-6 border border-indigo-200">
              <p className="text-gray-800 leading-relaxed text-lg">
                {currentStory.content}
              </p>
            </div>

            {/* Key Lesson */}
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-4 border-2 border-indigo-300">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full p-2">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-indigo-900 mb-1">Key Lesson:</h3>
                  <p className="text-indigo-800 font-medium">{currentStory.lesson}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6">
            <button
              onClick={() => handlePageTurn('prev')}
              disabled={currentPage === 0 || isFlipping}
              className={`p-4 rounded-full shadow-lg transition-all duration-300 ${
                currentPage === 0 || isFlipping
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-400 to-blue-500 text-white hover:from-indigo-500 hover:to-blue-600 hover:scale-110 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-6">
            <button
              onClick={() => handlePageTurn('next')}
              disabled={currentPage === totalPages - 1 || isFlipping}
              className={`p-4 rounded-full shadow-lg transition-all duration-300 ${
                currentPage === totalPages - 1 || isFlipping
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-400 to-blue-500 text-white hover:from-indigo-500 hover:to-blue-600 hover:scale-110 active:scale-95'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Page Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {allContent.map((_, index) => (
            <button
              key={index}
              onClick={() => !isFlipping && setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? 'bg-gradient-to-r from-indigo-400 to-blue-500 scale-125'
                  : 'bg-indigo-200 hover:bg-indigo-300'
              }`}
            />
          ))}
        </div>

        {/* Happy Learning Message */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-indigo-200">
            <span className="text-2xl">🎉</span>
            <span className="text-indigo-700 font-semibold">Happy Learning! Keep reading to grow your financial wisdom!</span>
            <span className="text-2xl">📈</span>
          </div>
        </div>
      </div>

      
    </div>
          <Footer />

    </div>
  );
}

export default FinancialStorybook;