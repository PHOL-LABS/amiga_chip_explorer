'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import {
  AMIGA_MODELS,
  ChipInfo,
  PinData,
  getPinsForChip,
} from '@/app/chip-library/components/AmigaData';
import ICPackageSVG from './ICPackageSVG';
import SignalViewer from './SignalViewer';

export default function SchematicViewerClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Parse URL params
  const modelId = searchParams.get('modelId') || 'a1200';
  const chipId = searchParams.get('chipId') || '';
  const chipNameParam = searchParams.get('chipName') || '';
  const partNumberParam = searchParams.get('partNumber') || '';
  const packageParam = searchParams.get('package') || 'PLCC44';
  const pinCountParam = parseInt(searchParams.get('pinCount') || '44', 10);

  const [selectedModel, setSelectedModel] = useState(
    AMIGA_MODELS.find((m) => m.id === modelId) || AMIGA_MODELS[0]
  );
  const [selectedChip, setSelectedChip] = useState<ChipInfo | null>(
    chipId
      ? selectedModel.chips.find((c) => c.id === chipId) || selectedModel.chips[0]
      : selectedModel.chips[0]
  );
  const [selectedPin, setSelectedPin] = useState<PinData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [pins, setPins] = useState<PinData[]>([]);

  useEffect(() => {
    if (selectedChip) {
      setPins(getPinsForChip(selectedChip.id, selectedChip.pinCount));
    }
  }, [selectedChip]);

  useEffect(() => {
    const model = AMIGA_MODELS.find((m) => m.id === modelId);
    if (model) {
      setSelectedModel(model);
      const chip = chipId ? model.chips.find((c) => c.id === chipId) : model.chips[0];
      setSelectedChip(chip || model.chips[0]);
    }
  }, [modelId, chipId]);

  const handleChipSelect = useCallback(
    (chip: ChipInfo) => {
      setSelectedChip(chip);
      setSelectedPin(null);
      setViewerOpen(false);
      const params = new URLSearchParams({
        modelId: selectedModel.id,
        chipId: chip.id,
        chipName: chip.name,
        partNumber: chip.partNumber,
        package: chip.package,
        pinCount: chip.pinCount.toString(),
      });
      router.replace(`/schematic-viewer?${params.toString()}`, { scroll: false });
    },
    [selectedModel.id, router]
  );

  const handleModelSelect = useCallback(
    (model: (typeof AMIGA_MODELS)[0]) => {
      setSelectedModel(model);
      setSelectedChip(model.chips[0]);
      setSelectedPin(null);
      setViewerOpen(false);
      const chip = model.chips[0];
      const params = new URLSearchParams({
        modelId: model.id,
        chipId: chip.id,
        chipName: chip.name,
        partNumber: chip.partNumber,
        package: chip.package,
        pinCount: chip.pinCount.toString(),
      });
      router.replace(`/schematic-viewer?${params.toString()}`, { scroll: false });
    },
    [router]
  );

  const handlePinClick = useCallback((pin: PinData) => {
    setSelectedPin(pin);
    setViewerOpen(true);
  }, []);

  const getPackageColor = (pkg: string) => {
    if (pkg.startsWith('PLCC84')) return '#7ECF7E';
    if (pkg.startsWith('PLCC44')) return '#E8A000';
    if (pkg.startsWith('PLCC52')) return '#FF6B35';
    if (pkg.startsWith('PLCC68')) return '#a78bfa';
    if (pkg.startsWith('DIP')) return '#60a5fa';
    return '#666';
  };

  return (
    <div className="flex flex-1 overflow-hidden" style={{ minHeight: 0 }}>
      {/* CRT overlay */}
      <div className="crt-overlay" />

      {/* ── LEFT SIDEBAR: Model + Chip selector ── */}
      <div
        className="flex-shrink-0 flex flex-col border-r z-20"
        style={{
          width: sidebarOpen ? 240 : 0,
          minWidth: sidebarOpen ? 240 : 0,
          background: '#0a0a0a',
          borderColor: '#1e1e1e',
          overflow: 'hidden',
          transition:
            'width 0.3s cubic-bezier(0.4,0,0.2,1), min-width 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Model selector */}
        <div className="flex-shrink-0 border-b" style={{ borderColor: '#1e1e1e' }}>
          <div
            className="px-4 py-2.5 flex items-center gap-2"
            style={{ background: '#080808', borderBottom: '1px solid #1e1e1e' }}
          >
            <Icon name="ComputerDesktopIcon" size={12} style={{ color: '#E8A000' }} />
            <span className="font-mono text-[10px] tracking-widest" style={{ color: '#E8A000' }}>
              MODEL
            </span>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: 200 }}>
            {AMIGA_MODELS.map((model) => (
              <button
                key={model.id}
                onClick={() => handleModelSelect(model)}
                className="w-full text-left px-4 py-2 flex items-center gap-2 transition-all duration-150"
                style={{
                  background: selectedModel.id === model.id ? '#1a1200' : 'transparent',
                  borderLeft:
                    selectedModel.id === model.id ? '2px solid #E8A000' : '2px solid transparent',
                }}
              >
                <span
                  className="font-mono text-[11px] truncate"
                  style={{ color: selectedModel.id === model.id ? '#E8A000' : '#555' }}
                >
                  {model.shortName}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Chip list */}
        <div className="flex-shrink-0 border-b" style={{ borderColor: '#1e1e1e' }}>
          <div
            className="px-4 py-2.5 flex items-center gap-2"
            style={{ background: '#080808', borderBottom: '1px solid #1e1e1e' }}
          >
            <Icon name="CpuChipIcon" size={12} style={{ color: '#7ECF7E' }} />
            <span className="font-mono text-[10px] tracking-widest" style={{ color: '#7ECF7E' }}>
              CHIPS
            </span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {selectedModel.chips.map((chip) => {
            const isActive = selectedChip?.id === chip.id;
            const pkgColor = getPackageColor(chip.package);
            return (
              <button
                key={chip.id}
                onClick={() => handleChipSelect(chip)}
                className="w-full text-left px-4 py-2.5 flex flex-col gap-0.5 transition-all duration-150"
                style={{
                  background: isActive ? '#0d1a0d' : 'transparent',
                  borderLeft: isActive ? `2px solid ${pkgColor}` : '2px solid transparent',
                }}
              >
                <span
                  className="font-mono text-[11px] font-medium"
                  style={{ color: isActive ? '#AAFFAA' : '#7ECF7E' }}
                >
                  {chip.name} {chip.partNumber}
                </span>
                <div className="flex items-center gap-1.5">
                  <span
                    className="font-mono text-[9px] px-1.5 py-px rounded"
                    style={{
                      color: pkgColor,
                      background: `${pkgColor}15`,
                      border: `1px solid ${pkgColor}20`,
                    }}
                  >
                    {chip.package}
                  </span>
                  <span className="font-mono text-[9px]" style={{ color: '#333' }}>
                    {chip.pinCount}p
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Back to library link */}
        <div className="flex-shrink-0 p-3 border-t" style={{ borderColor: '#1e1e1e' }}>
          <Link
            href="/chip-library"
            className="flex items-center gap-2 font-mono text-[10px] tracking-wide transition-colors hover:text-[#7ECF7E]"
            style={{ color: '#444' }}
          >
            <Icon name="ArrowLeftIcon" size={11} />
            Back to Library
          </Link>
        </div>
      </div>

      {/* Sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="flex-shrink-0 flex items-center justify-center z-30 transition-all duration-200 hover:scale-110"
        style={{
          width: 18,
          background: '#0d1a0d',
          border: 'none',
          borderRight: '1px solid #3a7a3a',
          cursor: 'pointer',
        }}
        aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        <Icon
          name={sidebarOpen ? 'ChevronLeftIcon' : 'ChevronRightIcon'}
          size={12}
          style={{ color: '#3a7a3a' }}
        />
      </button>

      {/* ── CENTER: Schematic ── */}
      <div className="flex-1 flex flex-col overflow-hidden" style={{ minWidth: 0 }}>
        {/* Top bar */}
        <div
          className="flex-shrink-0 px-4 py-3 border-b flex items-center gap-4"
          style={{ background: '#0d0d0d', borderColor: '#1e1e1e' }}
        >
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-sm" style={{ color: '#E8A000' }}>
                {selectedChip?.name || '—'}
              </span>
              <span className="font-mono text-xs" style={{ color: '#555' }}>
                {selectedChip?.partNumber}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px]" style={{ color: '#444' }}>
                {selectedModel.name}
              </span>
              <span style={{ color: '#2a2a2a' }}>·</span>
              <span className="font-mono text-[10px]" style={{ color: '#444' }}>
                {selectedChip?.package}
              </span>
              <span style={{ color: '#2a2a2a' }}>·</span>
              <span className="font-mono text-[10px]" style={{ color: '#444' }}>
                {selectedChip?.pinCount} PINS
              </span>
            </div>
          </div>

          {/* Pin legend */}
          <div className="flex items-center gap-3 ml-auto flex-wrap">
            {[
              { label: 'IN', color: '#7ECF7E' },
              { label: 'OUT', color: '#E8A000' },
              { label: 'BI', color: '#60a5fa' },
              { label: 'PWR', color: '#ff6b6b' },
              { label: 'GND', color: '#6b9bff' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-sm" style={{ background: item.color }} />
                <span className="font-mono text-[10px]" style={{ color: '#444' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Selected pin indicator */}
          {selectedPin && (
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded"
              style={{ background: '#1a1200', border: '1px solid #E8A00040' }}
            >
              <span className="font-mono text-[10px]" style={{ color: '#E8A000' }}>
                PIN {selectedPin.number}: {selectedPin.name}
              </span>
            </div>
          )}
        </div>

        {/* Schematic area */}
        <div className="flex-1 overflow-hidden relative">
          {selectedChip ? (
            <ICPackageSVG
              pinCount={selectedChip.pinCount}
              packageType={selectedChip.package}
              chipName={selectedChip.name}
              partNumber={selectedChip.partNumber}
              pins={pins}
              selectedPin={selectedPin?.number || null}
              onPinClick={handlePinClick}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="font-mono text-xs" style={{ color: '#333' }}>
                Select a chip from the sidebar
              </p>
            </div>
          )}

          {/* Instruction overlay when no pin selected */}
          {!selectedPin && (
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded flex items-center gap-2"
              style={{ background: 'rgba(8,8,8,0.9)', border: '1px solid #1e1e1e' }}
            >
              <Icon name="CursorArrowRaysIcon" size={14} style={{ color: '#444' }} />
              <span className="font-mono text-[11px]" style={{ color: '#444' }}>
                Click any pin to view signal reference
              </span>
            </div>
          )}
        </div>

        {/* Bottom status */}
        <div
          className="flex-shrink-0 px-4 py-1.5 border-t flex items-center gap-3"
          style={{ background: '#080808', borderColor: '#1e1e1e' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-status-pulse"
            style={{ background: '#7ECF7E' }}
          />
          <span className="font-mono text-[10px]" style={{ color: '#333' }}>
            {pins.length} pins loaded
          </span>
          {selectedPin && (
            <>
              <span style={{ color: '#1e1e1e' }}>·</span>
              <span className="font-mono text-[10px]" style={{ color: '#444' }}>
                Selected: Pin {selectedPin.number} ({selectedPin.name})
              </span>
            </>
          )}
        </div>
      </div>

      {/* ── RIGHT: Signal Viewer ── */}
      <div
        className="flex-shrink-0 flex flex-col border-l"
        style={{
          width: viewerOpen ? 300 : 52,
          minWidth: viewerOpen ? 300 : 52,
          background: '#0a0a0a',
          borderColor: '#1e1e1e',
          overflow: 'hidden',
          transition:
            'width 0.3s cubic-bezier(0.4,0,0.2,1), min-width 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {viewerOpen ? (
          <SignalViewer
            pin={selectedPin}
            modelId={selectedModel.id}
            chipId={selectedChip?.id || ''}
            chipName={selectedChip?.name || ''}
            partNumber={selectedChip?.partNumber || ''}
            onClose={() => setViewerOpen(false)}
          />
        ) : (
          /* Collapsed viewer tab */
          <button
            onClick={() => setViewerOpen(true)}
            className="flex flex-col items-center justify-center h-full gap-3 transition-all duration-200 hover:bg-[#0d0d0d] w-full"
            style={{ cursor: selectedPin ? 'pointer' : 'default' }}
            disabled={!selectedPin}
          >
            <Icon name="SignalIcon" size={16} style={{ color: selectedPin ? '#E8A000' : '#333' }} />
            <div
              className="font-mono text-[10px] tracking-widest"
              style={{
                color: selectedPin ? '#555' : '#2a2a2a',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                letterSpacing: '0.2em',
              }}
            >
              SIGNAL VIEWER
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
