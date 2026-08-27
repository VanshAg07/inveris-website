const defaultServices = {
  hero: {
    tag: "OUR SERVICES",
    title: "Integrated Solutions. Stronger Businesses.",
    description:
      "We bring together strategy, people, finance, compliance, and assurance—so your business can operate efficiently, make better decisions, and scale with confidence.",
    image: "/images/about-hero.jpg",
    imageAlt: "Modern conference room overlooking city skyline",
  },
  offer: {
    tag: "WHAT WE OFFER",
    title: "One Partner. Four Core Service Lines. Complete Coverage.",
    description:
      "Our integrated service lines work together to address the most important aspects of your business—helping you reduce complexity, strengthen your foundation, and accelerate growth.",
    serviceLines: [
      {
        id: "line-1",
        title: "Management Consulting",
        description:
          "We help organizations solve complex business challenges, improve performance, and unlock new opportunities for growth.",
        items: [
          "Business Growth Strategies",
          "Scaling Operations",
          "Productivity Improvement",
          "Business Transformation",
        ],
        image: "/images/service-consulting.jpg",
        icon: "consulting",
        imagePosition: "right",
      },
      {
        id: "line-2",
        title: "Recruitment",
        description:
          "We help businesses build high-performing teams by attracting, evaluating, and hiring the right talent.",
        items: [
          "Hiring Best Practices",
          "Talent Acquisition Trends",
          "Interview Frameworks",
        ],
        image: "/images/service-recruitment.jpg",
        icon: "recruitment",
        imagePosition: "left",
      },
      {
        id: "line-3",
        title: "Compliance & Financial Services",
        description:
          "We help organizations strengthen financial management, ensure compliance, and build a culture of transparency and control.",
        items: [
          "Financial Reporting",
          "Regulatory Compliance",
          "Risk & Control Advisory",
          "Process & Policy Design",
        ],
        image: "/images/service-compliance.jpg",
        icon: "compliance",
        imagePosition: "right",
      },
      {
        id: "line-4",
        title: "Internal Audit",
        description:
          "We provide independent assurance and insights that help organizations improve governance, mitigate risk, and strengthen operational effectiveness.",
        items: [
          "Operational Risk Assessment",
          "Internal Controls Review",
          "Audit & Assurance",
          "Governance Support",
        ],
        image: "/images/service-audit.jpg",
        icon: "audit",
        imagePosition: "left",
      },
    ],
  },
  whyItMatters: {
    tag: "WHY IT MATTERS",
    title: "Connected Expertise. Better Outcomes.",
    items: [
      {
        id: "why-1",
        title: "End-to-End Support",
        description:
          "Address multiple business priorities through a single, trusted partner.",
        icon: "network",
      },
      {
        id: "why-2",
        title: "Aligned Solutions",
        description:
          "Our service lines work together to deliver practical, coordinated solutions.",
        icon: "target",
      },
      {
        id: "why-3",
        title: "Better Decisions",
        description:
          "Access the right information and expertise to make confident decisions.",
        icon: "chart",
      },
      {
        id: "why-4",
        title: "Stronger Foundations",
        description:
          "Build resilient systems, controls, and processes that support sustainable growth.",
        icon: "shield",
      },
      {
        id: "why-5",
        title: "Long-Term Partnership",
        description:
          "We stay engaged beyond the project to help you evolve and scale.",
        icon: "users",
      },
    ],
  },
  cta: {
    title: "Let's Build What's Next. Together.",
    description:
      "Whether you're scaling, transforming, or solving complex business challenges—we're here to help you grow with clarity, confidence, and the right support.",
    cta: { label: "Start a Conversation", href: "/contact" },
  },
};

module.exports = { defaultServices };
