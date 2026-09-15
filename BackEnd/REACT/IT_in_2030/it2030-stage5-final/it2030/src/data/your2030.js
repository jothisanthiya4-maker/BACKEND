// Content and scoring configuration for Page 5 — "Your 2030".
//
// Framing rules, consistent with Pages 1–4:
// - Every score shown on this page (Skill Strength, Adaptability, AI
//   Readiness, Human Skills) is computed live from the user's own
//   selections in React state. Nothing here is a hardcoded result, and
//   none of it is presented as a validated psychometric assessment —
//   it is a self-reflection tool, described as such in the UI.
// - The 2030 job-market framing (which skills count as "AI-adjacent",
//   which count as durable human skills) is drawn from the same research
//   basis cited on Pages 2 and 3 (World Economic Forum Future of Jobs,
//   Stanford HAI AI Index, McKinsey Future of Work) rather than invented
//   for this page.

import {
  FiBookOpen,
  FiCode,
  FiPenTool,
  FiBriefcase,
  FiSearch,
  FiMoreHorizontal,
  FiTrendingUp,
  FiShuffle,
  FiFeather,
} from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi2'

/* ── SECTION 1 · Identity ─────────────────────────────────────────── */

export const roleOptions = [
  { id: 'student', label: 'Student', icon: FiBookOpen },
  { id: 'developer', label: 'Developer', icon: FiCode },
  { id: 'designer', label: 'Designer', icon: FiPenTool },
  { id: 'business', label: 'Businessperson', icon: FiBriefcase },
  { id: 'jobseeker', label: 'Job Seeker', icon: FiSearch },
  { id: 'other', label: 'Other', icon: FiMoreHorizontal },
]

/* ── SECTION 2 · Skills ───────────────────────────────────────────── */
// category drives the three coverage meters in the profile:
// "technical" and "ai" roll into AI Readiness / Skill Strength,
// "human" rolls into Human Skills / Adaptability.

export const skillOptions = [
  { id: 'programming', label: 'Programming', category: 'technical' },
  { id: 'html', label: 'HTML', category: 'technical' },
  { id: 'css', label: 'CSS', category: 'technical' },
  { id: 'javascript', label: 'JavaScript', category: 'technical' },
  { id: 'react', label: 'React', category: 'technical' },
  { id: 'sql', label: 'SQL', category: 'technical' },
  { id: 'python', label: 'Python', category: 'technical' },
  { id: 'ai', label: 'AI', category: 'ai' },
  { id: 'cloud', label: 'Cloud', category: 'ai' },
  { id: 'cybersecurity', label: 'Cybersecurity', category: 'ai' },
  { id: 'communication', label: 'Communication', category: 'human' },
  { id: 'leadership', label: 'Leadership', category: 'human' },
  { id: 'design', label: 'Design', category: 'human' },
  { id: 'business', label: 'Business', category: 'human' },
  { id: 'creativity', label: 'Creativity', category: 'human' },
]

export const skillCategoryMeta = {
  technical: { label: 'Technical', color: '#4BB8FA' },
  ai: { label: 'AI & Infrastructure', color: '#22D3EE' },
  human: { label: 'Human & Business', color: '#A855F7' },
}

/* ── SECTION 3 · Future path ──────────────────────────────────────── */

