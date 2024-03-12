import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"
config.autoAddCss = false

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "1811Labs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "bg-white text-black text-foreground"
        )}
      >
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
        <Toaster />

      </body>
    </html>
  );
}
