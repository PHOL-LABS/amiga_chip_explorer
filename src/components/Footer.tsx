import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: 'var(--bg-secondary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="font-mono text-[11px] tracking-wider" style={{ color: 'var(--text-dim)' }}>
          © {new Date()?.getFullYear()}{' '}
          <span style={{ color: 'var(--text-muted)' }}>PHOL-LABS Kft.</span> — All rights reserved
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {/* Instagram */}
          <a
            href="https://instagram.com/phol_labs"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-hover-text flex items-center gap-1.5 group transition-all duration-200"
            aria-label="Instagram"
          >
            <Icon
              name="PhotoIcon"
              size={14}
              className="transition-colors duration-200"
              style={{ color: 'var(--text-dim)' }}
            />
            <span
              className="font-mono text-[10px] tracking-widest transition-colors"
              style={{ color: 'var(--text-dim)' }}
            >
              INSTAGRAM
            </span>
          </a>

          <span style={{ color: 'var(--border-mid)' }}>·</span>

          {/* Website */}
          <a
            href="https://phol-labs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-hover-text flex items-center gap-1.5 group transition-all duration-200"
            aria-label="Website"
          >
            <Icon
              name="GlobeAltIcon"
              size={14}
              className="transition-colors duration-200"
              style={{ color: 'var(--text-dim)' }}
            />
            <span
              className="font-mono text-[10px] tracking-widest transition-colors"
              style={{ color: 'var(--text-dim)' }}
            >
              PHOL-LABS.COM
            </span>
          </a>

          <span style={{ color: 'var(--border-mid)' }}>·</span>

          {/* Email */}
          <a
            href="mailto:admin@phol-labs.com"
            className="theme-hover-text flex items-center gap-1.5 group transition-all duration-200"
            aria-label="Email"
          >
            <Icon
              name="EnvelopeIcon"
              size={14}
              className="transition-colors duration-200"
              style={{ color: 'var(--text-dim)' }}
            />
            <span
              className="font-mono text-[10px] tracking-widest transition-colors"
              style={{ color: 'var(--text-dim)' }}
            >
              MAIL
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
