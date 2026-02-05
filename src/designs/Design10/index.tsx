import { profile, projects, skills, socialLinks } from "../../data";

const GridBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div
      className="w-full h-full"
      style={{
        backgroundImage:
          "linear-gradient(#0044cc 1px, transparent 1px), linear-gradient(90deg, #0044cc 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        opacity: 0.2,
      }}
    ></div>
    <div
      className="w-full h-full absolute top-0 left-0"
      style={{
        backgroundImage:
          "linear-gradient(#0044cc 1px, transparent 1px), linear-gradient(90deg, #0044cc 1px, transparent 1px)",
        backgroundSize: "200px 200px",
        opacity: 0.3,
      }}
    ></div>
  </div>
);

const Measurement = ({
  width,
  label = "",
}: {
  width: string;
  label?: string;
}) => (
  <div className="flex flex-col items-center w-full my-2">
    <div className="flex items-center w-full gap-2 text-[#0066ff] text-[10px] font-mono">
      <div className="h-2 w-px bg-[#0066ff]"></div>
      <div className="h-px bg-[#0066ff] flex-1 relative">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#001133] px-1">
          {width}
        </span>
      </div>
      <div className="h-2 w-px bg-[#0066ff]"></div>
    </div>
    {label && (
      <span className="text-[10px] uppercase text-[#0066ff]">{label}</span>
    )}
  </div>
);

const Crosshair = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute w-4 h-4 border-l border-t border-[#0066ff] ${className}`}
  >
    <div className="absolute top-0 left-0 w-full h-[1px] bg-[#0066ff]"></div>
    <div className="absolute top-0 left-0 h-full w-[1px] bg-[#0066ff]"></div>
  </div>
);

