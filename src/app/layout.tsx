import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding AI Website - Personalized Wedding Websites with AI",
  description: "AI-powered wedding website generator with vows generator and personalized content creation. Create beautiful, unique wedding websites effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}