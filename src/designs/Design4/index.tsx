import { ArrowUpRight, ExternalLink } from "lucide-react";
import { profile, projects, skills, socialLinks } from "../../data";
import { motion } from "framer-motion";

const BentoCard = ({
  children,
  className = "",
  span = "col-span-1",
}: {
  children: React.ReactNode;
  className?: string;
  span?: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col ${span} ${className}`}
  >
    {children}
  </motion.div>
);

export default function Design4() {
  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        {/* Header / Profile */}
        <BentoCard
          span="md:col-span-2 md:row-span-2"
          className="justify-between bg-zinc-900 text-white border-none!"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <img
                src={profile.logo}
                alt="Logo"
                className="w-8 h-8 rounded-lg bg-zinc-800"
              />
              <h1 className="text-4xl font-bold tracking-tight">Ebuka.</h1>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-700">
              <img
                src={profile.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-4 text-zinc-300">
              Mobile Developer &<br />
              PM
            </h2>
            <p className="text-zinc-400 text-sm max-w-sm">{profile.tagline}</p>
          </div>
        </BentoCard>

        {/* Socials */}
        <BentoCard
          span="md:col-span-1"
          className="bg-blue-500 text-white justify-center items-center gap-4 border-none!"
        >
          <h3 className="font-bold text-lg">Socials</h3>
          <div className="flex gap-2">
            {socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </BentoCard>

        {/* Resume */}
        <BentoCard
          span="md:col-span-1"
          className="justify-center items-center hover:bg-zinc-50 cursor-pointer group"
        >
          <a
            href={profile.resumeLink}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
              <ArrowUpRight size={20} />
            </div>
            <span className="font-bold">Resume</span>
          </a>
        </BentoCard>

        {/* Skills Marquee (Simulated) */}
        <BentoCard
          span="md:col-span-2"
          className="justify-center overflow-hidden relative"
        >
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold">
            Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {[...skills.core, ...skills.concepts].slice(0, 8).map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-600"
              >
                {skill}
              </span>
            ))}
            <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-400">
              + more
            </span>
          </div>
        </BentoCard>

        {/* Project 1 */}
        <BentoCard
          span="md:col-span-2 md:row-span-2"
          className="bg-indigo-50 p-0! overflow-hidden relative group border-none!"
        >
          <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-indigo-900/80 to-transparent z-10">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={projects[0].assets.logo}
                alt=""
                className="w-6 h-6 bg-white rounded-full p-0.5"
              />
              <h3 className="text-white font-bold text-2xl">
                {projects[0].title}
              </h3>
            </div>
            <p className="text-indigo-100 text-sm">{projects[0].description}</p>
          </div>
          <img
            src={projects[0].assets.cover}
            alt={projects[0].title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </BentoCard>

        {/* Project 2 */}
        <BentoCard
          span="md:col-span-1 md:row-span-2"
          className="justify-between bg-orange-50 p-0! overflow-hidden border-none! relative"
        >
          <div className="absolute top-0 left-0 right-0 p-4 z-10 flex justify-between items-center">
            <span className="text-xs font-bold uppercase text-orange-900 bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
              {projects[1].title}
            </span>
            <a
              href={projects[1].links[0]?.url}
              className="text-white bg-black/20 p-1 rounded-full hover:bg-black/40"
            >
              <ExternalLink size={16} />
            </a>
          </div>
          <img
            src={projects[1].assets.cover}
            alt={projects[1].title}
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-x-0 bottom-0 p-4 bg-black/60 backdrop-blur-sm text-white">
            <p className="text-xs font-medium leading-tight line-clamp-2">
              {projects[1].description}
            </p>
          </div>
        </BentoCard>

        {/* More Projects List */}
        <BentoCard
          span="md:col-span-1 md:row-span-2"
          className="overflow-y-auto"
        >
          <h3 className="font-bold mb-4 sticky top-0 bg-white pb-2">
            More Work
          </h3>
          <div className="space-y-4">
            {projects.slice(2).map((p) => (
              <div
                key={p.id}
                className="pb-4 border-b border-gray-100 last:border-0 flex gap-3"
              >
                <img
                  src={p.assets.logo}
                  alt=""
                  className="w-10 h-10 rounded-lg bg-gray-100 object-contain border border-gray-200"
                />
                <div className="flex-1 min-w-0">
                  <a
                    href={p.links[0]?.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block group"
                  >
                    <h4 className="text-sm font-bold group-hover:text-blue-600 truncate">
                      {p.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {p.description}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Footer area */}
        <BentoCard
          span="md:col-span-4"
          className="bg-zinc-100 items-center justify-center py-12"
        >
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            Have an idea?
          </h2>
          <a
            href="mailto:hello@example.com"
            className="px-6 py-3 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-colors"
          >
            Let's Build It
          </a>
        </BentoCard>
      </div>
    </div>
  );
}
