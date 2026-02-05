import { useState } from "react";
import { profile, projects, skills, socialLinks } from "../../data";
import {
  FileText,
  Folder,
  ChevronRight,
  ChevronDown,
  X,
  Menu,
  Search,
  GitBranch,
  Settings,
} from "lucide-react";

const Syntax = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => <span style={{ color }}>{children}</span>;

const CodeLine = ({
  num,
  children,
}: {
  num: number;
  children: React.ReactNode;
}) => (
  <div className="flex font-mono text-xs md:text-sm hover:bg-[#2d2d2d] leading-6">
    <span className="w-8 md:w-12 text-gray-500 text-right pr-4 select-none">
      {num}
    </span>
    <div className="whitespace-pre flex-1">{children}</div>
  </div>
);

const FileIcon = ({ name }: { name: string }) => {
  if (name.endsWith(".tsx")) return <span className="text-blue-400">⚛️</span>;
  if (name.endsWith(".ts")) return <span className="text-blue-500">TS</span>;
  if (name.endsWith(".json"))
    return <span className="text-yellow-400">{}</span>;
  if (name.endsWith(".md")) return <span className="text-gray-400">ⓘ</span>;
  return <FileText size={14} />;
};

export default function DevIDE() {
  const [activeFile, setActiveFile] = useState("profile.tsx");
  const [openFiles, setOpenFiles] = useState([
    "profile.tsx",
    "projects.ts",
    "skills.json",
    "readme.md",
  ]);
  const [sidebarOpen] = useState(true);

  const handleFileClick = (file: string) => {
    if (!openFiles.includes(file)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFile(file);
  };

  const closeFile = (e: React.MouseEvent, file: string) => {
    e.stopPropagation();
    const newOpen = openFiles.filter((f) => f !== file);
    setOpenFiles(newOpen);
    if (activeFile === file && newOpen.length > 0) {
      setActiveFile(newOpen[newOpen.length - 1]);
    } else if (newOpen.length === 0) {
      setActiveFile("");
    }
  };

  const renderFileContent = () => {
    switch (activeFile) {
      case "profile.tsx":
        return (
          <div className="p-4">
            <CodeLine num={1}>
              <Syntax color="#c586c0">import</Syntax> React{" "}
              <Syntax color="#c586c0">from</Syntax>{" "}
              <Syntax color="#ce9178">'react'</Syntax>;
            </CodeLine>
            <CodeLine num={2}>&nbsp;</CodeLine>
            <CodeLine num={3}>
              <Syntax color="#569cd6">export</Syntax>{" "}
              <Syntax color="#569cd6">const</Syntax>{" "}
              <Syntax color="#4ec9b0">Profile</Syntax> = (){" "}
              <Syntax color="#569cd6">=&gt;</Syntax> (
            </CodeLine>
            <CodeLine num={4}>
              &nbsp;&nbsp;<Syntax color="#808080">&lt;</Syntax>
              <Syntax color="#569cd6">div</Syntax>{" "}
              <Syntax color="#9cdcfe">className</Syntax>=
              <Syntax color="#ce9178">"developer-card"</Syntax>
              <Syntax color="#808080">&gt;</Syntax>
            </CodeLine>
            <CodeLine num={5}>
              &nbsp;&nbsp;&nbsp;&nbsp;<Syntax color="#808080">&lt;</Syntax>
              <Syntax color="#569cd6">img</Syntax>{" "}
              <Syntax color="#9cdcfe">src</Syntax>=
              <Syntax color="#ce9178">"{profile.avatar}"</Syntax>{" "}
              <Syntax color="#9cdcfe">alt</Syntax>=
              <Syntax color="#ce9178">"Me"</Syntax>{" "}
              <Syntax color="#808080">/&gt;</Syntax>
            </CodeLine>
            <CodeLine num={6}>
              &nbsp;&nbsp;&nbsp;&nbsp;<Syntax color="#808080">&lt;</Syntax>
              <Syntax color="#569cd6">h1</Syntax>
              <Syntax color="#808080">&gt;</Syntax>
              {profile.name}
              <Syntax color="#808080">&lt;/</Syntax>
              <Syntax color="#569cd6">h1</Syntax>
              <Syntax color="#808080">&gt;</Syntax>
            </CodeLine>
            <CodeLine num={7}>
              &nbsp;&nbsp;&nbsp;&nbsp;<Syntax color="#808080">&lt;</Syntax>
              <Syntax color="#569cd6">p</Syntax>
              <Syntax color="#808080">&gt;</Syntax>
              {profile.role}
              <Syntax color="#808080">&lt;/</Syntax>
              <Syntax color="#569cd6">p</Syntax>
              <Syntax color="#808080">&gt;</Syntax>
            </CodeLine>
            <CodeLine num={8}>
              &nbsp;&nbsp;&nbsp;&nbsp;<Syntax color="#808080">&lt;</Syntax>
              <Syntax color="#569cd6">p</Syntax>{" "}
              <Syntax color="#9cdcfe">className</Syntax>=
              <Syntax color="#ce9178">"tagline"</Syntax>
              <Syntax color="#808080">&gt;</Syntax>
            </CodeLine>
            <CodeLine num={9}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"{profile.tagline}"
            </CodeLine>
            <CodeLine num={10}>
              &nbsp;&nbsp;&nbsp;&nbsp;<Syntax color="#808080">&lt;/</Syntax>
              <Syntax color="#569cd6">p</Syntax>
              <Syntax color="#808080">&gt;</Syntax>
            </CodeLine>
            <CodeLine num={11}>
              &nbsp;&nbsp;<Syntax color="#808080">&lt;/</Syntax>
              <Syntax color="#569cd6">div</Syntax>
              <Syntax color="#808080">&gt;</Syntax>
            </CodeLine>
            <CodeLine num={12}>);</CodeLine>

            <div className="mt-8 p-4 bg-[#1e1e1e] border border-[#333] rounded">
              <div className="flex gap-4 items-center">
                <img
                  src={profile.avatar}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-2 border-blue-500"
                />
                <div>
                  <h1 className="text-2xl font-bold text-blue-400">
                    {profile.name}
                  </h1>
                  <p className="text-gray-300">{profile.role}</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "projects.ts":
        return (
          <div className="p-4">
            <CodeLine num={1}>
              <Syntax color="#569cd6">const</Syntax>{" "}
              <Syntax color="#4ec9b0">projects</Syntax> = [
            </CodeLine>
            {projects.map((p, i) => (
              <div key={p.id}>
                <CodeLine num={2 + i * 8}>&nbsp;&nbsp;{"{"}</CodeLine>
                <CodeLine num={3 + i * 8}>
                  &nbsp;&nbsp;&nbsp;&nbsp;<Syntax color="#9cdcfe">id</Syntax>:{" "}
                  <Syntax color="#ce9178">"{p.id}"</Syntax>,
                </CodeLine>
                <CodeLine num={4 + i * 8}>
                  &nbsp;&nbsp;&nbsp;&nbsp;<Syntax color="#9cdcfe">title</Syntax>
                  : <Syntax color="#ce9178">"{p.title}"</Syntax>,
                </CodeLine>
                <CodeLine num={5 + i * 8}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Syntax color="#9cdcfe">description</Syntax>:{" "}
                  <Syntax color="#ce9178">
                    "{p.description.substring(0, 40)}..."
                  </Syntax>
                  ,
                </CodeLine>
                <CodeLine num={6 + i * 8}>
                  &nbsp;&nbsp;&nbsp;&nbsp;<Syntax color="#9cdcfe">tags</Syntax>:
                  [<Syntax color="#ce9178">"{p.tags.join('", "')}"</Syntax>],
                </CodeLine>
                <CodeLine num={7 + i * 8}>
                  &nbsp;&nbsp;&nbsp;&nbsp;<Syntax color="#9cdcfe">url</Syntax>:{" "}
                  <Syntax color="#ce9178">"{p.links[0]?.url}"</Syntax>
                </CodeLine>
                <CodeLine num={8 + i * 8}>&nbsp;&nbsp;{"},"}</CodeLine>
              </div>
            ))}
            <CodeLine num={projects.length * 8 + 2}>];</CodeLine>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#252526] p-4 rounded border border-[#333] hover:border-blue-500 cursor-pointer group"
                >
                  <div className="flex gap-4">
                    <img
                      src={p.assets.logo || p.assets.cover}
                      className="w-12 h-12 object-cover rounded bg-black"
                    />
                    <div>
                      <h3 className="text-blue-400 font-bold group-hover:underline">
                        {p.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "skills.json":
        return (
          <div className="p-4">
            <CodeLine num={1}>{"{"}</CodeLine>
            <CodeLine num={2}>
              &nbsp;&nbsp;<Syntax color="#9cdcfe">"core"</Syntax>: [
            </CodeLine>
            {skills.core.map((s, i) => (
              <CodeLine key={s} num={3 + i}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Syntax color="#ce9178">"{s}"</Syntax>,
              </CodeLine>
            ))}
            <CodeLine num={3 + skills.core.length}>&nbsp;&nbsp;],</CodeLine>
            <CodeLine num={4 + skills.core.length}>
              &nbsp;&nbsp;<Syntax color="#9cdcfe">"tools"</Syntax>: [
            </CodeLine>
            {skills.tools.slice(0, 5).map((s, i) => (
              <CodeLine key={s} num={5 + skills.core.length + i}>
                &nbsp;&nbsp;&nbsp;&nbsp;<Syntax color="#ce9178">"{s}"</Syntax>,
              </CodeLine>
            ))}
            <CodeLine num={5 + skills.core.length + 5}>&nbsp;&nbsp;]</CodeLine>
            <CodeLine num={6 + skills.core.length + 5}>{"}"}</CodeLine>
          </div>
        );
      case "readme.md":
        return (
          <div className="p-8 font-sans prose prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-4">README.md</h1>
            <p className="mb-4">
              Welcome to my developer portfolio. This entire website is a
              simulation of a coding environment.
            </p>

            <h2 className="text-xl font-bold mb-2">Contact Me</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:hello@example.com"
                  className="text-blue-400 hover:underline"
                >
                  hello@example.com
                </a>
              </li>
              {socialLinks.map((l) => (
                <li key={l.name}>
                  {l.name}:{" "}
                  <a
                    href={l.url}
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.url}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mb-2">Installation</h2>
            <div className="bg-[#1e1e1e] p-4 rounded font-mono text-sm">
              npm install ebuka-portfolio
              <br />
              npm start
            </div>
          </div>
        );
      default:
        return (
          <div className="p-20 text-center text-gray-500">
            Select a file from the explorer
          </div>
        );
    }
  };

  return (
    <div className="h-screen bg-[#1e1e1e] text-[#d4d4d4] flex flex-col font-sans overflow-hidden">
      {/* Title Bar */}
      <div className="h-8 bg-[#3c3c3c] flex justify-between items-center px-4 select-none text-xs">
        <div className="flex gap-4">
          <span className="font-bold">Visual Studio Code</span>
          <span>File</span>
          <span>Edit</span>
          <span>Selection</span>
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Help</span>
        </div>
        <div className="flex gap-2 text-gray-400">
          <span>ebuka-portfolio [SSH: Remote]</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-6 text-gray-400 select-none">
          <FileText size={24} className="text-white cursor-pointer" />
          <Search size={24} className="hover:text-white cursor-pointer" />
          <GitBranch size={24} className="hover:text-white cursor-pointer" />
          <div className="flex-1"></div>
          <Settings size={24} className="hover:text-white cursor-pointer" />
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <div className="w-64 bg-[#252526] flex flex-col border-r border-[#1e1e1e] select-none">
            <div className="h-8 px-4 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-gray-400 bg-[#252526]">
              <span>Explorer</span>
              <div className="flex gap-1">
                <Menu size={14} className="cursor-pointer" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="px-2 py-1 flex items-center gap-1 text-xs font-bold text-gray-300 cursor-pointer hover:bg-[#37373d]">
                <ChevronDown size={14} />
                <span>PORTFOLIO_V2</span>
              </div>
              <div className="pl-4">
                {[".vscode", "node_modules", "public", "src"].map((folder) => (
                  <div
                    key={folder}
                    className="px-2 py-1 flex items-center gap-1 text-sm text-gray-400 cursor-pointer hover:bg-[#2a2d2e]"
                  >
                    <ChevronRight size={14} />
                    <Folder size={14} className="text-yellow-600" />
                    <span>{folder}</span>
                  </div>
                ))}

                <div className="px-2 py-1 flex items-center gap-1 text-sm text-gray-400 cursor-pointer hover:bg-[#2a2d2e]">
                  <ChevronDown size={14} />
                  <Folder size={14} className="text-blue-400" />
                  <span>app</span>
                </div>

                {/* Files */}
                {["profile.tsx", "projects.ts", "skills.json", "readme.md"].map(
                  (file) => (
                    <div
                      key={file}
                      onClick={() => handleFileClick(file)}
                      className={`pl-8 px-2 py-1 flex items-center gap-2 text-sm cursor-pointer hover:bg-[#2a2d2e] ${activeFile === file ? "bg-[#37373d] text-white" : "text-gray-300"}`}
                    >
                      <FileIcon name={file} />
                      <span>{file}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        )}

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
          {/* Tabs */}
          <div className="h-9 bg-[#252526] flex overflow-x-auto select-none">
            {openFiles.map((file) => (
              <div
                key={file}
                onClick={() => setActiveFile(file)}
                className={`flex items-center gap-2 px-3 min-w-[120px] max-w-[200px] border-r border-[#1e1e1e] text-sm cursor-pointer ${activeFile === file ? "bg-[#1e1e1e] text-white" : "bg-[#2d2d2d] text-gray-400"}`}
              >
                <FileIcon name={file} />
                <span className="truncate">{file}</span>
                <X
                  size={14}
                  className="ml-auto hover:bg-[#333] rounded p-0.5"
                  onClick={(e) => closeFile(e, file)}
                />
              </div>
            ))}
          </div>

          {/* Breadcrumbs */}
          <div className="h-6 flex items-center px-4 text-xs text-gray-500 gap-2 bg-[#1e1e1e]">
            <span>src</span>
            <ChevronRight size={12} />
            <span>app</span>
            <ChevronRight size={12} />
            <span>{activeFile}</span>
          </div>

          {/* Code Area */}
          <div className="flex-1 overflow-auto relative font-mono">
            {renderFileContent()}
          </div>

          {/* Terminal Panel */}
          <div className="h-32 bg-[#1e1e1e] border-t border-[#333]">
            <div className="flex gap-4 px-4 py-1 text-xs font-bold text-gray-400 border-b border-[#333]">
              <span className="text-white border-b border-white pb-1">
                TERMINAL
              </span>
              <span>OUTPUT</span>
              <span>DEBUG CONSOLE</span>
            </div>
            <div className="p-2 font-mono text-sm text-gray-300">
              <div className="flex gap-2">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~/portfolio</span>
                <span className="text-yellow-500">git status</span>
              </div>
              <div>On branch main</div>
              <div>Your branch is up to date with 'origin/main'.</div>
              <div className="mt-2 flex gap-2">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~/portfolio</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] text-white flex justify-between items-center px-2 text-xs select-none">
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <GitBranch size={12} /> main
          </div>
          <div className="flex items-center gap-1">
            <X size={12} /> 0
          </div>
          <div className="flex items-center gap-1">! 0</div>
        </div>
        <div className="flex gap-4">
          <span>Ln 12, Col 34</span>
          <span>UTF-8</span>
          <span>TypeScript JSX</span>
          <span>Prettier</span>
        </div>
      </div>
    </div>
  );
}
