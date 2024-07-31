import Link from "next/link";
import { Navbar } from "./components/Navbar";
import { Quote } from "./components/Quote";

export default async function Home() {
  return (
    <main className="flex  w-full h-full justify-center items-center">
      <Quote></Quote>
    </main>
  );
}
