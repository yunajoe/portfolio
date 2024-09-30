"use client";
import HomeContent from "@/components/contents/HomeContent";
import { TransLationProvider } from "@/context/TransLationContext";


export default function Home() {
  return (
    <TransLationProvider>
      <HomeContent />
    </TransLationProvider>
  );
}
