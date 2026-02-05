import { profile, projects, skills, socialLinks } from "../../data";

const BrutalBtn = ({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) => {
  const baseClass = `inline-flex items-center justify-center border-4 border-black bg-white px-6 py-3 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={baseClass}>
        {children}
      </a>
    );
  }

  return <button className={baseClass}>{children}</button>;
};

const Nav = () => (
  <nav className="border-b-4 border-black bg-yellow-400 p-6 flex justify-between items-center sticky top-0 z-50">
    <a
      href="#"
      className="flex items-center gap-2 text-3xl font-black uppercase tracking-tighter hover:underline decoration-4 underline-offset-4"
    >
      <img
        src={profile.logo}
        alt="Logo"
        className="h-10 w-10 border-2 border-black"
      />
      Ebuka
    </a>
    <div className="hidden md:flex gap-8 font-bold uppercase tracking-widest">
      <a
        href="#about"
        className="hover:bg-black hover:text-white px-2 py-1 transition-colors"
      >
        About
      </a>
      <a
        href="#work"
        className="hover:bg-black hover:text-white px-2 py-1 transition-colors"
      >
        Work
      </a>
      <a
        href="#contact"
        className="hover:bg-black hover:text-white px-2 py-1 transition-colors"
      >
        Contact
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <header className="bg-purple-500 border-black border-b-4 min-h-[80vh] flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
    {/* Background Avatar Element */}
    <img
      src={profile.avatar}
      alt=""
      className="absolute -left-20 top-20 w-64 h-64 grayscale opacity-20 rotate-[-12deg]"
    />
    <img
      src={profile.avatar}
      alt=""
      className="absolute -right-20 bottom-20 w-64 h-64 grayscale opacity-20 rotate-[12deg]"
    />

    <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-4xl rotate-1 hover:rotate-0 transition-transform duration-300 z-10">
      <div className="flex justify-center mb-6">
        <img
          src={profile.avatar}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover"
        />
      </div>
      <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] mb-6">
        Mobile
        <br />
        Developer
      </h1>
      <div className="bg-black h-2 w-full mb-6"></div>
      <p className="text-xl md:text-2xl font-bold font-mono mb-8">
        {profile.tagline}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((link) => (
          <BrutalBtn key={link.name} href={link.url} className="text-sm">
            {link.name}
          </BrutalBtn>
        ))}
      </div>
    </div>
  </header>
);

const Marquee = ({ text }: { text: string }) => (
  <div className="border-b-4 border-black bg-black text-white overflow-hidden py-4 whitespace-nowrap">
    <div className="animate-marquee inline-block">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-8 font-black text-4xl uppercase font-mono">
          {text}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <div className="border-b-4 border-black bg-green-400 grid md:grid-cols-2">
    <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-black">
      <h2 className="text-5xl font-black uppercase mb-8">Core Tech</h2>
      <ul className="space-y-4 font-mono font-bold text-xl">
        {skills.core.map((skill) => (
          <li key={skill} className="flex items-center gap-4">
            <span className="w-6 h-6 bg-black block"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-12 flex flex-col justify-between">
      <div>
        <h2 className="text-5xl font-black uppercase mb-8">Concepts</h2>
        <div className="flex flex-wrap gap-3">
          {skills.concepts.map((skill) => (
            <span
              key={skill}
              className="border-2 border-black bg-white px-3 py-1 font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-12 bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="font-black uppercase text-xl mb-4">Tools of Choice</h3>
        <p className="font-mono text-sm leading-relaxed">
          {skills.tools.join(" / ")}
        </p>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div
    className="bg-slate-100 border-b-4 border-black py-20 px-6 md:px-20"
    id="work"
  >
    <h2 className="text-6xl md:text-8xl font-black uppercase mb-20 text-center stroke-text-black">
      Hard Work
    </h2>

    <div className="grid gap-16 max-w-5xl mx-auto">
      {projects.map((project, idx) => (
        <div
          key={project.id}
          className={`bg-white border-4 border-black p-0 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="md:w-1/2 min-h-[300px] border-b-4 md:border-b-0 md:border-r-4 border-black bg-yellow-200 flex items-center justify-center group overflow-hidden relative">
            <img
              src={project.assets.cover}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
            {/* Logo Overlay */}
            <div className="absolute bottom-4 right-4 bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <img
                src={project.assets.logo}
                alt=""
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-black text-white text-xs font-bold px-2 py-1 mr-2 uppercase mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-4xl font-black uppercase mb-4 leading-none">
              {project.title}
            </h3>
            <p className="font-serif text-lg leading-relaxed mb-8 border-l-4 border-yellow-400 pl-4 font-bold">
              {project.description}
            </p>
            <div className="flex gap-4">
              {project.links.map((link: any) => (
                <BrutalBtn
                  key={link.label}
                  href={link.url}
                  className="text-sm px-4 py-2"
                >
                  {link.label}
                </BrutalBtn>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-black text-white py-20 px-6 text-center" id="contact">
    <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-none hover:text-yellow-400 transition-colors cursor-pointer">
      Get In Touch
    </h2>
    <div className="flex flex-col items-center gap-8">
      <BrutalBtn
        href={`mailto:hello@example.com`}
        className="bg-white text-black hover:bg-yellow-400"
      >
        Send an Email
      </BrutalBtn>
      <div className="flex gap-8 text-2xl font-bold uppercase mt-12">
        <a
          href={profile.blogLink}
          className="hover:underline hover:text-yellow-400"
        >
          Blog
        </a>
        <a
          href="https://linkedin.com/in/csonah"
          className="hover:underline hover:text-yellow-400"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/cs_onah"
          className="hover:underline hover:text-yellow-400"
        >
          Twitter
        </a>
      </div>
      <p className="mt-20 font-mono text-sm text-gray-500">
        NO COOKIES. NO TRACKING. JUST CODE.
      </p>
    </div>
  </footer>
);

export default function Design2() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Nav />
      <Hero />
      <Marquee text=" • AVAILABLE FOR HIRE • BUILD FAST • SHIP FASTER • BREAK THINGS " />
      <Skills />
      <Marquee text=" • FLUTTER • REACT • TYPESCRIPT • SWIFT • KOTLIN • " />
      <Projects />
      <Footer />
    </div>
  );
}
