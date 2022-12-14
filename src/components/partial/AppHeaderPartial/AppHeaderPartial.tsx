import Image from "next/image";
import Text from "#components/base/Text";
import Link from "next/link";

export default function AppHeaderPartial() {
  return (
    <header className="flex items-center justify-between px-[100px] border-red-800 border-solid border">
      <div className="flex items-center flex-grow">
        <Image
          src="/images/l48logo.png"
          height={110}
          width={202}
          alt="site header logo"
          className="pb-[12px]"
        />
      </div>
      <div className="flex items-center">
        <nav className="flex items-center justify-end">
          <li>
            <Text as={Link} href="#">
              Programs
            </Text>
          </li>
          <li>
            <Text>
              <a href="#">Coaches</a>
            </Text>
          </li>
          <li>
            <Text>
              <a href="#">Events</a>
            </Text>
          </li>
          <li>
            <Text>
              <a href="#">Gallery</a>
            </Text>
          </li>
          <li>
            <Text>
              <a href="#">Small Boat Booking</a>
            </Text>
          </li>
          <li>
            <Text>
              <a href="#">Member Page</a>
            </Text>
          </li>
        </nav>
      </div>
      <div className="flex items-center">
        <Image
          src="/images/intagramlogo.jpg"
          height={20}
          width={20}
          alt="instagram logo"
        />
        <Image
          src="/images/favebooklogo.jpg"
          height={20}
          width={20}
          alt="facebooklogo"
        />
      </div>
      <div className="flex items-center border-red-800 border-solid border">
        <span>
          <Text>Log In</Text>
        </span>

        <span className="h-[50px] w-[50px]">
          <Image
            src="/images/person.svg"
            height={50}
            width={50}
            alt="person icon"
            className="bg-l48green rounded-full"
          />
        </span>
      </div>
    </header>
  );
}
