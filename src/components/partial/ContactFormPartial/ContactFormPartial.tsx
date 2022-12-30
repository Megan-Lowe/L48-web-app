import Text from "#components/base/Text";
import { useForm } from "react-hook-form";
import ContactInputPartial from "../ContactInputPartial";

const onSubmit = async (values: ContactFormValues) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const data = await res.json();

  console.log(data);
};

export default function ContactFormPartial() {
  const { register, handleSubmit } = useForm<ContactFormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup label="Name">
        <ContactInputPartial
          className="flex-grow"
          label="First Name"
          {...register("first_name", { required: true })}
        />
        <ContactInputPartial
          className="flex-grow"
          label="Last Name"
          {...register("last_name", { required: true })}
        />
      </FormGroup>

      <FormGroup label="Email">
        <ContactInputPartial
          className="flex-grow"
          {...register("email", { required: true })}
        />
      </FormGroup>

      <FormGroup label="Message">
        <ContactInputPartial
          className="flex-grow"
          inputClassName="min-h-[100px]"
          as="textarea"
          {...register("message", { required: true })}
        />
      </FormGroup>

      <div className="flex justify-center mt-6">
        <button type="submit">
          <Text transform="uppercase" variant="body1" as="span">
            Send
          </Text>
        </button>
      </div>
    </form>
  );
}

const FormGroup = ({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) => (
  <>
    <Text className="block first:mt-0 mt-[29px]" variant="heading3">
      {label} *
    </Text>

    <div className="flex flex-row gap-4">{children}</div>
  </>
);

export type ContactFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
};
