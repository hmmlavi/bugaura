import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Bugaura | Reproduction workspace", description: "A focused workspace for reproducing, investigating, and verifying software bugs." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
