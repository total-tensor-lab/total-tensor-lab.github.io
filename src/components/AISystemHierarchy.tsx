import { useEffect, useRef } from "react";
import {
  Blocks,
  Bot,
  BrainCircuit,
  CloudCog,
  Database,
  Eye,
  FileText,
  MessageSquareText,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const WIDTH = 620;
const HEIGHT = 740;
const ASSEMBLY_DURATION_MS = 1000;
const ASSEMBLY_DURATION = ASSEMBLY_DURATION_MS / 1000;

type Accent = "cyan" | "violet";

type Cube = {
  x: number;
  y: number;
  width: number;
  depth: number;
  height: number;
  accent: Accent;
  delay: number;
};

const DATA_CAPABILITIES = [
  { label: "Databases", icon: Database, x: 100 },
  { label: "Documents", icon: FileText, x: 240 },
  { label: "APIs", icon: Blocks, x: 380 },
  { label: "Business tools", icon: Wrench, x: 520 },
];

const INTELLIGENCE_CAPABILITIES = [
  { label: "Machine learning", icon: BrainCircuit, x: 105 },
  { label: "Computer vision", icon: Eye, x: 242 },
  { label: "LLMs", icon: MessageSquareText, x: 378 },
  { label: "AI agents", icon: Bot, x: 515 },
];

const BASE_SLAB: Cube = { x: 310, y: 605, width: 570, depth: 32, height: 28, accent: "cyan", delay: 0.05 };
const DATA_CUBES: Cube[] = DATA_CAPABILITIES.map((item, index) => ({
  x: item.x,
  y: 520,
  width: 120,
  depth: 40,
  height: 60,
  accent: "cyan",
  delay: 0.12 + index * 0.05,
}));
const INTELLIGENCE_SLAB: Cube = { x: 310, y: 440, width: 560, depth: 34, height: 36, accent: "violet", delay: 0.34 };
const INTELLIGENCE_CUBES: Cube[] = INTELLIGENCE_CAPABILITIES.map((item, index) => ({
  x: item.x,
  y: 345,
  width: 112,
  depth: 44,
  height: 66,
  accent: "violet",
  delay: 0.4 + index * 0.05,
}));
const CLOUD_CUBE: Cube = { x: 310, y: 150, width: 250, depth: 78, height: 112, accent: "cyan", delay: 0.68 };
const APEX_CUBE: Cube = { x: 310, y: 4, width: 150, depth: 58, height: 82, accent: "violet", delay: 0.88 };

const COLORS = {
  cyan: {
    line: "rgba(34, 211, 238, 0.95)",
    topA: "rgba(14, 116, 144, 0.62)",
    topB: "rgba(8, 47, 73, 0.82)",
    leftA: "rgba(8, 78, 110, 0.88)",
    leftB: "rgba(5, 25, 48, 0.98)",
    rightA: "rgba(5, 45, 76, 0.96)",
    rightB: "rgba(3, 17, 35, 0.99)",
    glow: "rgba(6, 182, 212, 0.5)",
  },
  violet: {
    line: "rgba(167, 139, 250, 0.95)",
    topA: "rgba(109, 40, 217, 0.7)",
    topB: "rgba(49, 46, 129, 0.84)",
    leftA: "rgba(76, 29, 149, 0.9)",
    leftB: "rgba(28, 22, 66, 0.98)",
    rightA: "rgba(45, 32, 98, 0.96)",
    rightB: "rgba(15, 14, 42, 0.99)",
    glow: "rgba(139, 92, 246, 0.5)",
  },
};

function easeOutCubic(value: number) {
  return 1 - (1 - value) ** 3;
}

function polygon(
  context: CanvasRenderingContext2D,
  points: Array<[number, number]>,
  fill: CanvasGradient,
  stroke: string,
) {
  context.beginPath();
  context.moveTo(points[0][0], points[0][1]);
  points.slice(1).forEach(([x, y]) => context.lineTo(x, y));
  context.closePath();
  context.fillStyle = fill;
  context.fill();
  context.strokeStyle = stroke;
  context.lineWidth = 1.35;
  context.stroke();
}

function drawCube(context: CanvasRenderingContext2D, cube: Cube, elapsed: number, still: boolean) {
  const progress = still ? 1 : easeOutCubic(Math.min(1, Math.max(0, elapsed / ASSEMBLY_DURATION_MS - cube.delay)));
  if (progress <= 0) return;

  const y = cube.y + (1 - progress) * 44;
  const halfWidth = cube.width / 2;
  const halfDepth = cube.depth / 2;
  const top: [number, number] = [cube.x, y];
  const right: [number, number] = [cube.x + halfWidth, y + halfDepth];
  const front: [number, number] = [cube.x, y + cube.depth];
  const left: [number, number] = [cube.x - halfWidth, y + halfDepth];
  const rightBottom: [number, number] = [right[0], right[1] + cube.height];
  const frontBottom: [number, number] = [front[0], front[1] + cube.height];
  const leftBottom: [number, number] = [left[0], left[1] + cube.height];
  const palette = COLORS[cube.accent];

  context.save();
  context.globalAlpha = progress;
  context.shadowColor = palette.glow;
  context.shadowBlur = 10;

  const leftGradient = context.createLinearGradient(left[0], left[1], frontBottom[0], frontBottom[1]);
  leftGradient.addColorStop(0, palette.leftA);
  leftGradient.addColorStop(1, palette.leftB);
  polygon(context, [left, front, frontBottom, leftBottom], leftGradient, palette.line);

  const rightGradient = context.createLinearGradient(right[0], right[1], frontBottom[0], frontBottom[1]);
  rightGradient.addColorStop(0, palette.rightA);
  rightGradient.addColorStop(1, palette.rightB);
  polygon(context, [front, right, rightBottom, frontBottom], rightGradient, palette.line);

  const topGradient = context.createLinearGradient(top[0], top[1], front[0], front[1]);
  topGradient.addColorStop(0, palette.topA);
  topGradient.addColorStop(1, palette.topB);
  polygon(context, [top, right, front, left], topGradient, palette.line);

  context.globalAlpha = progress * 0.32;
  context.strokeStyle = "rgba(255,255,255,0.75)";
  context.beginPath();
  context.moveTo(top[0], top[1] + 1);
  context.lineTo(left[0], left[1]);
  context.stroke();
  context.restore();
}

function drawSignals(
  context: CanvasRenderingContext2D,
  elapsed: number,
  still: boolean,
  particlesOnly = false,
) {
  const bridges = [
    { xs: [275, 310, 345], from: 150, to: 144, accent: "violet" as const },
    { xs: [174, 310, 446], from: 345, to: 340, accent: "cyan" as const },
    { xs: [170, 310, 450], from: 520, to: 510, accent: "violet" as const },
  ];

  bridges.forEach((bridge, bridgeIndex) => {
    bridge.xs.forEach((x, index) => {
      const palette = COLORS[bridge.accent];
      context.save();
      if (!particlesOnly) {
        context.strokeStyle = palette.line;
        context.globalAlpha = 0.48;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(x, bridge.from);
        context.lineTo(x, bridge.to);
        context.stroke();
      }

      const phase = still ? 0.45 : ((elapsed / 1500 + index * 0.18 + bridgeIndex * 0.12) % 1);
      const y = bridge.from + (bridge.to - bridge.from) * phase;
      context.globalAlpha = still ? 0.75 : Math.sin(phase * Math.PI);
      context.fillStyle = palette.line;
      context.shadowColor = palette.glow;
      context.shadowBlur = 18;
      context.fillRect(x - 3.5, y - 3.5, 7, 7);
      context.restore();
    });
  });
}

function IsometricCanvas({ reduceMotion }: { reduceMotion: boolean | null }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let startTime = 0;
    const resizeObserver = new ResizeObserver(() => render(performance.now()));

    const render = (time: number) => {
      const bounds = canvas.getBoundingClientRect();
      const density = window.devicePixelRatio || 1;
      const pixelWidth = Math.round(bounds.width * density);
      const pixelHeight = Math.round(bounds.height * density);
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }

      context.setTransform((bounds.width / WIDTH) * density, 0, 0, (bounds.height / HEIGHT) * density, 0, 0);
      context.clearRect(0, 0, WIDTH, HEIGHT);

      if (!startTime) startTime = time;
      const elapsed = reduceMotion ? 5000 : time - startTime;

      drawSignals(context, elapsed, Boolean(reduceMotion));
      drawCube(context, BASE_SLAB, elapsed, Boolean(reduceMotion));
      DATA_CUBES.forEach((cube) => drawCube(context, cube, elapsed, Boolean(reduceMotion)));
      drawCube(context, INTELLIGENCE_SLAB, elapsed, Boolean(reduceMotion));
      INTELLIGENCE_CUBES.forEach((cube) => drawCube(context, cube, elapsed, Boolean(reduceMotion)));
      drawCube(context, CLOUD_CUBE, elapsed, Boolean(reduceMotion));
      drawCube(context, APEX_CUBE, elapsed, Boolean(reduceMotion));
      drawSignals(context, elapsed, Boolean(reduceMotion), true);

      if (!reduceMotion) animationFrame = requestAnimationFrame(render);
    };

    resizeObserver.observe(canvas);
    animationFrame = requestAnimationFrame(render);
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

function CubeLabel({
  x,
  y,
  label,
  icon: Icon,
  accent,
  delay,
}: {
  x: number;
  y: number;
  label: string;
  icon: LucideIcon;
  accent: Accent;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute flex w-[24%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
      style={{ left: `${(x / WIDTH) * 100}%`, top: `${(y / HEIGHT) * 100}%` }}
      initial={{ opacity: 0, y: 44 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ASSEMBLY_DURATION, delay, ease: easeOutCubic }}
    >
      <Icon
        className={`h-5 w-5 sm:h-6 sm:w-6 ${accent === "cyan" ? "text-cyan-200" : "text-violet-100"}`}
        style={{ filter: `drop-shadow(0 0 6px ${accent === "cyan" ? "rgba(34,211,238,0.9)" : "rgba(167,139,250,0.9)"})` }}
        aria-hidden="true"
      />
      <span className="mt-1 text-[9px] font-bold leading-tight text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.95)] sm:text-xs">{label}</span>
    </motion.div>
  );
}

export default function AISystemHierarchy() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      aria-labelledby="ai-stack-title"
      className="relative mx-auto aspect-[620/740] w-full max-w-[620px] lg:-mt-4"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <h2 id="ai-stack-title" className="sr-only">How we assemble production-ready AI systems</h2>
      <div className="pointer-events-none absolute inset-[8%] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.10),transparent_68%)] blur-2xl" aria-hidden="true" />
      <IsometricCanvas reduceMotion={reduceMotion} />

      <motion.div
        className="absolute flex w-[28%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
        style={{ left: "50%", top: `${((APEX_CUBE.y + APEX_CUBE.depth + APEX_CUBE.height / 2) / HEIGHT) * 100}%` }}
        initial={{ opacity: 0, y: 44 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ASSEMBLY_DURATION, delay: APEX_CUBE.delay, ease: easeOutCubic }}
      >
        <Sparkles className="h-4 w-4 text-violet-200 sm:h-5 sm:w-5" aria-hidden="true" />
        <span className="mt-1.5 text-[9px] font-semibold leading-tight text-white sm:text-xs">Production-ready AI</span>
      </motion.div>

      <motion.div
        className="absolute flex w-[36%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
        style={{ left: "50%", top: `${((CLOUD_CUBE.y + CLOUD_CUBE.depth + CLOUD_CUBE.height / 2) / HEIGHT) * 100}%` }}
        initial={{ opacity: 0, y: 44 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ASSEMBLY_DURATION, delay: CLOUD_CUBE.delay, ease: easeOutCubic }}
      >
        <CloudCog className="h-5 w-5 text-brand-secondary sm:h-6 sm:w-6" aria-hidden="true" />
        <span className="mt-1.5 text-[9px] font-semibold leading-tight text-white sm:text-sm">Cloud &amp; Edge Deployment</span>
      </motion.div>

      {INTELLIGENCE_CAPABILITIES.map(({ label, icon, x }, index) => (
        <CubeLabel
          key={label}
          x={x}
          y={INTELLIGENCE_CUBES[index].y + INTELLIGENCE_CUBES[index].depth + INTELLIGENCE_CUBES[index].height * 0.45}
          label={label}
          icon={icon}
          accent="violet"
          delay={INTELLIGENCE_CUBES[index].delay}
        />
      ))}

      <motion.div
        className="absolute w-[92%] -translate-x-1/2 -translate-y-1/2 text-center sm:w-[70%]"
        style={{ left: "50%", top: `${((INTELLIGENCE_SLAB.y + INTELLIGENCE_SLAB.depth + INTELLIGENCE_SLAB.height / 2) / HEIGHT) * 100}%` }}
        initial={{ opacity: 0, y: 44 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ASSEMBLY_DURATION, delay: INTELLIGENCE_SLAB.delay, ease: easeOutCubic }}
      >
        <h3 className="text-[10px] font-bold text-white [text-shadow:0_1px_5px_rgba(0,0,0,0.9)] sm:text-base">Intelligence Layer</h3>
        <p className="mt-0.5 whitespace-nowrap text-[8px] leading-tight text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.95)] sm:whitespace-normal sm:text-xs">Apply the right models and architectures for your use case.</p>
      </motion.div>

      {DATA_CAPABILITIES.map(({ label, icon, x }, index) => (
        <CubeLabel
          key={label}
          x={x}
          y={DATA_CUBES[index].y + DATA_CUBES[index].depth + DATA_CUBES[index].height * 0.45}
          label={label}
          icon={icon}
          accent="cyan"
          delay={DATA_CUBES[index].delay}
        />
      ))}

      <motion.div
        className="absolute w-[96%] -translate-x-1/2 text-center sm:w-[78%]"
        style={{ left: "50%", top: `${((BASE_SLAB.y + BASE_SLAB.depth + BASE_SLAB.height + 8) / HEIGHT) * 100}%` }}
        initial={{ opacity: 0, y: 44 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ASSEMBLY_DURATION, delay: BASE_SLAB.delay, ease: easeOutCubic }}
      >
        <h3 className="text-[10px] font-bold text-white [text-shadow:0_1px_5px_rgba(0,0,0,0.9)] sm:text-base">Business Data &amp; Workflows</h3>
        <p className="mt-0.5 whitespace-nowrap text-[8px] leading-tight text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.95)] sm:whitespace-normal sm:text-xs">Connect your data, tools, and processes to create reliable AI workflows.</p>
      </motion.div>
    </motion.aside>
  );
}
