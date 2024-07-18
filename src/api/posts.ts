import { cache } from "react";

import i18nConfig from "@/i18nConfig";
import { getLanguageCodeFromPath } from "@/utils";

export type Tag = {
  name: string;
  label: string;
};

export type PostData = {
  id: number;
  title: string;
  content: string;
  author: string;
  image: string;
  tags: Tag[];
  updatedAt: string;
};

export type PostType = {
  data: PostData[];
  total: number;
  page: number;
  limit: number;
};

type GetPostsProps = { limit?: number; page?: number };

export const getPosts = async ({ limit, page }: GetPostsProps) => {
  return fetch(`${process.env.API_URL}/posts?limit=${limit}&page=${page}`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      "x-custom-lang": getLanguageCodeFromPath() || i18nConfig.defaultLocale,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data as PostType;
    })
    .catch((e) => {
      console.log("Get Posts Error", e);
      return null;
    });
};

export const getPost = cache(async (postId: string | number) => {
  return fetch(`${process.env.API_URL}/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      "x-custom-lang": getLanguageCodeFromPath() || i18nConfig.defaultLocale,
    },
  })
    .then((res) => res.json())
    .then((data) => data as PostData)
    .catch((e) => {
      console.log("Get post id Error", e);
      return null;
    });
});
