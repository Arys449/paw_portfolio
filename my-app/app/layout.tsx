import type { Metadata } from "next";
import { Roboto_Mono  } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Paw",
  description: "Paw portfolio by Dmytro Poluektov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable}  font-mono`}
      >
        <div className="flex flex-col h-screen">
      <Header/>
        <main className="flex-1 flex ">
        {children}
        </main>
      <Footer/>
        </div>
      </body>
    </html>
  );
}
