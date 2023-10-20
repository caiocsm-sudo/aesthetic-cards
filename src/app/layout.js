import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Aesthetic Cards",
  description: "A Next project for testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
