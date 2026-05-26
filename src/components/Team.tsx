import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";

const TEAM = [
  {
    name: "Alex Chen",
    role: "Chief AI Researcher",
    bio: "PhD in Machine Learning from MIT. Led research at DeepMind and Google Brain. Specializes in self-supervised learning and foundation models.",
    initials: "AC",
    gradient: "from-cyan-500 to-blue-500",
    skills: ["Deep Learning", "NLP", "Foundation Models"],
  },
  {
    name: "Priya Sharma",
    role: "Head of Engineering",
    bio: "Former Staff Engineer at Meta AI. 10+ years building large-scale ML infrastructure and distributed training systems.",
    initials: "PS",
    gradient: "from-violet-500 to-purple-500",
    skills: ["MLOps", "Distributed Systems", "PyTorch"],
  },
  {
    name: "Marcus Rodriguez",
    role: "ML Infrastructure Lead",
    bio: "Expert in GPU computing and model optimization. Previously at NVIDIA Research, focused on inference acceleration and quantization.",
    initials: "MR",
    gradient: "from-emerald-500 to-teal-500",
    skills: ["CUDA", "Model Optimization", "TensorRT"],
  },
  {
    name: "Sarah Kim",
    role: "AI Product Director",
    bio: "Product leader with a background in AI startups. Bridges the gap between research breakthroughs and products that users love.",
    initials: "SK",
    gradient: "from-pink-500 to-rose-500",
    skills: ["Product Strategy", "AI UX", "Go-to-Market"],
  },
];

const SOCIALS = [
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
];

export default function Team() {
  return (
    <section id="team" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />
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
            The People
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Meet Our{" "}
            <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            World-class researchers and engineers united by a shared mission to
            advance AI for the benefit of all.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="gradient-border p-6 flex flex-col items-center text-center group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg`}>
                {member.initials}
              </div>

              <h3 className="text-white font-bold text-base mb-1">{member.name}</h3>
              <p className="text-cyan-400 text-xs font-semibold mb-3">{member.role}</p>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">{member.bio}</p>

              {/* Skill tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-full bg-white/5 border border-white/[0.06] text-slate-400 text-[10px] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-auto">
                {SOCIALS.map(({ icon: Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="text-slate-600 hover:text-cyan-400 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
