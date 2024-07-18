"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import BackIcon from "@/assets/icons/backIcon.png";

import styles from "./BackBtn.module.scss";

type BackBtnProps = {
  href?: string;
};

export function BackBtn({ href }: BackBtnProps) {
  const router = useRouter();
  const { t } = useTranslation();

  const handleClick = useCallback(() => {
    href ? router.push(href) : router.back();
  }, [href, router]);

  return (
    <div className={styles.backBtn} onClick={handleClick}>
      <Image
        src={BackIcon}
        alt="media"
        width={24}
        height={24}
        className={styles.imgMedia}
      />
      <p>{t("back")}</p>
    </div>
  );
}
