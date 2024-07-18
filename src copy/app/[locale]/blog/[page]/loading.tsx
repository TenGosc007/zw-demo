import React from "react";

import { Container, Section, Text } from "@/components";
import { PostItemHorizontalSkeleton } from "@/components/PostItem/PostItemHorizontal";
import { SkeletonList } from "@/components/Skeleton";

import styles from "./blog.module.scss";

export default function BlogPage() {
  return (
    <Container withMargin fill>
      <div className={styles.container}>
        <div className={styles.content}>
          <Text type="heading" as="h2">
            Blog
          </Text>

          <SkeletonList amount={3}>
            <PostItemHorizontalSkeleton />
          </SkeletonList>
        </div>
      </div>
    </Container>
  );
}
