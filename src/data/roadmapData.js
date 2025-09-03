import { Code, Database, Brain } from "lucide-react";

export const roadmapData = [
  {
    level: 0,
    title: "Programming Fundamentals",
    icon: Code, // Store the component, not JSX
    color: "from-blue-500 to-cyan-500",
    problems: 150,
    contests: 8,
    topics: [
      "Variables & Data Types",
      "Loops & Conditions",
      "Functions",
      "Arrays",
      "Strings",
      "Basic Math",
    ],
    resources: [
      "C++ Basics Sheet",
      "Problem Solving Beginner",
      "HackerRank 30 Days",
    ],
  },
  {
    level: 1,
    title: "Data Structures & Algorithms",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    problems: 200,
    contests: 12,
    topics: [
      "Stack & Queue",
      "Linked Lists",
      "Trees",
      "Sorting",
      "Searching",
      "Recursion",
    ],
    resources: ["DS & Algo Sheet", "LeetCode Easy", "GeeksforGeeks Practice"],
  },
  {
    level: 2,
    title: "Advanced Algorithms",
    icon: Brain,
    color: "from-green-500 to-teal-500",
    problems: 250,
    contests: 15,
    topics: [
      "Dynamic Programming",
      "Graph Algorithms",
      "Greedy",
      "Divide & Conquer",
      "Number Theory",
    ],
    resources: ["Codeforces Gym", "AtCoder Problems", "SPOJ Classical"],
  },
];
