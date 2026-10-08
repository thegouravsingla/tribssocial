import { useEffect, useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Clock, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { countdownParts, dailyOfferSeconds } from "./offer-time";
import { waLink } from "./data";

export function CourseModal({ title, description, onClose, children, wide = false }: {
  title: string; description: string; onClose: () => void; children: ReactNode; wide?: boolean;
}) {
  return <Dialog.Root open onOpenChange={(open) => { if (!open) onClose(); }}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[60] bg-charcoal/75 backdrop-blur-sm animate-in fade-in" />
      <Dialog.Content className={`course-modal fixed z-[61] bg-ivory p-5 shadow-lift outline-none sm:p-7 ${wide ? "course-modal-wide" : ""}`}>
        <div className="mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
          <div className="min-w-0"><Dialog.Title className="text-2xl font-bold text-primary sm:text-3xl">{title}</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-muted-foreground">{description}</Dialog.Description></div>
          <Dialog.Close asChild><Button variant="secondary" size="icon" className="h-11 w-11 shrink-0" aria-label="Close dialog"><X /></Button></Dialog.Close>
        </div>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}

export function DailyOffer({ onJoin }: { onJoin: () => void }) {
  const [seconds, setSeconds] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setSeconds(dailyOfferSeconds(Date.now()));
    update();
    const interval = window.setInterval(update, 1000);
    document.addEventListener("visibilitychange", update);
    return () => { clearInterval(interval); document.removeEventListener("visibilitychange", update); };
  }, []);
  const parts = seconds === null ? ["--", "--", "--"] : countdownParts(seconds);
  return <section className="border-b border-ivory/15 pb-9 mb-9" aria-labelledby="daily-offer-title">
    <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
      <div><p className="mb-2 flex items-center gap-2 text-sm font-bold text-gold"><Clock className="h-4 w-4" /> Daily Early Bird window</p>
        <h2 id="daily-offer-title" className="text-3xl font-bold text-ivory">Start for ₹2,499</h2>
        <p className="mt-2 text-sm text-ivory/75">8 live classes · 1-year recording access</p></div>
      <div><div className="flex items-start gap-2" role="timer" aria-label="Time until daily reset">
        {parts.map((part, i) => <div key={i} className="w-20 text-center"><span className="block rounded-lg border border-ivory/20 bg-ivory/10 py-3 font-sans text-3xl font-bold tabular-nums text-ivory">{part}</span><span className="mt-2 block text-xs text-ivory/70">{["Hours", "Minutes", "Seconds"][i]}</span></div>)}
      </div><p className="mt-3 text-xs text-ivory/65">Resets daily at midnight IST. Offer repeats daily.</p></div>
      <div className="flex flex-col gap-3 lg:items-end">
        <Button onClick={onJoin} className="h-auto min-h-12 w-full bg-gold px-6 py-3 font-bold text-wine hover:bg-gold/90 lg:w-auto">Join Early Bird <ArrowRight /></Button>
        <a href={waLink("Hi! How many seats are available for the next Social Media Mastery batch?")} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-ivory underline underline-offset-4"><MessageCircle className="h-4 w-4" /> Check available seats</a>
      </div>
    </div>
  </section>;
}