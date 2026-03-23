import { useEffect, useRef } from "react";

// ── Inline styles for things Tailwind can't do ──────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap');

  .footer-font { font-family: 'Syne', sans-serif; }
  .mono { font-family: 'Space Mono', monospace; }

  .glow-line {
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(74,144,226,0.5) 25%,
      rgba(100,180,255,0.8) 50%,
      rgba(74,144,226,0.5) 75%,
      transparent 100%
    );
    animation: glowPulse 3s ease-in-out infinite;
  }

  @keyframes glowPulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .star {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: twinkle var(--dur) ease-in-out infinite var(--delay);
  }

  @keyframes twinkle {
    0%, 100% { opacity: var(--min-op); transform: scale(1); }
    50% { opacity: var(--max-op); transform: scale(1.4); }
  }

  .ambient-glow {
    background: radial-gradient(ellipse at center,
      rgba(74,144,226,0.14) 0%,
      rgba(74,144,226,0.05) 40%,
      transparent 70%
    );
  }

  .nav-link {
    position: relative;
    transition: color 0.25s;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    left: 0; bottom: -2px;
    width: 0; height: 1px;
    background: #4a90e2;
    transition: width 0.3s ease;
  }

  .nav-link:hover::after { width: 100%; }
  .nav-link:hover { color: white; }

  .social-row {
    transition: all 0.25s ease;
    border: 1px solid transparent;
  }

  .social-row:hover {
    border-color: rgba(74,144,226,0.3);
    background: rgba(74,144,226,0.07);
    transform: translateX(5px);
    color: white;
  }

  .social-icon-wrap {
    transition: background 0.25s;
  }

  .social-row:hover .social-icon-wrap {
    background: rgba(74,144,226,0.25);
  }

  .pulse-dot {
    animation: pulseDot 2s ease-in-out infinite;
  }

  @keyframes pulseDot {
    0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(74,144,226,0.4); }
    50% { opacity: 0.7; transform: scale(0.8); box-shadow: 0 0 0 4px rgba(74,144,226,0); }
  }

  .fade-up {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .badge-glow {
    animation: badgePulse 4s ease-in-out infinite;
  }

  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(74,144,226,0); }
    50% { box-shadow: 0 0 12px 2px rgba(74,144,226,0.2); }
  }
