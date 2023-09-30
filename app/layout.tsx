"use client";
import { Roboto } from "next/font/google";
import Provider from "./store/provider";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./globals.css";

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
