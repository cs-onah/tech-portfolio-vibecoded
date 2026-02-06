import { profile, projects, skills, socialLinks } from "../../data";
import { Zap, Terminal, Wifi, Power, Shield } from "lucide-react";

const GlitchText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => (
  <div className={`relative inline-block ${className} group`}>
    <span className="relative z-10">{text}</span>
    <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] transition-all duration-75 animate-pulse">
      {text}
    </span>
    <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-[2px] transition-all duration-75 animate-pulse delay-75">
      {text}
    </span>
  </div>
);

const CyberButton = ({ children, href = "#", className = "" }: any) => (
  <a
    href={href}
    className={`relative inline-flex items-center justify-center px-8 py-3 font-bold text-white uppercase tracking-widest bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all group ${className}`}
    style={{
      clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
    }}
  >
    {children}
  </a>
);

export default function Cyberpunk() {
  return (
    <div className="min-h-screen bg-[#050510] text-yellow-400 font-mono overflow-x-hidden selection:bg-yellow-400 selection:text-black relative">
      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

      {/* Sidebar / HUD */}
      <div className="fixed left-0 top-0 h-full w-16 md:w-24 border-r border-yellow-400/20 bg-black/50 backdrop-blur-sm z-40 hidden md:flex flex-col items-center py-12 justify-between">
        <div
          className="text-2xl font-black rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          CYBER_FOLIO
        </div>
        <div className="flex flex-col gap-8 text-yellow-400/50">
          <Wifi size={24} className="animate-pulse" />
          <Power size={24} />
          <Shield size={24} />
        </div>
        <div className="font-xs">v.2077</div>
      </div>

      {/* Main Content */}
      <div className="md:pl-24 relative p-8 md:p-20">
        {/* Hero */}
        <div className="min-h-[90vh] flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 p-4 border border-yellow-400/50 text-xs">
            SYSTEM_STATUS: ONLINE
            <br />
            NET_Link: SECURE
          </div>

          <h1
            className="text-6xl md:text-9xl font-black uppercase leading-none mb-8 tracking-tighter"
            style={{ textShadow: "0 0 10px rgba(250, 204, 21, 0.5)" }}
          >
            <GlitchText text="Night" />
            <br />
            <span className="text-white">City</span>
            <br />
            <GlitchText text="Coder" />
          </h1>

          <div className="max-w-xl text-lg text-cyan-400 mb-12 border-l-4 border-cyan-400 pl-6 leading-relaxed bg-cyan-900/10 p-4">
            {profile.about}
          </div>

          <div className="flex gap-4">
            <CyberButton>Initialize</CyberButton>
            <CyberButton className="!border-cyan-400 !text-cyan-400 hover:!bg-cyan-400 hover:!text-black">
              Scan Net
            </CyberButton>
          </div>
        </div>

        {/* Skills - Matrix */}
        <div className="mb-40">
          <div className="flex items-center gap-4 mb-12">
            <Zap size={32} className="text-yellow-400" />
            <h2 className="text-4xl font-black uppercase tracking-widest">
              Neural Upgrades
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.core.map((skill) => (
              <div
                key={skill}
                className="bg-gray-900 border border-gray-700 p-6 relative overflow-hidden group hover:border-yellow-400 transition-colors"
              >
                <div className="absolute top-0 right-0 p-1 bg-yellow-400 text-black text-[10px] font-bold opacity-0 group-hover:opacity-100">
                  INSTALLED
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill}</h3>
                <div className="h-1 w-full bg-gray-700 mt-4 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-400 to-red-500 w-[80%]"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs bg-black border border-cyan-500/50 text-cyan-500 px-3 py-1 uppercase hover:bg-cyan-500 hover:text-black cursor-pointer transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Projects - Holographic Cards */}
        <div className="mb-40">
          <div className="flex items-center gap-4 mb-12">
            <Terminal size={32} className="text-red-500" />
            <h2 className="text-4xl font-black uppercase tracking-widest text-white">
              Net Runs
            </h2>
          </div>

          <div className="space-y-20">
            {projects.map((project, idx) => (
              <div key={project.id} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col md:flex-row bg-[#0a0a15] border border-gray-800 p-1">
                  <div className="w-full md:w-1/2 relative overflow-hidden">
                    <img
                      src={project.assets.cover}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity mix-blend-luminosity group-hover:mix-blend-normal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a15] to-transparent"></div>
                    <div className="absolute bottom-4 left-4 font-black text-4xl text-transparent stroke-white strokewid">
                      0{idx + 1}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-black text-white mb-2 uppercase group-hover:text-yellow-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] bg-gray-800 text-gray-300 px-2 py-1 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-400 mb-8 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          className="text-sm font-bold uppercase text-cyan-400 hover:text-white border-b border-cyan-400 hover:border-white pb-1 transition-colors"
                        >
                          [{link.label}]
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-yellow-400/20 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase">
          <div className="mb-4 md:mb-0">
            Signal Lost...
            <br />
            Reconnecting...
          </div>
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </footer>
      </div>

      <style>{`
                .strokewid {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.2);
                }
            `}</style>
    </div>
  );
}
