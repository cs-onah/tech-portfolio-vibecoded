import { profile, projects, skills, socialLinks } from "../../data";
import { motion } from "framer-motion";

const Section = ({
  children,
  className = "",
  id = "",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <div
    id={id}
    className={`border-b border-black py-20 px-4 md:px-12 relative ${className}`}
  >
    {children}
  </div>
);

export default function Deconstructivist() {
  return (
    <div className="min-h-screen bg-[#FFF4E0] text-black font-serif overflow-x-hidden selection:bg-black selection:text-[#FFF4E0]">
      {/* Nav - Chaotically placed */}
      <nav className="fixed w-full z-50 pointer-events-none mix-blend-difference text-white">
        <div className="absolute top-4 left-4 font-bold tracking-tighter text-xl pointer-events-auto">
          EBUKA_FOLIO
        </div>
        <div className="absolute top-4 right-4 font-mono text-xs pointer-events-auto flex flex-col items-end gap-1">
          <a href="#work" className="hover:underline">
            WORK
          </a>
          <a href="#info" className="hover:underline">
            INFO
          </a>
          <a href="#contact" className="hover:underline">
            CONTACT
          </a>
        </div>
        <div className="absolute bottom-4 left-4 font-mono text-xs rotate-90 origin-bottom-left">
          EST. 2024
        </div>
      </nav>

      {/* Hero */}
      <div className="min-h-screen relative flex flex-col justify-center items-center">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20 pointer-events-none">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="border border-black"></div>
          ))}
        </div>

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-[12vw] leading-[0.8] font-black tracking-tighter mix-blend-darken"
          >
            CREATIVE
          </motion.h1>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
            className="text-[12vw] leading-[0.8] font-thin italic font-serif"
          >
            Developer
          </motion.h1>
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-64 bg-black overflow-hidden transform -rotate-12 z-0">
          <img
            src={profile.avatar}
            alt=""
            className="w-full h-full object-cover opacity-60 grayscale mix-blend-luminosity"
          />
        </div>

        <div className="absolute bottom-12 right-12 max-w-xs font-mono text-xs text-right">
          <p className="mb-4">{profile.tagline.toUpperCase()}</p>
          <p className="border-t border-black pt-2">SCROLL TO EXPLORE</p>
        </div>
      </div>

      {/* Content Divider */}
      <div className="py-4 bg-black text-[#FFF4E0] overflow-hidden whitespace-nowrap font-mono text-sm">
        <div className="animate-marquee inline-block">
          {Array(10)
            .fill(
              " /// DECONSTRUCTED UI /// SYSTEM ERROR /// CREATIVE FREEDOM ",
            )
            .join("")}
        </div>
      </div>

      {/* Projects - Overlapping Grid */}
      <div
        className="bg-white min-h-screen py-32 px-4 md:px-20 relative"
        id="work"
      >
        <div className="absolute top-0 left-20 h-full w-px bg-black"></div>
        <div className="absolute top-20 left-0 w-full h-px bg-black"></div>

        <h2 className="text-9xl font-black mb-32 relative z-10 ml-[-4rem]">
          WORK
        </h2>

        <div className="space-y-40">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 relative`}
            >
              <div className="w-full md:w-1/2 relative z-10">
                <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-20"></div>
                  <img
                    src={project.assets.cover}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                  />

                  <div className="absolute -bottom-8 -right-8 bg-black text-white p-4 font-mono text-xs z-30">
                    FIG. {idx + 1}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 relative z-20 mix-blend-multiply">
                <h3 className="text-6xl md:text-8xl font-black mb-6 leading-[0.8] break-words uppercase">
                  {project.title}
                </h3>
                <div className="space-y-4 font-mono text-sm max-w-sm ml-auto">
                  <p className="border-l-2 border-black pl-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-black text-white px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-8">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="inline-block border-b-2 border-black hover:bg-black hover:text-white transition-colors mr-4 pb-1 uppercase font-bold"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills - List */}
      <Section className="bg-[#FF4800] text-white" id="info">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-black mb-8 leading-none">
              TECHNICAL
              <br />
              ARSENAL
            </h2>
            <p className="font-mono text-sm max-w-xs mb-8">
              A curated list of tools and technologies used to build scalable
              digital experiences.
            </p>
            <ul className="space-y-2 font-mono text-sm">
              {skills.tools.map((tool, i) => (
                <li
                  key={tool}
                  className="border-b border-white/30 pb-2 flex justify-between"
                >
                  <span>{tool}</span>
                  <span>0{i + 1}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10rem] leading-none font-black opacity-20 break-all">
              CODE
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              {skills.core.map((skill) => (
                <div
                  key={skill}
                  className="border-2 border-white px-6 py-3 text-2xl font-bold rounded-full hover:bg-white hover:text-[#FF4800] transition-colors cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer
        className="bg-black text-[#FFF4E0] p-12 md:p-24 min-h-[50vh] flex flex-col justify-between"
        id="contact"
      >
        <div className="flex flex-col md:flex-row justify-between items-start">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-12 md:mb-0">
            GET
            <br />
            IN
            <br />
            TOUCH
          </h2>
          <div className="flex flex-col items-end gap-2 font-mono text-sm">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="hover:bg-[#FFF4E0] hover:text-black px-2 py-1 transition-colors"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
            <a
              href="mailto:hello@example.com"
              className="mt-8 text-2xl underline decoration-wavy decoration-[#FF4800]"
            >
              hello@example.com
            </a>
          </div>
        </div>

        <div className="flex justify-between items-end mt-24 border-t border-[#FFF4E0]/20 pt-8 font-mono text-xs">
          <div>
            LAGOS, NIGERIA
            <br />
            EARTH
          </div>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </footer>

      <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
    </div>
  );
}
