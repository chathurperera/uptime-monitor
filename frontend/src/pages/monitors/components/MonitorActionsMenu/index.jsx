import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MonitorActionsMenu.module.scss";
import {
  AiOutlinePauseCircle,
  AiOutlineSetting,
  AiOutlineDelete,
  AiOutlineWarning,
} from "react-icons/ai";

import { deleteMonitor, pauseMonitor } from "@/features/monitors/monitorSlice";
import { useState } from "react";
import ActionsMenuItem from "../ActionsMenuItem";

const MonitorActionsMenu = ({ monitorId, setShowActions }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

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

  //Handle monitor pausing
  const handlePause = async (monitorId) => {};

  return (
    <div className={styles.monitorActionsMenu}>
      <ActionsMenuItem
        text="Settings"
        icon={<AiOutlineSetting />}
        setShowActions={setShowActions}
      />
      <ActionsMenuItem
        text="Incident"
        icon={<AiOutlineWarning />}
        setShowActions={setShowActions}
      />
      <ActionsMenuItem
        text="Pause"
        icon={<AiOutlinePauseCircle />}
        setShowActions={setShowActions}
        onClickHandler={() => pauseMonitor(monitorId)}
      />
      <ActionsMenuItem
        text="Remove"
        icon={<AiOutlineDelete />}
        setShowActions={setShowActions}
        onClickHandler={() => handleDelete(monitorId)}
      />
    </div>
  );
};

export default MonitorActionsMenu;
