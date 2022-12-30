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
      <As ref={ref} className={clsx("h-[42px] rounded-sm", inputClassName)} {...props} />

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
