import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ShareholderWealthMaximization = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const quizInfo = {
    page: "resultpage",
    path: "path2",
    mods: "mod1",
    type: "finance",
  };

  const handleQuizRedirect = () => {
    navigate("/QuizApp/Goals_Finance", { state: quizInfo });
  };

  // Break long content into sections for pagination
  const sections = [
    {
      title: "Understanding Shareholder Wealth Maximisation",
      content: [
        `In proprietorships and partnerships, owners are actively involved in management. But in companies, particularly large public limited companies with many shareholders, ownership is separated from management. For instance, it is practically impossible for tens of thousands of shareholders of Larsen and Toubro to participate actively in management. They delegate authority to the board of directors, which appoints the top management.`,
        `The goal of shareholder wealth maximisation is to enhance the market value of the firm’s equity. This ensures that shareholders are rewarded for their investments. A firm creates wealth for shareholders when its share price rises, which enables them to derive economic benefits like donating to charity or spending on future investments.`,
        `Corporate finance theory suggests that managers should strive to maximise the firm's value. The firm’s value is derived from the market value of its equity and debt claims. Shareholder wealth maximisation is supported by three compelling arguments: legal, economic, and decisional.`,
      ],
    },
    {
      title: "Arguments for Shareholder Wealth Maximisation",
      content: [
        `From a legal standpoint, managers, as agents of shareholders, are expected to prioritise their interests. In the Anglo-Saxon legal tradition, businesses are obligated to serve the interests of shareholders as their primary responsibility.`,
        `Economically, maximising shareholder wealth promotes the efficient allocation of resources. By directing resources to their most productive uses, economic growth accelerates, improving the standard of living for society as a whole.`,
        `The decisional argument stresses the need for a single, clear objective to make rational decisions. When a firm pursues a clear goal of maximising shareholder wealth, it avoids confusion and conflict that could arise from competing objectives like market share or customer satisfaction.`,
      ],
    },
    {
      title: "Critique and Defence",
      content: [
        `Capital market sceptics argue that the stock market is myopic and often wrongly prices securities. However, financial economists argue that in developed markets, share prices are generally accurate estimates of intrinsic value.`,
        `Strategic visionaries believe firms should pursue product market goals, such as maximising market share or customer satisfaction. While customer satisfaction is important, any conflict with shareholder value should be resolved in favour of maximising shareholder wealth for the long-term viability of the firm.`,
        `The balancers argue for balancing stakeholder interests, such as customers, employees, creditors, and the community. However, without a clear financial objective, this could lead to confusion and inefficiency in decision-making.`,
      ],
    },
    {
      title: "Alternative Goals and Modifications",
      content: [
        `Some argue for maximising profit, earnings per share, or return on equity. However, these alternatives have shortcomings, such as lack of timing consideration, risk adjustment, and not encompassing all factors of value creation.`,
        `Maximising shareholder wealth, reflected in the market value of equity, remains the most inclusive and appropriate goal for financial decision-making.`,
        `Managers may aim to maximise the firm’s share price, but they must consider the intrinsic value of shares, especially when it differs from the market price. This creates a conflict between short-term and long-term shareholder interests.`,
      ],
    },
    {
      title: "What Do Firms Actually Do? & Shareholder Orientation in India",
      content: [
        `Firms often pursue multiple goals, such as market growth, product leadership, and community engagement. These may coincide with shareholder wealth maximisation but can sometimes create conflicts.`,
        `Since the 1990s, Indian companies have increasingly embraced shareholder wealth maximisation, spurred by foreign exposure, reliance on capital markets, and the rise of institutional investors.`,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F5] p-8 flex justify-center items-center">
      <div className="w-full max-w-[1200px] aspect-[3/2] relative">
        <div className="absolute inset-0 flex bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="w-[80px] bg-gradient-to-r from-gray-200 to-white" />
          <div className="flex-1 p-12 relative">
            {/* Header */}
            <div className="text-center mb-8 border-b pb-4">
              <h1 className="text-3xl font-serif text-gray-800">Goal of Shareholder Wealth Maximisation</h1>
              <p className="text-sm text-gray-500 mt-2">Finance Module</p>
            </div>

            {/* Animated Content */}
            <div className="h-[calc(100%-160px)] overflow-y-auto pr-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">{sections[page].title}</h2>
                  {sections[page].content.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
              <button
                onClick={() => setPage(p => Math.max(0, p - 1))}
                disabled={page === 0}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  page === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <ChevronLeft className="mr-2" /> Previous
              </button>

              <span className="text-sm text-gray-500">
                Page {page + 1} of {sections.length}
              </span>

              <button
                onClick={() => setPage(p => Math.min(sections.length - 1, p + 1))}
                disabled={page === sections.length - 1}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  page === sections.length - 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                Next <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
          <div className="w-[40px] bg-gradient-to-l from-gray-200 to-white" />
        </div>

        {/* Quiz Button */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <button
            onClick={handleQuizRedirect}
            className="bg-[#F39C12] text-white px-8 py-3 rounded-full hover:bg-[#F1C40F] transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Take the Quiz to Test Your Knowledge!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareholderWealthMaximization;
