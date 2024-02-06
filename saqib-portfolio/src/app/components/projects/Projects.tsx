import React from "react";
import styles from "./project.module.css";
import MainProjectCard from "./MainProjectCard/MainProjectCard";
import MinorProjectCard from "./MinorProjectCard/MinorProjectCard";

export default function Projects() {
  const mainProjects = [
    {
      title: "Amazon Clone",
      color: "#ffffff69",
      img: "/amazon-clone.png",
      alt: "React-based web project on Amazon clone",
      link: "https://amazon-clone-saqib.netlify.app/",
      description:
        "Developed a feature-rich Amazon clone website incorporating essential functionalities such as a seamless cart option, ad posting capabilities, and user account management using Firebase's robust database and authentication services.",
    },
    {
      title: "Chatty",
      color: "#ffffff69",
      img: "/chatty.png",
      alt: "React-based web project of a chatting app named Chatty",
      link: "https://chatty-saqib.netlify.app/",
      description:
        "Chatty is a React-based web app that allows casual conversations with friends and family. It's a great way to stay connected with loved ones worldwide. Utilizes Firebase for authentication, database, and storage purposes.",
    },
    {
      title: "Friend Portfolio",
      color: "#9400c680",
      img: "/friend-portfolio.png",
      alt: "React-based web project of a portfolio for a friend",
      link: "https://mtouseef-portfolio.netlify.app/",
      description:
        "Designed a captivating portfolio showcasing my friend's expertise as a game developer. The portfolio includes a Firebase-integrated database, allowing easy upload and display of impressive projects to demonstrate skills and creativity in the gaming industry.",
    },
    {
      title: "UniHub",
      color: "#ffa50066",
      img: "/unihub.png",
      alt: "React-based web project related to my university",
      link: "https://unihubdev.netlify.app/",
      description:
        "UniHub is based on my university, UOL, featuring Firebase storage for categorizing university files by subjects, timetable view to display the daily schedule with the time of the current class, and a GPA calculator that stores data in local storage for later use.",
    },
  ];

  const minorProjects = [
    {
      title: "TicTacToe",
      img: "/tictactoe.png",
      alt: "TicTacToe Web Project",
      link: "https://msntictactoe.netlify.app/",
      description: "Classic TicTacToe game implemented using HTML, CSS, JavaScript and React.",
    },
    {
      title: "Calculator",
      img: "/calculator.png",
      alt: "Caculator Web Project",
      link: "https://saqib-developer.github.io/Calculator/",
      description: "Simple calculator app built with HTML, CSS, and JavaScript.",
    },
    {
      title: "Clock",
      img: "/clock.png",
      alt: "Clock Web Project",
      link: "https://saqib-developer.github.io/Clock/",
      description: "Analog clock design implemented using HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <article>
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
