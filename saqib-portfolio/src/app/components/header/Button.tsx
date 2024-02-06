"use client";
import Image from "next/image";
import React from "react";
import styles from "./header.module.css";

export default function Button(props: any) {
  const scroll = (id: string) => {
    let elem = document.getElementById(id);
    if (elem !== null) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <button onClick={() => scroll(props.title)}>{props.title}</button>;
}
