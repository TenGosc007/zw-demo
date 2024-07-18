import { Metadata } from "next";
import React from "react";

import { getPost } from "@/api/posts";

type PostPageProps = {
  params: { id: number; locale: string };
};

export async function generateMetadata({
  params: { id, locale },
}: PostPageProps): Promise<Metadata> {
  const post = await getPost(id);

  return {
    title: "ZaplanujWypad | " + post?.title,
    openGraph: {
      images: post?.image || "",
      type: "website",
      title: "Zaplanuj Wypad",
      siteName: "zaplanujwypad.pl",
      locale,
    },
    description: post?.content.substring(0, 60),
  };
}

export default function Laytout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
