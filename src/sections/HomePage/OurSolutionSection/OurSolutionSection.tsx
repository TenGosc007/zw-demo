import Image from "next/image";
import React from "react";

import ImgMock2 from "@/assets/images/mock-2.png";
import { Section, Tag, Text } from "@/components";
import TextTab from "@/components/TextTab/TextTab";
import initTranslations from "@/i18n";

import styles from "./OurSolutionSection.module.scss";

type OurSolutionSectionProps = {
  locale: string;
};

export async function OurSolutionSection({ locale }: OurSolutionSectionProps) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <Section>
      <div className={styles.content}>
        <Tag text={t("tag2")} />
        <Text type="heading">{t("section3Title")}</Text>
        <div className={styles.tabWrapper}>
          <TextTab>
            <Text type="heading" as="h4">
              {t("section3CardTitle")}
            </Text>
            <Text>{t("section3CardSubtitle")}</Text>
          </TextTab>
          <div className={styles.tabTextItem}>
            <Text type="heading" as="h4">
              {t("section3Item1Title")}
            </Text>
            <Text>{t("section3Item1Subtitle")}</Text>
          </div>
          <div className={styles.tabTextItem}>
            <Text type="heading" as="h4">
              {t("section3Item2Title")}
            </Text>
            <Text>{t("section3Item2Subtitle")}</Text>
          </div>
        </div>
      </div>
      <Image
        className={styles.img}
        src={ImgMock2}
        alt="mock-2"
        height={480}
        width={480}
        placeholder="blur"
      />
    </Section>
  );
}
