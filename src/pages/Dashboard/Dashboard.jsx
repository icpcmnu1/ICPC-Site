import React from "react";
import { roadmapData } from "../../data/roadmapData";

const Dashboard = ({ darkMode }) => {
  return (
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
};

export default Dashboard;
