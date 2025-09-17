import { Brain, BookOpen, Target, Zap, Users, Calendar } from "lucide-react";

export const divisions = [
  {
    name: "Admins",
    icon: Target,
    description:
      "Organize events, manage resources, and ensure smooth operations",
    color: "from-green-500 to-teal-500",
  },
  {
    name: "Mentors",
    icon: BookOpen,
    description:
      "Guide and support members through their competitive programming journey",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Problem Setters",
    icon: Brain,
    description:
      "Create challenging and educational problems for contests and training",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Media Team",
    icon: Zap,
    description: "Handle social media, documentation, and community outreach",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "HR Team",
    icon: Users,
    description:
      "Focus on recruitment, member engagement, and building a strong community",
    color: "from-yellow-500 to-amber-500",
  },
  {
    name: "Organize Team",
    icon: Calendar,
    description:
      "Plan, coordinate, and execute events and competitions seamlessly",
    color: "from-indigo-500 to-sky-500",
  },
];