export default function Blueprint() {
  return (
    <div className="min-h-screen bg-[#001133] text-[#e6f0ff] font-mono relative overflow-x-hidden selection:bg-[#0066ff] selection:text-white">
      <GridBackground />

      {/* Header Block */}
      <div className="border border-[#0066ff] m-4 md:m-8 p-8 relative z-10 bg-[#001133]/80 backdrop-blur-sm">
        <Crosshair className="-top-1 -left-1" />
        <Crosshair className="-top-1 -right-1 rotate-90" />
        <Crosshair className="-bottom-1 -left-1 -rotate-90" />
        <Crosshair className="-bottom-1 -right-1 rotate-180" />

        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="text-[#0066ff] text-xs mb-2">
              FIG 1.0 // IDENTITY MATRIX
            </div>
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest text-transparent stroke-text-blue stroked">
              {profile.name}
            </h1>
            <Measurement width="320mm" />
            <h2 className="text-xl md:text-2xl mt-4 text-[#4d94ff] uppercase tracking-widest">
              {profile.role}
            </h2>
          </div>

          <div className="border border-[#0066ff] p-4 max-w-sm relative">
            <div className="absolute -top-2 left-4 bg-[#001133] px-2 text-[#0066ff] text-xs">
              SPECIFICATIONS
            </div>
            <p className="text-xs leading-loose text-justify text-[#b3d1ff]">
              {profile.about.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Skills Schematic */}
      <div className="m-4 md:m-8 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        <div className="md:col-span-4 border border-[#0066ff] p-6 bg-[#001133]/90">
          <div className="text-[#0066ff] text-xs mb-6 border-b border-[#0066ff] pb-2 flex justify-between">
            <span>MODULE: CORE_COMPETENCIES</span>
            <span>REV: 2.4</span>
          </div>
          <div className="space-y-6">
            {skills.core.map((skill) => (
              <div key={skill}>
                <div className="flex justify-between text-xs mb-1">
                  <span>{skill}</span>
                  <span>100%</span>
                </div>
                <div className="h-2 bg-[#002266] border border-[#004488] relative">
                  <div className="absolute top-0 left-0 h-full bg-[#0066ff] w-full animate-pulse opacity-50"></div>
                  <div className="absolute top-0 left-0 h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#001133_2px,#001133_4px)] w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-8 border border-[#0066ff] p-6 bg-[#001133]/90">
          <div className="text-[#0066ff] text-xs mb-6 border-b border-[#0066ff] pb-2">
            <span>MODULE: TOOLKIT_INVENTORY</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.tools.map((tool) => (
              <div
                key={tool}
                className="border border-[#004488] p-2 text-center hover:bg-[#004488]/30 transition-colors cursor-crosshair"
              >
                <div className="text-[10px] text-[#0066ff] mb-1">ITEM_ID</div>
                <div className="text-sm font-bold">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="m-4 md:m-8 border-t border-[#0066ff] pt-8 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-[#0066ff] w-20"></div>
          <h2 className="text-3xl text-[#0066ff] font-bold uppercase">
            Project Schematics
          </h2>
          <div className="h-px bg-[#0066ff] flex-1 relative">
            <div className="absolute right-0 -top-1 w-2 h-2 bg-[#0066ff]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="grid md:grid-cols-2 gap-8 items-center border border-[#0066ff] border-dashed p-4 relative group hover:border-solid transition-all"
            >
              <div className="order-2 md:order-1 space-y-4">
                <div className="flex items-center gap-4 text-[#0066ff]">
                  <span className="text-4xl font-bold opacity-50">
                    0{idx + 1}
                  </span>
                  <div className="h-px bg-[#0066ff] flex-1"></div>
                  <span className="text-xs">STATUS: DEPLOYED</span>
                </div>
                <h3 className="text-4xl font-bold uppercase">
                  {project.title}
                </h3>
                <Measurement width="100%" label="SCOPE" />
                <p className="text-sm text-[#b3d1ff] leading-relaxed border-l border-[#0066ff] pl-4">
                  {project.description}
                </p>
                <div className="flex gap-4 pt-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      className="border border-[#0066ff] px-6 py-2 text-xs hover:bg-[#0066ff] hover:text-[#001133] transition-colors uppercase tracking-widest"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="order-1 md:order-2 relative aspect-video border border-[#0066ff] bg-[#002266] p-1">
                <div className="absolute -top-2 -right-2 text-[#0066ff] text-xs">
                  VIEW_A
                </div>
                <img
                  src={project.assets.cover}
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all"
                />

                {/* Overlay Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="m-4 md:m-8 border border-[#0066ff] p-8 mt-20 relative z-10 bg-[#001133]">
        <div className="grid md:grid-cols-3 gap-8 text-xs text-[#4d94ff]">
          <div>
            <div className="uppercase mb-4 font-bold text-white">
              Contact Protocols
            </div>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block hover:text-white"
                >
                  &gt; {link.name.toUpperCase()}
                </a>
              ))}
              <a
                href="mailto:hello@example.com"
                className="block hover:text-white mt-4"
              >
                &gt; INITIATE_EMAIL_SEQUENCE
              </a>
            </div>
          </div>
          <div className="md:text-center border-l md:border-l-0 md:border-x border-[#0066ff] px-4">
            <div className="w-16 h-16 border border-[#0066ff] rounded-full mx-auto mb-4 flex items-center justify-center animate-spin-slow">
              <div className="w-2 h-2 bg-[#0066ff]"></div>
            </div>
            SYSTEM OPERATIONAL
            <br />
            EST. 2024
          </div>
          <div className="text-right">
            <div className="uppercase mb-4 font-bold text-white">
              Coordinates
            </div>
            <div>LAT: 6.5244 N</div>
            <div>LNG: 3.3792 E</div>
            <div className="mt-4 text-[10px] opacity-50">
              BLUEPRINT_VER_2.1
              <br />© EBUKA_FOLIO
            </div>
          </div>
        </div>
      </footer>

      <style>{`
                .stroked {
                    -webkit-text-stroke: 1px #0066ff;
                    color: transparent;
                }
            `}</style>
    </div>
  );
}
