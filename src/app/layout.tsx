import "~/styles/globals.css";

import {  Work_Sans, Anybody } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const anybody = Anybody({
  subsets: ["latin"],
  variable: "--font-anybody",
});

export const metadata = {
  title: "Dujota Studios",
  description: "We do custom software solutions and consulting",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-anybody ${anybody.variable} font-sans ${workSans.variable}`}>{children}</body>
    </html>
  );
}
