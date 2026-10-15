import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, privacySections } from "@/components/landing/legal";

export const Route = createFileRoute("/privacy")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Privacy Policy | Social Media Mastery — Talented Ritu Insan" },
      { name: "description", content: "How Talented Ritu Insan handles the details you share when enquiring or enrolling in the Social Media Mastery course." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Privacy Policy — Social Media Mastery" },
      { property: "og:description", content: "What we collect, how we use it, and how to ask us to delete it." },
      { property: "og:url", content: "https://talentedrituinsan.life/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://talentedrituinsan.life/privacy" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Social Media Mastery"
      title="Privacy Policy"
      intro="What we collect, how we use it, and how to ask us to delete it."
      sections={privacySections}
    />
  ),
});
