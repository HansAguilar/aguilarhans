import Hero from "@/pages/hero";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between container m-auto">
      <Hero />
    </main>
  );
}
