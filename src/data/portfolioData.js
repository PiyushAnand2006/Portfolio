// ============================================================
// portfolioData.js — Centralized configuration for Piyush Anand's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Piyush Anand",
  firstName: "Piyush Anand",
  brandName: "Piyush Anand",
  title: "Data Science & Full-Stack AI Developer",
  location: "Bangalore, India",
  phone: "+91 83401-29180",
  emails: {
    primary: "thakur005piyush@gmail.com",
    secondary: "thakur005piyush@gmail.com",
  },
  summary:
    "Data Science undergraduate with hands-on experience building end-to-end ML solutions — from data preprocessing and modeling to actionable business insights — across healthcare, agriculture, and automated ML tooling, with a growing interest in full-stack development to turn models into deployable, user-facing products.",
  // Drop your resume PDF at public/Piyush_Anand_Resume.pdf and it will show up here.
  resumeUrl: "/Piyush_Anand_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/PiyushAnand2006",
  linkedin: "https://www.linkedin.com/in/piyush-anand-5594a2328/",
  // No Instagram — the third social slot links to the LeetCode profile instead.
  instagram: "https://leetcode.com/u/PiyushAnand_05/",
  leetcode: "https://leetcode.com/u/PiyushAnand_05/",
};

export const heroContent = {
  greeting: "Hi, I'm Piyush Anand",
  titleHighlight: "Data Science & AI Developer",
  subtitle:
    "I build end-to-end ML solutions, agentic AI systems, and full-stack apps that turn data into real products.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:thakur005piyush@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Piyush,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Piyush_Anand_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Piyush Anand</span>, a Data Science undergraduate at <strong>Bangalore Institute of Technology</strong> passionate about building end-to-end ML solutions — from agentic AI systems to full-stack products — that turn data into real-world impact.`,
  techStack: ["Python", "ML & GenAI", "FastAPI", "Scikit-learn", "LangChain"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn data into real-world applications",
  description:
    "I follow a structured, analytical, and highly technical approach to turn ideas into robust, intelligent applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding the problem, exploring datasets, and studying user requirements to lay a rock-solid analytical foundation.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and data pipelines that guarantee an engaging and reliable user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building ML models, GenAI workflows, and responsive frontends with modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous evaluation, performance optimization, and seamless deployment — followed by continuous iteration on real feedback.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 92 },
        { name: "SQL", level: 88 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 }
      ]
    },
    {
      title: "GenAI & LLMs",
      skills: [
        { name: "Prompt Engineering & OpenAI APIs", level: 88 },
        { name: "Agentic AI", level: 86 },
        { name: "LLM Application Development", level: 85 },
        { name: "RAG & LangChain", level: 84 },
        { name: "Multi-Agent Systems", level: 82 }
      ]
    },
    {
      title: "Machine Learning & Core Concepts",
      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "NLP", level: 82 },
        { name: "Deep Learning", level: 80 },
        { name: "OOP", level: 85 }
      ]
    },
    {
      title: "Data Handling",
      skills: [
        { name: "Data Cleaning", level: 92 },
        { name: "Data Preprocessing", level: 92 },
        { name: "EDA", level: 90 },
        { name: "Matplotlib Visualization", level: 88 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Pandas & NumPy", level: 92 },
        { name: "Jupyter Notebook", level: 92 },
        { name: "Scikit-learn", level: 90 },
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 78 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "Supabase", level: 78 }
      ]
    }
  ]
};

// Achievements & Activities Data (Hackathons, Workshops & Campus Life)
export const contentCreation = {
  badge: "Beyond the Classroom",
  heading: "Hackathons, Workshops & Campus Life",
  description:
    "Beyond coursework, I compete, collaborate, and keep learning — through hackathons, hands-on workshops, and campus initiatives.",
  categories: [
    {
      title: "Ideatattva IDEATHON",
      description: "Pitched and prototyped at the Nikshatra E-Summit ideathon — team ideation, rapid prototyping, and live pitching rounds.",
      stats: "Nov 2025",
      icon: "🏆"
    },
    {
      title: "Data Science & ML Workshop",
      description: "Hands-on training in machine learning — data preprocessing, model training, and evaluation on real datasets.",
      stats: "Certified 2026",
      icon: "🤖"
    },
    {
      title: "E-Mudhra Workshop",
      description: "Workshop on digital signatures, PKI fundamentals, and cyber-security awareness with live demonstrations.",
      stats: "Certified 2026",
      icon: "🔐"
    },
    {
      title: "BDA Plantation & College Events",
      description: "Community service through the BDA Green Plantation Drive and active participation in BIT campus events.",
      stats: "2026",
      icon: "🌱"
    }
  ]
};

// Leadership & Engagement Data
export const leadershipList = [
  {
    title: "Ideatattva IDEATHON – Nikshatra E-Summit",
    description: "Represented my team at the ideathon — developed the problem statement, built the pitching deck, and presented to judges.",
    role: "Hackathon Participant",
    badge: "Hackathon"
  },
  {
    title: "BDA Green Plantation Drive 2026",
    description: "Volunteered in the BDA plantation initiative promoting urban green cover — recognized with an official participation certificate.",
    role: "Community Volunteer",
    badge: "Community Service"
  },
  {
    title: "Data Science & ML Workshop, BIT",
    description: "Completed an intensive hands-on workshop covering the end-to-end ML workflow, from data cleaning to model deployment.",
    role: "Workshop Participant",
    badge: "Workshop"
  },
  {
    title: "E-Mudhra Digital Security Workshop",
    description: "Participated in sessions on digital trust, encryption, and secure digital transactions conducted by E-Mudhra experts.",
    role: "Workshop Participant",
    badge: "Workshop"
  },
  {
    title: "Campus Events @ Bangalore Institute of Technology",
    description: "Active participant in college celebrations and technical events, including the Independence Day celebration at BIT.",
    role: "Campus Volunteer",
    badge: "Campus Life"
  }
];

