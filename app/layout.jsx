import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import TopBanner from "./(components)/TopBanner";
import Footer from "./(components)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col w-full">
          <TopBanner />
          <main className=" flex justify-center bg-white min-h-screen">
            <div className="flex flex-col w-full">
              <Navbar />
              {children}
            </div>
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
