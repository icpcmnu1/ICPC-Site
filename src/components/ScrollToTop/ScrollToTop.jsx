import React from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = ({ darkMode, showScrollTop, scrollToTop }) => {
  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
        darkMode
          ? "bg-blue-600 hover:bg-blue-500 text-white"
          : "bg-blue-500 hover:bg-blue-400 text-white"
      } shadow-lg`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
