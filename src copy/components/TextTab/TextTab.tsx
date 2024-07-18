import React from "react";

import styles from "./TextTab.module.scss";

type TextTabType = {
  children: React.ReactNode;
};

export default function TextTab({ children }: TextTabType) {
  return <div className={styles.container}>{children}</div>;
}
