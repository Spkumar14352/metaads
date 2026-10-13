"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || "";

export default function MetaPixel() {
  useEffect(() => {
    if (!PIXEL_ID) return;

    const handleClick = (event: MouseEvent) => {
      try {
        const target = event.target as HTMLElement | null;
        const cta = target?.closest?.('a[data-checkout-cta="true"]') as HTMLAnchorElement | null;
        if (!cta) return;

        if (typeof window.fbq === "function") {
          window.fbq("track", "InitiateCheckout", {
            content_name: "PRODXSTORE AI Meta Ads Launch Kit",
            content_category: "Digital Marketing Toolkit",
            value: 499,
            currency: "INR",
          });
        }
      } catch (err) {
        // Analytics failure must never block user checkout navigation
        console.warn("Meta Pixel InitiateCheckout error:", err);
      }
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!PIXEL_ID) {
    return null;
  }

  return (
    <>
      <Script
        id="meta-pixel-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID.replace(/[^a-zA-Z0-9_-]/g, "")}');
            fbq('track', 'PageView');
            fbq('track', 'ViewContent', {
              content_name: 'PRODXSTORE AI Meta Ads Launch Kit',
              content_category: 'Digital Marketing Toolkit',
              value: 499,
              currency: 'INR'
            });
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${encodeURIComponent(PIXEL_ID)}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
