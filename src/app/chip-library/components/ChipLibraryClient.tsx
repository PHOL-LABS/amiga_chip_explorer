"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/ui/AppIcon";
import { AMIGA_MODELS, AmigaModel, ChipInfo } from "./AmigaData";

export default function ChipLibraryClient() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedModel, setSelectedModel] = useState<AmigaModel>(AMIGA_MODELS[0]);
  const [hoveredChip, setHoveredChip] = useState<string | null>(null);

  const handleChipClick = (chip: ChipInfo) => {
    // Navigate to schematic viewer with chip info in URL params
    const params = new URLSearchParams({
      modelId: selectedModel.id,
      chipId: chip.id,
      chipName: chip.name,
      partNumber: chip.partNumber,
      package: chip.package,
      pinCount: chip.pinCount.toString(),
    });
    router.push(`/schematic-viewer?${params.toString()}`);
  };

  const getDirectionColor = (pkg: string) => {
    if (pkg.startsWith("PLCC84")) return "var(--phosphor-green)";
    if (pkg.startsWith("PLCC44")) return "var(--accent-amber)";
    if (pkg.startsWith("PLCC52")) return "var(--accent-orange)";
    if (pkg.startsWith("PLCC68")) return "var(--accent-purple)";
    if (pkg.startsWith("PQFP") || pkg.startsWith("QFP")) return "var(--accent-magenta)";
    if (pkg.startsWith("PGA")) return "var(--accent-violet)";
    if (pkg.startsWith("DIP")) return "var(--accent-blue)";
    return "var(--accent-neutral)";
  };

  return (
    <div className="flex flex-1 overflow-hidden" style={{ minHeight: 0 }}>
      {/* CRT overlay */}
      <div className="crt-overlay" />

      {/* ── SIDEBAR ── */}
      <div
        className={`flex-shrink-0 flex flex-col border-r z-20 ${sidebarOpen ? "" : "sidebar-collapsed"}`}
        style={{
          width: sidebarOpen ? 272 : 0,
          minWidth: sidebarOpen ? 272 : 0,
          background: "var(--bg-secondary)",
          borderColor: "var(--border-subtle)",
          overflow: "hidden",
          transition: "width 0.3s cubic-bezier(0.4,0,0.2,1), min-width 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Sidebar header */}
        <div
          className="px-4 py-3 flex items-center gap-2 border-b flex-shrink-0"
          style={{ borderColor: "var(--border-subtle)", background: "var(--bg-primary)" }}
        >
          <Icon name="ComputerDesktopIcon" size={14} style={{ color: "var(--accent-amber)" }} />
          <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--accent-amber)", letterSpacing: "0.2em" }}>
            SELECT MODEL
          </span>
        </div>

        {/* Model list */}
        <nav className="flex-1 overflow-y-auto py-2">
          {AMIGA_MODELS.map((model) => {
            const isActive = selectedModel.id === model.id;
            return (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className="w-full text-left px-5 py-3 flex items-center gap-3 transition-all duration-150 group"
                style={{
                  background: isActive ? "var(--bg-active)" : "transparent",
                  borderLeft: isActive ? "2.5px solid var(--accent-amber)" : "2.5px solid transparent",
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    background: isActive ? "var(--accent-amber)" : "var(--text-faint)",
                    boxShadow: isActive ? "0 0 6px var(--accent-amber)" : "none",
                  }}
                />
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span
                    className="font-mono text-xs tracking-wide truncate"
                    style={{
                      color: isActive ? "var(--accent-amber)" : "var(--text-secondary)",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {model.name}
                  </span>
                  <span className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>
                    {model.year} · {model.chips.length} chips
                  </span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Sidebar footer info */}
        <div className="px-4 py-3 border-t flex-shrink-0" style={{ borderColor: "var(--border-subtle)" }}>
          <p className="font-mono text-[9px] tracking-wider" style={{ color: "var(--text-faint)" }}>
            PHOL-LABS CHIP REFERENCE v2.6
          </p>
        </div>
      </div>

      {/* ── SIDEBAR TOGGLE ── */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="flex-shrink-0 flex items-center justify-center z-30 transition-all duration-200 hover:scale-110"
        style={{
          width: 18,
          background: "var(--bg-active)",
          border: "none",
          borderRight: "1px solid var(--accent-amber)",
          cursor: "pointer",
          color: "var(--accent-amber)",
        }}
        aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        <Icon
          name={sidebarOpen ? "ChevronLeftIcon" : "ChevronRightIcon"}
          size={12}
          style={{ color: "var(--accent-amber)" }}
        />
      </button>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col overflow-hidden" style={{ minWidth: 0 }}>
        {/* Model header */}
        <div
          className="flex-shrink-0 px-6 py-4 border-b"
          style={{ background: "var(--bg-elevated)", borderColor: "var(--border-subtle)" }}
        >
          <div className="flex items-center gap-3 mb-1">
            <span
              className="font-mono text-[10px] tracking-widest"
              style={{ color: "var(--text-muted)", letterSpacing: "0.2em" }}
            >
              SELECTED MODEL
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full animate-status-pulse"
              style={{ background: "var(--phosphor-green)" }}
            />
          </div>
          <div className="flex items-baseline gap-4">
            <h1
              className="font-mono font-bold text-xl tracking-wider"
              style={{ color: "var(--accent-amber)" }}
            >
              {selectedModel.name}
            </h1>
            <span className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>
              {selectedModel.year}
            </span>
            <span className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>
              {selectedModel.chips.length} CHIPS
            </span>
          </div>
          <p className="font-mono text-[11px] mt-1" style={{ color: "var(--text-soft)" }}>
            Click a chip below to open the schematic viewer
            <span className="cursor-blink ml-1" style={{ color: "var(--accent-amber)" }}>_</span>
          </p>
        </div>

        {/* Chip grid */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Package legend */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="font-mono text-[10px]" style={{ color: "var(--text-dim)" }}>PACKAGES:</span>
            {["PLCC84", "PLCC68", "PLCC52", "PLCC44", "QFP/PQFP", "PGA", "DIP"].map((pkg) => (
              <div key={pkg} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-sm"
                  style={{ background: getDirectionColor(pkg) }}
                />
                <span className="font-mono text-[10px]" style={{ color: "var(--text-soft)" }}>{pkg}</span>
              </div>
            ))}
          </div>

          {/* Chip list as URL-style links */}
          <div className="flex flex-col gap-1.5">
            {selectedModel.chips.map((chip, idx) => {
              const pkgColor = getDirectionColor(chip.package);
              const isHovered = hoveredChip === chip.id;
              return (
                <button
                  key={chip.id}
                  onClick={() => handleChipClick(chip)}
                  onMouseEnter={() => setHoveredChip(chip.id)}
                  onMouseLeave={() => setHoveredChip(null)}
                  className="chip-link text-left w-full flex items-center gap-0 group"
                  style={{
                    background: isHovered ? "var(--bg-success)" : "transparent",
                    border: "none",
                    padding: "6px 0",
                    cursor: "pointer",
                  }}
                >
                  {/* Index number */}
                  <span
                    className="font-mono text-[11px] w-8 flex-shrink-0"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}.
                  </span>

                  {/* URL-style chip link */}
                  <span
                    className="font-mono text-sm flex-1"
                    style={{
                      color: isHovered ? "var(--phosphor-green-bright)" : "var(--phosphor-green)",
                      textDecoration: isHovered ? "underline" : "none",
                      textDecorationColor: "var(--phosphor-green-dim)",
                    }}
                  >
                    {chip.name} {chip.partNumber}
                  </span>

                  {/* Package badge */}
                  <span
                    className="font-mono text-[10px] px-2 py-0.5 rounded ml-4 flex-shrink-0"
                    style={{
                      color: pkgColor,
                      background: `color-mix(in srgb, ${pkgColor} 9%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${pkgColor} 20%, transparent)`,
                      opacity: isHovered ? 1 : 0.7,
                    }}
                  >
                    {chip.package}
                  </span>

                  {/* Pin count */}
                  <span
                    className="font-mono text-[10px] w-16 text-right flex-shrink-0"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {chip.pinCount}p
                  </span>

                  {/* Arrow */}
                  <Icon
                    name="ArrowRightIcon"
                    size={12}
                    className="ml-3 flex-shrink-0 transition-transform duration-150"
                    style={{
                      color: isHovered ? "var(--phosphor-green)" : "var(--border-mid)",
                      transform: isHovered ? "translateX(4px)" : "none",
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Chip detail cards on hover */}
          {hoveredChip && (() => {
            const chip = selectedModel.chips.find((c) => c.id === hoveredChip);
            if (!chip) return null;
            return (
              <div
                className="mt-8 p-4 rounded border"
                style={{
                  background: "var(--bg-elevated)",
                  borderColor: "var(--border-mid)",
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Mini IC graphic */}
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded flex items-center justify-center"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border-mid)" }}
                  >
                    <Icon name="CpuChipIcon" size={28} style={{ color: "var(--phosphor-green-dim)" }} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-mono text-xs font-bold" style={{ color: "var(--text-primary)" }}>
                      {chip.name} — {chip.partNumber}
                    </p>
                    <p className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
                      {chip.description}
                    </p>
                    <p className="font-mono text-[11px]" style={{ color: "var(--text-soft)" }}>
                      Function: {chip.function}
                    </p>
                    <p className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
                      Package: {chip.package} · {chip.pinCount} pins
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Bottom status bar */}
        <div
          className="flex-shrink-0 px-6 py-2 border-t flex items-center gap-4"
          style={{ background: "var(--bg-primary)", borderColor: "var(--border-subtle)" }}
        >
          <span className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>
            {selectedModel.chips.length} chips loaded
          </span>
          <span style={{ color: "var(--border-subtle)" }}>·</span>
          <span className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>
            Model: {selectedModel.shortName}
          </span>
          <span style={{ color: "var(--border-subtle)" }}>·</span>
          <span className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>
            Click chip to view schematic
          </span>
        </div>
      </div>
    </div>
  );
}
