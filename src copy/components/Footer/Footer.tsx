"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

import IconFb from "@/assets/icons/fb.png";
import IconIn from "@/assets/icons/ln.png";
import ImgLogo from "@/assets/images/logo.png";

import { Container } from "../Container";
import { Text } from "../Text";

import styles from "./Footer.module.scss";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer>
      <Container>
        <div className={styles.footer}>
          <div className={styles.container}>
            <Image src={ImgLogo} alt="zaplanuj wypad" height={35} />

            <Text weight="thin" size="sm">
              &copy; {currentYear} Zaplanuj Wypad. All rights reserved.
            </Text>
          </div>
          <div className={styles.containerRght}>
            <div>
              <Link
                href={"https://www.linkedin.com/company/zaplanuj-wypad/"}
                target="_blank"
              >
                <Image
                  src={IconIn}
                  alt="media"
                  width={40}
                  height={40}
                  className={styles.imgMedia}
                />
              </Link>
              <Link
                href={"https://www.facebook.com/zaplanuj.wypad?locale=pl_PL"}
                target="_blank"
              >
                <Image
                  src={IconFb}
                  alt="media"
                  width={40}
                  height={40}
                  className={styles.imgMedia}
                />
              </Link>
            </div>

            <Text weight="thin" size="sm">
              {t("privacy")}
            </Text>
          </div>
        </div>
      </Container>
    </footer>
  );
}
