interface GuideSchemaProps {
  title: string;
  description: string;
  url: string;
}

export default function GuideSchema({ title, description, url }: GuideSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: "BuildCalc",
      url: "https://buildcalczone.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
