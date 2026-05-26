import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Total Tensor Labs transformed our data pipeline with a custom ML system that reduced processing time by 80% while improving accuracy significantly. Exceptional team.",
    author: "Jordan Miles",
    title: "CTO",
    company: "DataTech Corp",
    initials: "JM",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    quote:
      "Their deep learning expertise helped us build a medical vision system that outperformed our internal benchmarks by 40%. The research rigor they bring is unmatched.",
    author: "Aisha Patel",
    title: "Head of AI",
    company: "MedScan Inc",
    initials: "AP",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    quote:
      "Working with Total Tensor Labs feels like having a world-class AI research team embedded within your organization. They truly understand both the science and the product.",
    author: "Carlos Nguyen",
    title: "Founder & CEO",
    company: "StartupAI",
    initials: "CN",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "The MLOps infrastructure they built for us handles millions of predictions daily with 99.9% uptime. Our model deployment velocity increased by 5×.",
    author: "Fatima Al-Hassan",
    title: "VP Engineering",
    company: "CloudScale",
    initials: "FA",
    gradient: "from-orange-500 to-amber-500",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real results from teams who trusted us to solve their hardest AI
            challenges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="gradient-border p-7 h-full flex flex-col">
                    <Quote className="w-8 h-8 text-cyan-500/40 mb-5" />
                    <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{t.author}</div>
                        <div className="text-slate-500 text-xs">
                          {t.title}, {t.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "w-6 bg-cyan-400"
                      : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
