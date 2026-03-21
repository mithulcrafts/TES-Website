import Background from "../components/Shared/Background";

export default function About() {
  // Team data with image paths pointing to the /public/team folder
  const teamMembers = [
    { 
      name: "Mithul Nama", 
      linkedin: "https://www.linkedin.com/in/mithul-nama-61362a331", 
      image: "/team/mithul.jpg"
    },
    { 
      name: "Rohinth S", 
      linkedin: "https://www.linkedin.com/in/srohinth/", 
      image: "/team/rohinth.jpg"
    },
    { 
      name: "Aman Dabral", 
      linkedin: "https://www.linkedin.com/in/aman-dabral-163730323/", 
      image: ""
    },
  ];

  const socials = [
    { name: "GitHub", link: "#", icon: "/>" },
    { name: "Discord", link: "#", icon: " #" },
    { name: "LinkedIn", link: "#", icon: "in" },
    { name: "Instagram", link: "#", icon: "@" },
  ];

  return (
    <>
    <Background />
    <main className="max-w-5xl mx-auto px-6 py-24 w-full flex flex-col gap-32 relative z-10">
      
      {/* 1. About Section */}
      <section>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-text-main mb-10 leading-tight">
          The <span className="text-lavender">Enigma</span> Society
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl font-medium text-text-muted leading-relaxed">
          <p>
            Founded at IIITM, TES is more than just a coding club. We are a collective of digital craftsmen, hackers, and designers dedicated to pushing the boundaries of what students can build.
          </p>
          <p>
            We don't just write code; we architect systems. From participating in global open-source projects to hosting intense hackathons, our goal is to bridge the gap between academic theory and production-grade engineering.
          </p>
        </div>
      </section>

      {/* 2. Team Section */}
      <section>
        <div className="flex items-end justify-between mb-12 border-b border-surface pb-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-main">
            Core <span className="text-lavender">Team</span>
          </h2>
        </div>

        {/* Adjust grid cols to 3 since you currently have 3 members, looks cleaner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <a 
              key={index} 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface p-6 flex flex-col border border-surface hover:border-lavender transition-colors block cursor-pointer"
            >
              {/* Image / Avatar Container */}
              <div className="w-full aspect-square bg-base mb-6 flex items-center justify-center overflow-hidden relative">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-text-muted font-black text-6xl group-hover:text-lavender transition-colors">
                    {member.name.charAt(0)}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-black text-text-main mb-1">
                {member.name}
              </h3>
              
              <div className="mt-auto pt-4 border-t border-base">
                <span className="text-sm font-bold text-text-muted group-hover:text-lavender transition-colors flex items-center justify-between">
                  View Profile <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3. Social Media Section */}
      <section>
        <div className="bg-surface p-8 md:p-12 border border-surface flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle background decoration to make the section pop */}
          <div className="absolute -bottom-10 -right-10 text-9xl font-black text-base opacity-20 rotate-12 pointer-events-none">
            TES
          </div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-text-main mb-4 relative z-10">
            Initialize <span className="text-teal">Contact</span>.
          </h2>
          <p className="text-text-muted font-medium mb-10 max-w-lg relative z-10">
            Follow our network transmissions for updates on recruitments, hackathons, and open-source releases.
          </p>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {socials.map((social) => (
              <a 
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-base border border-surface hover:border-teal px-6 py-4 transition-all group min-w-[160px] justify-center"
              >
                <span className="text-lavender font-black text-lg group-hover:text-teal transition-colors">
                  {social.icon}
                </span>
                <span className="font-bold text-text-main group-hover:text-teal transition-colors">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
    </>
  );
}