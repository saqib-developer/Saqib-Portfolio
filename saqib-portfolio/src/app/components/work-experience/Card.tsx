"use client";
import React from "react";
import { Tilt } from "react-tilt";
import styles from "./WorkExperience.module.css";
import Image from "next/image";

export default function Card(props: any) {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 40, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.07, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <section className={styles.section}>
      <Tilt className={styles.card} options={defaultOptions}>
        <Image src={props.img} alt={props.alt} width={100} height={100} />
        <div className={styles.details}>
          <h3>{props.title}:</h3>
          <p>{props.description}</p>
        </div>
      </Tilt>
    </section>
  );
}
