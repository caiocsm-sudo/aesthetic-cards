import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../partials/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

// can be used for any page
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
