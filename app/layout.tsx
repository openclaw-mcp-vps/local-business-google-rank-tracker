import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Rank Tracker — Track Google Rankings for Local Businesses",
  description: "Monitor your local business rankings for specific keywords in Google Maps and search results by location. Historical trend analysis included."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a838847b-6d4b-436b-9ccd-d2f3a479afc0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
