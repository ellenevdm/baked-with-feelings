export const BUSINESS_EMAIL = "bakedwithfeelings@gmail.com";
export const BUSINESS_WHATSAPP_DISPLAY = "066 246 5655";
export const BUSINESS_WHATSAPP_NUMBER = "27662465655";
export const BUSINESS_LOCATION = "Brackenfell, Cape Town";

export function buildMailtoLink(subject: string, body = "") {
  const query = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${BUSINESS_EMAIL}?${query.toString()}`;
}

export function buildWhatsappLink(message = "") {
  const query = message
    ? `?text=${encodeURIComponent(message)}`
    : "";

  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}${query}`;
}
