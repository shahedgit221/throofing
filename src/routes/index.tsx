import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Projects } from "@/components/site/Projects";
import { Videos } from "@/components/site/Videos";
import { Offers } from "@/components/site/Offers";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "TH Roofing — Roofing Contractors in Labrador City, NL";
const description =
  "Residential, commercial, and industrial roofing in Labrador City. Durable installs built for Labrador weather, seniors discounts, flexible payment plans, and free estimates.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          name: "TH Roofing",
          description,
          telephone: "+1-709-944-0000",
          email: "info@throofing.ca",
          areaServed: "Labrador City, Wabush, Western Labrador",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Labrador City",
            addressRegion: "NL",
            addressCountry: "CA",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Stats />
        <Services />
        <WhyUs />
        <Process />
        <BeforeAfter />
        <Projects />
        <Videos />
        <Offers />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
