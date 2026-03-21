import { Code, Trophy, Mic, Users, Target, Rocket , 
  Eye, 
  GitBranch, 
  Share2, 
  Linkedin, 
  Award,
  ChevronRight } from "lucide-react";

export const heroCounts = [
  
  { value: "110+", label: "Wiki Articles" },
  { value: "90+", label: "GitHub Repos" },
  { value: "2+", label: "Years since formation" },
];

export const contributions = [
    { 
      label: "Share Knowledge", 
      desc: "Answer peer doubts, share opportunities, or offer technical opinions.",
      icon: Share2 
    },
    { 
      label: "Build Presence", 
      desc: "High-quality member content is featured on official platforms like LinkedIn and X.",
      icon: Linkedin 
    },
    { 
      label: "No Roles Required", 
      desc: "Meaningful contribution is valued over specific positions or official club titles.",
      icon: Award 
    }
  ];

export const pillars = [
    {
      title: "Radical Transparency",
      icon: Eye,
      color: "var(--color-sapphire)",
      desc: "The club operates without bias, driven entirely by member interest and direct feedback. No hidden agendas—just pure tech."
    },
    {
      title: "Peer-to-Peer Growth",
      icon: Users,
      color: "var(--color-lavender)",
      desc: "Second-year mentors share real experiences while first-years learn through active participation. Learn from seniors, avoid common mistakes."
    },
    {
      title: "Open Source Vision",
      icon: GitBranch,
      color: "var(--color-teal)",
      desc: "Establishing a centralized organization where members collaborate on listed technical projects across all domains."
    }
  ];

export const heroCards = [
  {
    title: "Fast Paced Courses",
    desc: "Deep dive into topics like machine learning, Web Development, and more",
    icon: Code,
  },
  {
    title: "Hackathons",
    desc: "Compete with like minded developers",
    icon: Trophy,
  },
  {
    title: "Expert Talk Sessions",
    desc: "Quick, intensive tech sessions",
    icon: Mic,
  },
];

export const aboutData = [
  {
    title: "Who are we?",
    
    desc: "The Enigma Society (TES) is the premier technical wing of ABV-IIITM Gwalior. We are a collective of developers, designers, and problem-solvers dedicated to unraveling the complexities of modern technology. From code-breaking to system-building, we are the heart of the institute's developer culture.",
  },
  {
    title: "Our Mission",
   
    desc: "To decode the barriers between students and high-level engineering. We strive to empower the IIITM community through peer-to-peer mentorship, open-source contribution, and hands-on workshops that turn abstract logic into real-world innovation.",
  },
  {
    title: "Our Vision",
   
    desc: "To establish ABV-IIITM Gwalior as a global epicenter for technical excellence. We envision a future where every member of TES is equipped to solve 'Enigma-level' challenges, pushing the boundaries of what's possible in the digital landscape.",
  },
];