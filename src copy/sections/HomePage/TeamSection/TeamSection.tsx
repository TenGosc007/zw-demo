import React from "react";

import { Section, Slider, Tag, Text } from "@/components";
import initTranslations from "@/i18n";

import styles from "./TeamSection.module.scss";

type TeamSectionProps = {
  locale: string;
};

export async function TeamSection({ locale }: TeamSectionProps) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <>
      <Section center>
        <div className={styles.container}>
          <Tag text={t("tag3")} />
          <Text type="heading" as="h2">
            {t("section6Title")}
          </Text>
          <Text>{t("section6Subtitle")}</Text>
        </div>
      </Section>

      <Slider />
    </>
  );
}