export const pathOptions = [
  {
    id: 'ai-professional',
    label: 'AI-Powered Professional',
    futureRole: 'AI-Augmented Specialist',
    icon: HiOutlineSparkles,
    description:
      'Works inside an existing technical field but treats AI tools as core infrastructure — using them to move faster while owning the judgment calls the tools cannot make.',
  },
  {
    id: 'tech-specialist',
    label: 'Technology Specialist',
    futureRole: 'Deep Technology Specialist',
    icon: FiCode,
    description:
      'Goes deep on a specific technical domain — systems, security, data, or infrastructure — betting on depth and precision rather than breadth.',
  },
  {
    id: 'tech-business',
    label: 'Technology + Business',
    futureRole: 'Tech-Business Hybrid Lead',
    icon: FiTrendingUp,
    description:
      'Sits between engineering and decision-making — translating technical constraints for business stakeholders and business goals for technical teams.',
  },
  {
    id: 'entrepreneur',
    label: 'Entrepreneur',
    futureRole: 'Independent Builder',
    icon: FiBriefcase,
    description:
      'Builds something of their own — a product, service, or studio — trading the stability of employment for direct ownership of the outcome.',
  },
  {
    id: 'creative',
    label: 'Creative Professional',
    futureRole: 'AI-Native Creative Professional',
    icon: FiFeather,
    description:
      'Works in design, content, or craft, using AI tools to accelerate production while keeping taste, direction, and originality human-led.',
  },
  {
    id: 'multi-path',
    label: 'Multiple Career Path',
    futureRole: 'Portfolio Professional',
    icon: FiShuffle,
    description:
      'Keeps more than one path warm at once — a primary role alongside a second skill set — deliberately trading a single label for flexibility.',
  },
]

/* ── SECTION 5 · Dynamic roadmap ──────────────────────────────────── */
// Five milestones per path, 2026 → 2030. Wording changes per path so the
// roadmap actually reflects the choice made in Section 3, not a generic
// template with the title swapped in.

export const roadmapByPath = {
  'ai-professional': [
    { year: '2026', title: 'Build Foundations', detail: 'Solidify core technical fundamentals so AI tools amplify skill rather than replace understanding.' },
    { year: '2027', title: 'Adopt AI Workflows', detail: 'Bring AI assistants into daily work for drafting, debugging, and research — while reviewing everything they produce.' },
    { year: '2028', title: 'Specialize With AI', detail: 'Pick a domain where AI-augmented output is in demand and become fast and reliable inside it.' },
    { year: '2029', title: 'Own the Judgment Calls', detail: 'Take on the review, architecture, and trade-off decisions that AI tools cannot make on their own.' },
    { year: '2030', title: 'Become an AI-Augmented Specialist', detail: 'Operate as a professional who is measurably faster and more capable because of AI, not dependent on it.' },
  ],
  'tech-specialist': [
    { year: '2026', title: 'Build Foundations', detail: 'Get comfortable with the fundamentals of one technical domain instead of spreading thin across many.' },
    { year: '2027', title: 'Go Deep', detail: 'Choose a specialization — security, data, cloud, or systems — and build real depth through projects, not just courses.' },
    { year: '2028', title: 'Work With AI Tooling', detail: 'Use AI to handle repetitive parts of the specialism so more time goes to the hard, high-value problems.' },
    { year: '2029', title: 'Build Track Record', detail: 'Ship work that proves the specialization — contributions, case studies, or a portfolio a hiring manager can inspect.' },
    { year: '2030', title: 'Become a Deep Technology Specialist', detail: 'Be the person a team turns to for the one area few others have gone deep on.' },
  ],
  'tech-business': [
    { year: '2026', title: 'Build Foundations', detail: 'Learn enough technical fundamentals to genuinely understand what a build actually involves.' },
    { year: '2027', title: 'Learn the Business Side', detail: 'Pick up product thinking, basic finance, and stakeholder communication alongside the technical track.' },
    { year: '2028', title: 'Work Across Both Sides', detail: 'Take on work that sits between engineering and decision-making — specs, roadmaps, trade-off calls.' },
    { year: '2029', title: 'Build Experience Translating', detail: 'Practice explaining technical constraints to non-technical stakeholders and business goals to technical teams.' },
    { year: '2030', title: 'Become a Tech-Business Hybrid Lead', detail: 'Operate as the bridge that keeps technical and business teams moving in the same direction.' },
  ],
  entrepreneur: [
    { year: '2026', title: 'Build Foundations', detail: 'Develop a real, sellable skill first — a business needs something to sell before it needs a business plan.' },
    { year: '2027', title: 'Validate an Idea', detail: 'Talk to real potential customers and test a small version of the idea before committing fully.' },
    { year: '2028', title: 'Work With AI as Leverage', detail: 'Use AI tools to do the work of a much larger team — marketing, drafting, basic support, research.' },
    { year: '2029', title: 'Build Early Traction', detail: 'Get the first paying customers or users and learn directly from what does and doesn\u2019t work.' },
    { year: '2030', title: 'Become an Independent Builder', detail: 'Run something of your own, sized to what you can sustain, with a repeatable way of finding customers.' },
  ],
  creative: [
    { year: '2026', title: 'Build Foundations', detail: 'Develop the core craft skills — design, writing, or media — that AI tools cannot substitute for taste.' },
    { year: '2027', title: 'Learn AI-Assisted Production', detail: 'Bring AI tools into the workflow for drafts, variations, and speed, while keeping creative direction human.' },
    { year: '2028', title: 'Build a Distinct Style', detail: 'Use faster production to experiment more, and let a recognizable point of view emerge from the volume.' },
    { year: '2029', title: 'Build a Portfolio and Audience', detail: 'Put finished, varied work in front of real people and clients, not just in a private folder.' },
    { year: '2030', title: 'Become an AI-Native Creative Professional', detail: 'Work faster than a pre-AI creative professional while producing work only a human direction could have shaped.' },
  ],
  'multi-path': [
    { year: '2026', title: 'Build Foundations', detail: 'Get genuinely competent in a primary skill area before adding a second one on top of it.' },
    { year: '2027', title: 'Add a Second Skill Set', detail: 'Deliberately build a second, different capability — technical plus creative, or technical plus business.' },
    { year: '2028', title: 'Work With AI Across Both', detail: 'Use AI tools to keep both paths moving without either one consuming all available time.' },
    { year: '2029', title: 'Build Experience in Both Lanes', detail: 'Take on real work or projects in each path so both are backed by evidence, not just intent.' },
    { year: '2030', title: 'Become a Portfolio Professional', detail: 'Hold more than one viable path at once, so a shift in one doesn\u2019t mean starting over.' },
  ],
}

