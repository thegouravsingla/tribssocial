export const WHATSAPP_NUMBER = "918607022646";
export const waLink = (text = "Hi! I want to know more about the Social Media Mastery course.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const VIDEO_ID = "Ce-aegrPPrM";

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Course", href: "#who" },
  { label: "Journey", href: "#journey" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "10M+", label: "Followers" },
  { value: "4,00,000+", label: "Students" },
  { value: "50+", label: "Branches" },
  { value: "19+", label: "Years" },
];

export const heroBadges = ["8 Live Classes", "1 Month", "90 Min + 30 Min Q&A", "Mobile First", "Beginner Friendly"];

export const flow = ["Idea", "Create", "Edit", "Publish", "Grow"];

export const personas = ["Students", "Homemakers", "Creators", "Professionals", "Small Business Owners", "Complete Beginners"];

export const goals = [
  { label: "Build My Personal Brand", answer: "Apni pehchaan banao — niche, profile, talking videos aur ek consistent Canva look.", classes: [2, 3, 7] },
  { label: "Grow My Business", answer: "Content, social media, WhatsApp Business aur digital presence ko ek system ki tarah use karna seekho.", classes: [2, 7, 8] },
  { label: "Become a Creator", answer: "Apna idea se video tak ka complete workflow seekho.", classes: [3, 4, 5, 6] },
  { label: "Learn AI", answer: "ChatGPT se research, writing aur planning — phir everyday kaam ke liye useful AI apps.", classes: [1, 8] },
  { label: "Create Content", answer: "Idea, plan, shoot, edit, design — sab kuch phone se, har class mein practical.", classes: [3, 4, 6, 7] },
  { label: "Find Opportunities", answer: "Content, AI, design aur digital skills ko projects aur personal branding mein use karo.", classes: [1, 6, 7, 8] },
];

export const journey = [
  { step: "Idea", text: "Find what to talk about with your niche and ChatGPT." },
  { step: "Plan", text: "Write a hook, a short script and a shot list." },
  { step: "Shoot", text: "Use light, framing and audio to record on your phone." },
  { step: "Edit", text: "Cut, caption and add music in Edits by Instagram." },
  { step: "Design", text: "Make posts, thumbnails and posters in Canva." },
  { step: "Publish", text: "Post the right format on the right platform." },
  { step: "Connect", text: "Talk to your audience on WhatsApp Business." },
  { step: "Grow", text: "Repeat with a simple content system." },
];

export const platforms = [
  { name: "Instagram", tags: ["Reels", "Stories", "Profile", "Growth"], useful: "Reaching people through short videos and Stories.", learn: "Bio, highlights, Reels and Stories that get seen.", example: "Post your first Reel for your boutique." },
  { name: "Facebook", tags: ["Profile", "Page", "Content", "Community"], useful: "Connecting with your local community.", learn: "Pages, Facebook Reels and community posts.", example: "Set up a page for your shop." },
  { name: "YouTube", tags: ["Channel", "Shorts", "Studio", "Monetisation basics"], useful: "Long-lasting video and Shorts discovery.", learn: "Channel setup, Shorts and YouTube Studio basics.", example: "Upload your first YouTube Short." },
  { name: "Pinterest", tags: ["Visual discovery", "Ideas", "Content", "Reach"], useful: "Getting discovered through visual ideas.", learn: "Boards, pins and reaching new people.", example: "Pin your Canva designs to a niche board." },
] as const;

export const tools = [
  { name: "ChatGPT", tagline: "Think Smarter", text: "Your AI helper for ideas, captions and plans.", items: ["Research", "Ideas", "Writing", "Planning", "Learning"] },
  { name: "Canva", tagline: "Design Better", text: "Beautiful designs, right on your phone.", items: ["Posts", "Stories", "Thumbnails", "Posters", "Branding"] },
  { name: "Edits by Instagram", tagline: "Create Better Videos", text: "Free video editing for Reels and Shorts.", items: ["Trim", "Captions", "Audio", "B-roll", "Transitions"] },
];

export const repurpose = ["Instagram Reel", "YouTube Short", "Facebook Reel", "Pinterest Content", "WhatsApp Status"];

