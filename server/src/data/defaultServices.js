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
  consultingCall: {
    tag: "BOOK A CALL",
    title: "Book a Consulting Call",
    description:
      "Share a few details about your business and we'll schedule a focused conversation with our consultants.",
    submitLabel: "Request a call",
    images: [
      {
        id: "consult-img-1",
        src: "/images/service-consulting.jpg",
        alt: "Consultants collaborating in a meeting",
      },
      {
        id: "consult-img-2",
        src: "/images/service-compliance.jpg",
        alt: "Team reviewing strategy documents",
      },
      {
        id: "consult-img-3",
        src: "/images/about-hero.jpg",
        alt: "Modern office overlooking the city",
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
