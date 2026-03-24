import Background from "../components/Shared/Background";


import Hero from "../components/Landing/Hero";

import Announcements from "../components/Landing/Announcements";
import BentoGrid from "../components/Landing/BentoGrid";




export default function Landing() {
  return (
    <>
      <Background />

      <div className="px-10">
        <div className="min-h-screen flex flex-col w-full items-center justify-center text-center pt-20 px-6 ">
        
        {/* Heading */}
        <Hero />

        
        <Announcements />

       {/* <BentoGrid /> */}

        

      </div>
      </div>
      


    </>
  );
}