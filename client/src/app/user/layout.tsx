import type { Metadata } from "next";


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
        {children}
      </body>
    </html>
  );
}
