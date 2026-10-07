interface FAQItem {
  question: string;
  answer: string;
}

export default function CalcFaq({ faqs }: { faqs: FAQItem[] }) {
  if (faqs.length === 0) return null;

  return (
    <section
      style={{
        marginTop: "40px",
        paddingTop: "24px",
        borderTop: "1px solid var(--border)",
        maxWidth: "720px",
      }}
    >
      <h2
        style={{
          fontSize: "18px",
          fontWeight: 600,
          color: "var(--text-1)",
          marginBottom: "12px",
        }}
      >
        Frequently asked questions
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {faqs.map((f, i) => (
          <details key={f.question} className="calc-faq" open={i === 0}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>

      <style>{`
        .calc-faq {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
        }
        .calc-faq summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          font-size: 15px;
          font-weight: 600;
          color: var(--text-1);
        }
        .calc-faq summary::-webkit-details-marker { display: none; }
        .calc-faq summary::after {
          content: "+";
          font-size: 18px;
          font-weight: 400;
          color: var(--accent);
          flex-shrink: 0;
        }
        .calc-faq[open] summary::after { content: "−"; }
        .calc-faq p {
          padding: 0 16px 14px;
          font-size: 14px;
          line-height: 1.7;
          color: var(--text-2);
        }
      `}</style>
    </section>
  );
}
