"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AppLogo from "@/components/ui/AppLogo";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/chip-library", label: "Chip Library" },
    { href: "/schematic-viewer", label: "Schematic Viewer" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(8,8,8,0.97)",
        borderColor: "#E8A000",
        borderBottomWidth: "1.5px",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/chip-library" className="flex items-center gap-3 group flex-shrink-0">
          <AppLogo
            size={28}
            iconName="CpuChipIcon"
            className="text-amber-DEFAULT"
          />
          <div className="flex flex-col leading-none">
            <span
              className="font-mono font-bold tracking-widest text-sm"
              style={{ color: "#E8A000", letterSpacing: "0.18em" }}
            >
              PHOL-LABS
            </span>
            <span
              className="font-mono text-[9px] tracking-widest"
              style={{ color: "#666666", letterSpacing: "0.12em" }}
            >
              AMIGA CHIP REFERENCE
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          {navLinks?.map((link) => {
            const isActive = pathname === link?.href;
            return (
              <Link
                key={link?.href}
                href={link?.href}
                className={`
                  relative px-4 py-1.5 rounded font-mono text-xs tracking-wider transition-all duration-200
                  ${isActive
                    ? "text-[#E8A000] bg-[#1a1200]"
                    : "text-[#666666] hover:text-[#e0e0e0] hover:bg-[#141414]"
                  }
                `}
                style={{ letterSpacing: "0.1em" }}
              >
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full"
                    style={{ background: "#E8A000" }}
                  />
                )}
                {link?.label}
              </Link>
            );
          })}
        </nav>

        {/* Status indicator */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <span
            className="w-1.5 h-1.5 rounded-full animate-status-pulse"
            style={{ background: "#7ECF7E" }}
          />
          <span className="font-mono text-[10px] tracking-widest" style={{ color: "#3a7a3a" }}>
            ONLINE
          </span>
        </div>
      </div>
    </header>
  );
}