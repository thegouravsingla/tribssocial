import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, WHATSAPP_NUMBER } from "./data";

export function ContactActions({ raised }: { raised: boolean }) {
  return (
    <aside aria-label="Contact our course team" className={`contact-actions fixed z-40 flex gap-2 ${raised ? "contact-actions-raised" : ""}`}>
      <Button asChild variant="course" size="course" className="group relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-whatsapp p-0 text-ivory shadow-soft transition-transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring">
        <a href={waLink("Hi! I'm interested in the Social Media Mastery course by Talented Ritu Insan. Please share the next batch date, fees and enrollment details.")} target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.2 1.6 6L0 24l6.3-1.7a12 12 0 0 0 5.7 1.5h.1C18.7 23.8 24 18.5 24 11.9c0-3.2-1.2-6.2-3.5-8.4ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 0 1-1.5-5.3C2.2 6.4 6.6 2 12 2a9.9 9.9 0 0 1 9.9 9.9c0 5.5-4.4 9.9-9.9 9.9Zm5.4-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.1 8.1 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2.1-.4 0-.5l-1-2.4c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" /></svg>
          <span className="contact-tooltip">WhatsApp enquiry</span>
        </a>
      </Button>
      <Button asChild variant="course" size="course" className="group relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary p-0 text-primary-foreground shadow-soft transition-transform hover:-translate-y-1 hover:bg-wine focus-visible:ring-2 focus-visible:ring-ring">
        <a href={`tel:+${WHATSAPP_NUMBER}`} aria-label="Call our course team at +91 8607022646">
          <Phone className="h-5 w-5" aria-hidden="true" />
          <span className="contact-tooltip">Call our team</span>
        </a>
      </Button>
    </aside>
  );
}