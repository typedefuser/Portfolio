import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Ubuntu_Mono } from "next/font/google";

import "./globals.css";



const inter = Inter({ subsets: ["latin"] });
const UbuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "typdefuser",
  description: "My portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body className={`${UbuntuMono.className} ${inter.className} text-green-400`}>{children}</body>
    </html>
  );
}
