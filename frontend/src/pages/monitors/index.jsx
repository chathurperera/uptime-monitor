import React from "react";
import styles from "./monitors.module.scss";

const Monitors = () => {
  return (
    <div className={styles.monitors}>
      <div className={styles.monitors_head}>
        <h2>How are you today, Chathura?</h2>
        <button>Create monitor</button>
      </div>
    </div>
  );
};

export default Monitors;
