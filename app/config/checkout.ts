/**
 * Centralized checkout configuration for PRODXSTORE AI Meta Ads Launch Kit.
 *
 * Buy buttons go to the shared ProdXStore checkout (pay.prodxstore.com, Razorpay).
 * The price (₹499) is set on the product in hq.prodxstore.com/store. After a verified
 * payment the checkout redirects the buyer to /thank-you on this site.
 * NEXT_PUBLIC_CHECKOUT_URL can still override the URL from Vercel if ever needed.
 */
export const DEFAULT_CHECKOUT_URL =
  "https://pay.prodxstore.com/checkout/meta-ads-launch-kit";

/** Previous SuperProfile checkout, kept for a one-line rollback. */
export const SUPERPROFILE_CHECKOUT_URL =
  "https://superprofile.bio/vp/6a88e1c950d9dd0013f50779";

/** Google Drive ZIP (v1.1, November 2026) shown on /thank-you after payment. */
export const DOWNLOAD_URL =
  "https://drive.google.com/file/d/13bIvhqmiNFX2Q7Esb0XPAbL2WiYGEhqG/view?usp=sharing";

export function getCheckoutUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();
  if (envUrl && envUrl !== "#checkout" && !envUrl.includes("your-checkout-url.example")) {
    return envUrl;
  }
  return DEFAULT_CHECKOUT_URL;
}

export const CHECKOUT_URL = getCheckoutUrl();
