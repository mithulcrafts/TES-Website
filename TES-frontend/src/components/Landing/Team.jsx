import React from 'react';

const teamData = {
  coordinators: [
    { name: "Mithul Nama", role: "Overall Lead", domain: "Full Stack" },
    { name: "Rohinth S", role: "Operations Lead", domain: "DevOps" },
    { name: "Aman Dabral", role: "Operations Lead", domain: "DevOps" },
  ],
  team: [
    { name: "Member Name", role: "Web Lead" },
    { name: "Member Name", role: "App Lead" },
    { name: "Member Name", role: "Design Lead" },
    { name: "Member Name", role: "CP Lead" },
  ]
};

const Team = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto space-y-16">
      
      {/* Section Header */}
      <div className="text-center space-y-2">
        <h2 className="text-[var(--color-text-main)] text-3xl md:text-4xl font-bold tracking-tight">
          The <span className="text-[var(--color-sapphire)]">Team</span>
        </h2>
        <p className="text-[var(--color-text-muted)] text-sm md:text-base font-light">
          Driving the tech culture at ABV-IIITM
        </p>
      </div>

      {/* Lead Coordinators Section */}
      <div className="space-y-8">
        <h3 className="text-[var(--color-lavender)] text-xs uppercase tracking-[0.3em] font-bold text-center">
          Lead Coordinators
        </h3>
        <div className="flex flex-col sm:flex-row gap-5">
          {teamData.coordinators.map((lead, index) => (
            <div key={index} className="bg-[var(--color-surface)] border border-white/5 p-8 rounded-2xl hover:border-[var(--color-sapphire)]/50 transition-all group">
              <p className="text-[var(--color-text-main)] text-xl font-semibold">{lead.name}</p>
              <p className="text-[var(--color-sapphire)] text-sm font-medium uppercase tracking-wider mt-1">{lead.role}</p>
              <p className="text-[var(--color-text-muted)] text-xs mt-4 font-mono">{lead.domain}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Team Section */}
      <div className="space-y-8 pt-10">
        <h3 className="text-[var(--color-teal)] text-xs uppercase tracking-[0.3em] font-bold text-center">
          Core Members
        </h3>
        <div className="flex flex-col sm:flex-row gap-4">
          {teamData.team.map((member, index) => (
            <div key={index} className="bg-[var(--color-surface)]/50 border border-white/5 p-5 rounded-xl text-center hover:bg-[var(--color-surface)] transition-colors">
              <p className="text-[var(--color-text-main)] font-medium">{member.name}</p>
              <p className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Team;