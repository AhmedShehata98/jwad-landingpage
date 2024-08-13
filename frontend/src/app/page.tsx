import Hero from "./sections/Hero";
import Sales from "./sections/Sales";
import Why from "./sections/Why";
import Partners from "./sections/Partners";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Consultation from "./sections/Consultation";
import { Metadata } from "next";
import { getMetadata } from "@/services/api";
import { imagePrefixPath } from "@/utils/image-path";

export const revalidate = 1800;

export async function generateViewport() {
  const metadata = await getMetadata();
  const { seo } = metadata.data.attributes;

  return {
    viewport: seo?.[0].metaViewport,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata();
  const { seo, social_media_meta } = metadata.data.attributes;

  const twitter = social_media_meta?.find(
    (attr) => attr.socialNetwork === "Twitter"
  );

  const facebook = social_media_meta?.find(
    (attr) => attr.socialNetwork === "Facebook"
  );

  if (!seo || !social_media_meta)
    return {
      title: "جواد | وكالة تسويق",
      description:
        "تحسين الأعمال وبناء ثقة العملاء من خلال مراجعة جميع الأعمال وزيادة المبيعات من خلال خدمات التسويق والإعلان",
      keywords: "marketing agency, marketing, jwad",
    };

  return {
    title: seo?.[0].metaTitle,
    description: seo?.[0].metaDescription,
    keywords: seo?.[0].keywords,
    robots: seo?.[0].metaRobots,
    alternates: {
      canonical: seo?.[0].canonicalURL,
    },
    icons: imagePrefixPath(seo?.[0].metaImage.data.attributes.url),
    openGraph: {
      title: facebook?.title,
      description: facebook?.description,
      images: {
        url: imagePrefixPath(facebook?.image.data.attributes.url!),
        width: facebook?.image.data.attributes.width,
        height: facebook?.image.data.attributes.height,
        type: facebook?.image.data.attributes.mime,
        alt: facebook?.image.data.attributes.alternativeText,
      },
    },
    twitter: {
      title: twitter?.title,
      description: twitter?.description,
      images: {
        url: imagePrefixPath(twitter?.image.data.attributes.url!),
        width: twitter?.image.data.attributes.width,
        height: twitter?.image.data.attributes.height,
        type: twitter?.image.data.attributes.mime,
        alt: twitter?.image.data.attributes.alternativeText,
      },
    },
  };
}
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Sales />
        <Why />
        <Partners />
        <Services />
        <Portfolio />
        <Consultation />
      </main>
    </>
  );
}
