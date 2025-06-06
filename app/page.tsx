
"use client"

import Marquee from "@/components/Marquee"; // Importing the Marquee component

// Marquee component for the background text effect


export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-background text-foreground">
      <Marquee />
    </main>
  )
}