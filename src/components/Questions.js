import React from "react";
import * as styles from "../styles/question.module.css";
export default function Questions() {
  return (
    <section className={styles.container}>
      <div className={styles.questions_container}>
        <p>Trusted source in IT services</p>
        <div className={styles.question_icon}></div>
        <p>
          Have any question? <br />
          Free 00971 52 590 2284
        </p>
      </div>
    </section>
  );
}
