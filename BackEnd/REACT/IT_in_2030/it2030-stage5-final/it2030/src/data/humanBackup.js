// Content for Page 4 — "The Human Backup Plan".
//
// Framing rules, consistent with Pages 1–3:
// - IT is never framed as certain to disappear. Language stays in the
//   register of "what if" and "possibility," not prediction.
// - No invented income figures or guaranteed-outcome claims for the Aari
//   business plan — it is described as a realistic, buildable path, not a
//   promise.
// - Two identities coexist on purpose: the futuristic IT visual language
//   (signal/sky/cyan/violet) carries the page, while the Aari business
//   sections borrow warmer accents (amber/rose) from Tailwind's default
//   palette so the craft feels human without becoming a separate site.

import {
  FiSettings,
  FiRefreshCw,
  FiCompass,
  FiZap,
  FiStar,
  FiCode,
  FiMessageCircle,
  FiBriefcase,
  FiPenTool,
  FiLayers,
  FiHeart,
  FiScissors,
  FiGift,
  FiFeather,
  FiUsers,
  FiTarget,
  FiCamera,
  FiInstagram,
  FiDollarSign,
  FiSmartphone,
  FiGrid,
  FiTrendingUp,
  FiCheckCircle,
  FiMap,
  FiFlag,
  FiAward,
  FiAnchor,
  FiWatch,
  FiRepeat,
  FiHexagon,
  FiShuffle,
  FiGitBranch,
} from 'react-icons/fi'

/* ── SECTION 1 · The what-if scenario ──────────────────────────────── */

export const whatIfIntro =
  'None of this means IT is going away. It means the specific shape of an IT career in 2030 — which tasks, which tools, which titles — is not fixed yet, and planning as if it were is riskier than planning to adapt.'

export const whatIfPossibilities = [
  {
    icon: FiSettings,
    title: 'Tasks Being Automated',
    description:
      'Routine coding, testing, and support tasks keep shifting toward AI tools and agents — not because the job disappears, but because the daily mix of work inside it keeps changing.',
  },
  {
    icon: FiRefreshCw,
    title: 'Roles Changing Shape',
    description:
      'A job title can stay the same for years while what it actually involves changes underneath it — more review and direction, less repetitive execution.',
  },
  {
    icon: FiCompass,
    title: 'Industries Changing',
    description:
      'Hiring shifts with the economy — funding cycles, automation adoption, and which sectors are investing in technology all move independently of any one person\u2019s effort or skill.',
  },
  {
    icon: FiZap,
    title: 'Skills Becoming Outdated',
    description:
      'A framework or tool that is standard today can become a legacy skill in a few years. Depth in any single tool has a shorter shelf life than depth in how to learn the next one.',
  },
  {
    icon: FiStar,
    title: 'New Opportunities Appearing',
    description:
      'Every disruption that closes one door tends to open others — new roles, new hybrid careers, and new small businesses that older market structures did not make room for.',
  },
]

/* ── SECTION 2 · Skill transfer ────────────────────────────────────── */

export const skillTransferPaths = [
  {
    id: 'consulting',
    icon: FiCode,
    fromSkills: ['Coding', 'Problem Solving'],
    toCareer: 'Technical Consulting',
    description:
      'The habit of breaking a messy problem into steps and reasoning through trade-offs transfers directly into advising businesses on technology decisions, independent of which language or stack is fashionable that year.',
  },
  {
    id: 'training',
    icon: FiMessageCircle,
    fromSkills: ['Communication', 'Technology'],
    toCareer: 'Training & Education',
    description:
      'Anyone who has ever explained a technical concept clearly to a non-technical teammate already has the core skill that corporate trainers, technical writers, and course creators are paid for.',
  },
  {
    id: 'entrepreneurship',
    icon: FiBriefcase,
    fromSkills: ['Technology', 'Business'],
    toCareer: 'Entrepreneurship',
    description:
      'Understanding how systems, budgets, and users fit together — a natural by-product of working in IT — is most of what it takes to spot a gap in a market and build something to fill it.',
  },
  {
    id: 'creative-business',
    icon: FiPenTool,
    fromSkills: ['Design', 'Creativity'],
    toCareer: 'Creative Business',
    description:
      'An eye for layout, colour, and user experience does not stay locked inside software — it applies just as directly to branding, visual merchandising, or running a craft or design-led business.',
  },
  {
    id: 'operations',
    icon: FiLayers,
    fromSkills: ['Organization', 'Technology'],
    toCareer: 'Operations Management',
    description:
      'The discipline of documenting processes, tracking tasks, and keeping systems running smoothly is exactly what operations roles need — technical or not.',
  },
]

