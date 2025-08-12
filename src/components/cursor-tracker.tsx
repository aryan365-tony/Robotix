"use client";

import React, { useState, useEffect } from 'react';

const CursorTracker: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    // This check needs to be client-side only.
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
      };

      handleResize(); // Set initial state
      window.addEventListener('resize', handleResize);

      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) {
          setIsVisible(true);
        }
      };
  
      const handleMouseEnter = () => {
        setIsVisible(true);
      };
  
      const handleMouseLeave = () => {
        setIsVisible(false);
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseenter', handleMouseEnter);
      document.body.addEventListener('mouseleave', handleMouseLeave);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseenter', handleMouseEnter);
        document.body.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [isVisible]);

  if (isPortrait) {
    return null;
  }

  return isVisible ? (
    <div
      className="cursor-tracker"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  ) : null;
};

export default CursorTracker;
