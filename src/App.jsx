import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  User,
  MapPin,
  Trophy,
  Code,
  BookOpen,
  Target,
  Award,
  Users,
  Mail,
  Phone,
  MapIcon,
  Github,
  Facebook,
  Instagram,
  Linkedin,
  Moon,
  Sun,
  ChevronDown,
  ChevronRight,
  Star,
  Zap,
  Brain,
  Database,
  BarChart3,
  CheckCircle,
  ArrowUp,
} from "lucide-react";

const MiniaICPCCommunity = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [darkMode, setDarkMode] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedLevel, setExpandedLevel] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const scrollRef = useRef();

  // Community images rotation
  const communityImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % communityImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [communityImages.length]);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      // Animate elements on scroll
      const elements = document.querySelectorAll("[data-animate]");
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (
          rect.top < window.innerHeight * 0.8 &&
          !animatedElements.has(index)
        ) {
          el.classList.add("animate-in");
          setAnimatedElements((prev) => new Set([...prev, index]));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animatedElements]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const roadmapData = [
    {
      level: 0,
      title: "Programming Fundamentals",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      problems: 150,
      contests: 8,
      topics: [
        "Variables & Data Types",
        "Loops & Conditions",
        "Functions",
        "Arrays",
        "Strings",
        "Basic Math",
      ],
      resources: [
        "C++ Basics Sheet",
        "Problem Solving Beginner",
        "HackerRank 30 Days",
      ],
    },
    {
      level: 1,
      title: "Data Structures & Algorithms",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      problems: 200,
      contests: 12,
      topics: [
        "Stack & Queue",
        "Linked Lists",
        "Trees",
        "Sorting",
        "Searching",
        "Recursion",
      ],
      resources: ["DS & Algo Sheet", "LeetCode Easy", "GeeksforGeeks Practice"],
    },
    {
      level: 2,
      title: "Advanced Algorithms",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      problems: 250,
      contests: 15,
      topics: [
        "Dynamic Programming",
        "Graph Algorithms",
        "Greedy",
        "Divide & Conquer",
        "Number Theory",
      ],
      resources: ["Codeforces Gym", "AtCoder Problems", "SPOJ Classical"],
    },
  ];

  const teamMembers = [
    {
      name: "Yossef Behaa",
      role: "Community Manager",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/yossef.jpeg?raw=true",
      about:
        "Leading our community with 5+ years of competitive programming experience",
      links: { github: "#", linkedin: "#" },
    },
    {
      name: "Mazen Mohamed",
      role: "Problem Setter & Mentor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/MazenImg.jpg?raw=true",
      about: "Creates challenging problems for our contests and training",
      links: {
        github: "https://github.com/Mazen-mo-10",
        linkedin: "https://www.linkedin.com/in/mazenmohamed2212/",
      },
    },
    {
      name: "Anas Mohamed",
      role: "Mentor",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      about: "Guides newcomers through their competitive programming journey",
      links: { github: "#", linkedin: "#" },
    },
    {
      name: "Steven Ezzat",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      about: "Manages our social media presence and community events",
      links: { instagram: "#", facebook: "#" },
    },
  ];

  const HomePage = () => (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 transition-all duration-1000">
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${communityImages[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: darkMode ? 0.2 : 0.1,
          }}
        />
        <div
          className={`absolute inset-0 ${
            darkMode ? "bg-gray-900/80" : "bg-white/70"
          }`}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${
              darkMode ? "bg-blue-400" : "bg-blue-600"
            } rounded-full opacity-30 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className="mb-8 transform transition-all duration-1000 hover:scale-105"
            data-animate
          >
            <h1
              className={`text-6xl md:text-8xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              } tracking-tight`}
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Minia National ICPC
              </span>
            </h1>
            <h2
              className={`text-2xl md:text-3xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } font-light mb-8`}
            >
              Competitive Programming Community
            </h2>
          </div>

          <div
            className={`${
              darkMode ? "text-gray-400" : "text-gray-700"
            } text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto`}
            data-animate
          >
            <p className="mb-6">
              🏆 We are the elite competitive programming community of Minia
              National University, where passion meets excellence in algorithmic
              problem solving.
            </p>
            <p>
              🚀 Join 280+ members on an incredible journey from beginner to
              ICPC finalist. Together, we code, compete, and conquer!
            </p>
          </div>

          <div className="flex gap-6 justify-center" data-animate>
            <button
              onClick={() => setCurrentPage("about")}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-3"
            >
              <span>Discover Our Journey</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setCurrentPage("roadmap")}
              className={`px-8 py-4 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              } rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-3`}
            >
              <MapPin className="w-5 h-5" />
              <span>Start Learning</span>
            </button>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            data-animate
          >
            {[
              { number: "280+", label: "Members" },
              { number: "50+", label: "Contests" },
              { number: "1", label: "ECPC Finals" },
              { number: "5", label: "Divisions" }, // mentors , problem setters , admins , media team , paricipants
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div
                  className={`text-3xl font-bold ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  } mb-2`}
                >
                  {stat.number}
                </div>
                <div
                  className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen py-20 px-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <h1
            className={`text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Story
            </span>
          </h1>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            From humble beginnings to ECPC finalists - our journey of growth,
            dedication, and success
          </p>
        </div>

        {/* Story Timeline */}
        <div className="space-y-12" data-animate>
          {[
            {
              year: "2025",
              title: "The Beginning",
              content:
                "Started as a small group of passionate programmers with big dreams and endless determination.",
              icon: <Star className="w-6 h-6" />,
            },
            {
              year: "2024",
              title: "First Major Achievement",
              content:
                "Qualified for our first ECPC finals, marking the beginning of our competitive journey.",
              icon: <Trophy className="w-6 h-6" />,
            },
            {
              year: "2024",
              title: "Community Growth",
              content:
                "Reached 280+ members and established our structured training program with dedicated mentors.",
              icon: <Users className="w-6 h-6" />,
            },
            {
              year: "2024",
              title: "Excellence Continues",
              content:
                "Multiple ECPC finals appearances and recognition as one of Egypt's top university communities.",
              icon: <Award className="w-6 h-6" />,
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-8 items-start group">
              <div
                className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className={`text-2xl font-bold ${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {item.year}
                  </span>
                  <h3
                    className={`text-xl font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } text-lg leading-relaxed`}
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divisions */}
        <div className="mt-20" data-animate>
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Divisions
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Problem Setters",
                icon: <Brain className="w-8 h-8" />,
                description:
                  "Create challenging and educational problems for contests and training",
                color: "from-red-500 to-orange-500",
              },
              {
                name: "Mentors",
                icon: <BookOpen className="w-8 h-8" />,
                description:
                  "Guide and support members through their competitive programming journey",
                color: "from-blue-500 to-cyan-500",
              },
              {
                name: "Admins",
                icon: <Target className="w-8 h-8" />,
                description:
                  "Organize events, manage resources, and ensure smooth operations",
                color: "from-green-500 to-teal-500",
              },
              {
                name: "Media Team",
                icon: <Zap className="w-8 h-8" />,
                description:
                  "Handle social media, documentation, and community outreach",
                color: "from-purple-500 to-pink-500",
              },
            ].map((division, index) => (
              <div
                key={index}
                className={`${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                } p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${division.color} flex items-center justify-center text-white mb-4 mx-auto`}
                >
                  {division.icon}
                </div>
                <h3
                  className={`text-lg font-bold text-center mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {division.name}
                </h3>
                <p
                  className={`text-center ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {division.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const RoadmapPage = () => (
    <div className="min-h-screen py-20 px-6 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <h1
            className={`text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Learning{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h1>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Your journey from beginner to competitive programming expert
          </p>
        </div>

        <div className="space-y-8">
          {roadmapData.map((level, index) => (
            <div
              key={index}
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
              data-animate
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() =>
                  setExpandedLevel(expandedLevel === index ? null : index)
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${level.color} flex items-center justify-center text-white`}
                    >
                      {level.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Level {level.level}: {level.title}
                      </h3>
                      <div className="flex gap-4 mt-2">
                        <span
                          className={`text-sm ${
                            darkMode ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {level.problems} Problems
                        </span>
                        <span
                          className={`text-sm ${
                            darkMode ? "text-green-400" : "text-green-600"
                          }`}
                        >
                          {level.contests} Contests
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } transition-transform duration-300 ${
                      expandedLevel === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              {expandedLevel === index && (
                <div
                  className={`px-6 pb-6 border-t ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4
                        className={`font-semibold mb-3 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        📚 Topics to Master
                      </h4>
                      <div className="space-y-2">
                        {level.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span
                              className={`text-sm ${
                                darkMode ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4
                        className={`font-semibold mb-3 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        🔗 Resources & Practice
                      </h4>
                      <div className="space-y-2">
                        {level.resources.map((resource, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span
                              className={`text-sm ${
                                darkMode
                                  ? "text-blue-400 hover:text-blue-300"
                                  : "text-blue-600 hover:text-blue-700"
                              } cursor-pointer`}
                            >
                              {resource}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const DashboardPage = () => (
    <div className="min-h-screen py-20 px-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <h1
            className={`text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Training{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Tracking */}
          <div
            className={`lg:col-span-2 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } p-6 rounded-2xl shadow-lg border ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
            data-animate
          >
            <h2
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              📊 Progress Tracking
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  label: "Problems Solved",
                  value: "156",
                  color: "text-blue-500",
                },
                {
                  label: "Current Level",
                  value: "Level 1",
                  color: "text-green-500",
                },
                {
                  label: "Contests Participated",
                  value: "23",
                  color: "text-purple-500",
                },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {roadmapData.map((level, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`font-medium ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Level {level.level}: {level.title}
                    </span>
                    <span
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {idx === 0 ? "80%" : idx === 1 ? "45%" : "10%"}
                    </span>
                  </div>
                  <div
                    className={`w-full h-2 ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } rounded-full overflow-hidden`}
                  >
                    <div
                      className={`h-full bg-gradient-to-r ${level.color} transition-all duration-500`}
                      style={{
                        width: idx === 0 ? "80%" : idx === 1 ? "45%" : "10%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Schedule */}
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } p-6 rounded-2xl shadow-lg border ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
            data-animate
          >
            <h2
              className={`text-xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              📅 This Week
            </h2>

            <div className="space-y-4">
              {[
                { day: "Monday", event: "DS Workshop", time: "6:00 PM" },
                {
                  day: "Wednesday",
                  event: "Practice Contest",
                  time: "7:00 PM",
                },
                { day: "Friday", event: "Problem Solving", time: "5:00 PM" },
                { day: "Sunday", event: "Upsolving Session", time: "4:00 PM" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 ${
                    darkMode ? "bg-gray-700" : "bg-gray-50"
                  } rounded-lg`}
                >
                  <div
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-gray-900"
                    } mb-1`}
                  >
                    {item.event}
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.day}
                    </span>
                    <span className="text-sm text-blue-500">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Notes */}
          <div
            className={`lg:col-span-3 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } p-6 rounded-2xl shadow-lg border ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
            data-animate
          >
            <h2
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              📝 Personal Notes & Solutions
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Binary Search Notes",
                  problems: 12,
                  date: "2 days ago",
                },
                { title: "DP Solutions", problems: 8, date: "5 days ago" },
                { title: "Graph Algorithms", problems: 15, date: "1 week ago" },
                { title: "String Processing", problems: 6, date: "1 week ago" },
                { title: "Number Theory", problems: 10, date: "2 weeks ago" },
                {
                  title: "Geometry Solutions",
                  problems: 4,
                  date: "3 weeks ago",
                },
              ].map((note, idx) => (
                <div
                  key={idx}
                  className={`p-4 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-50 hover:bg-gray-100"
                  } rounded-lg cursor-pointer transition-all duration-200 hover:scale-105`}
                >
                  <h3
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-gray-900"
                    } mb-2`}
                  >
                    {note.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-sm ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {note.problems} solutions
                    </span>
                    <span
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {note.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CommunityPage = () => (
    <div className="min-h-screen py-20 px-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <h1
            className={`text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Community{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Board
            </span>
          </h1>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Meet the amazing people who make our community thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              } p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              } group relative overflow-hidden`}
              data-animate
            >
              <div className="text-center mb-4">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-transparent group-hover:border-blue-500 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className={`text-lg font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {member.role}
                </p>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-b from-transparent ${
                  darkMode ? "to-gray-900" : "to-white"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6`}
              >
                <div className="text-center">
                  <p
                    className={`text-sm mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {member.about}
                  </p>
                  <div className="flex justify-center gap-3">
                    {Object.entries(member.links).map(
                      ([platform, url], idx) => {
                        const Icon =
                          platform === "github"
                            ? Github
                            : platform === "linkedin"
                            ? Linkedin
                            : platform === "instagram"
                            ? Instagram
                            : Facebook;

                        return (
                          <a
                            key={idx}
                            href={url}
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              darkMode
                                ? "bg-gray-700 hover:bg-gray-600 text-white"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                            } transition-colors duration-200`}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen py-20 px-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <h1
            className={`text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Connect with us and join our growing community of competitive
            programmers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div data-animate>
            <h2
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${
                    darkMode ? "bg-blue-900/30" : "bg-blue-100"
                  } flex items-center justify-center`}
                >
                  <MapIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Location
                  </h3>
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    Minia National University, Faculty of Computer Science
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${
                    darkMode ? "bg-green-900/30" : "bg-green-100"
                  } flex items-center justify-center`}
                >
                  <Mail className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Email
                  </h3>
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    miniaicpc@mnu.edu.eg
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${
                    darkMode ? "bg-purple-900/30" : "bg-purple-100"
                  } flex items-center justify-center`}
                >
                  <Phone className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Phone
                  </h3>
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    +20 123 456 7890
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "#", color: "gray" },
                  { icon: Facebook, href: "#", color: "blue" },
                  { icon: Instagram, href: "#", color: "pink" },
                  { icon: Linkedin, href: "#", color: "blue" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? "bg-gray-800 hover:bg-gray-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div data-animate>
            <h2
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                        : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className={`block mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                        : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  className={`block mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
        }`}
      >
        {/* Navigation Bar */}
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            darkMode
              ? "bg-gray-900/95 backdrop-blur-md text-white"
              : "bg-white/95 backdrop-blur-md text-gray-900"
          } border-b ${
            darkMode ? "border-gray-800" : "border-gray-200"
          } shadow-lg py-4`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setCurrentPage("home")}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  MNU ICPC
                </span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-8">
                {[
                  { name: "Home", page: "home", icon: Home },
                  { name: "About", page: "about", icon: User },
                  { name: "Roadmap", page: "roadmap", icon: MapPin },
                  { name: "Dashboard", page: "dashboard", icon: BarChart3 },
                  { name: "Community", page: "community", icon: Users },
                  { name: "Contact", page: "contact", icon: Mail },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setCurrentPage(item.page)}
                    className={`flex items-center gap-1 transition-all duration-200 ${
                      currentPage === item.page
                        ? darkMode
                          ? "text-blue-400"
                          : "text-blue-600"
                        : darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main ref={scrollRef} className="pt-20">
          {currentPage === "home" && <HomePage />}
          {currentPage === "about" && <AboutPage />}
          {currentPage === "roadmap" && <RoadmapPage />}
          {currentPage === "dashboard" && <DashboardPage />}
          {currentPage === "community" && <CommunityPage />}
          {currentPage === "contact" && <ContactPage />}
        </main>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-500 text-white"
                : "bg-blue-500 hover:bg-blue-400 text-white"
            } shadow-lg`}
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}

        {/* Footer */}
        <footer
          className={`py-12 px-6 border-t ${
            darkMode
              ? "border-gray-800 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold">Minia ICPC</span>
                </div>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Competitive Programming Community of Minia National
                  University. Empowering students to excel in algorithmic
                  problem solving and competitions.
                </p>
              </div>

              <div>
                <h3
                  className={`font-semibold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Quick Links
                </h3>
                <div className="space-y-2">
                  {[
                    "Home",
                    "About",
                    "Roadmap",
                    "Dashboard",
                    "Community",
                    "Contact",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() => setCurrentPage(item.toLowerCase())}
                      className={`block text-sm transition-colors ${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3
                  className={`font-semibold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "#" },
                    { icon: Facebook, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Linkedin, href: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        darkMode
                          ? "bg-gray-800 hover:bg-gray-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`border-t mt-8 pt-8 text-center ${
                darkMode
                  ? "border-gray-800 text-gray-400"
                  : "border-gray-200 text-gray-600"
              }`}
            >
              <p className="text-sm">
                © {new Date().getFullYear()} Minia ICPC Community. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MiniaICPCCommunity;
