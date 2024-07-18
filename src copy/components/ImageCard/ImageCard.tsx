import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import IconFb from "@/assets/icons/fb.png";
import IconIn from "@/assets/icons/ln.png";

import { Text } from "../Text";

import styles from "./ImageCard.module.scss";

type ImageCardType = {
  img: string | StaticImport;
  name: string;
  role: string;
  fb: string;
  ln: string;
};

export function ImageCard({ img, name, role, fb, ln }: ImageCardType) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={img}
          alt="profile"
          width={384}
          height={384}
          placeholder="blur"
          className={styles.img}
        />
      </div>
      <div className={styles.textWrapper}>
        <Text type="heading" as="h4">
          {name}
        </Text>
        <Text>{role}</Text>
        <div>
          <Link href={ln} target="_blank">
            <Image
              src={IconIn}
              alt="media"
              width={40}
              height={40}
              className={styles.imgMedia}
            />
          </Link>
          <Link href={ln} target="_blank">
            <Image
              src={IconFb}
              alt="media"
              width={40}
              height={40}
              className={styles.imgMedia}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
