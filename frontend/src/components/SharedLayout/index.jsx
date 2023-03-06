import React from "react";
import styles from "./SharedLayout.module.scss";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useSelector } from "react-redux";

const SharedLayout = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    console.log('landed on shared layout')
    return <Navigate to="/login" replace />;
  }
  

  return (
    <main className={styles.layout}>
      <Sidebar user={user} />
      <div className={styles.content}>
        <Header />
        <div className={styles.content_wrapper}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default SharedLayout;
