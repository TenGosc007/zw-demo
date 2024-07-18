import React from "react";

import { Section, Text } from "@/components";
import initTranslations from "@/i18n";

import styles from "./PlanningTripSection.module.scss";

type PlanningTripSectionProps = {
  locale: string;
};

export async function PlanningTripSection({
  locale,
}: PlanningTripSectionProps) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <Section center>
      <div className={styles.container}>
        <Text type="heading">{t("section2Title")}</Text>
        <Text>{t("section2Subtitle")}</Text>
      </div>
    </Section>
  );
}
