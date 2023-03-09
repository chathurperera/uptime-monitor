import React, { useState } from "react";
import styles from "./Monitor.module.scss";
import { AiOutlineEllipsis, AiOutlineBell } from "react-icons/ai";

import useOutSideClick from "@/hooks/user-outSideClick";
import { getTimePeriod } from "../../../../util/getTimePeriod";
import moment from "moment";
import ActionMenuDots from "../ActionMenuDots";

const Monitor = ({ monitor }) => {
  const period = getTimePeriod(monitor.lastIncidentAt);
  console.log("monitor rendered");
  return (
    <div className={styles.monitor}>
      <div className={styles.info}>
        <span
          className={
            monitor.availability
              ? `${styles.info_dot} ${styles.active}`
              : `${styles.info_dot} ${styles.paused}`
          }
        ></span>
        <div className={styles.info_url}>
          <p className={styles.url}>{monitor.url}</p>
          <p className={styles.status}>
            <span
              className={
                monitor.availability
                  ? `${styles.status_text} ${styles.up}`
                  : `${styles.status_text} ${styles.paused}`
              }
            >
              {monitor.availability ? "Up" : "Down"}
            </span>
            : {getTimePeriod(monitor.lastIncidentAt)}
          </p>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.purpose}>
          <AiOutlineBell />
          <p>
            {monitor.alertsTriggeredOn === 1
              ? "URL Monitoring"
              : monitor.alertsTriggeredOn === 3
              ? "SSL Monitoring"
              : "Keyword Monitoring"}
          </p>
        </div>
        <ActionMenuDots teamId={monitor.team} monitorId={monitor._id} />
      </div>
    </div>
  );
};

export default Monitor;
