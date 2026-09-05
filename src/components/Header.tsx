'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

type ColorTheme = 'dark' | 'light';

export default function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<ColorTheme>('dark');

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ColorTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('amiga-color-theme', nextTheme);
    setTheme(nextTheme);
  };

  const navLinks = [
    { href: '/chip-library', label: 'Chip Library' },
    { href: '/schematic-viewer', label: 'Schematic Viewer' },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'var(--header-bg)',
        borderColor: 'var(--accent-amber)',
        borderBottomWidth: '1.5px',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/chip-library" className="flex items-center gap-3 group flex-shrink-0">
          <AppLogo size={28} iconName="CpuChipIcon" className="text-amber-DEFAULT" />
          <div className="flex flex-col leading-none">
            <span
              className="font-mono font-bold tracking-widest text-sm"
              style={{ color: 'var(--accent-amber)', letterSpacing: '0.18em' }}
            >
              PHOL-LABS
            </span>
            <span
              className="font-mono text-[9px] tracking-widest"
              style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}
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
                  ${isActive ? 'nav-theme-active' : 'nav-theme-idle'}
                `}
                style={{ letterSpacing: '0.1em' }}
              >
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full"
                    style={{ background: 'var(--accent-amber)' }}
                  />
                )}
                {link?.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Status indicator */}
          <div className="hidden sm:flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-status-pulse"
              style={{ background: 'var(--phosphor-green)' }}
            />
            <span
              className="font-mono text-[10px] tracking-widest"
              style={{ color: 'var(--phosphor-green-dim)' }}
            >
              ONLINE
            </span>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle flex items-center gap-2 rounded px-2.5 py-1.5 font-mono text-[10px] tracking-widest"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} color scheme`}
            aria-pressed={theme === 'light'}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} scheme`}
          >
            <Icon name={theme === 'dark' ? 'SunIcon' : 'MoonIcon'} size={14} />
            <span className="hidden md:inline">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
