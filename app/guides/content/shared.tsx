import type { ReactNode } from "react";
import Link from "next/link";

export const sectionHeading: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 600,
  color: "var(--text-1)",
  margin: "32px 0 12px",
  paddingBottom: "8px",
  borderBottom: "0.5px solid #dddbd2",
};
export const paragraph: React.CSSProperties = {
  fontSize: "15px",
  color: "var(--text-2)",
  lineHeight: 1.8,
  marginBottom: "14px",
};
export const listItem: React.CSSProperties = {
  fontSize: "15px",
  color: "var(--text-2)",
  lineHeight: 1.8,
  marginBottom: "6px",
};
export const formula: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  padding: "14px 18px",
  fontSize: "15px",
  color: "var(--text-1)",
  margin: "12px 0",
};
export const link: React.CSSProperties = {
  color: "var(--accent)",
  textDecoration: "underline",
};
export const table: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
};
export const th: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 12px",
  borderBottom: "1px solid var(--border)",
  color: "var(--text-1)",
  fontWeight: 600,
  background: "var(--accent-light)",
};
export const td: React.CSSProperties = {
  padding: "8px 12px",
  borderBottom: "1px solid var(--border)",
  color: "var(--text-2)",
};

const tableWrap: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: "10px",
  overflow: "hidden",
  margin: "12px 0 20px",
};

export function GuideTable({ children }: { children: ReactNode }) {
  return (
    <div style={tableWrap}>
      <table style={table}>{children}</table>
    </div>
  );
}

export function IntroText({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontSize: "15px",
        color: "var(--text-2)",
        lineHeight: 1.7,
        background: "var(--accent-light)",
        borderLeft: "3px solid var(--accent)",
        borderRadius: "0 8px 8px 0",
        padding: "12px 16px",
      }}
    >
      {children}
    </p>
  );
}

export function NoteBox({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "flex-start",
        fontSize: "13px",
        color: "var(--text-3)",
        lineHeight: 1.7,
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "12px 16px",
        margin: "12px 0 20px",
      }}
    >
      <i
        className="ti ti-info-circle"
        style={{
          fontSize: "16px",
          color: "var(--accent)",
          flexShrink: 0,
          marginTop: "1px",
        }}
      />
      <span>{children}</span>
    </div>
  );
}

const crumbPill: React.CSSProperties = {
  fontSize: "12px",
  color: "var(--text-2)",
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: "20px",
  padding: "4px 12px",
  textDecoration: "none",
};

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        flexWrap: "wrap",
        marginBottom: "16px",
      }}
    >
      <Link href="/" style={crumbPill}>
        Home
      </Link>
      <span style={{ color: "var(--text-3)", fontSize: "12px" }}>/</span>
      <Link href="/guides" style={crumbPill}>
        Guides
      </Link>
      <span style={{ color: "var(--text-3)", fontSize: "12px" }}>/</span>
      <span
        style={{
          ...crumbPill,
          color: "var(--accent-text)",
          background: "var(--accent-light)",
          border: "1px solid var(--accent-light)",
        }}
      >
        {current}
      </span>
    </nav>
  );
}
