import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Jisan | Brand & Marketing Specialist Portfolio",
  description: "Portfolio of Jisan, an exceptional marketer and brand strategist.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased text-dark-charcoal bg-grain">
        {children}
      </body>
    </html>
  );
}
