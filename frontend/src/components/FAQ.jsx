import React, { useState } from "react";

const faqData = [
  {
    question: "What is Finance Quest?",
    answer:
      "Finance Quest is a platform designed to help users manage and track their finances efficiently.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Click on the Sign Up button on the homepage and fill in the required information to create your account.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes, we use industry-standard encryption to ensure your data is safe and secure.",
  },
  {
    question: "Can I access Finance Quest on mobile devices?",
    answer:
      "Yes, our platform is fully responsive and works on all modern mobile devices.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach our support team  by emailing finquest@gmail.com.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        padding: "3rem 1rem",
        background: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "2rem",
          fontWeight: "700",
          color: "#333",
        }}
      >
        Frequently Asked Questions
      </h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {faqData.map((item, idx) => (
          <div
            key={idx}
            onClick={() => toggleFAQ(idx)}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "1.2rem 1.5rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <strong style={{ fontSize: "1.1rem", color: "#222" }}>
                {item.question}
              </strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  color: "#666",
                  transform: openIndex === idx ? "rotate(45deg)" : "rotate(0)",
                  transition: "transform 0.3s ease",
                }}
              >
                +
              </span>
            </div>

            {openIndex === idx && (
              <p
                style={{
                  marginTop: "0.8rem",
                  color: "#555",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                }}
              >
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
