import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile, projects, skills, socialLinks } from "../../data";

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`py-20 px-6 md:px-20 max-w-6xl mx-auto ${className}`}>
    {children}
  </section>
);

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 p-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-sm z-50">
    <a
      href="#"
      className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900"
    >
      <img src={profile.logo} alt="Logo" className="h-8 w-auto" />
      <span>Ebuka.</span>
    </a>
    <div className="flex gap-6 text-sm font-medium text-slate-500">
      <a href="#about" className="hover:text-slate-900 transition-colors">
        About
      </a>
      <a href="#projects" className="hover:text-slate-900 transition-colors">
        Work
      </a>
      <a href="#contact" className="hover:text-slate-900 transition-colors">
        Contact
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <Section className="min-h-screen flex flex-col pt-32 md:pt-40">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-light text-slate-900 leading-tight mb-8">
          Mobile Developer & <br />
          <span className="font-semibold text-slate-800">
            IT Project Manager.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl font-light">
          {profile.tagline}
        </p>
        <div className="mt-12 flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center md:justify-end"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <img
            src={profile.avatar}
            alt={profile.name}
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>
      </motion.div>
    </div>
  </Section>
);

const About = () => (
  <Section className="bg-slate-50 rounded-3xl my-10">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2
          className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6"
          id="about"
        >
          About Me
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          {profile.about}
        </p>
        <a
          href={profile.resumeLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-slate-900 font-semibold border-b border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all"
        >
          View Resume <ArrowUpRight size={16} />
        </a>
      </div>

      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.core.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white rounded-md shadow-sm text-sm text-slate-600 border border-slate-100"
            >
              {skill}
            </span>
          ))}
          {skills.concepts.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white rounded-md shadow-sm text-sm text-slate-600 border border-slate-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

const ProjectCard = ({ project }: { project: any }) => (
  <motion.div whileHover={{ y: -5 }} className="group mb-12">
    <div className="grid md:grid-cols-5 gap-8 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      {/* Text Content */}
      <div className="md:col-span-3 order-2 md:order-1">
        <div className="flex items-center gap-3 mb-4">
          {project.assets.logo && (
            <img
              src={project.assets.logo}
              alt={`${project.title} logo`}
              className="w-8 h-8 object-contain rounded-md"
            />
          )}
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            {project.tags[0]}
          </span>
          <div className="h-px bg-slate-200 flex-grow"></div>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-4">
          {project.links.map((link: any) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1"
            >
              {link.label} <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>

      {/* Image placeholder */}
      <div className="md:col-span-2 order-1 md:order-2 bg-slate-100 rounded-xl overflow-hidden min-h-[200px] flex items-center justify-center relative">
        <img
          src={project.assets.cover}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <Section>
    <div className="flex justify-between items-end mb-16">
      <h2
        className="text-3xl md:text-4xl font-light text-slate-900"
        id="projects"
      >
        Selected Work
      </h2>
      <span className="hidden md:block text-slate-400 text-sm font-mono">
        {projects.length} PROJECTS
      </span>
    </div>

    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </Section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white py-20 px-6 md:px-20" id="contact">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-4xl font-light mb-6">Let's work together.</h2>
        <p className="text-slate-400 mb-8 max-w-md">
          I'm currently available for freelance projects and open to new
          opportunities.
        </p>
        <a
          href={`mailto:hello@example.com`}
          className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 transition-colors"
        >
          Get in Touch
        </a>
      </div>

      <div className="flex flex-col justify-end items-start md:items-end">
        <div className="flex gap-6 mb-8">
          <a
            href={profile.blogLink}
            className="text-slate-400 hover:text-white transition-colors"
          >
            Medium
          </a>
          <a
            href="https://linkedin.com/in/csonah"
            className="text-slate-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/cs_onah"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Twitter
          </a>
        </div>
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Ebuka. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function Design1() {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
