import React, { Suspense } from "react";

import { getPosts } from "@/api/posts";
import { PostItem, Section, Text } from "@/components";
import initTranslations from "@/i18n";

import styles from "./RecentsPostsSection.module.scss";

type RecentsPostsSectionProps = {
  locale: string;
};

export function RecentsPostsSection({ locale }: RecentsPostsSectionProps) {
  return (
    <Suspense fallback={<Section center>...loading</Section>}>
      <RecentPosts locale={locale} />
    </Suspense>
  );
}

async function RecentPosts({ locale }: RecentsPostsSectionProps) {
  const { t } = await initTranslations(locale, ["common"]);
  const posts = await getPosts({ limit: 3 });

  return (
    <Section center>
      <Text type="heading">{t("sectionRecentPostsTitle")}</Text>
      <div className={styles.container}>
        {posts?.data?.map(({ id, ...rest }) => {
          return <PostItem key={id} id={id} {...rest} size="md" />;
        })}
      </div>
    </Section>
  );
}
