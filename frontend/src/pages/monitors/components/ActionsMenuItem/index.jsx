import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./ActionsMenuItem.module.scss";

const ActionsMenuItem = ({
  text,
  onClickHandler,
  setShowActions,
  icon,
}) => {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  //Handle the onClick
  const handelClick = async () => {
    await dispatch(onClickHandler)
      .unwrap()
      .then(() => {
        setLoading(false);
        setShowActions(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.menuItem} onClick={handelClick}>
      {loading ? <Spinner /> : icon} {text}
    </div>
  );
};

export default ActionsMenuItem;
