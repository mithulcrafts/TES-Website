import { Link } from "react-router-dom";
import Background from "../components/Shared/Background";
import TextType from "../components/TextType";

import Tilt from "react-parallax-tilt";
import { heroCards, heroCounts } from "../../constants";
export default function Landing() {
  return (
    <>
      {/* Drop in the reusable background */}
      <Background />

      <div className="text-center flex justify-center pt-20 flex-col">
        <h1 className="text-5xl font-extrabold mb-10">The Enigma Society</h1>
        
      <div className="text-3xl my-5">
        <TextType 
  text={["A place where CODERS", "learn and collaborate"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
  deletingSpeed={40}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>


      </div>
      <div className="flex flex-col sm:flex-row gap-5 mt-2 px-6">
  {heroCounts.map((item, index) => (
    <div
      key={index}
      className="flex-1 flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
        {item.value}
      </h2>
      <p className="text-sm text-gray-300 mt-2">
        {item.label}
      </p>
    </div>
  ))}
</div>
<div className="mt-10 px-6 overflow-x-hidden overflow-y-hidden">
  <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
    {heroCards.map((item, index) => {
  const Icon = item.icon;

  return (
    <Tilt key={index} className="rounded-2xl items-center justify-center flex">
      <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center text-center w-[30vw] h-50 p-2">
        
        {/* Icon */}
        <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl">
          <Icon className="text-blue-400 w-6 h-6" />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm">
          {item.desc}
        </p>

      </div>
    </Tilt>
  );
})}
  </div>
</div>


      </div>

    </>
  );
}