import { Inter } from "next/font/google";
import "./globals.css";
import { InterestContextProvider } from "./lib/context/interestContext";
import { StateContextProvider } from "./lib/context/stateContext";
import { AuthProvider } from "./lib/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "G-Sport",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <InterestContextProvider>
          <StateContextProvider>
            <body className={inter.className}>{children}</body>
          </StateContextProvider>
        </InterestContextProvider>
      </AuthProvider>
    </html>
  );
  
}
