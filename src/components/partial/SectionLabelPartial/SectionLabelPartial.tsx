import Text from "#components/base/Text";

export default function SectionLabelPartial() {
  return (
    <div className="image-container">
      <img
        className="w-full basis-1/2"
        src="/images/span.jpeg"
        alt="a greyscale image of misty mountains"
      />
      <div className="image-text">Text Overlay</div>
    </div>
  );
}
