export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionData extends ContactFormData {
  recaptchaToken: string;
}

export async function submitContactForm(
  formData: ContactSubmissionData,
  sourceSite?: string,
) {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const site = sourceSite || siteUrl;

  if (!apiUrl || !site || !apiKey) {
    throw new Error("Contact API configuration is missing.");
  }

  const baseUrl = apiUrl.replace(/\/client\/?$/, "");
  const contactUrl = `${baseUrl}/contact?site=${encodeURIComponent(site)}`;

  const response = await fetch(contactUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify(formData),
  });

  let result;

  try {
    result = await response.json();
  } catch {
    result = null;
  }

  if (!response.ok) {
    if ([400, 403, 503].includes(response.status)) {
      throw new Error("We could not verify this submission. Please try again.");
    }

    throw new Error(result?.message || `Contact API error ${response.status}`);
  }

  return result;
}
