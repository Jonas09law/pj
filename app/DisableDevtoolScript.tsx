"use client";

import Script from "next/script";

export function DisableDevtoolScript() {
  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/disable-devtool"
      strategy="beforeInteractive"
    />
  );
}
