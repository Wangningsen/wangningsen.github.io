export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type InterestPillar = {
  title: string;
  description: string;
};

export type TimelineEntry = {
  dateLabel: string;
  detail: string;
  href?: string;
};

export const siteConfig = {
  name: "Ningsen Wang",
  chineseName: "", // Optional: add Chinese name if you want bilingual display.
  roleLine: "Young medical AI researcher focused on multimodal, verifiable, and clinically useful intelligence.",
  shortBio:
    "I am a senior in Computer Science at Fudan University focused on medical AI, especially multimodal vision-language models. I currently build data-centric pipelines for high-quality medical VQA and explore RL-style fine-tuning of large VLMs for trustworthy step-by-step reasoning and medical deep research agents.",
  affiliation: [
    "B.S. Student in Computer Science, Fudan University",
    "Research Intern, UCSC VLAA (remote)"
  ],
  email: "22307130058@m.fudan.edu.cn",
  avatar: "/assets/headshot.png",
  cvUrl: "/assets/CV_1031.pdf",
  socialLinks: [
    { label: "Email", href: "mailto:22307130058@m.fudan.edu.cn", external: true },
    { label: "GitHub", href: "https://github.com/Wangningsen", external: true },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ningsen-wang-b1a671382/",
      external: true
    },
    { label: "Twitter", href: "https://x.com/NingsenW66582", external: true }
  ] as LinkItem[],
  primaryCtas: [
    { label: "Download CV", href: "/assets/CV_1031.pdf", external: true },
    { label: "Email", href: "mailto:22307130058@m.fudan.edu.cn", external: true },
    { label: "GitHub", href: "https://github.com/Wangningsen", external: true },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ningsen-wang-b1a671382/",
      external: true
    }
    // TODO: Add Google Scholar here if/when you want it shown as a primary CTA.
  ] as LinkItem[],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "CV", href: "/assets/CV_1031.pdf", external: true }
  ] as LinkItem[],
  researchInterests: [
    {
      title: "Multimodal Medical VLMs",
      description:
        "Developing visual-language systems that reason over medical images, reports, and clinical documents."
    },
    {
      title: "Data-Centric Medical VQA",
      description:
        "Building synthesis and verification pipelines for high-quality, medically grounded question-answer data."
    },
    {
      title: "Trustworthy Reasoning",
      description:
        "Studying RL-style fine-tuning and verifiable step-by-step reasoning for safer clinical AI deployment."
    }
  ] as InterestPillar[],
  aboutNarrative: [
    "I am a computer science undergraduate at Fudan University working at the intersection of multimodal learning and medical AI. My current focus is building data-centric pipelines for medical visual question answering and improving reliability in long-chain reasoning.",
    "As a research intern at UCSC VLAA, I work with Prof. Yuyin Zhou and collaborators on reproducible methods for clinically useful AI systems. I care deeply about open research artifacts, careful evaluation, and practical impact."
  ],
  timeline: [
    {
      dateLabel: "2026.01",
      detail: "MedVLSynther accepted to ICLR 2026.",
      href: "https://arxiv.org/abs/2510.25867"
    },
    {
      dateLabel: "2025.10",
      detail: "Released MedVLSynther preprint on multimodal verifiable QA synthesis.",
      href: "https://arxiv.org/abs/2510.25867"
    },
    {
      dateLabel: "2025.07",
      detail: "Joined UCSC VLAA as a research intern (remote).",
      href: "https://ucsc-vlaa.github.io/index.html"
    }
  ] as TimelineEntry[],
  collaborationNote:
    "TODO: Add collaboration, mentoring, and open-source details as your portfolio grows.",
  seo: {
    defaultTitle: "Ningsen Wang | Medical AI Researcher",
    defaultDescription:
      "Personal academic website of Ningsen Wang, focused on multimodal medical AI, data-centric VQA, and trustworthy reasoning.",
    ogImage: "/assets/headshot.png"
  }
} as const;

export const footerLinks: LinkItem[] = [
  { label: "Email", href: "mailto:22307130058@m.fudan.edu.cn", external: true },
  { label: "GitHub", href: "https://github.com/Wangningsen", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ningsen-wang-b1a671382/",
    external: true
  },
  { label: "RSS", href: "/rss.xml" }
];
