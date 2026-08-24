import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
  const { cursorEnabled } = useTheme();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cursorEnabled) {
      document.body.classList.remove('custom-cursor-active');
      return;
    }

    // Only apply custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if mouse is hovering an interactive element
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .interactive');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorEnabled]);

  // Smooth trailing dot frame loop
  useEffect(() => {
    if (!cursorEnabled || !isVisible) return;
    let animationFrameId;

    const followCursor = () => {
      setTrailingPos(prev => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };

    animationFrameId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, cursorEnabled, isVisible]);

  if (!cursorEnabled || !isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-indigo-500/60 transition-transform duration-100 ${
          isHovered ? 'scale-150 bg-indigo-500/10 border-cyan-400' : 'scale-100'
        }`}
        style={{
          width: '36px',
          height: '36px',
          transform: `translate3d(${trailingPos.x - 18}px, ${trailingPos.y - 18}px, 0) scale(${isHovered ? 1.5 : 1})`,
          transition: 'transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      />
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-cyan-400"
        style={{
          width: '8px',
          height: '8px',
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      />
    </>
  );
}
