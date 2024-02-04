import React from "react";
import styles from "../project.module.css";
import Image from "next/image";

export default function MainProjectCard(props: any) {
  return (
    <a className={styles.project} target="_blank" rel="noreferrer" href={props.link}>
      <div className={styles.project}>
        <h3>{props.title}</h3>
        <div className={styles.proDetail}>
          <Image src={props.img} style={{ boxShadow: `-6px -6px 13px ${props.color}` }} width={100} height={100} alt={props.alt} />
          <p>
            {props.description} <span className={styles.link}>Click&nbsp;to&nbsp;View&nbsp;{">"}</span>
          </p>
        </div>
      </div>
    </a>
  );
}