/* ── SECTION 3 · My alternative plan ───────────────────────────────── */

export const alternativePlanIntro = {
  eyebrow: 'MY PERSONAL ALTERNATIVE PLAN',
  headline: 'If IT is not there, I will build something of my own.',
  body: [
    'This is the personal core of the whole project: a real, thought-through backup plan rather than a hypothetical one. It is not a prediction that IT will fail — it is proof that I have already thought past a single path.',
    'My alternative is Aari work — the fine hook-needle embroidery used to embellish saree blouses, especially bridal and festive wear. Aari embroidery uses a small hooked needle (the aari or ari) to chain-stitch thread, beads, sequins, and stones onto fabric at a density and precision that is difficult to replicate by machine, which is exactly why it stays in demand for occasion wear.',
    'The craft covers a wide range: traditional temple and floral motifs alongside contemporary, minimal designs; bridal blouses with heavy stone and bead work through to simple, everyday embellishment; and fully customized neckline, sleeve, and back designs built around what a specific customer wants to wear on a specific day.',
  ],
}

export const alternativePlanCoverage = [
  { icon: FiScissors, label: 'Aari Embroidery' },
  { icon: FiGift, label: 'Saree Blouse Embellishment' },
  { icon: FiFeather, label: 'Bridal Blouse Work' },
  { icon: FiStar, label: 'Traditional Designs' },
  { icon: FiZap, label: 'Contemporary Designs' },
  { icon: FiHexagon, label: 'Bead Work' },
  { icon: FiAward, label: 'Stone Work' },
  { icon: FiGitBranch, label: 'Thread Work' },
  { icon: FiTarget, label: 'Customized Motifs' },
  { icon: FiCompass, label: 'Neckline Designs' },
  { icon: FiWatch, label: 'Sleeve Designs' },
  { icon: FiLayers, label: 'Back Designs' },
]

export const alternativePlanDisclaimer =
  'This is described as a realistic, buildable path — not a promise of income or scale. Like any small business, what it earns depends on skill, time invested, local demand, and consistency, and it grows over years rather than overnight.'

/* ── SECTION 4 · Aari business model ───────────────────────────────── */

export const aariCustomers = [
  { icon: FiHeart, label: 'Brides' },
  { icon: FiGift, label: 'Wedding Customers' },
  { icon: FiShuffle, label: 'Saree Boutiques' },
  { icon: FiScissors, label: 'Tailoring Shops' },
  { icon: FiStar, label: 'Festive Customers' },
  { icon: FiFeather, label: 'Fashion-Conscious Customers' },
]

export const aariServices = [
  {
    id: 'bridal-heavy',
    icon: FiAward,
    name: 'Heavy Bridal Aari Work',
    tagline: 'Dense stone, bead, and thread work for wedding blouses',
    detail:
      'Full-coverage bridal blouses combining stones, beads, sequins, and metallic thread in traditional or fusion motifs — the highest-skill, highest-detail end of the craft, usually planned weeks in advance.',
    needs: ['Reference photos or fabric samples', 'Blouse measurements', 'Wedding date for timeline planning'],
  },
  {
    id: 'bridal-simple',
    icon: FiStar,
    name: 'Simple Bridal Aari Work',
    tagline: 'Lighter embellishment for functions, sangeet, or reception wear',
    detail:
      'A lighter density of stone and thread work for brides who want a bridal feel without full heavy coverage — often chosen for pre-wedding functions or a second reception outfit.',
    needs: ['Occasion and outfit colour', 'Preferred motif style', 'Budget range for materials'],
  },
  {
    id: 'custom-motifs',
    icon: FiTarget,
    name: 'Customized Motifs',
    tagline: 'Personal symbols, initials, or themed designs',
    detail:
      'Motifs built around what the customer wants represented — a floral pattern that matches their saree, initials worked into a neckline, or a design theme tied to the wedding decor.',
    needs: ['A clear reference or description', 'Placement on the garment', 'Sample approval before full work begins'],
  },
  {
    id: 'necklines',
    icon: FiCompass,
    name: 'Neckline Designs',
    tagline: 'Framing embroidery around the collar and front panel',
    detail:
      'Neckline work is often the most visible part of a finished blouse, so patterns here are planned first and used to set the design language for the rest of the garment.',
    needs: ['Blouse neckline shape', 'Front vs. back emphasis preference'],
  },
  {
    id: 'sleeves',
    icon: FiWatch,
    name: 'Sleeve Designs',
    tagline: 'Matching or contrasting embellishment on the sleeves',
    detail:
      'Sleeve patterns are matched to the neckline design for a cohesive look, or deliberately contrasted for a more contemporary, asymmetric style.',
    needs: ['Sleeve length and shape', 'Match-to-neckline or contrast preference'],
  },
  {
    id: 'back-designs',
    icon: FiLayers,
    name: 'Back Designs',
    tagline: 'Statement embroidery for open or deep-back blouses',
    detail:
      'Back panels are increasingly treated as a focal point in modern blouse design, especially for reception and photography-forward occasions.',
    needs: ['Back cut and depth', 'How prominent the design should be'],
  },
  {
    id: 'stone-bead',
    icon: FiHexagon,
    name: 'Stone & Bead Embellishment',
    tagline: 'Texture and shine layered over base embroidery',
    detail:
      'Stones and beads are added over or alongside thread work to add dimension and sparkle — priced and planned separately since material cost varies with stone quality and density.',
    needs: ['Desired shine level (subtle to heavy)', 'Stone colour palette', 'Fabric that can hold the added weight'],
  },
]

