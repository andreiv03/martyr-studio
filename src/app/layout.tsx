import type { Metadata } from "next";
import { Lato, Roboto_Slab } from "next/font/google";

import { LayoutProvider } from "@/contexts/layout-context";

import Header from "@/components/header";
import LoadingScreen from "@/components/loading-screen";
import Menu from "@/components/menu";
import "@/styles/globals.scss";

const lato = Lato({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

const robotoSlab = Roboto_Slab({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Martyr Studio — Premium marketing and branding services",
  description:
    "Martyr Studio — Premium marketing and branding services. Whether you need to clarify the future market position or to improve everyday experiences for your customers, we are here to serve.",
  openGraph: {
    title: "Martyr Studio — Premium marketing and branding services",
    description:
      "Martyr Studio — Premium marketing and branding services. Whether you need to clarify the future market position or to improve everyday experiences for your customers, we are here to serve.",
    url: "https://www.martyrstudio.com/",
    siteName: "Martyr Studio",
    images: ["https://www.martyrstudio.com/assets/thumbnail.jpg/"],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martyr Studio — Premium marketing and branding services",
    description:
      "Martyr Studio — Premium marketing and branding services. Whether you need to clarify the future market position or to improve everyday experiences for your customers, we are here to serve.",
    images: ["https://www.martyrstudio.com/assets/thumbnail.jpg/"],
    creator: "@martyrstudio_com",
    site: "@martyrstudio_com",
  },
  metadataBase: new URL("https://www.martyrstudio.com"),
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#f6f7f6",
  manifest: "/manifest.json",
  other: {
    "google-site-verification": "uQsStU4EMznKnzdQHRvfhl4ccGSf8pC3diMVQInX0T8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${robotoSlab.variable}`}>
        <LayoutProvider>
          <LoadingScreen />
          <Header />
          <Menu />
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
