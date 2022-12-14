import React, { CSSProperties, useMemo } from "react";
import clsx from "clsx";

/**
 * The Text base component is used to present text content with specific,
 * design-defined typographic styles and scales.
 *
 * By default, it will render as an inline `<span>` element, though this can
 * be overridden by providing a valid elementType via the `as` prop. (such as h1 or h2)
 *
 * Text accepts a `variant` prop, which may be used as a shorthand for
 * rendering text with commonly used combined sets of styles (eg. font-sizes,
 * weights, families, text-transforms, etc) for different text scales (eg.
 * for various heading levels or body copy types).
 *
 * Additionally, the `transform` prop may be used to apply text-transforms
 * to the text content.
 */

const Text: TextComponent = <T extends React.ElementType = "span">({
  as: asProp,
  children,
  variant = "body1",
  transform,
  color,
  className,
}: TextProps<T>) => {
  const As = getAsComponent(asProp, variant);

  // This is a memoized value that will only be recalculated if the
  // `children` or `transform` props change.
  // It is used capitalize the text content if the `transform` prop is set to "capitalize"
  // by using a regex to replace the first letter of each word with an uppercase version.
  const content = useMemo(() => {
    if (typeof children === "string" && transform === "capitalize") {
      return children.replace(/\b\w/g, (l) => l.toUpperCase());
    }

    return children;
  }, [children, transform]);

  return (
    <As
      style={{ color }}
      className={clsx(className, {
        uppercase: transform === "uppercase",
        lowercase: transform === "lowercase",

        "text-l48green": variant.includes("heading"),

        "text-[40px] font-bold": variant === "heading1",
        "text-[24px] font-bold": variant === "heading2",
        "text-white text-[15px]": variant === "body1",
        "text-[14px]": variant === "body2",
      })}
    >
      {content}
    </As>
  );
};

// This is a helper function that returns the correct element type
// based on the `as` prop and the `variant` prop.
// it defaults to `span` if neither are provided.
const getAsComponent = (asProp?: React.ElementType, variant?: TextVariants) => {
  const variantToElementTypeOverrideMapping = {
    heading1: "h1",
    heading2: "h2",
  };

  return (
    asProp ??
    variantToElementTypeOverrideMapping[
      variant as keyof typeof variantToElementTypeOverrideMapping
    ] ??
    "span"
  );
};

export default Text;

type TextComponent = <T extends React.ElementType>(
  props: TextProps<T>
) => React.ReactElement;

export type TextProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
  variant?: TextVariants;
  transform?: "uppercase" | "lowercase" | "capitalize";
  className?: string;
  color?: CSSProperties["color"];
};

type TextVariants = "heading1" | "heading2" | "body1" | "body2";
