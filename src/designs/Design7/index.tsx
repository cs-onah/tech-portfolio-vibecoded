import { motion } from "framer-motion";
import { profile, projects, skills, socialLinks } from "../../data";
import { Paperclip, Star, ArrowDownRight, Scissors } from "lucide-react";

const Tape = ({ className = "" }: { className?: string }) => (
  <div
    className={`w-32 h-8 bg-white/70 backdrop-blur-sm shadow-sm absolute transform rotate-3 z-20 ${className}`}
  ></div>
);

const Photo = ({ src, alt, caption, className = "", rotate = 0 }: any) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
    drag
    dragElastic={0.1}
    className={`bg-white p-4 pb-12 shadow-xl absolute transform ${className} cursor-grab active:cursor-grabbing`}
    style={{ rotate }}
  >
    <Tape className="-top-4 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
    <div className="w-full aspect-square bg-gray-100 overflow-hidden mb-2 pointer-events-none">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
    <p className="font-handwriting text-xl text-center text-gray-800 rotate-1">
      {caption}
    </p>
  </motion.div>
);

const Sticker = ({ children, className = "" }: any) => (
  <motion.div
    drag
    className={`absolute p-4 rounded-full bg-yellow-300 transform font-bold font-handwriting shadow-lg cursor-grab ${className}`}
  >
    {children}
  </motion.div>
);

export default function Scrapbook() {
  return (
    <div className="min-h-screen bg-[#f0e6d2] text-gray-900 font-sans overflow-x-hidden relative">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-50 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>

      {/* Hero Section */}
      <section className="min-h-screen relative p-8 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[20vw] font-black text-[#e6dcc6] tracking-tighter">
            CREATE
          </span>
        </div>

        <h1 className="font-handwriting text-8xl md:text-9xl relative z-10 text-center -rotate-6 mix-blend-multiply">
          <span className="block text-red-600">Ebuka's</span>
          <span className="block ml-24 bg-black text-white px-8 -rotate-3">
            Portfolio
          </span>
        </h1>

        <Photo
          src={profile.avatar}
          alt="Me"
          caption="That's me!"
          className="top-20 left-10 md:left-32 w-64 md:w-80"
          rotate={-6}
        />

        <div className="absolute top-1/2 right-10 md:right-32 w-80 bg-white p-6 shadow-2xl rotate-3 border-2 border-dashed border-gray-300">
          <Scissors
            className="absolute -top-6 -left-6 text-gray-800 rotate-45"
            size={40}
          />
          <h2 className="font-bold uppercase tracking-widest mb-4 border-b-2 border-black pb-2">
            About Me
          </h2>
          <p className="font-handwriting text-2xl leading-relaxed text-gray-700">
            {profile.about}
          </p>
          <div className="mt-4 flex gap-2">
            <Star className="text-yellow-500 fill-yellow-500" />
            <Star className="text-yellow-500 fill-yellow-500" />
            <Star className="text-yellow-500 fill-yellow-500" />
            <Star className="text-yellow-500 fill-yellow-500" />
            <Star className="text-yellow-500 fill-yellow-500" />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDownRight size={48} className="text-gray-400" />
        </div>
      </section>

      {/* Skills Collage */}
      <section className="min-h-screen relative p-20">
        <h2 className="text-6xl font-black mb-20 text-center uppercase tracking-tighter transform -rotate-2">
          <span className="bg-yellow-300 px-4 shadow-[5px_5px_0px_black]">
            My Skills
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto relative">
          {skills.core.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
              className="bg-white px-6 py-3 shadow-md border border-gray-200 transform"
              style={{ rotate: Math.random() * 20 - 10 }}
            >
              <Tape className="-top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-red-400/50" />
              <span className="font-handwriting text-2xl font-bold">
                {skill}
              </span>
            </motion.div>
          ))}

          <Sticker className="top-0 right-20 rotate-12 bg-blue-300 text-white">
            Full Stack
          </Sticker>
          <Sticker className="bottom-0 left-20 -rotate-12 bg-pink-400 text-white text-3xl">
            React
          </Sticker>
        </div>

        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.tools.slice(0, 8).map((tool) => (
            <div
              key={tool}
              className="border-b-2 border-gray-400 border-dashed pb-2 text-center font-mono text-gray-500"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* Projects - Polaroids */}
      <section className="py-32 px-4 bg-white/50 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-handwriting text-7xl text-center mb-32 underline decoration-wavy decoration-red-400">
            Selected Work
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-12 px-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="relative bg-white pt-4 pb-16 px-4 shadow-[0_10px_40px_rgba(0,0,0,0.1)] group"
                initial={{ rotate: idx % 2 === 0 ? -2 : 2 }}
                whileHover={{ rotate: 0, scale: 1.02, zIndex: 20 }}
              >
                <Tape className="-top-4 left-1/2 -translate-x-1/2 bg-blue-400/30 w-40" />
                <div className="aspect-video bg-gray-200 overflow-hidden mb-6 relative hover:cursor-pointer">
                  <img
                    src={project.assets.cover}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-black px-4 py-2 font-bold text-sm hover:bg-yellow-300"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <h3 className="font-black text-3xl mb-2 uppercase">
                  {project.title}
                </h3>
                <p className="font-handwriting text-xl text-gray-600 leading-tight mb-4">
                  {project.description}
                </p>

                <div className="absolute bottom-4 right-4 text-gray-400 font-mono text-xs">
                  {new Date().toLocaleDateString()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Note Card */}
      <footer className="py-32 flex justify-center relative overflow-hidden">
        <div className="bg-[#fff9c4] p-8 md:p-16 shadow-2xl max-w-2xl w-full mx-4 rotate-1 relative">
          <Paperclip className="absolute -top-6 right-20 text-gray-400 w-16 h-16" />
          <h2 className="font-handwriting text-6xl mb-8 text-center">
            Let's Keep in Touch!
          </h2>
          <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8 text-center">
            I'm always looking for new projects and opportunities. Drop me a
            line or follow me on social media.
          </p>
          <div className="flex justify-center gap-8 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-black font-bold border-b-2 border-black hover:text-red-600 hover:border-red-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="text-center">
            <a
              href="mailto:hello@example.com"
              className="font-black text-3xl bg-black text-white px-8 py-4 inline-block transform -rotate-2 hover:rotate-0 transition-transform"
            >
              hello@example.com
            </a>
          </div>
        </div>
      </footer>

      {/* Handwriting Font Import */}
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Reenie+Beanie&display=swap');
                
                .font-handwriting {
                    font-family: 'Reenie Beanie', cursive;
                    font-weight: 500;
                }
            `}</style>
    </div>
  );
}
