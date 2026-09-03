import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, areaClass, fieldClass } from "./fields";
import { FormSuccess } from "./FormSuccess";
import { submitContact } from "@/services/inquiries";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(160),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type Values = z.infer<typeof schema>;

export function ContactForm() {
  const [reference, setReference] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Values) => {
    setServerError(null);
    try {
      const res = await submitContact(values);
      setReference(res.reference);
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  };

  if (reference) {
    return (
      <FormSuccess
        title="Message sent."
        description="Thank you for reaching out. We will reply during our business hours in Tunisia."
        reference={reference}
        onReset={() => {
          reset();
          setReference(null);
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-6 sm:grid-cols-2">
      <Field label="Name" htmlFor="cname" required error={errors.name?.message}>
        <input id="cname" className={fieldClass} {...register("name")} />
      </Field>
      <Field label="Company" htmlFor="ccompany" error={errors.company?.message}>
        <input id="ccompany" className={fieldClass} {...register("company")} />
      </Field>
      <Field label="Email" htmlFor="cemail" required error={errors.email?.message}>
        <input id="cemail" type="email" className={fieldClass} {...register("email")} />
      </Field>
      <Field label="Subject" htmlFor="csubject" required error={errors.subject?.message}>
        <input id="csubject" className={fieldClass} {...register("subject")} />
      </Field>
      <Field label="Message" htmlFor="cmessage" required className="sm:col-span-2" error={errors.message?.message}>
        <textarea id="cmessage" className={areaClass} {...register("message")} />
      </Field>

      {serverError ? (
        <p role="alert" className="sm:col-span-2 border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
          {serverError}
        </p>
      ) : null}

      <div className="sm:col-span-2">
        <Button type="submit" variant="olive" size="xl" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : null}
          {isSubmitting ? "Sending…" : "Start a Business Conversation"}
        </Button>
      </div>
    </form>
  );
}
