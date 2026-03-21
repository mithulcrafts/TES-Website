import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Everything inside this route uses the Layout wrapper (Header + Styling) */}
        <Route element={<Layout />}>
          
          <Route path="/" element={<Landing />} />
          
          <Route path="/about" element={
            <div className="flex items-center justify-center min-h-[60vh] text-lavender font-bold text-2xl">
              About Page Initiated...
            </div>
          } />
          
          <Route path="/articles" element={
            <div className="flex items-center justify-center min-h-[60vh] text-lavender font-bold text-2xl">
              Articles Fetching...
            </div>
          } />
          
        </Route>
      </Routes>
    </Router>
  );
}