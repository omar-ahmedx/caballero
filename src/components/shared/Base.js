import React from "react";
import * as styles from "../../styles/base.module.css";
export default function Base({ path, header }) {
  return (
    <div className={styles.container}>
      <div className={styles.settings_container}>
        <div className={styles.settings}></div>
      </div>
      <div>
        <p className={styles.text}>Home / {path}</p>
        <h1 className={styles.header}>{header}</h1>
      </div>
    </div>
  );
}
