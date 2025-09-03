import React from "react";
import { Github, Facebook, Instagram, Linkedin } from "lucide-react";
import { teamMembers } from "../../data/teamMembers";

const Community = ({ darkMode }) => {
  return (
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
                  } mb-1`}
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
                            title={platform}
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
};

export default Community;
