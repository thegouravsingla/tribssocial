import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Sparkles, MessageCircle, Check, ChevronDown, Menu, X, Users, PlayCircle, Phone, Mail, Globe,
  Instagram, Facebook, Youtube, Heart, Share2, Bookmark, Clapperboard, Wand2, Palette, Scissors,
  Lightbulb, Smartphone, Send, TrendingUp, GraduationCap, Home, Briefcase, Store, Sprout, Video,
  PenLine, Camera, Brush, Megaphone, Rocket, Hash, ArrowDown, MapPin, Clock, Award, Search, ArrowRight, ChevronLeft, ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero-creator.jpg";
import learnersImg from "@/assets/learners.jpg";
import mentorImg from "@/assets/mentor.jpg";
import logo from "@/assets/logo.png.asset.json";
import * as D from "@/components/landing/data";
import { Button } from "@/components/ui/button";
import { CourseModal, DailyOffer } from "@/components/landing/experience";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Social Media Mastery | Talented Ritu Insan" },
      { name: "description", content: "Learn social media, create content and use AI from your phone. 8 live classes in 1 month, beginner friendly, from ₹2,499." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Social Media Mastery — Learn. Create. Grow." },
      { property: "og:description", content: "A practical live course by Talented Ritu Insan: social media, content, AI, editing and design — all from your phone." },
      { property: "og:url", content: "https://talentedrituinsan.life/" },
    ],
    links: [{ rel: "canonical", href: "https://talentedrituinsan.life/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "@id": "https://talentedrituinsan.life/#course",
        name: "Social Media Mastery",
        url: "https://talentedrituinsan.life/",
        description: "A beginner-friendly, mobile-first course covering social media, content creation, AI, video editing and design through 8 live online classes over 1 month.",
        provider: { "@type": "Organization", name: "Talented Ritu Insan" },
        inLanguage: ["en", "hi"],
        educationalLevel: "Beginner",
        syllabusSections: D.classes.map((lesson) => ({
          "@type": "Syllabus",
          name: `Class ${lesson.n}: ${lesson.title}`,
          description: lesson.topics.join(", "),
        })),
      }),
    }],
  }),
  component: Index,
});

