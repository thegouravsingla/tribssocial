export const WHATSAPP_NUMBER = "918607022646";
export const waLink = (text = "Hi! I want to know more about the Social Media + AI 101 course.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Why This Course", href: "#why" },
  { label: "What You'll Learn", href: "#curriculum" },
  { label: "Tools", href: "#tools" },
  { label: "Course Journey", href: "#journey" },
  { label: "FAQs", href: "#faq" },
];

export const stats = [
  { value: "10M+", label: "Followers" },
  { value: "4,00,000+", label: "Students" },
  { value: "50+", label: "Branches" },
  { value: "19+", label: "Years of Learning Experience" },
];

export const whyCards = [
  { title: "Learn", text: "Learn digital skills.", example: "Understand how Reels, Stories and profiles actually work." },
  { title: "Create", text: "Create content from your phone.", example: "Shoot and edit a Reel without any laptop." },
  { title: "Connect", text: "Communicate and build an audience.", example: "Reply to customers smartly on WhatsApp Business." },
  { title: "Grow", text: "Grow your personal brand or business.", example: "Turn your shop or skill into a page people follow." },
  { title: "Opportunities", text: "Create new possibilities through digital skills.", example: "Offer content help to local businesses near you." },
  { title: "Future Ready", text: "Understand AI and today's digital world.", example: "Use ChatGPT to plan a week of content in minutes." },
];

export const personas = [
  "Student", "College Student", "Homemaker", "Small Business Owner",
  "Professional / Freelancer", "Creator", "Senior Citizen", "Complete Beginner",
];

export const goals = [
  { label: "Build My Personal Brand", answer: "Want to build your personal brand? Learn how to find your niche, set up a professional profile, plan content pillars, record confident talking videos and design a consistent look in Canva." },
  { label: "Grow My Business", answer: "Want to grow your business? Learn how to create content, optimise your social profiles, use Canva and Edits, use ChatGPT for ideas and connect customers through WhatsApp Business." },
  { label: "Become a Creator", answer: "Want to become a creator? Learn hooks, scripting, shooting, editing in Edits by Instagram and repurposing one idea into Reels, Shorts and more — step by step." },
  { label: "Learn AI", answer: "Want to learn AI? Start with ChatGPT basics for research, writing, planning and learning — then discover useful AI apps for everyday life and work." },
  { label: "Create Content", answer: "Want to create content? Go from idea to plan to shoot to edit to design — all on your phone, with practical projects in every class." },
  { label: "Find New Opportunities", answer: "Want new opportunities? Build real digital skills — content, design, editing and AI — that you can use for your own work or to help others." },
];

export const journey = [
  { step: "Idea", text: "Find what to talk about using your niche, your audience and ChatGPT." },
  { step: "Plan", text: "Write a simple script, a strong hook and a shot list before you record." },
  { step: "Shoot", text: "Use light, framing and audio on your phone to record clean video." },
  { step: "Edit", text: "Cut, add captions, music and transitions in Edits by Instagram." },
  { step: "Design", text: "Make posts, thumbnails and posters in Canva with your brand look." },
  { step: "Publish", text: "Post on the right platform with the right format and caption." },
  { step: "Connect", text: "Reply, engage and talk to people through WhatsApp Business." },
  { step: "Grow", text: "Repeat with a simple content system and keep improving." },
];

export const classes = [
  { n: 1, title: "Introduction + ChatGPT", topics: ["Course introduction", "What students can expect", "How the course works", "Creator mindset", "Examples of everyday creators", "Understanding content creation", "Complete ChatGPT basics", "Research", "Writing", "Brainstorming", "Planning", "Learning", "Everyday AI use"], output: "Your first practical ChatGPT workflows" },
  { n: 2, title: "What Should I Create?", topics: ["Social media basics", "Finding a niche", "Finding your audience", "Content pillars", "What to create", "Personal vs business content", "Professional / Creator / Business account", "Profile optimisation", "Research", "Customer problems", "Content ideas", "Using ChatGPT for research"], output: "Your niche + audience + content direction" },
  { n: 3, title: "Pre-Production + Production", topics: ["Planning content", "Ideas", "Scripts", "Hooks", "Shot planning", "Lighting", "Framing", "Camera position", "Audio", "Talking to camera", "B-roll", "Storytelling", "Recording"], output: "Your first planned and recorded video" },
  { n: 4, title: "Edits by Instagram: Basics", topics: ["Import", "Trim", "Cut", "Split", "Arrange", "Text", "Audio", "Music", "Voiceover", "Captions", "Transitions", "Speed", "Export"], output: "Your first complete edited Reel" },
  { n: 5, title: "Edits by Instagram: Intermediate", topics: ["Better pacing", "B-roll", "Overlays", "Captions", "Audio balancing", "Effects", "Transitions", "Storytelling", "Visual rhythm", "Retention"], output: "A cleaner, stronger short-form video" },
  { n: 6, title: "Advanced Content Creation", topics: ["Hooks", "First 3 seconds", "Retention", "Advanced editing", "Creative cuts", "Pattern interrupts", "Screen recordings", "Supporting assets", "Repurposing", "Reels", "Shorts", "Facebook content", "WhatsApp Status", "Content systems"], output: "One idea turned into multiple pieces of content" },
  { n: 7, title: "Canva + Design + Branding", topics: ["Canva mobile", "Design basics", "Typography", "Colours", "Layouts", "Instagram posts", "Stories", "YouTube thumbnails", "Posters", "WhatsApp creatives", "Brand colours", "Brand fonts", "Visual identity", "Reusable templates"], output: "Your first branded content kit" },
  { n: 8, title: "WhatsApp Business + Google Business + Website + AI Apps", topics: ["WhatsApp Business", "Business profile", "Catalogue", "Products/services", "Customer communication", "Quick replies", "WhatsApp Status", "Google Business Profile", "Reviews", "Simple website options", "Canva website assets", "Useful AI apps", "Connecting your digital presence"], output: "Your complete beginner digital presence" },
];

