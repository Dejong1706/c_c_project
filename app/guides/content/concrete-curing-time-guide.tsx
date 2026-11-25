import Link from "next/link";
import {
  Breadcrumb,
  GuideTable,
  NoteBox,
  link,
  listItem,
  paragraph,
  sectionHeading,
  td,
  th,
} from "./shared";

const faqs = [
  {
    question: "How long does concrete take to cure?",
    answer:
      "There is no single finish line. ACI's cold weather guide (ACI 306R-16, Table 8.8) estimates that concrete made with Type I cement and kept curing at 70°F reaches about 50% of its 28-day strength in 4 days, 65% in 8 days, 85% in 16 days and 95% in 23 days; at 50°F the same steps take about 6, 11, 21 and 29 days. Specified strength is normally tested at 28 days, and strength keeps rising slowly after that. Keep the concrete moist for at least the first 3 to 7 days.",
  },
  {
    question: "Can you walk on concrete after 24 hours?",
    answer:
      "As a rule of thumb, light foot traffic is fine after 24–48 hours in mild weather, and later in cold weather. Products differ: Quikrete lists a walk-on time of 10 to 12 hours for its Quikrete 5000 High Early Strength mix. Follow the bag or your ready-mix supplier.",
  },
  {
    question: "What happens if concrete dries too fast?",
    answer:
      "Without enough moisture the cement cannot keep reacting. NRMCA (CIP 11) says concrete in a dry environment can lose as much as 50 percent of its potential strength compared with moist-cured concrete, and that lack of curing leaves a less durable surface with poor resistance to wear. Proper curing reduces the potential for crazing, dusting and scaling.",
  },
  {
    question: "How does cold weather affect concrete curing?",
    answer:
      "It slows setting and strength gain: NRMCA (CIP 27) gives a rule of thumb that a 20°F drop in concrete temperature roughly doubles the setting time. The bigger danger is freezing. NRMCA says the potential strength of frozen concrete can be reduced by more than 50%, so protect it until it reaches 500 psi — within 48 hours for most well-proportioned mixes at 50°F (ACI 306R-16). ACI recommends a protection period of 3 days for normal-set concrete that will be exposed to the weather but carries no load, and longer if it carries load.",
  },
  {
    question: "When can you drive on a new concrete slab?",
    answer:
      "A common rule of thumb is 7 days for passenger cars at about 70°F and 28 days for heavy trucks. In cooler weather wait longer: in ACI 306R-16 Table 8.8, concrete at 50°F needs about 11 days to reach the 65% of 28-day strength it reaches in 8 days at 70°F. If your supplier or engineer gives a required strength, go by that rather than by days.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Concrete Curing Time Guide",
  description:
    "How long concrete takes to cure: days to 50–95% strength at 70°F and 50°F (ACI), moist curing time, freezing risk, and when to walk or drive on it.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/concrete-curing-time-guide" },
  datePublished: "2026-06-25",
  dateModified: "2026-11-25",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

export default function ConcreteCuringTimeGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article style={{ maxWidth: "680px" }}>
        <Breadcrumb current="Concrete Curing Time Guide" />
        <header style={{ marginBottom: "24px" }}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 600,
              color: "var(--accent)",
              background: "var(--accent-light)",
              padding: "2px 8px",
              borderRadius: "20px",
            }}
          >
            Concrete
          </span>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 600,
              lineHeight: 1.3,
              margin: "10px 0",
              color: "var(--text-1)",
            }}
          >
            Concrete Curing Time Guide
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Curing is not the same as drying. Concrete gains strength through a
            chemical reaction called hydration — it needs moisture, not air, to
            reach its design strength. Let it dry out or freeze too early and
            the concrete can be permanently weaker. Here&apos;s how long each
            stage takes and what affects it.
          </p>
        </header>


        <h2 style={sectionHeading}>Strength gain timeline</h2>
        <p style={paragraph}>
          How fast concrete gains strength depends on the cement, the mix and the temperature. ACI&apos;s guide to cold weather concreting (ACI 306R-16, Table 8.8) gives these conservative estimates for adequately cured and protected concrete made with Type I cement and no fly ash:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Share of 28-day strength</th>
              <th style={th}>At 70°F (21°C)</th>
              <th style={th}>At 50°F (10°C)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>50%</td>
              <td style={td}>4 days</td>
              <td style={td}>6 days</td>
            </tr>
            <tr>
              <td style={td}>65%</td>
              <td style={td}>8 days</td>
              <td style={td}>11 days</td>
            </tr>
            <tr>
              <td style={td}>85%</td>
              <td style={td}>16 days</td>
              <td style={td}>21 days</td>
            </tr>
            <tr>
              <td style={td}>95%</td>
              <td style={td}>23 days</td>
              <td style={td}>29 days</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          100% here means the strength after 28 days of curing at 70°F. ACI calls these times only approximate: the data come from 3,000–5,000 psi concrete, and values for the actual mix should be obtained. In the same table, Type II cement is slower (85% takes 18 days at 70°F and 28 at 50°F) and Type III is faster (12 and 16 days).
        </NoteBox>
        <p style={paragraph}>
          Bagged mixes vary too. These are the typical results on Quikrete&apos;s data sheets, with the percentage of the 28-day figure worked out:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Age</th>
              <th style={th}>Concrete Mix (1101)</th>
              <th style={th}>Quikrete 5000 (1007)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>1 day</td>
              <td style={td}>—</td>
              <td style={td}>1,500 psi (30%)</td>
            </tr>
            <tr>
              <td style={td}>3 days</td>
              <td style={td}>—</td>
              <td style={td}>2,500 psi (50%)</td>
            </tr>
            <tr>
              <td style={td}>7 days</td>
              <td style={td}>2,500 psi (63%)</td>
              <td style={td}>3,500 psi (70%)</td>
            </tr>
            <tr>
              <td style={td}>28 days</td>
              <td style={td}>4,000 psi</td>
              <td style={td}>5,000 psi</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          In most cases the strength requirement for concrete is set at an age of 28 days (NRMCA CIP 35). That is a test age, not the maximum: most of the strength gain takes place in the first month, but hydration continues more slowly for many years (American Cement Association).
        </NoteBox>

        <h2 style={sectionHeading}>How temperature affects curing</h2>
        <p style={paragraph}>
          Warmer concrete gains strength faster early on, but later strength may be reduced. Cooler concrete gains it more slowly. NRMCA (CIP 11) says placed concrete should be kept above 50°F (10°C).
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Temperature</th>
              <th style={th}>Effect</th>
              <th style={th}>What to do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Hot weather (well above 70°F)</td>
              <td style={td}>Sets quickly and loses moisture quickly; high early strength but lower later strength</td>
              <td style={td}>Start curing as soon as finishing is done; use windbreaks, shade or fogging</td>
            </tr>
            <tr>
              <td style={td}>About 70°F (21°C) and up</td>
              <td style={td}>At 70°F, about 85% of 28-day strength in 16 days</td>
              <td style={td}>Quikrete: cure for 5 days at 70°F or higher</td>
            </tr>
            <tr>
              <td style={td}>50–70°F (10–21°C)</td>
              <td style={td}>Slower — at 50°F, 85% takes about 21 days</td>
              <td style={td}>Quikrete: cure for 7 days</td>
            </tr>
            <tr>
              <td style={td}>40–50°F (4–10°C)</td>
              <td style={td}>Slower still; below the 50°F NRMCA recommends</td>
              <td style={td}>Insulate to keep the concrete above 50°F</td>
            </tr>
            <tr>
              <td style={td}>Below 40°F (4°C)</td>
              <td style={td}>Very little early strength gain, though some still occurs</td>
              <td style={td}>Cold weather precautions: insulating blankets, and no water curing if freezing is near</td>
            </tr>
            <tr>
              <td style={td}>Below 32°F (0°C)</td>
              <td style={td}>Freezing damage possible; fresh concrete freezes below about 25°F (−4°C)</td>
              <td style={td}>Protect until it reaches at least 500 psi</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          NRMCA (CIP 27) says the potential strength of frozen concrete can be reduced by more than 50% and that it will not be durable. Most well-proportioned mixes reach 500 psi within 48 hours at 50°F (ACI 306R-16). For concrete exposed to the weather but carrying no load, ACI&apos;s recommended protection period is 3 days with normal-set concrete and 2 days with accelerated-set, kept at or above the recommended placement temperature (55°F for sections under 12 in thick, per NRMCA). 500 psi is not enough for repeated freezing: NRMCA says to protect new, saturated concrete from freeze-thaw cycles until it reaches at least 3,500 psi.
        </NoteBox>

        <h2 style={sectionHeading}>How long to keep it moist</h2>
        <p style={paragraph}>
          Moist curing keeps water available so hydration can continue. NRMCA (CIP 11) says curing should last as long as the specification requires, or at least 3 to 7 days. For its bagged Concrete Mix, Quikrete says to start as soon as possible and continue for 5 days at 70°F or higher, or 7 days at 50–70°F. For a home slab in mild weather, 7 days covers both.
        </p>
        <p style={paragraph}>
          Stopping early matters: in the test data ACI cites, strength gain ceased as specimens taken out of moist curing dried (ACI 306R-16, section 8.5). NRMCA says concrete in a dry environment can lose as much as 50 percent of its potential strength compared with moist-cured concrete. Alternate wetting and drying is not an acceptable curing practice either.
        </p>
        <p style={paragraph}>Methods NRMCA lists include:</p>
        <ul style={{ paddingLeft: "20px", margin: "0 0 14px" }}>
          <li style={listItem}>
            <strong>Wet burlap (hessian) or cotton mats</strong> — keep them wet
            and weighted down
          </li>
          <li style={listItem}>
            <strong>Plastic sheeting</strong> — at least 4 mil, in direct contact
            with the surface, edges overlapped and taped; wrinkles can leave
            dark streaks
          </li>
          <li style={listItem}>
            <strong>Curing compound</strong> — applied right after the
            water sheen disappears following final finishing; wax-free types
            are recommended if the surface will be painted or covered
          </li>
          <li style={listItem}>
            <strong>Ponding water</strong> — thorough but rare, sometimes used
            on smaller slabs; only above freezing
          </li>
        </ul>
        <p style={paragraph}>
          The water added at mixing matters too: ACI&apos;s proportioning
          guide (ACI PRC-211.1-22) says its small-job mixtures give adequate
          strength and durability only if not so much water is added that the
          slump becomes excessively high. If you&apos;re mixing small batches
          yourself, the{" "}
          <Link href="/guides/how-to-mix-concrete-by-hand" style={link}>
            guide to mixing concrete by hand
          </Link>{" "}
          explains how much water to add per bag.
        </p>

        <h2 style={sectionHeading}>When to apply loads</h2>
        <p style={paragraph}>
          The right test is strength, not days. If your supplier or engineer gives a strength at which the slab can be used, follow that. Without one, these are common rules of thumb for residential flatwork, not a code or standard:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Load type</th>
              <th style={th}>Rule of thumb (about 70°F)</th>
              <th style={th}>Cooler weather (50–70°F)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Foot traffic</td>
              <td style={td}>24–48 hours</td>
              <td style={td}>48–72 hours</td>
            </tr>
            <tr>
              <td style={td}>Passenger vehicles</td>
              <td style={td}>7 days</td>
              <td style={td}>10 days or more</td>
            </tr>
            <tr>
              <td style={td}>Heavy vehicles / trucks</td>
              <td style={td}>28 days</td>
              <td style={td}>Longer than 28 days</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          Why wait longer in the cool: concrete at 50°F needs about 11 days to reach the 65% strength it reaches in 8 days at 70°F, and about 29 days instead of 23 to reach 95% (ACI 306R-16, Table 8.8). Below 50°F, wait longer still. For foundations and other structural work, ask an engineer before loading the concrete. For elevated slabs and beams, do not remove supports by the calendar: ACI says to base that on in-place strength, which the licensed design professional should specify.
        </NoteBox>

        {/* CTA */}
        <div
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "16px 20px",
            margin: "24px 0",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--text-1)",
              marginBottom: "6px",
            }}
          >
            Need to estimate concrete volume?
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-2)",
              marginBottom: "12px",
            }}
          >
            Use the Concrete Calculator to get cubic metres, cubic yards and a
            ready-mix truck count for your slab.
          </p>
          <Link
            href="/concrete-calculator"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Use the Concrete Calculator →
          </Link>
        </div>

        <h2 style={sectionHeading}>FAQ</h2>
        {faqs.map((f) => (
          <div key={f.question} style={{ marginBottom: "16px" }}>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--text-1)",
                marginBottom: "4px",
              }}
            >
              {f.question}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-2)",
                lineHeight: 1.7,
              }}
            >
              {f.answer}
            </p>
          </div>
        ))}
      </article>
    </>
  );
}
