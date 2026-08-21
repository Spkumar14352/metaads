# PRODXSTORE AI Meta Ads Launch Kit — Vercel

Production-ready Next.js landing page for the PRODXSTORE AI Meta Ads Launch Kit.

## What is included

- Responsive desktop and mobile landing page
- Product bundle and campaign-tracker images
- Branded Open Graph/social-sharing image
- Expandable FAQ section
- Mobile sticky purchase bar
- Environment-variable configuration for checkout and legal links
- Vercel-compatible Next.js project structure

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Configure before deployment

Create these Environment Variables in **Vercel → Project → Settings → Environment Variables**:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Final public website URL, such as `https://metaads.prodxstore.com` |
| `NEXT_PUBLIC_CHECKOUT_URL` | Real Razorpay, SuperProfile, or other checkout URL |
| `NEXT_PUBLIC_PRIVACY_URL` | Published Privacy Policy URL |
| `NEXT_PUBLIC_TERMS_URL` | Published Terms and Conditions URL |
| `NEXT_PUBLIC_REFUND_URL` | Published Refund Policy URL |
| `NEXT_PUBLIC_SUPPORT_URL` | Support page URL or `mailto:` address |
| `NEXT_PUBLIC_META_PIXEL_ID` | Reserved for the Meta Pixel integration phase |

Do not leave the checkout and policy URLs as placeholders before running paid ads.

## Deploy using GitHub and Vercel

1. Create a new empty GitHub repository.
2. Upload everything inside this project folder to the repository root.
3. In Vercel, choose **Add New → Project**.
4. Import the GitHub repository.
5. Keep **Framework Preset: Next.js**.
6. Add the environment variables listed above.
7. Select **Deploy**.
8. In **Project → Settings → Domains**, add `metaads.prodxstore.com`.
9. Add the exact CNAME record displayed by Vercel to the DNS provider managing `prodxstore.com`.
10. Wait for Vercel to verify the domain and issue HTTPS.

## Final launch checklist

- Connect every purchase button to the real checkout.
- Confirm the final price shown on the site and checkout.
- Publish Privacy, Terms, Refund, and Support pages.
- Test successful, failed, and cancelled payment paths.
- Test product delivery after successful payment.
- Add and verify Meta Pixel/CAPI before paid campaigns.
- Test on mobile and desktop.
- Never use fabricated testimonials, false scarcity, or guaranteed-result claims.

## Important

This ZIP contains the landing-page source code and visual assets. It does not contain customer data, payment credentials, the downloadable product ZIP, or private API keys.
