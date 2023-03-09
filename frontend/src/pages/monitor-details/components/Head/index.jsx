import React from "react";
import styles from "./Head.module.scss";

const Head = ({ url }) => {
  return (
    <div className={styles.head}>
      <div className={styles.head_indicator}>
        <span className={`${styles.status} ${styles.online}`}></span>
      </div>
      <div className={styles.head_details}>
        <div className={styles.head_details__url}>{url}</div>
        <div className={styles.head_details__uptime}>
          <span style={{ color: "green" }}>Up</span> · Checked every 30 minutes
        </div>
      </div>
    </div>
  );
};

export default Head;
