import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Hyperloggd Next",
  description: "A Next project for testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
