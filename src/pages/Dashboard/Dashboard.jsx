import React, { useState, useEffect, useCallback } from "react";
import {
  Trophy,
  Crown,
  Medal,
  Users,
  Code,
  ChevronUp,
  ChevronDown,
  Search,
  TrendingUp as TrendingUpIcon,
  Clock as ClockIcon,
  Target,
  Award,
  BookOpen,
  CheckCircle,
  Calendar,
  TrendingUp,
  Clock,
} from "lucide-react";
import { initialTrainees } from "../../data/trainees";
import { communityGoals, communityProgress } from "../../data/communityData";
import { roadmapData } from "../../data/roadmapData";

const Dashboard = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("leaderboard");
  const [leaderboard, setLeaderboard] = useState([]);
  const [searchTerm, SetSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("solved");
  //const [isUpdating, SetIsUpdating] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);

  // Add these before your Dashboard component
  const stats = [
    {
      label: "Community Members",
      current: communityProgress.currentMembers,
      target: communityGoals.targetMembers,
      progress: Math.round(
        (communityProgress.currentMembers / communityGoals.targetMembers) * 100
      ),
      icon: <Users className="w-5 h-5 text-blue-500" />,
      hoverIcon: <Users className="w-5 h-5 text-white" />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      label: "Problems Solved",
      current: communityProgress.currentProblems,
      target: communityGoals.targetProblems,
      progress: Math.round(
        (communityProgress.currentProblems / communityGoals.targetProblems) *
          100
      ),
      icon: <Code className="w-5 h-5 text-green-500" />,
      hoverIcon: <Code className="w-5 h-5 text-white" />,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      label: "Contests Participated",
      current: communityProgress.currentContests,
      target: communityGoals.targetContests,
      progress: Math.round(
        (communityProgress.currentContests / communityGoals.targetContests) *
          100
      ),
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      hoverIcon: <Trophy className="w-5 h-5 text-white" />,
      color: "bg-gradient-to-r from-amber-500 to-orange-500",
    },
    {
      label: "Active Participation",
      current: communityProgress.currentActivePercentage,
      target: communityGoals.targetActivePercentage,
      progress: Math.round(
        (communityProgress.currentActivePercentage /
          communityGoals.targetActivePercentage) *
          100
      ),
      icon: <TrendingUpIcon className="w-5 h-5 text-purple-500" />,
      hoverIcon: <TrendingUpIcon className="w-5 h-5 text-white" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ];

  const initiatives = [
    {
      title: "Weekly Coding Challenges",
      description: "Regular practice sessions with increasing difficulty",
      timeline: "Ongoing",
      progress: 75,
      icon: <Code className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Mentorship Program",
      description: "Pairing experienced members with beginners",
      timeline: "Q2 2024",
      progress: 30,
      icon: <Users className="w-5 h-5 text-green-500" />,
    },
    {
      title: "Hackathon Event",
      description: "24-hour coding competition with prizes",
      timeline: "Q3 2024",
      progress: 15,
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Algorithm Workshop Series",
      description: "Deep dive into advanced algorithms",
      timeline: "Q4 2024",
      progress: 5,
      icon: <BookOpen className="w-5 h-5 text-purple-500" />,
    },
  ];
  // Initialize and sort leaderboard
  useEffect(() => {
    const sortedTrainees = [...initialTrainees].sort(
      (a, b) => b.solved - a.solved
    );
    setLeaderboard(sortedTrainees);
  }, []);

  // Handle sorting
  const HandleSort = useCallback(
    (field) => {
      if (sortBy === field) {
        setLeaderboard((prev) => [...prev].reverse());
      } else {
        const sorted = [...leaderboard].sort((a, b) => b[field] - a[field]);
        setLeaderboard(sorted);
        setSortBy(field);
      }
    },
    [sortBy, leaderboard]
  );

  // Filter leaderboard based on search term
  const filteredLeaderboard = leaderboard.filter((trainee) =>
    trainee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to update solved problems randomly (for simulation)
  // const updateRandomTrainee = useCallback(() => {
  //   setIsUpdating(true);

  //   setLeaderboard((prev) => {
  //     const updated = [...prev];

  //     // Select 2-3 random trainees to update
  //     const numUpdates = Math.floor(Math.random() * 2) + 2;
  //     const updatedIndices = new Set();

  //     while (updatedIndices.size < numUpdates) {
  //       updatedIndices.add(Math.floor(Math.random() * updated.length));
  //     }

  //     updatedIndices.forEach((index) => {
  //       const randomIncrement = Math.floor(Math.random() * 5) + 1;
  //       updated[index] = {
  //         ...updated[index],
  //         solved: updated[index].solved + randomIncrement,
  //       };
  //     });

  //     // Re-sort after update and update trends
  //     const sorted = updated.sort((a, b) => b.solved - a.solved);

  //     // Update trends based on rank changes
  //     return sorted.map((trainee, newIndex) => {
  //       const oldIndex = prev.findIndex((t) => t.id === trainee.id);
  //       return {
  //         ...trainee,
  //         trend:
  //           newIndex < oldIndex ? "up" : newIndex > oldIndex ? "down" : "same",
  //       };
  //     });
  //   });

  //   setTimeout(() => setIsUpdating(false), 500);
  // }, []);

  // Simulate real-time updates (for demonstration)
  // useEffect(() => {
  //   const interval = setInterval(updateRandomTrainee, 8000);
  //   return () => clearInterval(interval);
  // }, [updateRandomTrainee]);

  // Get medal and crown based on current rank
  const getRankBadge = useCallback((rank) => {
    if (rank === 0)
      return {
        medal: "🥇",
        crown: true,
        color: "from-amber-400 to-amber-600",
        bgColor: "bg-amber-500",
      };
    if (rank === 1)
      return {
        medal: "🥈",
        crown: false,
        color: "from-gray-400 to-gray-600",
        bgColor: "bg-gray-500",
      };
    if (rank === 2)
      return {
        medal: "🥉",
        crown: false,
        color: "from-orange-400 to-orange-600",
        bgColor: "bg-orange-500",
      };
    return { medal: null, crown: false, color: "", bgColor: "" };
  }, []);

  // Podium component for top 3
  const Podium = ({ trainees }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {trainees.map((trainee, index) => {
        const { medal, crown, color, bgColor } = getRankBadge(index);
        const height = index === 0 ? "h-72" : index === 1 ? "h-64" : "h-60";

        return (
          <div
            key={trainee.id}
            className={`relative rounded-2xl bg-gradient-to-b ${color} text-white 
            transition-all duration-500 hover:scale-105 transform shadow-2xl ${height} 
            flex flex-col justify-end overflow-hidden group`}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <div className="absolute top-2 left-2 text-4xl">{"{ }"}</div>
              <div className="absolute bottom-4 right-4 text-3xl">
                &#60;/&#62;
              </div>
            </div>

            {crown && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Crown className="w-10 h-10 text-amber-300 filter drop-shadow-md" />
              </div>
            )}

            <div className="absolute top-4 right-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${bgColor} text-white font-bold text-lg shadow-md`}
              >
                #{index + 1}
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <div className="relative">
                <img
                  src={trainee.avatar}
                  alt={trainee.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1 shadow-md">
                  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                    <TrendingUpIcon className="w-4 h-4 text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center px-4 mb-6">
              <h3 className="font-bold text-xl mb-2 truncate">
                {trainee.name}
              </h3>
              <div className="flex items-center justify-center space-x-2">
                <div className="text-4xl font-extrabold">{trainee.solved}</div>
                <span className="text-sm opacity-90">solved</span>
              </div>
              {/* <div className="flex items-center justify-center text-sm mt-2 opacity-90">
                <ClockIcon className="w-4 h-4 mr-1" />
                { <span>{trainee.time}</span> }
              </div> */}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-2 bg-black bg-opacity-20"></div>

            <div className="absolute top-4 left-4 text-3xl">{medal}</div>
          </div>
        );
      })}
    </div>
  );

  // Leaderboard table row component
  const LeaderboardRow = ({ trainee, rank }) => (
    <tr
      className={`border-b ${
        darkMode
          ? "border-gray-700 hover:bg-gray-700"
          : "border-gray-200 hover:bg-gray-50"
      } transition-colors duration-200 group`}
    >
      <td className="px-6 py-4 font-medium">
        <div className="flex items-center">
          <span className="text-lg">#{rank + 1}</span>
          {rank < 3 && (
            <span className="ml-2 text-xl">
              {rank === 0 ? "🥇" : rank === 1 ? "🥈" : "🥉"}
            </span>
          )}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <img
            src={trainee.avatar}
            alt={trainee.name}
            className="w-12 h-12 rounded-full object-cover mr-4 shadow-md group-hover:shadow-lg transition-shadow duration-200"
          />
          <span className="font-medium">{trainee.name}</span>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-lg">{trainee.solved}</td>
      {/* <td className="px-6 py-4">{trainee.time}</td> */}
      <td className="px-6 py-4">
        {trainee.trend === "up" ? (
          <div className="text-green-500 flex items-center animate-pulse">
            <ChevronUp className="w-5 h-5 mr-1" />
            <span>Up</span>
          </div>
        ) : trainee.trend === "down" ? (
          <div className="text-red-500 flex items-center">
            <ChevronDown className="w-5 h-5 mr-1" />
            <span>Down</span>
          </div>
        ) : (
          <div className="text-gray-500 flex items-center">
            <span>-</span>
          </div>
        )}
      </td>
    </tr>
  );

  return (
    <div
      className={`min-h-screen py-12 px-4 pt-20 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-blue-50 to-purple-50"
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
              Contest
            </span>{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Champions
            </span>
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Elite competitive programmers showcasing their algorithmic mastery
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div
            className={`inline-flex rounded-2xl p-1 ${
              darkMode ? "bg-gray-800" : "bg-white shadow-md"
            }`}
          >
            {[
              {
                id: "leaderboard",
                name: "Leaderboard",
                icon: <Trophy size={18} />,
              },
              {
                id: "progress",
                name: "Our Progress",
                icon: <TrendingUpIcon size={18} />,
              },
              { id: "goals", name: "Future Goals", icon: <Medal size={18} /> },
              {
                id: "roadmap",
                name: "Learning Path",
                icon: <Users size={18} />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-medium rounded-xl transition-all ${
                  activeTab === tab.id
                    ? darkMode
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
                    : darkMode
                    ? "text-gray-400 hover:text-gray-300"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Leaderboard Tab */}
        {activeTab === "leaderboard" && (
          <div className="space-y-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className={`p-6 rounded-2xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } transition-transform duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-purple-300`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Total Participants
                    </h3>
                    <p
                      className={`text-3xl font-bold mt-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      0
                    </p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <p
                  className={`text-sm mt-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Active competitive programmers
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } transition-transform duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-amber-300`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Top Problem Solver
                    </h3>
                    <p
                      className={`text-xl font-bold mt-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {leaderboard[0]?.name || "No data"}
                    </p>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {leaderboard[0]?.solved || 0} problems solved
                    </p>
                  </div>
                  <div className="p-3 bg-amber-100 rounded-full">
                    <Crown className="w-8 h-8 text-amber-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-xs bg-gradient-to-r from-amber-400 to-amber-600 text-white px-2 py-1 rounded-full">
                    🏆 Current Champion
                  </span>
                </div>
              </div>

              <div
                className={`p-6 rounded-2xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } transition-transform duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-green-300`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Total Problems Solved
                    </h3>
                    <p
                      className={`text-3xl font-bold mt-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      0
                    </p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-full">
                    <Code className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <p
                  className={`text-sm mt-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  By all participants
                </p>
              </div>
            </div>

            {/* Leaderboard */}
            <div
              className={`p-8 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } w-full`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h2
                  className={`text-2xl font-bold flex items-center gap-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <Trophy className="text-amber-500" />
                  Competition Leaderboard
                </h2>
              </div>

              {/* Podium for top 3 */}
              <Podium trainees={filteredLeaderboard.slice(0, 3)} />

              {/* Complete Rankings */}
              <h3
                className={`text-xl font-semibold mb-6 flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Medal className="text-amber-500" />
                Complete Rankings
              </h3>

              {/* Leaderboard table */}
              <div className="overflow-x-auto rounded-2xl shadow-inner">
                <table className="w-full">
                  <thead>
                    <tr
                      className={`${
                        darkMode ? "bg-gray-700" : "bg-gray-100"
                      } text-left`}
                    >
                      <th className="px-6 py-4">Rank</th>
                      <th className="px-6 py-4">Participant</th>
                      <th className="px-6 py-4">
                        <div className="flex items-center">
                          <span>Solved</span>
                        </div>
                      </th>
                      {/* <th className="px-6 py-4">Time</th> */}
                      <th className="px-6 py-4">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeaderboard.slice(3, 10).map((trainee, index) => (
                      <LeaderboardRow
                        key={trainee.id}
                        trainee={trainee}
                        rank={index + 3}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredLeaderboard.length === 0 && (
                <div
                  className={`text-center py-12 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">
                    No participants found
                  </h3>
                  <p>Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Progress Overview */}
        {activeTab === "progress" && (
          <div className="space-y-8 w-full">
            <div
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } w-full`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
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
                  <div className="space-y-6 w-full">
                    {roadmapData.map((level, idx) => {
                      const progress = Math.round(
                        (communityProgress.currentLevels[idx] /
                          communityGoals.levelGoals[idx]) *
                          100
                      );

                      return (
                        <div key={idx} className="group w-full">
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
              } w-full`}
            >
              <h2
                className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Calendar className="text-green-500" />
                Upcoming Initiatives
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
                        {/* {initiative.timeline} */}
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

        {/* Future Goals Tab */}
        {activeTab === "goals" && (
          <div
            className={`p-6 rounded-2xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } w-full`}
          >
            <h2
              className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <Target className="text-red-500" />
              Our 2024 Goals
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
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
                      title: "1000+ trainees",
                      description:
                        "Grow our community to over 1000 active trainees ",
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
              <div className="w-full">
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
                      title: "3,000 Problems Solved",
                      description:
                        "Collectively solve over 3,000 programming problems",
                    },
                    {
                      icon: <Award className="text-red-500" />,
                      title: "50+ Contests",
                      description:
                        "Participate in over 50 contests across all platforms",
                    },
                    {
                      icon: <Crown className="text-orange-500" />,
                      title: "10+ Rated Members",
                      description:
                        "Have at least 10 members with 1000+ rating on competitive platforms",
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

        {/* Learning Path Tab */}
        {activeTab === "roadmap" && (
          <div
            className={`p-6 rounded-2xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } w-full`}
          >
            <h2
              className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <BookOpen className="text-indigo-500" />
              Learning Path
            </h2>

            <div className="space-y-8 w-full">
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
                          <ClockIcon className="w-4 h-4" />
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