export const classes = [
  { n: 1, title: "Introduction + ChatGPT", topics: ["Course journey", "Creator mindset", "What can you create?", "ChatGPT basics", "Research", "Ideas", "Writing", "Planning"], output: "Your first practical AI workflow" },
  { n: 2, title: "What Should I Create?", topics: ["Find your niche", "Find your audience", "Content pillars", "Personal vs business content", "Profile optimisation", "Content research", "ChatGPT research"], output: "Your niche + content direction" },
  { n: 3, title: "Pre-Production + Production", topics: ["Idea", "Script", "Hook", "Shooting", "Lighting", "Framing", "Audio", "B-roll"], output: "Your first recorded video" },
  { n: 4, title: "Edits by Instagram: Basics", topics: ["Import", "Trim", "Cut", "Text", "Audio", "Captions", "Transitions", "Export"], output: "Your first edited Reel" },
  { n: 5, title: "Edits by Instagram: Intermediate", topics: ["B-roll", "Better pacing", "Overlays", "Audio balance", "Effects", "Storytelling", "Retention"], output: "A polished short-form video" },
  { n: 6, title: "Advanced Content Creation", topics: ["Strong hooks", "First 3 seconds", "Retention", "Advanced editing", "Pattern interrupts", "Supporting assets", "Repurposing", "Multi-platform publishing"], output: "One idea turned into multiple content pieces" },
  { n: 7, title: "Canva + Design + Branding", topics: ["Canva mobile", "Typography", "Colours", "Layouts", "Posts", "Stories", "Thumbnails", "Posters", "Branding"], output: "Your first branded content kit" },
  { n: 8, title: "Digital Presence + Business", topics: ["WhatsApp Business", "Google Business Profile", "Website basics", "AI apps", "Digital presence", "Connecting your platforms"], output: "Your complete beginner digital presence" },
];

export const method = [
  { title: "I Show", text: "Trainer demonstrates" },
  { title: "We Do", text: "Everyone follows" },
  { title: "You Do", text: "You create" },
  { title: "You Use", text: "You apply it to your own life or business" },
];

export const buildList = [
  "Your social profiles", "Your content direction", "Your first recorded video", "Your first edited Reel",
  "Your Canva designs", "Your AI prompt library", "Your repurposed content", "Your WhatsApp Business setup", "Your digital presence",
];

export const format = [
  { big: "1 Month", small: "Duration" },
  { big: "8 Live Classes", small: "Online, live" },
  { big: "Sat + Sun", small: "Every weekend" },
  { big: "90 Min", small: "Practical class" },
  { big: "+30 Min", small: "Q&A" },
  { big: "Mobile First", small: "Phone is enough" },
];

export const plans = {
  year: { id: "year", name: "Early Bird", price: "₹2,499", access: "1 Year", cta: "JOIN EARLY BIRD", items: ["Live classes", "1-year recordings", "Practical projects", "Q&A", "Course resources", "Certificate"] },
  life: { id: "life", name: "Most Popular", price: "₹2,999", access: "Lifetime", cta: "GET LIFETIME ACCESS", items: ["Live classes", "Lifetime recordings", "Future course updates", "Practical projects", "Q&A", "Course resources", "Certificate"] },
} as const;

export const faqs = [
  ["Who is this course for?", "Everyone — students, homemakers, creators, professionals, business owners and complete beginners."],
  ["Do I need a laptop?", "No. Sab kuch phone se hi hoga."],
  ["Do I need previous experience?", "Zero experience? Bilkul okay. We start from the basics."],
  ["Can students join?", "Yes, school and college students are welcome."],
  ["Can homemakers join?", "Absolutely — for a hobby, a brand or a home business."],
  ["Can older people join?", "Yes. No age limit — we go step by step."],
  ["Can small businesses join?", "Yes. Class 8 focuses on WhatsApp Business, Google Business and your digital presence."],
  ["What language are classes in?", "Simple English with Hindi / Hinglish."],
  ["When does the batch start?", "Every first Saturday of the month."],
  ["How many classes are there?", "8 live classes over 1 month — 90 min + 30 min Q&A each."],
  ["Will I get recordings?", "Yes — 1 year with Early Bird, lifetime with the Lifetime plan."],
  ["Which apps will I use?", "Instagram, Facebook, YouTube, Pinterest, ChatGPT, Canva and Edits — all free to start."],
  ["Will I learn Instagram, Facebook, YouTube and Pinterest?", "Yes, all four."],
  ["Will I learn ChatGPT?", "Yes — Class 1, and we use it throughout."],
  ["Will I learn Canva?", "Yes — Class 7 is all about Canva and branding."],
  ["Will I learn Edits?", "Yes — two full classes on Edits by Instagram."],
  ["Will I learn WhatsApp Business?", "Yes — profile, catalogue and quick replies."],
  ["Will I get a certificate?", "Yes, a certificate of completion."],
] as const;
