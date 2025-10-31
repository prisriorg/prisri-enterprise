"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"hourly" | "project">("project");

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small projects and MVPs",
      hourlyRate: "$25",
      projectPrice: "$800",
      features: [
        "Basic web/mobile app",
        "Up to 5 pages/screens",
        "Responsive design",
        "Basic backend integration",
        "1 month support",
        "Source code included",
        "2 revisions",
      ],
      popular: false,
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      name: "Professional",
      description: "For growing businesses with complex needs",
      hourlyRate: "$50",
      projectPrice: "$1,500",
      features: [
        "Advanced web/mobile app",
        "Unlimited pages/screens",
        "Custom UI/UX design",
        "Full backend development",
        "API integrations",
        "3 months support",
        "Admin panel",
        "5 revisions",
        "Performance optimization",
      ],
      popular: true,
      gradient: "from-purple-600 to-pink-500",
    },
    {
      name: "Enterprise",
      description: "For large-scale applications",
      hourlyRate: "$100",
      projectPrice: "Custom",
      features: [
        "Enterprise-grade solution",
        "Microservices architecture",
        "Advanced security features",
        "Multi-platform deployment",
        "Cloud infrastructure setup",
        "DevOps & CI/CD",
        "6 months support",
        "Dedicated team",
        "Unlimited revisions",
        "24/7 monitoring",
        "Training & documentation",
      ],
      popular: false,
      gradient: "from-orange-600 to-red-500",
    },
  ];

  const servicePackages = [
    {
      icon: "📱",
      name: "Mobile App Development",
      description: "Native or cross-platform apps",
      startingPrice: "$3,000",
      features: ["iOS & Android", "React Native/Flutter", "App store submission"],
    },
    {
      icon: "🌐",
      name: "Web Development",
      description: "Modern, responsive websites",
      startingPrice: "$2,000",
      features: ["Next.js/React", "SEO optimized", "CMS integration"],
    },
    {
      icon: "⚙️",
      name: "Backend & API",
      description: "Scalable backend systems",
      startingPrice: "$2,500",
      features: ["REST/GraphQL API", "Database design", "Authentication"],
    },
    {
      icon: "☁️",
      name: "Cloud & DevOps",
      description: "Infrastructure & deployment",
      startingPrice: "$1,500",
      features: ["AWS/Azure/GCP", "CI/CD pipelines", "Monitoring setup"],
    },
    {
      icon: "🛡️",
      name: "Testing & QA",
      description: "Comprehensive testing services",
      startingPrice: "$1,000",
      features: ["Automated testing", "Security audit", "Performance testing"],
    },
    {
      icon: "🔧",
      name: "Maintenance & Support",
      description: "Ongoing technical support",
      startingPrice: "$500/month",
      features: ["Bug fixes", "Updates", "24/7 support"],
    },
  ];

  const addons = [
    { name: "UI/UX Design", price: "$500 - $2,000" },
    { name: "Database Migration", price: "$800 - $3,000" },
    { name: "Third-party Integration", price: "$300 - $1,500" },
    { name: "Payment Gateway Setup", price: "$500 - $1,000" },
    { name: "Push Notifications", price: "$400 - $800" },
    { name: "Admin Dashboard", price: "$1,500 - $4,000" },
    { name: "Analytics Integration", price: "$300 - $700" },
    { name: "SEO Optimization", price: "$500 - $2,000" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-slate-800/50 rounded-full p-1 border border-slate-700">
            <button
              onClick={() => setBillingCycle("project")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === "project"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Project-Based
            </button>
            <button
              onClick={() => setBillingCycle("hourly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === "hourly"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Hourly Rate
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 rounded-2xl p-8 border transition-all duration-500 hover:scale-105 ${
                  plan.popular
                    ? "border-purple-500 shadow-2xl shadow-purple-500/20"
                    : "border-slate-700 hover:border-slate-600"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-white">
                      {billingCycle === "hourly" ? plan.hourlyRate : plan.projectPrice}
                    </span>
                    {billingCycle === "hourly" && (
                      <span className="text-slate-400 text-lg">/hour</span>
                    )}
                  </div>
                  {billingCycle === "project" && plan.projectPrice !== "Custom" && (
                    <p className="text-slate-500 text-sm">Starting price</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-300">
                      <svg
                        className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/quote"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:shadow-purple-500/50`
                      : "bg-slate-700 text-white hover:bg-slate-600"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-slate-400">
              Individual services with flexible pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePackages.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-400">
                    {service.startingPrice}
                  </span>
                  <span className="text-slate-500 text-sm ml-2">
                    {service.startingPrice.includes("month") ? "" : "starting"}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-slate-400 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Optional Add-ons
            </h2>
            <p className="text-xl text-slate-400">
              Enhance your project with additional features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2">{addon.name}</h4>
                <p className="text-purple-400 font-bold">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Pricing FAQs
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Do you offer custom pricing?",
                a: "Yes! For enterprise projects or unique requirements, we provide custom quotes tailored to your specific needs.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank transfers, UPI, credit/debit cards, and international payment methods like PayPal and Stripe.",
              },
              {
                q: "Is there a refund policy?",
                a: "Yes, we offer refunds within 7 days of project start if you're not satisfied. Please check our refund policy for details.",
              },
              {
                q: "Do you provide maintenance after project completion?",
                a: "All packages include initial support. Extended maintenance plans are available starting at $500/month.",
              },
              {
                q: "Can I upgrade my plan later?",
                a: "Absolutely! You can upgrade to a higher tier at any time during the project.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <summary className="cursor-pointer p-6 font-semibold text-white flex justify-between items-center">
                  {faq.q}
                  <svg
                    className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-slate-400">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Not Sure Which Plan to Choose?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project requirements and find the perfect
              solution for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "✅", text: "No Hidden Fees" },
              { icon: "🔒", text: "Secure Payments" },
              { icon: "💯", text: "Money-back Guarantee" },
              { icon: "📞", text: "24/7 Support" },
            ].map((item, index) => (
              <div key={index} className="group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="text-slate-300 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}