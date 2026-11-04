import Link from "next/link";
import { BookOpen } from "lucide-react";

export type RelatedGuide = { href: string; label: string };

/** "Related guides" pill list shown under each calculator, above the FAQ. */
export default function RelatedGuides({ guides }: { guides: RelatedGuide[] }) {
  return (
    <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border)", maxWidth: "560px" }}>
      <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
        Related guides
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {guides.map((g) => (
          <Link key={g.href} href={g.href} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--accent-text)", background: "var(--accent-light)", padding: "8px 14px", borderRadius: "8px", textDecoration: "none" }}>
            <BookOpen size={13} color="var(--accent)" aria-hidden="true" />
            {g.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
