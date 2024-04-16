import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saqib's Portfolio",
  description: "Welcome to Saqib's portfolio, where creativity meets functionality. Dive into a collection of innovative web projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/Favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Favicon/favicon-16x16.png" />
        <link rel="manifest" href="/Favicon/site.webmanifest" />
        <meta name="google-site-verification" content="PRC5k_u6e51a9it1DW_BNyphZL4K8QoDgF24xzFBxjE" />
        <meta property="og:title" content="Saqib's Portfolio" />
        <meta
          property="og:description"
          content="Passionate web developer and computer science student showcasing a collection of innovative projects and experiences."
        />
        <meta property="og:image" content="/avatar.png" />
        <meta property="og:url" content="https://saqibdev.netlify.app/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
