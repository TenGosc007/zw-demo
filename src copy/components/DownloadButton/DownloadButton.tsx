"use client";

import React from "react";
import { Trans } from "react-i18next";

import styles from "./DownloadButton.module.scss";

type Props = {
  children?: string[];
};

export function DownloadButton() {
  return (
    <Trans
      i18nKey="section5FormSubtitle"
      components={[<DownloadLink key="download-link" />]}
    />
  );
}

function DownloadLink({ children }: Props) {
  return (
    <a
      href="./Regulamin-Newslettera-Zaplanuj-Wypad.pdf"
      download
      className={styles.link}
    >
      {children}
    </a>
  );
}
