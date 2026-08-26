import React, { useRef, useState } from 'react';

export default function Card3DTilt({ children, maxTilt = 15, scale = 1.03, className = '', style = {}, onClick }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, shadowX: 0, shadowY: 0, glareX: 50, glareY: 50, isHovered: false });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse position inside element
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    const shadowX = ((x - centerX) / centerX) * -20;
    const shadowY = ((y - centerY) / centerY) * 20;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({
      x: tiltX,
      y: tiltY,
      shadowX,
      shadowY,
      glareX,
      glareY,
      isHovered: true
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, shadowX: 0, shadowY: 0, glareX: 50, glareY: 50, isHovered: false });
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transition: tilt.isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.isHovered ? scale : 1})`,
        boxShadow: tilt.isHovered
          ? `${tilt.shadowX}px ${tilt.shadowY + 15}px 35px rgba(62, 37, 34, 0.2)`
          : '0 8px 24px rgba(62, 37, 34, 0.08)',
        position: 'relative',
        willChange: 'transform',
        ...style
      }}
    >
      {/* 3D Content Container */}
      <div style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%' }}>
        {children}
      </div>

      {/* Dynamic 3D Specular Glare Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)`,
          opacity: tilt.isHovered ? 1 : 0,
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 20
        }}
      />
    </div>
  );
}
