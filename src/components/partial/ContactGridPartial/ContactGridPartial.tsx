import Text from "#components/base/Text";

export default function ContactGridPartial() {
  return (
    <>
      <div
        className="mx-auto bg-black p-5 basis-1/2"
        style={{ gridArea: "Contact" }}
      >
        <Text colour="white" className="text-3xl font-sans text-center">
          CONTACT LATITUDE 48 <br /> PADDLING CLUB
          <br />
        </Text>
        <Text className="text-center text-sm">
          Victoria, BC, Canada
          <br /> <br />
          latitude48paddling@gmail.com
        </Text>
      </div>
      <div
        className="mx-auto bg-black p-5 basis-1/2"
        style={{ gridArea: "Input" }}
      >
        <Text colour="white" text="2xl">
          CONTACT LATITUDE 48 <br /> PADDLING CLUB
        </Text>
        <Text>
          Victoria, BC, Canada
          <br />
          latitude48paddling@gmail.com
        </Text>
      </div>
    </>
  );
}
