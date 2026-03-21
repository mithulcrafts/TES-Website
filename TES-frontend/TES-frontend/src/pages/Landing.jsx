import { Link } from "react-router-dom";
import Background from "../components/Shared/Background";

export default function Landing() {
  return (
    <>
      {/* Drop in the reusable background */}
      <Background />

      <main className="grow flex flex-col justify-center items-center text-center px-6 py-24 relative z-10 min-h-[80vh]">


        <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none mb-8 max-w-5xl text-text-main">
          Coming Soon
        </h1>

      </main>

    </>
  );
}