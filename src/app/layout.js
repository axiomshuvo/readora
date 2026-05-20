import { Cormorant_Garamond, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Readora - Your Digital Library",
  description:
    "Discover, borrow, and read thousands of books online with Readora. Join our community of book lovers and start your reading journey today.",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${inter.variable} ${cormorant.variable} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Toaster
          toastOptions={{
            className:
              "bg-[#ffffff] text-[#18181b] border border-[#e4e4e7] shadow-lg dark:bg-[#18181b] dark:text-[#ffffff] dark:border-[#3f3f46]",

            success: {
              className:
                "bg-[#f0fdf4] text-[#166534] border border-[#86efac] dark:bg-[#052e16] dark:text-[#bbf7d0] dark:border-[#166534]",
            },

            error: {
              className:
                "bg-[#fef2f2] text-[#991b1b] border border-[#fca5a5] dark:bg-[#450a0a] dark:text-[#fecaca] dark:border-[#991b1b]",
            },
          }}
          position="top-center"
          reverseOrder={true}
        />
      </body>
    </html>
  );
}
