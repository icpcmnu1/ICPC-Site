import React, { useState, useEffect } from "react";
import { ChevronRight, MapPin } from "lucide-react";
import { communityImages } from "../../data/homeData";

const HomePage = ({ darkMode, setCurrentPage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % communityImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
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
            className={`text-4xl md:text-6xl lg:text-8xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            } tracking-tight`}
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
              🚀 Join 130+ trainees on an incredible journey from beginner to
              ICPC finalist. Together, we code, compete, and conquer!
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-animate
          >
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
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
            data-animate
          >
            {[
              { number: "130+", label: "trainees" },
              { number: "3", label: "Contests" },
              { number: "1", label: "ECPC Finals" },
              { number: "6", label: "Divisions" },
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
};

export default HomePage;
