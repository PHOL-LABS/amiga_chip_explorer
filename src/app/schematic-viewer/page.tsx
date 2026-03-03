import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchematicViewerClient from "./components/SchematicViewerClient";

export const metadata: Metadata = {
  title: "Schematic Viewer — PHOL-LABS Amiga Reference",
  description: "Interactive Amiga chip schematic viewer with clickable pins and signal reference GIFs. View pinouts for CIA, Paula, Alice, Lisa, Agnus and more.",
};

function SchematicLoading() {
  return (
    <div className="flex flex-1 items-center justify-center" style={{ background: "#080808" }}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: "#E8A000", borderTopColor: "transparent" }} />
        <p className="font-mono text-xs tracking-widest" style={{ color: "#444" }}>
          LOADING SCHEMATIC...
        </p>
      </div>
    </div>
  );
}

export default function SchematicViewerPage() {
  return (
    <div
      className="flex flex-col"
      style={{ minHeight: "100vh", background: "#080808" }}
    >
      <Header />
      <main
        className="flex-1 flex flex-col"
        style={{ overflow: "hidden", height: "calc(100vh - 56px - 57px)" }}
      >
        <Suspense fallback={<SchematicLoading />}>
          <SchematicViewerClient />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}