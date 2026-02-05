import { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { profile, projects, skills, socialLinks } from "../../data";
import {
  X,
  Minus,
  Square,
  Monitor,
  Folder,
  User,
  LayoutGrid,
  Terminal,
} from "lucide-react";

const DesktopIcon = ({
  label,
  icon: Icon,
  onClick,
  className = "",
}: {
  label: string;
  icon: any;
  onClick: () => void;
  className?: string;
}) => (
  <div
    onClick={onClick}
    className={`flex flex-col items-center gap-1 w-24 p-2 cursor-pointer hover:bg-blue-800/50 hover:border hover:border-blue-300/30 rounded group ${className}`}
  >
    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
      <Icon size={32} className="text-white drop-shadow-md" strokeWidth={1.5} />
    </div>
    <span className="text-white text-xs md:text-sm text-center font-medium drop-shadow-md bg-transparent group-hover:bg-blue-800 px-1 rounded">
      {label}
    </span>
  </div>
);

const Window = ({
  id,
  title,
  children,
  onClose,
  isOpen,
  zIndex,
  onFocus,
}: any) => {
  const controls = useDragControls();

  if (!isOpen) return null;

  return (
    <motion.div
      drag
      dragControls={controls}
      dragMomentum={false}
      onPointerDown={onFocus}
      style={{ zIndex }}
      className="fixed top-20 left-4 md:left-20 w-[90vw] md:w-[600px] bg-[#c0c0c0] border-2 border-[#dfdfdf] border-r-[#404040] border-b-[#404040] shadow-xl overflow-hidden"
    >
      {/* Title Bar */}
      <div
        onPointerDown={(e) => {
          controls.start(e);
          onFocus();
        }}
        className="bg-[#000080] px-2 py-1 flex justify-between items-center cursor-default select-none touch-none"
      >
        <span className="text-white font-bold text-sm truncate pr-4">
          {title}
        </span>
        <div className="flex gap-1">
          <button className="w-5 h-5 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black flex items-center justify-center active:border-t-black active:border-l-black active:border-r-white active:border-b-white">
            <Minus size={10} strokeWidth={4} />
          </button>
          <button className="w-5 h-5 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black flex items-center justify-center active:border-t-black active:border-l-black active:border-r-white active:border-b-white">
            <Square size={8} strokeWidth={3} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose(id);
            }}
            className="w-5 h-5 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black flex items-center justify-center active:border-t-black active:border-l-black active:border-r-white active:border-b-white"
          >
            <X size={12} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-h-[60vh] overflow-auto p-4 md:p-6 font-sans text-sm md:text-base">
        {children}
      </div>
    </motion.div>
  );
};

