import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Design1 from "./designs/Design1";
import Design2 from "./designs/Design2";
import Design3 from "./designs/Design3";
import Design4 from "./designs/Design4";
import Design5 from "./designs/Design5";
import Design6 from "./designs/Design6";
import Design7 from "./designs/Design7";
import Design8 from "./designs/Design8";
import Design9 from "./designs/Design9";
import Design10 from "./designs/Design10";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">
        Portfolio Designs
      </h1>
      <p className="mb-8 text-slate-600 text-lg">
        Select a design variation to explore:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {[
          {
            id: 1,
            name: "Interactive Terminal",
            desc: "Command Line Interface",
          },
          { id: 2, name: "Swiss Style", desc: "Bold Typography & Grid" },
          { id: 3, name: "Retro OS", desc: "Windows 95 Aesthetics" },
          {
            id: 4,
            name: "Editorial / Magazine",
            desc: "Serif Typography & Minimalism",
          },
          { id: 5, name: "Cinematic", desc: "Immersive Parallax" },
          { id: 6, name: "Fluid / Organic", desc: "Morphing Shapes & Blur" },
          { id: 7, name: "Scrapbook", desc: "Collage & Handwriting" },
          { id: 8, name: "Deconstructivist", desc: "Brutalist & Anti-Design" },
          {
            id: 9,
            name: "Cyberpunk / Glitch",
            desc: "Neon & Digital Corruption",
          },
          { id: 10, name: "Blueprint", desc: "Technical Schematic" },
        ].map((design) => (
          <Link
            key={design.id}
            to={`/${design.id}`}
            className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 group"
          >
            <h2 className="text-2xl font-semibold mb-2 text-slate-800 group-hover:text-blue-600">
              Design {design.id}
            </h2>
            <p className="text-slate-500 font-medium">{design.name}</p>
            <p className="text-slate-400 text-sm mt-1">{design.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1/*" element={<Design1 />} />
        <Route path="/2/*" element={<Design2 />} />
        <Route path="/3/*" element={<Design3 />} />
        <Route path="/4/*" element={<Design4 />} />
        <Route path="/5/*" element={<Design5 />} />
        <Route path="/6/*" element={<Design6 />} />
        <Route path="/7/*" element={<Design7 />} />
        <Route path="/8/*" element={<Design8 />} />
        <Route path="/9/*" element={<Design9 />} />
        <Route path="/10/*" element={<Design10 />} />
        {/* Redirect any unknown route to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
