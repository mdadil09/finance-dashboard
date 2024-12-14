"use client";

import React from "react";
import styles from "./assetsAllocation.module.css";
import { ArrowUpIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import HorizontalBarGraph from "@/components/dashboard/Charts/HorizontalBarGraph/HorizontalBarGraph";
import { assetsData } from "@/config/metricsData";

const AssetsAllocation = () => {
  return (
    <>
      <div className={styles.assets_container}>
        <div className={styles.headers}>
          <div>
            <h3>Asset Allocation</h3>
          </div>
          <div>
            <EllipsisVerticalIcon
              style={{
                height: "1.5rem",
                width: "1.5rem",
                cursor: "pointer",
                color: "grey",
              }}
            />
          </div>
        </div>
        <div className={styles.chart}>
          <HorizontalBarGraph />
        </div>
        <div className={styles.income}>
          <div className={styles.income_text}>
            <p>All-time income</p>
            <h1>$373.34k</h1>
            <div className={styles.income_icon}>
              <div>
                <ArrowUpIcon
                  style={{
                    height: "1rem",
                    width: "1rem",
                    cursor: "pointer",
                    color: "#008929",
                    marginRight: "5px",
                    backgroundColor: "#daf4da",
                    padding: "5px",
                    borderRadius: "50%",
                  }}
                  strokeWidth={4}
                />
              </div>
              <p>18.76%</p>
            </div>
          </div>
          <div className={styles.income_text}>
            <p>Dividends</p>
            <h1>$239.84k</h1>
            <div className={styles.income_icon}>
              <div>
                <ArrowUpIcon
                  style={{
                    height: "0.75rem",
                    width: "0.75rem",
                    cursor: "pointer",
                    color: "#008929",
                    marginRight: "5px",
                    backgroundColor: "#daf4da",
                    padding: "5px",
                    borderRadius: "50%",
                  }}
                  strokeWidth={4}
                />
              </div>
              <p>18.76%</p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          {assetsData.map((item, index) => (
            <div key={index}>
              <div className={styles.footer_text}>
                <p>{item.name}</p>
                <p
                  style={{
                    color: item.isProfit
                      ? "#008929"
                      : item.isProfit === false
                      ? "#EF0107"
                      : "grey",
                  }}
                >
                  {item.value}%
                </p>
              </div>
              <hr
                style={{
                  display: item.isProfit === false ? "none" : "",
                  border: "2px solid lightgrey",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AssetsAllocation;
