import React from "react";

const testimonialsData = [
  {
    name: "Badri Narayanan",
    feedback: "FinQuest has transformed the way I handle my savings and investments.",
    category: "UG Student",
  },
  {
    name: "Damodara Prakash",
    feedback: "The platform is so easy to use and has really helped me plan better.",
    category: "Student",
  },
  {
    name: "Gowri",
    feedback: "I love the insights and analytics—it keeps me financially aware.",
    category: "Employee",
  },
  {
    name: "Gopika",
    feedback: "This app gives me the confidence to manage my budget effectively.",
    category: "Student",
  },
  {
    name: "Atshaya",
    feedback: "The personalized learning path is just brilliant for beginners like me!",
    category: "PG Student",
  }
];

const Testimonials = () => (
  <section style={{ padding: "3rem 1rem", background: "#f9f9f9" }}>
    <h2
      style={{
        textAlign: "center",
        marginBottom: "2rem",
        fontSize: "2rem",
        fontWeight: "700",
        color: "#333",
        
      }}
    >
      TESTIMONIALS
    </h2>
    <div
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {testimonialsData.map((t, idx) => (
        <div
          key={idx}
          style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            padding: "2rem",
            maxWidth: "300px",
            minWidth: "250px",
            textAlign: "center",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)";
          }}
        >
          <p style={{ fontStyle: "italic", marginBottom: "1.2rem", color: "#555" }}>
            “{t.feedback}”
          </p>
          <strong style={{ fontSize: "1.1rem", color: "#222" }}>{t.name}</strong>
          <div style={{ color: "#777", fontSize: "0.9rem", marginTop: "0.3rem" }}>
            {t.category}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
