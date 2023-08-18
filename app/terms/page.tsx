import { allDocs } from "@/.contentlayer/generated";
import { MDXContent } from "next-docs-ui/mdx";
import { notFound } from "next/navigation";
import { Content } from "@/src/components/content";

export default function TermsPage() {
  const page = allDocs.find((docs) => docs.slug === "terms");
  if (!page) notFound();
  return (
    <main className="py-10">
      <MDXContent>
        <h1>{page.title}</h1>
        <Content code={page.body.code} />
      </MDXContent>
    </main>
  );
}
