import React from "react";

import { PostData } from "@/api/posts";
import { Section } from "@/components";
import { PostItemHorizontal } from "@/components/PostItem/PostItemHorizontal";

type PostsSectionProps = {
  data?: PostData[];
};

export function PostsSection({ data }: PostsSectionProps) {
  return (
    <Section vertical>
      {data?.map(({ ...rest }) => {
        return <PostItemHorizontal key={rest.id} {...rest} />;
      })}
    </Section>
  );
}
