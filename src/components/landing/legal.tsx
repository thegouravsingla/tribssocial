import { Link } from "@tanstack/react-router";
import { MessageCircle, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { waLink } from "@/components/landing/data";

export interface LegalSection {
  heading: string;
  body: string[];
}

export const termsSections: LegalSection[] = [
  {
    heading: "About these terms",
    body: [
      "These terms apply to everyone who joins the Social Media Mastery course by Talented Ritu Insan. When you enquire or confirm a seat on WhatsApp, you agree to them.",
      "If anything here is unclear, message us on WhatsApp before you confirm your seat — we are happy to explain.",
    ],
  },
  {
    heading: "Enrolment and seat confirmation",
    body: [
      "A new batch starts every first Saturday of the month. Batches are confirmed on WhatsApp, on a first-come basis.",
      "Your seat is confirmed only after our team confirms your plan and details with you on WhatsApp.",
    ],
  },
  {
    heading: "Course fees and access",
    body: [
      "Early Bird: ₹2,499 for the live classes plus 1 year of recordings. Lifetime: ₹2,999 for the live classes plus lifetime recordings and future course updates.",
      "Both plans include practical projects, Q&A time, course resources and a certificate of completion. Fees are in Indian Rupees.",
    ],
  },
  {
    heading: "No refunds, cancellations or changes",
    body: [
      "All enrolments are final. Once your seat is confirmed, we do not offer refunds, cancellations, transfers to another person, plan changes or batch-date changes.",
      "Please confirm your plan and batch with our team on WhatsApp before you complete your enrolment.",
      "If you miss a live class, the recording covers it — recordings are available for 1 year (Early Bird) or for life (Lifetime plan).",
    ],
  },
  {
    heading: "Schedule and changes by us",
    body: [
      "Classes run on weekends for 1 month — 8 live classes of 90 minutes plus 30 minutes of Q&A.",
      "In rare cases (for example a trainer illness or a technical issue) we may move a class to another slot in the same batch. Your access and recordings are not affected.",
    ],
  },
  {
    heading: "Recordings, materials and misuse",
    body: [
      "Recordings, resources and designs shared in the course are for your personal learning only. Please do not share, resell or repost them.",
      "We may end a person's access to recordings and the course community if materials are misused, without a refund.",
    ],
  },
  {
    heading: "Results are not guaranteed",
    body: [
      "The course teaches practical skills step by step. We do not promise any particular number of followers, income or business result — those depend on the effort you put in after class.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms follow Indian law. Any dispute will be handled by the courts in our city of operation in India.",
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    heading: "What we collect",
    body: [
      "We collect only what you share with us when you enquire or enrol: for example your name and your WhatsApp number, plus the messages you send us.",
      "We do not ask for payments on this website. Enrolment is arranged directly with our team on WhatsApp.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "We use your details to answer your questions, confirm your seat, share class links and recordings, and support you during the course.",
      "We do not sell your data, and we do not send unrelated marketing messages.",
    ],
  },
  {
    heading: "WhatsApp and other platforms",
    body: [
      "The WhatsApp buttons on this site open WhatsApp with a pre-filled message. Your number and message are then handled by WhatsApp under their own privacy policy.",
      "The welcome video on this page is hosted on YouTube. When you press play, YouTube may set its own cookies and collect viewing data under Google's policies.",
      "Live classes may run on other platforms; if so, we tell you which one and their policy applies to their part.",
    ],
  },
  {
    heading: "Cookies and tracking",
    body: [
      "This website does not run advertising trackers and does not need an account. It uses only basic, everyday storage needed to display the site.",
    ],
  },
  {
    heading: "How long we keep your data",
    body: [
      "We keep your details as long as needed to run your course and support you afterwards. You can ask us to delete your details any time — message us and we will do it.",
    ],
  },
  {
    heading: "Students under 18",
    body: [
      "Students are welcome, but if you are under 18, please have a parent or guardian make the enquiry and confirm your seat with us.",
    ],
  },
];

function LegalHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" aria-label="Back to the Social Media Mastery course" className="inline-flex">
          <img src={logo.url} alt="Talented Ritu Insan" className="h-10 w-auto rounded-md bg-ivory px-2" />
        </Link>
        <Link to="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:underline underline-offset-4">
          Back to course
        </Link>
      </div>
    </header>
  );
}

function LegalFooter() {
  return (
    <footer className="bg-charcoal px-5 py-8 text-ivory/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Talented Ritu Insan</p>
        <nav aria-label="Legal pages" className="flex flex-wrap gap-x-5">
          <Link to="/" className="inline-flex min-h-11 items-center hover:text-gold">Course</Link>
          <Link to="/terms" className="inline-flex min-h-11 items-center hover:text-gold">Terms & Conditions</Link>
          <Link to="/privacy" className="inline-flex min-h-11 items-center hover:text-gold">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}

function LegalContact() {
  return (
    <section aria-label="Contact us" className="mt-8 rounded-lg border border-border bg-secondary p-5">
      <h2 className="text-xl font-semibold text-primary">Questions or concerns?</h2>
      <div className="mt-3 grid gap-1 text-sm">
        <a href={waLink("Hi! I have a question about the Social Media Mastery course terms.")} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline underline-offset-4">
          <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp +91 8607022646
        </a>
        <a href="tel:+917428321321" className="flex min-h-11 items-center gap-2 hover:underline underline-offset-4">
          <Phone className="h-4 w-4 shrink-0" /> +91 7428321321
        </a>
        <a href="mailto:TalentedRituInsan@tribs.in" className="flex min-h-11 items-center gap-2 break-all hover:underline underline-offset-4">
          <Mail className="h-4 w-4 shrink-0" /> TalentedRituInsan@tribs.in
        </a>
      </div>
    </section>
  );
}

export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: LegalSection[] }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <LegalHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-10">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-2 text-3xl text-primary sm:text-4xl">{title}</h1>
        <p className="mt-4 text-muted-foreground">{intro}</p>
        <div className="mt-8 space-y-5">
          {sections.map((section) => (
            <section key={section.heading} className="rounded-lg border border-border bg-card p-5 shadow-soft">
              <h2 className="text-xl text-primary">{section.heading}</h2>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/90">
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
        <LegalContact />
      </main>
      <LegalFooter />
    </div>
  );
}
