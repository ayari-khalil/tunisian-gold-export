import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, areaClass, fieldClass } from "./fields";
import { FormSuccess } from "./FormSuccess";
import { businessTypes } from "@/data/buyers";
import { products } from "@/data/products";
import { submitSampleRequest } from "@/services/inquiries";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  company: z.string().trim().min(1, "Company is required").max(120),
  email: z.string().trim().email("Enter a valid business email").max(255),
  country: z.string().trim().min(1, "Country is required").max(80),
  businessType: z.string().min(1, "Select a business type"),
  productInterest: z.string().min(1, "Select a product"),
  estimatedVolume: z.string().trim().max(120).optional(),
  message: z.string().trim().max(1000).optional(),
});

type Values = z.infer<typeof schema>;

export function SampleRequestForm() {
  const [reference, setReference] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { businessType: "", productInterest: "" },
  });

  const onSubmit = async (values: Values) => {
    setServerError(null);
    try {
      const res = await submitSampleRequest(values);
      setReference(res.reference);
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  };

  if (reference) {
    return (
      <FormSuccess
        title="Sample request received."
        description="Thank you. Our export team will review your request and come back to you with sample availability and shipping details."
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
      <Field label="First name" htmlFor="firstName" required error={errors.firstName?.message}>
        <input id="firstName" className={fieldClass} {...register("firstName")} />
      </Field>
      <Field label="Last name" htmlFor="lastName" required error={errors.lastName?.message}>
        <input id="lastName" className={fieldClass} {...register("lastName")} />
      </Field>
      <Field label="Company" htmlFor="company" required error={errors.company?.message}>
        <input id="company" className={fieldClass} {...register("company")} />
      </Field>
      <Field label="Business email" htmlFor="email" required error={errors.email?.message}>
        <input id="email" type="email" className={fieldClass} {...register("email")} />
      </Field>
      <Field label="Country" htmlFor="country" required error={errors.country?.message}>
        <input id="country" className={fieldClass} {...register("country")} />
      </Field>
      <Field label="Business type" htmlFor="businessType" required error={errors.businessType?.message}>
        <select id="businessType" className={fieldClass} {...register("businessType")}>
          <option value="">Select…</option>
          {businessTypes.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </Field>
      <Field
        label="Product interest"
        htmlFor="productInterest"
        required
        error={errors.productInterest?.message}
      >
        <select id="productInterest" className={fieldClass} {...register("productInterest")}>
          <option value="">Select…</option>
          {products.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Estimated volume" htmlFor="estimatedVolume" error={errors.estimatedVolume?.message}>
        <input
          id="estimatedVolume"
          className={fieldClass}
          placeholder="e.g. 1 pallet / 1 container per quarter"
          {...register("estimatedVolume")}
        />
      </Field>
      <Field label="Message" htmlFor="message" className="sm:col-span-2" error={errors.message?.message}>
        <textarea id="message" className={areaClass} {...register("message")} />
      </Field>

      {serverError ? (
        <p role="alert" className="sm:col-span-2 border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
          {serverError}
        </p>
      ) : null}

      <div className="sm:col-span-2">
        <Button type="submit" variant="olive" size="xl" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : null}
          {isSubmitting ? "Sending…" : "Request a Sample"}
        </Button>
        <p className="mt-4 text-xs text-muted-foreground">
          No payment is required to request a sample.
        </p>
      </div>
    </form>
  );
}
