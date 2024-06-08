import React from "react";
import styles from "./project.module.css";
import MainProjectCard from "./MainProjectCard/MainProjectCard";
import MinorProjectCard from "./MinorProjectCard/MinorProjectCard";

export default function Projects() {
  const mainProjects = [
    {
      title: "UniHub",
      color: "black",
      img: "/projects/unihub.png",
      alt: "React-based web project related to my university",
      link: "https://unihub-uol.vercel.app/",
      description:
        "Developed UniHub, a comprehensive platform for my university (UOL), a timetable view for daily schedules, and a GPA/CGPA calculator that stores data locally for future use. This project enhances the academic experience by providing easy access to important resources.",
    },
    {
      title: "Chatty",
      color: "#ffffff69",
      img: "/projects/chatty.png",
      alt: "React-based web project of a chatting app named Chatty",
      link: "https://chatty-saqib.netlify.app/",
      description:
        "Developed Chatty, a dynamic React-based web application designed for casual conversations. It allows users to stay connected with friends and family globally, leveraging Firebase for authentication, database, and storage to provide a reliable and user-friendly chatting experience.",
    },
    {
      title: "Amazon Clone",
      color: "#ffffff69", 
      img: "/projects/amazon-clone.png",
      alt: "React-based web project on Amazon clone",
      link: "https://amazon-clone-saqib.netlify.app/",
      description:
        "Created a fully functional Amazon clone with essential e-commerce features such as seamless cart integration, ad posting, and comprehensive user account management. Utilized Firebase for its robust database and authentication services to ensure a smooth and secure user experience.",
    },
    {
      title: "Friend Portfolio",
      color: "#9400c680",
      img: "/projects/friend-portfolio.png",
      alt: "React-based web project of a portfolio for a friend",
      link: "https://mtouseef-portfolio.netlify.app/",
      description:
        "Designed an engaging and visually appealing portfolio for a game developer friend. This project highlights their skills and projects, featuring a Firebase-integrated database for easy project uploads and showcasing their creativity and expertise in the gaming industry.",
    },
  ];

  const minorProjects = [
    {
      title: "TicTacToe",
      img: "/projects/tictactoe.png",
      alt: "TicTacToe Web Project",
      link: "https://msntictactoe.netlify.app/",
      description:
        "Implemented a classic TicTacToe game using HTML, CSS, JavaScript, and React. This project showcases my ability to create interactive and engaging user experiences.",
    },
    {
      title: "Calculator",
      img: "/projects/calculator.png",
      alt: "Calculator Web Project",
      link: "https://saqib-developer.github.io/Calculator/",
      description:
        "Built a simple yet functional calculator app with HTML, CSS, and JavaScript, demonstrating my skills in creating practical web applications.",
    },
    {
      title: "Clock",
      img: "/projects/clock.png",
      alt: "Clock Web Project",
      link: "https://saqib-developer.github.io/Clock/",
      description:
        "Designed an analog clock using HTML, CSS, and JavaScript. This project highlights my ability to implement visually appealing and accurate web components.",
    },
    {
      title: "Space Destroy",
      img: "/projects/space-destroy.png",
      alt: "Space Destroy Web Project",
      link: "https://space-destroy.netlify.app/",
      description:
        "Developed Space Destroy, an engaging game using HTML, CSS, and JavaScript. This project demonstrates my capability in game development and interactive design.",
    },
  ];

  return (
    <article id="Projects">
      <h2 className={styles.h2}>Featured Projects</h2>
      <section className={styles.cardContainer}>
        {mainProjects.map((project, index) => (
          <MainProjectCard
            key={index}
            title={project.title}
            link={project.link}
            color={project.color}
            img={project.img}
            alt={project.alt}
            description={project.description}
          />
        ))}
      </section>
      <h2 className={styles.h2}>Other Projects</h2>
      <section style={{ display: "flex", flexWrap: "wrap" }} className={styles.cardContainer}>
        {minorProjects.map((project, index) => (
          <MinorProjectCard
            key={index}
            title={project.title}
            img={project.img}
            alt={project.alt}
            link={project.link}
            description={project.description}
          />
        ))}
      </section>
    </article>
  );
}
