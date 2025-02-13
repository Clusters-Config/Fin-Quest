import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShareholderWealthMaximization = () => {
  const [quizRedirect, setQuizRedirect] = useState(false);
  const navigate = useNavigate();

  const handleQuizRedirect = () => {
    navigate("/QuizApp/Goals_Finance"); // Replace with your actual quiz route
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#F4F4F4] to-[#F8FAFC] min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#002147] text-center my-6">
        Goal of Shareholder Wealth Maximisation
      </h1>

      {/* Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl mx-auto">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#002147]">
            Understanding Shareholder Wealth Maximisation
          </h2>
          <p className="text-[#6C757D] mt-3">
            In proprietorships and partnerships, owners are actively involved in management. But in companies, particularly large public
            limited companies with many shareholders, ownership is separated from management. For instance, it is practically impossible
            for tens of thousands of shareholders of Larsen and Toubro to participate actively in management. They delegate authority to
            the board of directors, which appoints the top management.
          </p>

          <p className="text-[#6C757D] mt-6">
            The goal of shareholder wealth maximisation is to enhance the market value of the firm’s equity. This ensures that
            shareholders are rewarded for their investments. A firm creates wealth for shareholders when its share price rises, which
            enables them to derive economic benefits like donating to charity or spending on future investments.
          </p>

          <p className="text-[#6C757D] mt-6">
            Corporate finance theory suggests that managers should strive to maximise the firm's value. The firm’s value is derived
            from the market value of its equity and debt claims. Shareholder wealth maximisation is supported by three compelling
            arguments: legal, economic, and decisional.
          </p>

          {/* Legal Argument */}
          <p className="text-[#6C757D] mt-6">
            From a legal standpoint, managers, as agents of shareholders, are expected to prioritise their interests. In the Anglo-Saxon
            legal tradition, businesses are obligated to serve the interests of shareholders as their primary responsibility.
          </p>

          {/* Economic Argument */}
          <p className="text-[#6C757D] mt-6">
            Economically, maximising shareholder wealth promotes the efficient allocation of resources. By directing resources to their
            most productive uses, economic growth accelerates, improving the standard of living for society as a whole.
          </p>

          {/* Decisional Argument */}
          <p className="text-[#6C757D] mt-6">
            The decisional argument stresses the need for a single, clear objective to make rational decisions. When a firm pursues a
            clear goal of maximising shareholder wealth, it avoids confusion and conflict that could arise from competing objectives
            like market share or customer satisfaction.
          </p>

          <p className="text-[#6C757D] mt-6">
            Despite these strong arguments, shareholder wealth maximisation is occasionally challenged by various critics, including
            capital market sceptics, strategic visionaries, and balancers.
          </p>

          {/* Critique and Defence Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-[#002147]">Critique and Defence</h3>
            <p className="text-[#6C757D] mt-3">
              Capital market sceptics argue that the stock market is myopic and often wrongly prices securities. However, financial
              economists argue that in developed markets, share prices are generally accurate estimates of intrinsic value. Managers are
              not necessarily better at assessing these values.
            </p>
            <p className="text-[#6C757D] mt-3">
              Strategic visionaries believe firms should pursue product market goals, such as maximising market share or customer
              satisfaction. While customer satisfaction is important, any conflict with shareholder value should be resolved in favour of
              maximising shareholder wealth for the long-term viability of the firm.
            </p>
            <p className="text-[#6C757D] mt-3">
              The balancers argue for balancing stakeholder interests, such as customers, employees, creditors, and the community. However,
              without a clear financial objective, this could lead to confusion and inefficiency in decision-making.
            </p>
          </div>

          {/* Alternative Goals */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-[#002147]">Alternative Goals to Shareholder Wealth Maximisation</h3>
            <p className="text-[#6C757D] mt-3">
              Some argue for maximising profit, earnings per share, or return on equity. However, these alternatives have shortcomings,
              such as lack of timing consideration, risk adjustment, and not encompassing all factors of value creation.
            </p>
            <p className="text-[#6C757D] mt-3">
              Maximising shareholder wealth, reflected in the market value of equity, remains the most inclusive and appropriate goal for
              financial decision-making.
            </p>
          </div>

          {/* Modification to the Goal */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-[#002147]">Modification to Shareholder Wealth Maximisation</h3>
            <p className="text-[#6C757D] mt-3">
              Managers may aim to maximise the firm’s share price, but they must consider the intrinsic value of shares, especially when
              it differs from the market price. This creates a conflict between short-term and long-term shareholder interests, but
              managers can balance these by targeting a weighted average of the market price and intrinsic value.
            </p>
          </div>

          {/* Practical Application of Firm Goals */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-[#002147]">What Do Firms Actually Do?</h3>
            <p className="text-[#6C757D] mt-3">
              Firms often pursue multiple goals, such as market growth, product leadership, and community engagement. These may
              coincide with shareholder wealth maximisation but can sometimes create conflicts. Understanding the trade-offs between
              these goals is essential for long-term success.
            </p>
          </div>

          {/* Shareholder Orientation in India */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-[#002147]">Shareholder Orientation in India</h3>
            <p className="text-[#6C757D] mt-3">
              Since the 1990s, Indian companies have increasingly embraced shareholder wealth maximisation, spurred by foreign exposure,
              reliance on capital markets, and the rise of institutional investors. With greater incentives to enhance shareholder value,
              companies have adopted more shareholder-friendly policies, aligning corporate governance with global best practices.
            </p>
          </div>
        </section>

        {/* Quiz Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleQuizRedirect}
            className="bg-[#F39C12] hover:bg-[#A8DADC] text-white px-6 py-3 rounded-lg font-bold text-xl"
          >
            Take the Quiz to Test Your Knowledge!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareholderWealthMaximization;