/* ---------- helpers ---------- */
function useReveal(dep?: unknown) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        if (!reducedMotion) e.target.animate(
          [{ opacity: 0.45, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 450, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)" },
        );
        io.unobserve(e.target);
      }),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return <section id={id} className={`px-5 py-12 md:px-8 md:py-16 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>;
}

function Heading({ eyebrow, title, sub, light }: { eyebrow?: string; title: ReactNode; sub?: string; light?: boolean }) {
  return (
    <div className="reveal mx-auto mb-9 max-w-2xl text-center">
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 className={`text-3xl font-semibold uppercase leading-tight md:text-5xl ${light ? "text-ivory" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-3 text-lg ${light ? "text-ivory/80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

function Pinterest({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.3-5.4s-.3-.7-.3-1.6c0-1.5.9-2.7 2-2.7.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.6-.3 1.1.5 2 1.6 2 1.9 0 3.4-2 3.4-5 0-2.6-1.9-4.4-4.5-4.4-3.1 0-4.9 2.3-4.9 4.7 0 .9.4 1.9.8 2.5.1.1.1.2.1.3l-.3 1.2c0 .2-.2.3-.4.2-1.4-.6-2.2-2.6-2.2-4.2 0-3.4 2.5-6.6 7.2-6.6 3.8 0 6.7 2.7 6.7 6.3 0 3.8-2.4 6.8-5.7 6.8-1.1 0-2.2-.6-2.5-1.3l-.7 2.6c-.2 1-.9 2.2-1.4 2.9A10 10 0 1 0 12 2Z" />
    </svg>
  );
}

const platformIcon: Record<string, ReactNode> = {
  Instagram: <Instagram className="h-7 w-7 text-ig" />,
  Facebook: <Facebook className="h-7 w-7 text-fb" />,
  YouTube: <Youtube className="h-7 w-7 text-yt" />,
  Pinterest: <Pinterest className="h-7 w-7 text-pin" />,
};
const toolIcon: Record<string, ReactNode> = {
  ChatGPT: <Wand2 className="h-7 w-7" />, Canva: <Palette className="h-7 w-7" />, "Edits by Instagram": <Scissors className="h-7 w-7" />,
};

const btnPrimary = "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold tracking-wide text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-wine hover:shadow-lift";
const btnGold = "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-bold tracking-wide text-wine shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift";
const btnOutline = "inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-ivory/60 px-7 py-4 text-base font-bold tracking-wide text-primary transition hover:border-primary hover:bg-cream";
const btnOutlineLight = "inline-flex items-center justify-center gap-2 rounded-full border-2 border-ivory/40 px-7 py-4 text-base font-bold tracking-wide text-ivory transition hover:border-ivory hover:bg-ivory/10";

/* ---------- page ---------- */
function Index() {
  const [enrollOpen, setEnrollOpen] = useState<null | "year" | "life">(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [goal, setGoal] = useState(0);
  const [showMobileJoin, setShowMobileJoin] = useState(false);
  useReveal();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = document.getElementById("home")?.getBoundingClientRect();
      const pricing = document.getElementById("pricing")?.getBoundingClientRect();
      const footer = document.querySelector("footer")?.getBoundingClientRect();
      const pricingVisible = pricing && pricing.top < window.innerHeight - 96 && pricing.bottom > 80;
      setShowMobileJoin(Boolean(hero && hero.bottom <= 80 && !pricingVisible && footer && footer.top >= window.innerHeight - 96));
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  const join = () => setEnrollOpen("life");
  const watch = () => setVideoOpen(true);

  return (
    <div className="course-page pb-24 md:pb-0">
      <a href="#main-content" className="skip-link">Skip to course</a>
      <Header onJoin={join} />
      <main id="main-content">
      <Hero onJoin={join} onWatch={watch} />
      <TrustBar />
      <WelcomeVideo onWatch={watch} />
      <PhoneFlow />
      <WhoFor />
      <Goals goal={goal} setGoal={setGoal} />
      <Journey />
      <Platforms />
      <Tools />
      <Repurpose />
      <Curriculum highlight={(D.goals[goal]?.classes ?? [])} goalLabel={(D.goals[goal]?.label ?? "Your goal")} />
      <Method />
      <Build />
      <Format />
      <Pricing onJoin={setEnrollOpen} />
      <Brand />
      <FinalCta onJoin={join} onWatch={watch} />
      <Faq />
      </main>
      <Footer onJoin={() => setEnrollOpen("year")} />

      <div inert={!showMobileJoin} aria-hidden={!showMobileJoin} className={`mobile-enroll fixed inset-x-0 bottom-0 z-40 border-t border-border bg-ivory/95 px-4 pt-3 backdrop-blur md:hidden ${showMobileJoin ? "mobile-enroll-visible" : "mobile-enroll-hidden"}`}>
        <div className="mx-auto grid max-w-lg grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0"><p className="text-xs text-muted-foreground">8 live classes · From</p><p className="text-xl font-bold text-primary">₹2,499</p></div>
          <Button variant="course" size="course" onClick={join} className={`${btnPrimary} min-h-12 px-5 py-3`}>Join next batch <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </div>
      {enrollOpen && <EnrollModal plan={enrollOpen} onClose={() => setEnrollOpen(null)} />}
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </div>
  );
}

function Header({ onJoin }: { onJoin: () => void }) {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
    }, { rootMargin: "-80px 0px -55% 0px", threshold: 0 });
    D.nav.forEach(({ href }) => { const target = document.querySelector(href); if (target) observer.observe(target); });
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenu(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => { observer.disconnect(); desktop.removeEventListener("change", closeOnDesktop); };
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenu(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition ${scrolled ? "bg-ivory/95 shadow-soft backdrop-blur" : "bg-ivory/70 backdrop-blur"}`}>
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 md:h-20 md:px-8 xl:flex xl:justify-between">
        <a href="#home" className="min-w-0 shrink-0" aria-label="Talented Ritu Insan home"><img src={logo.url} alt="Talented Ritu Insan" className="brand-logo object-contain object-left" /></a>
        <nav aria-label="Main navigation" className="hidden min-w-0 items-center gap-4 xl:flex">
          {D.nav.map((n) => <a key={n.href} href={n.href} aria-current={activeSection === n.href ? "location" : undefined} className={`nav-link inline-flex min-h-11 items-center text-sm font-semibold transition ${activeSection === n.href ? "text-primary" : "text-charcoal/80 hover:text-primary"}`}>{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="course" size="course" onClick={onJoin} className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-wine sm:inline-flex">Join Next Batch</Button>
          <Button variant="course" size="course" onClick={() => setMenu(!menu)} aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} aria-controls="mobile-navigation" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-primary xl:hidden">{menu ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {menu && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[calc(100dvh-160px)] overflow-y-auto border-t border-border bg-ivory px-5 py-4 xl:hidden animate-in slide-in-from-top-2">
          {D.nav.map((n) => <a key={n.href} href={n.href} onClick={() => setMenu(false)} className="block py-3 text-lg font-semibold text-primary">{n.label}</a>)}
          <Button variant="course" size="course" onClick={() => { setMenu(false); onJoin(); }} className={`${btnPrimary} mt-3 w-full`}>JOIN NEXT BATCH</Button>
        </nav>
      )}
    </header>
  );
}

function Hero({ onJoin, onWatch }: { onJoin: () => void; onWatch: () => void }) {
  return <section id="home" className="course-hero relative isolate overflow-hidden bg-charcoal">
    <img src={heroImg} alt="A creator recording content on her phone" className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]" fetchPriority="high" />
    <div className="hero-scrim absolute inset-0 -z-10" />
    <div className="hero-content mx-auto w-full max-w-6xl px-5 py-8 md:px-8 sm:py-12 lg:py-16">
      <div className="max-w-2xl">
        <p className="mb-4 flex items-center gap-2 text-xs font-bold text-gold sm:text-sm"><Sparkles className="h-4 w-4" /> Talented Ritu Insan presents</p>
        <h1 className="hero-title text-4xl font-bold leading-[1.08] text-ivory sm:text-6xl lg:text-7xl">Social Media<br />Mastery</h1>
        <p className="mt-4 font-display text-2xl text-gold sm:text-3xl">Learn. Create. Grow.</p>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ivory/90 sm:text-lg">Social media, AI, editing and design. A practical live course, all from your phone.</p>
        <div className="mt-5 flex flex-wrap gap-2">{["8 live classes", "1 month", "Beginner friendly"].map((badge) => <span key={badge} className="rounded-md border border-ivory/30 bg-charcoal/25 px-3 py-2 text-xs font-semibold text-ivory">{badge}</span>)}</div>
        <div className="hero-actions mt-7 grid gap-3 sm:flex sm:flex-wrap">
          <Button variant="course" size="course" onClick={onJoin} className={btnGold}>Join the next batch <ArrowRight className="h-5 w-5" /></Button>
          <Button variant="course" size="course" onClick={onWatch} className={btnOutlineLight}><PlayCircle className="h-5 w-5" /> Meet your mentor</Button>
        </div>
        <p className="mt-4 text-xs text-ivory/80 sm:text-sm">From ₹2,499 · New batch every first Saturday</p>
      </div>
    </div>
  </section>;
}

function TrustBar() {
  const icons = [Users, GraduationCap, MapPin, Award];
  return (
    <div className="bg-primary px-5 py-6">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-5 lg:grid-cols-4">
        {D.stats.map((s, i) => {
          const I = (icons[i] ?? Sparkles);
          return (
            <div key={s.label} className="flex min-w-0 flex-col items-center justify-center gap-2 text-center sm:flex-row sm:text-left">
              <I className="h-5 w-5 shrink-0 text-gold" />
              <div className="min-w-0"><p className="whitespace-nowrap font-display text-2xl font-bold text-ivory xl:text-3xl">{s.value}</p><p className="text-xs font-semibold uppercase tracking-wider text-ivory/70">{s.label}</p></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WelcomeVideo({ onWatch }: { onWatch: () => void }) {
  return <Section id="welcome" className="bg-ivory">
    <div className="grid items-center gap-6 md:grid-cols-[1fr_1.25fr] md:gap-10">
      <div><p className="eyebrow mb-3">A hello before you begin</p>
        <h2 className="text-3xl font-semibold leading-tight text-primary md:text-4xl">Meet your next<br />creative chapter.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">Get to know Talented Ritu Insan through a sample fashion-design class. Ask our team for the Social Media Mastery welcome video.</p>
        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary"><Smartphone className="h-5 w-5" /> Your phone. Your ideas. Your start.</div>
      </div>
      <div className="min-w-0">
        <Button variant="course" size="course" onClick={onWatch} aria-label="Play mentor sample class" className="group relative block aspect-video w-full overflow-hidden rounded-lg bg-charcoal p-0 text-ivory">
          <img src={mentorImg} alt="Talented Ritu Insan, your course mentor" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" loading="lazy" />
          <span className="absolute inset-0 bg-charcoal/25" />
          <span className="absolute inset-0 grid place-items-center"><span className="grid h-16 w-16 place-items-center rounded-full bg-gold text-wine shadow-lift transition group-hover:scale-110"><PlayCircle className="h-8 w-8" /></span></span>
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-charcoal/85 px-4 py-3 text-sm"><span>Welcome Video</span><ArrowRight className="h-4 w-4 shrink-0" /></span>
        </Button>
      </div>
    </div>
  </Section>;
}

function VideoModal({ onClose }: { onClose: () => void }) {
  return <CourseModal wide title="Meet Talented Ritu Insan" description="Fashion Designing Basics — a sample class, not the Social Media Mastery welcome video." onClose={onClose}>
    <div className="aspect-video overflow-hidden rounded-lg bg-charcoal">
      <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${D.VIDEO_ID}?rel=0&autoplay=1`} title="Fashion Designing Basics sample class" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen />
    </div>
    <a href={`https://www.youtube.com/watch?v=${D.VIDEO_ID}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4">Open on YouTube <ArrowRight className="h-4 w-4" /></a>
  </CourseModal>;
}

function PhoneFlow() {
  const icons = [Lightbulb, Camera, Scissors, Send, TrendingUp];
  return (
    <Section className="bg-cream">
      <Heading title="Your phone is already a powerful tool." sub="You just need to know how to use it." />
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {D.flow.map((f, i) => {
          const I = (icons[i] ?? Sparkles);
          return (
            <div key={f} className="reveal flex items-center gap-2 md:gap-3" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="flex flex-col items-center gap-2 rounded-3xl bg-card px-4 py-4 shadow-soft md:px-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-gold"><I className="h-6 w-6" /></span>
                <span className="text-sm font-extrabold uppercase tracking-wider text-primary">{f}</span>
              </div>
              {i < D.flow.length - 1 && <span className="text-xl font-bold text-gold">→</span>}
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-center font-display text-xl italic text-wine">Phone se hi shuru karo.</p>
    </Section>
  );
}

function WhoFor() {
  const icons = [GraduationCap, Home, Video, Briefcase, Store, Sprout];
  return (
    <Section id="who">
      <Heading eyebrow="Who is this for" title="Made for everyone." />
      <div className="grid items-center gap-8 md:grid-cols-2">
        <img src={learnersImg} alt="Indian learners of different ages using their phones" className="reveal aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift" loading="lazy" />
        <div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {D.personas.map((p, i) => {
              const I = (icons[i] ?? Sparkles);
              return (
                <div key={p} className="reveal flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-center transition hover:-translate-y-1 hover:border-gold hover:shadow-soft">
                  <I className="h-7 w-7 text-primary" />
                  <span className="text-sm font-bold text-charcoal">{p}</span>
                </div>
              );
            })}
          </div>
          <p className="reveal mt-6 text-center text-lg font-semibold text-charcoal md:text-left">No age limit. No previous experience. No laptop required.</p>
          <p className="reveal mt-2 text-center font-display text-xl italic text-primary md:text-left">"Sirf phone aur seekhne ki willingness chahiye."</p>
        </div>
      </div>
    </Section>
  );
}

function Goals({ goal, setGoal }: { goal: number; setGoal: (n: number) => void }) {
  const g = D.goals[goal];
  if (!g) return null;
  return (
    <Section className="bg-primary">
      <Heading light eyebrow="Pick your goal" title="What do you want social media to do for you?" />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {D.goals.map((x, i) => (
          <Button variant="course" size="course" key={x.label} onClick={() => setGoal(i)} aria-pressed={goal === i}
            className={`rounded-2xl border-2 px-4 py-4 text-sm font-extrabold uppercase tracking-wide transition md:text-base ${goal === i ? "border-gold bg-gold text-wine shadow-lift" : "border-ivory/20 text-ivory hover:border-gold/60"}`}>
            {x.label}
          </Button>
        ))}
      </div>
      <div key={goal} className="mx-auto mt-6 max-w-2xl rounded-3xl bg-ivory p-6 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
        <p className="font-display text-xl text-primary md:text-2xl">{g.answer}</p>
        <p className="mt-4 text-sm font-semibold text-muted-foreground">Focus classes for you:</p>
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {g.classes.map((n) => <a key={n} href="#curriculum" className="inline-flex min-h-11 items-center rounded-md bg-gold-soft px-3 py-2 text-sm font-bold text-wine">Class {n} · {D.classes.find((c) => c.n === n)?.title}</a>)}
        </div>
      </div>
    </Section>
  );
}

function Journey() {
  const [active, setActive] = useState(0);
  const icons = [Lightbulb, PenLine, Camera, Scissors, Brush, Send, MessageCircle, Rocket];
  return (
    <Section id="journey" className="bg-cream">
      <Heading eyebrow="The big course journey" title="From idea to digital presence" />
      <div className="grid grid-cols-2 gap-3 min-[360px]:grid-cols-4 xl:grid-cols-8">
        {D.journey.map((j, i) => {
          const I = (icons[i] ?? Sparkles);
          const on = active === i;
          return (
            <Button variant="course" size="course" key={j.step} onClick={() => setActive(i)} aria-pressed={on}
              className={`group flex min-w-0 flex-col items-center gap-2 rounded-2xl px-2 py-3 transition ${on ? "bg-primary text-ivory shadow-lift" : "bg-card text-primary hover:-translate-y-1"}`}>
              <span className={`grid h-12 w-12 place-items-center rounded-full transition group-hover:rotate-6 ${on ? "bg-gold text-wine" : "bg-cream"}`}><I className="h-6 w-6" /></span>
              <span className="text-[11px] font-bold opacity-70">0{i + 1}</span>
              <span className="text-xs font-extrabold uppercase sm:text-sm">{j.step}</span>
            </Button>
          );
        })}
      </div>
      <p key={active} className="mx-auto mt-6 max-w-xl rounded-2xl bg-ivory px-6 py-4 text-center text-lg font-semibold text-charcoal shadow-soft animate-in fade-in zoom-in-95 duration-300">
        <span className="text-primary">{D.journey[active]?.step}:</span> {D.journey[active]?.text}
      </p>
      <div className="mt-4 flex items-center justify-center gap-4">
        <Button variant="outline" size="icon" aria-label="Previous journey step" disabled={active === 0} onClick={() => setActive(active - 1)} className="h-11 w-11"><ChevronLeft /></Button>
        <span className="text-sm text-muted-foreground">{active + 1} / {D.journey.length}</span>
        <Button variant="outline" size="icon" aria-label="Next journey step" disabled={active === D.journey.length - 1} onClick={() => setActive(active + 1)} className="h-11 w-11"><ChevronRight /></Button>
      </div>
    </Section>
  );
}

function Platforms() {
  const [open, setOpen] = useState<string>("Instagram");
  return (
    <Section>
      <Heading eyebrow="Platforms" title="The social media world, all in one course" />
      <div className="grid items-start gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {D.platforms.map((p) => {
          const on = open === p.name;
          return (
            <Button variant="course" size="course" key={p.name} onClick={() => setOpen(on ? "" : p.name)} aria-expanded={on}
              className={`reveal block w-full rounded-3xl border-2 bg-card p-5 text-left transition ${on ? "border-gold shadow-lift" : "border-border hover:border-gold/50"}`}>
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cream">{platformIcon[p.name]}</span>
                <ChevronDown className={`h-5 w-5 text-primary transition ${on ? "rotate-180" : ""}`} />
              </div>
              <h3 className="mt-3 text-xl font-semibold uppercase text-primary">{p.name}</h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {p.tags.map((t) => <span key={t} className="flex items-center gap-0.5 rounded-full bg-cream px-2.5 py-1 text-xs font-bold text-wine"><Hash className="h-3 w-3" />{t}</span>)}
              </div>
              {on && (
                <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm animate-in fade-in duration-300">
                  <p><b className="text-primary">Useful for:</b> {p.useful}</p>
                  <p><b className="text-primary">You'll learn:</b> {p.learn}</p>
                  <p className="rounded-xl bg-gold-soft px-3 py-2 text-wine"><b>Example:</b> {p.example}</p>
                </div>
              )}
            </Button>
          );
        })}
      </div>
    </Section>
  );
}

function Tools() {
  return (
    <Section className="bg-wine">
      <Heading light eyebrow="Core tools" title="The tools you'll actually use" />
      <div className="grid gap-4 md:grid-cols-3">
        {D.tools.map((t) => (
          <div key={t.name} className="reveal group min-w-0 rounded-3xl bg-ivory p-6 transition hover:-translate-y-1.5 hover:shadow-lift md:w-auto">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-gold transition group-hover:rotate-6">{toolIcon[t.name]}</span>
            <h3 className="mt-4 text-2xl font-semibold text-primary">{t.name}</h3>
            <p className="font-bold uppercase tracking-wider text-gold">{t.tagline}</p>
            <p className="mt-2 text-charcoal/80">{t.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.items.map((i) => <span key={i} className="rounded-full border border-border px-3 py-1 text-sm font-semibold text-charcoal">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Repurpose() {
  const icons = [<Instagram className="h-5 w-5 text-ig" />, <Youtube className="h-5 w-5 text-yt" />, <Facebook className="h-5 w-5 text-fb" />, <Pinterest className="h-5 w-5 text-pin" />, <MessageCircle className="h-5 w-5 text-whatsapp" />];
  return (
    <Section className="bg-cream">
      <Heading title={<>One idea.<br /><span className="text-gold">More content.</span></>} sub="Ek idea ko smart tareeke se multiple platforms ke liye use karna seekho." />
      <div className="flex flex-col items-center gap-3">
        <div className="reveal flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-extrabold uppercase text-ivory shadow-lift"><Lightbulb className="h-5 w-5 text-gold" /> One Idea</div>
        <ArrowDown className="reveal h-6 w-6 text-gold" />
        <div className="reveal flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-extrabold uppercase text-wine shadow-lift" style={{ transitionDelay: "150ms" }}><Video className="h-5 w-5" /> One Video</div>
        <ArrowDown className="reveal h-6 w-6 text-gold" />
        <div className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {D.repurpose.map((r, i) => (
            <div key={r} className="reveal flex aspect-[9/12] flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card p-3 text-center shadow-soft" style={{ transitionDelay: `${300 + i * 120}ms` }}>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-cream">{icons[i]}</span>
              <span className="text-sm font-bold text-charcoal">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Curriculum({ highlight, goalLabel }: { highlight: number[]; goalLabel: string }) {
  const [open, setOpen] = useState<number | null>(1);
  const [expanded, setExpanded] = useState(false);
  return (
    <Section id="curriculum">
      <Heading eyebrow="Curriculum" title={<>8 live classes.<br />One complete journey.</>} />
      <p className="mb-6 text-center text-sm font-semibold text-muted-foreground"><Sparkles className="mr-1 inline h-4 w-4 text-gold" />Highlighted for your goal: <span className="text-primary">{goalLabel}</span></p>
      <div className="mx-auto mb-4 flex max-w-4xl justify-end"><Button variant="outline" onClick={() => setExpanded(!expanded)} className="min-h-11">{expanded ? "Collapse all classes" : "Expand all classes"}</Button></div>
      <div className="mx-auto grid max-w-4xl gap-3">
        {D.classes.map((c) => {
          const on = expanded || open === c.n;
          const hi = highlight.includes(c.n);
          return (
            <div key={c.n} className={`rounded-2xl border-2 bg-card transition ${on ? "border-primary shadow-soft" : hi ? "border-gold" : "border-border"}`}>
              <Button variant="course" size="course" onClick={() => { setExpanded(false); setOpen(on ? null : c.n); }} aria-expanded={on} aria-controls={`class-${c.n}`} className="flex w-full items-center gap-4 p-4 text-left md:p-5">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-xl font-bold ${on ? "bg-primary text-gold" : "bg-cream text-primary"}`}>{c.n}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold uppercase tracking-widest text-gold">Class {c.n}{hi && " · For you"}</span>
                  <span className="block text-lg font-bold uppercase text-primary md:text-xl">{c.title}</span>
                </span>
                <ChevronDown className={`h-6 w-6 shrink-0 text-primary transition duration-300 ${on ? "rotate-180" : ""}`} />
              </Button>
              <div id={`class-${c.n}`} aria-hidden={!on} className={`grid transition-all duration-300 ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="px-4 pb-5 md:px-5">
                    <div className="flex flex-wrap gap-2">
                      {c.topics.map((t) => <span key={t} className="rounded-full bg-cream px-3 py-1.5 text-sm font-semibold text-charcoal">{t}</span>)}
                    </div>
                    <p className="mt-4 flex items-center gap-2 rounded-xl bg-gold-soft px-4 py-3 font-bold text-wine"><Check className="h-5 w-5 shrink-0" /> Output: {c.output}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Method() {
  const [active, setActive] = useState(0);
  return (
    <Section className="bg-primary">
      <Heading light eyebrow="Learn by doing" title={<>Sirf dekhna nahi.<br /><span className="text-gold">Karke seekhna hai.</span></>} />
      <div className="grid gap-3 min-[390px]:grid-cols-2 lg:grid-cols-4">
        {D.method.map((m, i) => (
          <Button variant="course" size="course" key={m.title} aria-pressed={active === i} onClick={() => setActive(i)}
            className={`reveal block rounded-3xl p-5 text-left transition md:p-6 ${active === i ? "bg-gold text-wine shadow-lift md:-translate-y-2" : "bg-wine text-ivory"}`}>
            <span className="font-display text-4xl font-bold opacity-60">0{i + 1}</span>
            <h3 className="mt-2 text-xl font-bold uppercase md:text-2xl">{m.title}</h3>
            <p className="mt-1 text-sm font-semibold opacity-85 md:text-base">{m.text}</p>
          </Button>
        ))}
      </div>
    </Section>
  );
}

function Build() {
  return (
    <Section className="bg-cream">
      <Heading title="By the end, you'll have built:" />
      <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 md:grid-cols-3">
        {D.buildList.map((b, i) => (
          <div key={b} className="reveal flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft" style={{ transitionDelay: `${i * 70}ms` }}>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-gold"><Check className="h-5 w-5" /></span>
            <span className="font-bold text-charcoal">{b}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center font-display text-xl italic text-primary">Apna content khud banao.</p>
    </Section>
  );
}

function Format() {
  return (
    <Section>
      <div className="reveal rounded-[2rem] border-2 border-gold/40 bg-card p-6 md:p-10">
        <h2 className="text-center text-3xl font-semibold uppercase text-primary md:text-4xl">Course format</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          {D.format.map((f) => (
            <div key={f.big} className="min-w-0 rounded-2xl bg-cream p-3 text-center">
              <p className="font-display text-xl font-bold text-primary md:text-2xl">{f.big}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f.small}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 flex items-center justify-center gap-2 text-center font-semibold text-charcoal"><Clock className="h-5 w-5 text-gold" /> Online live · New batch starts every first Saturday of the month.</p>
      </div>
    </Section>
  );
}

function Pricing({ onJoin }: { onJoin: (p: "year" | "life") => void }) {
  const [sel, setSel] = useState<"year" | "life">("life");
  const card = (id: "year" | "life") => {
    const p = D.plans[id];
    const life = id === "life";
    const on = sel === id;
    return (
      <div
        className={`relative rounded-[2rem] p-6 transition md:p-8 ${life ? "bg-primary text-ivory " : "bg-card text-charcoal"} ${on ? "ring-4 ring-gold shadow-lift" : "opacity-80 ring-1 ring-border"}`}>
        {life && <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 text-sm font-extrabold uppercase tracking-wider text-wine">Best Value</span>}
        <p className={`text-sm font-extrabold uppercase tracking-widest ${life ? "text-gold" : "text-primary"}`}>{p.name}</p>
        <p className="mt-1 text-sm font-semibold opacity-75">{p.access} access</p>
        <p className="mt-3 font-display text-5xl font-bold md:text-6xl">{p.price}</p>
        <ul className="mt-5 space-y-2.5">
          {p.items.map((i) => <li key={i} className="flex items-center gap-2 font-semibold"><Check className={`h-5 w-5 shrink-0 ${life ? "text-gold" : "text-primary"}`} />{i}</li>)}
        </ul>
        <Button variant="course" size="course" onClick={(e) => { e.stopPropagation(); onJoin(id); }} className={`${life ? btnGold : btnPrimary} mt-7 w-full`}>{p.cta}</Button>
      </div>
    );
  };
  return (
    <Section id="pricing" className="bg-cream">
      <Heading eyebrow="Pricing" title="Choose your access" sub="Course value ₹4,999" />
      <div className="mx-auto mb-8 grid w-full max-w-sm grid-cols-2 rounded-full bg-card p-1.5 shadow-soft">
        {(["year", "life"] as const).map((k) => (
          <Button variant="course" size="course" key={k} onClick={() => setSel(k)} aria-pressed={sel === k}
            className={`min-w-0 rounded-full px-3 py-3 text-sm font-extrabold uppercase tracking-wide transition ${sel === k ? "bg-primary text-ivory" : "text-primary"}`}>
            {k === "year" ? "1 Year Access" : "Lifetime Access"}
          </Button>
        ))}
      </div>
      <div className="mx-auto grid max-w-3xl items-center gap-8 md:grid-cols-2">
        {card("year")}
        {card("life")}
      </div>
      <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-4 rounded-2xl bg-ivory p-4 text-center shadow-soft">
        <span className="font-display text-xl font-bold text-charcoal">1 Year</span>
        <span className="rounded-full bg-cream px-3 py-1 text-sm font-extrabold text-muted-foreground">VS</span>
        <span className="font-display text-xl font-bold text-primary">Lifetime</span>
      </div>
      <p className="mt-3 text-center text-lg font-bold text-wine">Just ₹500 more for lifetime access.</p>
    </Section>
  );
}

function Brand() {
  return (
    <Section>
      <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <img src={mentorImg} alt="Talented Ritu Insan" className="reveal mx-auto aspect-square w-full max-w-sm rounded-[2rem] object-cover shadow-lift" loading="lazy" />
        <div className="reveal text-center md:text-left">
          <p className="eyebrow">Your mentor</p>
          <h2 className="mt-2 text-3xl font-semibold uppercase text-primary md:text-5xl">Learn with Talented Ritu Insan</h2>
          <p className="mt-4 text-lg text-charcoal/80">Learning should not be limited by age, education or location.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {D.stats.map((s) => (
              <div key={s.label} className="min-w-0 rounded-2xl bg-cream p-3 text-center">
                <p className="font-display text-xl font-bold text-primary md:text-2xl">{s.value}</p>
                <p className="text-xs font-semibold uppercase text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function FinalCta({ onJoin, onWatch }: { onJoin: () => void; onWatch: () => void }) {
  return (
    <section className="relative overflow-hidden bg-wine px-5 py-16 text-center md:py-20">
      <div className="reveal relative mx-auto max-w-2xl">
        <Smartphone className="mx-auto h-10 w-10 text-gold" />
        <h2 className="mt-4 text-3xl font-semibold uppercase text-ivory md:text-5xl">Your phone is already in your hands.</h2>
        <p className="mt-3 font-display text-2xl italic text-gold">Now learn what it can really do.</p>
        <p className="mt-3 text-ivory/80">Start small. Learn step by step. Create with confidence.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="course" size="course" onClick={onJoin} className={btnGold}>JOIN THE NEXT BATCH</Button>
          <Button variant="course" size="course" onClick={onWatch} className={btnOutlineLight}><PlayCircle className="h-5 w-5" /> MEET YOUR MENTOR</Button>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  return (
    <Section id="faq" className="bg-cream">
      <Heading eyebrow="FAQs" title="Questions? Answers." />
      <div className="relative mx-auto mb-5 max-w-3xl"><Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" /><input aria-label="Search questions" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search your question" className="h-13 w-full rounded-lg border border-input bg-card pl-12 pr-4 text-base outline-none focus:ring-2 focus:ring-ring" /></div>
      <div className="mx-auto grid max-w-3xl gap-2">
        {D.faqs.map(([q, a], i) => (q + " " + a).toLowerCase().includes(query.toLowerCase()) && (
          <div key={q} className="rounded-2xl bg-card">
            <Button variant="course" size="course" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 p-4 text-left text-base font-bold text-primary md:text-lg">
              {q}<ChevronDown className={`h-5 w-5 shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
            </Button>
            {open === i && <p className="px-4 pb-4 text-charcoal/80 animate-in fade-in duration-200">{a}</p>}
          </div>
        ))}
      </div>
      {!D.faqs.some(([q, a]) => (q + " " + a).toLowerCase().includes(query.toLowerCase())) && <p className="text-center text-muted-foreground">No matching questions. <a href={D.waLink()} target="_blank" rel="noreferrer" className="text-primary underline">Ask us on WhatsApp</a></p>}
    </Section>
  );
}

