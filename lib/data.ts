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
    title: "Skin Cancer Detection",
    description:
      "Final Year Research Project. Identify major skin cancer diseases with their sub types using deep learning & image processing.",
    tags: ["Python","CoLab", "TensorFlow", "openCV", "Sklearn", "Keras"],
    imageUrl: eyeImage,
  },
  {
    title: "Learny",
    description:
      "LMS designed to manage all aspects of online education. User-friendly course creation and interactive content delivery and progress tracking.",
    tags: ["React(js)", "Tailwind", "NodeJs", "PostgreySQL", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Smart Hotel Room",
    description:
      "A Smart Hotel Room integrates cutting-edge IoT and automation for an enhanced guest experience, offering convenience, comfort, and personalized services through intuitive controls and automated amenities.",
    tags: ["Atmega32", "C+", "AtmelStudio"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Cleaning Service web application",
    description:
      "This web application was developed to manage cleaning activities & Ordering of Australian based cleaning services company, making their worksmoother, efficiency.",
    tags: ["WordPress"],
    imageUrl: movieImg,
  }
  ,
  {
    title: "Cake Selling APP",
    description:
      "Indulge in our Cake Selling App for a seamless blend of scrumptious desserts and convenient online ordering. Celebrate special occasions or satisfy sweet cravings with our passion-crafted, delectable cakes.",
    tags: ["Android", "Java", "SQL-lite"],
    imageUrl: attendanceImg,
  }


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
