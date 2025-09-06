import React, { useState } from "react";
import {
  Users,
  Trophy,
  TrendingUp,
  Target,
  Award,
  Calendar,
  Star,
  ChevronRight,
  BarChart3,
  BookOpen,
  Code,
  Crown,
  Medal,
  Zap,
  Heart,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Dashboard = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("progress");
  const [hoveredStat, setHoveredStat] = useState(null);

  // Community future goals and targets
  const [communityGoals] = useState({
    targetMembers: 1000,
    targetProblems: 30000,
    targetContests: 500,
    targetActivePercentage: 70,
    levelGoals: [300, 150, 100],
  });

  // Progress toward goals
  const [communityProgress] = useState({
    currentMembers: 287,
    currentProblems: 15640,
    currentContests: 342,
    currentActivePercentage: 50,
    currentLevels: [200, 30, 4],
  });

  // Roadmap for the community
  const [roadmapData] = useState([
    {
      title: "Level 1: Beginners",
      color: "from-blue-400 to-cyan-400",
      icon: "🚀",
      goals: [
        "Learn basic syntax",
        "Solve 100 problems",
        "Participate in 5 contests",
      ],
      duration: "4-6 weeks",
      resources: 12,
    },
    {
      title: "Level 2: Intermediate",
      color: "from-purple-400 to-pink-400",
      icon: "⚡",
      goals: [
        "Master data structures",
        "Solve 300 problems",
        "Reach 1600 rating",
      ],
      duration: "8-10 weeks",
      resources: 18,
    },
    {
      title: "Level 3: Advanced",
      color: "from-orange-400 to-red-400",
      icon: "🔥",
      goals: ["Compete nationally", "Mentor others", "Achieve 2000+ rating"],
      duration: "10-12 weeks",
      resources: 24,
    },
  ]);

  // Upcoming initiatives
  const [initiatives] = useState([
    {
      title: "Mentorship Program",
      description: "Pairing beginners with experienced coders",
      timeline: "Q1 2024",
      progress: 30,
      icon: <Heart className="text-pink-500" />,
    },
    {
      title: "Weekly Contests",
      description: "Regular coding challenges with prizes",
      timeline: "Ongoing",
      progress: 75,
      icon: <Trophy className="text-yellow-500" />,
    },
    {
      title: "Workshop Series",
      description: "Deep dives into algorithms and data structures",
      timeline: "Q2 2024",
      progress: 10,
      icon: <BookOpen className="text-blue-500" />,
    },
    {
      title: "Interview Preparation",
      description: "Technical interview practice sessions",
      timeline: "Q3 2024",
      progress: 5,
      icon: <Zap className="text-orange-500" />,
    },
  ]);

  // Calculate progress percentages
  const progressPercentages = {
    members: Math.round(
      (communityProgress.currentMembers / communityGoals.targetMembers) * 100
    ),
    problems: Math.round(
      (communityProgress.currentProblems / communityGoals.targetProblems) * 100
    ),
    contests: Math.round(
      (communityProgress.currentContests / communityGoals.targetContests) * 100
    ),
    active: Math.round(
      (communityProgress.currentActivePercentage /
        communityGoals.targetActivePercentage) *
        100
    ),
  };

  // Stats with improved icons
  const stats = [
    {
      label: "Total Members",
      current: communityProgress.currentMembers,
      target: communityGoals.targetMembers,
      progress: progressPercentages.members,
      color: "bg-blue-500",
      icon: <Users className="w-5 h-5 text-blue-500" />,
      hoverIcon: <Users className="w-6 h-6 text-white" />,
    },
    {
      label: "Problems Solved",
      current: communityProgress.currentProblems,
      target: communityGoals.targetProblems,
      progress: progressPercentages.problems,
      color: "bg-purple-500",
      icon: <Code className="w-5 h-5 text-purple-500" />,
      hoverIcon: <Code className="w-6 h-6 text-white" />,
    },
    {
      label: "Contests Participated",
      current: communityProgress.currentContests,
      target: communityGoals.targetContests,
      progress: progressPercentages.contests,
      color: "bg-green-500",
      icon: <Trophy className="w-5 h-5 text-green-500" />,
      hoverIcon: <Trophy className="w-6 h-6 text-white" />,
    },
    {
      label: "Active Members",
      current: `${communityProgress.currentActivePercentage}%`,
      target: `${communityGoals.targetActivePercentage}%`,
      progress: progressPercentages.active,
      color: "bg-orange-500",
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
      hoverIcon: <TrendingUp className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <div
      className={`min-h-screen py-20 px-6 pt-24 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className={`text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Community
            </span>{" "}
            Progress Dashboard
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Tracking our journey toward becoming a top competitive programming
            community
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-8">
          {[
            {
              id: "progress",
              name: "Our Progress",
              icon: <TrendingUp size={18} />,
            },
            {
              id: "goals",
              name: "Future Goals",
              icon: <Target size={18} />,
            },
            {
              id: "roadmap",
              name: "Learning Path",
              icon: <BookOpen size={18} />,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 font-medium border-b-2 transition-all ${
                activeTab === tab.id
                  ? darkMode
                    ? "border-purple-500 text-purple-400"
                    : "border-purple-600 text-purple-600"
                  : darkMode
                  ? "border-transparent text-gray-400 hover:text-gray-300"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Progress Overview */}
        {activeTab === "progress" && (
          <div className="space-y-8">
            <div
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <TrendingUp className="text-blue-500" />
                Progress Overview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Progress Stats */}
                <div className="space-y-6">
                  {stats.map((stat, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredStat(idx)}
                      onMouseLeave={() => setHoveredStat(null)}
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                          : "bg-gray-50 border-gray-200 hover:bg-white"
                      } ${
                        hoveredStat === idx
                          ? "transform hover:scale-105 shadow-md"
                          : ""
                      }`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg transition-all duration-300 ${
                              hoveredStat === idx
                                ? `${stat.color} transform scale-110`
                                : darkMode
                                ? "bg-gray-600"
                                : "bg-white shadow-sm"
                            }`}
                          >
                            {hoveredStat === idx ? stat.hoverIcon : stat.icon}
                          </div>
                          <span
                            className={`font-medium ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {stat.label}
                          </span>
                        </div>
                        <span
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {stat.current} / {stat.target}
                        </span>
                      </div>
                      <div
                        className={`w-full h-2 rounded-full overflow-hidden ${
                          darkMode ? "bg-gray-600" : "bg-gray-200"
                        }`}
                      >
                        <div
                          className={`h-full ${stat.color} transition-all duration-700`}
                          style={{ width: `${stat.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span
                          className={`text-xs ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Progress
                        </span>
                        <span
                          className={`text-xs font-semibold ${stat.color.replace(
                            "bg-",
                            "text-"
                          )}`}
                        >
                          {stat.progress}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Level Progress */}
                <div>
                  <h3
                    className={`text-lg font-semibold mb-4 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Level Progression
                  </h3>
                  <div className="space-y-4">
                    {roadmapData.map((level, idx) => {
                      const progress = Math.round(
                        (communityProgress.currentLevels[idx] /
                          communityGoals.levelGoals[idx]) *
                          100
                      );

                      return (
                        <div key={idx} className="group">
                          <div className="flex justify-between items-center mb-2">
                            <span
                              className={`font-medium ${
                                darkMode ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {level.title}
                            </span>
                            <span
                              className={`text-sm ${
                                darkMode ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              {communityProgress.currentLevels[idx]} /{" "}
                              {communityGoals.levelGoals[idx]} members
                            </span>
                          </div>
                          <div
                            className={`w-full h-3 rounded-full overflow-hidden ${
                              darkMode ? "bg-gray-700" : "bg-gray-200"
                            }`}
                          >
                            <div
                              className={`h-full bg-gradient-to-r ${level.color} transition-all duration-1000 group-hover:brightness-110`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <div className="flex justify-between items-center mt-1">
                            <span
                              className={`text-xs ${
                                darkMode ? "text-gray-500" : "text-gray-400"
                              }`}
                            >
                              {progress}% complete
                            </span>
                            <span
                              className={`text-xs ${
                                darkMode ? "text-gray-500" : "text-gray-400"
                              }`}
                            >
                              Goal: {communityGoals.levelGoals[idx]} members
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Initiatives */}
            <div
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Calendar className="text-green-500" />
                Upcoming Initiatives
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {initiatives.map((initiative, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-transform duration-300 hover:scale-[1.02] ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                        : "bg-gray-50 border-gray-200 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`p-2 rounded-full ${
                          darkMode ? "bg-gray-600" : "bg-white shadow-sm"
                        }`}
                      >
                        {initiative.icon}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-semibold ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {initiative.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {initiative.description}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode
                            ? "bg-gray-600 text-gray-300"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {initiative.timeline}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-full h-2 rounded-full overflow-hidden ${
                          darkMode ? "bg-gray-600" : "bg-gray-200"
                        }`}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-700"
                          style={{ width: `${initiative.progress}%` }}
                        />
                      </div>
                      <span
                        className={`text-xs font-semibold ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {initiative.progress}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Future Goals */}
        {activeTab === "goals" && (
          <div
            className={`p-6 rounded-2xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <Target className="text-red-500" />
              Our 2024 Goals
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Community Growth */}
              <div>
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Community Growth
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Users className="text-blue-500" />,
                      title: "1000+ Members",
                      description:
                        "Grow our community to over 1000 active members",
                    },
                    {
                      icon: <TrendingUp className="text-green-500" />,
                      title: "70% Active Participation",
                      description:
                        "Maintain high engagement with weekly activities",
                    },
                    {
                      icon: <Trophy className="text-yellow-500" />,
                      title: "National Recognition",
                      description:
                        "Become one of the top university programming communities in the country",
                    },
                  ].map((goal, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-transform duration-300 hover:scale-[1.02] ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                          : "bg-gray-50 border-gray-200 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`p-2 rounded-full ${
                            darkMode ? "bg-gray-600" : "bg-gray-100"
                          }`}
                        >
                          {goal.icon}
                        </div>
                        <h4
                          className={`font-semibold ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {goal.title}
                        </h4>
                      </div>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {goal.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive Goals */}
              <div>
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Competitive Goals
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Code className="text-purple-500" />,
                      title: "30,000 Problems Solved",
                      description:
                        "Collectively solve over 30,000 programming problems",
                    },
                    {
                      icon: <Award className="text-red-500" />,
                      title: "500+ Contests",
                      description:
                        "Participate in over 500 contests across all platforms",
                    },
                    {
                      icon: <Crown className="text-orange-500" />,
                      title: "10+ Rated Members",
                      description:
                        "Have at least 10 members with 2000+ rating on competitive platforms",
                    },
                  ].map((goal, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-transform duration-300 hover:scale-[1.02] ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                          : "bg-gray-50 border-gray-200 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`p-2 rounded-full ${
                            darkMode ? "bg-gray-600" : "bg-gray-100"
                          }`}
                        >
                          {goal.icon}
                        </div>
                        <h4
                          className={`font-semibold ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {goal.title}
                        </h4>
                      </div>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {goal.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Long-term Vision */}
            <div className="mt-8">
              <h3
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Long-term Vision
              </h3>
              <div
                className={`p-4 rounded-xl ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                } transition-colors duration-300`}
              >
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Our vision is to create a thriving competitive programming
                  community where members can learn, grow, and excel together.
                  We aim to become a recognized talent pool for international
                  programming competitions and a source of top technical talent
                  for leading tech companies worldwide.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Learning Path */}
        {activeTab === "roadmap" && (
          <div
            className={`p-6 rounded-2xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <BookOpen className="text-indigo-500" />
              Learning Path
            </h2>

            <div className="space-y-8">
              {roadmapData.map((level, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                      : "bg-gray-50 border-gray-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`text-3xl ${
                        idx === 0
                          ? "animate-bounce"
                          : idx === 1
                          ? "animate-pulse"
                          : "animate-ping"
                      }`}
                    >
                      {level.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {level.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span
                          className={`text-sm flex items-center gap-1 ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <Clock className="w-4 h-4" />
                          {level.duration}
                        </span>
                        <span
                          className={`text-sm flex items-center gap-1 ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <BookOpen className="w-4 h-4" />
                          {level.resources} resources
                        </span>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode
                          ? "bg-gray-600 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      Level {idx + 1}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {level.goals.map((goal, goalIdx) => (
                      <div
                        key={goalIdx}
                        className={`p-4 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
                          darkMode
                            ? "bg-gray-600 border-gray-500 hover:bg-gray-500"
                            : "bg-white border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle
                            className={`w-5 h-5 mt-0.5 ${
                              goalIdx === 0
                                ? "text-green-500"
                                : goalIdx === 1
                                ? "text-yellow-500"
                                : "text-red-500"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {goal}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t flex justify-between items-center">
                    <span
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {communityProgress.currentLevels[idx]} members enrolled
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Resources */}
            <div className="mt-8">
              <h3
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Recommended Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Competitive Programming Handbook",
                    description:
                      "Complete guide to competitive programming concepts",
                    icon: "📚",
                  },
                  {
                    title: "Algorithm Visualization",
                    description:
                      "Interactive visualizations for common algorithms",
                    icon: "🔍",
                  },
                  {
                    title: "Practice Problems",
                    description:
                      "Curated list of problems for each skill level",
                    icon: "💻",
                  },
                  {
                    title: "Video Tutorials",
                    description:
                      "Recorded sessions from our workshops and lectures",
                    icon: "🎥",
                  },
                ].map((resource, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                        : "bg-gray-50 border-gray-200 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{resource.icon}</span>
                      <h4
                        className={`font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {resource.title}
                      </h4>
                    </div>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {resource.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