function Footer({ onJoin }: { onJoin: () => void }) {
  return <footer className="bg-charcoal px-5 py-10 text-ivory/80">
    <div className="mx-auto max-w-6xl"><DailyOffer onJoin={onJoin} />
      <div className="grid gap-8 md:grid-cols-[1fr_1fr_1.5fr]">
        <div><img src={logo.url} alt="Talented Ritu Insan" className="h-12 w-auto rounded-md bg-ivory px-2" /><p className="mt-3 font-display text-gold">Learn • Create • Grow</p></div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-4">{D.nav.map((n) => <a key={n.href} href={n.href} className="inline-flex min-h-11 items-center text-sm hover:text-gold">{n.label}</a>)}</nav>
        <address id="contact" className="min-w-0 space-y-1 not-italic">
          <a href={D.waLink()} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 text-gold"><MessageCircle className="h-4 w-4 shrink-0" /> Talk to us on WhatsApp</a>
          <a href="https://talentedrituinsan.com/" target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 hover:text-gold"><Globe className="h-4 w-4 shrink-0" /> talentedrituinsan.com</a>
          <a href="tel:+918607022646" className="flex min-h-11 items-center gap-2 hover:text-gold"><Phone className="h-4 w-4 shrink-0" /> +91 8607022646</a>
          <a href="tel:+917428321321" className="flex min-h-11 items-center gap-2 hover:text-gold"><Phone className="h-4 w-4 shrink-0" /> +91 7428321321</a>
          <a href="mailto:TalentedRituInsan@tribs.in" className="flex min-h-11 items-center gap-2 break-all text-sm hover:text-gold"><Mail className="h-4 w-4 shrink-0" /> TalentedRituInsan@tribs.in</a>
        </address>
      </div>
      <div className="mt-8 flex flex-col justify-between gap-3 border-t border-ivory/15 pt-6 text-xs sm:flex-row">
        <p>© {new Date().getFullYear()} Talented Ritu Insan</p>
        <a href={D.waLink("Hi! Please share the Social Media Mastery privacy policy, terms and refund policy before I enroll.")} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-gold">Request privacy, terms & refund details</a>
      </div>
    </div>
  </footer>;
}

