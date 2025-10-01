import React, { useState } from "react";
import {
  Github,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
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
        facebook: "https://www.facebook.com/share/17P634Tzdc/",
        Mail: "mailto:engmazenmohamed22@gmail.com",
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
        facebook: "https://www.facebook.com/youssef.bahaa.862665",
        linkedin: "https://www.linkedin.com/in/youssefـbahaa",
        Mail: "mailto:youssefbahaa200018@gmail.com",
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
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/b285e1aa-ff45-4767-b2de-5ca0d69c149f%20-%20Akpm%20Amir.jpeg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/1ESWCyZWJx/",
        linkedin: "https://www.linkedin.com/in/pola-amir-7b74b9326",
        Mail: "mailto:akpm.amir@gmail.com",
      },
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
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/1CFshv6FZi/",
        linkedin: "https://www.linkedin.com/in/habiba-mahmoud-a33b78281",
        Mail: "mailto:habibamahamod961@gmail.com",
      },
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
        linkedin: "https://www.linkedin.com/in/anasdesoky",
        Mail: "mailto:monkaiengineer@gmail.com",
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
        linkedin: "https://www.linkedin.com/in/abdullah-haitham",
        Mail: "mailto:hawk230a@gmail.com",
        github: "https://github.com/VRS0"
      },
    },
    {
      name: "Enas Ibrahim",
      role: "Mentor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/Enas%20Ibrahim%20Ali%20-%20Enas%20Ebrahim%20Elnsag.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/19mcxZ13x7/",
        linkedin: "https://www.linkedin.com/in/enas-elnsag",
        Mail: "mailto:enaselnsag@gmail.com",
        github: "https://github.com/EnasIbrahimAli2005"
      },
    },
    {
      name: "A'laa Khaled",
      role: "Mentor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/1BJ8w9Lqt7/",
        linkedin: "https://www.linkedin.com/in/alaa-khaled-a234b3348",
        Mail: "mailto:alaakhaledm54@gmail.com",
      },
    },
    {
      name: "Fadwa Mahmoud",
      role: "Mentor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/IMG-20250825-WA0042%20-%20Fadwa%20Mahmoud.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/1Bu11wKaVe/",
        linkedin: "https://www.linkedin.com/in/fadwaa-mahmouud/",
        Mail: "mailto:fadwamahmoud.190@gmail.com",
      },
    },
    {
      name: "Malak Tamer",
      role: "Mentor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/IMG-20250825-WA0141%20-%20malk%20tamer.jpg?raw=true",
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
      name: "Mahamed Mustafa",
      role: "Mentor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/IMG_20250619_143401%20-%20Mohamed%20Mostafa%20Saadawy.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/1AzgL8RNqu/",
        linkedin: "https://www.linkedin.com/in/muhammad-saadawy-b52b01226",
        Mail: "mailto:elsameenm@gmail.com",
        github: "https://github.com/Saadawy-AI"
      },
    },
    {
      name: "Hager Alaa",
      role: "Mentor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      links: {
        linkedin: "https://www.linkedin.com/in/hajar-alaa-56049331a",
        Mail: "mailto:hajar3laa102@gmail.com",
      },
    },
    {
      name: "Abdelhalim Mohamed",
      role: "Mentor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/IMG_20240830_030605_220%20-%20Abdo%20Mohammed.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/1W1mPP62gr/",
        linkedin: "https://www.linkedin.com/in/abdelhalim-mohamed-6794a5203",
        Mail: "mailto:abdelhalim.m0hamed.ibrahim@gmail.com",
        github: "https://github.com/halimmohamed"
      },
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
        linkedin: "https://www.linkedin.com/in/engzooz",
        facebook: "https://www.facebook.com/share/1EQac2c6c1/",
        Mail: "mailto:za0271497@gmail.com",
      },
    },
    {
      name: "Mai Alaa",
      role: "Problem setter",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/WhatsApp%20Image%202025-08-27%20at%2021.41.10_3f336a1c%20-%20kareem%20amer.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/mai.alaa66",
        linkedin: "https://www.linkedin.com/in/mai-elsaid-ahmed-540367371",
        Mail: "mailto:omarmayalaa@gmail.com",
      },
    },
    {
      name: "Fady Nabil",
      role: "Problem setter",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/IMG_1330%20-%20Fady%20Nabil.jpeg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/1CuMVKNCGq/",
        linkedin: "https://www.linkedin.com/in/fady-nabil-729215326",
        Mail: "mailto:fadyn1900@gmail.com",
      },
    },
    {
      name: "Shady Ibrahim",
      role: "Mentor and problem setter",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/shady_Img.jpeg?raw=true",
      about:
        "Problem setter for the university ICPC team, creating well-structured and challenging problems to enhance students' problem-solving skills.",
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
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/Picsart_25-04-21_13-14-17-715%20-%20%D8%AC%D9%88%D8%B1%D8%AC%20%D8%A7%D9%8A%D9%85%D9%86.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/gogo.aymin.5",
        linkedin: "https://www.linkedin.com/in/george-aymin-a25379376/",
        Mail: "mailto:gogoaymin05@gmail.com",
      },
    },
    {
      name: "Rimas Serage",
      role: "HR",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/1CagJkpbS7/",
        linkedin: "https://www.linkedin.com/in/rimas-sirag-eldin-722832384",
        Mail: "mailto:remasserag260@gmail.com",
      },
    },
    {
      name: "Jena Ayman",
      role: "HR",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/17Ty5qCCU6/",
        linkedin: "https://www.linkedin.com/in/jena-ayman-b973a1318",
        Mail: "mailto:jenaayman2004@gmail.com",
      },
    },
    {
      name: "Basmala Mohie",
      role: "HR",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/retouch_%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A2%D9%A9%D9%A0%D9%A8%D9%A2%D9%A1%D9%A3%D9%A4%D9%A8%D9%A9%20-%20BASMALA%20MOHIE%20MOHAMMAD.jpg?raw=true",
      about:
        "People-focused HR professional with exceptional empathy and conflict resolution abilities",
      rating: 4.6,
      skills: [
        "Conflict Resolution",
        "Emphatic Communication",
        "Team Integration",
        "Moral Support",
        "Mediation",
      ],
      links: {},
    },
    {
      name: "Basmala Rady",
      role: "HR",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/IMG_6522%20-%20Basmala%20Rady.jpeg?raw=true",
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
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/15DBaEjKMTT/",
        linkedin: "https://www.linkedin.com/in/tasneem-amer-776631305",
        Mail: "mailto:ttttttt9094@gmail.com",
      },
    },
    {
      name: "Salma Amer",
      role: "HR",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/17Rqph6pAZ/",
        linkedin: "https://www.linkedin.com/in/salma3amer",
        Mail: "mailto:salma3amerr@gmail.com",
      },
    },
    {
      name: "Hadeer Gamal",
      role: "HR",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/IMG-20250825-WA0131%20-%20Hadeer%20Gamal.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/1B7nZykekq/",
        linkedin: "https://www.linkedin.com/in/hadeer-gamal-5bb1a633b",
        Mail: "mailto:hadeergamal928@gmail.com",
      },
    },
    {
      name: "Waseem Ashraf",
      role: "Vice head media",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/18mYCHuSKi/",
        Mail: "mailto:waseemashrafdoktor@gmail.com",
      },
    },
    {
      name: "Lama Waleed",
      role: "Content writer",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      links: {
        linkedin: "https://www.linkedin.com/in/shahd-ali-b54522381",
        Mail: "mailto:shahdhassanalnashar@gmail.com",
      },
    },
    {
      name: "Marina Amir",
      role: "Video Editor",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/IMG_6287%20-%20Ahmed%20Gamal%20salem.JPG?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/ahmed.gamal.salem.700506",
        linkedin: "https://www.linkedin.com/in/ahmed-gamal-0b1237313",
        Mail: "mailto:agamalsalem513@gmail.com",
      },
    },
    {
      name: "Hajar Ahmed",
      role: "Organizers Head",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
      about:
        "Exceptional event coordinator with meticulous planning skills and talent for executing flawless organizational operations",
      rating: 4.1,
      skills: [
        "Event Planning",
        "Logistics Management",
        "Team Coordination",
        "Timeline Execution",
      ],
      links: {
        facebook: "https://www.facebook.com/share/17G2HGrA2P/",
        linkedin: "https://www.linkedin.com/in/hajer-ahmmed-697416383",
        Mail: "mailto:hajerahmmed525@gmail.com",
      },
    },
    {
      name: "Aya Mahmoud",
      role: "Organizer",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/img-aya-mahmoud.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/1BKZ6Y17mW/",
        linkedin: "https://www.linkedin.com/in/aya-mahmoud-b847562a4",
        Mail: "mailto:ayamahmoudsaad317@gmail.com",
      },
    },
    {
      name: "Menna Maher",
      role: "Organizer",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/FB_IMG_1756132615242%20-%20Menna%20Maher.jpg?raw=true",
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
      links: {
        facebook: "Menna El beblawy",
        linkedin: "Menna El_beblawy",
        Mail: "mailto:mennafathi679@gmail.com",
      },
    },
    {
      name: "Jomana",
      role: "Organizer",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/1dece2c8357bdd7cee3b15036344faf5%20-%20Hajar%20Alaa.jpg?raw=true",
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
      links: {
        facebook: "https://www.facebook.com/share/1XwYhwpooB/",
        linkedin: "https://www.linkedin.com/in/jomana-sobhy-891658352",
        Mail: "mailto:sobhyjomana2@gmail.com",
      },
    },
    {
      name: "Roaa Muhammed",
      role: "Organizer",
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/IMG_20250609_201333_054%20-%20Roka%20Youssef.jpg?raw=true",
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
      links: {
        facebook: "Roaa Youssef",
        linkedin: "Roaa mohamed",
        Mail: "mailto:bodyroka830@gmail.com",
      },
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
                            : platform === "facebook"
                            ? Facebook
                            : Mail;
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
