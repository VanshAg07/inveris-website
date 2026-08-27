const defaultHome = {
  hero: {
    tag: "ONE PARTNER. CONNECTED EXPERTISE.",
    title: "Your Business Has One Big Picture. Why Get Advice In Pieces?",
    description:
      "Most businesses work with disconnected advisors — one for strategy, another for finance, another for compliance. We bring integrated expertise across consulting, recruitment, compliance, and audit under one accountable partner.",
    primaryCta: { label: "Discover How We Help", href: "/about" },
    secondaryCta: { label: "Explore Our Services", href: "/services" },
    backgroundImage: "/images/hero.jpg",
    backgroundImageAlt: "Modern corporate skyscrapers",
  },
  valuePropositions: [
    {
      id: "vp-1",
      title: "One Point of Accountability",
      description: "A single partner responsible for outcomes across your business needs.",
      icon: "user",
    },
    {
      id: "vp-2",
      title: "Connected Thinking",
      description: "Strategy, finance, compliance, and talent aligned — not siloed.",
      icon: "network",
    },
    {
      id: "vp-3",
      title: "Less Vendor Complexity",
      description: "Fewer handoffs, fewer gaps, and clearer ownership.",
      icon: "layers",
    },
    {
      id: "vp-4",
      title: "Built to Scale",
      description: "Solutions designed to grow with your business, not just solve today's problem.",
      icon: "trending",
    },
    {
      id: "vp-5",
      title: "Faster, Better Decisions",
      description: "Integrated insight means fewer delays and smarter choices.",
      icon: "clock",
    },
    {
      id: "vp-6",
      title: "A Partner Beyond the Project",
      description: "We stay engaged as your business evolves — not just during the engagement.",
      icon: "handshake",
    },
  ],
  about: {
    tag: "ABOUT INVERIS",
    title: "One Partner. Integrated Business Solutions.",
    description:
      "Inveris Solutions LLP helps businesses simplify complexity by bringing consulting, recruitment, compliance, and audit together under one roof. Instead of juggling multiple vendors, you get connected expertise and one accountable partner focused on practical results.",
    cta: { label: "Learn More About Us", href: "/about" },
    backgroundImage: "/images/about-building.jpg",
    features: [
      {
        id: "feat-1",
        title: "Integrated Expertise",
        description: "Strategy, finance, compliance, and talent aligned under one partner.",
        image: "/images/about-1.jpg",
        icon: "puzzle",
      },
      {
        id: "feat-2",
        title: "Practical Approach",
        description: "Solutions designed for real-world execution — not just recommendations.",
        image: "/images/about-2.jpg",
        icon: "target",
      },
      {
        id: "feat-3",
        title: "Accountable Partnership",
        description: "One team responsible for outcomes across your business needs.",
        image: "/images/about-3.jpg",
        icon: "shield",
      },
      {
        id: "feat-4",
        title: "Built for Growth",
        description: "Support that scales with your business as priorities evolve.",
        image: "/images/about-4.jpg",
        icon: "growth",
      },
    ],
  },
  services: {
    tag: "SERVICES",
    title: "Solutions That Work Together for Your Business",
    services: [
      {
        id: "svc-1",
        title: "Management Consulting",
        icon: "briefcase",
        image: "/images/service-consulting.jpg",
        items: [
          "Business Growth Strategies",
          "Operational Efficiency",
          "Scaling Operations",
          "Change Management",
        ],
        href: "/services",
        linkLabel: "Learn More",
      },
      {
        id: "svc-2",
        title: "Recruitment",
        icon: "users",
        image: "/images/service-recruitment.jpg",
        items: [
          "Executive Search",
          "Specialized Talent Acquisition",
          "Workforce Planning",
          "Retention Strategies",
        ],
        href: "/services",
        linkLabel: "Learn More",
      },
      {
        id: "svc-3",
        title: "Compliance & Financial Services",
        icon: "chart",
        image: "/images/service-compliance.jpg",
        items: [
          "Regulatory Compliance",
          "Financial Planning & Analysis",
          "Risk Management",
          "Governance Support",
        ],
        href: "/services",
        linkLabel: "Learn More",
      },
      {
        id: "svc-4",
        title: "Internal Audit",
        icon: "search",
        image: "/images/service-audit.jpg",
        items: [
          "Risk-Based Auditing",
          "Process Reviews",
          "Control Assessments",
          "Compliance Audits",
        ],
        href: "/services",
        linkLabel: "Learn More",
      },
    ],
  },
  approach: {
    tag: "OUR APPROACH",
    title: "A Simple, Proven Approach",
    steps: [
      {
        id: "step-1",
        number: "01",
        title: "Understand",
        description:
          "We start by deeply understanding your business, challenges, and goals — not just the immediate problem.",
        icon: "search",
      },
      {
        id: "step-2",
        number: "02",
        title: "Architect",
        description:
          "We design integrated solutions that connect strategy, operations, finance, and talent.",
        icon: "pen",
      },
      {
        id: "step-3",
        number: "03",
        title: "Execute",
        description:
          "We work alongside your team to implement practical solutions with clear accountability.",
        icon: "play",
      },
      {
        id: "step-4",
        number: "04",
        title: "Evolve",
        description:
          "We stay engaged as your business grows, adapting support as priorities change.",
        icon: "chart",
      },
    ],
  },
  cta: {
    title: "Let's Build What's Next",
    description:
      "Whether you're scaling, restructuring, or strengthening compliance — we're ready to be your integrated partner.",
    cta: { label: "Start a Conversation", href: "/contact" },
    image: "/images/cta.jpg",
    imageAlt: "Inveris branded workspace",
  },
};

module.exports = { defaultHome };
