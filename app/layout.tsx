import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Byttsize - Format Books for Self-Publishing",
  description: "Write once. Format perfectly. Export PDF + audiobook. All in one click.",
  keywords: "KDP, book formatting, audiobook, self-publishing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  )
}
