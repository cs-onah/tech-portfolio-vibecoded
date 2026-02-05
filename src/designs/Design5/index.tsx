import { useState } from "react";
import { profile, projects, skills, socialLinks } from "../../data";

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`py-32 px-6 md:px-20 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Line = () => <div className="h-px bg-stone-300 w-full my-8"></div>;

export default function Design5() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="bg-[#EBEBE3] min-h-screen font-serif text-[#1A1A1A] selection:bg-[#FF3333] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-[#EBEBE3]">
        <div className="flex items-center gap-2">
          {/* Logo might be too small/detailed for mix-blend-diff, text often better. Keeping text as primary but can add logo */}
          <span className="text-xl font-bold tracking-widest italic">
            Ebuka/Folio
          </span>
        </div>
        <div className="flex gap-4 text-sm uppercase tracking-widest">
          <span>(Menu)</span>
        </div>
      </nav>

      {/* Hero */}
      <div className="min-h-screen flex flex-col justify-between p-6 md:p-12 pt-32 relative">
        <div className="flex flex-col md:flex-row justify-between md:items-end z-10">
          <h1 className="text-[12vw] leading-[0.85] tracking-tighter mix-blend-overlay opacity-80">
            CREATIVE
            <br />
            <span className="ml-[10vw]">DEVELOPER</span>
          </h1>
          <div className="mb-4 md:mb-10 text-right">
            <p className="text-sm font-sans uppercase tracking-widest mb-2 font-bold">
              ( Role )
            </p>
            <p className="text-xl italic">
              Mobile Software Developer
              <br />& Project Manager
            </p>
            <div className="mt-4 flex justify-end">
              <img
                src={profile.avatar}
                alt="Profile"
                className="w-24 h-24 grayscale border border-stone-400 p-1"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 mt-20 items-end z-10">
          <div className="md:col-span-4">
            <p className="text-lg leading-relaxed font-sans text-stone-600 max-w-sm">
              {profile.tagline}
            </p>
          </div>
          <div className="md:col-span-8 flex justify-end gap-12">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-xl italic hover:text-[#FF3333] transition-colors border-b border-transparent hover:border-[#FF3333]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Line />

      {/* Selected Work - List View with Hover Image */}
      <Section className="relative">
        <div className="flex items-baseline justify-between mb-20">
          <h2 className="text-6xl md:text-8xl italic">
            Selected
            <br />
            Works
          </h2>
          <span className="text-sm font-sans uppercase tracking-widest text-[#FF3333] font-bold">
            ( 01 — 0{projects.length} )
          </span>
        </div>

        <div className="space-y-0 relative z-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group border-t border-stone-300 py-12 hover:bg-[#E1E1D9] transition-colors cursor-pointer relative"
              onMouseEnter={() => setHoveredProject(project.assets.cover)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid md:grid-cols-12 gap-8 items-baseline">
                <div className="md:col-span-1 text-sm font-sans text-stone-400">
                  0{index + 1}
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-4xl md:text-5xl group-hover:italic transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="font-sans text-stone-600 text-sm leading-relaxed max-w-xs">
                    {project.description}
                  </p>
                </div>
                <div className="md:col-span-2 text-right">
                  <div className="flex flex-col items-end gap-1">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-sans uppercase tracking-widest hover:underline decoration-[#FF3333]"
                      >
                        [{link.label}]
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-stone-300"></div>
        </div>

        {/* Floating Image Preview on Hover */}
        <div
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300 z-10 ${hoveredProject ? "opacity-30 md:opacity-100" : "opacity-0"}`}
        >
          {hoveredProject && (
            <img
              src={hoveredProject}
              alt="Preview"
              className="max-w-[500px] max-h-[600px] object-cover grayscale shadow-2xl rotate-3"
            />
          )}
        </div>
      </Section>

      {/* Skills - Editorial Grid */}
      <Section className="bg-[#1A1A1A] text-[#EBEBE3] !max-w-full !px-6 md:!px-12 !py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl italic mb-12 text-[#FF3333]">
              Competencies
            </h2>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-2xl font-light opacity-80">
              {skills.core.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="font-sans">
            <p className="text-stone-400 uppercase tracking-widest mb-8 text-sm font-bold">
              Tools & Concepts
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-stone-300">
              {skills.tools.slice(0, 10).map((tool) => (
                <div key={tool} className="border-b border-stone-800 py-2">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="h-screen flex flex-col justify-center items-center text-center p-6 relative">
        <p className="font-sans uppercase tracking-widest text-[#FF3333] mb-8 font-bold text-sm">
          ( Contact )
        </p>
        <a
          href="mailto:hello@example.com"
          className="text-[8vw] leading-none hover:italic transition-all duration-300 cursor-pointer"
        >
          Let’s Talk
        </a>
        <div className="absolute bottom-12 w-full flex justify-between px-12 font-sans text-xs uppercase tracking-widest text-stone-500">
          <span>© {new Date().getFullYear()}</span>
          <span>Scroll to Top</span>
        </div>
      </footer>
    </div>
  );
}
