"use client";

import { useRef, type ReactNode } from "react";
import TableOfContents from "./TableOfContents";

export default function GuideLayout({ children }: { children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        display: "flex",
        gap: "64px",
        alignItems: "flex-start",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div ref={contentRef} style={{ flex: 1, minWidth: 0, maxWidth: "680px", paddingBottom: "40px" }}>
        {children}
      </div>
      <aside
        className="guide-toc"
        style={{ width: "220px", flexShrink: 0, position: "sticky", top: "calc(60px + 2rem)" }}
      >
        <TableOfContents contentRef={contentRef} />
      </aside>

      <style>{`
        @media (max-width: 1024px) {
          .guide-toc { display: none; }
        }
      `}</style>
    </div>
  );
}
