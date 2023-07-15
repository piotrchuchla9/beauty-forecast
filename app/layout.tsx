import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import favico from "./favicon.ico";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beauty Forecast",
};
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          className="link-icon"
          rel="icon"
          type="image/x-icon"
          href={favico.src}
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
