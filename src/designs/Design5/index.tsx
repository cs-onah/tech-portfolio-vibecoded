import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile, projects, skills, socialLinks } from "../../data";
import { ChevronDown } from "lucide-react";

const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  );
};

export default function Cinematic() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden"
    >
      {/* Navigation - Minimal */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
        <span className="text-sm tracking-[0.5em] uppercase">Ebuka — Onah</span>
        <div className="flex gap-8 text-xs font-bold tracking-widest uppercase">
          <a href="#work" className="hover:opacity-50 transition-opacity">
            Work
          </a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="text-center z-10 p-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm md:text-base tracking-[0.8em] uppercase mb-8 text-neutral-400"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-6xl md:text-9xl font-light tracking-tighter mb-8"
          >
            IMMERSIVE
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 1.5 }}
            className="h-px bg-white mx-auto"
          ></motion.div>
        </motion.div>

        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          <img
            src={profile.avatar}
            className="w-full h-full object-cover grayscale brightness-50"
            alt="background"
          />
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="min-h-[60vh] flex items-center justify-center p-8 md:p-32 relative">
        <div className="max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-light leading-relaxed text-neutral-300"
          >
            "{profile.tagline}"
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-4 text-xs tracking-widest uppercase text-neutral-500"
          >
            {skills.core.map((skill) => (
              <span
                key={skill}
                className="border border-neutral-800 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects - Horizontal / Parallax */}
      <div id="work" className="bg-neutral-900 py-32">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="min-h-screen flex items-center justify-center sticky top-0 bg-neutral-900 border-t border-white/5"
          >
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="order-2 md:order-1"
              >
                <span className="text-xs text-neutral-500 tracking-[0.2em] mb-4 block">
                  0{index + 1} — {project.tags[0]}
                </span>
                <h2 className="text-5xl md:text-7xl font-light mb-8">
                  {project.title}
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-md">
                  {project.description}
                </p>
                <div className="flex gap-8">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm hover:text-white/50 transition-colors uppercase tracking-widest border-b border-white pb-1"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="order-1 md:order-2 h-[50vh] md:h-[70vh] bg-neutral-800 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <ParallaxImage src={project.assets.cover} alt={project.title} />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center relative z-10 bg-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 to-black pointer-events-none"></div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-light mb-12 text-center"
        >
          Create Something
          <br />
          Timeless.
        </motion.h2>

        <a
          href="mailto:hello@example.com"
          className="px-12 py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-sm mb-24"
        >
          Get in Touch
        </a>

        <div className="flex gap-12 text-sm text-neutral-500 uppercase tracking-widest">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="absolute bottom-8 text-neutral-800 text-xs">
          © {new Date().getFullYear()} Cinematic Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
