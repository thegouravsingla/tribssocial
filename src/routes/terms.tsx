import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, termsSections } from "@/components/landing/legal";

export const Route = createFileRoute("/terms")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Social Media Mastery — Talented Ritu Insan" },
      { name: "description", content: "Terms for joining the Social Media Mastery live course: fees, access, recordings and our no-refund, no-cancellation policy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Terms & Conditions — Social Media Mastery" },
      { property: "og:description", content: "Enrolment terms for the Social Media Mastery live course by Talented Ritu Insan." },
      { property: "og:url", content: "https://talentedrituinsan.life/terms" },
    ],
    links: [{ rel: "canonical", href: "https://talentedrituinsan.life/terms" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Social Media Mastery"
      title="Terms & Conditions"
      intro="The simple rules for enrolling in our live course — including our no-refund, no-cancellation policy."
      sections={termsSections}
    />
  ),
});
