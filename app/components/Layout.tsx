"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Ruler, BookOpen, ArrowLeftRight, Menu, X } from "lucide-react";
import { useState } from "react";

const calculators = [
  {
    href: "/concrete-calculator",
    label: "Concrete calculator",
    group: "Concrete",
  },
  {
    href: "/concrete-bags",
    label: "Concrete bag calculator",
    group: "Concrete",
  },
  {
    href: "/rebar-calculator",
    label: "Rebar calculator",
    group: "Reinforcement",
  },
  {
    href: "/brick-calculator",
    label: "Brick calculator",
    group: "Masonry",
  },
  {
    href: "/tile-calculator",
    label: "Tile calculator",
    group: "Finishing",
  },
  {
    href: "/paint-calculator",
    label: "Paint calculator",
    group: "Finishing",
  },
  {
    href: "/excavation-calculator",
    label: "Excavation calculator",
    group: "Earthworks",
  },
  {
    href: "/unit-converter",
    label: "Unit converter",
    group: "Tools",
  },
  {
    href: "/fence-calculator",
    label: "Fence calculator",
    group: "Earthworks",
  },
];

const groups = [
  "Concrete",
  "Reinforcement",
  "Masonry",
  "Finishing",
  "Earthworks",
  "Tools",
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <nav style={{ padding: "16px 12px" }}>
      {/* Guides 링크 추가 */}
      <div style={{ marginBottom: "22px" }}>
        <Link
          href="/guides"
          onClick={() => setMobileOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 10px 8px 14px",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: pathname.startsWith("/guides") ? 600 : 400,
            color: pathname.startsWith("/guides")
              ? "var(--accent-text)"
              : "var(--text-2)",
            background: pathname.startsWith("/guides")
              ? "var(--accent-light)"
              : "transparent",
            textDecoration: "none",
            borderLeft: pathname.startsWith("/guides")
              ? "3px solid var(--accent)"
              : "3px solid transparent",
          }}
        >
          <BookOpen size={13} />
          Guides
        </Link>
      </div>
      {groups.map((group) => {
        const items = calculators.filter((c) => c.group === group);
        if (!items.length) return null;
        return (
          <div key={group} style={{ marginBottom: "22px" }}>
            <p
              style={{
                fontSize: "10px",
                fontWeight: 600,
                color: "var(--text-3)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0 10px",
                marginBottom: "6px",
              }}
            >
              {group}
            </p>
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "8px 10px 8px 14px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--accent-text)" : "var(--text-2)",
                    background: isActive
                      ? "var(--accent-light)"
                      : "transparent",
                    textDecoration: "none",
                    marginBottom: "2px",
                    transition: "background 0.1s, color 0.1s",
                    borderLeft: isActive
                      ? "3px solid var(--accent)"
                      : "3px solid transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        );
      })}
    </nav>
  );

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* Top nav */}
      <header
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
          height: "60px",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          position: "sticky",
          top: 0,
          zIndex: 50,
          gap: "8px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "var(--accent)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Ruler size={16} color="white" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <span
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--text-1)",
                lineHeight: 1,
              }}
            >
              BuildCalc
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "var(--text-3)",
                lineHeight: 1,
              }}
            >
              Free construction calculators
            </span>
          </div>
        </Link>

        {/* 데스크탑 nav 링크 */}
        <div className="nav-links" style={{ display: "flex", gap: "4px" }}>
          <Link
            href="/guides"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "6px 12px",
              borderRadius: "7px",
              fontSize: "13px",
              color: "var(--text-2)",
              textDecoration: "none",
              background: pathname.startsWith("/guides")
                ? "var(--surface-2)"
                : "transparent",
            }}
          >
            <BookOpen size={14} /> Guides
          </Link>
          <Link
            href="/unit-converter"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "6px 12px",
              borderRadius: "7px",
              fontSize: "13px",
              color: "var(--text-2)",
              textDecoration: "none",
              background:
                pathname === "/unit-converter"
                  ? "var(--surface-2)"
                  : "transparent",
            }}
          >
            <ArrowLeftRight size={14} /> Converter
          </Link>
        </div>

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="hamburger-btn"
          aria-label="Open menu"
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "6px 8px",
            cursor: "pointer",
            color: "var(--text-2)",
            lineHeight: 1,
          }}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <div style={{ display: "flex", flex: 1 }}>
        {/* 데스크탑 사이드바 */}
        <aside
          className="desktop-sidebar"
          style={{
            width: "224px",
            background: "var(--surface)",
            borderRight: "1px solid var(--border)",
            position: "sticky",
            top: "60px",
            height: "calc(100vh - 60px)",
            overflowY: "auto",
            flexShrink: 0,
          }}
        >
          {sidebarContent}
        </aside>

        {/* 모바일 드로어 오버레이 */}
        {mobileOpen && (
          <div
            style={{ position: "fixed", inset: 0, zIndex: 40, display: "flex" }}
          >
            <div
              style={{
                background: "var(--surface)",
                width: "260px",
                borderRight: "1px solid var(--border)",
                overflowY: "auto",
                paddingTop: "60px",
              }}
            >
              {sidebarContent}
            </div>
            <div
              style={{ flex: 1, background: "rgba(0,0,0,0.3)" }}
              onClick={() => setMobileOpen(false)}
            />
          </div>
        )}

        {/* 메인 콘텐츠 */}
        <main
          className="main-content"
          style={{ flex: 1, minWidth: 0, width: "100%" }}
        >
          {children}
        </main>
      </div>

      <footer
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          padding: "20px 28px",
          fontSize: "12px",
          color: "var(--text-3)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <span>© 2026 BuildCalc — Free construction calculators</span>
        <span>Results are estimates for planning purposes only.</span>
      </footer>

      <style>{`
        .main-content { padding: 32px 28px; }
        @media (max-width: 768px) {
          .desktop-sidebar { display: none !important; }
          .nav-links { display: none !important; }
          .hamburger-btn { display: block !important; }
          .main-content { padding: 20px 16px; }
        }
        @media (max-width: 480px) {
          .main-content { padding: 16px 12px; }
        }
      `}</style>
    </div>
  );
}
