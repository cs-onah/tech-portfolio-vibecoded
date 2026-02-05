import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Design1 from "./designs/Design1";
import Design2 from "./designs/Design2";
import Design3 from "./designs/Design3";
import Design4 from "./designs/Design4";
import Design5 from "./designs/Design5";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">
        Portfolio Designs
      </h1>
      <p className="mb-8 text-slate-600 text-lg">
        Select a design variation to explore:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {[1, 2, 3, 4, 5].map((num) => (
          <Link
            key={num}
            to={`/${num}`}
            className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 group"
          >
            <h2 className="text-2xl font-semibold mb-2 text-slate-800 group-hover:text-blue-600">
              Design {num}
            </h2>
            <p className="text-slate-500">
              {num === 1 && "Clean & Minimalist"}
              {num === 2 && "Bold & Brutalist"}
              {num === 3 && "Glass & Gradient"}
              {num === 4 && "Grid / Bento"}
              {num === 5 && "Creative / Artistic"}
            </p>
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
        {/* Redirect any unknown route to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
