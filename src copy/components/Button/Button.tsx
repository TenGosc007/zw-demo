import cx from "classnames";
import React from "react";

import styles from "./Button.module.scss";

type ButtonType = {
  children?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ children, ...props }: ButtonType) {
  return (
    <button {...props} className={cx(styles.container, props.className)}>
      {children}
    </button>
  );
}
