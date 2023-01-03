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
      <FormGroup //label="Name">
      >
        <ContactInputPartial
          className="flex-grow"
          label="Name"
          placeholder="Name *"
          {...register("name", { required: true })}
        />
        <ContactInputPartial
          className="flex-grow"
          label="Phone Number"
          placeholder="Phone Number"
          {...register("phone_number", { required: false })}
        />
      </FormGroup>

      <FormGroup //label="Email" >
      >
        <ContactInputPartial
          className="flex-grow"
          placeholder="Email *"
          label="Email"
          {...register("email", { required: true })}
        />
      </FormGroup>
      <FormGroup //label="Subject" >
      >
        <ContactInputPartial
          className="flex-grow"
          placeholder="Subject"
          label="Subject"
          {...register("subject", { required: false })}
        />
      </FormGroup>

      <FormGroup>
        <ContactInputPartial
          className="flex-grow"
          inputClassName="min-h-[100px]"
          as="textarea"
          placeholder="Message"
          {...register("message", { required: false })}
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
    <div className="flex flex-row gap-4">{children}</div>
  </>
);

export type ContactFormValues = {
  first_name: string;
  phone_number: number;
  email: string;
  message: string;
};
