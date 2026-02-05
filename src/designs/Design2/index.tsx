import { profile, projects, skills, socialLinks } from "../../data";
import { motion } from "framer-motion";

const SwissLayout = () => {
  return (
    <div className="bg-[#F2F2F2] min-h-screen text-[#1A1A1A] font-sans selection:bg-[#E63946] selection:text-white overflow-x-hidden">
      {/* Navigation - Fixed Side */}
      <nav className="fixed left-0 top-0 bottom-0 w-16 md:w-24 border-r-2 border-[#1A1A1A] bg-white z-50 flex flex-col justify-between items-center py-8 hidden md:flex">
        <div className="text-2xl font-black rotate-[-90deg] whitespace-nowrap mt-12 tracking-tighter">
          EBUKA.FOLIO
        </div>
        <div className="flex flex-col gap-12">
          <a
            href="#about"
            className="font-bold -rotate-90 hover:text-[#E63946] transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#work"
            className="font-bold -rotate-90 hover:text-[#E63946] transition-colors"
          >
            WORK
          </a>
          <a
            href="#contact"
            className="font-bold -rotate-90 hover:text-[#E63946] transition-colors"
          >
            CONTACT
          </a>
        </div>
        <div className="mb-4">
          <div className="w-8 h-8 bg-[#E63946] rounded-full"></div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed top-0 w-full bg-white border-b-2 border-[#1A1A1A] p-4 z-50 flex justify-between items-center">
        <span className="font-black text-xl tracking-tighter">EBUKA.FOLIO</span>
        <div className="w-6 h-6 bg-[#E63946] rounded-full"></div>
      </nav>

      <div className="md:pl-24">
        {/* Hero Section - Asymmetric Grid */}
        <header className="min-h-screen grid grid-cols-1 md:grid-cols-12 border-b-2 border-[#1A1A1A]">
          <div className="md:col-span-8 p-8 md:p-24 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-[#1A1A1A] bg-white relative overflow-hidden">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter z-10"
            >
              CREATIVE
              <br />
              <span className="text-transparent stroke-text-black stroked">
                DEVELOPER
              </span>
            </motion.h1>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 max-w-xl"
            >
              <div className="h-2 w-24 bg-[#E63946] mb-6"></div>
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                {profile.tagline}
              </p>
            </motion.div>

            {/* Graphical Element */}
            <div className="absolute right-[-10%] bottom-[-10%] w-[50%] h-[50%] bg-[#E63946] rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="md:col-span-4 grid grid-rows-2">
            <div className="bg-[#E63946] p-8 flex flex-col justify-between text-white border-b-2 border-[#1A1A1A]">
              <div className="text-6xl font-black opacity-20">01</div>
              <div>
                <p className="font-bold uppercase text-sm mb-2 opacity-80">
                  Specialization
                </p>
                <h2 className="text-3xl font-bold leading-none">
                  Mobile UI/UX
                  <br />
                  Engineering
                </h2>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 flex flex-col justify-between text-white relative group overflow-hidden">
              <img
                src={profile.avatar}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-10">
                <div className="text-6xl font-black opacity-20 text-white">
                  02
                </div>
              </div>
              <div className="relative z-10">
                <p className="font-bold uppercase text-sm mb-2 opacity-80">
                  Based In
                </p>
                <h2 className="text-3xl font-bold leading-none">
                  Earth,
                  <br />
                  Internet
                </h2>
              </div>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2">
          {/* About / Skills */}
          <section className="border-b-2 md:border-b-0 md:border-r-2 border-[#1A1A1A] p-8 md:p-16 bg-[#F2F2F2]">
            <h3 className="text-xl font-black uppercase mb-12 flex items-center gap-4">
              <span className="w-4 h-4 bg-[#1A1A1A]"></span>
              Competencies
            </h3>

            <div className="space-y-12">
              <div>
                <h4 className="text-4xl font-bold mb-6">Core Stack</h4>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xl font-medium text-stone-600">
                  {skills.core.map((skill) => (
                    <span
                      key={skill}
                      className="border-b border-stone-300 pb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-4xl font-bold mb-6">Tools</h4>
                <p className="text-lg leading-relaxed text-stone-600">
                  {skills.tools.join(", ")}.
                </p>
              </div>
            </div>
          </section>

          {/* Projects List */}
          <section className="bg-white" id="work">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="border-b-2 border-[#1A1A1A] group"
              >
                <div className="p-8 md:p-12 hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300 cursor-pointer relative overflow-hidden">
                  <div className="flex justify-between items-start relative z-10">
                    <div>
                      <span className="text-sm font-bold uppercase tracking-widest mb-2 block text-[#E63946]">
                        Project 0{idx + 1}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-black uppercase mb-4">
                        {project.title}
                      </h3>
                      <p className="max-w-md text-sm md:text-base opacity-80 leading-relaxed group-hover:text-stone-300">
                        {project.description}
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <img
                        src={project.assets.logo}
                        alt=""
                        className="w-12 h-12 object-contain bg-white rounded p-1"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4 relative z-10">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold uppercase border-b border-current pb-1 hover:text-[#E63946] transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-[#E63946] text-white p-8 md:p-24" id="contact">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-6xl md:text-8xl font-black leading-[0.8] mb-8">
                LET'S
                <br />
                TALK
              </h2>
              <a
                href="mailto:hello@example.com"
                className="text-2xl font-bold border-b-4 border-white pb-2 hover:opacity-80 transition-opacity"
              >
                hello@example.com
              </a>
            </div>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-xl font-bold hover:underline"
                >
                  {link.name}
                </a>
              ))}
              <p className="mt-8 opacity-60 text-sm">
                © {new Date().getFullYear()} Swiss Design System.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* CSS for stroked text effect if needed, though often Tailwind handle standard styles. Adding custom class note: .stroked { -webkit-text-stroke: 1px #1A1A1A; } */}
      <style>{`
            .stroked {
                -webkit-text-stroke: 2px #1A1A1A; 
                color: transparent;
            }
        `}</style>
    </div>
  );
};

export default SwissLayout;