export default function RetroOS() {
  const [windows, setWindows] = useState({
    about: {
      title: "Notepad - About.txt",
      isOpen: true,
      zIndex: 1,
      content: "about",
    },
    projects: {
      title: "File Explorer - C:/Projects",
      isOpen: false,
      zIndex: 0,
      content: "projects",
    },
    skills: {
      title: "System Properties",
      isOpen: false,
      zIndex: 0,
      content: "skills",
    },
    browser: {
      title: "Netscape Navigator - Internet",
      isOpen: false,
      zIndex: 0,
      content: "browser",
    },
  });

  const [activeZ, setActiveZ] = useState(10);
  const [startOpen, setStartOpen] = useState(false);

  const openWindow = (key: string) => {
    setActiveZ((prev) => prev + 1);
    setWindows((prev) => ({
      ...prev,
      [key]: {
        ...prev[key as keyof typeof windows],
        isOpen: true,
        zIndex: activeZ + 1,
      },
    }));
  };

  const bringToFront = (key: string) => {
    setActiveZ((prev) => prev + 1);
    setWindows((prev) => ({
      ...prev,
      [key]: { ...prev[key as keyof typeof windows], zIndex: activeZ + 1 },
    }));
  };

  const closeWindow = (key: string) => {
    setWindows((prev) => ({
      ...prev,
      [key]: { ...prev[key as keyof typeof windows], isOpen: false },
    }));
  };

  return (
    <div className="bg-[#008080] h-screen w-screen overflow-hidden font-sans select-none relative">
      {/* Desktop Icons */}
      <div className="p-4 flex flex-col items-start gap-6 font-sans">
        <DesktopIcon
          icon={User}
          label="My Computer"
          onClick={() => openWindow("about")}
        />
        <DesktopIcon
          icon={Folder}
          label="Projects"
          onClick={() => openWindow("projects")}
        />
        <DesktopIcon
          icon={Monitor}
          label="Skills"
          onClick={() => openWindow("skills")}
        />
        <DesktopIcon
          icon={LayoutGrid}
          label="Internet"
          onClick={() => openWindow("browser")}
        />
        <DesktopIcon
          icon={Terminal}
          label="MS-DOS"
          onClick={() => {}}
          className="opacity-50"
        />
      </div>

      {/* Windows */}
      <Window
        id="about"
        {...windows.about}
        onClose={() => closeWindow("about")}
        onFocus={() => bringToFront("about")}
      >
        <div className="bg-white p-4 border inset-shadow text-black h-full font-mono">
          <div className="flex gap-4 mb-4">
            <img
              src={profile.avatar}
              className="w-20 h-20 border border-black p-1"
              alt="Profile"
            />
            <div>
              <h2 className="font-bold text-lg mb-1">{profile.name}</h2>
              <p className="mb-2 italic">{profile.role}</p>
              <p>{profile.tagline}</p>
            </div>
          </div>
          <p className="whitespace-pre-wrap">{profile.about}</p>
          <br />
          <p className="font-bold">Contact:</p>
          <a
            href="mailto:hello@example.com"
            className="text-blue-800 underline"
          >
            hello@example.com
          </a>
        </div>
      </Window>

      <Window
        id="projects"
        {...windows.projects}
        onClose={() => closeWindow("projects")}
        onFocus={() => bringToFront("projects")}
      >
        <div className="bg-white p-1 h-full min-h-[300px]">
          <div className="border border-b-white border-r-white border-t-[#808080] border-l-[#808080] p-2 h-full bg-white">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col items-center group cursor-pointer p-2 hover:bg-blue-600 hover:text-white"
                >
                  <img
                    src={project.assets.logo || project.assets.cover}
                    className="w-10 h-10 object-contain mb-1"
                    alt="icon"
                  />
                  <span className="text-xs text-center line-clamp-2 px-1 border border-dotted border-transparent group-hover:border-white">
                    {project.title}
                  </span>
                </div>
              ))}
              {/* Detailed view simulated below */}
              <div className="col-span-full mt-4 border-t pt-2">
                <p className="text-xs text-gray-500 mb-2">32 object(s)</p>
                <div className="bg-white text-black text-sm">
                  {projects.map((p) => (
                    <div
                      key={p.id}
                      className="flex gap-2 mb-4 p-2 border hover:bg-[#e0e0e0]"
                    >
                      <img
                        src={p.assets.cover}
                        className="w-20 h-16 object-cover border border-black"
                      />
                      <div>
                        <div className="font-bold">{p.title}</div>
                        <div className="text-xs text-[#404040]">
                          {p.description}
                        </div>
                        <div className="flex gap-2 mt-1">
                          {p.links.map((l) => (
                            <a
                              key={l.label}
                              href={l.url}
                              className="text-blue-600 underline text-xs"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {l.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Window>

      <Window
        id="skills"
        {...windows.skills}
        onClose={() => closeWindow("skills")}
        onFocus={() => bringToFront("skills")}
      >
        <div className="bg-[#d4d0c8] p-4 flex gap-4 h-full">
          <div className="w-32 bg-white border border-gray-500 p-2">
            <img src={profile.avatar} className="w-full grayscale mb-2" />
            <div className="text-center font-bold text-xs">{profile.name}</div>
          </div>
          <div className="flex-1 space-y-4">
            <fieldset className="border border-gray-400 p-2 text-sm">
              <legend className="px-1 text-xs mb-1">General</legend>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                <div className="text-gray-600">System:</div>
                <div>PortfolioOS v2.0</div>
                <div className="text-gray-600">User:</div>
                <div>Admin</div>
                <div className="text-gray-600">Memory:</div>
                <div>64MB RAM</div>
              </div>
            </fieldset>

            <fieldset className="border border-gray-400 p-2 text-sm">
              <legend className="px-1 text-xs mb-1">
                Installed Drivers (Skills)
              </legend>
              <div className="h-40 overflow-y-auto bg-white border border-gray-500 p-1">
                {skills.core.map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {s}
                  </div>
                ))}
                {skills.tools.map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {s}
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </Window>

      <Window
        id="browser"
        {...windows.browser}
        onClose={() => closeWindow("browser")}
        onFocus={() => bringToFront("browser")}
      >
        <div className="bg-white h-full flex flex-col">
          <div className="bg-[#c0c0c0] p-1 border-b border-gray-400 flex gap-1">
            <div className="bg-white border text-sm px-2 py-0.5 flex-1">
              http://www.linkedin.com/in/csonah
            </div>
            <button className="px-2 text-xs border bg-[#c0c0c0] shadow-sm active:bg-gray-400">
              Go
            </button>
          </div>
          <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 p-4 border border-blue-200 hover:bg-blue-50"
              >
                <link.icon size={32} className="text-blue-600" />
                <span className="text-blue-600 underline text-sm">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Window>

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 w-full h-10 bg-[#c0c0c0] border-t-2 border-white flex justify-between items-center px-1 z-50">
        <button
          onClick={() => setStartOpen(!startOpen)}
          className={`flex items-center gap-1.5 px-2 py-1 h-8 font-bold border-2 ${startOpen ? "border-black border-r-white border-b-white bg-[#e0e0e0]" : "border-white border-r-black border-b-black lg:hover:brightness-110"} active:border-black active:border-r-white active:border-b-white transition-none`}
        >
          <img src={profile.logo} className="w-4 h-4 grayscale" alt="" />
          <span className="text-sm">Start</span>
        </button>

        {startOpen && (
          <div className="absolute bottom-10 left-1 w-48 bg-[#c0c0c0] border-2 border-white border-r-black border-b-black shadow-xl flex flex-col">
            <div className="bg-[#000080] text-white font-bold p-1 pl-8 relative">
              <div className="absolute left-0 bottom-0 top-0 w-6 bg-[#000080] flex items-end pb-1 justify-center rotate-180 writing-vertical-lr text-xs opacity-50">
                Portfolio95
              </div>
              Ebuka Folio
            </div>
            <div className="p-1 space-y-1">
              {["Shutdown", "Run...", "Help", "Settings"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-2 py-1 hover:bg-[#000080] hover:text-white cursor-default"
                >
                  <div className="w-4 h-4 bg-gray-400"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white border border-[#808080] inset-shadow px-2 py-1 text-xs flex items-center gap-1">
          <span className="uppercase">12:00 PM</span>
        </div>
      </div>
    </div>
  );
}
