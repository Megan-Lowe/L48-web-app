import Text from "#components/base/Text";

export default function SectionLabelPartial({
  label,
}: SectionLabelPartialProps) {
  return (
    <div className="w-full h-[108px] flex justify-center items-center relative">
      <img
        className="w-full h-full absolute object-cover z-[-1]"
        src="/images/span.jpeg"
        alt="bg image"
      />

      <Text variant="heading2" color="black">
        {label}
      </Text>
    </div>
  );
}

export type SectionLabelPartialProps = {
  label: string;
};
