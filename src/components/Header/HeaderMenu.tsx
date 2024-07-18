import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import IconMenuClose from "@/assets/icons/menuClose.png";

import { Text } from "../Text";

import styles from "./Header.module.scss";

type HeaderMenuProps = {
  onClose: () => void;
  show?: boolean;
};

export function HeaderMenu({ onClose, show }: HeaderMenuProps) {
  return (
    <div className={cx(styles.menuContainer, show ? styles.show : styles.hide)}>
      <div className={styles.menuBtn} onClick={onClose}>
        <Image
          src={IconMenuClose}
          alt="media"
          width={36}
          height={36}
          className={styles.menuImg}
        />
      </div>

      <div className={styles.menuContent}>
        <Link href="/" onClick={onClose}>
          <Text weight="medium" size="xl" color="tertiary">
            Home
          </Text>
        </Link>
        <Link href="/blog/1" onClick={onClose}>
          <Text weight="medium" size="xl" color="tertiary">
            Blog
          </Text>
        </Link>
      </div>
    </div>
  );
}
