"use client";

import { FollowCursor } from "@/components/followCursor";
import Experiences from "@/pages/experiences";
import Hero from "@/pages/hero";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const updateMousePosition = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  const style = {
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
    width: "400px",
    height: "400px",
    borderRadius: "50% 22% 40% 80%",
    filter: " blur(100px)",
    background: "linear-gradient(#43d9ad, #4d5bce)",
    opacity: 0.4,
    zIndex: 2,
  };

  const variants = {
    default: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "50%"],
    },
  };

  const ref = useRef(null);
  const { x, y } = FollowCursor(ref);
  return (
    <main className="flex justify-between m-auto w-3/4">
      <motion.div
        className={`fixed top-0 left-0`}
        style={style}
        transition={{
          type: "spring",
          stiffness: 50,
          restDelta: 1
        }}
      ></motion.div>
      <Hero />
      <Experiences />
    </main >
  );
}
