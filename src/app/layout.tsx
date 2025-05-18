// import "../globals.css";
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

// import ThemeToggle from "../components/ThemeToggle";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "SoftSell",
//   description: "Sell your unused software licenses",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className="scroll-smooth dark">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased transition-colors duration-300`}
//       >
//         <header className="p-4 flex justify-end">
//           <ThemeToggle />
//         </header>
//         <main className="p-4">{children}</main>
//       </body>
//     </html>
//   );
// }



// src/app/layout.tsx
import "../globals.css";

export const metadata = {
  title: "SoftSell",
  description: "Sell your unused software licenses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* Optional header here */}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
