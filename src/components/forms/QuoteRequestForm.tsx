import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, areaClass, fieldClass } from "./fields";
import { FormSuccess } from "./FormSuccess";
import { products } from "@/data/products";
import { packagingFormats } from "@/data/packaging";
import { incoterms } from "@/data/markets";
import { submitQuoteRequest } from "@/services/inquiries";

const schema = z.object({
  companyName: z.string().trim().min(1, "Company name is required").max(120),
  contactName: z.string().trim().min(1, "Contact name is required").max(120),
  email: z.string().trim().email("Enter a valid business email").max(255),
  phone: z.string().trim().max(40).optional(),
  country: z.string().trim().min(1, "Country is required").max(80),
  product: z.string().min(1, "Select a product"),
  packaging: z.string().min(1, "Select a packaging format"),
  quantity: z.string().trim().min(1, "Estimated quantity is required").max(120),
  incoterm: z.string().min(1, "Select an Incoterm"),
  destinationPort: z.string().trim().max(120).optional(),
  message: z.string().trim().max(1000).optional(),
});

type Values = z.infer<typeof schema>;

export function QuoteRequestForm() {
  const [reference, setReference] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { product: "", packaging: "", incoterm: "" },
  });

  const onSubmit = async (values: Values) => {
    setServerError(null);
    try {
      const res = await submitQuoteRequest(values);
      setReference(res.reference);
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  };

  if (reference) {
    return (
      <FormSuccess
        title="Quotation request received."
        description="Our team will review your requirements and contact you with the appropriate commercial information."
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
      <Field label="Company name" htmlFor="companyName" required error={errors.companyName?.message}>
        <input id="companyName" className={fieldClass} {...register("companyName")} />
      </Field>
      <Field label="Contact name" htmlFor="contactName" required error={errors.contactName?.message}>
        <input id="contactName" className={fieldClass} {...register("contactName")} />
      </Field>
      <Field label="Business email" htmlFor="qemail" required error={errors.email?.message}>
        <input id="qemail" type="email" className={fieldClass} {...register("email")} />
      </Field>
      <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
        <input id="phone" className={fieldClass} {...register("phone")} />
      </Field>
      <Field label="Country" htmlFor="qcountry" required error={errors.country?.message}>
        <input id="qcountry" className={fieldClass} {...register("country")} />
      </Field>
      <Field label="Product" htmlFor="product" required error={errors.product?.message}>
        <select id="product" className={fieldClass} {...register("product")}>
          <option value="">Select…</option>
          {products.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Packaging" htmlFor="packaging" required error={errors.packaging?.message}>
        <select id="packaging" className={fieldClass} {...register("packaging")}>
          <option value="">Select…</option>
          {packagingFormats.map((f) => (
            <option key={f.id} value={f.name}>
              {f.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Estimated quantity" htmlFor="quantity" required error={errors.quantity?.message}>
        <input
          id="quantity"
          className={fieldClass}
          placeholder="e.g. 2 pallets / 1 x 20' container"
          {...register("quantity")}
        />
      </Field>
      <Field label="Preferred Incoterm" htmlFor="incoterm" required error={errors.incoterm?.message}>
        <select id="incoterm" className={fieldClass} {...register("incoterm")}>
          <option value="">Select…</option>
          {incoterms.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Destination port" htmlFor="destinationPort" error={errors.destinationPort?.message}>
        <input id="destinationPort" className={fieldClass} {...register("destinationPort")} />
      </Field>
      <Field label="Message" htmlFor="qmessage" className="sm:col-span-2" error={errors.message?.message}>
        <textarea id="qmessage" className={areaClass} {...register("message")} />
      </Field>

      {serverError ? (
        <p role="alert" className="sm:col-span-2 border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
          {serverError}
        </p>
      ) : null}

      <div className="sm:col-span-2">
        <Button type="submit" variant="olive" size="xl" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : null}
          {isSubmitting ? "Sending…" : "Request a Quote"}
        </Button>
        <p className="mt-4 max-w-lg text-xs leading-relaxed text-muted-foreground">
          Our team will review your requirements and contact you with the appropriate commercial
          information.
        </p>
      </div>
    </form>
  );
}
