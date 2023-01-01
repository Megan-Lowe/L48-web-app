import Text from "#components/base/Text";
import clsx from "clsx";
import { forwardRef } from "react";

function ContactInputPartial(
  { className, inputClassName, label, as, ...props }: ContactInputPartialProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const As = as ?? "input";

  return (
    <div className={clsx(className, "flex flex-col")}>
      <As
        ref={ref}
        className={clsx(
          "h-[42px] bg-black border-[1px] border-transparent border-b-white hover:border-white focus:border-white outline-none text-white",
          inputClassName
        )}
        {...props}
      />

      {label && (
        <Text as="label" variant="body3" className="mt-2">
          {label}
        </Text>
      )}
    </div>
  );
}

export default forwardRef(ContactInputPartial);

export type ContactInputPartialProps = React.ComponentProps<"input"> & {
  label?: string;
  inputClassName?: string;
  as?: React.ElementType;
};
