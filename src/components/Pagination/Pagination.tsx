import cx from "classnames";
import Link from "next/link";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  baseUrl: string;
  page: number;
  perPage: number;
  total: number;
};

export function Pagination({ baseUrl, page, perPage, total }: PaginationProps) {
  const pagesNums = Array.from(
    { length: Math.ceil(total / perPage) },
    (_, i) => i + 1
  );

  return (
    <div className={styles.container}>
      <Link
        href={`${baseUrl}/${page - 1}`}
        rel="prev"
        className={cx(page !== 1 && styles.visible)}
      >
        Previous
      </Link>
      <div className={styles.numbers}>
        {pagesNums.map((num) => (
          <Link
            key={num}
            href={`${baseUrl}/${num}`}
            rel="next"
            className={cx(
              styles.visible,
              Number(page) === Number(num) && styles.activeLink
            )}
          >
            {num}
          </Link>
        ))}
      </div>
      <Link
        href={`${baseUrl}/${page + 1}`}
        rel="next"
        className={cx(perPage * page < total && styles.visible)}
      >
        Next
      </Link>
    </div>
  );
}
