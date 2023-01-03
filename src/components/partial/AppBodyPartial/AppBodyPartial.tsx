import Image from "next/image";
import Text from "#components/base/Text";
import Link from "next/link";

export default function AppBodyPartial() {
  return (
    <div className="relative columns-1 sm:columns-2">
      <img className="w-full" src="horizonprogram.jpeg" />
    </div>
  );
}