/* ── SECTION 6 · Default future statements per path ──────────────── */

export const defaultStatements = {
  'ai-professional':
    'I will not wait for the future to decide my career. I will learn to work with AI as a tool, not a replacement, and build the judgment that tools cannot.',
  'tech-specialist':
    'I will not spread myself thin trying to know everything. I will go deep on one area of technology until I am the person others rely on for it.',
  'tech-business':
    'I will not stay only on one side of the table. I will learn enough of both technology and business to translate between them.',
  entrepreneur:
    'I will not wait for permission to build something of my own. I will start small, learn from real customers, and grow it deliberately.',
  creative:
    'I will not let AI tools replace my creative direction. I will use them to work faster, while my judgment and taste stay mine.',
  'multi-path':
    'I will not put all of my future into a single path. I will build more than one real skill, so a setback in one is not a setback in everything.',
  default:
    'I will not wait for the future to decide my career. I will build the skills required to participate in it.',
}

/* ── SECTION 8 · Community Future Wall ────────────────────────────── */

export const planCategories = ['IT', 'Business', 'Craft', 'Education', 'Freelancing', 'Creative', 'Other']

export const categoryIcons = {
  IT: FiCode,
  Business: FiBriefcase,
  Craft: FiFeather,
  Education: FiBookOpen,
  Freelancing: FiSearch,
  Creative: HiOutlineSparkles,
  Other: FiMoreHorizontal,
}

// Seeded once into localStorage on a visitor's first-ever visit to the
// Community Future Wall, so the section demonstrates real layout and
// behaviour instead of loading empty. The Aari entry deliberately mirrors
// Page 4's business plan, tying the two pages together. These are
// illustrative example entries, not collected user data or statistics.
export const seedPlans = [
  {
    id: 'seed-1',
    name: 'Jothi Santhiya',
    plan: 'If IT changes completely, I want to build my own Aari embroidery business, starting with bridal orders in my own city.',
    category: 'Craft',
    createdAt: new Date('2030-09-15T09:00:00').toISOString(),
  },
  {
    id: 'seed-2',
    name: 'Arun Prakash',
    plan: 'My backup plan is teaching — if a pure development role gets harder to find, I would move into training junior developers and creating course content.',
    category: 'Education',
    createdAt: new Date('2030-09-14T18:30:00').toISOString(),
  },
]
