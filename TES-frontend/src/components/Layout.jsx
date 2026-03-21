import { Outlet } from "react-router-dom";
import Header from "./Shared/Header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-base font-sans selection:bg-flamingo selection:text-base flex flex-col relative overflow-x-hidden">
      
      {/* The Header stays on every page */}
      <Header />

      {/* The Outlet is where your page components (Landing, About, etc.) will render */}
      <div className="grow pt-20 flex flex-col relative z-10">
        <Outlet />
      </div>

    </div>
  );
}