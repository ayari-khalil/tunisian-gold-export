/**
 * Inquiry submission layer.
 *
 * Currently a local stub so the frontend is fully navigable. Replace the body
 * of each function with a real API/backend call — the component contracts and
 * types stay the same.
 */

export interface SampleRequestPayload {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  country: string;
  businessType: string;
  productInterest: string;
  estimatedVolume?: string;
  message?: string;
}

export interface QuoteRequestPayload {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  country: string;
  product: string;
  packaging: string;
  quantity: string;
  incoterm: string;
  destinationPort?: string;
  message?: string;
}

export interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  subject: string;
  message: string;
}

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function submit<T>(kind: string, payload: T) {
  await delay(900);
  if (typeof window !== "undefined" && window.location.search.includes("forceError=1")) {
    throw new Error(`Unable to submit ${kind} right now.`);
  }
  return { ok: true as const, reference: `${kind.toUpperCase()}-${Date.now().toString(36)}` };
}

export const submitSampleRequest = (p: SampleRequestPayload) => submit("sample", p);
export const submitQuoteRequest = (p: QuoteRequestPayload) => submit("quote", p);
export const submitContact = (p: ContactPayload) => submit("contact", p);
