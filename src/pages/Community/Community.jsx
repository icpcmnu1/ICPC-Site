import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Facebook,
  Linkedin,
  Mail,
  Search,
  Filter,
  Trophy,
  Star,
  Users,
  Calendar,
  BookOpen,
  Code,
  BarChart3,
  Crown,
} from "lucide-react";

const Community = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [activeMember, setActiveMember] = useState(null);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const filterMenuRef = useRef(null);

  // Role categories
  const roleCategories = [
    { key: "all", label: "All" },
    {
      key: "high_board",
      label: "High Board",
      keywords: ["president", "vice president", "community manager"],
    },
    { key: "heads", label: "Heads", keywords: ["head"] },
    { key: "mentor", label: "Mentor", keywords: ["mentor", "instructor"] },
    {
      key: "problem_setter",
      label: "Problem Setters",
      keywords: ["problem setter", "problem setting"],
    },
    {
      key: "organizer",
      label: "Organizer",
      keywords: [
        "organizer",
        "organiser",
        "organizers head",
        "vice head organiser",
      ],
    },
    { key: "hr", label: "HR", keywords: ["hr"] },
    {
      key: "media",
      label: "Media",
      keywords: ["media", "content writer", "video editor"],
    },
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      title: "Weekly Coding Contest",
      date: "Tomorrow, 7:00 PM",
      participants: 45,
      type: "Contest",
    },
    {
      title: "Data Structures Workshop",
      date: "Saturday, 5:00 PM",
      participants: 32,
      type: "Workshop",
    },
    {
      title: "Algorithm Study Group",
      date: "Sunday, 4:00 PM",
      participants: 28,
      type: "Study Group",
    },
  ];

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://opensheet.elk.sh/1VF6w6SKcT9EkDjmGVjpRJZ2aMZ4hzSgXHCeJd4h0iPM/Sheet1"
        );
        const data = await response.json();

        const formatted = data.map((member) => {
          const links = {};

          if (member.facebook) links.facebook = member.facebook;
          if (member.linkedin) links.linkedin = member.linkedin;
          if (member.mail) links.mail = member.mail;
          if (member.github) links.github = member.github;

          return {
            id: Number(member.id),
            name: member.name,
            role: member.role,
            image: member.image,
            about: member.about,
            rating: Number(member.rating) || 0,
            skills: member.skills ? member.skills.split(",") : [],
            links: links,
          };
        });

        setTeamMembers(formatted);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTeamMembers();
  }, []);

  // Calculate community stats from team members
  const communityStats = {
    totalMembers: teamMembers.length,
    activeThisWeek: teamMembers.filter((member) => member.rating >= 4).length,
    problemsSolved: teamMembers.reduce(
      (sum, member) => sum + (member.skills?.length || 0) * 10,
      0
    ),
    contestsParticipated:
      teamMembers.filter(
        (member) =>
          member.role.toLowerCase().includes("problem setter") ||
          member.role.toLowerCase().includes("mentor")
      ).length * 5,
  };

  // Top contributors (you can customize this logic)
  const topContributors = teamMembers.slice(0, 3).map((member, index) => ({
    ...member,
    contributions: Math.floor(member.rating * 30 + member.skills?.length * 2),
    rank: index + 1,
  }));

  // Close filter menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showFilterMenu &&
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target)
      ) {
        setShowFilterMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFilterMenu]);

  // Filter members based on search and role filter
  const filteredMembers = teamMembers.filter((member) => {
    const memberRoleLc = member.role.toLowerCase();
    const searchLc = searchTerm.toLowerCase();

    const matchesSearch =
      member.name.toLowerCase().includes(searchLc) ||
      memberRoleLc.includes(searchLc);

    // Category-based filtering
    const activeCategory = roleCategories.find((c) => c.key === filterRole);
    let matchesRole = true;
    if (activeCategory && activeCategory.key !== "all") {
      matchesRole =
        activeCategory.keywords?.some((kw) => memberRoleLc.includes(kw)) ??
        true;
    } else if (filterRole !== "all" && !activeCategory) {
      matchesRole = memberRoleLc === filterRole.toLowerCase();
    }

    return matchesSearch && matchesRole;
  });

  // Get unique roles for filter
  const uniqueRoles = [...new Set(teamMembers.map((member) => member.role))];

  // Stats cards data
  const stats = [
    {
      label: "Total Members",
      value: communityStats.totalMembers,
      icon: Users,
      color: "text-blue-500",
    },
    {
      label: "Active This Week",
      value: communityStats.activeThisWeek,
      icon: BarChart3,
      color: "text-green-500",
    },
    {
      label: "Problems Solved",
      value: communityStats.problemsSolved.toLocaleString(),
      icon: Code,
      color: "text-purple-500",
    },
    {
      label: "Contests Participated",
      value: communityStats.contestsParticipated,
      icon: Trophy,
      color: "text-orange-500",
    },
  ];

  // Function to render social links
  const renderSocialLinks = (links) => {
    const socialPlatforms = [
      { key: "github", icon: Github, label: "GitHub" },
      { key: "facebook", icon: Facebook, label: "Facebook" },
      { key: "linkedin", icon: Linkedin, label: "LinkedIn" },
      { key: "mail", icon: Mail, label: "Email" },
    ];

    return socialPlatforms
      .map((platform) => {
        if (links[platform.key]) {
          const Icon = platform.icon;
          return (
            <a
              key={platform.key}
              href={links[platform.key]}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              } transition-colors duration-200`}
              title={platform.label}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        }
        return null;
      })
      .filter(Boolean);
  };

  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
          <p className={`mt-4 ${darkMode ? "text-white" : "text-gray-700"}`}>
            Loading community data...
          </p>
        </div>
      </div>
    );
  }

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

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } transition-transform hover:scale-105`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-full ${
                      darkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div
              className={`p-6 rounded-2xl shadow-lg mb-8 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div
                  className={`flex-1 relative ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>

                {/* Filter Dropdown */}
                <div className="relative" ref={filterMenuRef}>
                  <button
                    onClick={() => setShowFilterMenu((v) => !v)}
                    className={`inline-flex items-center gap-2 px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                        : "bg-gray-50 border-gray-200 text-gray-900 hover:bg-gray-100"
                    } transition-colors`}
                    aria-haspopup="menu"
                    aria-expanded={showFilterMenu}
                  >
                    <Filter className="w-5 h-5" />
                    <span>
                      {roleCategories.find((c) => c.key === filterRole)
                        ?.label || filterRole === "all"
                        ? "Filter: " +
                          (roleCategories.find((c) => c.key === filterRole)
                            ?.label || "All")
                        : "Filter"}
                    </span>
                  </button>

                  {showFilterMenu && (
                    <div
                      className={`absolute right-0 mt-2 w-60 rounded-xl shadow-lg border z-10 ${
                        darkMode
                          ? "bg-gray-800 border-gray-700"
                          : "bg-white border-gray-200"
                      }`}
                      role="menu"
                    >
                      <div className="p-2">
                        <p
                          className={`px-2 pb-1 text-xs ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Categories
                        </p>
                        {roleCategories.map((cat) => (
                          <button
                            key={cat.key}
                            onClick={() => {
                              setFilterRole(cat.key);
                              setShowFilterMenu(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                              darkMode
                                ? "hover:bg-gray-700 text-white"
                                : "hover:bg-gray-100 text-gray-900"
                            } ${
                              filterRole === cat.key
                                ? darkMode
                                  ? "bg-gray-700"
                                  : "bg-gray-100"
                                : ""
                            }`}
                            role="menuitem"
                          >
                            {cat.label}
                          </button>
                        ))}

                        <div
                          className={`my-2 h-px ${
                            darkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        />

                        <p
                          className={`px-2 pb-1 text-xs ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Exact Roles
                        </p>
                        <div className="max-h-48 overflow-auto pr-1">
                          {uniqueRoles.map((role) => (
                            <button
                              key={role}
                              onClick={() => {
                                setFilterRole(role);
                                setShowFilterMenu(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                darkMode
                                  ? "hover:bg-gray-700 text-white"
                                  : "hover:bg-gray-100 text-gray-900"
                              } ${
                                filterRole === role
                                  ? darkMode
                                    ? "bg-gray-700"
                                    : "bg-gray-100"
                                  : ""
                              }`}
                              role="menuitem"
                            >
                              {role}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Members Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className={`${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-50"
                  } p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } group relative overflow-hidden`}
                >
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-transparent group-hover:border-blue-500 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            member.name
                          )}&background=random`;
                        }}
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
                      } mb-1`}
                    >
                      {member.role}
                    </p>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {member.rating}/5
                      </span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mb-4">
                    {renderSocialLinks(member.links)}
                  </div>

                  <div className="text-center">
                    <p
                      className={`text-sm mb-4 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      } line-clamp-2`}
                    >
                      {member.about}
                    </p>

                    <button
                      onClick={() => setActiveMember(member)}
                      className={`text-sm px-4 py-2 rounded-lg ${
                        darkMode
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      } transition-colors`}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <div
                className={`text-center py-12 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No members found matching your search criteria.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="mt-8 lg:mt-0 space-y-6">
            {/* Top Contributors */}
            <div
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Trophy className="text-yellow-500" />
                Top Contributors
              </h2>

              <div className="space-y-4">
                {topContributors
                  .sort((a, b) => {
                    if (b.rating !== a.rating) {
                      return b.rating - a.rating;
                    }
                    return b.contributions - a.contributions;
                  })
                  .slice(0, 3)
                  .map((contributor, index) => (
                    <div
                      key={contributor.id}
                      className="flex items-center gap-3"
                    >
                      <div className="relative">
                        <img
                          src={contributor.image}
                          alt={contributor.name}
                          className="w-10 h-10 rounded-full object-cover"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              contributor.name
                            )}&background=random`;
                          }}
                        />
                        {index === 0 && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                            <Crown className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-medium ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {contributor.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span
                              className={`text-xs ${
                                darkMode ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              {contributor.rating}/5
                            </span>
                          </div>
                          <span
                            className={`text-xs ${
                              darkMode ? "text-gray-500" : "text-gray-400"
                            }`}
                          >
                            •
                          </span>
                          <span
                            className={`text-xs ${
                              darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {contributor.contributions} contributions
                          </span>
                        </div>
                      </div>
                      <div
                        className={`text-sm font-bold ${
                          index === 0
                            ? "text-yellow-500"
                            : index === 1
                            ? "text-gray-400"
                            : "text-orange-500"
                        }`}
                      >
                        #{index + 1}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Calendar className="text-blue-500" />
                Upcoming Events
              </h2>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
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
                      {event.title}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <span
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {event.date}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode
                            ? "bg-gray-600 text-gray-300"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {event.participants} joining
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Resources */}
            <div
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <BookOpen className="text-green-500" />
                Community Resources
              </h2>

              <div className="space-y-3">
                {[
                  { name: "Study Groups", icon: Users },
                  { name: "Code Repository", icon: Github },
                  { name: "Learning Materials", icon: BookOpen },
                  { name: "Contest Solutions", icon: Code },
                ].map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-gray-50 border-gray-200"
                      } flex items-center gap-3 transition-transform hover:scale-[1.02]`}
                    >
                      <div
                        className={`p-2 rounded-full ${
                          darkMode ? "bg-gray-600" : "bg-gray-200"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`font-medium ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {resource.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member Detail Modal */}
      {activeMember && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          onClick={() => setActiveMember(null)}
        >
          {/* Overlay مع blur */}
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>

          {/* Modal Content */}
          <div
            className={`relative max-w-md w-full rounded-2xl shadow-2xl ${
              darkMode
                ? "bg-gray-800 border border-gray-600"
                : "bg-white border border-gray-300"
            } overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="text-center mb-4">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-500">
                  <img
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        activeMember.name
                      )}&background=random`;
                    }}
                  />
                </div>
                <h3
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {activeMember.name}
                </h3>
                <p
                  className={`text-lg ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  } mb-2`}
                >
                  {activeMember.role}
                </p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {activeMember.rating}/5
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  About
                </h4>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {activeMember.about}
                </p>
              </div>

              <div className="mb-6">
                <h4
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeMember.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-3 mb-6">
                {renderSocialLinks(activeMember.links)}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => setActiveMember(null)}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
                  }`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
