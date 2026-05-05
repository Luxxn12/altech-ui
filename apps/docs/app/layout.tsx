import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Altech UI",
  description: "Modern React component library for production-ready interfaces"
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
