import BackButton from "@/components/BackButton";
import React, { useEffect, useState } from "react";
import Actions from "./components/Actions";
import Head from "./components/Head";
import StatsCard from "./components/StatsCard";
import styles from "./monitor-details.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMonitor } from "../../features/monitors/monitorSlice";
import { getTimePeriod } from "../../util/getTimePeriod";

const MonitorDetails = () => {
  const { monitorID } = useParams();
  const dispatch = useDispatch();
  const [monitor, setMonitor] = useState(null);

  useEffect(() => {
    dispatch(getMonitor(monitorID))
      .unwrap()
      .then((res) => {
        console.log("res sss", res);
        setMonitor(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  
  return (
    <div className={styles.monitorDetails}>
      <BackButton />
      <Head url={monitor?.url}/>
      <Actions />
      <div className={styles.monitorDetails_stats}>
        <StatsCard label="Currently up for" value={getTimePeriod(monitor?.lastIncidentAt)} />
        <StatsCard label="Last checked at" value="30 mins" />
        <StatsCard label="Incidents" value="0" />
      </div>
    </div>
  );
};

export default MonitorDetails;
