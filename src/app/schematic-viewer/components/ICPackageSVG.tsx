"use client";

import { useMemo } from "react";
import { PinData } from "@/app/chip-library/components/AmigaData";

interface ICPackageSVGProps {
  pinCount: number;
  packageType: string;
  chipName: string;
  partNumber: string;
  pins: PinData[];
  selectedPin: number | null;
  onPinClick: (pin: PinData) => void;
}

function getPinColor(dir: PinData["direction"], isSelected: boolean, isHovered: boolean): { fill: string; stroke: string; text: string } {
  if (isSelected) return { fill: "#2a1a00", stroke: "#E8A000", text: "#E8A000" };
  if (isHovered) return { fill: "#1a3a1a", stroke: "#7ECF7E", text: "#AAFFAA" };
  switch (dir) {
    case "PWR": return { fill: "#1a0a0a", stroke: "#5a1a1a", text: "#ff6b6b" };
    case "GND": return { fill: "#0a0a1a", stroke: "#1a1a5a", text: "#6b9bff" };
    case "IN":  return { fill: "#0d1a0d", stroke: "#1a3a1a", text: "#7ECF7E" };
    case "OUT": return { fill: "#1a1200", stroke: "#3a2a00", text: "#E8A000" };
    case "BI":  return { fill: "#0d1520", stroke: "#1a3040", text: "#60a5fa" };
    default:    return { fill: "#141414", stroke: "#2a2a2a", text: "#888" };
  }
}

