import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORBIT — Find your people",
  description: "A creative social space to discover communities and build your universe.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
