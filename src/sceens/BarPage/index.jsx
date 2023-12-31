import { Box } from "@mui/material";
import React from "react";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

const BarPage = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default BarPage;
