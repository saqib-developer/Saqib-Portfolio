import React from "react";
import styles from "./MinorProjectCard.module.css";
import Image from "next/image";

export default function MinorProjectCard(props: any) {
  return (
    <a className={styles.project} target="_blank" rel="noreferrer" href={props.link}>
      <Image src={props.img} width={100} height={100} alt={props.alt} />
      <div className={styles.projectDetail}>
        <h3>{props.title}</h3>
        <p>
          {props.description} <span className={styles.link}>Click&nbsp;to&nbsp;View&nbsp;{">"}</span>
        </p>
      </div>
    </a>
  );
}
