"use client";

import DashboardMain from "@/components/dashboard/dashboardMain/DashboardMain";
import React, { useContext } from "react";
import { DataContext } from "./layout";

const Dashboard = () => {
  const { isResponsive } = useContext(DataContext);

  return (
    <>
      <DashboardMain isResponsive={isResponsive} />
    </>
  );
};

export default Dashboard;
