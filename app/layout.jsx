import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "./_components/header";
import { ThemeProvider } from "./_components/theme-provider";
import Footer from "./_components/footer";
import { UserProvider } from "@/lib/currentUserProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "devUI",
  description: "Components made with Tailwind CSS for NextJS/React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <UserProvider>
            <Header />
            <div className="min-h-screen mt-[10vh] md:mt-[10vh]">
              {children}
            </div>
            <Footer />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
