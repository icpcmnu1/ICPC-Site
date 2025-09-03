import React from "react";
import { Code, Github, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = ({ darkMode, setCurrentPage }) => {
  return (
    <footer
      className={`py-12 px-6 border-t ${
        darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Minia ICPC</span>
            </div>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Competitive Programming Community of Minia National University.
              Empowering students to excel in algorithmic problem solving and
              competitions.
            </p>
          </div>

          <div>
            <h3
              className={`font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <div className="space-y-2">
              {[
                "Home",
                "About",
                "Roadmap",
                "Dashboard",
                "Community",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className={`block text-sm transition-colors ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3
              className={`font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`border-t mt-8 pt-8 text-center ${
            darkMode
              ? "border-gray-800 text-gray-400"
              : "border-gray-200 text-gray-600"
          }`}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Minia ICPC Community. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
