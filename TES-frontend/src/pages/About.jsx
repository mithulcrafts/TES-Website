import Background from "../components/Shared/Background";
import Team from "../components/Landing/Team";

export default function About() {
  return (
    <>
      <Background />
      <main className="max-w-5xl mx-auto px-10 py-16 md:py-24 w-full flex flex-col gap-16 md:gap-24 relative z-10">
        
        {/* 1. Main Header */}
        <section className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[var(--color-text-main)] leading-tight">
            The <span className="text-[var(--color-lavender)]">Enigma</span> Society
          </h1>
        </section>

        {/* 2. About */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div className="md:col-span-1 border-t-2 border-[var(--color-sapphire)] pt-4 flex justify-center md:justify-start">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-[var(--color-text-main)] uppercase">
              About
            </h2>
          </div>
          <div className="md:col-span-3 text-lg md:text-xl font-medium text-[var(--color-text-muted)] leading-relaxed text-center md:text-left">
            <p>
              The Enigma Society is a tech community in ABV-IIITM Gwalior. The club is a collective effort to encourage discussions and build a strong tech culture.
            </p>
          </div>
        </section>

        {/* 3. Core Principles */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div className="md:col-span-1 border-t-2 border-[var(--color-teal)] pt-4 flex justify-center md:justify-start">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-[var(--color-text-main)] uppercase">
              Core Principles
            </h2>
          </div>
          <div className="md:col-span-3 text-lg md:text-xl font-medium text-[var(--color-text-muted)] leading-relaxed text-center md:text-left">
            <p>
              TES operates differently from standard college clubs. We have three main rules. First, no bias. We are a strictly meritocratic environment. Second, radical transparency. Everything is clear and we make no backroom decisions. Third, open feedback. We always welcome your suggestions. We do not put pressure on you. Your participation is driven by curiosity, not obligation.
            </p>
          </div>
        </section>

        {/* 4. Peer Learning Model */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div className="md:col-span-1 border-t-2 border-[var(--color-lavender)] pt-4 flex justify-center md:justify-start">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-[var(--color-text-main)] uppercase leading-tight">
              Peer Learning
            </h2>
          </div>
          <div className="md:col-span-3 text-lg md:text-xl font-medium text-[var(--color-text-muted)] leading-relaxed text-center md:text-left">
            <p>
              We grow through failure and learning together. First-year students participate actively as learners. Second-year students act as guides. They share their experiences, including what they learned from failing. The idea is simple: we learn from each other and grow together.
            </p>
          </div>
        </section>

        {/* 5. Member Contributions */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div className="md:col-span-1 border-t-2 border-[var(--color-flamingo)] pt-4 flex justify-center md:justify-start">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-[var(--color-text-main)] uppercase leading-tight">
              Contributions
            </h2>
          </div>
          <div className="md:col-span-3 text-lg md:text-xl font-medium text-[var(--color-text-muted)] leading-relaxed text-center md:text-left">
            <p>
              You do not need an official role to help. You can share your knowledge and experiences. You can answer doubts or share useful links and resources. If you write high-quality articles, threads, or projects, we will feature them on official TES platforms. You always get full credit so you can build your professional presence.
            </p>
          </div>
        </section>

        {/* 6. Roadmap and Vision */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div className="md:col-span-1 border-t-2 border-[var(--color-sapphire)] pt-4 flex justify-center md:justify-start">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-[var(--color-text-main)] uppercase leading-tight">
              Roadmap & Vision
            </h2>
          </div>
          <div className="md:col-span-3 text-lg md:text-xl font-medium text-[var(--color-text-muted)] leading-relaxed text-center md:text-left">
            <p>
              Right now, we are focused on general tech discussions, guidance, and peer learning. In the future, we will organize formal projects and focus heavily on open source contributions. We are modeling this club after how tech communities work at top global universities
            </p>
          </div>
        </section>

        {/* 7. Team Section Component */}
        <div className="pt-12 border-t border-white/5">
          <Team />
        </div>

      </main>
    </>
  );
}