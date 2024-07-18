import cx from "classnames";
import React from "react";

import styles from "./Container.module.scss";

type ContainerProps = {
  children: React.ReactNode;
  withMargin?: boolean;
  fill?: boolean;
};

export function Container({ children, withMargin, fill }: ContainerProps) {
  return (
    <div
      className={cx(
        styles.container,
        withMargin && styles.margin,
        fill && styles.fill
      )}
    >
      {children}
    </div>
  );
}
