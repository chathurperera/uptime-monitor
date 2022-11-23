import React, { useState } from "react";
import styles from "./Monitor.module.scss";
import { AiOutlineEllipsis } from "react-icons/ai";
import MonitorActionsMenu from "components/MonitorActionsMenu";
import useOutSideClick from "hooks/user-outSideClick";

const Monitor = ({ monitor }) => {
  const [showActions, setShowActions] = useState(false);
  const ref = useOutSideClick(closeActionsMenu);

  function closeActionsMenu() {
    setShowActions(false);
  }
  function toggleActionsMenu(e) {
    e.stopPropagation();
    setShowActions((prevState) => !prevState);
  }

  return (
    <div className={styles.monitor}>
      <div className={styles.info}>
        <div
          className={
            monitor.monitored
              ? `${styles.info_dot} ${styles.active}`
              : `${styles.info_dot} ${styles.paused}`
          }
        ></div>
        <div className={styles.info_url}>
          <p className={styles.url}>{monitor.url}</p>
          <p className={styles.status}>
            <span
              className={
                monitor.monitored
                  ? `${styles.status_text} ${styles.up}`
                  : `${styles.status_text} ${styles.paused}`
              }
            >
              {monitor.monitored ? "Active" : "Paused"}
            </span>
            : 15d 6h
          </p>
        </div>
      </div>
      <div className={styles.actions}>
        <div
          className={`${styles.dots} hoverEffect`}
          onClick={toggleActionsMenu}
        >
          <AiOutlineEllipsis size="25px" />
        </div>
        {showActions && <MonitorActionsMenu ref={ref} />}
      </div>
    </div>
  );
};

export default Monitor;
