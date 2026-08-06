"use client";

import React, { useEffect, useRef, useState } from "react";

interface Bubble {
  x: number;
  y: number;
  baseX: number;
  radius: number;
  speed: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  wobblePhase: number;
  opacity: number;
  layer: number; // 0: background, 1: midground, 2: foreground
}

interface PopParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  isRing?: boolean;
}

interface OceanBubblesProps {
  className?: string;
  bubbleCount?: number;
  interactive?: boolean;
  startAfterHero?: boolean;
  topOffset?: number;
  disableTopBurst?: boolean;
}

export default function OceanBubbles({
  className = "pointer-events-none absolute inset-0 z-0",
  bubbleCount = 140,
  interactive = true,
  startAfterHero = false,
  topOffset = 0,
  disableTopBurst = false,
}: OceanBubblesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;

    const getDimensions = () => {
      const isFixed = className.includes("fixed");
      const w = isFixed ? window.innerWidth : container.clientWidth || window.innerWidth;
      const h = isFixed ? window.innerHeight : container.clientHeight || window.innerHeight;
      return { width: w, height: h, isFixed };
    };

    let { width, height, isFixed } = getDimensions();

    // Cap DPR at 1 for lightweight, high-FPS canvas performance
    const dpr = 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // Calculate dynamic curved top boundary for visible ocean background bursting
    const getCurvedMinTop = (xPos: number, r: number) => {
      if (topOffset <= 0) return Math.max(4, r * 0.5);
      const normX = (xPos / width) - 0.5; // -0.5 on left, 0 in center, +0.5 on right
      const curveArc = (normX * normX) * 4; // 0 in center, 1.0 at left & right edges
      const archDelta = 40; // fine-tuned curve variation so side bursts remain at 245px
      return (topOffset + (curveArc * archDelta)) + r * 0.5;
    };

    // Mouse tracking for interactive water flow effect
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 110,
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!interactive || !container) return;
      const rect = container.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (isFixed) {
        mouse.targetX = clientX;
        mouse.targetY = clientY;
      } else {
        mouse.targetX = clientX - rect.left;
        mouse.targetY = clientY - rect.top;
      }
    };

    const handlePointerLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave, { passive: true });
    window.addEventListener("touchstart", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerLeave, { passive: true });

    // Track scroll position if startAfterHero is active
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    if (startAfterHero) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    // Active pop particles array & cached bounding boxes
    let popParticles: PopParticle[] = [];
    let cachedF1Box: { left: number; right: number; top: number; bottom: number } | null = null;
    let cachedF2Box: { left: number; right: number; top: number; bottom: number } | null = null;

    // Trigger bubble burst animation along the curved boundary or clicked position
    const triggerBurst = (x: number, y: number, radius: number, opacity: number) => {
      const minBoundary = getCurvedMinTop(x, radius);
      const burstY = Math.max(minBoundary, y);

      // 1. Expanding water ripple ring
      popParticles.push({
        x,
        y: burstY,
        vx: 0,
        vy: 0,
        radius: Math.max(2, radius * 0.4),
        maxRadius: Math.max(16, radius * 2.4),
        alpha: opacity * 0.9,
        isRing: true,
      });

      // 2. Micro water droplet spray particles
      const count = Math.min(8, Math.max(4, Math.floor(radius * 0.7)));
      for (let p = 0; p < count; p++) {
        const angle = Math.random() * Math.PI * 2;
        const speedMult = 1.5 + Math.random() * 2.2;
        popParticles.push({
          x,
          y: burstY,
          vx: Math.cos(angle) * speedMult,
          vy: Math.sin(angle) * speedMult * 0.6 - 0.5,
          radius: Math.max(0.8, radius * 0.22),
          maxRadius: radius,
          alpha: opacity * 0.95,
          isRing: false,
        });
      }
    };

    // Initialize bubbles with continuous viewport-aware recycling
    const createBubble = (initialSpawn: boolean = false): Bubble => {
      const rand = Math.random();
      let layer = 1;
      let radius = 3.5 + Math.random() * 4.5;
      let speed = 0.95 + Math.random() * 1.0;
      let opacity = 0.3 + Math.random() * 0.35;

      if (rand < 0.4) {
        // Background small micro bubbles
        layer = 0;
        radius = 1.8 + Math.random() * 2.2;
        speed = 0.5 + Math.random() * 0.6;
        opacity = 0.18 + Math.random() * 0.25;
      } else if (rand > 0.82) {
        // Foreground large shiny bubbles
        layer = 2;
        radius = 7.5 + Math.random() * 8.5;
        speed = 1.6 + Math.random() * 1.3;
        opacity = 0.42 + Math.random() * 0.35;
      }

      const x = Math.random() * width;
      const spawnYMin = getCurvedMinTop(x, radius) + 10;
      let y: number;

      if (initialSpawn) {
        y = spawnYMin + Math.random() * Math.max(100, height - spawnYMin);
      } else {
        // Continuous viewport recycling: For tall sections, spawn bubbles right below current view
        if (container && height > 1000) {
          const rect = container.getBoundingClientRect();
          const viewBottom = Math.min(height, Math.max(spawnYMin + 400, -rect.top + window.innerHeight));
          if (Math.random() < 0.7) {
            y = viewBottom + Math.random() * 180;
          } else {
            y = height + radius + 10 + Math.random() * 50;
          }
        } else {
          y = height + radius + 10 + Math.random() * 50;
        }
      }

      return {
        x,
        y,
        baseX: x,
        radius,
        speed,
        wobbleSpeed: 0.01 + Math.random() * 0.018,
        wobbleAmp: 6 + Math.random() * 15,
        wobblePhase: Math.random() * Math.PI * 2,
        opacity,
        layer,
      };
    };

    const bubbles: Bubble[] = Array.from({ length: bubbleCount }, () =>
      createBubble(true)
    );

    // Handle Click/Tap on Bubble or Ocean Section to burst!
    let lastPopTime = 0;
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (!interactive || !container) return;

      const now = Date.now();
      if (now - lastPopTime < 30) return;

      const rect = container.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      // Check if click is inside this container's screen bounds
      if (
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom
      ) {
        return;
      }

      lastPopTime = now;
      const clickX = isFixed ? clientX : clientX - rect.left;
      const clickY = isFixed ? clientY : clientY - rect.top;

      // Check if click coordinates fall within any bubble's hit area (Generous 70px radius)
      let closestIdx = -1;
      let minDistance = 99999;

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        const dx = b.x - clickX;
        const dy = b.y - clickY;
        const dist = Math.hypot(dx, dy);
        const hitRadius = Math.max(65, b.radius * 4.5);

        if (dist <= hitRadius && dist < minDistance) {
          minDistance = dist;
          closestIdx = i;
        }
      }

      if (closestIdx !== -1) {
        const b = bubbles[closestIdx];
        triggerBurst(b.x, b.y, b.radius, b.opacity);
        bubbles[closestIdx] = createBubble(false);
      } else if (clickY >= getCurvedMinTop(clickX, 5)) {
        // Trigger responsive splash burst right at click position if below curved boundary
        triggerBurst(clickX, clickY, 7, 0.7);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("mousedown", handlePointerDown, { passive: true });

    // Handle container or window resize
    const updateCanvasSize = () => {
      const dims = getDimensions();
      width = dims.width;
      height = dims.height;
      isFixed = dims.isFixed;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    resizeObserver.observe(container);
    window.addEventListener("resize", updateCanvasSize, { passive: true });

    let time = 0;

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wasVisible = isVisible;
          isVisible = entry.isIntersecting;
          if (!wasVisible && isVisible) {
            cancelAnimationFrame(animationFrameId);
            render();
          }
        });
      },
      { rootMargin: "200px 0px 200px 0px" }
    );
    intersectionObserver.observe(container);

    const render = () => {
      if (!isVisible) return;
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Determine hero cutoff line if startAfterHero is active
      let topCutoff = 0;
      if (startAfterHero && isFixed) {
        const heroElem = document.getElementById("hero") || document.querySelector("section");
        const heroHeight = heroElem ? heroElem.offsetHeight : window.innerHeight;
        topCutoff = Math.max(0, heroHeight - scrollY);
      }

      // Track real-time bounding rectangles of swimming fish elements (Throttled every 12 frames to prevent layout thrashing)
      if (time % 12 === 0 || !cachedF1Box) {
        const containerRect = container.getBoundingClientRect();
        const fish1Elem = document.getElementById("swimming-fish-1");
        const fish2Elem = document.getElementById("swimming-fish-2");

        if (fish1Elem) {
          const r = fish1Elem.getBoundingClientRect();
          const w = r.width;
          const h = r.height;
          const insetX = w * 0.12;
          const insetY = h * 0.14;
          cachedF1Box = {
            left: r.left + insetX - containerRect.left,
            right: r.right - insetX - containerRect.left,
            top: r.top + insetY - containerRect.top,
            bottom: r.bottom - insetY - containerRect.top,
          };
        } else {
          cachedF1Box = null;
        }

        if (fish2Elem) {
          const r = fish2Elem.getBoundingClientRect();
          const w = r.width;
          const h = r.height;
          const insetX = w * 0.12;
          const insetY = h * 0.14;
          cachedF2Box = {
            left: r.left + insetX - containerRect.left,
            right: r.right - insetX - containerRect.left,
            top: r.top + insetY - containerRect.top,
            bottom: r.bottom - insetY - containerRect.top,
          };
        } else {
          cachedF2Box = null;
        }
      }

      const f1Box = cachedF1Box;
      const f2Box = cachedF2Box;

      // Calculate current visible viewport bounds relative to container for viewport culling
      const currentScrollY = window.scrollY;
      const containerTopInDoc = container.getBoundingClientRect().top + currentScrollY;
      const viewMinY = currentScrollY - containerTopInDoc - 300;
      const viewMaxY = currentScrollY - containerTopInDoc + window.innerHeight + 300;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      // 1. Render and update active bubbles
      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];

        // Move upward with faster speed
        b.y -= b.speed;

        // Calculate natural wave wobble
        const wobble = Math.sin(time * b.wobbleSpeed + b.wobblePhase) * b.wobbleAmp;
        let currentX = b.baseX + wobble;

        // Check Fish 1 collision (Smooth elliptical fish surface contact)
        if (f1Box && f1Box.right > f1Box.left && f1Box.bottom > f1Box.top) {
          const cx = (f1Box.left + f1Box.right) / 2;
          const cy = (f1Box.top + f1Box.bottom) / 2;
          const rx = (f1Box.right - f1Box.left) / 2;
          const ry = (f1Box.bottom - f1Box.top) / 2;

          // Normalized elliptical distance from bubble center to fish center
          const normDist = Math.hypot((currentX - cx) / rx, (b.y - cy) / ry);

          // Burst when bubble edge touches smooth elliptical fish outline
          if (normDist <= 1.0 + (b.radius / ry) * 0.5) {
            // Main body bubbles burst on fish surface; background bubbles pass behind
            if (b.layer > 0 && Math.random() < 0.75) {
              triggerBurst(currentX, b.y, b.radius, b.opacity);
              const newB = createBubble(false);
              // 40% chance spawn recycled bubble above fish to keep continuous upward bubble flow
              if (Math.random() < 0.4) {
                newB.y = Math.max(10, f1Box.top - 15 - Math.random() * 30);
              }
              bubbles[i] = newB;
              continue;
            }
          }
        }

        // Check Fish 2 collision (Smooth elliptical fish surface contact)
        if (f2Box && f2Box.right > f2Box.left && f2Box.bottom > f2Box.top) {
          const cx = (f2Box.left + f2Box.right) / 2;
          const cy = (f2Box.top + f2Box.bottom) / 2;
          const rx = (f2Box.right - f2Box.left) / 2;
          const ry = (f2Box.bottom - f2Box.top) / 2;

          // Normalized elliptical distance from bubble center to fish center
          const normDist = Math.hypot((currentX - cx) / rx, (b.y - cy) / ry);

          // Burst when bubble edge touches smooth elliptical fish outline
          if (normDist <= 1.0 + (b.radius / ry) * 0.5) {
            // Main body bubbles burst on fish surface; background bubbles pass behind
            if (b.layer > 0 && Math.random() < 0.75) {
              triggerBurst(currentX, b.y, b.radius, b.opacity);
              const newB = createBubble(false);
              // 40% chance spawn recycled bubble above fish to keep continuous upward bubble flow
              if (Math.random() < 0.4) {
                newB.y = Math.max(10, f2Box.top - 15 - Math.random() * 30);
              }
              bubbles[i] = newB;
              continue;
            }
          }
        }

        // Gentle interactive mouse hover nudge
        if (interactive && mouse.x > -500 && mouse.y > -500) {
          const dx = currentX - mouse.x;
          const dy = b.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 12;
            const angle = Math.atan2(dy, dx);
            currentX += Math.cos(angle) * force;
            b.y += Math.sin(angle) * force * 0.15;
          }
        }

        b.x = currentX;

        // Calculate smooth ease-out dissolution in disableTopBurst mode
        const fadeStart = 160; // Start dissolving 160px before top
        const fadeEnd = b.radius + 15; // 100% invisible 15px BEFORE touching top edge (y = 0)

        if (disableTopBurst) {
          if (b.y <= fadeEnd) {
            bubbles[i] = createBubble(false);
            continue;
          }
        } else {
          const minTop = getCurvedMinTop(b.x, b.radius);
          if (b.y <= minTop) {
            triggerBurst(b.x, b.y, b.radius, b.opacity);
            bubbles[i] = createBubble(false);
            continue;
          }
        }

        // Viewport Culling: Skip expensive canvas gradient drawing for offscreen bubbles
        if (b.y < viewMinY || b.y > viewMaxY) {
          continue;
        }

        // Clip/skip drawing if bubble is within the Hero section area when startAfterHero is true
        if (startAfterHero && isFixed && b.y < topCutoff) {
          continue;
        }

        // Calculate smooth quadratic ease-out opacity so NO bubble is ever drawn near y = 0
        let drawOpacity = b.opacity;
        if (disableTopBurst && b.y < fadeStart) {
          const factor = Math.max(0, Math.min(1, (b.y - fadeEnd) / (fadeStart - fadeEnd)));
          drawOpacity = b.opacity * (factor * factor);
        }

        // Draw bubble without costly ctx.shadowBlur rasterization
        ctx.save();
        ctx.translate(b.x, b.y);

        // Fast Radial gradient body with built-in soft glow stop
        const grad = ctx.createRadialGradient(
          -b.radius * 0.3,
          -b.radius * 0.3,
          b.radius * 0.08,
          0,
          0,
          b.radius
        );
        grad.addColorStop(0, `rgba(230, 252, 255, ${drawOpacity * 0.6})`);
        grad.addColorStop(0.5, `rgba(0, 210, 255, ${drawOpacity * 0.32})`);
        grad.addColorStop(1, `rgba(0, 150, 255, ${drawOpacity * 0.75})`);

        ctx.beginPath();
        ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Crisp rim stroke
        ctx.strokeStyle = `rgba(255, 255, 255, ${drawOpacity * 0.85})`;
        ctx.lineWidth = Math.max(0.8, b.radius * 0.08);
        ctx.stroke();

        // Specular highlight spot (top-left light dot)
        if (b.radius > 2.5) {
          ctx.beginPath();
          ctx.arc(
            -b.radius * 0.35,
            -b.radius * 0.35,
            Math.max(1, b.radius * 0.24),
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity * 0.95})`;
          ctx.fill();
        }

        // Secondary subtle specular arc for large bubbles
        if (b.radius > 6.5) {
          ctx.beginPath();
          ctx.arc(
            b.radius * 0.2,
            b.radius * 0.25,
            b.radius * 0.45,
            Math.PI * 0.15,
            Math.PI * 0.65
          );
          ctx.strokeStyle = `rgba(255, 255, 255, ${b.opacity * 0.4})`;
          ctx.lineWidth = Math.max(0.8, b.radius * 0.06);
          ctx.stroke();
        }

        ctx.restore();
      }

      // 2. Render and update active pop burst particles
      for (let p = popParticles.length - 1; p >= 0; p--) {
        const pt = popParticles[p];
        if (pt.isRing) {
          pt.radius += 0.8;
          pt.alpha -= 0.045;
          if (pt.alpha <= 0 || pt.radius >= pt.maxRadius) {
            popParticles.splice(p, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${pt.alpha})`;
          ctx.lineWidth = 1.3;
          ctx.stroke();
          ctx.restore();
        } else {
          pt.x += pt.vx;
          pt.y += pt.vy;
          pt.vy += 0.04;
          pt.alpha -= 0.04;

          if (pt.alpha <= 0) {
            popParticles.splice(p, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(210, 245, 255, ${pt.alpha})`;
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateCanvasSize);
      if (startAfterHero) {
        window.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("touchstart", handlePointerMove);
      window.removeEventListener("touchend", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("mousedown", handlePointerDown);
    };
  }, [mounted, bubbleCount, interactive, startAfterHero, className, topOffset]);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" />
    </div>
  );
}
