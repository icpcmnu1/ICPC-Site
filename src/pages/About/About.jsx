import React from "react";
import { Star, Trophy, Users, Award } from "lucide-react";
import { divisions } from "../../data/aboutData";

const About = ({ darkMode }) => {
  return (
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
              year: "2019",
              title: "The Beginning",
              content:
                "Started as a small group of passionate programmers with big dreams and endless determination.",
              icon: <Star className="w-6 h-6" />,
            },
            {
              year: "2021",
              title: "First Major Achievement",
              content:
                "Qualified for our first ECPC finals, marking the beginning of our competitive journey.",
              icon: <Trophy className="w-6 h-6" />,
            },
            {
              year: "2023",
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
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
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
            {divisions.map((division, index) => (
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
                  {/* FIX: Render the icon as a component */}
                  <division.icon className="w-8 h-8" />
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
};

export default About;
