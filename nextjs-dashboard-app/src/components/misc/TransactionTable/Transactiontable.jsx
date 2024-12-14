"use client";

import styles from "./transactionTable.module.css";
import {
  EllipsisHorizontalCircleIcon,
  LinkIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { InfinitySpin } from "react-loader-spinner";

export function TransactionsTable({
  transactionData,
  search,
  searchedTransactionData,
  isLoading,
}) {
  return (
    <>
      <div
        className={styles.table_container}
        style={{ height: "70vh", overflowY: "auto" }}
      >
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>To/From</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <InfinitySpin
                  height="200"
                  width="200"
                  color="#007fff"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : search === "" ? (
              transactionData?.results.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>

                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ marginRight: "5px" }}>
                        <img src={item.img} alt="" />
                      </div>{" "}
                    </div>
                  </td>
                  <td style={{ color: "grey" }}>{item.date}</td>
                  <td>{item.description}</td>
                  <td
                    style={{
                      color: !item.isLoss ? "#03c03c" : "#EF0107",
                    }}
                  >
                    {item.amount}
                  </td>
                  <td>
                    <div
                      style={{
                        border:
                          item.status === "Success"
                            ? "1px solid #03c03c"
                            : "1px solid #EF0107",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        paddingBottom: "5px",
                        paddingTop: "5px",
                        width: "fit-content",
                        borderRadius: "25px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color:
                            item.status === "Success" ? "#03c03c" : "#EF0107",
                        }}
                      >
                        {item.status}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        <LinkIcon
                          style={{
                            height: "1rem",
                            width: "1rem",
                            color: "grey",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <div>
                        <TrashIcon
                          style={{
                            height: "1rem",
                            width: "1rem",
                            color: "grey",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <div>
                        <EllipsisHorizontalCircleIcon
                          style={{
                            height: "1rem",
                            width: "1rem",
                            color: "grey",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              searchedTransactionData?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>

                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ marginRight: "5px" }}>
                        <img src={item.img} alt="" />
                      </div>{" "}
                    </div>
                  </td>
                  <td style={{ color: "grey" }}>{item.date}</td>
                  <td>{item.description}</td>
                  <td
                    style={{
                      color: !item.isLoss ? "#03c03c" : "#EF0107",
                    }}
                  >
                    {item.amount}
                  </td>
                  <td>
                    <div
                      style={{
                        border:
                          item.status === "Success"
                            ? "1px solid #03c03c"
                            : "1px solid #EF0107",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        paddingBottom: "5px",
                        paddingTop: "5px",
                        width: "fit-content",
                        borderRadius: "25px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color:
                            item.status === "Success" ? "#03c03c" : "#EF0107",
                        }}
                      >
                        {item.status}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        <LinkIcon
                          style={{
                            height: "1rem",
                            width: "1rem",
                            color: "grey",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <div>
                        <TrashIcon
                          style={{
                            height: "1rem",
                            width: "1rem",
                            color: "grey",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <div>
                        <EllipsisHorizontalCircleIcon
                          style={{
                            height: "1rem",
                            width: "1rem",
                            color: "grey",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
