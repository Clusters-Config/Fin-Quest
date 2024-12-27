import React from 'react';

const Learning_paths = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-10">
        {/* Header Section */}
        <div>
          <h1 className="text-center text-2xl sm:text-xl sm:text-center mt-8 text-blue-900 font-extrabold">
            Your Personalised Learning Path
          </h1>
          <p className="text-center text-sm sm:text-base mt-3">
            Embark on a journey designed to make you a financial expert, step by step!
          </p>
        </div>

        {/* Progress Tracker */}
        <div className='my-10'>
         <h2 className="ml-6 sm:ml-2 sm:mt-9 text-xl sm:text-xl text-blue-900 font-bold">
            Progress Tracker
          </h2>
          <div className='bg-white py-1 md:py-6 mt-4 rounded-lg '>
            <div className="bg-gray-300 rounded-full h-6 sm:h-7 my-2 pb-4 sm:my-3 mx-4 sm:mx-10">
              <div className="bg-green-600 h-6 sm:h-7 rounded-full w-9/12">
                <h3 className="text-center text-white text-xs sm:text-sm pt-0.5 sm:pt-1">
                  70% Completed
                </h3>
              </div>
            </div>
          </div>
        </div>
            {/* Why Learn with Us Section */}
      <div className=" bg-white shadow-lg rounded-xl p-6 sm:p-8 text-center">
        <h2 className="text-2xl font-extrabold text-blue-900">
          Why Learn with Us?
        </h2>
        <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg md:p-4 md:shadow-md">
            <img
              src="https://via.placeholder.com/100"
              alt="Expert Guidance"
              className="mx-auto mb-4 sm:hidden"
            />
            <h3 className="text-xl font-bold text-blue-900">Expert Guidance</h3>
            <p className="text-sm text-gray-700">
              Learn from industry leaders and experts in finance.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 md:shadow-md">
            <img
              src="https://via.placeholder.com/100"
              alt="Step-by-Step Approach"
              className="mx-auto mb-4 sm:hidden"
            />
            <h3 className="text-xl font-bold text-blue-900">
              Step-by-Step Approach
            </h3>
            <p className="text-sm text-gray-700">
              Progress through tailored lessons designed for beginners.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 md:shadow-md ">
            <img
              src="https://via.placeholder.com/100"
              alt="Practical Insights"
              className="mx-auto mb-4 sm:hidden"
            />
            <h3 className="text-xl font-bold text-blue-900">
              Practical Insights
            </h3>
            <p className="text-sm text-gray-700">
              Apply your knowledge with real-world examples and tools.
            </p>
          </div>
        </div>
      </div>


        {/* Learning Timeline */}
        <div>
          <h1 className="ml-9 sm:ml-2 mt-12 sm:mt-12 text-xl sm:text-xl text-blue-900 font-bold">
            Learning Timeline
          </h1>
          <div className="bg-white w-full max-w-6xl mx-auto h-auto rounded-xl mt-6 sm:mt-8 pb-6 shadow-md">
            {/* Timeline Item 1 */}
            <div className="pt-4 flex flex-row sm:flex-col items-start sm:items-center">
              <div className="w-9 h-9 bg-green-600 rounded-full mx-9 sm:mx-7 mt-4 sm:mt-1">
                <h1 className="py-1 px-3.5 text-white text-center">1</h1>
              </div>
              <div className="mt-2.5 sm:mt-4 sm:mx-6 sm:text-center">
                <h1 className="text-lg sm:text-xl font-extrabold ">
                  Basic Financial Concepts
                </h1>
                <p className="text-sm sm:text-base sm:mx-4">
                  Learn the essentials of saving, budgeting, and opening accounts.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="pt-4 flex flex-row sm:flex-col items-start sm:items-center">
              <div className="w-9 h-9 bg-yellow-600 rounded-full mx-9 sm:mx-7 mt-4 sm:mt-1">
                <h1 className="py-1 px-3.5 text-white text-center">2</h1>
              </div>
              <div className="mt-3.5 sm:mt-4 sm:text-center  sm:mx-6">
                <h1 className="text-lg sm:text-xl font-extrabold">
                  Understanding Interest Rates
                </h1>
                <p className="text-sm sm:text-base text-center sm:mx-4">
                  Explore how interest works for loans and savings.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="pt-4 flex flex-row sm:flex-col items-start sm:items-center">
              <div className="w-9 h-9 bg-blue-600 rounded-full mx-9 sm:mx-7 mt-4 sm:mt-1">
                <h1 className="py-1 px-3.5 text-white text-center">3</h1>
              </div>
              <div className="mt-3.5 sm:mt-4 sm:text-center sm:mx-6">
                <h1 className="text-lg sm:text-xl font-extrabold">Investment Basics</h1>
                <p className="text-sm sm:text-base sm:mx-4">
                  Dive into simple investment strategies to grow your wealth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learning_paths;
