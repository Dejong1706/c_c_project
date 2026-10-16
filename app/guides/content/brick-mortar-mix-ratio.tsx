import Link from "next/link";
import { Breadcrumb, GuideTable, IntroText, NoteBox, formula, link, listItem, paragraph, sectionHeading, td, th } from "./shared";

const faqs = [
  {
    question: "What is the difference between Type N, Type S and Type M mortar?",
    answer:
      "They are the four mortar types in ASTM C270, from strongest (M) to weakest (O). In a cement-lime mortar mixed to the standard's proportion specification, each type uses 1 part cement plus a set range of hydrated lime — ¼ part for Type M, over ¼ to ½ for Type S, over ½ to 1¼ for Type N and over 1¼ to 2½ for Type O — with sand no more than 3 times the combined volume of cement and lime. Mortar specified by properties must instead reach a laboratory 28-day compressive strength of at least 2,500 psi (M), 1,800 psi (S), 750 psi (N) or 350 psi (O). The Brick Industry Association recommends Type N for most above-grade brickwork, including veneer; Type S for reinforced or loadbearing exterior walls; Type M for foundation and retaining walls, with Type S as the alternate; and Type O as an alternate for interior partitions and for repointing older brickwork.",
  },
  {
    question: "Which is stronger, Type S or Type N mortar?",
    answer:
      "Type S has the higher minimum: 1,800 psi versus 750 psi under the ASTM C270 property specification, which applies to mortar mixed and tested in a laboratory, not to mortar sampled on site. Stronger is not automatically better. The Brick Industry Association advises choosing the type with the lowest compressive strength that meets the project's requirements, recommends Type N for normal brickwork including most veneer, and Type S for stronger applications such as reinforced or loadbearing exterior walls and high-wind or seismic areas.",
  },
  {
    question: "What is the correct mortar mix ratio for bricklaying?",
    answer:
      "In the US, the Brick Industry Association recommends Type N mortar for normal brickwork; a common Type N cement-lime mix is 1 part cement, 1 part hydrated lime and 6 parts sand by volume. In the UK, the Mineral Products Association's table of prescribed mortars lists designation (iii) — 1:1:5 to 6 cement:lime:sand, or 1:5 to 6 cement:sand with or without air entrainment — for moderate exposure, and designations (i) and (ii) (1:0 to ¼:3 and 1:½:4 to 4½) for severe exposure. More cement raises compressive strength; more lime or more sand lowers it.",
  },
  {
    question: "Can I use the same mortar mix for all brickwork?",
    answer:
      "Not always. The Brick Industry Association notes that no single mortar is best for all purposes and recommends more durable types for more severe exposures, such as Type M for foundation and retaining walls. It also advises keeping the number of different mortars on a job to a minimum, and the same mortar is not required throughout a project.",
  },
  {
    question: "What does a 1:5 mortar mix mean?",
    answer:
      "A 1:5 mortar mix means 1 part cement to 5 parts sand, measured by volume, plus enough water to make it workable. In the UK prescribed-mortar table it falls under designation (iii), which lists 1:5 to 6 cement:sand (with or without air entrainment) for moderate exposure. Use the lower sand figure with sands that contain more fines.",
  },
  {
    question: "How much mortar do I need per square metre of brickwork?",
    answer:
      "The joints alone in a single-leaf wall of standard 215×102.5×65mm bricks with 10mm joints hold about 17.6 litres of mortar per square metre (about 0.3 litres per brick at about 60 bricks per m²). That is joint volume only. Mortar used to fill frogs and mortar lost while laying come on top, so add a waste allowance, and for bagged mortar check the manufacturer's stated coverage.",
  },
  {
    question: "Can I use concrete mix instead of mortar for bricks?",
    answer:
      "No. Bagged concrete mix is a blend of cement and aggregates made for pours 2 in (50 mm) thick or more, and it is not sold as meeting the mortar standard ASTM C270. Masonry mortar is made from cementitious material (cement and lime, or masonry or mortar cement), sand and water. Buy a product sold as meeting ASTM C270 for the type you need — for example, Quikrete Mortar Mix is formulated as Type N and Quikrete Mason Mix as Type S — or, in the UK, a mortar to BS EN 998-2.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mortar Mix Ratio for Bricks: Type N, S, M and Which Mix to Use",
  description:
    "Mortar mix ratios for bricklaying. Covers Type N, S, M and O mortar (ASTM C270), UK mortar designations (i) to (iv), cement to lime to sand ratios, which type to use for each job, and how much water to add.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/brick-mortar-mix-ratio" },
  datePublished: "2026-06-16",
  dateModified: "2026-10-16",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

export default function BrickMortarMixRatioGuide() {
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
        <Breadcrumb current="Mortar Mix Ratio for Bricks: Type N, S, M and Which Mix to Use" />
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
            Masonry
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
            Mortar Mix Ratio for Bricks: Type N, S, M and Which Mix to Use
          </h1>
          <IntroText>
            Mortar holds brickwork together, but no single mix is best for
            every job: the right one depends on where the wall is, how exposed
            it is and what load it carries. Here&apos;s how to match the ratio
            to the job, using the US mortar types and the UK designations.
          </IntroText>
        </header>

        <NoteBox>
          <strong>Quick answer:</strong> for most brick walls above ground, use
          Type N mortar — commonly 1 part cement, 1 part hydrated lime, 6 parts
          sand. For foundation and retaining walls, the Brick Industry
          Association recommends Type M, with Type S (for example 1 part cement,
          ½ part lime, 4½ parts sand) as the alternate. In the UK, the general
          mix for moderate exposure is designation (iii): 1:1:5 to 6
          cement:lime:sand.
        </NoteBox>

        <h2 style={sectionHeading}>Mortar types: N, S, M and O</h2>
        <p style={paragraph}>
          In the US, mortar is specified by type under ASTM C270 (current
          edition C270-26). The standard can be applied in two ways: a
          proportion specification, which sets the volumes of cement, lime and
          sand, and a property specification, which sets a minimum strength,
          water retention and air content for mortar tested in a laboratory.
          If a project names neither, the proportion specification governs.
          Bagged mortar mix and masonry cement are sold labelled with these
          letters, so this is the first thing to decide before you buy or mix
          anything.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Type</th>
              <th style={th}>Typical cement:lime:sand</th>
              <th style={th}>Min. 28-day strength (lab-tested)</th>
              <th style={th}>BIA-recommended use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>
                <strong>M</strong>
              </td>
              <td style={td}>1 : ¼ : 3¾</td>
              <td style={td}>2,500 psi (17.2 MPa)</td>
              <td style={td}>
                Foundation and retaining walls, sewers and manholes
              </td>
            </tr>
            <tr>
              <td style={td}>
                <strong>S</strong>
              </td>
              <td style={td}>1 : ½ : 4½</td>
              <td style={td}>1,800 psi (12.4 MPa)</td>
              <td style={td}>
                Reinforced or loadbearing exterior walls, high-wind and seismic
                areas; alternate for foundation and retaining walls
              </td>
            </tr>
            <tr>
              <td style={td}>
                <strong>N</strong>
              </td>
              <td style={td}>1 : 1 : 6</td>
              <td style={td}>750 psi (5.2 MPa)</td>
              <td style={td}>
                Above-grade veneer and non-loadbearing walls, parapets,
                chimneys, interior walls — the general-purpose choice
              </td>
            </tr>
            <tr>
              <td style={td}>
                <strong>O</strong>
              </td>
              <td style={td}>1 : 2 : 9</td>
              <td style={td}>350 psi (2.4 MPa)</td>
              <td style={td}>
                Alternate for interior partitions; often used for repointing
                older brickwork
              </td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          The mixes shown are typical, not the only valid ones. ASTM C270&apos;s
          proportion specification keeps cement at 1 part and lets the lime
          vary within a band for each type — ¼ part for Type M, over ¼ to ½ for
          Type S, over ½ to 1¼ for Type N and over 1¼ to 2½ for Type O — with
          sand measured damp and loose. The strengths are minimums from the
          property specification for laboratory-prepared mortar; mortar
          sampled on site is not tested against them.
        </p>

        <h2 style={sectionHeading}>Stronger isn&apos;t always better</h2>
        <p style={paragraph}>
          If you&apos;re looking for a &quot;strong mortar mix&quot;, it&apos;s
          worth knowing that the Brick Industry Association&apos;s basic rule
          is to choose the mortar type with the lowest compressive strength
          that meets the project&apos;s requirements. In most brickwork, bond
          strength, workability and water retention matter more than
          compressive strength, and higher-lime mortars show more plastic flow,
          which lets the masonry accommodate slight movement.
        </p>
        <p style={paragraph}>
          Type M in particular is a high-strength mortar but not very workable,
          so keep it for the foundation and retaining walls where it is
          recommended. When repointing, the new mortar should be no stronger
          than the existing mortar; a stronger repointing mortar can cause
          spalling in older brickwork.
        </p>

        <h2 style={sectionHeading}>Bagged mortar: mortar mix vs masonry cement</h2>
        <p style={paragraph}>
          Most people don&apos;t batch mortar from separate cement, lime and
          sand. There are two common bagged options, and they are easy to
          confuse:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>
            <strong>Mortar mix (pre-blended)</strong> — cementitious materials
            and sand already blended. Just add water. Sold by type: Quikrete
            Mortar Mix, for example, is formulated as Type N and Quikrete Mason
            Mix as Type S, in bag sizes that include 60 and 80 lb.
          </li>
          <li style={listItem}>
            <strong>Masonry cement (US, ASTM C91)</strong> — a proprietary blend
            of cement and plasticising materials such as limestone or hydrated
            lime, with no sand. You add sand on site but no extra lime: under
            ASTM C270, masonry cement is used alone with sand, at no more than 3
            parts sand per part masonry cement by volume. Quikrete&apos;s Type N
            masonry cement, for example, is mixed one 70 lb bag to 240 lb of
            mason&apos;s sand.
          </li>
        </ul>
        <NoteBox>
          Don&apos;t use concrete mix as mortar. Bagged concrete mix is cement
          and aggregates designed for pours 2 in (50 mm) thick or more, and it
          is not sold as meeting the mortar standard ASTM C270.
          (For footings and slabs, where you do want concrete, see{" "}
          <Link href="/guides/how-to-mix-concrete-by-hand" style={link}>
            how to mix concrete by hand
          </Link>
          .)
        </NoteBox>

        <h2 style={sectionHeading}>UK mortar designations: cement, lime and sand</h2>
        <p style={paragraph}>
          In the UK, prescribed (site-proportioned) mortars are described by
          designation (i) to (iv), with an indicative strength class given by
          PD 6678 and the National Annex to BS EN 998-2. The Mineral Products
          Association&apos;s table below gives the traditional proportions by
          volume. Each designation can be made with lime, or as a cement:sand
          mix with or without air entrainment. The higher the sand figure per
          part cement, the lower the mortar class.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Designation</th>
              <th style={th}>Cement:lime:sand</th>
              <th style={th}>Cement:sand (with or without air entrainment)</th>
              <th style={th}>Mortar class</th>
              <th style={th}>Exposure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>(i)</td>
              <td style={td}>1 : 0 to ¼ : 3</td>
              <td style={td}>1 : 3</td>
              <td style={td}>M12</td>
              <td style={td}>Severe</td>
            </tr>
            <tr>
              <td style={td}>(ii)</td>
              <td style={td}>1 : ½ : 4 to 4½</td>
              <td style={td}>1 : 3 to 4</td>
              <td style={td}>M6</td>
              <td style={td}>Severe</td>
            </tr>
            <tr>
              <td style={td}>(iii)</td>
              <td style={td}>1 : 1 : 5 to 6</td>
              <td style={td}>1 : 5 to 6</td>
              <td style={td}>M4</td>
              <td style={td}>Moderate</td>
            </tr>
            <tr>
              <td style={td}>(iv)</td>
              <td style={td}>1 : 2 : 8 to 9</td>
              <td style={td}>1 : 7 to 8</td>
              <td style={td}>M2</td>
              <td style={td}>Passive</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          These ratios are by volume, not weight. Where the sand is given as a
          range, use the lower figure with sands that contain more fines and the
          higher figure with sands that contain fewer. The strength of a
          prescribed mix varies with the sand, so the mortar class is
          indicative only; if a definite strength is required, use a designed
          mortar or ask the manufacturer.
        </NoteBox>
        <p style={paragraph}>
          The sand itself should be a mortar sand: ASTM C144 in the US, or fine
          aggregate to BS EN 13139, which UK factory-produced mortars use.
        </p>

        <h2 style={sectionHeading}>Adding lime</h2>
        <p style={paragraph}>
          Hydrated lime contributes workability, water retention, elasticity
          and extent of bond. Because lime hardens slowly on contact with carbon
          dioxide, water and air that get into small hairline cracks react with
          it and can seal them — a process known as autogenous healing.
        </p>
        <p style={paragraph}>
          Lime does not replace the cement. In both the ASTM C270 types and the
          UK designations, cement stays at 1 part, and the lime and sand go up
          together as the mix gets weaker. The trade-off is strength: compressive
          strength rises with cement content and falls as the lime, water or
          sand content increases, which is why the high-lime mixes — Type O and
          designation (iv) — are the weakest. For a cement-lime mortar mixed to
          the ASTM C270 proportion specification, the sand limit is:
        </p>
        <div style={formula}>
          sand ≤ 3 × (cement + lime), by volume
        </div>

        <h2 style={sectionHeading}>Air entrainment as a lime alternative</h2>
        <p style={paragraph}>
          Instead of lime, a mortar can get its workability from air
          entrainment — the UK designation table lists cement:sand mixes
          &quot;with or without air entrainment&quot; alongside the
          cement:lime:sand mixes. Air comes at a cost: as air content increases,
          compressive strength and bond strength fall. ASTM C270 therefore
          limits air content, and the Brick Industry Association does not
          recommend air-entraining admixtures in cement-lime mortar or combining
          two air-entraining materials in one mix. If you use an admixture, use
          one that complies with ASTM C1384 and whose effect on the mortar is
          known.
        </p>

        <h2 style={sectionHeading}>How much water to add</h2>
        <p style={paragraph}>
          Mortar is not like concrete. The Brick Industry Association advises
          mixing it with the maximum amount of water consistent with
          workability, because a wetter mortar bonds better to absorbent brick;
          the mason judges this by how the mortar responds to the trowel.
          Excessive water, though, reduces both workability and bond strength.
          For bagged mortar, follow the bag: Quikrete, for example, starts at
          about 5 quarts (4.7 L) of water per 80 lb bag of Mortar Mix and
          expects the maximum to stay below 6 quarts (5.7 L).
        </p>
        <p style={paragraph}>
          In a mechanical mixer, BIA&apos;s sequence is about half the water,
          about half the sand and all the lime, then the cement and the rest of
          the sand, then the rest of the water, mixing for 3 to 5 minutes. Water
          lost to evaporation can be replaced by retempering, but all mortar
          should be used within 2½ hours of mixing (2 hours in hot weather), and
          mortar that has begun to set should not be used.
        </p>

        <h2 style={sectionHeading}>How much mortar per square metre</h2>
        <p style={paragraph}>
          In a single-leaf wall of standard bricks with 10mm joints, the bed
          joints (horizontal) and perpend joints (vertical) hold about 17.6
          litres of mortar per square metre. That is the joint volume only.
          Mortar used to fill frogs and mortar lost while laying come on top,
          so allow a waste margin, and for bagged mortar check the
          manufacturer&apos;s stated coverage — Quikrete, for example, rates an
          80 lb bag of its Mortar Mix at up to 37 standard US bricks.
        </p>
        <p style={paragraph}>
          The{" "}
          <Link href="/mortar-calculator" style={link}>
            mortar calculator
          </Link>{" "}
          works out the wet mortar volume from the joint geometry plus your
          waste allowance, then converts it to cement, lime and sand (applying
          a 1.3 dry-volume factor) and to a pre-mixed bag count. The bag count
          allows about 10.5 litres of joint volume per 80 lb bag, which leaves
          headroom for frogs and droppings; the cement, lime and sand figures
          do not include that extra, so raise the waste allowance if your
          bricks have frogs to fill.
        </p>
        <NoteBox>
          Mortar volume varies with joint width and brick size. The figures
          above are for standard bricks (215×102.5×65mm) with 10mm joints, laid
          as a single leaf. Larger bricks need fewer joints per square metre but
          are deeper, so the total can go either way: with 10mm joints, a maxi
          brick wall (290×140×90mm) works out at about 18.2 litres per square
          metre and a jumbo brick wall (290×140×140mm) at about 13.7.
        </NoteBox>

        <h2 style={sectionHeading}>Common mistakes</h2>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>
            <strong>Choosing a stronger mix than the job needs</strong> — the
            Brick Industry Association recommends the type with the lowest
            compressive strength that meets the project&apos;s requirements
          </li>
          <li style={listItem}>
            <strong>Too much water</strong> — mortar should be as wet as
            workability allows, but excessive water reduces both workability
            and bond strength
          </li>
          <li style={listItem}>
            <strong>Inconsistent batching</strong> — measure sand with a box or
            bucket rather than by eye, and add the same quantities in the same
            order every batch
          </li>
          <li style={listItem}>
            <strong>Using mortar too late</strong> — retempering is fine, but
            use all mortar within 2½ hours of mixing and never once it has
            begun to set
          </li>
          <li style={listItem}>
            <strong>Working in cold conditions without precautions</strong> —
            in the US, TMS 602 requires cold-weather protection when the
            temperature is below 40°F (4.4°C); in the UK, the Mineral Products
            Association advises against building masonry while it is below 3°C
            and falling. Discard any mortar that has frozen
          </li>
        </ul>

        <h2 style={sectionHeading}>Putting it together</h2>
        <p style={paragraph}>
          Before mixing mortar, it helps to know exactly how many bricks
          you&apos;re laying and how much material you&apos;ll need. Our{" "}
          <Link href="/brick-calculator" style={link}>
            brick calculator
          </Link>{" "}
          gives brick count and pallet estimates for any wall size, our{" "}
          <Link href="/mortar-calculator" style={link}>
            mortar calculator
          </Link>{" "}
          works out cement, lime, sand and bag counts for Type N, S, M or O,
          and the{" "}
          <Link href="/guides/how-many-bricks-per-square-metre" style={link}>
            bricks per square metre guide
          </Link>{" "}
          covers how coverage varies by brick type.
        </p>

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
