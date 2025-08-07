import React, { useEffect, useRef, useCallback } from 'react';
import { Box } from '@mui/material';

interface Ripple {
  id: number;
  centerX: number;
  centerY: number;
  startTime: number;
}

interface AnimatedDotGridProps {
  photoRef: React.RefObject<HTMLImageElement | null>;
  interval?: number;
  speed?: number; // Higher = faster (pixels per second)
  dotSpacing?: number;
  dotSize?: number;
  displacementDistance?: number;
  intensityMultiplier?: number; // Control final intensity (0-1)
}

const AnimatedDotGrid: React.FC<AnimatedDotGridProps> = ({
  photoRef,
  interval = 5000,
  speed = 300,
  dotSpacing = 25,
  dotSize = 3,
  displacementDistance = 8,
  intensityMultiplier = 1.0
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const nextRippleIdRef = useRef(0);
  const dotsRef = useRef<Array<{x: number, y: number}>>([]);
  
  // Initialize canvas and dots
  useEffect(() => {
    const initCanvas = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      
      // Set canvas size
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      
      // Create static dot positions
      const cols = Math.ceil(rect.width / dotSpacing);
      const rows = Math.ceil(rect.height / dotSpacing);
      const dots: Array<{x: number, y: number}> = [];
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          dots.push({
            x: col * dotSpacing + dotSpacing / 2,
            y: row * dotSpacing + dotSpacing / 2,
          });
        }
      }
      dotsRef.current = dots;
    };
    
    initCanvas();
    window.addEventListener('resize', initCanvas);
    return () => window.removeEventListener('resize', initCanvas);
  }, [dotSpacing]);

  // Get max ripple radius from photo center to furthest corner
  const getMaxRippleRadius = useCallback(() => {
    if (!photoRef.current || !containerRef.current) return 800;
    
    const photoRect = photoRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const centerX = photoRect.left + photoRect.width / 2 - containerRect.left;
    const centerY = photoRect.top + photoRect.height / 2 - containerRect.top;
    
    const width = containerRect.width;
    const height = containerRect.height;
    
    // Calculate distance to each corner from photo center
    const corners = [
      { x: 0, y: 0 },           // top-left
      { x: width, y: 0 },       // top-right
      { x: 0, y: height },      // bottom-left
      { x: width, y: height }   // bottom-right
    ];
    
    const maxDistance = Math.max(...corners.map(corner => 
      Math.sqrt(Math.pow(corner.x - centerX, 2) + Math.pow(corner.y - centerY, 2))
    ));
    
    return maxDistance;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Start new ripple
  const startRipple = useCallback(() => {
    if (!photoRef.current || !containerRef.current) return;
    
    const photoRect = photoRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const centerX = photoRect.left + photoRect.width / 2 - containerRect.left;
    const centerY = photoRect.top + photoRect.height / 2 - containerRect.top;
    
    ripplesRef.current.push({
      id: nextRippleIdRef.current++,
      centerX,
      centerY,
      startTime: performance.now()
    });
    
    // Limit concurrent ripples
    if (ripplesRef.current.length > 3) {
      ripplesRef.current.shift();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Main animation loop using Canvas
  useEffect(() => {
    let frameId: number;
    
    const animate = (currentTime: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) {
        frameId = requestAnimationFrame(animate);
        return;
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const maxRadius = getMaxRippleRadius();
      
      // Clean up expired ripples - give extra buffer to ensure they reach edges
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        const elapsed = currentTime - ripple.startTime;
        const rippleRadius = (elapsed / 1000) * speed;
        return rippleRadius <= maxRadius + 200; // Increased buffer
      });
      
      // Draw dots
      dotsRef.current.forEach(dot => {
        let totalIntensity = 0;
        let totalDisplacementX = 0;
        let totalDisplacementY = 0;
        
        // Calculate ripple effects for this dot
        ripplesRef.current.forEach(ripple => {
          const elapsed = currentTime - ripple.startTime;
          const rippleRadius = (elapsed / 1000) * speed;
          
          if (rippleRadius > maxRadius) return;
          
          const dx = dot.x - ripple.centerX;
          const dy = dot.y - ripple.centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const rippleWidth = 60;
          const minDistance = Math.max(0, rippleRadius - rippleWidth);
          const maxDistance = rippleRadius + rippleWidth;
          
          if (distance < minDistance || distance > maxDistance) return;
          
          const distanceFromRippleEdge = Math.abs(distance - rippleRadius);
          const intensity = Math.max(0, 1 - (distanceFromRippleEdge / rippleWidth)) * intensityMultiplier;
          
          totalIntensity += intensity;
          
          if (distance > 0) {
            const angle = Math.atan2(dy, dx);
            totalDisplacementX += Math.cos(angle) * intensity * displacementDistance;
            totalDisplacementY += Math.sin(angle) * intensity * displacementDistance;
          }
        });
        
        // Draw dot
        const finalX = dot.x + totalDisplacementX;
        const finalY = dot.y + totalDisplacementY;
        
        ctx.beginPath();
        ctx.arc(finalX, finalY, dotSize / 2, 0, Math.PI * 2);
        
        if (totalIntensity > 0) {
          const baseOpacity = 0.12;
          const rippleOpacity = Math.min(totalIntensity, 1) * 0.25;
          const finalOpacity = baseOpacity + rippleOpacity;
          ctx.fillStyle = `rgba(108, 110, 160, ${finalOpacity})`;
        } else {
          ctx.fillStyle = 'rgba(102, 199, 244, 0.12)';
        }
        
        ctx.fill();
      });
      
      frameId = requestAnimationFrame(animate);
    };
    
    frameId = requestAnimationFrame(animate);
    
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [speed, displacementDistance, intensityMultiplier, dotSize, getMaxRippleRadius]);

  // Ripple interval
  useEffect(() => {
    const intervalId = setInterval(startRipple, interval);
    return () => clearInterval(intervalId);
  }, [interval, startRipple]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
};

export default AnimatedDotGrid;