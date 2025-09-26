import tailwind from "../images/tailwind.png";
import javaspring from "../images/java.webp";
import sql from "../images/sql.png";
import postman from "../images/postman.webp";
import swagger from "../images/swagger.png";
import projekthub from "../images/projekthub.png";
import chalauapp from "../images/Chalauapp.png";
import mygithub from "../images/mygithub.png";
import chalau from "../images/Chalau.png";
import logowhite from "../images/logowhite.png";
import elearning from "../images/project3.png";
import cv from "../images/cv.pdf";

export const Bio = {
  name: "Dinesh Paudel",
  roles: ["Full-Stack Developer", "Programmer"],
  description:
    "I'm a Full Stack Developer with two years of practical experience in developing, launching, and maintaining dynamic web applications",
  github: "https://github.com/dineshpaudel1",
  resume: "",
  linkedin: "https://www.linkedin.com/in/dinesh-paudel-940b4b252/",
  twitter: "https://twitter.com/?lang=en",
  insta: "https://www.instagram.com/divashpaudel/",
  facebook: "https://www.facebook.com/satiingraju.sattingraju/",
  github: "https://github.com/dineshpaudel1",
  resume: cv,
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      

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
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
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
        name: "Docker",
        image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAADHCAMAAACa27f0AAAAM1BMVEUdY+3///+rxfhWivHj6/1ynfQ6d+8rbe6cu/eOsfbH2Pvx9f5IgPCAp/W5zvlklPLU4vxTjIlpAAAC20lEQVR4nO3bWXKDMBBFUQYxmMHx/lcbcAaLGIOB7pZI3fMHRYhegSRo5CQBAAAAAAAAAAAAAAAAAAA4jyL1ZKFbsx854kKOuJAjLuSICzniQg7g9OrMUyVJ5W/XwwG5v6MI3dyXnN+NyyQp/W2XnKafkyMu5PirsmryLLEcZdubNXqGWI7hRFnASyKV436YK+0a/odUjq/zhAsilOPnqGBBhHL8nuZm2PbZBhzK0T0OqS1b/5D7hu3K3+6GHaW/49Vdc/Gy5oatl9Z4OZrQjTmgTY0vyNNd0vk7xnlsz41W+TFMLkjm/8PxrWh7P386xZB9kiM1mNZNcnz8kxwGQ69JjvGocux4pdodppOjSydc9nvWtqlVhi+dHJM/euIuZ8kxnT9mkog/PSrluC7nuJ/oDDn6lRzi9TulHNXyjSV+ObRyTB54n8mXU7VyLF4QhapX4Vedx5F9e5366RR3Cz0kYPVhs/L1iNWeJkaVNy9TpK4L3by3lB99s9Q3Gp2rkcm5No1bmcdTtVrpyv+V1fRqz7tGCZy71oXma6FBBMXWP7j1hhxkU4fTz2EzWywM9DKMvrxl6y05xmjWq5VjWBVFi/WmHGJVpM7Xm3KEzaCb/K3EirNbf6I68Bp+MlAdsAw/4axVNo6wXLWxXPo7xvTFT6+DKJQ/F6jNhM52VYbaDGK95m/tXXQn86VZy6W/veyLVDpTeoCVpBpTYYjVGAo93Xis+ib+Uhio9Ck+pxt8MJ8lPBfaTuSeSvThJFgM2a4edG2y3J0Vdol1dfsXMYYxS6aLhI6RJJ3E82KgRZUTAkECjlSeo0HaWFaGHusjSl/+9jgSJI576sfeeaSJ7WtyseeShP3Jyrxy8yVpL2F/QvRKuekFMdYUo/eT3CJOMSqLN14SW521n8KGKIsLRU4R4lveX2fCuKzP476dZlV5XvSXL0XRxTNtAwAAAAAAAAAAAAAAAAAAbPYJtPUh7KBE5eAAAAAASUVORK5CYII="
      },
      {
        name: "Postman",
        image: postman,
      },
      {
        name: "Swagger",
        image: swagger,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: logowhite,
    role: "Full-Stack Developer",
    company: "Projekthub",
    date: "sepetember 2024 - now",
    desc: "Created a real-world full-stack buying and selling platform using React, Spring Boot, andMySQLDemonstrated proficiency in DevOps and integration tools including GitHub for sourcecontrol, Docker for containerization, and Swagger for API documentation Managed the complete deployment lifecycle, leveraging Namecheap for domain services and Cloudflare for hosting and network optimization",
    skills: ["React, Spring Boot, MySQL, Docker"],
  },
  {
    id: 1,
    img: chalau,
    role: "Chalau Mobile App(Internship at Front-end Developer)",
    company: "Yuwasoft Technologies",
    date: "sepetember 2024 - Dec 2024",
    desc: "I had the incredible opportunity to work as a React Native Developer on the Chalau project, a dynamic and challenging platform. Collaborating with a talented team, I contributed to developing a feature-rich mobile application that emphasized real-time map integrations, efficient UI/UX design, and robust backend connectivity. (now Chalau is available on playstore)",
    skills: ["React-Native,Postman"],
  },
  {
    id: 2,
    img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    role: "5+ More Full-Stack College Project",
    company: "Patan Multiple Campus",
    date: "June 2024 - December first",
    desc: "I had the privilege of working on the Learn-Up project as a React.js Frontend and Backend using Spring Boot. This e-learning platform was designed to provide a seamless user experience for learners and administrators, featuring course management, user registration, and dynamic content delivery,same as other projects.",
    skills: ["React-js,Tailwind,Springboot,Mysql,Swagger"],
  },
];

