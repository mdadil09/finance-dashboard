"use client";

import React, { createContext, useEffect, useState } from "react";
import styles from "./latestTransaction.module.css";
import Link from "next/link";
import axios from "axios";
import { TransactionsTable } from "@/components/misc/TransactionTable/Transactiontable";
import { TransactionsTableDash } from "@/components/misc/TransactionTable/TransactionTableDash";
import { DataContext } from "@/app/dashboard/layout";

const LatestTransaction = () => {
  return (
    <div className={styles.trans_container}>
      <div className={styles.trans_header}>
        <div>
          <h4>All Transaction</h4>
        </div>
        <div>
          <Link href="/dashboard/transactions">View All</Link>
        </div>
      </div>

      <div className={styles.trans_table}>
        <TransactionsTableDash />
      </div>
    </div>
  );
};

export default LatestTransaction;
