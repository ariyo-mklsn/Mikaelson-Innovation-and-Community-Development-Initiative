"use client"
import AnimatedSection from "@/components/animated-section";
import EcosystemSection from "@/features/website/components/ecosystem-section";
import { ExploreMore } from "@/features/website/components/explore-more";
import HomeHero from "@/features/website/components/hero";
import ImpactSection from "@/features/website/components/impact-section";
import MediaStories from "@/features/website/components/media-stories";
import { useIsMobile } from "@/hooks/use-mobile";

export const metadata: Metadata = {
  title: "Mikaelson Initiative | Elevating Humanity Through Technology",
  description:
    "Structured youth leadership and personal development programs equipping African students with discipline, innovation skills, and accountability systems.",
  keywords: [
    "youth leadership Nigeria",
    "student leadership programs Africa",
    "personal development for students",
    "African youth initiative",
    "leadership training Nigeria",
    "student growth programs",
    "Mikaelson Initiative",
    "youth development Africa",
    "accountability systems students",
    "leadership skills students Nigeria",
  ],
  authors: [{ name: "Mikaelson Initiative", url: "https://mikaelsoninitiative.org" }],
  alternates: {
    canonical: "https://mikaelsoninitiative.org",
  },
  openGraph: {
    title: "Youth Leadership Programs in Nigeria | Mikaelson Initiative",
    description:
      "Structured youth leadership and personal development programs equipping African students with discipline, innovation skills, and accountability systems.",
    url: "https://mikaelsoninitiative.org",
    siteName: "Mikaelson Initiative",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "https://mikaelsoninitiative.org/assets/images/og-home.png",
        width: 1200,
        height: 630,
        alt: "Mikaelson Initiative — Youth Leadership Programs in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth Leadership Programs in Nigeria | Mikaelson Initiative",
    description:
      "Structured youth leadership and personal development programs equipping African students with discipline, innovation skills, and accountability systems.",
    site: "@mcdti_org",
    images: ["https://mikaelsoninitiative.org/assets/images/og-home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LandingPage() {
  return (
    <main className="bg-[#ffffff] dark:bg-background px-5 lg:px-0">
      <HomeHero />
      <EcosystemSection />
      <AnimatedSection
        title="The Mikaelson Community"
        description="The Mikaelson Community is a vibrant network of ambitious students and changemakers across Africa, united by excellence and intentional growth."
        buttonText="Join our community"
        btnBgcolor="bg-brand-green-100"
        buttonLink="/community"
        imageSrc={communityUrl}
        imageAlt="Mikaelson Community on MacBook"
      />
      <AnimatedSection
        title="Mikaelson Labs"
        description="Mikaelson Labs is our innovation hub where we build and experiment
          with new ideas to solve challenges across Africa."
        buttonText="Contribute to Labs"
        buttonLink="/labs"
        btnBgcolor="bg-brand-blue"
        imageSrc={labsUrl}
        imageAlt="Mikaelson Community on MacBook"
      />
      <AnimatedSection
        title="Partnership & Growth Network"
        description="Our network connects students with mentors, resources, and
          opportunities to foster collaboration and accelerate growth."
        buttonText="Sponsor a Program"
        buttonLink="/sponsor"
        btnBgcolor="bg-brand-black"
        imageSrc={sponsorUrl}
        imageAlt="Partnership & Growth Network on iPad"
      />
      <ImpactSection />
      <MediaStories />
      <ExploreMore />
    </main>
  );
}