export const platforms = [
  { name: "Facebook", tags: ["Create", "Connect", "Communicate", "Grow"], examples: ["Set up a page for your shop", "Post Facebook Reels", "Talk to your local community"] },
  { name: "Instagram", tags: ["Reels", "Stories", "Profile", "Audience"], examples: ["Optimise your bio and highlights", "Post your first Reel", "Use Stories to stay connected"] },
  { name: "YouTube", tags: ["Channel", "Shorts", "Video", "Studio"], examples: ["Create your channel", "Post YouTube Shorts", "Understand YouTube Studio basics"] },
  { name: "Pinterest", tags: ["Visual discovery", "Ideas", "Content", "Reach"], examples: ["Create boards for your niche", "Pin your designs", "Get discovered by new people"] },
];

export const tools = [
  { name: "ChatGPT", tagline: "Think Smarter", items: ["Research", "Ideas", "Writing", "Planning", "Learning"], does: "An AI assistant that helps you think, write and plan.", learn: "Prompts for research, captions, scripts and content calendars.", use: "Plan 30 days of post ideas for your bakery in 5 minutes." },
  { name: "Canva", tagline: "Design Better", items: ["Posts", "Stories", "Thumbnails", "Posters", "Branding"], does: "A simple design app that works beautifully on your phone.", learn: "Layouts, fonts, colours, templates and a brand kit.", use: "Design a festive offer poster for WhatsApp Status." },
  { name: "Edits by Instagram", tagline: "Create Better Videos", items: ["Editing", "Captions", "Audio", "Transitions", "B-roll", "Short-form video"], does: "Instagram's free video editing app for Reels and Shorts.", learn: "Cutting, captions, music, voiceover, pacing and effects.", use: "Turn a 2-minute recording into a crisp 30-second Reel." },
];

export const repurpose = ["Instagram Reel", "Facebook Reel", "YouTube Short", "Pinterest Content", "WhatsApp Status"];

export const method = [
  { title: "I Show", text: "We demonstrate it live." },
  { title: "We Do", text: "You follow along." },
  { title: "You Do", text: "You create it yourself." },
  { title: "You Use", text: "You apply it to your life or business." },
];

export const buildList = [
  "Social media profile", "Content ideas", "Content plan", "First video", "Edited Reel",
  "Canva designs", "AI prompt library", "Repurposed content", "WhatsApp Business setup", "Digital presence plan",
];

export const details = [
  { big: "1 Month", small: "Course duration" },
  { big: "8 Live Classes", small: "Online, live" },
  { big: "Sat + Sun", small: "Every weekend" },
  { big: "90 Min", small: "Practical learning" },
  { big: "+ 30 Min", small: "Q&A every class" },
  { big: "1st Saturday", small: "New batch every month" },
];

export const getList = [
  "Live Classes", "Class Recordings", "Practical Projects", "Templates",
  "Course Resources", "Community Support", "30-Day Recording Access", "Certificate of Completion",
];

export const priceIncludes = [
  "8 Live Classes", "Practical Projects", "Q&A", "Resources", "Templates",
  "Community Support", "30-Day Recording Access", "Certificate",
];

export const faqs = [
  ["Who is this course for?", "Everyone — students, homemakers, creators, professionals, business owners and complete beginners."],
  ["Do I need a laptop?", "No. Sab kuch phone se hi hoga. A smartphone and internet is enough."],
  ["Do I need previous experience?", "Zero experience? Bilkul okay. We start from the basics."],
  ["Can students join?", "Yes! School and college students are very welcome."],
  ["Can homemakers join?", "Absolutely. Many homemakers use these skills for a hobby, brand or home business."],
  ["Can older people join?", "Yes. There is no age limit. We go step by step at a comfortable pace."],
  ["Can small-business owners join?", "Yes — Class 8 is especially focused on WhatsApp Business, Google Business and your digital presence."],
  ["What language are the classes in?", "Simple English with Hindi / Hinglish, so everyone can follow easily."],
  ["How many classes are there?", "8 live classes over 1 month."],
  ["How long is each class?", "90 minutes of practical learning plus 30 minutes of Q&A."],
  ["When does the batch start?", "A new batch starts on the first Saturday of every month. Chat with us on WhatsApp for the next batch."],
  ["Will I get recordings?", "Yes, you get 30-day access to class recordings."],
  ["Which apps do I need?", "Instagram, Facebook, YouTube, Pinterest, ChatGPT, Canva and Edits by Instagram — all free to start."],
  ["Will I learn Instagram?", "Yes — profile, Reels, Stories and audience."],
  ["Will I learn Facebook?", "Yes — creating, connecting and communicating on Facebook."],
  ["Will I learn YouTube?", "Yes — channel basics, Shorts and YouTube Studio."],
  ["Will I learn Pinterest?", "Yes — visual discovery, boards and reaching new people."],
  ["Will I learn ChatGPT?", "Yes — Class 1 covers complete ChatGPT basics, and we use it throughout."],
  ["Will I learn Canva?", "Yes — Class 7 is all about Canva, design and branding."],
  ["Will I learn Edits?", "Yes — two full classes on Edits by Instagram, basics and intermediate."],
  ["Will I learn WhatsApp Business?", "Yes — profile, catalogue, quick replies and customer communication."],
  ["Will I receive a certificate?", "Yes, you receive a certificate of completion."],
] as const;
