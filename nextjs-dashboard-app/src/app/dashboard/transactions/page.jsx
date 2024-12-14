"use client";

import { TransactionsTable } from "@/components/misc/TransactionTable/Transactiontable";
import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./transactions.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import Pagination from "@/components/misc/Pagination/Pagination";
import { DataContext } from "../layout";

const Transactions = () => {
  const token = useSelector((state) => state.auth.token);
  const [search, setSearch] = useState("");
  const [searchedTransactionData, setSearchTransactionData] = useState();
  const [transactionData, setTransactionData] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const { isResponsive } = useContext(DataContext);

  const getTransactionData = async (page) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.get(
        `http://localhost:5000/api/transaction?page=${page}&limit=${limit}`,
        config
      );
      const totalNumber = result.data.next
        ? result.data.next.totalNumber
        : result.data.previous.totalNumber;
      console.log(
        `http://localhost:5000/api/transaction?page=${page}&limit=${limit}`
      );
      setTransactionData(result.data);
      setTotalPages(Math.ceil(totalNumber / limit));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("transactionData: ", transactionData);
  console.log("Total Pages: ", totalPages);

  const getSearchedTransactionData = async (query) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.get(
        `http://localhost:5000/api/transaction/${query}`,
        config
      );

      console.log(`http://localhost:5000/api/transaction/${search}`);

      if (Array.isArray(result.data)) {
        setSearchTransactionData(result.data);
      } else {
        setSearchTransactionData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      getSearchedTransactionData(query);
    }, 300),
    []
  );

  const handleChange = (e) => {
    const query = e.target.value;

    setSearch(query);
    debouncedSearch(query);
  };

  const selectedPageClickInc = () => {
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      getTransactionData(newPage);
      return newPage;
    });
  };

  const selectedPageClickDec = () => {
    setPage((prevPage) => {
      const newPage = prevPage - 1;
      getTransactionData(newPage);
      return newPage;
    });
  };

  const selectedPageClickNum = (i) => {
    setPage(i);
    console.log("i=", i);
    getTransactionData(i);
  };

  useEffect(() => {
    if (token) {
      getTransactionData(page);
    }
  }, [token, page]);

  useEffect(() => {
    if (search) {
      getSearchedTransactionData(search);
    }
  }, [search]);

  return (
    <>
      <div
        className={
          !isResponsive ? styles.trans_container : styles.trans_container_full
        }
      >
        <div className={styles.trans_header}>
          <div>
            <h4>All Transaction</h4>
          </div>
          <div className={styles.inputSec}>
            <input
              className
              type="text"
              placeholder="search..."
              value={search}
              onChange={handleChange}
            />
            <button onClick={() => getSearchedTransactionData(search)}>
              <MagnifyingGlassIcon
                style={{
                  height: "0.75rem",
                  width: "0.75rem",
                  cursor: "pointer",
                }}
              />
            </button>
          </div>
        </div>

        <div className={styles.trans_table}>
          <TransactionsTable
            isLoading={isLoading}
            transactionData={transactionData}
            search={search}
            searchedTransactionData={searchedTransactionData}
          />
        </div>
        <Pagination
          page={page}
          totalPages={totalPages}
          selectedPageClickInc={selectedPageClickInc}
          selectedPageClickDec={selectedPageClickDec}
          selectedPageClickNum={selectedPageClickNum}
        />
      </div>
    </>
  );
};

export default Transactions;
