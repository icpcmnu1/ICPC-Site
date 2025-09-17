import React from "react";
import {
  MapIcon,
  Mail,
  Phone,
  Github,
  Facebook,
  Instagram,
  Linkedin,
  //WhatsappIcon,
  MessageCircle,
} from "lucide-react";

const Contact = ({ darkMode }) => {
  return (
    <div className="min-h-screen py-20 px-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <h1
            className={`text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Connect with us and join our growing community of competitive
            programmers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div data-animate>
            <h2
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Contact Information
            </h2>

            <div className="space-y-6">
              <div
                className="flex items-center gap-4 cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/Zg6jVgqdX886wa437",
                    "_blank"
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <div
                  className={`w-12 h-12 rounded-full ${
                    darkMode ? "bg-blue-900/30" : "bg-blue-100"
                  } flex items-center justify-center`}
                >
                  <MapIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Location
                  </h3>
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    Minia National University, Faculty of Computer Science
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 transition-transform duration-200 hover:scale-105"
                onClick={() =>
                  (window.location.href = "mailto:icpcmnu1@gmail.com")
                }
                style={{ cursor: "pointer" }}
              >
                <div
                  className={`w-12 h-12 rounded-full ${
                    darkMode ? "bg-green-900/30" : "bg-green-100"
                  } flex items-center justify-center transition-colors duration-200 ${
                    darkMode ? "hover:bg-green-900/50" : "hover:bg-green-200"
                  }`}
                >
                  <Mail className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Email
                  </h3>
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    icpcmnu1@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Follow Us
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
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? "bg-gray-800 hover:bg-gray-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div data-animate>
            <h2
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Send Us a Message
            </h2>

            <form
              className="space-y-6"
              action="https://formspree.io/f/xandgjzp"
              method="POST"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                        : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                  />
                </div>
                <div>
                  <label
                    className={`block mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                        : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  className={`block mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
