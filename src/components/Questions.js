import React from "react";
import * as styles from "../styles/question.module.css";
export default function Questions() {
  return (
    <section className={styles.container}>
      <div className={styles.questions_container}>
        <a href="https://wa.me/971525902284" target="_blank" rel="noreferrer">
          Trusted source in IT services
        </a>
        <a
          href="https://wa.me/971525902284"
          target="_blank"
          className={styles.question_icon}
        ></a>
        <a href="https://wa.me/971525902284" target="_blank" rel="noreferrer">
          Have any question? <br />
          Free 00971 52 590 2284
        </a>
      </div>
    </section>
  );
}
