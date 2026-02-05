import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { profile, projects, skills, socialLinks } from "../../data";

const GlassCard = ({
  children,
  className = "",
  hoverEffect = true,
}: {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}) => (
  <div
    className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl ${hoverEffect ? "hover:bg-white/15 transition-colors duration-300" : ""} ${className}`}
  >
    {children}
  </div>
);

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <GlassCard className="max-w-4xl mx-auto !p-4 flex justify-between items-center bg-black/20 text-white">
      <div className="flex items-center gap-3">
        <img
          src={profile.logo}
          alt="Logo"
          className="w-8 h-8 rounded-full border border-white/30"
        />
        <span className="font-bold text-lg tracking-wider">Ebuka.</span>
      </div>
      <div className="flex gap-6 text-sm font-medium text-white/80">
        <a href="#about" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#work" className="hover:text-white transition-colors">
          Work
        </a>
        <a href="#contact" className="hover:text-white transition-colors">
          Contact
        </a>
      </div>
    </GlassCard>
  </nav>
);

const Background = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-900">
    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[120px] animate-pulse"></div>
    <div
      className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/30 blur-[120px] animate-pulse"
      style={{ animationDelay: "2s" }}
    ></div>
    <div
      className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[100px] animate-bounce"
      style={{ animationDuration: "10s" }}
    ></div>
  </div>
);

const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center text-white pt-20">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl w-full"
    >
      <GlassCard className="bg-white/5 border-white/10 !p-12 mb-8 relative overflow-hidden">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full"></div>
            <img
              src={profile.avatar}
              alt="Profile"
              className="relative w-32 h-32 rounded-full border-2 border-white/30 object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60 mb-6">
          Mobile Developer
        </h1>
        <p className="text-xl md:text-2xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed mb-8">
          {profile.tagline}
        </p>
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  </section>
);

const Stats = () => (
  <div className="max-w-4xl mx-auto px-6 mb-20 grid grid-cols-2 md:grid-cols-4 gap-4">
    <GlassCard className="text-center">
      <h3 className="text-3xl font-bold text-white mb-1">5+</h3>
      <span className="text-xs text-blue-200 uppercase tracking-widest">
        Years Exp
      </span>
    </GlassCard>
    <GlassCard className="text-center">
      <h3 className="text-3xl font-bold text-white mb-1">{projects.length}</h3>
      <span className="text-xs text-blue-200 uppercase tracking-widest">
        Projects
      </span>
    </GlassCard>
    <GlassCard className="text-center">
      <h3 className="text-3xl font-bold text-white mb-1">100%</h3>
      <span className="text-xs text-blue-200 uppercase tracking-widest">
        Committed
      </span>
    </GlassCard>
    <GlassCard className="text-center">
      <h3 className="text-3xl font-bold text-white mb-1">iOS/Droid</h3>
      <span className="text-xs text-blue-200 uppercase tracking-widest">
        Native
      </span>
    </GlassCard>
  </div>
);

const Skills = () => (
  <section className="max-w-5xl mx-auto px-6 mb-32" id="about">
    <h2 className="text-3xl font-bold text-white mb-10 text-center">
      Tech Stack
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <GlassCard>
        <h3 className="text-xl font-bold text-blue-200 mb-6">Core Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.core.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-500/20 text-blue-100 rounded-full text-sm border border-blue-500/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </GlassCard>
      <GlassCard>
        <h3 className="text-xl font-bold text-purple-200 mb-6">
          Concepts & Architecture
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.concepts.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-purple-500/20 text-purple-100 rounded-full text-sm border border-purple-500/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </GlassCard>
    </div>
  </section>
);

const Projects = () => (
  <section className="max-w-6xl mx-auto px-6 mb-32" id="work">
    <h2 className="text-3xl font-bold text-white mb-12 text-center">
      Selected Projects
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <GlassCard
          key={project.id}
          className="flex flex-col h-full group p-0! overflow-hidden border-0!"
        >
          <div className="h-48 relative overflow-hidden">
            <img
              src={project.assets.cover}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <img
                  src={project.assets.logo}
                  alt="logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-blue-100/70 mb-6 line-clamp-3">
              {project.description}
            </p>
            <div className="mt-auto flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider text-blue-200 bg-blue-900/40 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <footer className="text-center py-20 px-6" id="contact">
    <GlassCard className="max-w-2xl mx-auto inline-block">
      <h2 className="text-3xl font-bold text-white mb-4">
        Ready to collaborate?
      </h2>
      <p className="text-blue-200 mb-8 max-w-lg mx-auto">
        I am always open to discussing new projects, creative ideas or
        opportunities to be part of your visions.
      </p>
      <a
        href="mailto:hello@example.com"
        className="inline-block px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
      >
        Say Hello
      </a>
    </GlassCard>
    <p className="text-white/30 text-xs mt-12">
      © {new Date().getFullYear()} Ebuka. Glassmorphism Design.
    </p>
  </footer>
);

export default function Design3() {
  return (
    <div className="min-h-screen font-sans selection:bg-purple-500 selection:text-white">
      <Background />
      <Nav />
      <Hero />
      <Stats />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
