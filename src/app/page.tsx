"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Custom Software Development",
      icon: "💻",
      description:
        "Tailor-made desktop, mobile, and enterprise software applications",
      details: [
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
      description: "Android and iOS app creation",
      details: [
        "Native and cross-platform apps (React Native, Flutter, Compose Multiplatform)",
        "User-centric design",
        "App store deployment",
        "Ongoing maintenance and updates",
      ],
      gradient: "from-purple-600 to-pink-500",
    },
    {
      title: "Backend Development & API Integration",
      icon: "⚙️",
      description: "Scalable REST and GraphQL API development",
      details: [
        "Secure backend systems with Node.js, Golang, or Python",
        "Third-party API integrations (payment, SMS, social login, etc.)",
        "Microservices architecture",
        "Real-time data processing",
      ],
      gradient: "from-green-600 to-emerald-500",
    },
    {
      title: "Software Customization & Modernization",
      icon: "🔧",
      description: "Modification and optimization of existing software",
      details: [
        "Migration from legacy systems to modern platforms",
        "Code refactoring and optimization",
        "Feature enhancement",
        "Performance tuning",
      ],
      gradient: "from-orange-600 to-red-500",
    },
    {
      title: "Software Testing & Quality Assurance",
      icon: "🛡️",
      description: "Manual and automated testing",
      details: [
        "Performance, security, and usability testing",
        "Continuous integration testing",
        "Bug tracking and resolution",
        "Quality metrics and reporting",
      ],
      gradient: "from-yellow-600 to-orange-500",
    },
    {
      title: "Database Design & Management",
      icon: "🗄️",
      description: "Database architecture and optimization",
      details: [
        "PostgreSQL, MySQL, MongoDB, etc.",
        "Data migration and backup solutions",
        "Query optimization",
        "Data security and compliance",
      ],
      gradient: "from-indigo-600 to-blue-500",
    },
    {
      title: "Cloud Deployment & DevOps Services",
      icon: "☁️",
      description: "CI/CD setup and cloud infrastructure",
      details: [
        "AWS, Azure, GCP deployment",
        "Docker, Kubernetes, and server management",
        "Infrastructure as Code",
        "Monitoring and alerting",
      ],
      gradient: "from-cyan-600 to-teal-500",
    },
    {
      title: "IoT & Embedded Software Solutions",
      icon: "🔌",
      description: "Firmware and IoT integration for smart devices",
      details: [
        "Cloud-connected hardware programming",
        "Real-time data collection",
        "Device management systems",
        "Edge computing solutions",
      ],
      gradient: "from-violet-600 to-purple-500",
    },
    {
      title: "Blockchain & Web3 Development",
      icon: "⛓️",
      description: "Smart contract creation and DApp development",
      details: [
        "Blockchain integration into existing systems",
        "NFT marketplace development",
        "Cryptocurrency wallet integration",
        "Decentralized application architecture",
      ],
      gradient: "from-pink-600 to-rose-500",
    },
    {
      title: "Technical Consultation & Support",
      icon: "💡",
      description: "Project architecture planning",
      details: [
        "Performance improvement and code audit",
        "Maintenance and technical support",
        "Technology stack selection",
        "Scalability planning",
      ],
      gradient: "from-emerald-600 to-green-500",
    },
  ];

  const technologies = [
    { name: "Java", color: "bg-red-500" },
    { name: "Kotlin", color: "bg-purple-500" },
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "Python", color: "bg-yellow-500" },
    { name: "Rust", color: "bg-orange-500" },
    { name: "React Native", color: "bg-cyan-500" },
    { name: "Flutter", color: "bg-blue-400" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Golang", color: "bg-cyan-600" },
    { name: "PostgreSQL", color: "bg-blue-600" },
    { name: "MongoDB", color: "bg-green-600" },
    { name: "AWS", color: "bg-orange-400" },
    { name: "Azure", color: "bg-blue-500" },
    { name: "Docker", color: "bg-blue-400" },
    { name: "Kubernetes", color: "bg-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      {/* <nav
        className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/95 border-slate-800 shadow-2xl shadow-purple-500/10"
            : "bg-slate-900/80 border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative h-8 w-32 sm:h-10 sm:w-40 md:h-12 md:w-48 transition-all duration-300 hover:scale-105">
                <Image
                  src="/PRISRI_ENTERPRISE_Logo.png"
                  alt="Prisri Enterprise Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-slate-300 hover:text-white transition-all duration-300 relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#technologies"
                className="text-slate-300 hover:text-white transition-all duration-300 relative group"
              >
                Technologies
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-white transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            <button className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              Get Started
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-4">
              <a
                href="#services"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#technologies"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Technologies
              </a>
              <a
                href="#contact"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-slate-300 text-sm">
              Available for new projects
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Transform Your Ideas
            </span>
            <br />
            <span className="text-white">Into Digital Reality</span>
          </h1>

          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            We provide customized software development and programming solutions
            using cutting-edge technologies. From concept to deployment, we
            bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <a
              href="#services"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 flex items-center justify-center"
            >
              Explore Services
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
            </a>
            <a
              href="#contact"
              className="border-2 border-slate-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 hover:scale-105"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive software development solutions tailored to your
              business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2"
                onMouseEnter={() => setActiveService(index)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}
                ></div>

                <div className="relative">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-4 transition-colors duration-300 group-hover:text-slate-300">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-slate-500 flex items-start opacity-0 group-hover:opacity-100 transition-all duration-500"
                        style={{ transitionDelay: `${idx * 100}ms` }}
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
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-slate-400">
              Leveraging the latest and most powerful tools in the industry
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 rounded-full px-6 py-3 hover:border-slate-600 transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`absolute inset-0 ${tech.color} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500`}
                ></div>
                <span className="relative text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "250+", label: "Happy Clients" },
              { number: "15+", label: "Technologies" },
              { number: "99%", label: "Success Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                  {stat.number}
                </div>
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with
              innovative software solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 focus:bg-white/20"
              />
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold text-white">
                  Prisri Enterprise
                </span>
              </div>
              <p className="text-slate-400">
                Transforming ideas into powerful digital solutions with
                cutting-edge technology and expert craftsmanship.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Software Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>&copy; 2025 Prisri Enterprise. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
}
