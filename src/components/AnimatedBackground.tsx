import React, { useRef, useEffect } from "react";

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let nodes: Node[] = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

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
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = `rgba(200, 115, 255, ${Math.random() * 0.6 + 0.2})`;
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
      const nodeCount = Math.floor((width * height) / 15000);
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

          if (distance < 120) {
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(139, 92, 246, ${1 - distance / 120})`;
            ctx!.lineWidth = 0.3;
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx!.clearRect(0, 0, width, height);
      nodes.forEach(node => node.update());
      connect();
      nodes.forEach(node => node.draw());
      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ backgroundColor: "var(--color-brand-bg)" }}
    />
  );
};

export default AnimatedBackground;
