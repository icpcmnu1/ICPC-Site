import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  CheckCircle,
  BookOpen,
  Target,
  Users,
  Trophy,
  Star,
  Calendar,
  Clock,
  TrendingUp,
  Award,
  ChevronRight,
  Play,
  Pause,
  Bookmark,
  Share,
  Code,
  Database,
  Brain,
} from "lucide-react";

const Roadmap = ({ darkMode }) => {
  const [expandedLevel, setExpandedLevel] = useState(null);
  const [successStories, setSuccessStories] = useState([]);
  const [activeStory, setActiveStory] = useState(0);
  const [progress, setProgress] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [bookmarkedResources, setBookmarkedResources] = useState([]);

  // Sample roadmap data
  const roadmapData = [
    {
      level: 0,
      title: "Programming Fundamentals",
      icon: Code,
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
      icon: Database,
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
      icon: Brain,
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

  // Simulate user progress data
  useEffect(() => {
    const userProgress = {
      0: { completed: 120, total: 150 },
      1: { completed: 85, total: 200 },
      2: { completed: 30, total: 250 },
    };
    setProgress(userProgress);
  }, []);

  // Simulate success stories data
  useEffect(() => {
    const stories = [
      {
        name: "Mazen Mohamed",
        level: "Level 3",
        achievement: "ECPC Final competition and Codeforces Pupil",
        story:
          "I started gradually from scratch and continued to raise my level, solve many problems, and I will continue to achieve greater achievements.",
        image:
          "https://github.com/Mazen-mo-10/imgs/blob/main/MazenImg.jpg?raw=true",
      },
      {
        name: "Anas Desouky",
        level: "Level 3",
        achievement: "AI Engineer",
        story:
          "I loved problem solving and became interested in it and strengthened myself in data structure and algorithms.",
        image:
          "https://github.com/Mazen-mo-10/imgs/blob/main/Anas_Img.jpeg?raw=true",
      },
      {
        name: "Ziad Ayman",
        level: "Level 2",
        achievement: "Codeforces Expert",
        story:
          "The roadmap helped me build a strong foundation in algorithms and data structures which enabled me to get solve 1400 problem.",
        image:
          "https://github.com/Mazen-mo-10/imgs/blob/main/Ziad_Img.jpeg?raw=true",
      },
    ];
    setSuccessStories(stories);
  }, []);

  // Auto-rotate success stories
  useEffect(() => {
    if (!isPlaying || successStories.length === 0) return;

    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, successStories.length]);

  const toggleBookmark = (resource) => {
    if (bookmarkedResources.includes(resource)) {
      setBookmarkedResources(
        bookmarkedResources.filter((item) => item !== resource)
      );
    } else {
      setBookmarkedResources([...bookmarkedResources, resource]);
    }
  };

  const CalculateProgress = (level) => {
    if (!progress[level]) return 0;
    return Math.round(
      (progress[level].completed / progress[level].total) * 100
    );
  };

  return (
    <div
      className={`min-h-screen py-20 px-6 pt-24 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Roadmap Content */}
          <div className="lg:w-2/3 space-y-8">
            {roadmapData.map((level, index) => (
              <div
                key={index}
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
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
                        <level.icon className="w-8 h-8" />
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

                        <h4
                          className={`font-semibold mb-3 mt-6 ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          🎯 Recommended Practice
                        </h4>
                        <div className="space-y-2">
                          {[
                            "Solve 20 easy problems on each topic",
                            "Participate in 2 weekly contests",
                            "Join our study group sessions",
                            "Complete the assigned problem sets",
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Target className="w-4 h-4 text-blue-500 flex-shrink-0" />
                              <span
                                className={`text-sm ${
                                  darkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                              >
                                {item}
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
                            <div
                              key={idx}
                              className="flex items-center gap-2 justify-between group"
                            >
                              <div className="flex items-center gap-2">
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
                              <button
                                onClick={() => toggleBookmark(resource)}
                                className={`opacity-0 group-hover:opacity-100 p-1 rounded ${
                                  bookmarkedResources.includes(resource)
                                    ? "text-yellow-500"
                                    : darkMode
                                    ? "text-gray-500 hover:text-gray-300"
                                    : "text-gray-400 hover:text-gray-600"
                                }`}
                              >
                                <Bookmark
                                  size={14}
                                  fill={
                                    bookmarkedResources.includes(resource)
                                      ? "currentColor"
                                      : "none"
                                  }
                                />
                              </button>
                            </div>
                          ))}
                        </div>

                        <h4
                          className={`font-semibold mb-3 mt-6 ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          ⏰ Time Commitment
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-sm ${
                                darkMode ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              Estimated time:{" "}
                              {level.level === 0
                                ? "4-6 weeks"
                                : level.level === 1
                                ? "8-10 weeks"
                                : "10-12 weeks"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-sm ${
                                darkMode ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              Weekly commitment: 10-15 hours
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t dark:border-gray-700 border-gray-200">
                      <h4
                        className={`font-semibold mb-3 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        🏆 Level Completion Requirements
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div
                          className={`p-3 rounded-lg ${
                            darkMode ? "bg-gray-700" : "bg-gray-100"
                          }`}
                        >
                          <div
                            className={`text-lg font-bold ${
                              darkMode ? "text-green-400" : "text-green-600"
                            } mb-1`}
                          >
                            {level.problems}+
                          </div>
                          <div
                            className={`text-sm ${
                              darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            Problems Solved
                          </div>
                        </div>
                        <div
                          className={`p-3 rounded-lg ${
                            darkMode ? "bg-gray-700" : "bg-gray-100"
                          }`}
                        >
                          <div
                            className={`text-lg font-bold ${
                              darkMode ? "text-blue-400" : "text-blue-600"
                            } mb-1`}
                          >
                            {level.contests}+
                          </div>
                          <div
                            className={`text-sm ${
                              darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            Contests Participated
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar with Additional Features */}
          <div className="lg:w-1/3 space-y-6">
            {/* Success Stories Carousel */}
            <div
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Trophy className="inline mr-2 text-yellow-500" />
                Success Stories
              </h2>

              <div className="relative">
                {successStories.length > 0 && (
                  <>
                    <div className="overflow-hidden rounded-lg">
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                          transform: `translateX(-${activeStory * 100}%)`,
                        }}
                      >
                        {successStories.map((story, index) => (
                          <div key={index} className="w-full flex-shrink-0">
                            <div className="p-4">
                              <div className="flex items-center gap-3 mb-3">
                                <img
                                  src={story.image}
                                  alt={story.name}
                                  className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                  <h3
                                    className={`font-semibold ${
                                      darkMode ? "text-white" : "text-gray-900"
                                    }`}
                                  >
                                    {story.name}
                                  </h3>
                                  <p
                                    className={`text-sm ${
                                      darkMode
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                    }`}
                                  >
                                    {story.level}
                                  </p>
                                </div>
                              </div>
                              <div
                                className={`text-sm mb-3 ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                "{story.story}"
                              </div>
                              <div
                                className={`text-xs px-2 py-1 rounded-full inline-block ${
                                  darkMode
                                    ? "bg-gray-700 text-blue-400"
                                    : "bg-blue-100 text-blue-700"
                                }`}
                              >
                                {story.achievement}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      {successStories.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveStory(index)}
                          className={`w-2 h-2 rounded-full mx-1 ${
                            index === activeStory
                              ? "bg-blue-500"
                              : darkMode
                              ? "bg-gray-600"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className={`absolute top-1/2 right-2 transform -translate-y-1/2 p-1 rounded-full ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-white text-gray-600 shadow"
                      }`}
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Weekly Challenge */}
            <div
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Target className="inline mr-2 text-red-500" />
                Weekly Challenge
              </h2>

              <div
                className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <h3
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Graph Traversal Problems
                </h3>
                <p
                  className={`text-sm mb-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Solve 5 problems related to BFS/DFS algorithms
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Ends in 3 days
                  </span>
                  <button
                    className={`text-xs px-3 py-1 rounded-full ${
                      darkMode
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white`}
                  >
                    Participate
                  </button>
                </div>
              </div>
            </div>

            {/* Recommended Resources */}
            <div
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <BookOpen className="inline mr-2 text-green-500" />
                Recommended Resources
              </h2>

              <div className="space-y-3">
                {[
                  { name: "Competitive Programmer's Handbook", type: "Book" },
                  { name: "Errichto's YouTube Channel", type: "Video" },
                  { name: "USACO Guide", type: "Website" },
                  { name: "CP-Algorithms", type: "Reference" },
                ].map((resource, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-200"
                    } transition-transform hover:scale-[1.02]`}
                  >
                    <h3
                      className={`font-medium ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {resource.name}
                    </h3>
                    <div className="flex justify-between items-center mt-1">
                      <span
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {resource.type}
                      </span>
                      <button
                        className={`text-xs ${
                          darkMode
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-blue-600 hover:text-blue-700"
                        }`}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
