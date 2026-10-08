import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Sparkles, MessageCircle, Check, ChevronDown, Menu, X, Users, PlayCircle, Phone, Mail, Globe,
  Instagram, Facebook, Youtube, Heart, Share2, Bookmark, Clapperboard, Wand2, Palette, Scissors,
  Lightbulb, Smartphone, Send, TrendingUp, GraduationCap, Home, Briefcase, Store, Sprout, Video,
  PenLine, Camera, Brush, Megaphone, Rocket, Hash, ArrowDown, MapPin, Clock, Award,
} from "lucide-react";
import heroImg from "@/assets/hero-creator.jpg";
import learnersImg from "@/assets/learners.jpg";
import mentorImg from "@/assets/mentor.jpg";
import logo from "@/assets/logo.png.asset.json";
import * as D from "@/components/landing/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Social Media Mastery | Talented Ritu Insan" },
      { name: "description", content: "Learn social media, create content and use AI from your phone. 8 live classes in 1 month, beginner friendly, from ₹2,499." },
      { property: "og:title", content: "Social Media Mastery — Learn. Create. Grow." },
      { property: "og:description", content: "A practical live course by Talented Ritu Insan: social media, content, AI, editing and design — all from your phone." },
    ],
  }),
  component: Index,
});

/* ---------- helpers ---------- */
function useReveal(dep?: unknown) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return <section id={id} className={`px-5 py-14 md:py-20 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>;
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
  useReveal();
  const join = () => setEnrollOpen("life");
  const watch = () => setVideoOpen(true);

  return (
    <div className="overflow-x-hidden pb-20 md:pb-0">
      <Header onJoin={join} />
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
      <Curriculum highlight={D.goals[goal]!.classes} goalLabel={D.goals[goal]!.label} />
      <Method />
      <Build />
      <Format />
      <Pricing onJoin={setEnrollOpen} />
      <Stories />
      <Brand />
      <FinalCta onJoin={join} onWatch={watch} />
      <Faq />
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-ivory/95 p-3 backdrop-blur md:hidden">
        <button onClick={join} className={`${btnPrimary} w-full`}>JOIN NEXT BATCH</button>
      </div>
      <a href={D.waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-ivory shadow-lift transition hover:scale-105 md:bottom-6">
        <MessageCircle className="h-7 w-7" />
      </a>
      {enrollOpen && <EnrollModal plan={enrollOpen} onClose={() => setEnrollOpen(null)} />}
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </div>
  );
}

function useModal(onClose: () => void) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);
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
    <header className={`sticky top-0 z-50 transition ${scrolled ? "bg-ivory/95 shadow-soft backdrop-blur" : "bg-ivory/70 backdrop-blur"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20">
        <a href="#home" className="shrink-0"><img src={logo.url} alt="Talented Ritu Insan" className="h-9 w-auto md:h-11" /></a>
        <nav className="hidden items-center gap-7 lg:flex">
          {D.nav.map((n) => <a key={n.href} href={n.href} className="text-sm font-semibold text-charcoal/80 transition hover:text-primary">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onJoin} className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-wine sm:inline-flex">Join Next Batch</button>
          <button onClick={() => setMenu(!menu)} aria-label="Menu" className="grid h-11 w-11 place-items-center rounded-full bg-cream text-primary lg:hidden">{menu ? <X /> : <Menu />}</button>
        </div>
      </div>
      {menu && (
        <nav className="border-t border-border bg-ivory px-5 py-4 lg:hidden">
          {D.nav.map((n) => <a key={n.href} href={n.href} onClick={() => setMenu(false)} className="block py-3 text-lg font-semibold text-primary">{n.label}</a>)}
          <button onClick={() => { setMenu(false); onJoin(); }} className={`${btnPrimary} mt-3 w-full`}>JOIN NEXT BATCH</button>
        </nav>
      )}
    </header>
  );
}

function FloatChip({ className, children }: { className: string; children: ReactNode }) {
  return <div className={`absolute flex items-center gap-1.5 rounded-2xl bg-card px-3 py-2 text-sm font-bold text-charcoal shadow-lift animate-float ${className}`}>{children}</div>;
}

function Hero({ onJoin, onWatch }: { onJoin: () => void; onWatch: () => void }) {
  const apps: [string, ReactNode][] = [
    ["Instagram", <Instagram className="h-6 w-6 text-ig" />], ["Facebook", <Facebook className="h-6 w-6 text-fb" />],
    ["YouTube", <Youtube className="h-6 w-6 text-yt" />], ["Pinterest", <Pinterest className="h-6 w-6 text-pin" />],
    ["ChatGPT", <Wand2 className="h-6 w-6 text-primary" />], ["Canva", <Palette className="h-6 w-6 text-primary" />],
    ["Edits", <Scissors className="h-6 w-6 text-primary" />], ["WhatsApp", <MessageCircle className="h-6 w-6 text-whatsapp" />],
  ];
  return (
    <section id="home" className="relative bg-cream px-5 pb-14 pt-8 md:pb-20 md:pt-14">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal text-center md:text-left">
          <p className="eyebrow">Talented Ritu Insan presents</p>
          <h1 className="mt-3 text-5xl font-bold uppercase leading-[0.95] text-primary md:text-7xl">Social Media Mastery</h1>
          <p className="mt-4 font-display text-2xl italic text-gold md:text-3xl">Learn. Create. Grow.</p>
          <p className="mx-auto mt-4 max-w-lg text-lg text-charcoal/80 md:mx-0">A practical live course to learn social media, content creation, AI, video editing, design and digital growth — <b className="text-primary">from your phone.</b></p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {D.heroBadges.map((b) => <span key={b} className="rounded-full border border-gold/40 bg-ivory px-3.5 py-1.5 text-sm font-semibold text-wine">{b}</span>)}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <button onClick={onJoin} className={btnPrimary}>JOIN THE NEXT BATCH</button>
            <button onClick={onWatch} className={btnOutline}><PlayCircle className="h-5 w-5" /> WATCH WELCOME VIDEO</button>
          </div>
          <p className="mt-4 text-sm font-semibold text-muted-foreground">From ₹2,499 · New batch every first Saturday</p>
        </div>

        <div className="reveal relative mx-auto w-64 md:w-72">
          <div className="rounded-[2.75rem] bg-charcoal p-2.5 shadow-lift">
            <div className="overflow-hidden rounded-[2.25rem] bg-ivory">
              <div className="relative h-56">
                <img src={heroImg} alt="Young Indian creator recording a Reel on her phone" className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-charcoal/70 px-2.5 py-1 text-xs font-bold text-ivory"><Clapperboard className="h-3.5 w-3.5" /> Reel</span>
              </div>
              <div className="grid grid-cols-4 gap-3 p-4">
                {apps.map(([n, i]) => (
                  <div key={n} className="flex flex-col items-center gap-1">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream">{i}</span>
                    <span className="text-[10px] font-semibold text-charcoal/70">{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <FloatChip className="-left-10 top-10"><Heart className="h-4 w-4 fill-current text-ig" /> 12.4K</FloatChip>
          <FloatChip className="-right-10 top-32 [animation-delay:1s]"><MessageCircle className="h-4 w-4 text-primary" /> "Wow! 😍"</FloatChip>
          <FloatChip className="-left-8 bottom-24 [animation-delay:2s]"><Share2 className="h-4 w-4 text-primary" /><Bookmark className="h-4 w-4 text-gold" /></FloatChip>
          <FloatChip className="-right-6 bottom-6 [animation-delay:1.5s]"><Youtube className="h-4 w-4 text-yt" /> Shorts</FloatChip>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const icons = [Users, GraduationCap, MapPin, Award];
  return (
    <div className="bg-primary px-5 py-6">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-4">
        {D.stats.map((s, i) => {
          const I = icons[i]!;
          return (
            <div key={s.label} className="flex items-center justify-center gap-3">
              <I className="h-6 w-6 shrink-0 text-gold" />
              <div><p className="font-display text-2xl font-bold text-ivory md:text-3xl">{s.value}</p><p className="text-xs font-semibold uppercase tracking-wider text-ivory/70">{s.label}</p></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WelcomeVideo({ onWatch }: { onWatch: () => void }) {
  return (
    <Section>
      <div className="reveal grid items-center gap-8 rounded-[2rem] bg-wine p-5 md:grid-cols-[1.2fr_1fr] md:p-8">
        <button onClick={onWatch} aria-label="Play welcome video" className="group relative aspect-video overflow-hidden rounded-2xl">
          <img src={`https://i.ytimg.com/vi/${D.VIDEO_ID}/hqdefault.jpg`} alt="Welcome video preview" className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
          <span className="absolute inset-0 grid place-items-center bg-charcoal/30">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gold text-wine shadow-lift transition group-hover:scale-110"><PlayCircle className="h-9 w-9" /></span>
          </span>
        </button>
        <div className="text-center md:text-left">
          <p className="eyebrow">Start here</p>
          <h2 className="mt-2 text-3xl font-semibold uppercase text-ivory md:text-4xl">Welcome to Social Media Mastery</h2>
          <p className="mt-3 text-lg text-ivory/80">Before you begin, hear directly from us about what this journey is about.</p>
          <button onClick={onWatch} className={`${btnGold} mt-6`}><PlayCircle className="h-5 w-5" /> WATCH WELCOME VIDEO</button>
        </div>
      </div>
    </Section>
  );
}

function VideoModal({ onClose }: { onClose: () => void }) {
  useModal(onClose);
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-charcoal/80 p-4 backdrop-blur-sm animate-in fade-in" onClick={onClose}>
      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close video" className="mb-3 ml-auto grid h-11 w-11 place-items-center rounded-full bg-ivory text-primary"><X /></button>
        <div className="aspect-video overflow-hidden rounded-2xl bg-charcoal shadow-lift">
          <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${D.VIDEO_ID}?rel=0`} title="Welcome to Social Media Mastery"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen />
        </div>
      </div>
    </div>
  );
}

function PhoneFlow() {
  const icons = [Lightbulb, Camera, Scissors, Send, TrendingUp];
  return (
    <Section className="bg-cream">
      <Heading title="Your phone is already a powerful tool." sub="You just need to know how to use it." />
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {D.flow.map((f, i) => {
          const I = icons[i]!;
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
              const I = icons[i]!;
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
  const g = D.goals[goal]!;
  return (
    <Section className="bg-primary">
      <Heading light eyebrow="Pick your goal" title="What do you want social media to do for you?" />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {D.goals.map((x, i) => (
          <button key={x.label} onClick={() => setGoal(i)} aria-pressed={goal === i}
            className={`rounded-2xl border-2 px-4 py-4 text-sm font-extrabold uppercase tracking-wide transition md:text-base ${goal === i ? "border-gold bg-gold text-wine shadow-lift" : "border-ivory/20 text-ivory hover:border-gold/60"}`}>
            {x.label}
          </button>
        ))}
      </div>
      <div key={goal} className="mx-auto mt-6 max-w-2xl rounded-3xl bg-ivory p-6 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
        <p className="font-display text-xl text-primary md:text-2xl">{g.answer}</p>
        <p className="mt-4 text-sm font-semibold text-muted-foreground">Focus classes for you:</p>
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {g.classes.map((n) => <a key={n} href="#curriculum" className="rounded-full bg-gold-soft px-3 py-1 text-sm font-bold text-wine">Class {n} · {D.classes[n - 1]!.title}</a>)}
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
      <div className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-8 md:px-0">
        {D.journey.map((j, i) => {
          const I = icons[i]!;
          const on = active === i;
          return (
            <button key={j.step} onClick={() => setActive(i)} aria-pressed={on}
              className={`group flex min-w-24 shrink-0 flex-col items-center gap-2 rounded-2xl p-3 transition ${on ? "bg-primary text-ivory shadow-lift" : "bg-card text-primary hover:-translate-y-1"}`}>
              <span className={`grid h-12 w-12 place-items-center rounded-full transition group-hover:rotate-6 ${on ? "bg-gold text-wine" : "bg-cream"}`}><I className="h-6 w-6" /></span>
              <span className="text-[11px] font-bold opacity-70">0{i + 1}</span>
              <span className="text-sm font-extrabold uppercase">{j.step}</span>
            </button>
          );
        })}
      </div>
      <p key={active} className="mx-auto mt-6 max-w-xl rounded-2xl bg-ivory px-6 py-4 text-center text-lg font-semibold text-charcoal shadow-soft animate-in fade-in zoom-in-95 duration-300">
        <span className="text-primary">{D.journey[active]!.step}:</span> {D.journey[active]!.text}
      </p>
    </Section>
  );
}

function Platforms() {
  const [open, setOpen] = useState<string>("Instagram");
  return (
    <Section>
      <Heading eyebrow="Platforms" title="The social media world, all in one course" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {D.platforms.map((p) => {
          const on = open === p.name;
          return (
            <button key={p.name} onClick={() => setOpen(p.name)} aria-expanded={on}
              className={`reveal rounded-3xl border-2 bg-card p-5 text-left transition ${on ? "border-gold shadow-lift" : "border-border hover:border-gold/50"}`}>
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
            </button>
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
      <div className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:px-0">
        {D.tools.map((t) => (
          <div key={t.name} className="reveal group w-72 shrink-0 snap-center rounded-3xl bg-ivory p-6 transition hover:-translate-y-1.5 hover:shadow-lift md:w-auto">
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
  return (
    <Section id="curriculum">
      <Heading eyebrow="Curriculum" title={<>8 live classes.<br />One complete journey.</>} />
      <p className="mb-6 text-center text-sm font-semibold text-muted-foreground"><Sparkles className="mr-1 inline h-4 w-4 text-gold" />Highlighted for your goal: <span className="text-primary">{goalLabel}</span></p>
      <div className="mx-auto grid max-w-4xl gap-3">
        {D.classes.map((c) => {
          const on = open === c.n;
          const hi = highlight.includes(c.n);
          return (
            <div key={c.n} className={`rounded-2xl border-2 bg-card transition ${on ? "border-primary shadow-soft" : hi ? "border-gold" : "border-border"}`}>
              <button onClick={() => setOpen(on ? null : c.n)} aria-expanded={on} className="flex w-full items-center gap-4 p-4 text-left md:p-5">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-xl font-bold ${on ? "bg-primary text-gold" : "bg-cream text-primary"}`}>{c.n}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold uppercase tracking-widest text-gold">Class {c.n}{hi && " · For you"}</span>
                  <span className="block text-lg font-bold uppercase text-primary md:text-xl">{c.title}</span>
                </span>
                <ChevronDown className={`h-6 w-6 shrink-0 text-primary transition duration-300 ${on ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
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
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {D.method.map((m, i) => (
          <button key={m.title} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}
            className={`reveal rounded-3xl p-5 text-left transition md:p-6 ${active === i ? "bg-gold text-wine shadow-lift md:-translate-y-2" : "bg-wine text-ivory"}`}>
            <span className="font-display text-4xl font-bold opacity-60">0{i + 1}</span>
            <h3 className="mt-2 text-xl font-bold uppercase md:text-2xl">{m.title}</h3>
            <p className="mt-1 text-sm font-semibold opacity-85 md:text-base">{m.text}</p>
          </button>
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
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-6">
          {D.format.map((f) => (
            <div key={f.big} className="rounded-2xl bg-cream p-4 text-center">
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
      <div onClick={() => setSel(id)}
        className={`relative cursor-pointer rounded-[2rem] p-6 transition md:p-8 ${life ? "bg-primary text-ivory md:scale-105" : "bg-card text-charcoal"} ${on ? "ring-4 ring-gold shadow-lift" : "opacity-80 ring-1 ring-border"}`}>
        {life && <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 text-sm font-extrabold uppercase tracking-wider text-wine">Best Value</span>}
        <p className={`text-sm font-extrabold uppercase tracking-widest ${life ? "text-gold" : "text-primary"}`}>{p.name}</p>
        <p className="mt-1 text-sm font-semibold opacity-75">{p.access} access</p>
        <p className="mt-3 font-display text-5xl font-bold md:text-6xl">{p.price}</p>
        <ul className="mt-5 space-y-2.5">
          {p.items.map((i) => <li key={i} className="flex items-center gap-2 font-semibold"><Check className={`h-5 w-5 shrink-0 ${life ? "text-gold" : "text-primary"}`} />{i}</li>)}
        </ul>
        <button onClick={(e) => { e.stopPropagation(); onJoin(id); }} className={`${life ? btnGold : btnPrimary} mt-7 w-full`}>{p.cta}</button>
      </div>
    );
  };
  return (
    <Section id="pricing" className="bg-cream">
      <Heading eyebrow="Pricing" title="Choose your access" sub="Course value ₹4,999" />
      <div className="mx-auto mb-8 flex w-fit rounded-full bg-card p-1.5 shadow-soft">
        {(["year", "life"] as const).map((k) => (
          <button key={k} onClick={() => setSel(k)} aria-pressed={sel === k}
            className={`rounded-full px-5 py-3 text-sm font-extrabold uppercase tracking-wide transition ${sel === k ? "bg-primary text-ivory" : "text-primary"}`}>
            {k === "year" ? "1 Year Access" : "Lifetime Access"}
          </button>
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

function Stories() {
  return (
    <div className="px-5 py-8">
      <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-dashed border-gold/60 p-5 text-center">
        <MessageCircle className="h-6 w-6 shrink-0 text-gold" />
        <p className="font-semibold text-charcoal">Student stories coming soon.</p>
      </div>
    </div>
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
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {D.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-cream p-3 text-center">
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
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
      <div className="reveal relative mx-auto max-w-2xl">
        <Smartphone className="mx-auto h-10 w-10 text-gold" />
        <h2 className="mt-4 text-3xl font-semibold uppercase text-ivory md:text-5xl">Your phone is already in your hands.</h2>
        <p className="mt-3 font-display text-2xl italic text-gold">Now learn what it can really do.</p>
        <p className="mt-3 text-ivory/80">Start small. Learn step by step. Create with confidence.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button onClick={onJoin} className={btnGold}>JOIN THE NEXT BATCH</button>
          <button onClick={onWatch} className={btnOutlineLight}><PlayCircle className="h-5 w-5" /> WATCH WELCOME VIDEO</button>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" className="bg-cream">
      <Heading eyebrow="FAQs" title="Questions? Answers." />
      <div className="mx-auto grid max-w-3xl gap-2">
        {D.faqs.map(([q, a], i) => (
          <div key={q} className="rounded-2xl bg-card">
            <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 p-4 text-left text-base font-bold text-primary md:text-lg">
              {q}<ChevronDown className={`h-5 w-5 shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="px-4 pb-4 text-charcoal/80 animate-in fade-in duration-200">{a}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  const social = [
    { l: "Instagram", i: <Instagram className="h-5 w-5" /> }, { l: "Facebook", i: <Facebook className="h-5 w-5" /> },
    { l: "YouTube", i: <Youtube className="h-5 w-5" /> }, { l: "Pinterest", i: <Pinterest className="h-5 w-5" /> },
  ];
  return (
    <footer className="bg-charcoal px-5 py-12 text-ivory/80">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        <div>
          <img src={logo.url} alt="Talented Ritu Insan" className="h-12 w-auto" />
          <p className="mt-3 font-display italic text-gold">Learn • Create • Grow</p>
          <div className="mt-4 flex gap-2">
            {social.map((s) => <a key={s.l} href="https://talentedrituinsan.com/" target="_blank" rel="noreferrer" aria-label={s.l} className="grid h-10 w-10 place-items-center rounded-full bg-ivory/10 transition hover:bg-gold hover:text-wine">{s.i}</a>)}
          </div>
        </div>
        <div className="space-y-2">
          {[["Home", "#home"], ["Course", "#who"], ["Curriculum", "#curriculum"], ["FAQs", "#faq"], ["Contact", "#contact"]].map(([l, h]) => <a key={l} href={h} className="block hover:text-gold">{l}</a>)}
        </div>
        <div id="contact" className="space-y-2 md:col-span-2">
          <a href="https://talentedrituinsan.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold"><Globe className="h-4 w-4" /> talentedrituinsan.com</a>
          <a href="tel:+918607022646" className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4" /> +91 8607022646</a>
          <a href="tel:+917428321321" className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4" /> +91 7428321321</a>
          <a href="mailto:TalentedRituInsan@tribs.in" className="flex items-center gap-2 hover:text-gold"><Mail className="h-4 w-4" /> TalentedRituInsan@tribs.in</a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-ivory/10 pt-6 text-sm">
        <p>© {new Date().getFullYear()} Talented Ritu Insan</p>
        <div className="flex gap-4"><a href="#" className="hover:text-gold">Privacy Policy</a><a href="#" className="hover:text-gold">Terms & Conditions</a><a href="#" className="hover:text-gold">Refund Policy</a></div>
      </div>
    </footer>
  );
}

function EnrollModal({ plan, onClose }: { plan: "year" | "life"; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [p, setP] = useState(plan);
  useModal(onClose);
  const sel = D.plans[p];
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(D.waLink(`Hi! I want to join the next batch of Social Media Mastery.\nPlan: ${sel.access} access (${sel.price})\nName: ${name}\nPhone: ${phone}`), "_blank");
    onClose();
  };
  const field = "w-full rounded-2xl border-2 border-input bg-ivory px-4 py-3.5 text-lg text-charcoal outline-none transition focus:border-gold";
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-charcoal/60 backdrop-blur-sm animate-in fade-in sm:items-center sm:p-5" onClick={onClose}>
      <form onClick={(e) => e.stopPropagation()} onSubmit={submit} className="w-full max-w-md animate-in slide-in-from-bottom-6 rounded-t-[2rem] bg-ivory p-7 shadow-lift duration-300 sm:rounded-[2rem]">
        <div className="flex items-start justify-between">
          <div><p className="eyebrow">Next batch</p><h3 className="mt-2 text-3xl font-semibold text-primary">Join the Next Batch</h3></div>
          <button type="button" onClick={onClose} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-full bg-cream text-primary"><X /></button>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          {(["year", "life"] as const).map((k) => (
            <button type="button" key={k} onClick={() => setP(k)} className={`rounded-2xl border-2 p-3 text-left transition ${p === k ? "border-gold bg-gold-soft" : "border-border"}`}>
              <span className="block text-xs font-bold uppercase text-muted-foreground">{D.plans[k].access}</span>
              <span className="font-display text-2xl font-bold text-primary">{D.plans[k].price}</span>
            </button>
          ))}
        </div>
        <div className="mt-4 space-y-3">
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} />
          <input required type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="WhatsApp number" className={field} />
        </div>
        <button type="submit" className={`${btnPrimary} mt-6 w-full`}><MessageCircle className="h-5 w-5" /> CONTINUE ON WHATSAPP</button>
      </form>
    </div>
  );
}
