import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaRebel } from "react-icons/fa";
import { LuGraduationCap, LuWorkflow } from "react-icons/lu";
import corpcommentImg from "@/public/intelligent.jpg";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/iot.jpg";
import eyeImage from "@/public/eyeimage.jpg"
import movieImg from "@/public/Movieimg.jpg"
import attendanceImg from "@/public/attendenceSys.jpg"
import mintHrmApp from "@/public/MintHRM.png";
import mintHrmBenefits from "@/public/Mint_Benefit.png";
import gimmeMarketplace from "@/public/gimme_app.png";
import kaprukaDriver from "@/public/kapruka_driver.png";
import kaprukaEcom from "@/public/kapruka_ecommerce.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer - Mobile (Flutter)",
    location: "Mint HRM · Full-time",
    description:
      "Currently working as a Flutter developer at MintHRM, building scalable, high-performance mobile applications for Android and iOS. Responsible for designing, developing, and maintaining production-grade apps with a focus on performance, stability, and user experience. Collaborating with cross-functional teams to deliver new features and continuously improve existing systems. Implementing modern state management solutions (Provider, Bloc, Riverpod) and following best practices for clean, maintainable code. Actively involved in debugging, performance optimization, and code quality improvements through testing and reviews.",
    icon: React.createElement(LuWorkflow),
    date: "Oct 2024 - Present",
  },
  {
    title: "Software Engineer",
    location: "Kapruka Holdings PLC · Full-time",
    description:
      "Worked as a mobile application developer, contributing to the development and maintenance of business-critical applications. Focused on implementing user requirements, improving application performance, and ensuring reliable functionality. Collaborated with team members to deliver features on time while maintaining code quality and consistency.",
    icon: React.createElement(LuWorkflow),
    date: "Jan 2024 - Jul 2024",
  },
  {
    title: "Software Engineer Intern",
    location: "Kapruka Holdings PLC · Internship",
    description:
      "Completed internship working on real-world software projects, gaining hands-on experience in mobile and web technologies. Assisted in feature development, bug fixing, and requirement analysis while learning industry best practices and team collaboration workflows.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2023 - Jul 2023",
  },
] as const;
export const projectsData = [
  {
    title: "Mint HRM Mobile App",
    description:
      "Enterprise HR management mobile app built with Flutter. Manages attendance, leave requests, approvals, and notifications in real-time for employees. Focused on high performance and seamless cross-platform experience.",
    tags: ["Flutter", "Dart", "Firebase", "REST API", "Bloc", "Riverpod"],
    imageUrl: mintHrmApp,
  },
  {
    title: "Mint HRM Benefits App",
    description:
      "Mobile app to manage employee benefits, rewards, and claims efficiently. Implemented secure authentication, optimized API handling, and responsive UI for smooth employee interactions.",
    tags: ["Flutter", "Dart", "Provider", "REST API", "UI/UX"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Gimme Marketplace App",
    description:
      "Marketplace mobile application enabling users to browse, purchase, and manage products with real-time data handling and smooth payment flows.",
    tags: ["Flutter", "Dart", "Firebase", "REST API", "State Management"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Kapruka Driver App",
    description:
      "Native Android app for Kapruka delivery drivers to manage deliveries, track orders, and update status in real-time. Implemented offline handling, notifications, and map tracking for optimal performance.",
    tags: ["Android", "Kotlin", "Java", "Google Maps API", "Firebase"],
    imageUrl: movieImg,
  },
  {
    title: "Kapruka E-commerce App",
    description:
      "Native Android app for Kapruka e-commerce platform allowing users to browse products, place orders, and manage accounts securely. Focused on smooth UX and reliable backend communication.",
    tags: ["Android", "Kotlin", "Java", "REST API", "SQLite"],
    imageUrl: attendanceImg,
  },
  {
    title: "Minchy AI App",
    description:
      "AI-powered voice agent app designed for HR specialists, similar to ChatGPT. Handles employee queries, automates HR tasks, and provides real-time assistance through natural language processing and AI-driven responses.",
    tags: ["Flutter", "Dart", "AI", "NLP", "Speech-to-Text", "REST API"],
    imageUrl: eyeImage,
  },
  {
    title: "Skin Cancer Detection",
    description:
      "Final year research project focused on detecting major skin cancer types and subtypes using deep learning and image processing techniques.",
    tags: ["Python", "TensorFlow", "OpenCV", "Keras", "Scikit-learn"],
    imageUrl: attendanceImg,
  },
  {
    title: "Learny LMS",
    description:
      "Learning Management System designed for online education with course creation, interactive content delivery, and progress tracking features.",
    tags: ["React", "Tailwind", "Node.js", "PostgreSQL", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Smart Hotel Room",
    description:
      "IoT-based smart hotel room system providing automated controls and enhanced guest experience through embedded systems and sensors.",
    tags: ["Atmega32", "Embedded C", "Atmel Studio"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Cleaning Service Web Application",
    description:
      "Web platform developed to manage operations and service ordering for an Australia-based cleaning company, improving workflow efficiency.",
    tags: ["WordPress"],
    imageUrl: movieImg,
  },
  {
    title: "Cake Selling App",
    description:
      "Android application for browsing and ordering cakes with a user-friendly interface and local database integration.",
    tags: ["Android", "Java", "SQLite"],
    imageUrl: attendanceImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MsSql",
  "MongoDB",
  "Redux",
  "MySQL",
  "SpringBoot",
  "Python",
  "TensorFlow",
  "MatLab",
  "Firebase",
  "AWS",
  "Git",
  "Figma",
  "Flutter",
  "AndroidNative",
  "AppStore",
  "PlayStore",
] as const;
