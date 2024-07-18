import cx from "classnames";
import React from "react";

import { Text } from "../Text";

import styles from "./Tag.module.scss";

type TagProps = {
  text: string;
  size?: "xxs" | "xs" | "sm" | "md";
};

export function Tag({ text, size = "sm" }: TagProps) {
  return (
    <div className={cx(styles.container)}>
      <Text weight="medium" size={size} color="tag">
        {text}
      </Text>
    </div>
  );
}
