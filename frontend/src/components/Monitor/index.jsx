import React, { useState } from "react";
import styles from "./Monitor.module.scss";
import { AiOutlineEllipsis } from "react-icons/ai";
import MonitorActionsMenu from "components/MonitorActionsPanel";

const Monitor = () => {
  const [showActions, setShowActions] = useState(false);

  return (
    <div className={styles.monitor}>
      <div className={styles.info}>
        <div className={styles.info_dot}></div>
        <div className={styles.info_url}>
          <p className={styles.url}>chathuraperera.netlify.app</p>
          <p className={styles.status}>
            <span className={styles.status_text}>Paused</span> : 15d 6h
          </p>
        </div>
      </div>
      <div className={styles.actions}>
        <div
          className={`${styles.dots} hoverEffect`}
          onClick={() => setShowActions((prevState) => !prevState)}
        >
          <AiOutlineEllipsis size="25px" />
        </div>
        {showActions && <MonitorActionsMenu />}
      </div>
    </div>
  );
};

export default Monitor;
