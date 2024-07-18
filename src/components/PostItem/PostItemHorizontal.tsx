import cx from "classnames";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { PostData } from "@/api/posts";

import { Skeleton } from "../Skeleton";
import { Tag } from "../Tag";
import { Text } from "../Text";

import styles from "./PostItemHorizontal.module.scss";

type Props = Partial<PostData> & {
  width?: string;
};

export function PostItemHorizontal({
  id,
  title,
  image,
  content,
  tags,
  updatedAt,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <Link href={`/post/${id}`} className={cx(styles.container)}>
        <div className={styles.imgContainer}>
          <Image
            src={image || ""}
            alt={"post_" + id}
            className={cx(styles.img)}
            width={480}
            height={360}
            quality={70}
            priority
          />
        </div>
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <Text
              type="heading"
              as="h3"
              color="tertiary"
              className={styles.title}
            >
              {title}
            </Text>

            <div className={styles.tag}>
              {tags?.map(({ name }) => (
                <Tag key={name} text={name} size="xs" />
              ))}
            </div>

            <div className={styles.desc}>
              {parse(`<style>
                        h1,h2,h3,p ${innerStyles}
                      </style>
                      ${content}
                    `)}
            </div>
          </div>

          {updatedAt && (
            <Text
              type="text"
              size="xs"
              className={styles.date}
              color="tertiary"
            >
              {new Date(updatedAt).toLocaleDateString()}
            </Text>
          )}
        </div>
      </Link>
    </div>
  );
}

const innerStyles = `{
  font-size: 1em;
}`;

export function PostItemHorizontalSkeleton() {
  return (
    <div className={cx(styles.wrapper)}>
      <div className={styles.imgContainer} style={{ height: "16em" }}>
        <Skeleton fill />
      </div>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <Skeleton />

          <div className={styles.tag}>
            <Skeleton short />
          </div>

          <div className={styles.desc}>
            <Skeleton short />
            <Skeleton short />
          </div>
        </div>
      </div>
    </div>
  );
}
