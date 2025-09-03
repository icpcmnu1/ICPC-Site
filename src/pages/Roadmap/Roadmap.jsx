import React, { useState } from "react";
import { ChevronDown, CheckCircle, BookOpen, Target } from "lucide-react";
import { roadmapData } from "../../data/roadmapData";

const Roadmap = ({ darkMode }) => {
  const [expandedLevel, setExpandedLevel] = useState(null);

  return (
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

                  <div className="mt-6 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}">
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
      </div>
    </div>
  );
};

export default Roadmap;
