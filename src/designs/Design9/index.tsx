import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, projects, skills, socialLinks } from "../../data";
import {
  Wifi,
  Battery,
  Signal,
  User,
  Grid,
  Phone,
  Mail,
  ChevronLeft,
  Layout,
  Box,
} from "lucide-react";

const AppIcon = ({ icon: Icon, label, color, onClick, notification }: any) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="flex flex-col items-center gap-2"
  >
    <div
      className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-white shadow-lg relative`}
    >
      <Icon size={32} />
      {notification && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
          {notification}
        </div>
      )}
    </div>
    <span className="text-white text-xs font-medium">{label}</span>
  </motion.button>
);

const StatusBar = () => (
  <div className="h-6 flex justify-between items-center px-6 text-white text-xs font-medium pointer-events-none">
    <span>9:41</span>
    <div className="flex gap-2 items-center">
      <Signal size={14} />
      <Wifi size={14} />
      <Battery size={14} />
    </div>
  </div>
);

const PhoneScreen = ({ children, className = "" }: any) => (
  <div
    className={`bg-black h-full w-full overflow-hidden relative ${className}`}
  >
    {children}
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full"></div>
  </div>
);

// Apps
const AppStore = ({ onClose }: any) => (
  <PhoneScreen className="bg-white text-black">
    <div className="p-4 border-b flex items-center gap-2 sticky top-0 bg-white/80 backdrop-blur z-10">
      <button onClick={onClose} className="p-1">
        <ChevronLeft className="text-blue-500" size={28} />
      </button>
      <h2 className="font-bold text-lg">App Store</h2>
    </div>
    <div className="p-4 pb-20 overflow-y-auto h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-2xl">Today</h3>
        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
          <img src={profile.avatar} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
          <img
            src={projects[0].assets.cover}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end text-white">
            <span className="uppercase text-xs font-bold opacity-70 mb-2">
              FEATURED APP
            </span>
            <h4 className="text-3xl font-bold mb-2">{projects[0].title}</h4>
            <p className="text-sm opacity-90 mb-4">{projects[0].description}</p>
            <a
              href={projects[0].links[0].url}
              target="_blank"
              className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold text-center uppercase text-sm"
            >
              Validating...
            </a>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-4">
            <h3 className="font-bold text-xl">New Updates</h3>
            <span className="text-blue-500 text-sm">See All</span>
          </div>
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              className="flex gap-4 items-center py-4 border-b"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={project.assets.logo || project.assets.cover}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">{project.title}</h4>
                <p className="text-xs text-gray-500 line-clamp-1">
                  {project.description}
                </p>
              </div>
              <a
                href={project.links[0].url}
                target="_blank"
                className="bg-gray-100 text-blue-600 font-bold text-xs px-4 py-1.5 rounded-full uppercase"
              >
                OPEN
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PhoneScreen>
);

const SettingsApp = ({ onClose }: any) => (
  <PhoneScreen className="bg-[#f2f2f7] text-black">
    <div className="p-4 flex items-center gap-2 sticky top-0 bg-[#f2f2f7]/80 backdrop-blur z-10">
      <button onClick={onClose}>
        <ChevronLeft className="text-blue-500" size={28} />
      </button>
      <h2 className="font-bold text-lg">Settings</h2>
    </div>
    <div className="p-4">
      <div className="bg-white rounded-xl mb-8 p-4 flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img src={profile.avatar} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-bold text-xl">{profile.name}</h3>
          <p className="text-gray-500 text-sm">
            Apple ID, iCloud, Media & Purchases
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl overflow-hidden divide-y">
        <div className="p-4 flex justify-between items-center">
          <span>About</span>
          <span className="text-gray-400 flex items-center gap-1">
            V2.0 <ChevronLeft className="rotate-180 w-4" />
          </span>
        </div>
        <div className="p-4 flex justify-between items-center">
          <span>Software Update</span>
          <span className="text-gray-400 flex items-center gap-1">
            Up to date <ChevronLeft className="rotate-180 w-4" />
          </span>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-xl overflow-hidden divide-y">
        <h4 className="px-4 py-2 text-xs text-gray-400 uppercase font-bold">
          Skills Configuration
        </h4>
        {skills.core.map((skill) => (
          <div key={skill} className="p-4 flex justify-between items-center">
            <span>{skill}</span>
            <div className="w-10 h-6 bg-green-500 rounded-full flex justify-end p-1">
              <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PhoneScreen>
);

const MessagesApp = ({ onClose }: any) => (
  <PhoneScreen className="bg-white text-black">
    <div className="pt-2 px-4 flex justify-between items-center mb-2">
      <button
        onClick={onClose}
        className="text-blue-500 flex items-center text-sm"
      >
        <ChevronLeft size={24} />
      </button>
      <h2 className="font-bold">Messages</h2>
      <Phone size={20} className="text-blue-500" />
    </div>
    <h1 className="text-3xl font-bold px-4 mb-4">Messages</h1>
    <div className="px-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          className="flex gap-4 items-center py-3 border-b border-gray-100"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
            <link.icon size={20} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h4 className="font-bold text-sm mb-0.5">{link.name}</h4>
              <span className="text-gray-400 text-xs">Now</span>
            </div>
            <p className="text-gray-500 text-sm line-clamp-1">
              Hey! Let's connect on {link.name}. check out my profile...
            </p>
          </div>
          <ChevronLeft className="rotate-180 text-gray-300 w-4" />
        </a>
      ))}
      <a
        href="mailto:hello@example.com"
        className="flex gap-4 items-center py-3 border-b border-gray-100"
      >
        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
          <Mail size={20} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <h4 className="font-bold text-sm mb-0.5">Email Me</h4>
            <span className="text-gray-400 text-xs">Yesterday</span>
          </div>
          <p className="text-gray-500 text-sm line-clamp-1">
            Project Inquiry: Looking for a developer...
          </p>
        </div>
      </a>
    </div>
  </PhoneScreen>
);

const ContactsApp = ({ onClose }: any) => (
  <PhoneScreen className="bg-white text-black">
    <div className="p-4 flex items-center relative mb-4">
      <button
        onClick={onClose}
        className="text-blue-500 flex items-center gap-1 text-sm absolute left-4"
      >
        <ChevronLeft size={24} /> Lists
      </button>
    </div>
    <div className="px-4 text-center mb-6">
      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
        <img src={profile.avatar} className="w-full h-full object-cover" />
      </div>
      <h2 className="text-2xl font-bold">{profile.name}</h2>
      <p className="text-gray-500">{profile.role}</p>

      <div className="flex justify-center gap-4 mt-6">
        <a
          href="mailto:hello@example.com"
          className="flex flex-col items-center gap-1 bg-white shadow rounded-xl w-20 py-2"
        >
          <Mail className="text-blue-500" />
          <span className="text-xs text-blue-500">mail</span>
        </a>
        <a
          href={profile.resumeLink}
          className="flex flex-col items-center gap-1 bg-white shadow rounded-xl w-20 py-2"
        >
          <User className="text-blue-500" />
          <span className="text-xs text-blue-500">resume</span>
        </a>
      </div>
    </div>

    <div className="bg-gray-100 p-4">
      <h3 className="font-bold mb-2 ml-2">bio</h3>
      <div className="bg-white rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
        {profile.about}
      </div>
    </div>
  </PhoneScreen>
);

export default function MobileOS() {
  const [openApp, setOpenApp] = useState<string | null>(null);

  const renderOpenApp = () => {
    switch (openApp) {
      case "store":
        return <AppStore onClose={() => setOpenApp(null)} />;
      case "settings":
        return <SettingsApp onClose={() => setOpenApp(null)} />;
      case "messages":
        return <MessagesApp onClose={() => setOpenApp(null)} />;
      case "contacts":
        return <ContactsApp onClose={() => setOpenApp(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#1c1c1e] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[400px] h-[850px] bg-black rounded-[60px] border-8 border-[#333] shadow-2xl relative overflow-hidden">
        {/* Dynamic Island Area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-2xl z-50"></div>

        <StatusBar />

        <AnimatePresence>
          {openApp ? (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%", scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-0 z-40 pt-8 rounded-[50px] overflow-hidden"
              style={{ backgroundColor: "black" }}
            >
              {renderOpenApp()}
            </motion.div>
          ) : (
            <div className="pt-12 px-6 h-full flex flex-col">
              {/* Grid */}
              <div className="grid grid-cols-4 gap-y-8 gap-x-4">
                <AppIcon
                  icon={Grid}
                  label="App Store"
                  color="bg-blue-500"
                  onClick={() => setOpenApp("store")}
                  notification={projects.length}
                />
                <AppIcon
                  icon={Layout}
                  label="Settings"
                  color="bg-gray-500"
                  onClick={() => setOpenApp("settings")}
                />
                <AppIcon
                  icon={Phone}
                  label="Contacts"
                  color="bg-green-500"
                  onClick={() => setOpenApp("contacts")}
                />
                <AppIcon
                  icon={Box}
                  label="Files"
                  color="bg-blue-400"
                  onClick={() => {}}
                />

                {/* Placeholder Icons */}
                <AppIcon
                  icon={User}
                  label="Photos"
                  color="bg-white text-black"
                  onClick={() => {}}
                />
              </div>

              {/* Dots */}
              <div className="mt-auto mb-8 flex justify-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              </div>

              {/* Dock */}
              <div className="mb-4 bg-white/20 backdrop-blur-xl rounded-[35px] p-4 flex justify-around items-center">
                <AppIcon
                  icon={Phone}
                  label=""
                  color="bg-green-500"
                  onClick={() => setOpenApp("contacts")}
                />
                <AppIcon
                  icon={Mail}
                  label=""
                  color="bg-blue-500"
                  onClick={() => setOpenApp("messages")}
                  notification={socialLinks.length}
                />
                <div
                  onClick={() =>
                    window.open("https://github.com/csonah", "_blank")
                  }
                  className="cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center">
                    <div className="w-10 h-10 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full"></div>
                  </div>
                </div>
                <AppIcon
                  icon={Layout}
                  label=""
                  color="bg-indigo-500"
                  onClick={() => setOpenApp("settings")}
                />
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
