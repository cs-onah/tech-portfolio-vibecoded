import { motion } from "framer-motion";
import { profile, projects, skills, socialLinks } from "../../data";
import { ArrowUpRight } from "lucide-react";

const Blob = ({ className = "", delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-70 mix-blend-multiply filter ${className}`}
    animate={{
      x: [0, 100, -100, 0],
      y: [0, -100, 100, 0],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      delay: delay,
      ease: "linear",
    }}
  />
);

export default function Fluid() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans overflow-hidden relative selection:bg-purple-300">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-white">
        <Blob className="w-[800px] h-[800px] bg-purple-300 top-[-20%] left-[-20%]" />
        <Blob
          className="w-[600px] h-[600px] bg-yellow-200 top-[20%] right-[-10%]"
          delay={5}
        />
        <Blob
          className="w-[700px] h-[700px] bg-pink-300 bottom-[-20%] left-[20%]"
          delay={10}
        />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Content Container - Glassmorphism */}
      <div className="relative z-10 min-h-screen overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-20 pb-40">
          {/* Hero */}
          <div className="min-h-[80vh] flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600"
            >
              Flow &<br />
              Form.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-slate-600 max-w-2xl leading-relaxed glass p-8 rounded-3xl border border-white/40"
            >
              {profile.about}
            </motion.p>
          </div>

          {/* Projects - Masonry-ish */}
          <div className="mt-40">
            <h2 className="text-4xl font-bold mb-16 pl-8 border-l-4 border-purple-400">
              Selected Work
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`group relative rounded-[40px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl ${idx % 2 === 1 ? "md:translate-y-20" : ""}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.assets.cover}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          className="flex items-center gap-1 px-5 py-2 rounded-full bg-white/80 hover:bg-black hover:text-white transition-all text-sm font-bold shadow-sm"
                        >
                          {link.label} <ArrowUpRight size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills - Floating Bubbles */}
          <div className="mt-60 text-center">
            <h2 className="text-4xl font-bold mb-20 inline-block border-b-4 border-yellow-300 pb-2">
              Skills & Tech
            </h2>

            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {skills.core.map((skill, i) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`px-8 py-4 rounded-full text-xl font-bold backdrop-blur-md shadow-lg border border-white/50
                                        ${i % 3 === 0 ? "bg-purple-100/50 text-purple-800" : ""}
                                        ${i % 3 === 1 ? "bg-blue-100/50 text-blue-800" : ""}
                                        ${i % 3 === 2 ? "bg-pink-100/50 text-pink-800" : ""}
                                    `}
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-slate-500 font-medium">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-white/30 rounded-xl border border-white/40"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-60 flex flex-col items-center justify-center min-h-[50vh] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
            <h2 className="text-6xl md:text-8xl font-bold mb-12 relative z-10 text-slate-800 text-center">
              Ready to
              <br />
              collaborate?
            </h2>
            <div className="flex gap-6 relative z-10">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center hover:bg-purple-600 transition-colors shadow-2xl"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@example.com"
              className="mt-12 text-xl font-bold underline decoration-wavy decoration-purple-400 hover:text-purple-600 transition-colors relative z-10"
            >
              hello@example.com
            </a>
          </div>
        </div>
      </div>

      <style>{`
                .glass {
                    background: rgba(255, 255, 255, 0.25);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }
            `}</style>
    </div>
  );
}
