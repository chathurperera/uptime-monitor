import React from "react";
import styles from "./SidebarLink.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineSecurityScan } from "react-icons/ai";

const SidebarLink = ({ children , text}) => {
  return (
    <div className={styles.sidebarLink}>
      <Link to="/">
        {children}
        {text}
      </Link>
    </div>
  );
};

export default SidebarLink;
