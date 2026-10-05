import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  BookOpen, Sparkles, MessageCircle, TrendingUp, Compass, Rocket, Check, ChevronDown,
  Menu, X, Users, Video, PlayCircle, FileText, FolderOpen, Award, Clock, Phone, Mail, Globe,
  Instagram, Facebook, Youtube, Star, ArrowRight, Wand2, Palette, Scissors, CalendarDays,
  Lightbulb,
} from "lucide-react";
import heroImg from "@/assets/hero-creator.jpg";
import learnersImg from "@/assets/learners.jpg";
import mentorImg from "@/assets/mentor.jpg";
import * as D from "@/components/landing/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Social Media + AI 101 | Talented Ritu Insan" },
      { name: "description", content: "A 1-month live, mobile-first course to learn social media, create content and use AI — all from your phone. 8 live classes, beginner friendly." },
      { property: "og:title", content: "Social Media + AI 101 — Learn. Create. Grow." },
      { property: "og:description", content: "Learn social media, create content and use AI, all from your phone. By Talented Ritu Insan." },
    ],
  }),
  component: Index,
});

/* ---------- helpers ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return <section id={id} className={`px-5 py-20 md:py-28 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>;
}

function Heading({ eyebrow, title, sub, light }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className={`text-4xl font-semibold leading-tight md:text-5xl ${light ? "text-ivory" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg ${light ? "text-ivory/80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

function Logo({ light }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-lg font-bold text-gold ring-2 ring-gold/60">TRI</span>
      <span className={`font-display text-lg font-semibold leading-tight ${light ? "text-ivory" : "text-primary"}`}>
        Talented<br className="hidden" /> Ritu Insan
      </span>
    </a>
  );
}

const btnPrimary = "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold tracking-wide text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-wine hover:shadow-lift";
const btnGold = "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-bold tracking-wide text-wine shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift";
const btnOutline = "inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 px-7 py-4 text-base font-bold tracking-wide text-primary transition hover:border-primary hover:bg-cream";
const btnOutlineLight = "inline-flex items-center justify-center gap-2 rounded-full border-2 border-ivory/40 px-7 py-4 text-base font-bold tracking-wide text-ivory transition hover:border-ivory hover:bg-ivory/10";

/* ---------- page ---------- */
function Index() {
  useReveal();
  const [enrollOpen, setEnrollOpen] = useState(false);
  const open = () => setEnrollOpen(true);

  return (
    <div className="overflow-x-hidden pb-20 md:pb-0">
      <Header onJoin={open} />
      <Hero onJoin={open} />
      <TrustBar />
      <Why />
      <WhoFor />
      <Goals />
      <Journey />
      <Curriculum />
      <Platforms />
      <Tools />
      <Repurpose />
      <Method />
      <BuildChecklist />
      <Details />
      <WhatYouGet />
      <Brand />
      <Pricing onJoin={open} />
      <Faq />
      <FinalCta onJoin={open} />
      <Footer />

      {/* sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-ivory/95 p-3 backdrop-blur md:hidden">
        <button onClick={open} className={`${btnPrimary} w-full`}>JOIN NEXT BATCH</button>
      </div>
      {/* WhatsApp float */}
      <a href={D.waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-ivory shadow-lift transition hover:scale-105 md:bottom-6">
        <MessageCircle className="h-7 w-7" />
      </a>
      {enrollOpen && <EnrollModal onClose={() => setEnrollOpen(false)} />}
    </div>
  );
}

function Header({ onJoin }: { onJoin: () => void }) {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition ${scrolled ? "bg-ivory/90 shadow-soft backdrop-blur" : "bg-ivory"}`}>
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex">
          {D.nav.map((n) => <a key={n.href} href={n.href} className="text-sm font-semibold text-charcoal/80 transition hover:text-primary">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onJoin} className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-wine md:inline-flex">JOIN NEXT BATCH</button>
          <button onClick={() => setMenu(!menu)} className="grid h-11 w-11 place-items-center rounded-full bg-cream text-primary lg:hidden" aria-label="Menu">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {menu && (
        <nav className="border-t border-border bg-ivory px-5 pb-6 lg:hidden">
          {D.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setMenu(false)} className="block border-b border-border py-4 text-lg font-semibold text-charcoal">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero({ onJoin }: { onJoin: () => void }) {
  const apps = ["Instagram", "Facebook", "YouTube", "Pinterest", "ChatGPT", "Canva", "Edits"];
  const badges = ["8 Live Classes", "1 Month", "90 Min + 30 Min Q&A", "Mobile First", "Beginner Friendly"];
  return (
    <section id="home" className="relative bg-cream px-5 pb-20 pt-10 md:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <p className="eyebrow">Talented Ritu Insan presents</p>
          <h1 className="mt-4 text-5xl font-bold leading-[1.02] text-primary sm:text-6xl md:text-7xl">
            Social Media <span className="text-gold">+</span> AI 101
          </h1>
          <p className="mt-4 font-display text-3xl italic text-wine md:text-4xl">Learn. Create. Grow.</p>
          <p className="mt-6 max-w-xl text-xl font-semibold leading-snug text-charcoal">
            Learn Social Media, Create Content and Use AI, All From Your Phone.
          </p>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            A practical 1-month live course for students, homemakers, creators, professionals, small-business owners and complete beginners.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => <span key={b} className="rounded-full border border-gold/50 bg-ivory px-4 py-2 text-sm font-semibold text-wine">{b}</span>)}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={onJoin} className={btnPrimary}>JOIN THE NEXT BATCH <ArrowRight className="h-5 w-5" /></button>
            <a href="#curriculum" className={btnOutline}>EXPLORE THE COURSE</a>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[3rem] bg-gold-soft" />
          {/* phone */}
          <div className="relative rounded-[2.6rem] border-[10px] border-charcoal bg-charcoal shadow-lift">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img src={heroImg} alt="A young Indian creator recording a Reel on her phone" width={1024} height={1280} className="aspect-[9/16] w-full object-cover" />
              <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-gradient-to-b from-charcoal/70 to-transparent p-4 text-ivory">
                <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" />
                <span className="text-xs font-bold tracking-widest">REC · 00:15</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 to-transparent p-4">
                <div className="grid grid-cols-4 gap-2">
                  {apps.map((a) => (
                    <span key={a} className="rounded-xl bg-ivory/95 px-1 py-2 text-center text-[11px] font-bold text-primary">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="animate-float absolute -left-8 top-16 rounded-2xl bg-ivory px-4 py-3 shadow-lift">
            <p className="flex items-center gap-1.5 text-sm font-bold text-primary"><Star className="h-4 w-4 fill-gold text-gold" /> First Reel done!</p>
          </div>
          <div className="animate-float absolute -right-6 bottom-32 rounded-2xl bg-primary px-4 py-3 text-ivory shadow-lift [animation-delay:1.5s]">
            <p className="text-sm font-bold">Phone se hi shuru karein</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="bg-primary px-5 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {D.stats.map((s, i) => {
          const Icon = [Users, BookOpen, Globe, Award][i]!;
          return (
            <div key={s.label} className="reveal text-center">
              <Icon className="mx-auto mb-2 h-6 w-6 text-gold" />
              <p className="font-display text-3xl font-bold text-ivory md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-ivory/75">{s.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Why() {
  const icons = [BookOpen, Video, MessageCircle, TrendingUp, Compass, Rocket];
  const [active, setActive] = useState<number | null>(null);
  return (
    <Section id="why">
      <Heading eyebrow="Why this course?" title="Your Phone Can Do More." sub="Most people already have the tools in their hands. This course teaches them how to use those tools." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {D.whyCards.map((c, i) => {
          const Icon = icons[i]!;
          const on = active === i;
          return (
            <button key={c.title} onClick={() => setActive(on ? null : i)} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
              className={`reveal rounded-3xl border bg-card p-7 text-left transition duration-300 ${on ? "scale-[1.03] border-gold shadow-lift" : "border-border shadow-soft"}`}>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cream text-primary"><Icon /></span>
              <h3 className="mt-5 text-2xl font-semibold uppercase tracking-wide text-primary">{c.title}</h3>
              <p className="mt-1 text-lg text-charcoal">{c.text}</p>
              <div className={`grid transition-all duration-300 ${on ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <p className="overflow-hidden rounded-xl bg-gold-soft text-base font-medium text-wine"><span className="block p-3">e.g. {c.example}</span></p>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}

function WhoFor() {
  return (
    <Section className="bg-cream">
      <Heading eyebrow="Who is this for?" title="Made For Everyone." />
      <img src={learnersImg} alt="Indian learners of different ages smiling at their phones" loading="lazy" width={1600} height={912} className="reveal mb-10 aspect-[16/8] w-full rounded-3xl object-cover shadow-soft" />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {D.personas.map((p) => (
          <div key={p} className="reveal rounded-2xl bg-ivory px-4 py-5 text-center text-base font-semibold text-primary shadow-soft transition hover:-translate-y-1">{p}</div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
        {["No age limit.", "No previous experience required.", "No laptop required."].map((t) => (
          <p key={t} className="flex items-center gap-2 text-lg font-bold text-wine"><Check className="h-5 w-5 text-gold" />{t}</p>
        ))}
      </div>
    </Section>
  );
}

function Goals() {
  const [sel, setSel] = useState(1);
  return (
    <Section>
      <Heading eyebrow="Tap to explore" title="What Do You Want To Use Social Media For?" />
      <div className="flex flex-wrap justify-center gap-3">
        {D.goals.map((g, i) => (
          <button key={g.label} onClick={() => setSel(i)}
            className={`rounded-full border-2 px-5 py-3 text-base font-semibold transition ${sel === i ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-card text-charcoal hover:border-primary/40"}`}>
            {g.label}
          </button>
        ))}
      </div>
      <div key={sel} className="mx-auto mt-8 max-w-3xl animate-in fade-in slide-in-from-bottom-2 rounded-3xl border border-gold/40 bg-cream p-7 text-center duration-500 md:p-10">
        <Sparkles className="mx-auto mb-3 h-6 w-6 text-gold" />
        <p className="text-xl leading-relaxed text-charcoal">{D.goals[sel]!.answer}</p>
      </div>
    </Section>
  );
}

function Journey() {
  const [sel, setSel] = useState(0);
  return (
    <Section id="journey" className="bg-wine">
      <Heading eyebrow="The course journey" title="From Idea to Digital Presence." light />
      <div className="-mx-5 overflow-x-auto px-5 pb-4">
        <div className="flex min-w-max items-center gap-2 md:justify-center">
          {D.journey.map((j, i) => (
            <div key={j.step} className="flex items-center gap-2">
              <button onClick={() => setSel(i)}
                className={`flex flex-col items-center rounded-2xl px-4 py-3 transition ${sel === i ? "bg-gold text-wine shadow-lift" : "bg-ivory/10 text-ivory hover:bg-ivory/20"}`}>
                <span className="text-xs font-bold opacity-70">0{i + 1}</span>
                <span className="text-base font-bold uppercase tracking-wider">{j.step}</span>
              </button>
              {i < D.journey.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-gold/70" />}
            </div>
          ))}
        </div>
      </div>
      <p key={sel} className="mx-auto mt-8 max-w-2xl animate-in fade-in text-center text-xl text-ivory duration-500">
        <span className="font-display text-2xl font-semibold text-gold">{D.journey[sel]!.step}: </span>{D.journey[sel]!.text}
      </p>
    </Section>
  );
}

function Curriculum() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <Section id="curriculum">
      <Heading eyebrow="8 class curriculum" title="8 Live Classes. One Complete Journey." sub="Step by step seekhiye — every class ends with something real." />
      <div className="mx-auto max-w-3xl space-y-3">
        {D.classes.map((c, i) => {
          const on = openIdx === i;
          return (
            <div key={c.n} className={`reveal overflow-hidden rounded-3xl border bg-card transition ${on ? "border-gold shadow-lift" : "border-border shadow-soft"}`}>
              <button onClick={() => setOpenIdx(on ? null : i)} className="flex w-full items-center gap-4 p-5 text-left md:p-6">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-xl font-bold ${on ? "bg-primary text-gold" : "bg-cream text-primary"}`}>{c.n}</span>
                <span className="flex-1">
                  <span className="block text-xs font-bold tracking-widest text-gold">CLASS {c.n}</span>
                  <span className="block font-display text-xl font-semibold text-primary md:text-2xl">{c.title}</span>
                </span>
                <ChevronDown className={`h-6 w-6 shrink-0 text-primary transition ${on ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="px-5 pb-6 md:px-6">
                    <div className="flex flex-wrap gap-2">
                      {c.topics.map((t) => <span key={t} className="rounded-full bg-cream px-3 py-1.5 text-sm font-medium text-charcoal">{t}</span>)}
                    </div>
                    <p className="mt-5 rounded-2xl bg-primary p-4 text-base text-ivory">
                      <span className="font-bold text-gold">Output: </span>{c.output}
                    </p>
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

function Platforms() {
  const icons = [Facebook, Instagram, Youtube, Lightbulb];
  const [sel, setSel] = useState<number | null>(null);
  return (
    <Section className="bg-cream">
      <Heading eyebrow="Platforms" title="The Platforms You'll Learn" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {D.platforms.map((p, i) => {
          const Icon = icons[i]!;
          const on = sel === i;
          return (
            <button key={p.name} onClick={() => setSel(on ? null : i)}
              className={`reveal rounded-3xl bg-ivory p-6 text-left transition duration-300 ${on ? "scale-[1.03] shadow-lift ring-2 ring-gold" : "shadow-soft hover:-translate-y-1"}`}>
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-2xl font-semibold uppercase tracking-wide text-primary">{p.name}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => <span key={t} className="rounded-full bg-gold-soft px-3 py-1 text-sm font-semibold text-wine">{t}</span>)}
              </div>
              {on ? (
                <ul className="mt-4 animate-in fade-in space-y-2 duration-300">
                  {p.examples.map((e) => <li key={e} className="flex gap-2 text-base text-charcoal"><Check className="mt-1 h-4 w-4 shrink-0 text-gold" />{e}</li>)}
                </ul>
              ) : <p className="mt-4 text-sm font-semibold text-muted-foreground">Tap for examples →</p>}
            </button>
          );
        })}
      </div>
    </Section>
  );
}

function Tools() {
  const icons = [Wand2, Palette, Scissors];
  const [sel, setSel] = useState<number | null>(null);
  return (
    <Section id="tools">
      <Heading eyebrow="Tools" title="Three Powerful Tools" />
      <div className="grid gap-5 lg:grid-cols-3">
        {D.tools.map((t, i) => {
          const Icon = icons[i]!;
          const on = sel === i;
          return (
            <div key={t.name} onMouseEnter={() => setSel(i)} onMouseLeave={() => setSel(null)} onClick={() => setSel(on ? null : i)}
              className={`reveal cursor-pointer rounded-3xl p-8 transition duration-300 ${on ? "bg-primary text-ivory shadow-lift" : "bg-card shadow-soft"} border border-border`}>
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${on ? "bg-gold text-wine" : "bg-cream text-primary"}`}><Icon className="h-7 w-7" /></span>
              <h3 className={`mt-5 text-2xl font-semibold uppercase ${on ? "text-ivory" : "text-primary"}`}>{t.name}</h3>
              <p className="font-display text-xl italic text-gold">{t.tagline}</p>
              {!on ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.items.map((x) => <span key={x} className="rounded-full bg-cream px-3 py-1 text-sm font-medium text-charcoal">{x}</span>)}
                </div>
              ) : (
                <dl className="mt-4 animate-in fade-in space-y-3 duration-300">
                  {[["What it does", t.does], ["What you'll learn", t.learn], ["One real-life use", t.use]].map(([k, v]) => (
                    <div key={k}><dt className="text-xs font-bold uppercase tracking-widest text-gold">{k}</dt><dd className="text-base text-ivory/90">{v}</dd></div>
                  ))}
                </dl>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Repurpose() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && setVis(true), { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const step = (d: number) => `transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}` + ` [transition-delay:${d}ms]`;
  return (
    <Section className="bg-cream">
      <Heading eyebrow="Content repurposing" title="Create Once. Use It Everywhere." />
      <div ref={ref} className="flex flex-col items-center gap-4">
        <div className={`${step(0)} rounded-full bg-gold px-8 py-4 font-display text-2xl font-bold text-wine shadow-soft`}>ONE IDEA</div>
        <ChevronDown className={`${step(150)} h-7 w-7 text-gold`} />
        <div className={`${step(300)} rounded-full bg-primary px-8 py-4 font-display text-2xl font-bold text-ivory shadow-soft`}>ONE VIDEO</div>
        <ChevronDown className={`${step(450)} h-7 w-7 text-gold`} />
        <div className="grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-5">
          {D.repurpose.map((r, i) => (
            <div key={r} style={{ transitionDelay: `${600 + i * 120}ms` }}
              className={`rounded-2xl bg-ivory p-4 text-center text-base font-semibold text-primary shadow-soft transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}>
              {r}
            </div>
          ))}
        </div>
        <p className="mt-6 font-display text-2xl italic text-wine">Learn how to create smarter, not harder.</p>
      </div>
    </Section>
  );
}

function Method() {
  return (
    <Section className="bg-primary">
      <Heading eyebrow="Learn by doing" title="You Won't Just Watch. You'll Create." sub="Sirf dekhna nahi. Karke seekhna hai." light />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {D.method.map((m, i) => (
          <div key={m.title} className="reveal group relative overflow-hidden rounded-3xl bg-ivory p-8 transition duration-300 hover:-translate-y-2 hover:shadow-lift">
            <span className="absolute -right-2 -top-6 font-display text-[8rem] font-bold leading-none text-gold/15 transition group-hover:text-gold/30">{i + 1}</span>
            <p className="relative eyebrow">Step {i + 1}</p>
            <h3 className="relative mt-3 text-3xl font-bold uppercase text-primary">{m.title}</h3>
            <p className="relative mt-2 text-lg text-charcoal">{m.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BuildChecklist() {
  const [done, setDone] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setDone((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });
  return (
    <Section>
      <Heading eyebrow="What you will build" title="Every class gives you something real to take home." sub={`Tap to tick — ${done.size}/${D.buildList.length} ready`} />
      <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
        {D.buildList.map((b, i) => {
          const on = done.has(i);
          return (
            <button key={b} onClick={() => toggle(i)}
              className={`flex items-center gap-4 rounded-2xl border-2 p-4 text-left text-lg font-semibold transition ${on ? "border-gold bg-gold-soft text-wine" : "border-border bg-card text-charcoal hover:border-gold/50"}`}>
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${on ? "bg-primary text-gold" : "bg-cream text-transparent"}`}><Check className="h-5 w-5" /></span>
              {b}
            </button>
          );
        })}
      </div>
    </Section>
  );
}

function Details() {
  return (
    <Section className="bg-cream">
      <Heading eyebrow="Course details" title="Simple. Live. Practical." />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {D.details.map((d) => (
          <div key={d.big} className="reveal rounded-3xl bg-ivory p-6 text-center shadow-soft">
            <p className="font-display text-2xl font-bold text-primary md:text-3xl">{d.big}</p>
            <p className="mt-1 text-base text-muted-foreground">{d.small}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-lg font-semibold text-wine"><CalendarDays className="mr-2 inline h-5 w-5 text-gold" />Online live · New batch every first Saturday of the month</p>
    </Section>
  );
}

function WhatYouGet() {
  const icons = [PlayCircle, Video, FolderOpen, FileText, BookOpen, Users, Clock, Award];
  return (
    <Section>
      <Heading eyebrow="What you get" title="Everything You Need." />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {D.getList.map((g, i) => {
          const Icon = icons[i]!;
          return (
            <div key={g} className="reveal rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition hover:-translate-y-1">
              <Icon className="mx-auto h-8 w-8 text-gold" />
              <p className="mt-3 text-base font-semibold text-primary">{g}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Brand() {
  return (
    <Section className="bg-cream">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <img src={mentorImg} alt="A mentor teaching a warm live class of learners with phones" loading="lazy" width={1280} height={1024} className="reveal aspect-[5/4] w-full rounded-3xl object-cover shadow-lift" />
        <div className="reveal">
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-primary md:text-5xl">Learn With Talented Ritu Insan.</h2>
          <p className="mt-3 font-display text-2xl italic text-gold">Learn • Create • Grow</p>
          <blockquote className="mt-6 border-l-4 border-gold pl-5 text-xl leading-relaxed text-charcoal">
            "We believe learning should not be limited by age, background or location."
          </blockquote>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {D.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-ivory p-4 shadow-soft">
                <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Pricing({ onJoin }: { onJoin: () => void }) {
  return (
    <Section id="pricing">
      <Heading eyebrow="Pricing" title="Start Your Digital Journey." />
      <div className="reveal mx-auto max-w-lg overflow-hidden rounded-[2rem] border-2 border-gold bg-card shadow-lift">
        <div className="bg-primary p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-ivory/70">Course Fee <span className="ml-1 text-lg text-ivory/60 line-through">₹2,999</span></p>
          <p className="mt-3 text-sm font-bold uppercase tracking-widest text-gold">Current Batch Price</p>
          <p className="font-display text-7xl font-bold text-ivory">₹1,999</p>
        </div>
        <div className="p-8">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {D.priceIncludes.map((p) => <li key={p} className="flex items-center gap-2 text-base font-medium text-charcoal"><Check className="h-5 w-5 shrink-0 text-gold" />{p}</li>)}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <button onClick={onJoin} className={btnPrimary}>JOIN THE NEXT BATCH</button>
            <a href={D.waLink()} target="_blank" rel="noreferrer" className={btnOutline}><MessageCircle className="h-5 w-5" /> CHAT WITH US ON WHATSAPP</a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <Section id="faq" className="bg-cream">
      <Heading eyebrow="FAQs" title="Questions? Bilkul poochiye." />
      <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-3xl bg-ivory shadow-soft">
        {D.faqs.map(([q, a], i) => {
          const on = openIdx === i;
          return (
            <div key={q}>
              <button onClick={() => setOpenIdx(on ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-primary">
                {q}<ChevronDown className={`h-5 w-5 shrink-0 transition ${on ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden px-6 text-base text-charcoal/85"><span className="block pb-5">{a}</span></p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function FinalCta({ onJoin }: { onJoin: () => void }) {
  return (
    <section className="bg-primary px-5 py-24 text-center md:py-32">
      <div className="reveal mx-auto max-w-3xl">
        <h2 className="text-5xl font-bold leading-tight text-ivory md:text-6xl">Your Phone Is Already In Your Hands.</h2>
        <p className="mt-5 font-display text-2xl italic text-gold md:text-3xl">Now learn what it can really do.</p>
        <div className="mt-8 space-y-1 text-lg text-ivory/80">
          <p>Start small.</p><p>Learn step by step.</p><p>Create with confidence.</p><p>Grow with the right skills.</p>
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <button onClick={onJoin} className={btnGold}>JOIN THE NEXT BATCH</button>
          <a href={D.waLink()} target="_blank" rel="noreferrer" className={btnOutlineLight}>CHAT WITH US</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-wine px-5 pb-10 pt-16 text-ivory/80">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-3 font-display text-lg italic text-gold">Learn • Create • Grow</p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube, Lightbulb].map((I, i) => (
              <a key={i} href="https://talentedrituinsan.com/" target="_blank" rel="noreferrer" aria-label={["Instagram", "Facebook", "YouTube", "Pinterest"][i]} className="grid h-10 w-10 place-items-center rounded-full bg-ivory/10 transition hover:bg-gold hover:text-wine"><I className="h-5 w-5" /></a>
            ))}
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-base">
          {[["Home", "#home"], ["Course", "#why"], ["Curriculum", "#curriculum"], ["FAQs", "#faq"], ["Contact", "#contact"]].map(([l, h]) => (
            <a key={l} href={h} className="hover:text-gold">{l}</a>
          ))}
        </nav>
        <div id="contact" className="space-y-2 text-base">
          <a href="https://talentedrituinsan.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold"><Globe className="h-4 w-4 text-gold" />talentedrituinsan.com</a>
          <a href="tel:+918607022646" className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4 text-gold" />+91 8607022646</a>
          <a href="tel:+917428321321" className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4 text-gold" />+91 7428321321</a>
          <a href="mailto:TalentedRituInsan@tribs.in" className="flex items-center gap-2 break-all hover:text-gold"><Mail className="h-4 w-4 shrink-0 text-gold" />TalentedRituInsan@tribs.in</a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-ivory/15 pt-6 text-sm md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Talented Ritu Insan. All rights reserved.</p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms & Conditions", "Refund Policy"].map((l) => <a key={l} href="#" className="hover:text-gold">{l}</a>)}
        </div>
      </div>
    </footer>
  );
}

function EnrollModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState(D.goals[0]!.label);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I want to join the next batch of Social Media + AI 101.\nName: ${name}\nPhone: ${phone}\nGoal: ${goal}`;
    window.open(D.waLink(msg), "_blank");
    onClose();
  };
  const field = "w-full rounded-2xl border-2 border-input bg-ivory px-4 py-3.5 text-lg text-charcoal outline-none transition focus:border-gold";
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-charcoal/60 p-0 backdrop-blur-sm animate-in fade-in sm:items-center sm:p-5" onClick={onClose}>
      <form onClick={(e) => e.stopPropagation()} onSubmit={submit}
        className="w-full max-w-md animate-in slide-in-from-bottom-6 rounded-t-[2rem] bg-ivory p-7 shadow-lift duration-300 sm:rounded-[2rem]">
        <div className="flex items-start justify-between">
          <div>
            <p className="eyebrow">Next batch · ₹1,999</p>
            <h3 className="mt-2 text-3xl font-semibold text-primary">Join the Next Batch</h3>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-full bg-cream text-primary"><X /></button>
        </div>
        <p className="mt-2 text-base text-muted-foreground">Share your details — our team will connect with you on WhatsApp.</p>
        <div className="mt-6 space-y-3">
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} />
          <input required type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="WhatsApp number" className={field} />
          <select value={goal} onChange={(e) => setGoal(e.target.value)} className={field}>
            {D.goals.map((g) => <option key={g.label}>{g.label}</option>)}
          </select>
        </div>
        <button type="submit" className={`${btnPrimary} mt-6 w-full`}><MessageCircle className="h-5 w-5" /> CONTINUE ON WHATSAPP</button>
      </form>
    </div>
  );
}
