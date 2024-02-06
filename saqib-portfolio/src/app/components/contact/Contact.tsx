import React from "react";
import styles from "./Contact.module.css";
import Image from "next/image";
import Input from "./Input";
import TextArea from "./TextArea";

export default function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const submitForm = () => {
  //   console.log(name, email, message);
  // };

  return (
    <article className={styles.contact} id="Contact">
      <h3>Contact Me</h3>
      <section>
        <a className={styles.link} href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download my Resume {">"}
        </a>
        {/* <form action={submitForm} className={styles.sendGmail}>
          <div className={styles.container}>
            <Input value={name} setValue={setName} label={"Name"} />
            <Input value={email} setValue={setEmail} label={"Email"} />
          </div>
          <TextArea value={message} setValue={setMessage} />
          <input type="submit" value="Send Message" />
        </form> */}
      </section>
      <section>
        <p>If you want to discuss any thing related to web development dontt hesitate to contact me.</p>

        <div className={styles.logos}>
          <a href="https://www.fiverr.com/share/pAR6Eo" target="_blank" rel="noopener noreferrer">
            <Image width={100} height={100} src="/fiverr.png" alt="Fiverr Logo Image" />
          </a>
          <a href="mailto:muhammadsaqib8379@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image width={100} height={100} src="/gmail.png" alt="Gmail Logo Image" style={{ borderRadius: 0 }} />
          </a>
          <a href="https://www.linkedin.com/in/saqib-web-dev/" target="_blank" rel="noopener noreferrer">
            <Image width={100} height={100} src="/linkedin.png" alt="LinkedIn Logo Image " />
          </a>
        </div>
      </section>
    </article>
  );
}
