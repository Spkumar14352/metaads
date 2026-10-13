/**
 * Centralized checkout configuration for PRODXSTORE AI Meta Ads Launch Kit.
 * Default fallback points directly to the verified product payment page on SuperProfile.
 */
export const DEFAULT_SUPERPROFILE_CHECKOUT_URL =
  "https://superprofile.bio/vp/6a88e1c950d9dd0013f50779";

export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim() ||
  DEFAULT_SUPERPROFILE_CHECKOUT_URL;

export function getCheckoutUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();
  if (envUrl && envUrl !== "#checkout" && !envUrl.includes("your-checkout-url.example")) {
    return envUrl;
  }
  return DEFAULT_SUPERPROFILE_CHECKOUT_URL;
}
