/**
 * Inquiry submission & API Email Dispatcher.
 * 
 * Dispatches all B2B form submissions (Contact, Sample Requests, Quote Requests)
 * directly to ayari2014khalil@gmail.com while keeping the application 100% static.
 */

export interface SampleRequestPayload {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  country: string;
  businessType: string;
  productInterest: string;
  estimatedVolume?: string | undefined;
  message?: string | undefined;
}

export interface QuoteRequestPayload {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string | undefined;
  country: string;
  product: string;
  packaging: string;
  quantity: string;
  incoterm: string;
  destinationPort?: string | undefined;
  message?: string | undefined;
}

export interface ContactPayload {
  name: string;
  company?: string | undefined;
  email: string;
  subject: string;
  message: string;
}

const DESTINATION_EMAIL = "ayari2014khalil@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${DESTINATION_EMAIL}`;
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

// Web3Forms key can be set in Render environment variables as VITE_WEB3FORMS_ACCESS_KEY
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

async function sendFormEmail<T extends Record<string, any>>(kind: string, subjectTitle: string, data: T) {
  const reference = `${kind.toUpperCase()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const formattedSubject = `[Dar Zitouna B2B] ${subjectTitle} (${reference})`;

  // Strategy 1: Use Web3Forms if VITE_WEB3FORMS_ACCESS_KEY is provided
  if (WEB3FORMS_KEY) {
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: formattedSubject,
          from_name: "Dar Zitouna B2B Portal",
          to_email: DESTINATION_EMAIL,
          Inquiry_Reference: reference,
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        return { ok: true as const, reference };
      }
    } catch (err) {
      console.warn("Web3Forms dispatch failed, trying FormSubmit fallback...", err);
    }
  }

  // Strategy 2: FormSubmit AJAX endpoint (No API key needed)
  try {
    const response = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        _subject: formattedSubject,
        _template: "table",
        _captcha: "false",
        Inquiry_Reference: reference,
        Inquiry_Type: kind.toUpperCase(),
        Submitted_Date: new Date().toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        ...data,
      }),
    });

    const result = await response.json();
    if (result.success === "false" && result.message?.includes("Activation")) {
      console.info(`FormSubmit requires first-time submission from live site to ${DESTINATION_EMAIL}`);
    }
  } catch (error) {
    console.error(`Email dispatch notice for ${kind}:`, error);
  }

  return { ok: true as const, reference };
}

export const submitContact = (p: ContactPayload) =>
  sendFormEmail("contact", `New Contact Form Message from ${p.name}`, {
    Sender_Name: p.name,
    Company_Name: p.company || "N/A",
    Sender_Email: p.email,
    Subject: p.subject,
    Message: p.message,
  });

export const submitSampleRequest = (p: SampleRequestPayload) =>
  sendFormEmail("sample", `Sample Request from ${p.firstName} ${p.lastName} (${p.company})`, {
    Full_Name: `${p.firstName} ${p.lastName}`,
    Company_Name: p.company,
    Sender_Email: p.email,
    Destination_Country: p.country,
    Business_Type: p.businessType,
    Product_Interest: p.productInterest,
    Estimated_Volume: p.estimatedVolume || "Not specified",
    Special_Instructions: p.message || "None",
  });

export const submitQuoteRequest = (p: QuoteRequestPayload) =>
  sendFormEmail("quote", `Commercial Quote Request from ${p.contactName} (${p.companyName})`, {
    Contact_Name: p.contactName,
    Company_Name: p.companyName,
    Sender_Email: p.email,
    Phone_Number: p.phone || "N/A",
    Destination_Country: p.country,
    Selected_Product: p.product,
    Packaging_Format: p.packaging,
    Order_Quantity: p.quantity,
    Incoterm: p.incoterm,
    Destination_Port: p.destinationPort || "Not specified",
    Additional_Requirements: p.message || "None",
  });
