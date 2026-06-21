"use client";

import { useEffect, useState, type RefObject } from "react";

interface TocItem {
  id: string;
  text: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Matches the sticky header height (60px) plus a small gap, so headings don't
// land underneath it when scrolled to or highlighted as active.
const SCROLL_OFFSET = 92;

export default function TableOfContents({
  contentRef,
}: {
  contentRef: RefObject<HTMLDivElement | null>;
}) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const headings = Array.from(container.querySelectorAll<HTMLHeadingElement>("h2"));
    const usedIds = new Set<string>();
    const tocItems: TocItem[] = headings.map((heading) => {
      const base = slugify(heading.textContent ?? "");
      let id = base;
      let suffix = 1;
      while (usedIds.has(id)) {
        id = `${base}-${suffix++}`;
      }
      usedIds.add(id);
      heading.id = id;
      heading.style.scrollMarginTop = `${SCROLL_OFFSET}px`;
      return { id, text: heading.textContent ?? "" };
    });
    setItems(tocItems);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: `-${SCROLL_OFFSET}px 0px -80% 0px`, threshold: 0 }
    );
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [contentRef]);

  if (items.length === 0) return null;

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const heading = document.getElementById(id);
    if (!heading) return;

    setActiveId(id);
    heading.scrollIntoView({ behavior: "instant", block: "start" });
  };

  return (
    <nav aria-label="Table of contents">
      <div
        style={{
          fontSize: "11px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--accent-text)",
          marginBottom: "12px",
        }}
      >
        On this page
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((item) => {
          const active = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                style={{
                  display: "block",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  padding: "3px 0",
                  color: active ? "var(--accent)" : "var(--text-2)",
                  fontWeight: active ? 500 : 400,
                  textDecoration: "none",
                }}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
