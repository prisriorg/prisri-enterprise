"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", count: 24, icon: "📚" },
    { name: "Web Development", count: 8, icon: "🌐" },
    { name: "Mobile Apps", count: 6, icon: "📱" },
    { name: "Cloud & DevOps", count: 5, icon: "☁️" },
    { name: "AI & Machine Learning", count: 4, icon: "🤖" },
    { name: "Blockchain", count: 3, icon: "⛓️" },
    { name: "Tutorials", count: 10, icon: "📖" },
    { name: "Case Studies", count: 6, icon: "📊" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Microservices with Node.js and Docker",
      excerpt:
        "Learn how to architect and deploy microservices using modern containerization techniques for enterprise applications.",
      category: "Web Development",
      author: "Priya Sharma",
      date: "Oct 28, 2025",
      readTime: "8 min read",
      image: "/blog/microservices.jpg",
      tags: ["Node.js", "Docker", "Microservices"],
      featured: true,
    },
    {
      id: 2,
      title: "React Native vs Flutter: Choosing the Right Framework in 2025",
      excerpt:
        "A comprehensive comparison of the two leading cross-platform mobile frameworks to help you make an informed decision.",
      category: "Mobile Apps",
      author: "Rahul Kumar",
      date: "Oct 25, 2025",
      readTime: "10 min read",
      image: "/blog/react-flutter.jpg",
      tags: ["React Native", "Flutter", "Mobile"],
      featured: true,
    },
    {
      id: 3,
      title: "Implementing CI/CD Pipelines with GitHub Actions",
      excerpt:
        "Step-by-step guide to automating your deployment workflow using GitHub Actions for faster and more reliable releases.",
      category: "Cloud & DevOps",
      author: "Amit Patel",
      date: "Oct 22, 2025",
      readTime: "12 min read",
      image: "/blog/cicd.jpg",
      tags: ["CI/CD", "GitHub Actions", "DevOps"],
      featured: false,
    },
    {
      id: 4,
      title: "Getting Started with Machine Learning using Python",
      excerpt:
        "An introductory guide to machine learning concepts and implementing your first ML model using Python and TensorFlow.",
      category: "AI & Machine Learning",
      author: "Sneha Reddy",
      date: "Oct 20, 2025",
      readTime: "15 min read",
      image: "/blog/ml-python.jpg",
      tags: ["Python", "Machine Learning", "TensorFlow"],
      featured: false,
    },
    {
      id: 5,
      title: "Smart Contract Development with Solidity: Best Practices",
      excerpt:
        "Essential security practices and optimization techniques for building robust smart contracts on Ethereum.",
      category: "Blockchain",
      author: "Vikram Singh",
      date: "Oct 18, 2025",
      readTime: "11 min read",
      image: "/blog/solidity.jpg",
      tags: ["Blockchain", "Solidity", "Ethereum"],
      featured: false,
    },
    {
      id: 6,
      title: "Next.js 14: Server Actions and New Features Deep Dive",
      excerpt:
        "Explore the latest features in Next.js 14 including server actions, improved performance, and enhanced developer experience.",
      category: "Web Development",
      author: "Priya Sharma",
      date: "Oct 15, 2025",
      readTime: "9 min read",
      image: "/blog/nextjs14.jpg",
      tags: ["Next.js", "React", "Web Dev"],
      featured: false,
    },
    {
      id: 7,
      title: "Case Study: Building a Real-time Chat App with WebSockets",
      excerpt:
        "How we built a scalable real-time messaging platform handling 100K+ concurrent users using WebSockets and Redis.",
      category: "Case Studies",
      author: "Team Prisri",
      date: "Oct 12, 2025",
      readTime: "14 min read",
      image: "/blog/chat-app.jpg",
      tags: ["WebSockets", "Real-time", "Scaling"],
      featured: true,
    },
    {
      id: 8,
      title: "TypeScript Advanced Types: A Practical Guide",
      excerpt:
        "Master advanced TypeScript concepts including conditional types, mapped types, and template literal types with real examples.",
      category: "Tutorials",
      author: "Rahul Kumar",
      date: "Oct 10, 2025",
      readTime: "13 min read",
      image: "/blog/typescript.jpg",
      tags: ["TypeScript", "JavaScript", "Tutorial"],
      featured: false,
    },
    {
      id: 9,
      title: "Optimizing React Performance: Tips and Techniques",
      excerpt:
        "Learn proven strategies to optimize your React applications including code splitting, memoization, and lazy loading.",
      category: "Web Development",
      author: "Amit Patel",
      date: "Oct 8, 2025",
      readTime: "10 min read",
      image: "/blog/react-perf.jpg",
      tags: ["React", "Performance", "Optimization"],
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tech Blog & Insights
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Stay updated with the latest trends, tutorials, and insights in
            software development
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search articles, tutorials, case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 rounded-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white"
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === category.name
                      ? "bg-white/20"
                      : "bg-slate-700"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && !searchQuery && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-white">Featured Posts</h2>
              <span className="text-purple-400">⭐ Editor's Pick</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                >
                  <div className="relative h-48 bg-slate-700 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                        <div>
                          <p className="text-xs text-white font-medium">
                            {post.author}
                          </p>
                          <p className="text-xs text-slate-500">{post.date}</p>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
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
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">
              {selectedCategory === "All" ? "Latest Posts" : selectedCategory}
            </h2>
            <span className="text-slate-400">
              {filteredPosts.length} articles
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No articles found
              </h3>
              <p className="text-slate-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-48 bg-slate-700 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                        <div>
                          <p className="text-xs text-white font-medium">
                            {post.author}
                          </p>
                          <p className="text-xs text-slate-500">{post.date}</p>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
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
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-slate-800 border border-slate-700 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
            <div className="text-5xl mb-4">📧</div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest articles, tutorials, and tech insights delivered to
              your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              Join 10,000+ developers getting weekly updates
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}