function EnrollModal({ plan, onClose }: { plan: "year" | "life"; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [p, setP] = useState(plan);
  const [error, setError] = useState("");
  const sel = D.plans[p];
  const field = "mt-1.5 w-full rounded-lg border border-input bg-card px-4 py-3 text-base text-charcoal outline-none focus:ring-2 focus:ring-ring";
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (name.trim().length < 2 || digits.length < 10 || digits.length > 15) {
      setError("Enter your name and a valid WhatsApp number (10–15 digits).");
      return;
    }
    setError("");
    const url = D.waLink(`Hi! I want to join the next batch of Social Media Mastery.\nPlan: ${sel.access} access (${sel.price})\nName: ${name.trim()}\nPhone: ${phone.trim()}`);
    window.location.assign(url);
  };
  return <CourseModal title="Join the next batch" description="Choose your access and continue with our team on WhatsApp." onClose={onClose}>
    <form onSubmit={submit}>
      <fieldset><legend className="mb-2 text-sm font-semibold text-primary">Recording access</legend><div className="grid grid-cols-2 gap-2">
        {(["year", "life"] as const).map((k) => <Button variant="course" size="course" type="button" key={k} aria-pressed={p === k} onClick={() => setP(k)} className={`rounded-lg border-2 p-3 text-left ${p === k ? "border-gold bg-gold-soft" : "border-border"}`}><span><span className="block text-xs font-bold text-muted-foreground">{D.plans[k].access}</span><span className="block text-2xl font-bold text-primary">{D.plans[k].price}</span></span></Button>)}
      </div></fieldset>
      <div className="mt-5 space-y-4">
        <label className="block text-sm font-semibold text-primary" htmlFor="enroll-name">Your name<input id="enroll-name" name="name" autoComplete="name" required minLength={2} maxLength={80} value={name} onChange={(e) => setName(e.target.value)} className={field} /></label>
        <label className="block text-sm font-semibold text-primary" htmlFor="enroll-phone">WhatsApp number<input id="enroll-phone" name="tel" autoComplete="tel" required type="tel" inputMode="tel" minLength={10} maxLength={22} title="Enter a valid phone number, including country code if outside India" value={phone} onChange={(e) => setPhone(e.target.value)} className={field} placeholder="+91" /></label>
      </div>
      {error && <p role="alert" className="mt-3 text-sm text-destructive">{error}</p>}
      <Button variant="course" size="course" type="submit" className={`${btnPrimary} mt-6 w-full px-4`}><MessageCircle className="h-5 w-5" /> Continue on WhatsApp</Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">Our team will confirm availability and payment details.</p>
    </form>
  </CourseModal>;
}
