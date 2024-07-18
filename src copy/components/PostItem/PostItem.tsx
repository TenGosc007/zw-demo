import cx from "classnames";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { PostData } from "@/api/posts";

import { Tag } from "../Tag";
import { Text } from "../Text";

import styles from "./PostItem.module.scss";

type PostItemProps = Partial<PostData> & {
  size?: "sm" | "md" | "lg";
  width?: string;
};

export function PostItem({
  id,
  title,
  image,
  content,
  tags,
  updatedAt,
  size = "lg",
}: PostItemProps) {
  return (
    <div className={styles.wrapper}>
      <Link
        href={`/post/${id}`}
        className={cx(styles.container, size === "md" && styles.mdWidth)}
      >
        <div className={styles.imgContainer}>
          <Image
            src={image || ""}
            alt={"post_" + id}
            className={cx(styles.img)}
            width={360}
            height={360}
            quality={70}
            priority
          />
        </div>
        <div className={styles.content}>
          <div className={styles.tag}>
            {tags?.map(({ name }) => (
              <Tag key={name} text={name} size="xs" />
            ))}
          </div>

          <Text type="heading" color="tertiary" size={size}>
            {title}
          </Text>
          <div className={styles.desc}>
            {parse(`<style>
                      h1,h2,h3,p ${innerStyles}
                  </style>
                  ${content}
                `)}
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
