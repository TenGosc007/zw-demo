import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { CSSProperties } from "react";

type BackgroundImgProps = {
  img: (string | StaticImport) & { src?: string };
  style?: CSSProperties | undefined;
};

export function BackgroundImg({ img, style }: BackgroundImgProps) {
  // const ext =
  //   (typeof img?.src === "string" && img?.src.split(".").pop()) || null;
  // const placeholder: PlaceholderValue = ext === "svg" ? "empty" : "blur";

  return (
    <Image
      alt=""
      src={img}
      // placeholder={placeholder}
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
        ...style,
      }}
    />
  );
}
