"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function TextArea(props:any) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  return (
    <div className={`${styles.inputContainer} ${isInputFocused ? styles.focused : ""}`}>
      <label className={`${styles.label} ${isInputFocused || props.value ? styles.reset : ""}`} htmlFor="message">
        Message *
      </label>
      <textarea
        className={styles.textarea}
        id="message"
        name="message"
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
    </div>
  );
}
