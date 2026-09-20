import { useEffect, useState } from "react";

export default function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return (
    <div
      style={{
        left: position.x - 150,
        top: position.y - 150,
      }}
      className="fixed pointer-events-none w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl z-0 transition-all duration-200"
    />
  );
}