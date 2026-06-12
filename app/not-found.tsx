import Link from "next/link";
import { Home, Calculator } from "lucide-react";

const calculators = [
  { href: "/concrete-calculator", label: "Concrete calculator" },
  { href: "/tile-calculator", label: "Tile calculator" },
  { href: "/rebar-calculator", label: "Rebar calculator" },
  { href: "/unit-converter", label: "Unit converter" },
];

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "72px",
          fontWeight: 600,
          color: "var(--accent)",
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        404
      </div>

      <h1
        style={{
          fontSize: "20px",
          fontWeight: 600,
          color: "var(--text-1)",
          marginBottom: "8px",
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          fontSize: "14px",
          color: "var(--text-2)",
          marginBottom: "28px",
          maxWidth: "380px",
          lineHeight: 1.6,
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved. Try one of our calculators below.
      </p>

      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: 500,
          background: "var(--accent)",
          color: "white",
          textDecoration: "none",
          marginBottom: "32px",
        }}
      >
        <Home size={15} /> Back to home
      </Link>

      <div style={{ width: "100%", maxWidth: "460px" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "var(--text-3)",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Popular calculators
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
          }}
        >
          {calculators.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 14px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "13px",
                color: "var(--text-1)",
                fontWeight: 500,
                transition: "border-color 0.15s",
              }}
            >
              <Calculator size={14} color="var(--accent)" />
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
