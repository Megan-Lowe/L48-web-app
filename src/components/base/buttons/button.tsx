export { default } from "./button";
import clsx from "clsx";

const Button: ButtonComponent = <T extends React.ElementType = "button">({
  children,
  className,
  inverse = false,
  as,
  ...props
}: ButtonProps<T>) => {
  const As = as ?? "button";

  return (
    <As
      className={clsx(
        "border-2 rounded-full transition-colors px-3 lg:px-7 py-1 lg:py-3 inline-block",
        {
          "border-[#C2C8CC] hover:bg-[#C2C8CC] text-[#C2C8CC] hover:text-black":
            !inverse,
          "border-black hover:bg-black text-black hover:text-[#C2C8CC]":
            inverse,
        },
        className
      )}
      {...props}
    >
      {children}
    </As>
  );
};

export default Button;

export type ButtonProps<T extends React.ElementType> =
  PolymorphicComponentProps<
    T,
    {
      inverse?: boolean;
    }
  >;

type ButtonComponent = <T extends React.ElementType = "button">(
  props: ButtonProps<T>
) => React.ReactElement | null;