export const aariOrderJourney = [
  { icon: FiMessageCircle, title: 'Understand Customer Needs', description: 'Listen to the occasion, budget, and style before suggesting anything.' },
  { icon: FiPenTool, title: 'Customization & Sample Selection', description: 'Share reference designs or a small sample stitch so the customer can approve the look first.' },
  { icon: FiCheckCircle, title: 'Confirm the Order', description: 'Agree on design, timeline, and price in writing before starting the full work.' },
  { icon: FiCamera, title: 'Show Work-in-Progress', description: 'Share photos at key stages so there are no surprises at delivery.' },
  { icon: FiGift, title: 'Deliver on Time', description: 'Set a realistic delivery date up front and communicate early if anything shifts.' },
  { icon: FiHeart, title: 'Build Repeat Customers', description: 'A well-finished piece and honest communication is what turns a one-time order into a returning customer.' },
]

/* ── SECTION 5 · Aari business roadmap ─────────────────────────────── */

export const aariRoadmap = [
  {
    phase: 1,
    title: 'Learn / Improve Technique',
    icon: FiFeather,
    summary: 'Build real skill before building a brand.',
    points: [
      'Practice core Aari stitches — chain stitch, bead attachment, stone setting — until the work is consistent.',
      'Study traditional and contemporary motifs to build a personal style, not just copied patterns.',
      'Treat early pieces as practice, not paid work, until the quality is dependable.',
    ],
  },
  {
    phase: 2,
    title: 'Create Sample Portfolio',
    icon: FiCamera,
    summary: 'Turn practice pieces into proof of skill.',
    points: [
      'Photograph finished samples in good, consistent lighting.',
      'Cover a range: one bridal-style piece, one simple piece, a few motif close-ups.',
      'Keep a private note of what technique or design each sample represents.',
    ],
  },
  {
    phase: 3,
    title: 'Build Instagram / WhatsApp Presence',
    icon: FiInstagram,
    summary: 'Make the work findable before expecting orders.',
    points: [
      'Post the portfolio consistently rather than all at once.',
      'Use a WhatsApp Business catalog for quick sharing of designs and pricing ranges.',
      'Be upfront in bios and captions about turnaround time and that slots are limited.',
    ],
  },
  {
    phase: 4,
    title: 'Take Small Custom Orders',
    icon: FiGift,
    summary: 'Start with low-risk, low-pressure orders.',
    points: [
      'Begin with simple designs for friends, family, or local customers to build real order experience.',
      'Set clear expectations on price and timeline in writing before starting.',
      'Under-promise on delivery dates while still building speed.',
    ],
  },
  {
    phase: 5,
    title: 'Build Repeat Customers',
    icon: FiRepeat,
    summary: 'Reliability turns one order into many.',
    points: [
      'Follow up after delivery to confirm the customer is happy with the fit and finish.',
      'Keep a simple record of each customer\u2019s past orders and preferences.',
      'Offer small loyalty gestures — priority booking, a discount on a second piece.',
    ],
  },
  {
    phase: 6,
    title: 'Collaborate With Boutiques / Tailors',
    icon: FiUsers,
    summary: 'Borrow an existing customer base.',
    points: [
      'Approach local boutiques and tailoring shops that do not offer embellishment in-house.',
      'Offer a trial piece to demonstrate quality before proposing an ongoing arrangement.',
      'Agree on clear pricing and turnaround terms for boutique-referred work.',
    ],
  },
  {
    phase: 7,
    title: 'Build a Recognizable Brand',
    icon: FiAward,
    summary: 'Move from "someone who does Aari work" to a name.',
    points: [
      'Settle on a consistent name, logo, and visual style across all posts and packaging.',
      'Develop a signature style or motif that customers start to associate with the brand.',
      'Start collecting and sharing customer testimonials and finished-outfit photos.',
    ],
  },
  {
    phase: 8,
    title: 'Scale Into a Small Studio / Business',
    icon: FiTrendingUp,
    summary: 'Grow deliberately, not all at once.',
    points: [
      'Consider training or hiring help for high-demand seasons like wedding months.',
      'Introduce simple systems — order forms, a price list, basic bookkeeping.',
      'Expand only as fast as quality and delivery reliability can keep up.',
    ],
  },
]

