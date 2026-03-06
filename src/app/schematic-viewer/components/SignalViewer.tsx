'use client';

import { PinData } from '@/app/chip-library/components/AmigaData';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

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
        return '#ff6b6b';
      case 'GND':
        return '#6b9bff';
      case 'IN':
        return '#7ECF7E';
      case 'OUT':
        return '#E8A000';
      case 'BI':
        return '#60a5fa';
      default:
        return '#666';
    }
  };

  const color = getColor();

  return (
    <div
      className="relative rounded overflow-hidden h-56"
      style={{ background: '#0a0a0a', border: '1px solid #1e1e1e' }}
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
            stroke="#111"
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
            stroke="#111"
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
          stroke="#333"
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />
        <polygon points="20,0 24,4 16,4" fill="#333" />
      </svg>

      {/* GIF overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }}>
        <AppImage
          src={gifPath}
          alt={caption}
          fill
          className="w-full h-full object-cover"
          fallbackSrc="/assets/images/no_image.png"
        />
        <div
          className="absolute left-2 bottom-2 px-1.5 py-1 rounded"
          style={{ background: 'rgba(0,0,0,0.8)', border: '1px solid #1e1e1e' }}
        >
          <span className="font-mono text-[9px] tracking-wide" style={{ color: '#666' }}>
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
        style={{ background: '#0a0a0a' }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: '#111', border: '1px solid #1e1e1e' }}
        >
          <Icon name="CursorArrowRaysIcon" size={28} style={{ color: '#333' }} />
        </div>
        <div className="text-center">
          <p className="font-mono text-xs" style={{ color: '#444' }}>
            SELECT A PIN
          </p>
          <p className="font-mono text-[10px] mt-1" style={{ color: '#333' }}>
            Click any pin on the schematic
          </p>
          <p className="font-mono text-[10px]" style={{ color: '#333' }}>
            to view signal reference
          </p>
        </div>
        <div className="w-8 h-px" style={{ background: '#1e1e1e' }} />
        <p className="font-mono text-[9px] text-center" style={{ color: '#2a2a2a' }}>
          {chipName} · {partNumber}
        </p>
      </div>
    );
  }

  const dirColors: Record<string, string> = {
    PWR: '#ff6b6b',
    GND: '#6b9bff',
    IN: '#7ECF7E',
    OUT: '#E8A000',
    BI: '#60a5fa',
  };
  const dirColor = dirColors[pin.direction] || '#888';

  const dirLabels: Record<string, string> = {
    PWR: 'POWER',
    GND: 'GROUND',
    IN: 'INPUT',
    OUT: 'OUTPUT',
    BI: 'BIDIRECTIONAL',
  };

  var signalGifPath = `/assets/signals/${modelId}/${chipId}/pin${pin.number}.gif`;

  return (
    <div className="flex flex-col h-full fade-in-right" style={{ background: '#0a0a0a' }}>
      {/* Header */}
      <div
        className="flex-shrink-0 px-4 py-3 border-b flex items-center justify-between"
        style={{ borderColor: '#1e1e1e', background: '#080808' }}
      >
        <div className="flex items-center gap-2">
          <Icon name="SignalIcon" size={14} style={{ color: '#E8A000' }} />
          <span
            className="font-mono text-[10px] tracking-widest"
            style={{ color: '#E8A000', letterSpacing: '0.2em' }}
          >
            SIGNAL VIEWER
          </span>
        </div>
        <button
          onClick={onClose}
          className="transition-colors duration-150 rounded p-0.5 hover:bg-[#1a1a1a]"
          aria-label="Close signal viewer"
        >
          <Icon name="XMarkIcon" size={14} style={{ color: '#555' }} />
        </button>
      </div>

      {/* Pin info */}
      <div className="flex-shrink-0 px-4 py-4 border-b" style={{ borderColor: '#1e1e1e' }}>
        {/* Pin number + name */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
            style={{ background: '#141414', border: `1px solid ${dirColor}40` }}
          >
            <span className="font-mono font-bold text-sm" style={{ color: dirColor }}>
              {pin.number}
            </span>
          </div>
          <div>
            <p className="font-mono font-bold text-sm" style={{ color: '#e0e0e0' }}>
              {pin.name}
            </p>
            <p className="font-mono text-[10px]" style={{ color: '#555' }}>
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
              background: `${dirColor}15`,
              border: `1px solid ${dirColor}30`,
            }}
          >
            {dirLabels[pin.direction] || pin.direction}
          </span>
          <span
            className="font-mono text-[10px] px-2 py-0.5 rounded"
            style={{ color: '#555', background: '#111', border: '1px solid #1e1e1e' }}
          >
            {pin.signal}
          </span>
        </div>

        {/* Description */}
        <p className="font-mono text-[11px] leading-relaxed" style={{ color: '#666' }}>
          {pin.description}
        </p>
      </div>

      {/* Signal waveform / GIF area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
        {/* Primary GIF placeholder */}
        <div>
          <p className="font-mono text-[10px] mb-2 tracking-widest" style={{ color: '#444' }}>
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
          <p className="font-mono text-[10px] mb-2 tracking-widest" style={{ color: '#444' }}>
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
          <p className="font-mono text-[10px] mb-2 tracking-widest" style={{ color: '#444' }}>
            SIGNAL PARAMETERS
          </p>
          <div className="rounded overflow-hidden" style={{ border: '1px solid #1e1e1e' }}>
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
                  background: idx % 2 === 0 ? '#0d0d0d' : '#0a0a0a',
                  borderBottom: idx < 5 ? '1px solid #141414' : 'none',
                }}
              >
                <span
                  className="font-mono text-[10px] px-3 py-2 w-24 flex-shrink-0"
                  style={{ color: '#444', borderRight: '1px solid #141414' }}
                >
                  {row.label}
                </span>
                <span className="font-mono text-[10px] px-3 py-2 flex-1" style={{ color: '#888' }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="rounded p-3" style={{ background: '#0d0d0d', border: '1px solid #1e1e1e' }}>
          <div className="flex items-center gap-1.5 mb-2">
            <Icon name="InformationCircleIcon" size={12} style={{ color: '#444' }} />
            <span className="font-mono text-[10px]" style={{ color: '#444' }}>
              NOTES
            </span>
          </div>
          <p className="font-mono text-[10px] leading-relaxed" style={{ color: '#333' }}>
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
