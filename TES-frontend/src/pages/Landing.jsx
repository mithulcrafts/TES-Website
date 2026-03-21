import Background from "../components/Shared/Background";
import TextType from "../components/TextType";
import Footer from "../components/Footer";

import Hero from "../components/Landing/Hero";
import Core from "../components/Landing/Core";
import Announcements from "../components/Landing/Announcements";
import Team from "../components/Landing/Team";



export default function Landing() {
  return (
    <>
      <Background />

      <div className="px-10">
        <div className="min-h-screen flex flex-col w-full items-center justify-center text-center pt-20 px-6 ">
        
        {/* Heading */}
        <Hero />

        {/* About Section */}
        <div className="mt-20 w-full max-w-6xl">
          <Core />
        </div>

        <Announcements />

        <Team />

        

      </div>
      </div>
      
      <div className="mt-20">
          <Footer />
      </div>

    </>
  );
}