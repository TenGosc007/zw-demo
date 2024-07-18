import { Fragment, ReactNode } from "react";

import "./Skeleton.scss";

export function Skeleton({
  short,
  inline,
  fill,
}: {
  short?: boolean;
  inline?: boolean;
  fill?: boolean;
}) {
  return (
    <div
      className="skeleton"
      style={{
        height: fill ? "100%" : undefined,
        width: short ? "15em" : undefined,
        display: inline ? "inline-block" : undefined,
      }}
    />
  );
}

export function SkeletonButton() {
  return <div className="skeleton skeleton-btn" />;
}

export function SkeletonInput() {
  return <div className="skeleton skeleton-input" />;
}

export function SkeletonList({
  amount,
  children,
}: {
  amount: number;
  children: ReactNode;
}) {
  return (
    <>
      {Array.from({ length: amount }).map((_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </>
  );
}
