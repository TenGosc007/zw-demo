import cx from "classnames";
import React from "react";

import styles from "./TextCard.module.scss";

type TextCardType = {
  children: React.ReactNode;
  type?: "normal" | "large";
};

export function TextCard({ children, type }: TextCardType) {
  return (
    <div className={cx(styles.container, type === "large" && styles.large)}>
      {children}
    </div>
  );
}
