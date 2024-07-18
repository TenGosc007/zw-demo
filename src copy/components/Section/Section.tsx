import cx from "classnames";
import React, { ReactNode } from "react";

import styles from "./Section.module.scss";

type SectionProps = {
  children: ReactNode;
  center?: boolean;
  vertical?: boolean;
};

export function Section({ children, center, vertical }: SectionProps) {
  return (
    <section
      className={cx(
        styles.container,
        vertical && styles.vertical,
        center && styles.center
      )}
    >
      {children}
    </section>
  );
}
