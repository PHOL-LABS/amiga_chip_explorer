
import Icon from "@/components/ui/AppIcon";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "#0a0a0a",
        borderColor: "#1e1e1e",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="font-mono text-[11px] tracking-wider" style={{ color: "#444444" }}>
          © {new Date()?.getFullYear()}{" "}
          <span style={{ color: "#666666" }}>PHOL-LABS Kft.</span>
          {" "}— All rights reserved
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 group transition-all duration-200"
            aria-label="Instagram"
          >
            <Icon
              name="PhotoIcon"
              size={14}
              className="transition-colors duration-200"
              style={{ color: "#444444" }}
            />
            <span
              className="font-mono text-[10px] tracking-widest group-hover:text-[#e0e0e0] transition-colors"
              style={{ color: "#444444" }}
            >
              INSTAGRAM
            </span>
          </a>

          <span style={{ color: "#2a2a2a" }}>·</span>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 group transition-all duration-200"
            aria-label="Facebook"
          >
            <Icon
              name="UserGroupIcon"
              size={14}
              className="transition-colors duration-200"
              style={{ color: "#444444" }}
            />
            <span
              className="font-mono text-[10px] tracking-widest group-hover:text-[#e0e0e0] transition-colors"
              style={{ color: "#444444" }}
            >
              FACEBOOK
            </span>
          </a>

          <span style={{ color: "#2a2a2a" }}>·</span>

          {/* Website */}
          <a
            href="https://phol-labs.hu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 group transition-all duration-200"
            aria-label="Website"
          >
            <Icon
              name="GlobeAltIcon"
              size={14}
              className="transition-colors duration-200"
              style={{ color: "#444444" }}
            />
            <span
              className="font-mono text-[10px] tracking-widest group-hover:text-[#e0e0e0] transition-colors"
              style={{ color: "#444444" }}
            >
              PHOL-LABS.HU
            </span>
          </a>

          <span style={{ color: "#2a2a2a" }}>·</span>

          {/* Email */}
          <a
            href="mailto:info@phol-labs.hu"
            className="flex items-center gap-1.5 group transition-all duration-200"
            aria-label="Email"
          >
            <Icon
              name="EnvelopeIcon"
              size={14}
              className="transition-colors duration-200"
              style={{ color: "#444444" }}
            />
            <span
              className="font-mono text-[10px] tracking-widest group-hover:text-[#e0e0e0] transition-colors"
              style={{ color: "#444444" }}
            >
              MAIL
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}