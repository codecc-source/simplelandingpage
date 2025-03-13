"use client";

import { useEffect, useState } from "react";

export default function GlowingCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 }); //checks/sets cursor position
  const [isMobile, setIsMobile] = useState(false); //check ccurrent state if on mobile or not

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); //mobile check if screen size is < 768
    checkMobile(); //run if on mobile
    window.addEventListener("resize", checkMobile); //updates if window resizes eg mobile to desktop etc
  }, []);

  useEffect(() => { //turns off glow cursor effect on mobile
    if (isMobile) return; //stop

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]); //runs if state changes and listens to mouse movement

  if (isMobile) return null;  //dont render (cursor) on mobile

  return ( //styling for the cursor
    <div
      className="fixed w-100 h-100 bg-blue-500 rounded-full blur-[180px] pointer-events-none transition-transform duration-200 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}


//This is a reused component from a different personal project, it basically adds a glowing light effect to the cursor