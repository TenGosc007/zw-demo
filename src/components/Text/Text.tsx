import cx from "classnames";
import React from "react";

import styles from "./Text.module.scss";

type TextHeadingType = {
  type: "heading";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

type TextTextType = {
  type?: "text";
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

type TextType = (TextTextType | TextHeadingType) & {
  children?: React.ReactNode;
  weight?: "thin" | "regular" | "medium" | "semiBold" | "bold";
  size?: "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "tag"
    | "button"
    | "error"
    | "success";
};

export function Text({ children, ...props }: TextType) {
  if (props.type === "heading") {
    const { as, weight, size, className, color } = props;

    switch (as) {
      case "h1":
        return (
          <h1
            {...props}
            className={cx(
              className,
              styles[`w-${weight || "semiBold"}`],
              styles[`h-${size || "xl"}`],
              styles[`c-${color || "primary"}`]
            )}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            {...props}
            className={cx(
              className,
              styles[`w-${weight || "semiBold"}`],
              styles[`h-${size || "xl"}`],
              styles[`c-${color || "primary"}`]
            )}
          >
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3
            {...props}
            className={cx(
              className,
              styles[`w-${weight || "semiBold"}`],
              styles[`h-${size || "lg"}`],
              styles[`c-${color || "primary"}`]
            )}
          >
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4
            {...props}
            className={cx(
              className,
              styles[`w-${weight || "semiBold"}`],
              styles[`h-${size || "xs"}`],
              styles[`c-${color || "primary"}`]
            )}
          >
            {children}
          </h4>
        );
      case "h5":
        return <h5 {...props}>{children}</h5>;
      case "h6":
        return <h6 {...props}>{children}</h6>;

      default:
        return (
          <h3
            {...props}
            className={cx(
              className,
              styles[`w-${weight || "semiBold"}`],
              styles[`h-${size || "lg"}`],
              styles[`c-${color || "primary"}`]
            )}
          >
            {children}
          </h3>
        );
    }
  }

  return (
    <p
      {...props}
      className={cx(
        props.className,
        styles[`w-${props.weight || "regular"}`],
        styles[`t-${props.size || "md"}`],
        styles[`c-${props.color || "secondary"}`]
      )}
    >
      {children}
    </p>
  );
}
