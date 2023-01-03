import clsx from "clsx";

export default function Button({
  type = "button",
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        "px-3 py-2 rounded-md",
        {
          "bg-l48green text-black": variant === "primary",
          "bg-white text-black": variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};
