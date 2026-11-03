import { motion } from "motion/react";

interface LogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

const C = "var(--color-brand-primary)";

/** Total Tensor Lab mark (dark-background variant). Source: public/brand/mark-dark.svg */
export default function Logo({ size = 64, className = "", animated = false }: LogoProps) {
  const LogoContent = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Total Tensor Lab"
    >
      <rect x="10" y="10" width="22" height="22" rx="6" fill={C} />
      <rect x="39" y="10" width="22" height="22" rx="6" fill={C} fillOpacity="0.22" />
      <rect x="69.25" y="11.25" width="19.5" height="19.5" rx="5" stroke={C} strokeWidth="2.5" />
      <rect x="10" y="39" width="22" height="22" rx="6" fill={C} fillOpacity="0.22" />
      <rect x="39" y="39" width="22" height="22" rx="6" fill={C} />
      <rect x="68" y="39" width="22" height="22" rx="6" fill={C} fillOpacity="0.22" />
      <rect x="11.25" y="69.25" width="19.5" height="19.5" rx="5" stroke={C} strokeWidth="2.5" />
      <rect x="39" y="68" width="22" height="22" rx="6" fill={C} fillOpacity="0.22" />
      <rect x="68" y="68" width="22" height="22" rx="6" fill={C} />
    </svg>
  );

  if (animated) {
    return (
      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
        {LogoContent}
      </motion.div>
    );
  }

  return LogoContent;
}
