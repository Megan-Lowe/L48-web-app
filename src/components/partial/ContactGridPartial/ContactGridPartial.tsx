import Text from "#components/base/Text";
import Link from "next/link";
import Image from "next/image";
import ContactFormPartial from "../ContactFormPartial";

export default function ContactGridPartial() {
  return (
    <>
      <div
        className="mx-auto bg-black p-5 basis-1/2 text-center"
        style={{ gridArea: "Contact" }}
      >
        <Text colour="white" className="text-3xl font-sans">
          CONTACT LATITUDE 48 <br /> PADDLING CLUB
          <br />
          <br />
        </Text>
        <Text className="text-center text-sm">
          Victoria, BC, Canada
          <br /> <br />
          latitude48paddling@gmail.com
        </Text>
        <br />
        <br />
        <div className="flex px-5 justify-center">
          <Link
            href="https://www.facebook.com/Latitude-48-Paddling-Cold-Water-Ohana-641255982653985/"
            target="_blank"
          >
            <Image
              src="/images/facebook.png"
              height={30}
              width={30}
              alt="facebooklogo"
            />
          </Link>
          <Link
            href="https://www.instagram.com/latitude48paddlingclub/"
            target="_blank"
          >
            <Image
              src="/images/instagram.png"
              height={30}
              width={30}
              alt="instagram logo"
            />
          </Link>
        </div>
      </div>
      <div
        className="mx-auto bg-black p-5 basis-1/2"
        style={{ gridArea: "Input" }}
      >
        <ContactFormPartial />
      </div>
    </>
  );
}
