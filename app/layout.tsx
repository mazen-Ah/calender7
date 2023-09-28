"use client";
import "./globals.css";
import { Roboto } from "next/font/google";
import Provider from "./store/provider";
import { MantineProvider } from "@mantine/core";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={roboto.className} suppressHydrationWarning={true}>
        <Provider>
          <MantineProvider>{children}</MantineProvider>
        </Provider>
      </body>
    </html>
  );
}
