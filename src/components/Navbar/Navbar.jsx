import React from "react";
import {
  Home,
  User,
  MapPin,
  BarChart3,
  Users,
  Mail,
  Moon,
  Sun,
} from "lucide-react";

const Navbar = ({ darkMode, setDarkMode, currentPage, setCurrentPage }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900/95 backdrop-blur-md text-white"
          : "bg-white/95 backdrop-blur-md text-gray-900"
      } border-b ${
        darkMode ? "border-gray-800" : "border-gray-200"
      } shadow-lg py-4`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
              <img
                src="https://github.com/Mazen-mo-10/imgs/blob/main/icon_Com.jpg?raw=true"
                alt="MNU ICPC Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              MNU ICPC
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: "Home", page: "home", icon: Home },
              { name: "About", page: "about", icon: User },
              { name: "Roadmap", page: "roadmap", icon: MapPin },
              { name: "Dashboard", page: "dashboard", icon: BarChart3 },
              { name: "Community", page: "community", icon: Users },
              { name: "Contact", page: "contact", icon: Mail },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setCurrentPage(item.page)}
                className={`flex items-center gap-1 transition-all duration-200 ${
                  currentPage === item.page
                    ? darkMode
                      ? "text-blue-400"
                      : "text-blue-600"
                    : darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
