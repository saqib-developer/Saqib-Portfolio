"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Input(props: any) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  return (
    <div className={`${styles.inputContainer} ${isInputFocused ? styles.focused : ""}`}>
      <label className={`${styles.label} ${isInputFocused || props.value ? styles.reset : ""}`} htmlFor={props.label}>
        {props.label} *
      </label>
      <input
        id={props.label}
        name={props.label}
        type={props.label === "Email" ? "email" : "text"}
        required
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
    </div>
  );
}