// Workshops & Training Data
export const internshipsList = [
  {
    organization: "Bangalore Institute of Technology",
    role: "Data Science & ML Workshop",
    duration: "2026",
    skills: ["ML Model Training", "Data Preprocessing", "Model Evaluation", "Exploratory Data Analysis"],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    organization: "Nikshatra E-Summit 2025",
    role: "Ideatattva IDEATHON Participant",
    duration: "November 2025",
    skills: ["Ideation", "Pitching", "Rapid Prototyping", "Teamwork"],
    tech: ["Design Thinking", "Presentation", "Prototyping"]
  },
  {
    organization: "E-Mudhra",
    role: "Digital Security Workshop",
    duration: "2026",
    skills: ["Digital Signatures", "PKI Fundamentals", "Security Awareness"],
    tech: ["E-Mudhra Platform", "Encryption Tools"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex data and engineering problems into clean, logical, modular solutions." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working across disciplines in hackathons, workshops, and group projects to ship together." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks, libraries, and GenAI tools as the stack evolves." },
  { name: "Analytical Thinking", icon: "📊", desc: "Data-driven reasoning applied to models, systems, and real-world decision making." },
  { name: "Communication", icon: "💬", desc: "Clear, structured presentation of technical ideas in pitches, docs, and demos." },
  { name: "Time Management", icon: "⏰", desc: "Balancing a 9.46 CGPA, hackathons, workshops, and personal projects." },
  { name: "Creativity", icon: "🎨", desc: "Blending data intelligence with clean design to build engaging user experiences." },
  { name: "Consistency", icon: "🎯", desc: "Maintaining top-tier academic performance while continuously building and learning." }
];

export const projects = [
  {
    id: "audas",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "AUDAS – Autonomous AI Data Scientist",
    description:
      "A multi-agent AI system orchestrating 14+ specialist agents (profiling, cleaning, feature engineering, ML benchmarking, reporting) that autonomously converts raw datasets into production-ready ML projects from a natural-language goal. Features a FastAPI backend with REST APIs and real-time SSE log streaming, a React + Vite frontend deployed independently on Render and Vercel, automated model selection by benchmarking 10+ algorithms (XGBoost, CatBoost, LightGBM, Random Forest), leakage-guard validation with Pytest test suites, and multi-provider LLM orchestration (Claude, GPT, Gemini, Groq, local Ollama) via LangChain.",
    techTags: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "LangChain",
      "Scikit-learn",
      "XGBoost",
      "Pytest",
      "Render",
      "Vercel",
    ],
    links: {
      github: "https://github.com/PiyushAnand2006",
      demo: "https://autonomous-data-science-ai-agent.vercel.app/",
    },
    isFlagship: true,
  },
  {
    id: "agrisense-ai",
    number: "02",
    badge: "🌾 ML Platform",
    title: "AgriSense AI – Agricultural Intelligence Platform",
    description:
      "A production-grade full-stack platform (FastAPI + React/TypeScript) serving ML-driven crop recommendations across 22 crops via a versioned REST API (/api/v1) with Swagger documentation. The tuned SVM model achieves 98.68% accuracy on standard validation and 89.20% on a 50,000-sample stress test. Includes a PostgreSQL (Supabase) schema with Row-Level Security across 13 tables, JWT authentication, Redis caching, and live external API integrations (weather and mandi market prices) with bilingual English/Hindi support.",
    techTags: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Docker",
      "React",
      "TypeScript",
      "Render",
      "Vercel",
    ],
    links: {
      github: "https://github.com/PiyushAnand2006",
      demo: "https://agri-sense-ai-nine.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "swasthsetu",
    number: "03",
    badge: "🏆 Hackathon 2025",
    title: "SwasthSetu – Care Continuity Platform",
    description:
      "A role-based healthcare workflow platform built with a 3-member team for reception and doctor staff, powered by 7 REST API endpoints across authentication, patient search, consent, and records. Implements OTP-based consent verification, a route-protected role system with session-cookie authentication, an emergency-first FIFO-fallback triage queue with real-time doctor assignment across 6 medical specialties, and a MongoDB data-access layer with automatic in-memory fallback so the demo runs reliably without external infrastructure.",
    techTags: ["Next.js", "React", "TypeScript", "MongoDB"],
    links: {
      github: "https://github.com/PiyushAnand2006",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Google AI Essentials",
      issuer: "Google via Coursera · May 2026",
      icon: "🧠",
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte · September 2026",
      icon: "💼",
    },
    {
      name: "Ideatattva IDEATHON",
      issuer: "Nikshatra E-summit · Nov 2025",
      icon: "🏆",
    },
    {
      name: "Understanding Agentic AI",
      issuer: "Digital Workforce Services Plc · May 2026",
      icon: "🤖",
    },
  ],
  viewAllUrl: "https://drive.google.com/drive/folders/1ZTTxdXfKaevXd3dKHAfCmBq11m2k-aLh?usp=sharing",
};

export const education = {
  degree: "Bachelor's Degree – Computer Science (Data Science)",
  institution: "Bangalore Institute of Technology",
  cgpa: "9.46",
  graduation: "2028",
  twelfth: "Class XII – Doon Global School",
  tenth: "Class X – D.A.V. Public School",
};

export const footerContent = {
  taglines: [
    "Data Science & Machine Learning",
    "Python · React · Node.js",
    "GenAI & Full-Stack Applications",
  ],
  credential: "B.Tech CSE (Data Science) · CGPA 9.46",
  copyright: `© ${new Date().getFullYear()} Piyush Anand | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
