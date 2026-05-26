import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "Multidisciplinary team of researchers and engineers",
  "Proven track record across 20+ industry verticals",
  "State-of-the-art GPU compute infrastructure",
  "Rigorous experimentation and reproducible science",
  "Transparent, collaborative engagement model",
  "Commitment to responsible and ethical AI",
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-brand-primary text-sm font-semibold tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Where Research Meets{" "}
              <span className="gradient-text">Real-World Impact</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-5">
              Total Tensor Labs is a pioneering AI research and engineering
              organization at the forefront of machine learning innovation.
              Founded by researchers and engineers passionate about AI's
              transformative potential, we bridge the gap between cutting-edge
              academic research and real-world applications.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Our multidisciplinary team brings together expertise in deep
              learning, computer vision, natural language processing, and
              scalable AI systems — delivering solutions that drive meaningful
              impact across industries.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
