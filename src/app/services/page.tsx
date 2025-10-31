import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Software Development",
      icon: "💻",
      description:
        "Tailor-made desktop, mobile, and enterprise software applications",
      features: [
        "Development using latest technologies (Java, Kotlin, TypeScript, Python, Rust, etc.)",
        "Enterprise-grade solutions",
        "Scalable architecture design",
        "Cross-platform compatibility",
      ],
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      description: "Native and cross-platform mobile applications",
      features: [
        "Android & iOS development",
        "React Native, Flutter, Compose Multiplatform",
        "App store deployment",
        "Maintenance and updates",
      ],
      gradient: "from-purple-600 to-pink-500",
    },
    {
      title: "Backend Development & API Integration",
      icon: "⚙️",
      description: "Scalable backend systems and API development",
      features: [
        "REST and GraphQL APIs",
        "Node.js, Golang, Python backends",
        "Third-party integrations (payment, SMS, social)",
        "Microservices architecture",
      ],
      gradient: "from-green-600 to-emerald-500",
    },
    {
      title: "Software Customization & Modernization",
      icon: "🔧",
      description: "Optimize and modernize existing software",
      features: [
        "Legacy system migration",
        "Code refactoring",
        "Feature enhancement",
        "Performance optimization",
      ],
      gradient: "from-orange-600 to-red-500",
    },
    {
      title: "Software Testing & QA",
      icon: "🛡️",
      description: "Comprehensive testing and quality assurance",
      features: [
        "Manual and automated testing",
        "Performance testing",
        "Security audits",
        "Continuous integration testing",
      ],
      gradient: "from-yellow-600 to-orange-500",
    },
    {
      title: "Database Design & Management",
      icon: "🗄️",
      description: "Database architecture and optimization",
      features: [
        "PostgreSQL, MySQL, MongoDB",
        "Data migration solutions",
        "Query optimization",
        "Backup and recovery",
      ],
      gradient: "from-indigo-600 to-blue-500",
    },
    {
      title: "Cloud Deployment & DevOps",
      icon: "☁️",
      description: "Cloud infrastructure and CI/CD pipelines",
      features: [
        "AWS, Azure, GCP deployment",
        "Docker & Kubernetes",
        "Infrastructure as Code",
        "Monitoring and alerting",
      ],
      gradient: "from-cyan-600 to-teal-500",
    },
    {
      title: "IoT & Embedded Systems",
      icon: "🔌",
      description: "Smart device and IoT solutions",
      features: [
        "Firmware development",
        "Cloud-connected hardware",
        "Real-time data collection",
        "Edge computing",
      ],
      gradient: "from-violet-600 to-purple-500",
    },
    {
      title: "Blockchain & Web3",
      icon: "⛓️",
      description: "Blockchain integration and DApp development",
      features: [
        "Smart contract development",
        "NFT marketplace",
        "Cryptocurrency integration",
        "Decentralized applications",
      ],
      gradient: "from-pink-600 to-rose-500",
    },
    {
      title: "Technical Consultation & Support",
      icon: "💡",
      description: "Expert guidance and ongoing support",
      features: [
        "Architecture planning",
        "Code audit",
        "Performance improvement",
        "24/7 technical support",
      ],
      gradient: "from-emerald-600 to-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive software development solutions tailored to your
            business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}
                ></div>
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-slate-500 flex items-start"
                      >
                        <svg
                          className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/quote"
                    className={`inline-flex items-center text-white bg-gradient-to-r ${service.gradient} px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300`}
                  >
                    Get Quote
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            We can build exactly what you need. Let's discuss your requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}