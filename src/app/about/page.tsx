export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Empowering businesses with innovative software solutions since our
            inception
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400">
                To deliver cutting-edge software solutions that transform
                businesses and drive digital innovation across industries.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400">
                To be a global leader in custom software development, recognized
                for excellence, innovation, and client satisfaction.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-slate-400">
                Innovation, integrity, collaboration, and excellence in every
                project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Company Profile
          </h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-slate-300 mb-4 leading-relaxed">
              Prisri Enterprise is a professional software development company
              specializing in custom software solutions, mobile applications,
              cloud services, and digital transformation.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Registered under NIC Code 62011 (Computer Programming Activities),
              we provide comprehensive software development services to clients
              across various industries.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Industry Classification
                </h4>
                <p className="text-slate-400">NIC Code: 62011</p>
                <p className="text-slate-400">
                  Computer Programming Activities
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Expertise
                </h4>
                <p className="text-slate-400">10+ Technologies</p>
                <p className="text-slate-400">500+ Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Why Choose Prisri Enterprise?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🚀",
                title: "Fast Delivery",
                desc: "Agile methodology for quick turnaround",
              },
              {
                icon: "💎",
                title: "Quality Assured",
                desc: "Rigorous testing and QA processes",
              },
              {
                icon: "🔒",
                title: "Secure & Scalable",
                desc: "Enterprise-grade security standards",
              },
              {
                icon: "💰",
                title: "Cost Effective",
                desc: "Competitive pricing without compromising quality",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}