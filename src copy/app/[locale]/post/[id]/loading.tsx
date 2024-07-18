import React from "react";

import { Container, Section } from "@/components";
import { BackBtn } from "@/components/BackBtn";

import styles from "./post.module.scss";

export default function PostPage() {
  return (
    <>
      <Container withMargin>
        <BackBtn href="/blog/1" />
        <header className={styles.heading}>
          <div style={{}} className={styles.titleContainer}>
            <Section center>...loading</Section>
          </div>
        </header>
      </Container>
    </>
  );
}
