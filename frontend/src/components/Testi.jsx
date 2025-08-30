import React, { useState, useEffect } from "react";

const testimonialsData = [
  {
    name: "Badri Narayanan",
    feedback:
      "FinQuest has transformed the way I handle my savings and investments.",
    company: "Student",
  },
  {
    name: "Damodara",
    feedback:
      "The platform is so easy to use and has really helped me plan better.",
    company: "Employee",
  },
  {
    name: "Gowri",
    feedback:
      "I love the insights and analytics—it keeps me financially aware.",
    company: "Employee",
  },
  {
    name: "Gopika",
    feedback:
      "This app gives me the confidence to manage my budget effectively.",
    company: "Student",
  },
];

const Testi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-32 right-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-8 shadow-xl w-[500px] text-white sm:hidden overflow-hidden">
      <h3 className="text-xl font-semibold mb-5 text-center">
        💬 What Our Users Say
      </h3>

      {/* Carousel container */}
      <div className="relative h-48 flex items-center justify-center">
        {testimonialsData.map((t, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-700 ease-in-out ${
              i === currentIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <p className="italic text-lg mb-4 text-center">“{t.feedback}”</p>
            <div className="text-center">
              <strong className="text-lg">{t.name}</strong>
              <p className="text-sm text-gray-200">{t.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === currentIndex ? "bg-yellow-400" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testi;
