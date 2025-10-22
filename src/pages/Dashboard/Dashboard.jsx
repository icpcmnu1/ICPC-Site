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
  Star,
  Zap,
} from "lucide-react";
import { communityProgress } from "../../data/communityData";
import { roadmapData } from "../../data/roadmapData";

const Dashboard = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("leaderboard");
  const [mainLeaderboard, setMainLeaderboard] = useState([]);
  const [contestLeaderboard, setContestLeaderboard] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [SortBy, setSortBy] = useState("solved");
  const [hoveredStat, setHoveredStat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://opensheet.elk.sh/1sOnN7xwRtKDOwlONDXYFGWGqJJMmkmPWHUs8uY-3IjI/Sheet1"
        );
        const data = await response.json();

        const formatted = data.map((t) => ({
          id: Number(t.id),
          name: t.name,
          handle: t.handle,
          solved: Number(t.solved) || 0,
          contest: Number(t.contest) || 0,
          avatar: t.avatar || "👨‍💻",
        }));

        // Sort by solved descending for main leaderboard
        const sortedBySolved = [...formatted].sort(
          (a, b) => b.solved - a.solved
        );
        setMainLeaderboard(sortedBySolved);

        // Sort by contest descending for contest leaderboard
        const sortedByContest = [...formatted].sort(
          (a, b) => b.contest - a.contest
        );
        setContestLeaderboard(sortedByContest);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // Handle sorting
  const HandleSort = useCallback(
    (field) => {
      const currentLeaderboard =
        activeTab === "contestLeaderboard"
          ? contestLeaderboard
          : mainLeaderboard;
      const setLeaderboard =
        activeTab === "contestLeaderboard"
          ? setContestLeaderboard
          : setMainLeaderboard;

      const sorted = [...currentLeaderboard].sort(
        (a, b) => b[field] - a[field]
      );
      setLeaderboard(sorted);
      setSortBy(field);
    },
    [mainLeaderboard, contestLeaderboard, activeTab]
  );

  // Filter leaderboard based on search term
  const currentLeaderboard =
    activeTab === "contestLeaderboard" ? contestLeaderboard : mainLeaderboard;
  const filteredLeaderboard = currentLeaderboard.filter((trainee) =>
    trainee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRankBadge = useCallback((rank, isContest = false) => {
    if (rank === 0)
      return {
        medal: isContest ? "🏆" : "🥇",
        crown: true,
        color: isContest
          ? "from-purple-500 to-indigo-600"
          : "from-amber-400 to-amber-600",
        bgColor: isContest ? "bg-purple-500" : "bg-amber-500",
        icon: isContest ? (
          <Star className="w-6 h-6 text-yellow-300" />
        ) : (
          <Crown className="w-6 h-6 text-amber-300" />
        ),
      };
    if (rank === 1)
      return {
        medal: isContest ? "🥈" : "🥈",
        crown: false,
        color: isContest
          ? "from-blue-400 to-blue-600"
          : "from-gray-400 to-gray-600",
        bgColor: isContest ? "bg-blue-500" : "bg-gray-500",
        icon: null,
      };
    if (rank === 2)
      return {
        medal: isContest ? "🥉" : "🥉",
        crown: false,
        color: isContest
          ? "from-green-400 to-green-600"
          : "from-orange-400 to-orange-600",
        bgColor: isContest ? "bg-green-500" : "bg-orange-500",
        icon: null,
      };
    return { medal: null, crown: false, color: "", bgColor: "", icon: null };
  }, []);

  // Enhanced Podium component for top 3
  const Podium = ({ trainees, isContest = false }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
      {trainees.map((trainee, index) => {
        const { medal, crown, color, bgColor, icon } = getRankBadge(
          index,
          isContest
        );
        const height =
          index === 0
            ? "h-60 md:h-72"
            : index === 1
            ? "h-52 md:h-64"
            : "h-48 md:h-60";

        return (
          <div
            key={trainee.id}
            className={`relative rounded-2xl bg-gradient-to-b ${color} text-white 
            transition-all duration-500 hover:scale-105 transform shadow-2xl ${height} 
            flex flex-col justify-end overflow-hidden group`}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <div className="absolute top-2 left-2 text-2xl md:text-4xl">
                {"{ }"}
              </div>
              <div className="absolute bottom-4 right-4 text-xl md:text-3xl">
                &#60;/&#62;
              </div>
            </div>

            {crown && (
              <div className="absolute -top-2 md:-top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                {icon}
              </div>
            )}

            <div className="absolute top-3 md:top-4 right-3 md:right-4">
              <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${bgColor} text-white font-bold text-sm md:text-lg shadow-md`}
              >
                #{index + 1}
              </div>
            </div>

            <div className="flex justify-center mb-3 md:mb-4">
              <div className="relative">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center text-2xl md:text-4xl border-4 border-white shadow-xl bg-gray-100 transform group-hover:scale-110 transition-transform duration-500">
                  {trainee.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-green-500 rounded-full p-1 shadow-md">
                  <div className="w-4 h-4 md:w-6 md:h-6 flex items-center justify-center bg-white rounded-full">
                    <TrendingUpIcon className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center px-3 md:px-4 mb-4 md:mb-6">
              <h3 className="font-bold text-base md:text-xl mb-1 md:mb-2 truncate px-2">
                {trainee.name}
              </h3>
              <div className="flex items-center justify-center space-x-1 md:space-x-2">
                <div className="text-2xl md:text-4xl font-extrabold">
                  {isContest ? trainee.contest : trainee.solved}
                </div>
                <span className="text-xs md:text-sm opacity-90">
                  {isContest ? "points" : "solved"}
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-2 bg-black bg-opacity-20"></div>
            <div className="absolute top-3 md:top-4 left-3 md:left-4 text-2xl md:text-3xl">
              {medal}
            </div>
          </div>
        );
      })}
    </div>
  );

  // Leaderboard table row component
  const LeaderboardRow = ({ trainee, rank, isContest = false }) => (
    <tr
      className={`border-b ${
        darkMode
          ? "border-gray-700 hover:bg-gray-700"
          : "border-gray-200 hover:bg-gray-50"
      } transition-colors duration-200 group`}
    >
      <td className="px-3 md:px-6 py-3 md:py-4 font-medium">
        <div className="flex items-center">
          <span className="text-base md:text-lg">#{rank + 1}</span>
          {rank < 3 && (
            <span className="ml-2 text-lg md:text-xl">
              {rank === 0
                ? isContest
                  ? "🏆"
                  : "🥇"
                : rank === 1
                ? "🥈"
                : "🥉"}
            </span>
          )}
        </div>
      </td>
      <td className="px-3 md:px-6 py-3 md:py-4">
        <div className="flex items-center">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl bg-gray-100 mr-3 md:mr-4 shadow-md group-hover:shadow-lg transition-shadow duration-200">
            {trainee.avatar}
          </div>
          <span className="font-medium text-sm md:text-base">
            {trainee.name}
          </span>
        </div>
      </td>
      <td className="px-3 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg">
        {isContest ? trainee.contest : trainee.solved}
      </td>
      <td className="px-3 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg">
        {trainee.handle}
      </td>
    </tr>
  );

  // Loading component
  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto"></div>
          <p className={`mt-4 ${darkMode ? "text-white" : "text-gray-700"}`}>
            Loading leaderboard data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen py-8 md:py-12 px-3 md:px-4 pt-16 md:pt-20 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-blue-50 to-purple-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1
            className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Coding
            </span>{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Champions
            </span>
          </h1>
          <p
            className={`text-base md:text-xl max-w-2xl mx-auto px-4 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Elite competitive programmers showcasing their algorithmic mastery
          </p>
        </div>
        {/* Tabs - Improved for mobile */}
        <div className="flex justify-center mb-6 md:mb-10 px-2">
          <div
            className={`inline-flex rounded-xl md:rounded-2xl p-1 ${
              darkMode ? "bg-gray-800" : "bg-white shadow-md"
            } overflow-x-auto w-full max-w-4xl`}
          >
            {[
              {
                id: "leaderboard",
                name: "Leaderboard",
                icon: <Trophy size={16} />,
              },
              {
                id: "contestLeaderboard",
                name: "Contest",
                icon: <Zap size={16} />,
              },
              {
                id: "progress",
                name: "Our Progress",
                icon: <TrendingUpIcon size={16} />,
              },
              { id: "goals", name: "Future Goals", icon: <Medal size={16} /> },
              {
                id: "roadmap",
                name: "Learning Path",
                icon: <Users size={16} />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 font-medium rounded-lg md:rounded-xl transition-all flex-shrink-0 ${
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
                <span className="text-sm md:text-base">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Leaderboard Tabs */}
        {(activeTab === "leaderboard" ||
          activeTab === "contestLeaderboard") && (
          <div className="space-y-6 md:space-y-8">
            {/* Summary Cards - Improved for mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div
                className={`p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } transition-transform duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-purple-300`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className={`text-sm md:text-lg font-semibold ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Total Participants
                    </h3>
                    <p
                      className={`text-2xl md:text-3xl font-bold mt-1 md:mt-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {currentLeaderboard.length}
                    </p>
                  </div>
                  <div className="p-2 md:p-3 bg-blue-100 rounded-full">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                  </div>
                </div>
                <p
                  className={`text-xs md:text-sm mt-2 md:mt-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Active competitive programmers
                </p>
              </div>

              <div
                className={`p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } transition-transform duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-amber-300`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className={`text-sm md:text-lg font-semibold ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Top{" "}
                      {activeTab === "contestLeaderboard"
                        ? "Contest"
                        : "Problem"}{" "}
                      Solver
                    </h3>
                    <p
                      className={`text-lg md:text-xl font-bold mt-1 md:mt-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {currentLeaderboard[0]?.name || "No data"}
                    </p>
                    <p
                      className={`text-xs md:text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {currentLeaderboard[0]?.[
                        activeTab === "contestLeaderboard"
                          ? "contest"
                          : "solved"
                      ] || 0}{" "}
                      {activeTab === "contestLeaderboard"
                        ? "points"
                        : "problems solved"}
                    </p>
                  </div>
                  <div className="p-2 md:p-3 bg-amber-100 rounded-full">
                    <Crown className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                  </div>
                </div>
                <div className="flex items-center mt-2 md:mt-4">
                  <span className="text-xs bg-gradient-to-r from-amber-400 to-amber-600 text-white px-2 py-1 rounded-full">
                    {activeTab === "contestLeaderboard"
                      ? "⚡ Contest Champion"
                      : "🏆 Current Champion"}
                  </span>
                </div>
              </div>

              <div
                className={`p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } transition-transform duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-green-300`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className={`text-sm md:text-lg font-semibold ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Total{" "}
                      {activeTab === "contestLeaderboard"
                        ? "Contest Points"
                        : "Problems Solved"}
                    </h3>
                    <p
                      className={`text-2xl md:text-3xl font-bold mt-1 md:mt-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {currentLeaderboard.reduce(
                        (sum, trainee) =>
                          sum +
                          (activeTab === "contestLeaderboard"
                            ? trainee.contest
                            : trainee.solved),
                        0
                      )}
                    </p>
                  </div>
                  <div className="p-2 md:p-3 bg-green-100 rounded-full">
                    <Code className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  </div>
                </div>
                <p
                  className={`text-xs md:text-sm mt-2 md:mt-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  By all participants
                </p>
              </div>
            </div>

            {/* Leaderboard */}
            <div
              className={`p-4 md:p-8 rounded-xl md:rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } w-full`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
                <h2
                  className={`text-xl md:text-2xl font-bold flex items-center gap-2 md:gap-3 mb-4 md:mb-0 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {activeTab === "contestLeaderboard" ? (
                    <Zap className="text-yellow-500" />
                  ) : (
                    <Trophy className="text-amber-500" />
                  )}
                  {activeTab === "contestLeaderboard"
                    ? "Contest Leaderboard"
                    : "Competition Leaderboard"}
                </h2>

                {/* Search Bar - Improved for mobile */}
                <div className={`relative w-full md:w-64`}>
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                  <input
                    type="text"
                    placeholder="Search participants..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2 md:py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                </div>
              </div>

              {/* Podium for top 3 */}
              <Podium
                trainees={filteredLeaderboard.slice(0, 3)}
                isContest={activeTab === "contestLeaderboard"}
              />

              {/* Complete Rankings */}
              <h3
                className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Medal className="text-amber-500" />
                Complete Rankings
              </h3>

              {/* Leaderboard table - Improved for mobile */}
              <div className="overflow-x-auto rounded-xl md:rounded-2xl shadow-inner">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr
                      className={`${
                        darkMode ? "bg-gray-700" : "bg-gray-100"
                      } text-left`}
                    >
                      <th className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base">
                        Rank
                      </th>
                      <th className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base">
                        Participant
                      </th>
                      <th className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base">
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() =>
                            HandleSort(
                              activeTab === "contestLeaderboard"
                                ? "contest"
                                : "solved"
                            )
                          }
                        >
                          <span>
                            {activeTab === "contestLeaderboard"
                              ? "Contest"
                              : "Solved"}
                          </span>
                        </div>
                      </th>
                      <th className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeaderboard.slice(3, 10).map((trainee, index) => (
                      <LeaderboardRow
                        key={trainee.id}
                        trainee={trainee}
                        rank={index + 3}
                        isContest={activeTab === "contestLeaderboard"}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredLeaderboard.length === 0 && (
                <div
                  className={`text-center py-8 md:py-12 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <div className="text-4xl md:text-6xl mb-3 md:mb-4">🔍</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                    No participants found
                  </h3>
                  <p className="text-sm md:text-base">
                    Try adjusting your search criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        {activeTab === "progress" && (
          <div className="space-y-6 md:space-y-8 w-full">
            <div
              className={`p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } w-full`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                {/* Progress Stats */}
                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      label: "Community Members",
                      current: mainLeaderboard.length,
                      target: 200,
                      progress: Math.min(
                        Math.round((mainLeaderboard.length / 200) * 100),
                        100
                      ),
                      icon: <Users className="w-5 h-5 text-blue-500" />,
                      hoverIcon: <Users className="w-5 h-5 text-white" />,
                      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
                    },
                    {
                      label: "Problems Solved",
                      current: mainLeaderboard.reduce(
                        (sum, trainee) => sum + trainee.solved,
                        0
                      ),
                      target: 3000,
                      progress: Math.min(
                        Math.round(
                          (mainLeaderboard.reduce(
                            (sum, trainee) => sum + trainee.solved,
                            0
                          ) /
                            3000) *
                            100
                        ),
                        100
                      ),
                      icon: <Code className="w-5 h-5 text-green-500" />,
                      hoverIcon: <Code className="w-5 h-5 text-white" />,
                      color: "bg-gradient-to-r from-green-500 to-emerald-500",
                    },
                    {
                      label: "Contests Participated",
                      current: mainLeaderboard.reduce(
                        (sum, trainee) => sum + trainee.contest,
                        0
                      ),
                      target: 50,
                      progress: Math.min(
                        Math.round(
                          (mainLeaderboard.reduce(
                            (sum, trainee) => sum + trainee.contest,
                            0
                          ) /
                            50) *
                            100
                        ),
                        100
                      ),
                      icon: <Trophy className="w-5 h-5 text-amber-500" />,
                      hoverIcon: <Trophy className="w-5 h-5 text-white" />,
                      color: "bg-gradient-to-r from-amber-500 to-orange-500",
                    },
                    {
                      label: "Active Participation",
                      current: Math.round(
                        (mainLeaderboard.filter(
                          (t) => t.solved > 0 || t.contest > 0
                        ).length /
                          mainLeaderboard.length) *
                          100
                      ),
                      target: 70,
                      progress: Math.min(
                        Math.round(
                          (mainLeaderboard.filter(
                            (t) => t.solved > 0 || t.contest > 0
                          ).length /
                            mainLeaderboard.length) *
                            100
                        ),
                        100
                      ),
                      icon: (
                        <TrendingUpIcon className="w-5 h-5 text-purple-500" />
                      ),
                      hoverIcon: (
                        <TrendingUpIcon className="w-5 h-5 text-white" />
                      ),
                      color: "bg-gradient-to-r from-purple-500 to-pink-500",
                    },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredStat(idx)}
                      onMouseLeave={() => setHoveredStat(null)}
                      className={`p-3 md:p-4 rounded-lg md:rounded-xl border transition-all duration-300 ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                          : "bg-gray-50 border-gray-200 hover:bg-white"
                      } ${
                        hoveredStat === idx
                          ? "transform hover:scale-105 shadow-md"
                          : ""
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2 md:mb-3">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div
                            className={`p-1 md:p-2 rounded-lg transition-all duration-300 ${
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
                            className={`font-medium text-sm md:text-base ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {stat.label}
                          </span>
                        </div>
                        <span
                          className={`text-xs md:text-sm ${
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
                      <div className="flex justify-between items-center mt-1 md:mt-2">
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
                    className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Level Progression
                  </h3>
                  <div className="space-y-4 md:space-y-6 w-full">
                    {roadmapData.map((level, idx) => {
                      let currentMembers = 0;

                      if (idx === 0) {
                        currentMembers = mainLeaderboard.filter(
                          (t) => t.solved >= 0 && t.solved <= 50
                        ).length;
                      } else if (idx === 1) {
                        currentMembers = mainLeaderboard.filter(
                          (t) => t.solved > 50 && t.solved <= 200
                        ).length;
                      } else if (idx === 2) {
                        currentMembers = mainLeaderboard.filter(
                          (t) => t.solved > 200 && t.solved <= 500
                        ).length;
                      } else if (idx === 3) {
                        currentMembers = mainLeaderboard.filter(
                          (t) => t.solved > 500
                        ).length;
                      }

                      const goalMembers = [200, 50, 20, 2][idx];
                      const progress = Math.round(
                        (currentMembers / goalMembers) * 100
                      );

                      return (
                        <div key={idx} className="group w-full">
                          <div className="flex justify-between items-center mb-1 md:mb-2">
                            <span
                              className={`font-medium text-sm md:text-base ${
                                darkMode ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {level.title}
                            </span>
                            <span
                              className={`text-xs md:text-sm ${
                                darkMode ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              {currentMembers} / {goalMembers} members
                            </span>
                          </div>
                          <div
                            className={`w-full h-2 md:h-3 rounded-full overflow-hidden ${
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
                              Goal: {goalMembers} members
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
              className={`p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } w-full`}
            >
              <h2
                className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Calendar className="text-green-500" />
                Community Performance
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                {[
                  {
                    title: "Average Problems Solved",
                    description: `Average: ${Math.round(
                      mainLeaderboard.reduce((sum, t) => sum + t.solved, 0) /
                        mainLeaderboard.length
                    )} per member`,
                    progress: Math.min(
                      Math.round(
                        (mainLeaderboard.reduce((sum, t) => sum + t.solved, 0) /
                          mainLeaderboard.length /
                          50) *
                          100
                      ),
                      100
                    ),
                    icon: <Code className="w-5 h-5 text-blue-500" />,
                  },
                  {
                    title: "Average Contest Points",
                    description: `Average: ${Math.round(
                      mainLeaderboard.reduce((sum, t) => sum + t.contest, 0) /
                        mainLeaderboard.length
                    )} points`,
                    progress: Math.min(
                      Math.round(
                        (mainLeaderboard.reduce(
                          (sum, t) => sum + t.contest,
                          0
                        ) /
                          mainLeaderboard.length /
                          10) *
                          100
                      ),
                      100
                    ),
                    icon: <Trophy className="w-5 h-5 text-green-500" />,
                  },
                  {
                    title: "Active Members",
                    description: `${
                      mainLeaderboard.filter(
                        (t) => t.solved > 0 || t.contest > 0
                      ).length
                    } out of ${mainLeaderboard.length} members active`,
                    progress: Math.round(
                      (mainLeaderboard.filter(
                        (t) => t.solved > 0 || t.contest > 0
                      ).length /
                        mainLeaderboard.length) *
                        100
                    ),
                    icon: <Users className="w-5 h-5 text-amber-500" />,
                  },
                  {
                    title: "Top Performer",
                    description: `${mainLeaderboard[0]?.name || "N/A"} with ${
                      mainLeaderboard[0]?.solved || 0
                    } problems solved`,
                    progress: 100,
                    icon: <Crown className="w-5 h-5 text-purple-500" />,
                  },
                ].map((initiative, idx) => (
                  <div
                    key={idx}
                    className={`p-3 md:p-4 rounded-lg md:rounded-xl border transition-transform duration-300 hover:scale-[1.02] ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                        : "bg-gray-50 border-gray-200 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div
                        className={`p-1 md:p-2 rounded-full ${
                          darkMode ? "bg-gray-600" : "bg-white shadow-sm"
                        }`}
                      >
                        {initiative.icon}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-semibold text-sm md:text-base ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {initiative.title}
                        </h3>
                        <p
                          className={`text-xs md:text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {initiative.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
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
            className={`p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } w-full`}
          >
            <h2
              className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <Target className="text-red-500" />
              Our 2024 Goals
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
              {/* Community Growth */}
              <div>
                <h3
                  className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Community Growth
                </h3>
                <div className="space-y-3 md:space-y-4">
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
                      className={`p-3 md:p-4 rounded-lg md:rounded-xl border transition-transform duration-300 hover:scale-[1.02] ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                          : "bg-gray-50 border-gray-200 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        <div
                          className={`p-1 md:p-2 rounded-full ${
                            darkMode ? "bg-gray-600" : "bg-gray-100"
                          }`}
                        >
                          {goal.icon}
                        </div>
                        <h4
                          className={`font-semibold text-sm md:text-base ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {goal.title}
                        </h4>
                      </div>
                      <p
                        className={`text-xs md:text-sm ${
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
                  className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Competitive Goals
                </h3>
                <div className="space-y-3 md:space-y-4">
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
                      className={`p-3 md:p-4 rounded-lg md:rounded-xl border transition-transform duration-300 hover:scale-[1.02] ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                          : "bg-gray-50 border-gray-200 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        <div
                          className={`p-1 md:p-2 rounded-full ${
                            darkMode ? "bg-gray-600" : "bg-gray-100"
                          }`}
                        >
                          {goal.icon}
                        </div>
                        <h4
                          className={`font-semibold text-sm md:text-base ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {goal.title}
                        </h4>
                      </div>
                      <p
                        className={`text-xs md:text-sm ${
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
            <div className="mt-6 md:mt-8">
              <h3
                className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Long-term Vision
              </h3>
              <div
                className={`p-3 md:p-4 rounded-lg md:rounded-xl ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                } transition-colors duration-300`}
              >
                <p
                  className={`text-sm md:text-base ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
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
            className={`p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } w-full`}
          >
            <h2
              className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <BookOpen className="text-indigo-500" />
              Learning Path
            </h2>

            <div className="space-y-6 md:space-y-8 w-full">
              {roadmapData.map((level, idx) => (
                <div
                  key={idx}
                  className={`p-4 md:p-6 rounded-lg md:rounded-xl border transition-all duration-300 hover:shadow-lg ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                      : "bg-gray-50 border-gray-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div
                      className={`text-2xl md:text-3xl ${
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
                        className={`text-lg md:text-xl font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {level.title}
                      </h3>
                      <div className="flex items-center gap-3 md:gap-4 mt-1 md:mt-2">
                        <span
                          className={`text-xs md:text-sm flex items-center gap-1 ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <ClockIcon className="w-3 h-3 md:w-4 md:h-4" />
                          {level.duration}
                        </span>
                        <span
                          className={`text-xs md:text-sm flex items-center gap-1 ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
                          {level.resources} resources
                        </span>
                      </div>
                    </div>
                    <div
                      className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium ${
                        darkMode
                          ? "bg-gray-600 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      Level {idx + 1}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                    {level.goals.map((goal, goalIdx) => (
                      <div
                        key={goalIdx}
                        className={`p-3 md:p-4 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
                          darkMode
                            ? "bg-gray-600 border-gray-500 hover:bg-gray-500"
                            : "bg-white border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-start gap-2 md:gap-3">
                          <CheckCircle
                            className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 ${
                              goalIdx === 0
                                ? "text-green-500"
                                : goalIdx === 1
                                ? "text-yellow-500"
                                : "text-red-500"
                            }`}
                          />
                          <span
                            className={`text-xs md:text-sm ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {goal}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t flex justify-between items-center">
                    <span
                      className={`text-xs md:text-sm ${
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
            <div className="mt-6 md:mt-8">
              <h3
                className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Recommended Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
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
                    className={`p-3 md:p-4 rounded-lg md:rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                        : "bg-gray-50 border-gray-200 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                      <span className="text-xl md:text-2xl">
                        {resource.icon}
                      </span>
                      <h4
                        className={`font-semibold text-sm md:text-base ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {resource.title}
                      </h4>
                    </div>
                    <p
                      className={`text-xs md:text-sm ${
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
