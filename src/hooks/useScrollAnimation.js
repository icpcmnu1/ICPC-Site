import { useState, useEffect } from "react";

export const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const elements = document.querySelectorAll("[data-animate]");
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (
          rect.top < window.innerHeight * 0.8 &&
          !animatedElements.has(index)
        ) {
          el.classList.add("animate-in");
          setAnimatedElements((prev) => new Set([...prev, index]));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animatedElements]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { showScrollTop, scrollToTop };
};
