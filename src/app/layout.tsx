import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/Header/Header";
import { ThemeProvider } from "@/components/providers/theme-provider";

// const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: "../../Fonts/MADEINFINITY-Regular.woff" });
// const myFontOutline = localFont({
//   src: "../../Fonts/MADEINFINITYOutline-Regular.woff",
// });

export const metadata: Metadata = {
  title: "Himanshu Portfolio",
  description: "Himanshu Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
