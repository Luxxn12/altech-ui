import type { Metadata } from "next";
import { cache, type PropsWithChildren } from "react";
import { Manrope, Space_Grotesk } from "next/font/google";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { DocsSearch } from "@/components/docs-search";

import "./globals.css";

const getCachedPageMap = cache(async () => getPageMap());

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: {
    default: "Altech UI",
    template: "%s | Altech UI"
  },
  description:
    "Altech UI is a modern React + Tailwind component library with TypeScript, accessibility, and premium interactions."
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const pageMap = await getCachedPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <Layout
          pageMap={pageMap}
          search={<DocsSearch pageMap={pageMap} />}
          docsRepositoryBase="https://github.com/Luxxn12/altech-ui/tree/main/apps/docs"
          navbar={
            <Navbar
              logo={
                <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                  Altech UI
                </span>
              }
              projectLink="https://github.com/Luxxn12/altech-ui"
            />
          }
          footer={
            <Footer>
              MIT License © {new Date().getFullYear()} Altech UI
            </Footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
