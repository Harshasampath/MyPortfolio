import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaRebel } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Intern Software Engineer",
    location: "Kapruka.com",
    description:
      "I worked in several projects including Kapruka projects. I had the chance to experience the technologies such as Network Engineering. I used several programming languages and frameworks and libraries. Mainly they are Angular , Springboot , AndroidNative , Kotlin , TypeScript , Java. I was able to experienced the amazing culture of the Kapruka.com and working under the supervising of giants in the IT industry",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Dec- 2023 June",
  },
  {
    title: "Freelancer Developer",
    location: "Full Time",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, .NET, Springboot, SQL and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  }
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
] as const;
