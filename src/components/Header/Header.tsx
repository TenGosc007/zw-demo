"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import IconMenu from "@/assets/icons/menu.png";
import ImgLogo from "@/assets/images/logo.png";

import { Button } from "../Button";
import { Container } from "../Container";
import { Text } from "../Text";

import styles from "./Header.module.scss";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.container}>
      <Container>
        <div className={styles.content}>
          <Link href="/" prefetch>
            <Image
              src={ImgLogo}
              alt="zaplanuj wypad"
              className={styles.img}
              priority
            />
          </Link>
          <div className={styles.nav}>
            <div className={styles.menuBtn} onClick={() => setShowMenu(true)}>
              <Image
                src={IconMenu}
                alt="media"
                width={36}
                height={36}
                className={styles.menuImg}
              />
            </div>
            <div className={styles.navItem}>
              <Link href="/blog/1" prefetch>
                <Text weight="medium" color="button">
                  Blog
                </Text>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/#form-section">
                <Button>
                  <Text weight="medium" color="button" className={styles.text}>
                    {t("button1")}
                  </Text>
                </Button>
              </Link>
            </div>
          </div>
          <HeaderMenu onClose={() => setShowMenu(false)} show={showMenu} />
        </div>
        <div className={styles.banner}>
          <Link href="/#form-section">
            <Text weight="medium" color="button" className={styles.text}>
              {t("button1")}
            </Text>
          </Link>
        </div>
      </Container>
    </header>
  );
}
