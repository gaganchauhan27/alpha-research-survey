import React from "react";
import { Providers } from "@/store/providers";
import MyApp from "./app";
import "./global.css";

export const metadata = {
  title: "Alpha Research Survey",
  description: "Alpha Research Survey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <MyApp>{children}</MyApp>
        </Providers>
      </body>
    </html>
  );
}
