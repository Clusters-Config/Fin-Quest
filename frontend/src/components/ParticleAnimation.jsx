import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Particle = ({ size, left, duration }) => {
  return (
    <motion.div
      className="absolute bg-white rounded-full opacity-60"
      style={{ width: size, height: size, left }}
      initial={{ y: "100vh", opacity: 0.2 }}
      animate={{ y: "-10vh", opacity:0.7 }}
      exit={{ opacity: 0 }}
      transition={{ duration, ease: "linear" }}
    />
  );
};

const ParticleAnimation = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => [
        ...prev,
        {
          id: Math.random(),
          size: Math.random() * 6 + 1,
          left: `${Math.random() * 100}vw`,
          duration: Math.random() * 3 + 3,
        },
      ]);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden -z-10">
      {particles.map((p) => (
        <Particle key={p.id} size={p.size} left={p.left} duration={p.duration} />
      ))}
    </div>
  );
};

export default ParticleAnimation;
