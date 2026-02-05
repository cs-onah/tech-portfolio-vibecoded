import React, { useState, useEffect, useRef } from "react";
import { profile, projects, skills, socialLinks } from "../../data";

type CommandHistory = {
  command: string;
  output: React.ReactNode;
};

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "init",
      output:
        'Welcome to EbukaFolio v2.0. Type "help" to see available commands.',
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-green-400">
            <p>Available commands:</p>
            <p className="pl-4">
              <span className="text-yellow-400 font-bold">about</span> - Display
              profile info
            </p>
            <p className="pl-4">
              <span className="text-yellow-400 font-bold">skills</span> - List
              technical skills
            </p>
            <p className="pl-4">
              <span className="text-yellow-400 font-bold">projects</span> - Show
              selected works
            </p>
            <p className="pl-4">
              <span className="text-yellow-400 font-bold">social</span> -
              Connect with me
            </p>
            <p className="pl-4">
              <span className="text-yellow-400 font-bold">clear</span> - Clear
              terminal
            </p>
            <p className="pl-4">
              <span className="text-yellow-400 font-bold">whoami</span> -
              Current user
            </p>
          </div>
        );
        break;
      case "about":
        output = (
          <div className="space-y-4 max-w-2xl">
            <div className="flex gap-4 items-start">
              <img
                src={profile.avatar}
                alt="Me"
                className="w-24 h-24 border-2 border-green-500 object-cover"
              />
              <div>
                <p className="text-xl font-bold text-green-300">
                  Name: {profile.name}
                </p>
                <p className="text-green-300">Role: {profile.role}</p>
                <p className="mt-2 text-green-100">{profile.about}</p>
                <p className="mt-2 text-green-400 italic">
                  "{profile.tagline}"
                </p>
              </div>
            </div>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <div>
              <p className="text-yellow-400 font-bold mb-2 underline">
                Core Stack:
              </p>
              <ul className="list-disc pl-5">
                {skills.core.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-yellow-400 font-bold mb-2 underline">
                Concepts:
              </p>
              <ul className="list-disc pl-5">
                {skills.concepts.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="space-y-8">
            {projects.map((p) => (
              <div key={p.id} className="border-l-2 border-green-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400 font-bold text-lg">
                    {p.title}
                  </span>
                  <span className="text-xs bg-green-900 text-green-300 px-2 py-0.5 rounded">
                    {p.tags[0]}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={p.assets.cover}
                    alt={p.title}
                    className="w-48 h-32 object-cover border border-green-800 opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <div>
                    <p className="mb-2 text-green-100">{p.description}</p>
                    <div className="flex gap-3">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-400 hover:text-blue-300 hover:underline"
                        >
                          [{l.label}]
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case "social":
        output = (
          <div className="flex gap-6 flex-wrap">
            {socialLinks.map((l) => (
              <a
                key={l.name}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
              >
                <l.icon size={16} /> {l.name}
              </a>
            ))}
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "whoami":
        output = "guest_user@internet";
        break;
      default:
        output = `Command not found: ${cmd}. Type "help" for a list of commands.`;
    }

    setHistory([...history, { command: cmd, output }]);
    setInput("");
  };

  return (
    <div
      className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-8 selection:bg-green-900 selection:text-white"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="max-w-4xl mx-auto border border-green-800 p-2 min-h-[90vh] rounded bg-black/90 shadow-[0_0_20px_rgba(0,255,0,0.1)] relative overflow-hidden">
        {/* CRT Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>

        {/* Header */}
        <div className="border-b border-green-800 pb-2 mb-4 flex justify-between items-center opacity-70 px-2">
          <span>ebuka_portfolio.exe</span>
          <span>v2.0.0</span>
        </div>

        {/* Output */}
        <div className="space-y-4 px-2 relative z-20">
          {history.map((item, idx) => (
            <div key={idx} className="break-words">
              <div className="flex gap-2 text-blue-400 mb-1">
                <span>root@portfolio:~$</span>
                <span className="text-green-500">{item.command}</span>
              </div>
              <div className="text-green-100/90 leading-relaxed ml-2 md:ml-4">
                {item.output}
              </div>
            </div>
          ))}
        </div>

        {/* Input Line */}
        <form
          onSubmit={handleCommand}
          className="mt-4 flex gap-2 px-2 relative z-20"
        >
          <span className="text-blue-400 text-nowrap">root@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-green-500 flex-grow caret-green-500"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </form>
        <div ref={bottomRef}></div>
      </div>
    </div>
  );
};

export default Terminal;
