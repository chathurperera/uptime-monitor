import React from "react";
import styles from "./SidebarLink.module.scss";
import { NavLink } from "react-router-dom";

const SidebarLink = React.memo(({ children, to, text }) => {
  let activeStyle = {
    backgroundColor: "#45495594",
  };

  console.log("rendered");
  return (
    <div className={styles.sidebarLink}>
      <NavLink
        to={to}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {children}
        {text}
      </NavLink>
    </div>
  );
});

export default SidebarLink;
