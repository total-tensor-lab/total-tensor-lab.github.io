import React, { useRef, useEffect } from "react";

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dpr = window.devicePixelRatio || 1;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame: number | null = null;
    let needsResize = true;
    let disposed = false;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.scale(dpr, dpr);
    };

    let nodes: Node[] = [];

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 0.4 - 0.2;
        this.vy = Math.random() * 0.4 - 0.2;
        this.radius = Math.random() * 2 + 1;
        this.color = `rgba(245,184,61, ${Math.random() * 0.35 + 0.25})`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }
    }

    const init = () => {
      nodes = [];
      const nodeCount = Math.min(64, Math.floor((width * height) / 24000));
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node(Math.random() * width, Math.random() * height));
      }
    };

    const connect = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodes[i].x - nodes[j].x, 2) +
              Math.pow(nodes[i].y - nodes[j].y, 2)
          );

          if (distance < 160) {
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(248,213,139, ${(1 - distance / 160) * 0.25})`;
            ctx!.lineWidth = 0.7;
            ctx!.stroke();
          }
        }
      }
    };

    const canAnimate = () => !disposed && !document.hidden && !reducedMotion.matches;

    const stop = () => {
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      animationFrame = null;
    };

    const animate = () => {
      animationFrame = null;
      if (!canAnimate()) {
        if (reducedMotion.matches) ctx.clearRect(0, 0, width, height);
        return;
      }

      ctx!.clearRect(0, 0, width, height);
      nodes.forEach(node => node.update());
      connect();
      nodes.forEach(node => node.draw());
      animationFrame = requestAnimationFrame(animate);
    };

    const syncAnimation = () => {
      stop();
      if (!canAnimate()) {
        if (reducedMotion.matches) ctx.clearRect(0, 0, width, height);
        return;
      }

      if (needsResize) {
        setSize();
        init();
        needsResize = false;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      needsResize = true;
      syncAnimation();
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", syncAnimation);
    reducedMotion.addEventListener("change", syncAnimation);
    syncAnimation();

    return () => {
      disposed = true;
      stop();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", syncAnimation);
      reducedMotion.removeEventListener("change", syncAnimation);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-0 opacity-[0.08] motion-reduce:hidden"
      style={{ backgroundColor: "var(--color-brand-bg)" }}
    />
  );
};

export default AnimatedBackground;
