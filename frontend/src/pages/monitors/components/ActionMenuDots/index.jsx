import React from "react";
import { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import styles from "../Monitor/Monitor.module.scss";
import MonitorActionsMenu from "@/pages/monitors/components/MonitorActionsMenu";

const ActionMenuDots = ({ teamId, monitorId }) => {
  const [showActions, setShowActions] = useState(false);

  function toggleActionsMenu(e) {
    e.stopPropagation();
    setShowActions((prevState) => !prevState);
  }

  return (
    <>
      <div className={`${styles.dots} hoverEffect`} onClick={toggleActionsMenu}>
        <AiOutlineEllipsis size="25px" />
      </div>
      {showActions && (
        <MonitorActionsMenu
          setShowActions={setShowActions}
          teamId={teamId}
          monitorId={monitorId}
        />
      )}
    </>
  );
};

export default ActionMenuDots;
