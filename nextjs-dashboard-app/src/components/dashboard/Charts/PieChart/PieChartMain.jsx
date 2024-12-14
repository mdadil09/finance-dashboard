"use client";

import React, { createContext } from "react";
import styles from "./pieChart.module.css";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Chart from "react-apexcharts";
import { DataContext } from "@/app/dashboard/layout";

const PieChartMain = ({ isResponsive }) => {
  const { isThemes } = createContext(DataContext);

  var options = {
    series: [83, 67, 50],
    chart: {
      height: 390,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "57%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: true,
          },
          value: {
            show: false,
          },
        },

        track: {
          strokeWidth: "100%",
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          margin: 8,
          fontSize: "12px",
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    colors: ["#1ab7ea", "#0084ff", "#39539E"],
    labels: ["Dream Studio", "Education", "Healthcare"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: true,
            showForSingleSeries: false,
            showForNullSeries: true,
            showForZeroSeries: true,
            position: "bottom",
            horizontalAlign: "center",
            floating: false,
            fontSize: "14px",
            fontFamily: "Helvetica, Arial",
            fontWeight: 400,
            formatter: undefined,
            inverseOrder: false,
            width: undefined,
            height: undefined,
            tooltipHoverFormatter: undefined,
            customLegendItems: [],
            offsetX: 0,
            offsetY: 0,
            labels: {
              colors: undefined,
              useSeriesColors: false,
            },
            markers: {
              width: 12,
              height: 12,
              strokeWidth: 0,
              strokeColor: "#fff",
              fillColors: undefined,
              radius: 12,
              customHTML: undefined,
              onClick: undefined,
              offsetX: 0,
              offsetY: 0,
            },
            itemMargin: {
              horizontal: 5,
              vertical: 0,
            },
            onItemClick: {
              toggleDataSeries: true,
            },
            onItemHover: {
              highlightDataSeries: true,
            },
          },
        },
      },
    ],
  };

  return (
    <div
      className={
        !isResponsive ? styles.pie_container : styles.pie_container_full
      }
    >
      <div className={styles.pie_content}>
        <div className={styles.pie_headers}>
          <div>
            <h4>Total Savings</h4>
          </div>
          <div>
            <EllipsisHorizontalIcon
              style={{
                height: "1.5rem",
                width: "1.5rem",
                color: "grey",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div id="chart">
          <Chart
            options={options}
            series={options.series}
            type="radialBar"
            height={350}
          />
        </div>

        {/* <div className={styles.pie_footer}>
          <div className={styles.pie_company}>
            <div>Dream Studio</div>
            <div>$251.9/$750</div>
          </div>
          <div className={styles.pie_company}>
            <div>Education</div>
            <div>$180/$200</div>
          </div>
          <div className={styles.pie_company}>
            <div>Dream Studio</div>
            <div>$30.8/$150</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PieChartMain;
