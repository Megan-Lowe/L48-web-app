import Text from "#components/base/Text";
import AppHeaderPartial from "#components/partial/AppHeaderPartial";

export default function Home() {
  return (
    <>
      <AppHeaderPartial />

      <Text variant="heading1" transform="uppercase">
        Who We Are
      </Text>

      <Text variant="heading1">What We Are</Text>

      <Text variant="heading1">Why We Are</Text>

      <Text variant="heading1">When We Are</Text>
    </>
  );
}
