'use client';

import { PinData } from '@/app/chip-library/components/AmigaData';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { withBasePath } from '@/lib/basePath';

interface SignalViewerProps {
  pin: PinData | null;
  modelId: string;
  chipId: string;
  chipName: string;
  partNumber: string;
  onClose: () => void;
}

function WaveformPlaceholder({
  direction,
  gifPath,
  caption,
}: {
  direction: PinData['direction'];
  gifPath: string;
  caption: string;
}) {
  // Generate a simple SVG waveform based on signal type
  const getWaveformPath = () => {
    switch (direction) {
      case 'PWR':
        return 'M0,30 L200,30'; // flat high
      case 'GND':
        return 'M0,50 L200,50'; // flat low
      case 'IN':
        return 'M0,50 L20,50 L20,10 L50,10 L50,50 L70,50 L70,10 L100,10 L100,50 L120,50 L120,10 L150,10 L150,50 L170,50 L170,10 L200,10 L200,50';
      case 'OUT':
        return 'M0,10 L30,10 L30,50 L60,50 L60,10 L90,10 L90,50 L120,50 L120,10 L150,10 L150,50 L180,50 L180,10 L200,10';
      case 'BI':
        return 'M0,30 L15,30 L15,10 L35,10 L35,50 L55,50 L55,10 L75,10 L75,30 L95,30 L95,50 L115,50 L115,10 L135,10 L135,30 L155,30 L155,50 L175,50 L175,10 L195,10 L200,10';
      default:
        return 'M0,30 C40,10 60,50 100,30 C140,10 160,50 200,30';
    }
  };

  const getColor = () => {
    switch (direction) {
      case 'PWR':
        return 'var(--accent-red)';
      case 'GND':
        return 'var(--accent-ground)';
      case 'IN':
        return 'var(--phosphor-green)';
      case 'OUT':
        return 'var(--accent-amber)';
      case 'BI':
        return 'var(--accent-blue)';
      default:
        return 'var(--text-muted)';
    }
  };

  const color = getColor();

  return (
    <div
      className="relative rounded overflow-hidden h-56"
      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}
    >
      {/* Grid */}
      <svg width="100%" height="80" viewBox="0 0 200 80" preserveAspectRatio="none">
        {/* Grid lines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={20 * (i + 1)}
            x2="200"
            y2={20 * (i + 1)}
            stroke="var(--grid-line)"
            strokeWidth="0.5"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line
            key={`v${i}`}
            x1={25 * (i + 1)}
            y1="0"
            x2={25 * (i + 1)}
            y2="80"
            stroke="var(--grid-line)"
            strokeWidth="0.5"
          />
        ))}
        {/* Glow effect */}
        <defs>
          <filter id="waveGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Waveform */}
        <path
          d={getWaveformPath()}
          fill="none"
          stroke={color}
          strokeWidth={1.5}
          filter="url(#waveGlow)"
          opacity={0.9}
        />
        {/* Trigger marker */}
        <line
          x1="20"
          y1="0"
          x2="20"
          y2="80"
          stroke="var(--text-faint)"
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />
        <polygon points="20,0 24,4 16,4" fill="var(--text-faint)" />
      </svg>

      {/* GIF overlay */}
      <div className="absolute inset-0" style={{ background: 'var(--media-overlay)' }}>
        <a
          href={gifPath}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full cursor-zoom-in"
          aria-label={`Open full-resolution GIF for ${caption}`}
        >
          <AppImage
            src={gifPath}
            alt={caption}
            fill
            className="w-full h-full object-cover"
            fallbackSrc="/assets/images/no_image.png"
          />
        </a>
        <div
          className="absolute left-2 bottom-2 px-1.5 py-1 rounded"
          style={{ background: 'var(--media-caption)', border: '1px solid var(--border-subtle)' }}
        >
          <span
            className="font-mono text-[9px] tracking-wide"
            style={{ color: 'var(--text-muted)' }}
          >
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SignalViewer({
  pin,
  modelId,
  chipId,
  chipName,
  partNumber,
  onClose,
}: SignalViewerProps) {
  if (!pin) {
    return (
      <div
        className="flex flex-col items-center justify-center h-full gap-4 p-6"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: 'var(--grid-line)', border: '1px solid var(--border-subtle)' }}
        >
          <Icon name="CursorArrowRaysIcon" size={28} style={{ color: 'var(--text-faint)' }} />
        </div>
        <div className="text-center">
          <p className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
            SELECT A PIN
          </p>
          <p className="font-mono text-[10px] mt-1" style={{ color: 'var(--text-faint)' }}>
            Click any pin on the schematic
          </p>
          <p className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>
            to view signal reference
          </p>
        </div>
        <div className="w-8 h-px" style={{ background: 'var(--border-subtle)' }} />
        <p className="font-mono text-[9px] text-center" style={{ color: 'var(--border-mid)' }}>
          {chipName} · {partNumber}
        </p>
      </div>
    );
  }

  const dirColors: Record<string, string> = {
    PWR: 'var(--accent-red)',
    GND: 'var(--accent-ground)',
    IN: 'var(--phosphor-green)',
    OUT: 'var(--accent-amber)',
    BI: 'var(--accent-blue)',
    NC: 'var(--text-soft)',
    UNKNOWN: 'var(--text-secondary)',
  };
  const dirColor = dirColors[pin.direction] || 'var(--text-secondary)';

  const dirLabels: Record<string, string> = {
    PWR: 'POWER',
    GND: 'GROUND',
    IN: 'INPUT',
    OUT: 'OUTPUT',
    BI: 'BIDIRECTIONAL',
    NC: 'NO CONNECT',
    UNKNOWN: 'UNSPECIFIED',
  };

  const signalGifPath = withBasePath(`/assets/signals/${modelId}/${chipId}/pin${pin.number}.gif`);

  return (
    <div
      className="flex flex-col h-full fade-in-right"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Header */}
      <div
        className="flex-shrink-0 px-4 py-3 border-b flex items-center justify-between"
        style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-primary)' }}
      >
        <div className="flex items-center gap-2">
          <Icon name="SignalIcon" size={14} style={{ color: 'var(--accent-amber)' }} />
          <span
            className="font-mono text-[10px] tracking-widest"
            style={{ color: 'var(--accent-amber)', letterSpacing: '0.2em' }}
          >
            SIGNAL VIEWER
          </span>
        </div>
        <button
          onClick={onClose}
          className="theme-hover-surface transition-colors duration-150 rounded p-0.5"
          aria-label="Close signal viewer"
        >
          <Icon name="XMarkIcon" size={14} style={{ color: 'var(--text-soft)' }} />
        </button>
      </div>

      {/* Pin info */}
      <div
        className="flex-shrink-0 px-4 py-4 border-b"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        {/* Pin number + name */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
            style={{
              background: 'var(--bg-strong)',
              border: `1px solid color-mix(in srgb, ${dirColor} 25%, transparent)`,
            }}
          >
            <span className="font-mono font-bold text-sm" style={{ color: dirColor }}>
              {pin.number}
            </span>
          </div>
          <div>
            <p className="font-mono font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
              {pin.name}
            </p>
            <p className="font-mono text-[10px]" style={{ color: 'var(--text-soft)' }}>
              {chipName} · Pin {pin.number}
            </p>
          </div>
        </div>

        {/* Direction badge */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="font-mono text-[10px] px-2 py-0.5 rounded"
            style={{
              color: dirColor,
              background: `color-mix(in srgb, ${dirColor} 9%, transparent)`,
              border: `1px solid color-mix(in srgb, ${dirColor} 20%, transparent)`,
            }}
          >
            {dirLabels[pin.direction] || pin.direction}
          </span>
          <span
            className="font-mono text-[10px] px-2 py-0.5 rounded"
            style={{
              color: 'var(--text-soft)',
              background: 'var(--grid-line)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {pin.signal}
          </span>
        </div>

        {/* Description */}
        <p className="font-mono text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {pin.description}
        </p>
      </div>

      {/* Signal waveform / GIF area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
        {/* Primary GIF placeholder */}
        <div>
          <p
            className="font-mono text-[10px] mb-2 tracking-widest"
            style={{ color: 'var(--text-dim)' }}
          >
            OSCILLOSCOPE REFERENCE
          </p>
          <WaveformPlaceholder
            key={signalGifPath}
            direction={pin.direction}
            gifPath={signalGifPath}
            caption={`PIN ${pin.number} · OSC`}
          />
        </div>

        {/* Secondary GIF placeholder */}
        {/* <div>
          <p className="font-mono text-[10px] mb-2 tracking-widest" style={{ color: 'var(--text-dim)' }}>
            LOGIC ANALYZER CAPTURE
          </p>
          <WaveformPlaceholder
            direction={pin.direction}
            gifPath={signalGifPath}
            caption={`PIN ${pin.number} · LOGIC`}
          />
        </div> */}

        {/* Signal specs table */}
        <div>
          <p
            className="font-mono text-[10px] mb-2 tracking-widest"
            style={{ color: 'var(--text-dim)' }}
          >
            SIGNAL PARAMETERS
          </p>
          <div
            className="rounded overflow-hidden"
            style={{ border: '1px solid var(--border-subtle)' }}
          >
            {[
              { label: 'Pin', value: `${pin.number}` },
              { label: 'Net', value: pin.signal },
              { label: 'Type', value: dirLabels[pin.direction] || pin.direction },
              { label: 'Level', value: 'TTL (0–5V)' },
              { label: 'Chip', value: chipName },
              { label: 'Part', value: partNumber },
            ].map((row, idx) => (
              <div
                key={row.label}
                className="flex items-center"
                style={{
                  background: idx % 2 === 0 ? 'var(--bg-elevated)' : 'var(--bg-secondary)',
                  borderBottom: idx < 5 ? '1px solid var(--bg-strong)' : 'none',
                }}
              >
                <span
                  className="font-mono text-[10px] px-3 py-2 w-24 flex-shrink-0"
                  style={{ color: 'var(--text-dim)', borderRight: '1px solid var(--bg-strong)' }}
                >
                  {row.label}
                </span>
                <span
                  className="font-mono text-[10px] px-3 py-2 flex-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div
          className="rounded p-3"
          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <Icon name="InformationCircleIcon" size={12} style={{ color: 'var(--text-dim)' }} />
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-dim)' }}>
              NOTES
            </span>
          </div>
          <p
            className="font-mono text-[10px] leading-relaxed"
            style={{ color: 'var(--text-faint)' }}
          >
            GIF images are loaded automatically from{' '}
            <code>
              /public/assets/signals/{modelId}/{chipId}/pin{pin.number}.gif
            </code>
            . If missing, a placeholder image is shown.
          </p>
        </div>
      </div>
    </div>
  );
}
