import React from "react";
import Card from "./Card";
import styles from "./WorkExperience.module.css";

export default function WorkExperience() {
  const skills = [
    {
      title: "HTML5",
      img: "/img/html.png",
      alt: "HTML logo image",
      description:
        "Proficient in creating the structure and layout of web pages using HTML, ensuring proper content hierarchy and semantic markup for enhanced accessibility and search engine optimization.",
    },
    {
      title: "CSS3",
      img: "/img/css.png",
      alt: "CSS logo image",
      description:
        "Skilled in applying CSS styles and design principles to create visually appealing and responsive websites, leveraging selectors, flexbox, grid, and animations for a captivating user experience.",
    },
    {
      title: "JavaScript",
      img: "/img/javascript.svg",
      alt: "JavaScript logo image",
      description:
        "Experienced in JavaScript, enabling dynamic and interactive web functionality, including event handling, DOM manipulation, AJAX, and utilizing libraries and frameworks for efficient development.",
    },
    {
      title: "React",
      img: "/img/react.png",
      alt: "React logo image",
      description:
        "Experienced in React, specializing in crafting modular, responsive interfaces. Proficient in state management and API integration, delivering dynamic web applications with a focus on user experience.",
    },
    {
      title: "Next.js",
      img: "/img/nextjs.png",
      alt: "Next.js logo image",
      description:
        "Experienced in Next.js, building on React to create optimized and server-rendered web applications. Proficient in routing, server-side rendering, and enhancing performance for seamless user experiences.",
    },
    {
      title: "Firebase",
      img: "/img/firebase.png",
      alt: "Firebase logo image",
      description:
        "Skilled in Firebase, utilizing its real-time database, authentication, and cloud functions to create scalable and dynamic web applications. Integrating Firebase services for efficient data storage and retrieval.",
    },
  ];

  return (
    <article>
      <h2 className={styles.workDetails}>Work Experience</h2>

      <div className={styles.cardContainer}>
        {skills.map((skill, index) => (
          <Card key={index} title={skill.title} img={skill.img} alt={skill.alt} description={skill.description} />
        ))}
      </div>
    </article>
  );
}
