import React, { useState } from "react";
import {
  Github,
  Facebook,
  Instagram,
  Linkedin,
  Search,
  Filter,
  Trophy,
  Star,
  Users,
  Calendar,
  BookOpen,
  Code,
  BarChart3,
  Crown,
} from "lucide-react";

const Community = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, SetFilterRole] = useState("all");
  const [activeMember, setActiveMember] = useState(null);

  // Team members data with individual ratings and skills
  const teamMembers = [
    {
      name: "Mazen Mohamed",
      role: "Problem Setter & Mentor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/MazenImg.jpg?raw=true",
      about:
        "Problem setter for our sheets, Mentor in phase 1, and developer of our community website",
      rating: 5,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "C++",
        "Java",
        "C#",
        "Algorithms",
        "Data Structures",
        "Problem Solving",
        "Web Development",
        "AI Engineering",
        "Machine Learning",
        "Deep Learning",
        "Python",
        "SQL",
      ],
      links: {
        github: "https://github.com/Mazen-mo-10",
        linkedin: "https://www.linkedin.com/in/mazenmohamed2212/",
        facebook: "https://www.facebook.com/share/19wwAcpoa2/",
      },
    },
    {
      name: "Yossef Behaa",
      role: "President",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/yossef.jpeg?raw=true",
      about: "Leader of the community and coordinator of all activities",
      rating: 4.8,
      skills: [
        "Leadership",
        "Organization",
        "Communication",
        "Team Management",
      ],
      links: {
        facebook: "https://www.facebook.com/share/1ZXunReQZ3/",
        linkedin: "https://www.linkedin.com/in/youssef%D9%80bahaa/",
      },
    },
    {
      name: "Steven Ezzat",
      role: "Vice president",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/steven_Img.jpeg?raw=true",
      about: "Community admin overseeing organization and management",
      rating: 4.7,
      skills: ["Management", "Organization", "Communication", "Event Planning"],
      links: {
        facebook: "https://www.facebook.com/share/171mJoyLWF/",
        linkedin: "https://www.linkedin.com/in/steven-ezzat-18921a376/",
      },
    },
    {
      name: "Ahmed Safaa",
      role: "Vice president",
      image: "",
      about:
        "Results-driven vice president with exceptional analytical skills and talent for optimizing organizational performance",
      rating: 4.8,
      skills: [
        "Performance Analysis",
        "Process Optimization",
        "Data-Driven Decisions",
        "Stakeholder Management",
        "Strategic Planning",
      ],
      links: {},
    },
    {
      name: "Pola Amir",
      role: "Vice president",
      image: "",
      about:
        "Innovative leader with expertise in developing growth strategies and fostering collaborative environments for success",
      rating: 4.7,
      skills: [
        "Growth Strategy",
        "Innovation Management",
        "Collaborative Leadership",
        "Change Management",
        "Communication",
      ],
      links: {},
    },
    {
      name: "Ali Adel",
      role: "HR Head",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/Ali_Img.jpeg?raw=true",
      about:
        "Community admin fostering team spirit, engagement, and activities",
      rating: 4.6,
      skills: [
        "Community Building",
        "Communication",
        "Event Coordination",
        "Team Engagement",
      ],
      links: {
        facebook: "https://www.facebook.com/share/16C5uASpSF/",
        linkedin: "https://www.linkedin.com/in/ali-adel-12008a2b3/",
      },
    },
    {
      name: "Habiba Mahmoud",
      role: "Media Head",
      image: "",
      about:
        "Creative media strategist with expertise in brand storytelling and digital content development across multiple platforms",
      rating: 4.7,
      skills: [
        "Media Strategy",
        "Content Creation",
        "Brand Management",
        "Social Media",
        "Digital Marketing",
      ],
      links: {},
    },

    {
      name: "Anas Mohamed",
      role: "Instructor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/Anas_Img.jpeg?raw=true",
      about:
        "Engaging instructor with talent for breaking down complex technical concepts into digestible learning experiences",
      rating: 4.7,
      skills: [
        "Technical Instruction",
        "Curriculum Development",
        "Concept Explanation",
        "Python",
        "Java",
      ],
      links: {
        linkedin: "https://www.linkedin.com/in/anas-desoky-762715242/",
      },
    },
    {
      name: "Abd-El Rahman Essam",
      role: "Mentor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/Abdo_Img.jpeg?raw=true",
      about: "Advanced-level mentor with strong problem-solving skills",
      rating: 4.8,
      skills: [
        "Advanced Algorithms",
        "Data Structures",
        "C++",
        "Python",
        "Teaching",
      ],
      links: {
        facebook: "https://www.facebook.com/share/171ofq66xL/",
        linkedin: "https://www.linkedin.com/in/abd-el-rahman-essam-132842344/",
      },
    },
    {
      name: "Abdullah Haitham",
      role: "Mentor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/abdall.jpeg?raw=true",
      about: "Advanced-level mentor with strong problem-solving skills",
      rating: 4.8,
      skills: [
        "Advanced Algorithms",
        "Data Structures",
        "C++",
        "Python",
        "Teaching",
      ],
      links: {
        linkedin: "https://www.linkedin.com/in/abdullah-haitham/",
      },
    },
    {
      name: "Enas Ibrahim",
      role: "Mentor",
      image: "",
      about:
        "Empathetic mentor with talent for creating supportive learning environments and building student confidence",
      rating: 4.7,
      skills: [
        "Student Support",
        "Confidence Building",
        "Learning Strategies",
        "Progress Monitoring",
        "Python",
      ],
      links: {},
    },
    {
      name: "A'laa Khaled",
      role: "Mentor",
      image: "",
      about:
        "Structured mentor with methodical approach to teaching programming concepts and problem-solving techniques",
      rating: 4.5,
      skills: [
        "Methodical Teaching",
        "Concept Reinforcement",
        "Step-by-Step Guidance",
        "Technical Explanation",
        "Java",
      ],
      links: {},
    },
    {
      name: "Fadwa Mahmoud",
      role: "Mentor",
      image: "",
      about:
        "Adaptive mentor skilled at tailoring explanations to different learning styles and knowledge levels",
      rating: 4.6,
      skills: [
        "Adaptive Teaching",
        "Learning Style Assessment",
        "Differentiated Instruction",
        "Concept Visualization",
        "Python",
      ],
      links: {},
    },
    {
      name: "Malak Tamer",
      role: "Mentor",
      image: "",
      about:
        "Encouraging mentor with talent for fostering growth mindset and resilience in programming students",
      rating: 4.7,
      skills: [
        "Growth Mindset Coaching",
        "Resilience Building",
        "Positive Reinforcement",
        "Skill Development",
        "C++",
      ],
      links: {},
    },
    {
      name: "Muhamed Mustafa",
      role: "Mentor",
      image: "",
      about:
        "Patient and structured mentor with exceptional talent for breaking down complex programming concepts into manageable learning steps",
      rating: 4.5,
      skills: [
        "C++",
        "Algorithm Design",
        "Step-by-Step Instruction",
        "Debugging Techniques",
        "Code Optimization",
      ],
      links: {},
    },
    {
      name: "Hager Alaa",
      role: "Mentor",
      image: "",
      about:
        "Detail-oriented Java specialist with methodical teaching approach that builds strong foundational programming skills",
      rating: 4.6,
      skills: [
        "Java",
        "Object-Oriented Programming",
        "Concept Reinforcement",
        "Technical Explanation",
        "Project Guidance",
      ],
      links: {},
    },
    {
      name: "Abdelhalim Mohamed",
      role: "Mentor",
      image: "",
      about:
        "Experienced Java mentor with systematic problem-solving methodology that empowers students to tackle complex challenges",
      rating: 4.7,
      skills: [
        "Java",
        "Problem-Solving Methodology",
        "Code Architecture",
        "Technical Mentoring",
        "Algorithm Implementation",
      ],
      links: {},
    },
    {
      name: "Ziad Ayman",
      role: "Problem Setter",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/Ziad_Img.jpeg?raw=true",
      about: "Problem setter specializing in high-level challenges",
      rating: 4.8,
      skills: [
        "Algorithms",
        "Competitive Programming",
        "C++",
        "Problem Solving",
      ],
      links: {
        github: "https://github.com/engzooz",
        linkedin: "https://www.linkedin.com/in/ziad-ayman-8b3899364/",
      },
    },
    {
      name: "Mai Alaa",
      role: "Problem setter",
      image: "",
      about:
        "Creative problem setter with exceptional ability to design balanced and intellectually stimulating programming challenges",
      rating: 4.5,
      skills: [
        "Challenge Design",
        "Test Cases Development",
        "Problem Balancing",
        "Logical Thinking",
        "Java",
      ],
      links: {},
    },
    {
      name: "Fadi Nabil",
      role: "Problem setter",
      image: "",
      about:
        "Detail-oriented problem setter with talent for crafting precise and comprehensive programming problems",
      rating: 4.6,
      skills: [
        "Precision Engineering",
        "Problem Design",
        "Quality Assurance",
        "Debugging",
        "C++",
      ],
      links: {},
    },
    {
      name: "Shady Ibrahim",
      role: "Mentor and problem setter",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/shady_Img.jpeg?raw=true",
      about:
        "Problem setter for the university ICPC team, creating well-structured and challenging problems to enhance students’ problem-solving skills.",
      rating: 4.7,
      skills: [
        "Algorithms",
        "Problem Setting",
        "C++",
        "Data Structures",
        "Machine Learning",
        "Deep Learning",
        "SQL",
        "Python",
        "Java",
      ],
      links: {
        facebook: "https://www.facebook.com/share/1GXTWo2f5J/",
        linkedin: "https://www.linkedin.com/in/shady-ibrahim-60196a2b2/",
      },
    },
    {
      name: "George Ayman",
      role: "Mentor and problem setter",
      image: "",
      about:
        "Dual-role expert who excels at both creating challenging problems and mentoring students through solution approaches",
      rating: 4.7,
      skills: [
        "Solution Guidance",
        "Problem Creation",
        "Algorithm Analysis",
        "Student Assessment",
        "Python",
      ],
      links: {},
    },
    {
      name: "Rimas Serage",
      role: "HR",
      image: "",
      about:
        "Dedicated HR professional with strong interpersonal skills and talent for fostering positive organizational culture",
      rating: 4.4,
      skills: [
        "Employee Relations",
        "Culture Development",
        "Recruitment",
        "Interpersonal Communication",
        "Team Support",
      ],
      links: {},
    },
    {
      name: "Jena Ayman",
      role: "HR",
      image: "",
      about:
        "Organized HR specialist with excellent administrative skills and attention to detail in personnel management",
      rating: 4.5,
      skills: [
        "Administrative Efficiency",
        "Detail Orientation",
        "Record Management",
        "Policy Implementation",
        "Coordination",
      ],
      links: {},
    },
    {
      name: "Basmala Mohie",
      role: "HR",
      image: "",
      about:
        "People-focused HR professional with exceptional empathy and conflict resolution abilities",
      rating: 4.6,
      skills: [
        "Conflict Resolution",
        "Empathetic Communication",
        "Team Integration",
        "Moral Support",
        "Mediation",
      ],
      links: {},
    },
    {
      name: "Basmala Rady",
      role: "HR",
      image: "",
      about:
        "Proactive HR coordinator with talent for identifying organizational needs and implementing effective solutions",
      rating: 4.5,
      skills: [
        "Needs Assessment",
        "Solution Implementation",
        "Proactive Support",
        "Resource Coordination",
        "Process Improvement",
      ],
      links: {},
    },
    {
      name: "Ziad Muhammad",
      role: "HR",
      image: "",
      about:
        "Analytical HR professional with strong problem-solving skills and systematic approach to personnel management",
      rating: 4.4,
      skills: [
        "Problem Analysis",
        "Systematic Approach",
        "Data Management",
        "Procedure Development",
        "Efficiency Optimization",
      ],
      links: {},
    },
    {
      name: "Tasneem Amer",
      role: "HR",
      image: "",
      about:
        "Energetic HR specialist with excellent communication skills and talent for employee engagement initiatives",
      rating: 4.6,
      skills: [
        "Employee Engagement",
        "Effective Communication",
        "Initiative Planning",
        "Team Motivation",
        "Activity Coordination",
      ],
      links: {},
    },
    {
      name: "Salma Amer",
      role: "HR",
      image: "",
      about:
        "Diligent HR coordinator with strong organizational skills and commitment to maintaining harmonious workplace environment",
      rating: 4.5,
      skills: [
        "Workplace Harmony",
        "Organizational Skills",
        "Diligent Execution",
        "Environment Maintenance",
        "Support Services",
      ],
      links: {},
    },
    {
      name: "Hader Gamal",
      role: "HR",
      image: "",
      about:
        "Committed HR professional with focus on developmental support and continuous improvement of team capabilities",
      rating: 4.4,
      skills: [
        "Developmental Support",
        "Capability Building",
        "Continuous Improvement",
        "Skill Assessment",
        "Training Assistance",
      ],
      links: {},
    },
    {
      name: "Waseem Ashraf",
      role: "Vice head media",
      image: "",
      about:
        "Strategic media deputy with strong visual storytelling skills and expertise in multi-platform content distribution",
      rating: 4.6,
      skills: [
        "Visual Storytelling",
        "Content Distribution",
        "Platform Management",
        "Brand Consistency",
        "Campaign Execution",
      ],
      links: {},
    },
    {
      name: "Lama Waleed",
      role: "Content writer",
      image: "",
      about:
        "Creative content writer with engaging narrative style and talent for crafting compelling organizational stories",
      rating: 4.7,
      skills: [
        "Narrative Writing",
        "Content Creation",
        "Story Development",
        "Engaging Messaging",
        "Creative Expression",
      ],
      links: {},
    },
    {
      name: "Omnia Shady",
      role: "Content writer",
      image: "",
      about:
        "Versatile content creator with adaptability across different media formats and audience targeting",
      rating: 4.5,
      skills: [
        "Adaptable Writing",
        "Audience Targeting",
        "Format Versatility",
        "Message Tailoring",
        "Content Adaptation",
      ],
      links: {},
    },
    {
      name: "Shahd Ali",
      role: "Content writer",
      image: "",
      about:
        "Precise content developer with excellent research skills and attention to factual accuracy in communications",
      rating: 4.6,
      skills: [
        "Research Skills",
        "Factual Accuracy",
        "Precision Writing",
        "Information Verification",
        "Clear Communication",
      ],
      links: {},
    },
    {
      name: "Marina Amir",
      role: "Video Editor",
      image: "",
      about:
        "Creative storyteller with exceptional ability to transform technical concepts into engaging and accessible content",
      rating: 4.7,
      skills: [
        "Technical Writing",
        "Brand Storytelling",
        "Content Strategy",
        "Audience Engagement",
        "Creative Messaging",
      ],
      links: {},
    },
    {
      name: "Ahmed Gamal",
      role: "Vice head organiser",
      image: "",
      about:
        "Efficient organizational deputy with strong logistical planning skills and attention to operational details",
      rating: 4.7,
      skills: [
        "Logistical Planning",
        "Operational Detail",
        "Efficiency Management",
        "Coordination",
        "Resource Allocation",
      ],
      links: {},
    },
    {
      name: "Hajar Ahmed",
      role: "Organizers Head",
      image: "",
      about:
        "Exceptional event coordinator with meticulous planning skills and talent for executing flawless organizational operations",
      rating: 4.7,
      skills: [
        "Event Planning",
        "Logistics Management",
        "Team Coordination",
        "Budget Management",
        "Timeline Execution",
      ],
      links: {},
    },
    {
      name: "Aya Mahmoud",
      role: "Organizer",
      image: "",
      about:
        "Meticulous event organizer with exceptional planning capabilities and talent for anticipating logistical needs",
      rating: 4.6,
      skills: [
        "Event Planning",
        "Logistical Anticipation",
        "Detail Management",
        "Schedule Coordination",
        "Preparation",
      ],
      links: {},
    },
    {
      name: "Menna Maher",
      role: "Organizer",
      image: "",
      about:
        "Dynamic organizer with strong execution skills and ability to manage multiple tasks simultaneously under pressure",
      rating: 4.5,
      skills: [
        "Multi-Tasking",
        "Pressure Management",
        "Execution Excellence",
        "Task Coordination",
        "Adaptive Planning",
      ],
      links: {},
    },
    {
      name: "Jomana",
      role: "Organizer",
      image: "",
      about:
        "Resourceful organizing professional with creative problem-solving skills for unexpected challenges",
      rating: 4.6,
      skills: [
        "Resourcefulness",
        "Creative Solutions",
        "Challenge Response",
        "Improvisation",
        "Situation Management",
      ],
      links: {},
    },
    {
      name: "Roaa Muhammed",
      role: "Organizer",
      image: "",
      about:
        "Proactive organizer with exceptional adaptability and talent for developing innovative solutions to logistical challenges",
      rating: 4.6,
      skills: [
        "Event Logistics",
        "Problem Prevention",
        "Adaptive Planning",
        "Crisis Management",
        "Multi-Tasking",
      ],
      links: {},
    },
  ];

  // Community stats
  const communityStats = {
    totalMembers: 41,
    activeThisWeek: 0,
    problemsSolved: 0,
    contestsParticipated: 0,
  };

  // Filter members based on search and role filter
  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase());
    // || member.about.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole =
      filterRole === "all" ||
      member.role.toLowerCase() === filterRole.toLowerCase();
    return matchesSearch && matchesRole;
  });

  // Get unique roles for filter
  const Roles = [...new Set(teamMembers.map((member) => member.role))];

  // Stats cards data
  const stats = [
    {
      label: "Total Members",
      value: communityStats.totalMembers,
      icon: Users,
      color: "text-blue-500",
    },
    {
      label: "Active This Week",
      value: communityStats.activeThisWeek,
      icon: BarChart3,
      color: "text-green-500",
    },
    {
      label: "Problems Solved",
      value: communityStats.problemsSolved.toLocaleString(),
      icon: Code,
      color: "text-purple-500",
    },
    {
      label: "Contests Participated",
      value: communityStats.contestsParticipated,
      icon: Trophy,
      color: "text-orange-500",
    },
  ];

  // Top contributors data with individual ratings
  const topContributors = [
    {
      name: "Mazen Mohamed",
      role: "Problem Setter & Mentor & Frontend Developer",
      about:
        "Problem setter for our sheets, Mentor in phase 1, and developer of our community website",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/MazenImg.jpg?raw=true",
      rating: 5,
      links: {
        github: "https://github.com/Mazen-mo-10",
        linkedin: "https://www.linkedin.com/in/mazenmohamed2212/",
        facebook: "https://www.facebook.com/share/19wwAcpoa2/",
      },
      contributions: 142,
      rank: 1,
    },
    {
      name: "Yossef Behaa",
      role: "Community Manager",
      about: "Leader of the community and coordinator of all activities",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/yossef.jpeg?raw=true",
      rating: 4.8,
      links: {
        facebook: "https://www.facebook.com/share/1ZXunReQZ3/",
      },
      contributions: 128,
      rank: 2,
    },
    {
      name: "Anas Mohamed",
      role: "Mentor",
      about:
        "Mentor with a talent for simplifying concepts and delivering high-quality explanations",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/Anas_Img.jpeg?raw=true",
      rating: 4.7,
      links: {
        linkedin: "https://www.linkedin.com/in/anas-desoky-762715242/",
      },
      contributions: 115,
      rank: 3,
    },
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      title: "Weekly Coding Contest",
      date: "Tomorrow, 7:00 PM",
      participants: 45,
      type: "Contest",
    },
    {
      title: "Data Structures Workshop",
      date: "Saturday, 5:00 PM",
      participants: 32,
      type: "Workshop",
    },
    {
      title: "Algorithm Study Group",
      date: "Sunday, 4:00 PM",
      participants: 28,
      type: "Study Group",
    },
  ];

  return (
    <div
      className={`min-h-screen py-20 px-6 pt-24 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className={`text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Community{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Board
            </span>
          </h1>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Meet the amazing people who make our community thrive
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } transition-transform hover:scale-105`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-full ${
                      darkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div
              className={`p-6 rounded-2xl shadow-lg mb-8 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div
                  className={`flex-1 relative ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>
              </div>
            </div>

            {/* Members Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member, index) => (
                <div
                  key={index}
                  className={`${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-50"
                  } p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } group relative overflow-hidden`}
                >
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-transparent group-hover:border-blue-500 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3
                      className={`text-lg font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      } mb-1`}
                    >
                      {member.role}
                    </p>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {member.rating}/5
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3 mb-4">
                    {Object.entries(member.links).map(
                      ([platform, url], idx) => {
                        const Icon =
                          platform === "github"
                            ? Github
                            : platform === "linkedin"
                            ? Linkedin
                            : platform === "instagram"
                            ? Instagram
                            : Facebook;
                        return (
                          <a
                            key={idx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              darkMode
                                ? "bg-gray-700 hover:bg-gray-600 text-white"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                            } transition-colors duration-200`}
                            title={platform}
                          >
                            <Icon className="w-4 h-4" />
                          </a>
                        );
                      }
                    )}
                  </div>

                  <div className="text-center">
                    <p
                      className={`text-sm mb-4 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      } line-clamp-2`}
                    >
                      {member.about}
                    </p>

                    <button
                      onClick={() => setActiveMember(member)}
                      className={`text-sm px-4 py-2 rounded-lg ${
                        darkMode
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      } transition-colors`}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <div
                className={`text-center py-12 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No members found matching your search criteria.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="mt-8 lg:mt-0 space-y-6">
            {/* Top Contributors */}
            <div
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Trophy className="text-yellow-500" />
                Top Contributors
              </h2>

              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={contributor.image}
                        alt={contributor.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {contributor.rank === 1 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Crown className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-medium ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {contributor.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span
                          className={`text-xs ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {contributor.rating}/5
                        </span>
                      </div>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {contributor.contributions} contributions
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Calendar className="text-blue-500" />
                Upcoming Events
              </h2>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-50 border-gray-200"
                    } transition-transform hover:scale-[1.02]`}
                  >
                    <h3
                      className={`font-medium ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {event.title}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <span
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {event.date}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode
                            ? "bg-gray-600 text-gray-300"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {event.participants} joining
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Resources */}
            <div
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <BookOpen className="text-green-500" />
                Community Resources
              </h2>

              <div className="space-y-3">
                {[
                  { name: "Study Groups", icon: Users },
                  { name: "Code Repository", icon: Github },
                  { name: "Learning Materials", icon: BookOpen },
                  { name: "Contest Solutions", icon: Code },
                ].map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-gray-50 border-gray-200"
                      } flex items-center gap-3 transition-transform hover:scale-[1.02]`}
                    >
                      <div
                        className={`p-2 rounded-full ${
                          darkMode ? "bg-gray-600" : "bg-gray-200"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`font-medium ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {resource.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member Detail Modal */}
      {activeMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            className={`max-w-md w-full rounded-2xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } overflow-hidden`}
          >
            <div className="p-6">
              <div className="text-center mb-4">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-500">
                  <img
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {activeMember.name}
                </h3>
                <p
                  className={`text-lg ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  } mb-2`}
                >
                  {activeMember.role}
                </p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {activeMember.rating}/5 (42 reviews)
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  About
                </h4>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {activeMember.about}
                </p>
              </div>

              <div className="mb-6">
                <h4
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeMember.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-3 mb-6">
                {Object.entries(activeMember.links).map(
                  ([platform, url], idx) => {
                    const Icon =
                      platform === "github"
                        ? Github
                        : platform === "linkedin"
                        ? Linkedin
                        : platform === "instagram"
                        ? Instagram
                        : Facebook;
                    return (
                      <a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          darkMode
                            ? "bg-gray-700 hover:bg-gray-600 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        } transition-colors duration-200`}
                        title={platform}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  }
                )}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => setActiveMember(null)}
                  className={`px-6 py-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  } transition-colors`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
