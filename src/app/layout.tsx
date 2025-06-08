import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./shared/components/header/page";
import Footer from "./shared/components/footer/page";
import { BookingProvider, BookingForm } from "./shared/components";
import "@ant-design/v5-patch-for-react-19";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KIA Dental - High Quality Dental Services",
  description:
    "KIA Dental provides high quality dental services including teeth whitening, dental implants, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <BookingProvider>
          <Header />
          {children}
          <Footer />
          <BookingForm />
        </BookingProvider>
      </body>
    </html>
  );
}
