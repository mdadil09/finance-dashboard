import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({
  page,
  totalPages,
  selectedPageClickInc,
  selectedPageClickDec,
  selectedPageClickNum,
}) => {
  console.log("Page: ", page);
  return (
    <>
      {totalPages > 0 && (
        <div className={styles.pagination}>
          <span
            className={page > 1 ? "" : styles.pagination__disable}
            onClick={selectedPageClickDec}
          >
            Prev
          </span>
          {[...Array(totalPages)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? styles.pagination__selected : ""}
                onClick={() => selectedPageClickNum(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={page < totalPages ? "" : styles.pagination__disable}
            onClick={selectedPageClickInc}
          >
            Next
          </span>
        </div>
      )}
    </>
  );
};

export default Pagination;
