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

        {/* <!-- for Microsoft apps--> */}
        <meta name="msapplication-TileImage" content="./avatar-2.png" />
        {/* <!-- for Facebook & Whatsapp -> */}
        {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta property="og:site_name" content="Saqib's Portfolio" />
        <meta property="og:title" content="Saqib Projects and Experience Preview" />
        <meta
          property="og:description"
          content="Welcome to Saqib's portfolio, where creativity meets functionality. Dive into a collection of innovative web projects."
        />
        {/* <!-- Image to display --> */}
        <meta property="og:image" content="./avatar-2.png" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        {/* <!-- Any size up to 300. Anything above 300px will not work in WhatsApp --> */}
        <meta property="og:image:width" content="170" />
        <meta property="og:image:height" content="199" />
        {/* <!-- Website to visit when clicked in Facebook or WhatsApp--> */}
        <meta property="og:url" content="https://saqibdev.netlify.app/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
