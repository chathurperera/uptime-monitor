import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MonitorActionsMenu.module.scss";
import {
  AiOutlinePauseCircle,
  AiOutlineSetting,
  AiOutlineDelete,
  AiOutlineWarning,
  AiOutlineMonitor,
} from "react-icons/ai";

import { deleteMonitor } from "@/features/monitors/monitorSlice";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MonitorActionsMenu = ({ monitorId, setShowActions, teamId }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  //Handle deleting the monitor
  const handleDelete = async (monitorId) => {
    setIsLoading(true);
    await dispatch(deleteMonitor(monitorId))
      .unwrap()
      .then(() => {
        setIsLoading(false);
        setShowActions(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.monitorActionsMenu}>
      <div
        className={styles.menuItem}
        onClick={() => handleNavigation("team/incidents")}
      >
        <AiOutlineSetting /> Settings
      </div>
      <div className={styles.menuItem}>
        <AiOutlineWarning /> Incident
      </div>
      <div
        className={styles.menuItem}
        onClick={() => handleNavigation(`team/${teamId}/monitor/${monitorId}`)}
      >
        <AiOutlineMonitor /> Stats
      </div>
      <div className={styles.menuItem}>
        <AiOutlinePauseCircle /> Pause
      </div>
      <div className={styles.menuItem} onClick={() => handleDelete(monitorId)}>
        {!isLoading ? <AiOutlineDelete /> : <Spinner />} Remove
      </div>
    </div>
  );
};

export default MonitorActionsMenu;
