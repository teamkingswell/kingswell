import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kingswell",
  description: "Your very own partner for 360° Corporate Gifting.",
  icons: {
    icon: "/KW_Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
