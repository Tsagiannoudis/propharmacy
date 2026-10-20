import { notFound } from "next/navigation";
import { buyingGuidesData } from "../../data/buyingGuidesData";
import { GuideClientView } from "./GuideClientView";

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(buyingGuidesData).map((slug) => ({
    slug,
  }));
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = buyingGuidesData[slug];

  if (!guide) {
    notFound();
  }

  return <GuideClientView guide={guide} />;
}
