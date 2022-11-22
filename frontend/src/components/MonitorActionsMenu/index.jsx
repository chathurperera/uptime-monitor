import React, { forwardRef } from "react";
import styles from "./MonitorActionsMenu.module.scss";
import {
  AiOutlinePauseCircle,
  AiOutlineSetting,
  AiOutlineDelete,
  AiOutlineWarning,
} from "react-icons/ai";

const MonitorActionsMenu = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.monitorActionsMenu}>
      <div className={styles.menuItem}>
        <AiOutlineSetting /> Settings
      </div>
      <div className={styles.menuItem}>
        <AiOutlineWarning /> Incident
      </div>
      <div className={styles.menuItem}>
        <AiOutlinePauseCircle /> Pause
      </div>
      <div className={styles.menuItem}>
        <AiOutlineDelete /> Remove
      </div>
    </div>
  );
});

export default MonitorActionsMenu;