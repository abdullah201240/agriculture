import type { Metadata } from "next";
import UserNavbar from "@/components/UserNavbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "AgroMind Insights AI",
  description: "AgroMind Insights AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <UserNavbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
