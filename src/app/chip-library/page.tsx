import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChipLibraryClient from "./components/ChipLibraryClient";

export const metadata: Metadata = {
  title: "Chip Library — PHOL-LABS Amiga Reference",
  description: "Browse Amiga computer chips by model. Reference pinouts and signal data for A1200, A600, A500, A2000, CD32, A3000, A4000, CDTV.",
};

export default function ChipLibraryPage() {
  return (
    <div
      className="flex flex-col"
      style={{ minHeight: "100vh", background: "#080808" }}
    >
      <Header />
      <main className="flex-1 flex flex-col" style={{ overflow: "hidden", height: "calc(100vh - 56px - 57px)" }}>
        <ChipLibraryClient />
      </main>
      <Footer />
    </div>
  );
}