`;

// ── Star field ───────────────────────────────────────────────────────────────
const STARS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 1.5 + 0.5,
  dur: `${Math.random() * 4 + 3}s`,
  delay: `-${Math.random() * 5}s`,
  minOp: Math.random() * 0.1 + 0.05,
  maxOp: Math.random() * 0.4 + 0.2,
}));

// ── SVG Icons ────────────────────────────────────────────────────────────────
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4a90e2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4a90e2">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4a90e2">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const socials = [
  { label: "Instagram", icon: <InstaIcon />, href: "https://www.instagram.com/tes_iiitm" },
  { label: "LinkedIn", icon: <LinkedinIcon />, href: "https://www.linkedin.com/company/tes-the-enigma-society/" },
  { label: "Medium", icon: <MediumIcon />, href: "https://medium.com/@tes.abviiitm" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Articles", href: "/articles" },
  { label: "Events", href: "/events" },
  { label: "Projects", href: "/projects" },
];

// ── Intersection observer hook ───────────────────────────────────────────────
function useFadeUp(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return ref;
}

// ── Column header ────────────────────────────────────────────────────────────
function ColHeader({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="mono text-[10px] tracking-[3px] uppercase text-[#4a90e2]">{children}</span>
      <div className="flex-1 h-px bg-[rgba(74,144,226,0.2)]" />
    </div>
  );
}

// ── Main footer component ────────────────────────────────────────────────────
export default function EnigmaFooter() {
  const col1Ref = useFadeUp(100);
  const col2Ref = useFadeUp(200);
  const col3Ref = useFadeUp(300);
  const col4Ref = useFadeUp(400);
  const bottomRef = useFadeUp(500);

  return (
    <>
      <style>{styles}</style>

      {/* Top glow line */}
      <div className="glow-line w-full h-px" />

      <footer
        className="footer-font relative overflow-hidden"
        style={{ background: "#0a0a0f" }}
      >
        {/* Starfield */}
        {STARS.map((s) => (
          <span
            key={s.id}
            className="star pointer-events-none"
            style={{
              top: s.top, left: s.left,
              width: s.size, height: s.size,
              "--dur": s.dur, "--delay": s.delay,
              "--min-op": s.minOp, "--max-op": s.maxOp,
            }}
          />
        ))}

        {/* Ambient glow bottom-center */}
        <div
          className="ambient-glow pointer-events-none absolute"
          style={{ bottom: "-100px", left: "50%", transform: "translateX(-50%)", width: "700px", height: "260px" }}
        />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-8 pt-16 pb-8">

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-12 pb-12 border-b border-white/[0.06]">

            {/* Brand */}
            <div ref={col1Ref} className="fade-up">
              {/* ⚠️ Make sure your logo file is at /public/logo.png
                  Change "logo.png" below to match your actual filename */}
              <img
                src="/teslogo-nobg-text-white.png"
                alt="The Enigma Society"
                className="mb-6 w-40 opacity-90"
              />

              <p className="text-sm leading-7 text-white/45 mb-7 max-w-[270px]">
                A community of curious minds building, learning, and pushing the boundaries of technology — together.
              </p>

              <div
                className="badge-glow inline-flex items-center gap-2 px-3 py-2 rounded-lg border mono text-[10px] tracking-wide uppercase"
                style={{ background: "rgba(74,144,226,0.07)", borderColor: "rgba(74,144,226,0.22)", color: "rgba(74,144,226,0.85)" }}
              >
                <span className="text-[#4a90e2]">◆</span>
                ABV-IIITM Gwalior
              </div>
            </div>

            {/* Quick Links */}
            <div ref={col2Ref} className="fade-up">
              <ColHeader>Navigate</ColHeader>
              <ul className="space-y-3">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="nav-link flex items-center gap-3 text-sm font-medium text-white/50"
                    >
                      <span className="mono text-[10px] text-[rgba(74,144,226,0.45)]">—</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div ref={col3Ref} className="fade-up">
              <ColHeader>Socials</ColHeader>
              <div className="space-y-2">
                {socials.map(({ label, icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-row flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/50 no-underline"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <div
                      className="social-icon-wrap w-8 h-8 flex items-center justify-center rounded-md flex-shrink-0"
                      style={{ background: "rgba(74,144,226,0.1)" }}
                    >
                      {icon}
                    </div>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div ref={col4Ref} className="fade-up">
              <ColHeader>Contact</ColHeader>
              <div className="space-y-5">
                <div>
                  <p className="mono text-[9px] tracking-[2px] uppercase mb-1.5" style={{ color: "rgba(74,144,226,0.6)" }}>Email</p>
                  <a
                    href="mailto:tes.abviiitm@gmail.com"
                    className="text-[13px] font-medium text-white/55 no-underline transition-colors hover:text-[#4a90e2]"
                  >
                    tes.abviiitm@gmail.com
                  </a>
                </div>
                <div>
                  <p className="mono text-[9px] tracking-[2px] uppercase mb-1.5" style={{ color: "rgba(74,144,226,0.6)" }}>Campus</p>
                  <p className="text-[13px] font-medium text-white/55">ABV-IIITM, Gwalior, M.P.</p>
                </div>

              </div>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div ref={bottomRef} className="fade-up flex flex-wrap items-center justify-between gap-4 pt-7">
            <p className="mono text-[11px] tracking-wide text-white/25">
              © 2025 <span style={{ color: "#4a90e2" }}>Enigma Society</span>. All rights reserved.
            </p>

            <div className="flex items-center gap-2 mono text-[10px] tracking-widest text-white/20">
              <span
                className="pulse-dot inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "#4a90e2" }}
              />
              ACTIVE · ABV-IIITM GWALIOR
            </div>

            <p className="mono text-[10px] tracking-widest text-white/20">
              BUILT BY ENIGMA SOCIETY
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}