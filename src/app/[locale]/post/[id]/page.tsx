import parse from "html-react-parser";
import { Metadata } from "next";
import React from "react";

import { getPost } from "@/api/posts";
import { Container, Text } from "@/components";
import { BackBtn } from "@/components/BackBtn";
import { BackgroundImg } from "@/components/BackgroundImg";

import styles from "./post.module.scss";

type PostPageProps = {
  params: { id: number; locale: string };
};

export async function generateMetadata({
  params: { id, locale },
}: PostPageProps): Promise<Metadata> {
  const post = await getPost(id);
  const desc = parse(`<style>
                    #post h1  ${innerStyles.h1}
                    #post h2  ${innerStyles.h2}
                    #post p   ${innerStyles.p}
                    #post strong  ${innerStyles.strong}
                    #post img   ${innerStyles.img}
                </style>
                <div id="post">${post?.content}</div>
                `);

  return {
    title: "ZaplanujWypad | " + post?.title,
    openGraph: {
      images: post?.image || "",
      type: "website",
      title: "Zaplanuj Wypad",
      siteName: "zaplanujwypad.pl",
      locale,
    },
    description: desc.toString().substring(0, 60),
  };
}

export default async function PostPage({ params: { id } }: PostPageProps) {
  const post = await getPost(id);

  return (
    <Container withMargin>
      <BackBtn href="/blog/1" />
      <header className={styles.heading}>
        <div style={{}} className={styles.titleContainer}>
          <div className={styles.bgImg}>
            <BackgroundImg img={post?.image || ""} />
          </div>
          <div className={styles.headerTitie}>
            <Text type="heading" as="h2">
              {post?.title}
            </Text>
          </div>
        </div>
        {post?.updatedAt && (
          <Text type="text" size="xs" className={styles.date} color="tertiary">
            {new Date(post.updatedAt || "").toLocaleDateString()}
          </Text>
        )}
      </header>
      <article className={styles.article}>
        {parse(`<style>
                      #post h1  ${innerStyles.h1}
                      #post h2  ${innerStyles.h2}
                      #post p   ${innerStyles.p}
                      #post strong  ${innerStyles.strong}
                      #post img   ${innerStyles.img}
                  </style>
                  <div id="post">${post?.content}</div>
                `)}
      </article>
    </Container>
  );
}

const innerStyles = {
  h1: `{
    margin: 0.5em 0;
    font-weight: 500;
  }`,
  h2: `{
    margin: 1.5em 0 .5em;
    font-weight: 600;
  }`,
  h3: `{
    margin: 0.5em;
    font-weight: 600;
  }`,
  p: `{
    line-height: 1.2em;
    font-weight: 300;
  }`,
  strong: `{
    font-weight: 600;
  }`,
  img: `{
    width: 100%;
  }`,
};
