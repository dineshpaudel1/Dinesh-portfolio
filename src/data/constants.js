import gym from "../images/images.png";
import tailwind from "../images/tailwind.png";
import javaspring from "../images/java.webp";
import sql from "../images/sql.png";
import postman from "../images/postman.webp";
import jamana from "../images/jamana.png";
import school from "../images/school.webp";
import chalau from "../images/Chalau.png";
import elearning from "../images/project3.png";
export const Bio = {
  name: "Dinesh Paudel",
  roles: ["Front End Developer", "Designer", "Programmer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/dineshpaudel1",
  resume: "",
  linkedin: "https://www.linkedin.com/in/dinesh-paudel-940b4b252/",
  twitter: "https://twitter.com/?lang=en",
  insta: "https://www.instagram.com/divashpaudel/",
  facebook: "https://www.facebook.com/satiingraju.sattingraju/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "React-Native",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },

      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind",
        image: tailwind,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "jAVA",
        image: javaspring,
      },
      {
        name: "Php",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1067px-PHP-logo.svg.png",
      },

      {
        name: "MySQL",
        image: sql,
      },
    ],
  },
  {
    title: "Desegning ",
    skills: [
      {
        name: "Photshop",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
      },
      {
        name: "Canva",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJn9WTcNuoGcV98WFyIA-Mv_bdQOEMBpfczX2Z_66VQ&s",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Postman",
        image: postman,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: chalau,
    role: "Chalau Mobile App(frontend developer(React-native))",
    company: "Yuwasoft Technologies",
    date: "sepetember 2024 - now",
    desc: "I had the incredible opportunity to work as a React Native Developer on the Chalau project, a dynamic and challenging platform. Collaborating with a talented team, I contributed to developing a feature-rich mobile application that emphasized real-time map integrations, efficient UI/UX design, and robust backend connectivity. (now Chalau is available on playstore)",
    skills: ["React-Native,Postman"],
  },
  {
    id: 1,
    img: jamana,
    role: "Jamana Studio(frontend developer(Html,css,javascript))",
    company: "Jamana studio Lalitpur",
    date: "sepetember 2023 - December 2023",
    desc: "Working on Jamana studio project i got chance to learn how to deal with Clients and Many More",
    skills: ["Html", "CSS", "Javascript", "Laravel", "Mysql"],
  },
  {
    id: 2,
    img: elearning,
    role: "E-learning Platform(College Project)",
    company: "Patan Multiple Campus",
    date: "June 2024 - December first",
    desc: "I had the privilege of working on the Learn-Up project as a React.js Frontend and Backend using Spring Boot. This e-learning platform was designed to provide a seamless user experience for learners and administrators, featuring course management, user registration, and dynamic content delivery.",
    skills: ["React-js,Tailwind,Springboot,Mysql"],
  },
  {
    id: 3,
    img: gym,
    role: "Gym Management System",
    company: "Patan Multiple Campus Lalitpur",
    date: "sepetember 2023 - December 2023",
    desc: "Led a comprehensive project to develop and implement a Gym Management System aimed at enhancing operational efficiency, member satisfaction, and revenue generation",
    skills: ["Html, Css, Ajax, Jquery, PHP , Javascript"],
  },

  {
    id: 4,
    img: school,
    role: "As a Primary School Teacher",
    company: "At Kailali",
    date: "June 2023 - Present",
    desc: "Working as a teacher i got chance to learn communication skill, leadership skill, Problem Solving Skill etc.",
    skills: ["Computer Science", "Science", "Social", "Maths"],
  },
];

export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6GwoArknorOhIIPtmgVMjjv1y6qEwzTShMefZXWD7Q&s",
    school: "GhodaGhodi Multiple Campus",
    date: "jan 2017 - Sep 2019",
    grade: "3.12 CGPA",
    desc: "I have done my 11 & 12 at GhodaGhodi Multiple Campus",
    degree: "National Examination Board(NEB)",
  },
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/p/AF1QipNjMpElSWUu08mbmgJ7hTdmDdARgcSomdAy6tTf=s1360-w1360-h1020",
    school: "Patan Multiple Campus",
    date: "Feb 2020 - Now",
    grade: "coming soon%",
    desc: "i am currently Studying Bachelor in Computer Application in Lalitpur",
    degree: "Bachelor in Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Chalau Mobile App",
    date: "sepetember 2024 - now",
    description:
      "I had the incredible opportunity to work as a React Native Developer on the Chalau project, a dynamic and challenging platform. Collaborating with a talented team, I contributed to developing a feature-rich mobile application that emphasized real-time map integrations, efficient UI/UX design, and robust backend connectivity. (now Chalau is available on playstore)",
    image: chalau,
    tags: ["React-Native,Postman"],
    category: "MobileApp",
    github:
      "https://play.google.com/store/apps/details?id=com.chalau_frontend&hl=en_US",
    webapp:
      "https://play.google.com/store/apps/details?id=com.chalau_frontend&hl=en_US",
  },
  {
    id: 1,
    title: "Jamana Studio",
    date: "july 2023 - Dec 2023",
    description: "I have worked in jamana company as a web developer",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipN3YOGq0qqVGki8kf-e2CSkEP_9OjlWmTgTzJl-=s1360-w1360-h1020",
    tags: ["Html", "CSS", "Javascript", "Laravel", "Mysql"],
    category: "web app",
    github: "https://github.com/dineshpaudel1/jamanastudio",
    webapp: "https://jamanastudio.com/",
  },
  {
    id: 2,
    title: "Learn-Up",
    date: "June 2024 - December first",
    description:
      "I had the privilege of working on the Learn-Up project as a React.js Frontend and Backend using Spring Boot. This e-learning platform was designed to provide a seamless user experience for learners and administrators, featuring course management, user registration, and dynamic content delivery.",
    image: elearning,
    tags: ["React-js,Tailwind,Springboot,Mysql"],
    category: "web app",
    github: "https://github.com/dineshpaudel1/jamanastudio",
    webapp: "https://github.com/dineshpaudel1/jamanastudio",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
