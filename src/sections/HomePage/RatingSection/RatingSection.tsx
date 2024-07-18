import Image from "next/image";
import React from "react";

import IconStar from "@/assets/icons/ic_round-star.png";
import { Section, Text, TextCard } from "@/components";
import initTranslations from "@/i18n";

import styles from "./RatingSection.module.scss";

type RatingSectionProps = {
  locale: string;
};

export async function RatingSection({ locale }: RatingSectionProps) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <Section vertical>
      <div className={styles.textWrapper}>
        <Text type="heading" as="h2">
          {t("section4Title")}
        </Text>
        <Text>{t("section4Sbtitle")}</Text>
      </div>
      <div className={styles.textCardContainer}>
        <TextCard>
          <Image src={IconStar} alt="star" width="48" />
          <div className={styles.textCardContent}>
            <Text type="heading" as="h4">
              {t("section4Card1Title")}
            </Text>
            <Text>{t("section4Card1Subtitle")}</Text>
          </div>
        </TextCard>
        <TextCard>
          <Image src={IconStar} alt="star" width="48" />
          <div className={styles.textCardContent}>
            <Text type="heading" as="h4">
              {t("section4Card2Title")}
            </Text>
            <Text>{t("section4Card2Subtitle")}</Text>
          </div>
        </TextCard>
        <TextCard>
          <Image src={IconStar} alt="star" width="48" />
          <div className={styles.textCardContent}>
            <Text type="heading" as="h4">
              {t("section4Card3Title")}
            </Text>
            <Text>{t("section4Card3Subtitle")}</Text>
          </div>
        </TextCard>
      </div>
    </Section>
  );
}