/* ── SECTION 6 · IT skills + Aari business ─────────────────────────── */

export const itAariBridges = [
  {
    icon: FiCode,
    itSkill: 'React / Web Development',
    application: 'Business Website',
    description: 'A simple portfolio site to showcase work professionally, beyond what a social feed can hold.',
  },
  {
    icon: FiTrendingUp,
    itSkill: 'Digital Marketing',
    application: 'Customer Acquisition',
    description: 'Understanding reach, targeting, and content timing turns posting into an actual acquisition channel.',
  },
  {
    icon: FiCamera,
    itSkill: 'Photography / Editing',
    application: 'Portfolio Quality',
    description: 'Well-lit, well-edited photos of embroidery work directly affect how premium the brand looks.',
  },
  {
    icon: FiInstagram,
    itSkill: 'Social Media',
    application: 'Brand Visibility',
    description: 'Consistent posting habits and platform literacy built from an IT background transfer straight into building a following.',
  },
  {
    icon: FiGrid,
    itSkill: 'Excel / Analytics',
    application: 'Order Tracking',
    description: 'Simple spreadsheets to track orders, deadlines, and material costs prevent missed deliveries as volume grows.',
  },
  {
    icon: FiLayers,
    itSkill: 'Database Knowledge',
    application: 'Customer Records',
    description: 'Structuring customer history, measurements, and preferences the way a database is structured makes repeat orders faster.',
  },
  {
    icon: FiDollarSign,
    itSkill: 'Digital Payments',
    application: 'Easier Transactions',
    description: 'Comfort with UPI, payment links, and invoicing removes friction for customers paying advances or balances.',
  },
  {
    icon: FiSmartphone,
    itSkill: 'AI Tools',
    application: 'Design Inspiration / Content Assistance',
    description: 'AI image tools can help visualize a motif before stitching it, and writing assistants can help draft captions or customer replies faster.',
  },
]

export const itAariMessage = 'Technology skills are not wasted when the career changes.'

/* ── SECTION 7 · My 2030 resilience plan ───────────────────────────── */

export const pathIT = {
  label: 'PATH A',
  title: 'IT Career',
  steps: ['Foundation', 'Specialization', 'AI Adaptation', 'Experience', 'Career Growth'],
}

export const pathAari = {
  label: 'PATH B',
  title: 'Aari Business',
  steps: ['Skill', 'Portfolio', 'Customers', 'Brand', 'Business', 'Growth'],
}

export const resilienceCenter = {
  line1: 'ONE PERSON.',
  line2: 'TWO POSSIBLE FUTURES.',
}

/* ── SECTION 8 · The human backup principle ────────────────────────── */

export const closingStatement = [
  'I don\u2019t need to know exactly what 2030 will look like.',
  'I need to become capable of adapting to it.',
]

export const humanPrinciples = [
  { icon: FiFeather, word: 'LEARN', description: 'Keep picking up new tools and ideas as a habit, not a crisis response.' },
  { icon: FiRefreshCw, word: 'ADAPT', description: 'Treat a changed plan as information, not a failure.' },
  { icon: FiPenTool, word: 'CREATE', description: 'Make things — code, designs, embroidery — rather than only consuming.' },
  { icon: FiAnchor, word: 'BUILD', description: 'Turn skill into something real: a portfolio, a habit, a small business.' },
  { icon: FiMessageCircle, word: 'COMMUNICATE', description: 'Explain ideas clearly to people who don\u2019t share your background.' },
  { icon: FiShuffle, word: 'DIVERSIFY', description: 'Hold more than one path so no single outcome decides everything.' },
]
