"use client";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import ParentCard from "@/components/shared/ParentCard";
import React from "react";
import AreaChartCode from "./code/AreaChartCode";

const ApexArea = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const optionsareachart: any = {
    chart: {
      id: "area-chart",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: "3",
      curve: "smooth",
    },
    colors: [primary, secondary],
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
      ],
    },
    yaxis: {
      opposite: false,
      labels: {
        show: true,
      },
    },
    legend: {
      show: true,
      position: "bottom",
      width: "50px",
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };
  const seriesareachart = [
    {
      name: "Sales Summery 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Sales Summery 2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  return (
    <ParentCard title="Area Chart" codeModel={<AreaChartCode />}>
      <Chart
        options={optionsareachart}
        series={seriesareachart}
        type="area"
        height="300px"
        width={"100%"}
      />
    </ParentCard>
  );
};

export default ApexArea;
