import React, { useState, useRef } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MobileMenu from "./components/MobileMenu";

import Home from "./pages/Home";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import Contact from "./pages/Contact";

const MiniaICPCCommunity = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [darkMode, setDarkMode] = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { showScrollTop, scrollToTop } = useScrollAnimation();
  const scrollRef = useRef();

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home darkMode={darkMode} setCurrentPage={setCurrentPage} />;
      case "about":
        return <About darkMode={darkMode} />;
      case "roadmap":
        return <Roadmap darkMode={darkMode} />;
      case "dashboard":
        return <Dashboard darkMode={darkMode} />;
      case "community":
        return <Community darkMode={darkMode} />;
      case "contact":
        return <Contact darkMode={darkMode} />;
      default:
        return <Home darkMode={darkMode} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
        }`}
      >
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <MobileMenu
          darkMode={darkMode}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        <main ref={scrollRef}>{renderPage()}</main>

        <ScrollToTop
          darkMode={darkMode}
          showScrollTop={showScrollTop}
          scrollToTop={scrollToTop}
        />

        <Footer darkMode={darkMode} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default MiniaICPCCommunity;
