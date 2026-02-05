import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, projects, skills, socialLinks } from "../../data";
import {
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  User,
  Code,
  Briefcase,
  Mail,
} from "lucide-react";

const MenuItem = ({ icon: Icon, label, isActive, onClick }: any) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center gap-4 px-8 py-4 rounded-full text-xl font-bold transition-all ${
      isActive
        ? "bg-white text-black scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        : "text-gray-500 hover:text-white"
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={24} />
    {label}
  </motion.button>
);

const GameCard = ({
  project,
  isActive,
}: {
  project: any;
  isActive: boolean;
}) => (
  <motion.div
    className={`relative flex-shrink-0 w-[400px] h-[500px] rounded-3xl overflow-hidden transition-all duration-500 ${
      isActive
        ? "scale-100 opacity-100 border-4 border-white shadow-[0_0_50px_rgba(255,255,255,0.2)]"
        : "scale-90 opacity-40 grayscale"
    }`}
    animate={{
      x: isActive ? 0 : 0,
    }}
  >
    <img
      src={project.assets.cover}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
      <div className="mb-4">
        <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
          {project.tags[0]}
        </span>
      </div>
      <h3 className="text-4xl font-black text-white mb-2 uppercase">
        {project.title}
      </h3>
      <p className="text-gray-300 line-clamp-2 mb-4">{project.description}</p>
      {isActive && (
        <div className="flex gap-4">
          {project.links.map((link: any) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-[#FFE600] transition-colors"
            >
              {link.label === "View Project" ? "Start Game" : link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

export default function GameConsole() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedProject, setSelectedProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial scroll to center
  useEffect(() => {
    if (containerRef.current) {
      // Basic centering logic could go here if needed, usually managed by CSS/Layout
    }
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (activeTab === "projects") {
      if (e.key === "ArrowRight") {
        setSelectedProject((prev) => (prev + 1) % projects.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedProject(
          (prev) => (prev - 1 + projects.length) % projects.length,
        );
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#111] to-[#111]"></div>

      {/* Header */}
      <div className="fixed top-0 w-full p-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
            <img
              src={profile.avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold text-xl">{profile.name}</h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 text-xl font-bold">
          <span>12:45 PM</span>
          <Gamepad2 size={32} />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="fixed top-32 left-0 w-full flex justify-center gap-8 z-40">
        <MenuItem
          icon={Briefcase}
          label="Games"
          isActive={activeTab === "projects"}
          onClick={() => setActiveTab("projects")}
        />
        <MenuItem
          icon={User}
          label="Profile"
          isActive={activeTab === "about"}
          onClick={() => setActiveTab("about")}
        />
        <MenuItem
          icon={Code}
          label="Skills"
          isActive={activeTab === "skills"}
          onClick={() => setActiveTab("skills")}
        />
        <MenuItem
          icon={Mail}
          label="Contact"
          isActive={activeTab === "contact"}
          onClick={() => setActiveTab("contact")}
        />
      </div>

      {/* Content Area */}
      <div className="h-screen flex items-end pb-20 justify-center relative z-30">
        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="w-full overflow-hidden"
            >
              <div className="flex items-center justify-center gap-8 px-[50vw]">
                <div
                  className="flex gap-8 transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(${-selectedProject * 432}px)`,
                  }}
                >
                  {projects.map((project, idx) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(idx)}
                    >
                      <GameCard
                        project={project}
                        isActive={idx === selectedProject}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-8 text-gray-500 flex items-center justify-center gap-4">
                <ChevronLeft className="animate-pulse" />
                <span>Use Arrow Keys to Navigate</span>
                <ChevronRight className="animate-pulse" />
              </div>
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#222] p-12 rounded-3xl max-w-4xl w-full mx-4 border border-white/10"
            >
              <div className="flex gap-12 items-center">
                <img
                  src={profile.avatar}
                  className="w-64 h-64 object-cover rounded-2xl shadow-2xl"
                />
                <div>
                  <h2 className="text-5xl font-black mb-6">PLAYER 1 START</h2>
                  <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                    {profile.about}
                  </p>
                  <div className="flex gap-4">
                    <div className="bg-[#333] px-6 py-3 rounded-lg">
                      <div className="text-gray-500 text-xs uppercase mb-1">
                        Level
                      </div>
                      <div className="text-xl font-bold text-yellow-500">
                        24
                      </div>
                    </div>
                    <div className="bg-[#333] px-6 py-3 rounded-lg">
                      <div className="text-gray-500 text-xs uppercase mb-1">
                        Role
                      </div>
                      <div className="text-xl font-bold text-blue-400">Dev</div>
                    </div>
                    <div className="bg-[#333] px-6 py-3 rounded-lg">
                      <div className="text-gray-500 text-xs uppercase mb-1">
                        XP
                      </div>
                      <div className="text-xl font-bold text-green-500">
                        9999+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {skills.core.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-[#222] p-6 rounded-2xl border border-white/10 hover:bg-white hover:text-black transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl mb-4 group-hover:bg-black transition-colors"></div>
                  <h3 className="text-xl font-bold">{skill}</h3>
                  <div className="w-full bg-gray-700 h-1 mt-4 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[85%]"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-8"
            >
              <h2 className="text-6xl font-black mb-8">MULTIPLAYER</h2>
              <div className="flex gap-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="w-32 h-32 bg-[#222] rounded-3xl flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-black transition-all hover:-translate-y-2"
                  >
                    <link.icon size={40} />
                    <span className="font-bold uppercase">{link.name}</span>
                  </a>
                ))}
              </div>
              <a
                href="mailto:hello@example.com"
                className="bg-[#FFE600] text-black px-12 py-4 rounded-full font-black uppercase text-xl mt-8 hover:scale-105 transition-transform"
              >
                Send Invite
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background noise texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}
import { useRef } from "react";
