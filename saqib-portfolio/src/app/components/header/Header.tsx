import Image from "next/image";
import React from "react";
import styles from "./header.module.css";
import Button from "./Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/">
          <Image className={styles.img} src={"/saqib-img-4.png"} alt="Muhammad Saqib Nawaz Image" width={50} height={50} />
        </a>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="/">Home</a>
          </li>
          <li className={styles.li}>
            <Button title={"Projects"} />
          </li>
          <li className={styles.li}>
            <Button title={"Contact"} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
