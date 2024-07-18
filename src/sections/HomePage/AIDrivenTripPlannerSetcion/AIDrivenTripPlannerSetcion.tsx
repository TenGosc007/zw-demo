import Image from "next/image";
import Link from "next/link";
import React from "react";

import ImgMock1 from "@/assets/images/mock-1.png";
import { Button, Section, Tag, Text } from "@/components";
import initTranslations from "@/i18n";

import styles from "./AIDrivenTripPlannerSetcion.module.scss";

type AIDrivenTripPlannerSetcionProps = {
  locale: string;
};

export async function AIDrivenTripPlannerSetcion({
  locale,
}: AIDrivenTripPlannerSetcionProps) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <Section>
      <div className={styles.item}>
        <Tag text={t("tag1")} />
        <Text type="heading" as="h1">
          {t("section1Title")}
        </Text>
        <Text>{t("section1Subtitle")}</Text>
        <Link href="#form-section">
          <Button>
            <Text weight="medium" color="button">
              {t("button1")}
            </Text>
          </Button>
        </Link>
      </div>
      <Image
        className={styles.img}
        src={ImgMock1}
        alt="mock-1"
        height={480}
        priority
      />
    </Section>
  );
}
