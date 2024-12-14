"use client";

import { inboxData } from "@/config/inboxData";
import React from "react";
import styles from "./invoice.module.css";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import useWindowDimensions from "@/hooks/useDimension";

const InvoiceDetail = ({ handleClick }) => {
  const { width } = useWindowDimensions();

  const indexItem = 0;
  return (
    <>
      <div
        style={{
          boxShadow:
            "0 10px 15px rgba(0, 0, 0, 0.25), 0 4px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "var(--card-bg)",
          marginTop: "20px",
          marginLeft: "2%",
          padding: "10px",
          borderRadius: "8px",
          // width: !isResponsive ? "65%" : "70%",
        }}
      >
        {inboxData.map((item, index) =>
          index === indexItem ? (
            <div className={styles.invoice_content} key={index}>
              <div className={styles.card_heading}>
                <div className={styles.logo}>
                  {width < 940 ? (
                    <ArrowLeftIcon
                      style={{
                        height: "1rem",
                        width: "1rem",
                        cursor: "pointer",
                        color: "gray",
                        marginRight: "10px",
                      }}
                      onClick={handleClick}
                    />
                  ) : null}
                  <img src={item.data.companyLogo} alt="" />
                </div>
                <div className={styles.paymentType}>
                  {item.data.paymentType}
                </div>
              </div>
              <div className={styles.card_sub_heading}>
                <div className={styles.sub_heading_text}>
                  {item.data.paymentType === "Payments"
                    ? "Invoice"
                    : item.data.paymentType === "Plan"
                    ? "Plan"
                    : "Subscribe"}{" "}
                  - {item.data.month}
                </div>
                <div className={styles.sub_heading_text}>{item.data.date}</div>
              </div>
              <hr
                style={{
                  border: "1px solid lightgrey",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
              <div className={styles.invoice_body}>
                <h1>Invoice</h1>
                <p>{item.data.invoice[0].invoiceId}</p>
                <div className={styles.date}>
                  <div className={styles.date_text}>Invoice Date</div>
                  <div>{item.data.invoice[0].invoiceDate}</div>
                </div>
                <div className={styles.date}>
                  <div className={styles.date_text}>Due Date</div>
                  <div>{item.data.invoice[0].dueDate}</div>
                </div>
                <div className={styles.billing_details}>
                  <div className={styles.billing_details_text}>
                    <h3>Billed To</h3>
                    <p>{item.data.invoice[0].billedTo.name}</p>
                    <p>{item.data.invoice[0].billedTo.email}</p>
                    <p>{item.data.invoice[0].billedTo.address}</p>
                    <p>{item.data.invoice[0].billedTo.phone}</p>
                  </div>
                  <div className={styles.billing_details_text}>
                    <h3>From</h3>
                    <p>{item.data.invoice[0].from.name}</p>
                    <p>{item.data.invoice[0].from.email}</p>
                    <p>{item.data.invoice[0].from.address}</p>
                    <p>{item.data.invoice[0].from.phone}</p>
                  </div>
                </div>
                <div className={styles.invoice_table}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.data.invoice[0].productDescription.map(
                        (item, index) => (
                          <tr key={index}>
                            <td>{item.productName}</td>
                            <td>{item.quantity}</td>
                            <td>${item.pricePerProduct}</td>
                            <td>${item.totalProductPrice}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default InvoiceDetail;
