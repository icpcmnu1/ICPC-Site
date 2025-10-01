import React from "react";
import {
  Code,
  Github,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const Footer = ({ darkMode, setCurrentPage }) => {
  return (
    <footer
      className={`py-12 px-6 border-t ${
        darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setCurrentPage("home")}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110">
                <img
                  src="https://github.com/Mazen-mo-10/imgs/blob/main/icon_Com.jpg?raw=true"
                  alt="ICPC MNU Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                ICPC MNU
              </span>
            </div>

            {/* Text */}
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
                  className={`block text-sm transition-all duration-300 ${
                    darkMode
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-500"
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
                //{ icon: Github, href: "#", color: "gray" },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/19QcYmDCRi/",
                  color: "blue",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/icpcmnu?igsh=dGI5aDN1NDlnam52",
                  color: "pink",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/icpc-mnu-community/posts/?feedView=all",
                  color: "blue",
                },
                {
                  icon: MessageCircle,
                  href: "https://whatsapp.com/channel/0029Vb5vctoLo4hgPJnL743T",
                  color: "green",
                },
                {
                  icon: Github,
                  href: "https://github.com/icpcmnu1",
                  color: "gray",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  target="_blank"
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
