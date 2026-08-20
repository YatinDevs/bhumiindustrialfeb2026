// components/HashScrollHandler.jsx
"use client";

import { useEffect } from "react";

// Next.js App Router doesn't reliably scroll to an in-page anchor when
// navigating from a different route (e.g. Navbar's About dropdown links
// like /about#team clicked while on /contact). This scrolls to the hash
// target on mount and on same-page hash changes (client-side nav that
// only swaps the fragment, e.g. clicking another dropdown item while
// already on /about).
export default function HashScrollHandler() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const timeout = setTimeout(scrollToHash, 150);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return null;
}