export default function ICPackageSVG({
  pinCount, packageType, chipName, partNumber, pins, selectedPin, onPinClick
}: ICPackageSVGProps) {
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);

  // Calculate layout based on package type
  const layout = useMemo(() => {
    // PLCC packages: pins on all 4 sides
    const isPlcc = packageType.startsWith("PLCC");
    const isDip = packageType.startsWith("DIP");
    if (isPlcc) {
      // Distribute pins around 4 sides
      const perSide = Math.ceil(pinCount / 4);
      return { type: "plcc", perSide, chipW: 280, chipH: 280 };
    }
    if (isDip) {
      const halfPins = Math.ceil(pinCount / 2);
      return { type: "dip", halfPins, chipW: 120, chipH: Math.max(200, halfPins * 20 + 40) };
    }
    const perSide = Math.ceil(pinCount / 4);
    return { type: "plcc", perSide, chipW: 280, chipH: 280 };
  }, [pinCount, packageType]);

  const PIN_LEN = 22;
  const PIN_W = 14;
  const PIN_H = 9;
  const LABEL_OFFSET = 8;

  const svgPadding = 120;
  const svgW = layout.chipW + svgPadding * 2;
  const svgH = layout.chipH + svgPadding * 2;
  const cx = svgW / 2;
  const cy = svgH / 2;

  const chipX = svgPadding;
  const chipY = svgPadding;
  const chipW = layout.chipW;
  const chipH = layout.chipH;

  function renderPLCCPins() {
    const elements: React.ReactElement[] = [];
    const perSide = layout.perSide!;

    // Bottom side (pin 1 starts bottom-left, goes right)
    // Left side goes up, Top goes right-to-left, Right goes down
    // PLCC standard: pin 1 at bottom-left corner

    const sideBottom = pins.slice(0, perSide);
    const sideLeft = pins.slice(perSide, perSide * 2);
    const sideTop = pins.slice(perSide * 2, perSide * 3);
    const sideRight = pins.slice(perSide * 3, pinCount);

    const spacing = chipW / (perSide + 1);

    // Bottom pins
    sideBottom.forEach((pin, i) => {
      const px = chipX + spacing * (i + 1);
      const py = chipY + chipH;
      const isSelected = selectedPin === pin.number;
      const isHovered = hoveredPin === pin.number;
      const { fill, stroke, text } = getPinColor(pin.direction, isSelected, isHovered);
      elements.push(
        <g
          key={`b${pin.number}`}
          className="cursor-pointer"
          onClick={() => onPinClick(pin)}
          onMouseEnter={() => setHoveredPin(pin.number)}
          onMouseLeave={() => setHoveredPin(null)}
        >
          <rect
            x={px - PIN_W / 2}
            y={py}
            width={PIN_W}
            height={PIN_LEN}
            rx={2}
            fill={fill}
            stroke={stroke}
            strokeWidth={isSelected || isHovered ? 1.5 : 1}
          />
          {isSelected && (
            <rect x={px - PIN_W/2} y={py} width={PIN_W} height={PIN_LEN} rx={2} fill={stroke} opacity={0.15} />
          )}
          <text
            x={px}
            y={py + PIN_LEN + LABEL_OFFSET + 7}
            textAnchor="middle"
            fill={text}
            fontSize={6.5}
            fontFamily="JetBrains Mono, monospace"
            fontWeight={isSelected ? 700 : 400}
          >
            {pin.name.length > 6 ? pin.name.slice(0, 5) + "…" : pin.name}
          </text>
          <text
            x={px}
            y={py + PIN_LEN + LABEL_OFFSET + 16}
            textAnchor="middle"
            fill="#333"
            fontSize={5.5}
            fontFamily="JetBrains Mono, monospace"
          >
            {pin.number}
          </text>
        </g>
      );
    });

    // Left pins (going up)
    const lSpacing = chipH / (sideLeft.length + 1);
    sideLeft.forEach((pin, i) => {
      const px = chipX;
      const py = chipY + chipH - lSpacing * (i + 1);
      const isSelected = selectedPin === pin.number;
      const isHovered = hoveredPin === pin.number;
      const { fill, stroke, text } = getPinColor(pin.direction, isSelected, isHovered);
      elements.push(
        <g
          key={`l${pin.number}`}
          className="cursor-pointer"
          onClick={() => onPinClick(pin)}
          onMouseEnter={() => setHoveredPin(pin.number)}
          onMouseLeave={() => setHoveredPin(null)}
        >
          <rect
            x={px - PIN_LEN}
            y={py - PIN_W / 2}
            width={PIN_LEN}
            height={PIN_W}
            rx={2}
            fill={fill}
            stroke={stroke}
            strokeWidth={isSelected || isHovered ? 1.5 : 1}
          />
          {isSelected && (
            <rect x={px - PIN_LEN} y={py - PIN_W/2} width={PIN_LEN} height={PIN_W} rx={2} fill={stroke} opacity={0.15} />
          )}
          <text
            x={px - PIN_LEN - LABEL_OFFSET}
            y={py + 2.5}
            textAnchor="end"
            fill={text}
            fontSize={6.5}
            fontFamily="JetBrains Mono, monospace"
            fontWeight={isSelected ? 700 : 400}
          >
            {pin.name.length > 6 ? pin.name.slice(0, 5) + "…" : pin.name}
          </text>
          <text
            x={px - PIN_LEN - LABEL_OFFSET - 22}
            y={py + 2.5}
            textAnchor="end"
            fill="#333"
            fontSize={5.5}
            fontFamily="JetBrains Mono, monospace"
          >
            {pin.number}
          </text>
        </g>
      );
    });

    // Top pins (going right)
    const tSpacing = chipW / (sideTop.length + 1);
    sideTop.forEach((pin, i) => {
      const px = chipX + chipW - tSpacing * (i + 1);
      const py = chipY;
      const isSelected = selectedPin === pin.number;
      const isHovered = hoveredPin === pin.number;
      const { fill, stroke, text } = getPinColor(pin.direction, isSelected, isHovered);
      elements.push(
        <g
          key={`t${pin.number}`}
          className="cursor-pointer"
          onClick={() => onPinClick(pin)}
          onMouseEnter={() => setHoveredPin(pin.number)}
          onMouseLeave={() => setHoveredPin(null)}
        >
          <rect
            x={px - PIN_W / 2}
            y={py - PIN_LEN}
            width={PIN_W}
            height={PIN_LEN}
            rx={2}
            fill={fill}
            stroke={stroke}
            strokeWidth={isSelected || isHovered ? 1.5 : 1}
          />
          {isSelected && (
            <rect x={px - PIN_W/2} y={py - PIN_LEN} width={PIN_W} height={PIN_LEN} rx={2} fill={stroke} opacity={0.15} />
          )}
          <text
            x={px}
            y={py - PIN_LEN - LABEL_OFFSET}
            textAnchor="middle"
            fill={text}
            fontSize={6.5}
            fontFamily="JetBrains Mono, monospace"
            fontWeight={isSelected ? 700 : 400}
          >
            {pin.name.length > 6 ? pin.name.slice(0, 5) + "…" : pin.name}
          </text>
          <text
            x={px}
            y={py - PIN_LEN - LABEL_OFFSET - 8}
            textAnchor="middle"
            fill="#333"
            fontSize={5.5}
            fontFamily="JetBrains Mono, monospace"
          >
            {pin.number}
          </text>
        </g>
      );
    });

    // Right pins (going down)
    const rSpacing = chipH / (sideRight.length + 1);
    sideRight.forEach((pin, i) => {
      const px = chipX + chipW;
      const py = chipY + rSpacing * (i + 1);
      const isSelected = selectedPin === pin.number;
      const isHovered = hoveredPin === pin.number;
      const { fill, stroke, text } = getPinColor(pin.direction, isSelected, isHovered);
      elements.push(
        <g
          key={`r${pin.number}`}
          className="cursor-pointer"
          onClick={() => onPinClick(pin)}
          onMouseEnter={() => setHoveredPin(pin.number)}
          onMouseLeave={() => setHoveredPin(null)}
        >
          <rect
            x={px}
            y={py - PIN_W / 2}
            width={PIN_LEN}
            height={PIN_W}
            rx={2}
            fill={fill}
            stroke={stroke}
            strokeWidth={isSelected || isHovered ? 1.5 : 1}
          />
          {isSelected && (
            <rect x={px} y={py - PIN_W/2} width={PIN_LEN} height={PIN_W} rx={2} fill={stroke} opacity={0.15} />
          )}
          <text
            x={px + PIN_LEN + LABEL_OFFSET}
            y={py + 2.5}
            textAnchor="start"
            fill={text}
            fontSize={6.5}
            fontFamily="JetBrains Mono, monospace"
            fontWeight={isSelected ? 700 : 400}
          >
            {pin.name.length > 6 ? pin.name.slice(0, 5) + "…" : pin.name}
          </text>
          <text
            x={px + PIN_LEN + LABEL_OFFSET + 26}
            y={py + 2.5}
            textAnchor="start"
            fill="#333"
            fontSize={5.5}
            fontFamily="JetBrains Mono, monospace"
          >
            {pin.number}
          </text>
        </g>
      );
    });

    return elements;
  }

  function renderDIPPins() {
    const elements: React.ReactElement[] = [];
    const half = Math.ceil(pinCount / 2);
    const vSpacing = chipH / (half + 1);

    // Left side: pins 1..half (top to bottom)
    for (let i = 0; i < half; i++) {
      const pin = pins[i];
      if (!pin) continue;
      const px = chipX;
      const py = chipY + vSpacing * (i + 1);
      const isSelected = selectedPin === pin.number;
      const isHovered = hoveredPin === pin.number;
      const { fill, stroke, text } = getPinColor(pin.direction, isSelected, isHovered);
      elements.push(
        <g
          key={`dl${pin.number}`}
          className="cursor-pointer"
          onClick={() => onPinClick(pin)}
          onMouseEnter={() => setHoveredPin(pin.number)}
          onMouseLeave={() => setHoveredPin(null)}
        >
          <rect x={px - PIN_LEN} y={py - PIN_H / 2} width={PIN_LEN} height={PIN_H} rx={2} fill={fill} stroke={stroke} strokeWidth={isSelected || isHovered ? 1.5 : 1} />
          <text x={px - PIN_LEN - 6} y={py + 2.5} textAnchor="end" fill={text} fontSize={6.5} fontFamily="JetBrains Mono, monospace">{pin.name.length > 7 ? pin.name.slice(0, 6) + "…" : pin.name}</text>
          <text x={px - PIN_LEN - 30} y={py + 2.5} textAnchor="end" fill="#333" fontSize={5.5} fontFamily="JetBrains Mono, monospace">{pin.number}</text>
        </g>
      );
    }

    // Right side: pins half+1..pinCount (bottom to top)
    const rightPins = pins.slice(half).reverse();
    rightPins.forEach((pin, i) => {
      const px = chipX + chipW;
      const py = chipY + vSpacing * (i + 1);
      const isSelected = selectedPin === pin.number;
      const isHovered = hoveredPin === pin.number;
      const { fill, stroke, text } = getPinColor(pin.direction, isSelected, isHovered);
      elements.push(
        <g
          key={`dr${pin.number}`}
          className="cursor-pointer"
          onClick={() => onPinClick(pin)}
          onMouseEnter={() => setHoveredPin(pin.number)}
          onMouseLeave={() => setHoveredPin(null)}
        >
          <rect x={px} y={py - PIN_H / 2} width={PIN_LEN} height={PIN_H} rx={2} fill={fill} stroke={stroke} strokeWidth={isSelected || isHovered ? 1.5 : 1} />
          <text x={px + PIN_LEN + 6} y={py + 2.5} textAnchor="start" fill={text} fontSize={6.5} fontFamily="JetBrains Mono, monospace">{pin.name.length > 7 ? pin.name.slice(0, 6) + "…" : pin.name}</text>
          <text x={px + PIN_LEN + 34} y={py + 2.5} textAnchor="start" fill="#333" fontSize={5.5} fontFamily="JetBrains Mono, monospace">{pin.number}</text>
        </g>
      );
    });

    return elements;
  }

  return (
    <div className="w-full h-full overflow-auto flex items-center justify-center" style={{ background: "#080808" }}>
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        width={svgW}
        height={svgH}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      >
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#111" strokeWidth="0.5" />
          </pattern>
          <filter id="chipGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="pinGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width={svgW} height={svgH} fill="url(#grid)" />

        {/* IC body */}
        <rect
          x={chipX}
          y={chipY}
          width={chipW}
          height={chipH}
          rx={layout.type === "plcc" ? 8 : 4}
          fill="#141414"
          stroke="#2a2a2a"
          strokeWidth={2}
          filter="url(#chipGlow)"
        />
        {/* Inner body */}
        <rect
          x={chipX + 8}
          y={chipY + 8}
          width={chipW - 16}
          height={chipH - 16}
          rx={4}
          fill="#181818"
          stroke="#1e1e1e"
          strokeWidth={1}
        />

        {/* Pin 1 marker (notch/dot) */}
        {layout.type === "plcc" ? (
          <circle cx={chipX + 20} cy={chipY + chipH - 20} r={4} fill="#E8A000" opacity={0.7} />
        ) : (
          <path d={`M ${chipX + chipW/2 - 16} ${chipY} Q ${chipX + chipW/2} ${chipY + 12} ${chipX + chipW/2 + 16} ${chipY}`} fill="#141414" stroke="#2a2a2a" strokeWidth={1.5} />
        )}

        {/* Chip label */}
        <text
          x={cx}
          y={cy - 16}
          textAnchor="middle"
          fill="#E8A000"
          fontSize={13}
          fontFamily="JetBrains Mono, monospace"
          fontWeight={700}
          letterSpacing={2}
        >
          {chipName}
        </text>
        <text
          x={cx}
          y={cy + 2}
          textAnchor="middle"
          fill="#666"
          fontSize={8}
          fontFamily="JetBrains Mono, monospace"
          letterSpacing={1}
        >
          {partNumber}
        </text>
        <text
          x={cx}
          y={cy + 16}
          textAnchor="middle"
          fill="#333"
          fontSize={7}
          fontFamily="JetBrains Mono, monospace"
        >
          {packageType} · {pinCount}p
        </text>

        {/* Pins */}
        <g filter="url(#pinGlow)">
          {layout.type === "dip" ? renderDIPPins() : renderPLCCPins()}
        </g>

        {/* Corner registration marks */}
        {[
          [chipX - 12, chipY - 12],
          [chipX + chipW + 12, chipY - 12],
          [chipX - 12, chipY + chipH + 12],
          [chipX + chipW + 12, chipY + chipH + 12],
        ].map(([mx, my], idx) => (
          <g key={idx}>
            <line x1={mx - 5} y1={my} x2={mx + 5} y2={my} stroke="#1e1e1e" strokeWidth={1} />
            <line x1={mx} y1={my - 5} x2={mx} y2={my + 5} stroke="#1e1e1e" strokeWidth={1} />
          </g>
        ))}
      </svg>
    </div>
  );
}

// Need to add useState import
import { useState } from "react"
;