import React from "react";
import styles from "./MenuList.module.scss";

const MenuList = ({ children, customStyles }) => {
  console.log(customStyles)
  return (
    <div
      className={styles.menuList}
      style={customStyles}
    >
      {children}
    </div>
  );
};

export default MenuList;
