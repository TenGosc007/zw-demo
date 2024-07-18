import Image from "next/image";
import React from "react";

import ImgMock3 from "@/assets/images/mock-3.png";
import { Form, Section, Text, TextCard } from "@/components";
import { DownloadButton } from "@/components/DownloadButton";
import initTranslations from "@/i18n";

import styles from "./WaitlistSection.module.scss";

type WaitlistSectionProps = {
  locale: string;
};

export async function WaitlistSection({ locale }: WaitlistSectionProps) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <Section>
      <Image
        className={styles.img}
        src={ImgMock3}
        alt="mock-1"
        height={480}
        width={480}
        placeholder="blur"
      />
      <div className={styles.container}>
        <div id="form-section" className={styles.formScrollHook} />
        <TextCard type="large">
          <div className={styles.textCardFormContent}>
            <Text type="heading">{t("section5Title")}</Text>
            <Text>{t("section5Subtitle")}</Text>
          </div>
          <div className={styles.textCardForm}>
            <Form />
            <Text weight="thin" size="sm">
              <DownloadButton />
            </Text>
          </div>
        </TextCard>
      </div>
    </Section>
  );
}
