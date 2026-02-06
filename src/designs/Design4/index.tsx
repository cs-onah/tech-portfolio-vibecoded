import { motion } from "framer-motion";
import { profile, projects, skills, socialLinks } from "../../data";
import { ArrowRight } from "lucide-react";

export default function Editorial() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-black font-serif selection:bg-black selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
        <span className="font-sans text-xs tracking-widest uppercase">
          Volume II — {new Date().getFullYear()}
        </span>
        <span className="font-sans text-xs tracking-widest uppercase">
          The Portfolio
        </span>
      </header>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-between p-8 pt-32">
        <div className="border-t border-black pt-4">
          <h1 className="text-[12vw] leading-[0.85] tracking-tighter">
            <span className="block">CREATIVE</span>
            <span className="block ml-[10vw] italic font-light">Developer</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end pb-8">
          <div className="max-w-md font-sans text-sm leading-relaxed mb-8 md:mb-0">
            <p>{profile.about}</p>
          </div>
          <div className="text-[10vw] leading-none tracking-tighter self-end">
            (04)
          </div>
        </div>
      </section>

      {/* Selected Works - Large Imagery */}
      <section className="bg-white">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="min-h-screen sticky top-0 flex flex-col md:flex-row bg-white border-t border-black"
          >
            {/* Image Half */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={project.assets.cover}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Text Half */}
            <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
              <span className="font-sans text-xs tracking-widest uppercase mb-4 text-gray-400">
                Project 0{idx + 1}
              </span>
              <h2 className="text-6xl md:text-8xl mb-8 leading-[0.9]">
                {project.title}
              </h2>
              <p className="font-sans text-lg text-gray-600 mb-12 max-w-sm leading-relaxed">
                {project.description}
              </p>
              <div className="space-y-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    className="group flex items-center gap-4 font-sans text-sm uppercase tracking-widest border-b border-gray-200 pb-2 hover:border-black transition-colors"
                  >
                    {link.label}
                    <ArrowRight
                      size={16}
                      className="-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Skills - Typography Grid */}
      <section className="min-h-screen bg-black text-white p-8 md:p-20 flex items-center">
        <div className="w-full">
          <h2 className="font-sans text-xs tracking-widest uppercase mb-20 border-b border-white/20 pb-4">
            Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div>
              <h3 className="text-4xl italic mb-8 font-light">Core Stack</h3>
              <div className="flex flex-wrap gap-4">
                {skills.core.map((skill) => (
                  <span
                    key={skill}
                    className="text-2xl md:text-3xl border border-white/30 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-4xl italic mb-8 font-light">
                Tools & Methods
              </h3>
              <ul className="grid grid-cols-2 gap-4 font-sans text-sm text-gray-400">
                {skills.tools.slice(0, 8).map((tool) => (
                  <li key={tool} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-[70vh] bg-[#f8f8f8] p-8 md:p-20 flex flex-col justify-end relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center">
          <div className="w-px h-24 bg-black mx-auto mb-8"></div>
          <p className="font-sans text-xs tracking-widest uppercase">
            End of Volume
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-black pt-8">
          <div>
            <h2 className="text-6xl md:text-8xl leading-none">
              Let's
              <br />
              <span className="italic font-light">talk.</span>
            </h2>
          </div>

          <div className="flex gap-8 font-sans text-sm tracking-widest uppercase mt-8 md:mt-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="hover:underline text-gray-600 hover:text-black"
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:hello@example.com"
              className="hover:underline text-black font-bold"
            >
              hello@example.com
            </a>
          </div>
        </div>
      </footer>

      {/* Styles for Serif Font */}
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');
                .font-serif {
                    font-family: 'Playfair Display', serif;
                }
            `}</style>
    </div>
  );
}