export const education = [
  
  {
    id: 0,
    img: "https://lh3.googleusercontent.com/p/AF1QipNjMpElSWUu08mbmgJ7hTdmDdARgcSomdAy6tTf=s1360-w1360-h1020",
    school: "Patan Multiple Campus",
    date: "Feb 2020 - Now",
    grade: "3.20",
    desc: "I graduated with a Bachelor's degree in Computer Application",
    degree: "Bachelor in Computer Application",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6GwoArknorOhIIPtmgVMjjv1y6qEwzTShMefZXWD7Q&s",
    school: "GhodaGhodi Multiple Campus",
    date: "jan 2017 - Sep 2019",
    grade: "3.12 CGPA",
    desc: "I studied Grades 11 and 12 at Ghodaghodi Multiple Campus",
    degree: "National Examination Board(NEB)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Projekthub",
    date: "sepetember 2024 - now",
    description:
      "Created a real-world full-stack buying and selling platform using React, Spring Boot, andMySQLDemonstrated proficiency in DevOps and integration tools including GitHub for sourcecontrol, Docker for containerization, and Swagger for API documentation Managed the complete deployment lifecycle, leveraging Namecheap for domain services and Cloudflare for hosting and network optimization",
    image: projekthub,
    tags: ["React,Spring-Boot,MySQL,Docker"],
    category: "Website",
    github:
      "https://projekthub.com/",
    webapp:
      "https://projekthub.com/",
  },
  {
    id: 1,
    title: "Chalau Mobile App",
    date: "sepetember 2024 - now",
    description:
      "I had the incredible opportunity to work as a React Native Developer on the Chalau project, a dynamic and challenging platform. Collaborating with a talented team, I contributed to developing a feature-rich mobile application that emphasized real-time map integrations, efficient UI/UX design, and robust backend connectivity. (now Chalau is available on playstore)",
    image: chalauapp,
    tags: ["React-Native,Postman"],
    category: "MobileApp",
    github:
      "https://play.google.com/store/apps/details?id=com.chalau_frontend&hl=en_US",
    webapp:
      "https://play.google.com/store/apps/details?id=com.chalau_frontend&hl=en_US",
  },
  
  {
    id: 2,
    title: "5+ Full Stack Project",
    date: "June 2024 - December first",
    description:
      "I had the privilege of working on the Learn-Up project as a React.js Frontend and Backend using Spring Boot. This e-learning platform was designed to provide a seamless user experience for learners and administrators, featuring course management, user registration, and dynamic content delivery.same as other projects",
    image: mygithub,
    tags: ["React-js,Tailwind,Springboot,Mysql"],
    category: "web app",
    github: "https://github.com/dineshpaudel1",
    webapp: "https://github.com/dineshpaudel1",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
