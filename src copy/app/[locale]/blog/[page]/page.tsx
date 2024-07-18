import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { getPosts } from "@/api/posts";
import { Container, Pagination, Text } from "@/components";
import initTranslations from "@/i18n";
import { PostsSection } from "@/sections";

import styles from "./blog.module.scss";

const POSTS_PER_PAGE = 10;

type Props = {
  params: { page: number; locale: string };
};

export const metadata: Metadata = {
  title: "ZaplanujWypad | Blog",
};

export default async function BlogPage({ params: { page, locale } }: Props) {
  const { t } = await initTranslations(locale, ["common"]);

  if (Number(page) < 1) notFound();

  const posts = await getPosts({ limit: POSTS_PER_PAGE, page });
  const total = posts?.total || 0;

  return (
    <Container withMargin fill>
      <div className={styles.container}>
        <div className={styles.content}>
          <Text type="heading" as="h2">
            {t("blog")}
          </Text>

          <PostsSection data={posts?.data} />
        </div>

        <Pagination
          baseUrl="/blog"
          page={Number(page)}
          total={total}
          perPage={POSTS_PER_PAGE}
        />
      </div>
    </Container>
  );
}
