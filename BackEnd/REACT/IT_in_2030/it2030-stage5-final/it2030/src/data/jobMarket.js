// Content for Page 3 — "The 2030 Job Market".
//
// Framing rules used throughout, consistent with Pages 1 and 2:
// - Automation is described as landing on tasks, not consuming whole jobs.
// - No invented statistics. Where a claim leans on published research, the
//   organisation is named (World Economic Forum, Stanford HAI, Microsoft,
//   IBM, Gartner, McKinsey) so a reader can check it, but no specific figure
//   is fabricated.
// - Scores, meters, and indexes produced by the interactive tools on this
//   page are illustrative self-reflection aids, not measured or validated
//   assessments.

import {
  FiCpu,
  FiLock,
  FiShield,
  FiCloud,
  FiDatabase,
  FiBox,
  FiTrendingUp,
  FiClipboard,
  FiCode,
  FiMonitor,
  FiPenTool,
  FiCheckSquare,
  FiServer,
  FiHeadphones,
} from 'react-icons/fi'

/* ── SECTION 1 · The future job landscape ──────────────────────────── */

export const landscapeConcepts = [
  {
    icon: FiTrendingUp,
    title: 'Emerging Roles',
    description:
      'Job titles that barely existed five years ago — AI engineer, prompt evaluator, AI governance specialist — are becoming standard postings as organisations formalise how they build and oversee AI systems.',
  },
  {
    icon: FiCpu,
    title: 'Evolving Roles',
    description:
      'Most existing IT roles are not disappearing; the mix of tasks inside them is changing, shifting time away from repetitive execution and toward direction, review, and judgment.',
  },
  {
    icon: FiBox,
    title: 'Hybrid Careers',
    description:
      'Roles that blend two disciplines — data plus business strategy, security plus AI, design plus engineering — are growing because AI-native products need people who can move across boundaries.',
  },
  {
    icon: FiCheckSquare,
    title: 'Automation-Exposed Tasks',
    description:
      'Specific tasks — not entire jobs — are the real unit of automation. A role can have several highly automatable tasks and still require a person for everything around them.',
  },
  {
    icon: FiClipboard,
    title: 'Technology + Business Careers',
    description:
      'As AI tooling becomes easier to use, the bottleneck shifts to people who understand both what the technology can do and what the business actually needs from it.',
  },
  {
    icon: FiServer,
    title: 'AI-Augmented Professionals',
    description:
      'Nearly every technology role by 2030 is expected to involve directing, reviewing, or governing AI output at some point in the week — not as a separate specialty, but as part of the job.',
  },
]

export const landscapeNote =
  'Future employment is not splitting cleanly into "AI jobs" and "non-AI jobs." A cybersecurity engineer supervises AI-driven detection; a designer reviews AI-generated interface options; a support specialist handles what an AI assistant escalates. The more useful distinction is which tasks inside a role shift toward automation and which stay anchored to human judgment.'

/* ── SECTION 2 · Expanding careers ─────────────────────────────────── */
// Roles expected to see rising demand. Each is described as what the work
// involves today, why the category is expected to grow, and where human
// judgment sits inside it — not as a guaranteed headcount forecast.

export const expandingCareers = [
  {
    id: 'ai-engineer',
    role: 'AI Engineer',
    icon: FiCpu,
    tagline: 'Builds and integrates AI models into real products.',
    whatTheyDo:
      'Selects, fine-tunes, and integrates AI models into products — designing the prompting, retrieval, and evaluation pipeline around a model rather than only training one from scratch. Day to day work spans data preparation, model evaluation, and building the surrounding application logic that makes a model reliable in production.',
    whyGrow:
      'Demand tracks how many products embed a model, which is a far larger number than the organisations training foundation models themselves. The World Economic Forum\'s Future of Jobs Report has repeatedly listed AI and machine learning specialists among the fastest-growing occupations.',
    skills: [
      'Python and applied ML tooling',
      'Prompt design and systematic evaluation',
      'Retrieval-augmented generation (RAG) architecture',
      'Model fine-tuning and deployment',
      'MLOps and monitoring in production',
    ],
    humanValue:
      'Deciding which problems are actually worth solving with a model, judging output quality in ways no single automated metric fully captures, and taking responsibility for what a shipped model does.',
    futureDirection:
      'Less time spent training models from first principles, more time evaluating, adapting, and safely deploying models built by a smaller number of large labs — a shift from model-building toward model-integration.',
  },
  {
    id: 'ai-security',
    role: 'AI Security Specialist',
    icon: FiLock,
    tagline: 'Defends AI systems against attacks aimed specifically at them.',
    whatTheyDo:
      'Focuses on threats unique to AI systems — prompt injection, data poisoning, model extraction, and jailbreak attempts — and audits whether a deployed model or agent behaves within its intended boundaries.',
    whyGrow:
      'As AI agents gain tool access and more autonomy, the attack surface shifts from familiar software bugs to what a model can be tricked into doing. Security research groups and vendors increasingly treat this as a distinct specialisation rather than a subset of general application security (industry direction, Gartner).',
    skills: [
      'Adversarial machine learning',
      'LLM red-teaming and jailbreak testing',
      'Secure architecture for agentic systems',
      'Model and data supply-chain security',
      'Traditional application security fundamentals',
    ],
    humanValue:
      'Thinking like an attacker probing a system nobody has fully mapped yet, and making judgment calls about failure modes that have no established playbook.',
    futureDirection:
      'Expected to move from a niche research topic inside a handful of AI labs to a standard function on mainstream security teams as more products ship agentic, tool-using features.',
  },
  {
    id: 'cybersecurity-engineer',
    role: 'Cybersecurity Engineer',
    icon: FiShield,
    tagline: 'Designs the defences that keep systems and data safe.',
    whatTheyDo:
      'Designs and builds the detection systems, identity architecture, and zero-trust network controls that a security operations team then runs day to day — the engineering behind the defence, not just the monitoring of it.',
    whyGrow:
      'The World Economic Forum\'s Future of Jobs Report has consistently placed security roles among the top-growing categories, driven by both rising attack volume and the expanding automation of security tooling itself, which still needs people to design and govern it.',
    skills: [
      'Zero-trust architecture',
      'Cloud security engineering',
      'Detection engineering',
      'Identity and access management',
      'Secure-by-design development practices',
    ],
    humanValue:
      'Designing for threats that have not happened yet, and owning the trade-off between security friction and usability that no automated policy can fully resolve alone.',
    futureDirection:
      'Increasingly securing non-human actors — service accounts, automated pipelines, and AI agents — alongside the human users the field has traditionally focused on.',
  },
  {
    id: 'cloud-engineer',
    role: 'Cloud Engineer',
    icon: FiCloud,
    tagline: 'Builds the infrastructure that products and AI workloads run on.',
    whatTheyDo:
      'Designs, provisions, and operates the cloud and edge infrastructure that applications and AI inference depend on, including networking, storage, scaling policy, and cost controls.',
    whyGrow:
      'Nearly every AI feature needs somewhere to run inference at scale, and cloud-native design remains the default starting point for new systems — keeping infrastructure roles central even as the tooling around them automates (Gartner cloud strategy research; Microsoft Work Trend Index).',
    skills: [
      'Infrastructure-as-code',
      'Container orchestration',
      'Multi-cloud and edge architecture',
      'Cost optimisation (FinOps)',
      'Platform engineering for internal developer tools',
    ],
    humanValue:
      'Designing for constraints unique to a specific organisation\'s scale and risk tolerance, and staying accountable during an outage when it matters most.',
    futureDirection:
      'Less manual provisioning of individual resources, more governance of AI-generated infrastructure definitions and management of inference cost and GPU capacity.',
  },
  {
    id: 'data-engineer',
    role: 'Data Engineer',
    icon: FiDatabase,
    tagline: 'Builds the pipelines that make data usable and trustworthy.',
    whatTheyDo:
      'Builds and maintains the pipelines that move, clean, and structure data so analysts, applications, and AI models can rely on it — including the quality checks that catch problems before they reach a report or a model.',
    whyGrow:
      'AI systems are only as good as the data feeding them, which raises the value of reliable, governed data pipelines alongside the growth of AI adoption itself (McKinsey Future of Work research; IBM Research).',
    skills: [
      'SQL and pipeline orchestration',
      'Distributed data systems',
      'Data quality and governance',
      'Cloud data platforms',
      'Preparing data for ML and AI training pipelines',
    ],
    humanValue:
      'Judging whether a dataset is genuinely fit for a given purpose — a call that involves context no automated data-quality check fully captures.',
    futureDirection:
      'Growing emphasis on data built specifically for AI training and retrieval systems, alongside the traditional work of feeding dashboards and business reports.',
  },
  {
    id: 'robotics-engineer',
    role: 'Robotics Engineer',
    icon: FiBox,
    tagline: 'Programs physical systems that sense, decide, and act.',
    whatTheyDo:
      'Designs and programs physical systems — from warehouse automation to industrial arms — that perceive their environment, plan actions, and execute them safely in the real world.',
    whyGrow:
      'Advances in computer vision and perception AI have made robots meaningfully better at handling unstructured environments, extending automation into logistics and manufacturing tasks that were previously too unpredictable for fixed programming (industry direction, McKinsey).',
    skills: [
      'Control systems and mechatronics',
      'Computer vision',
      'Real-time embedded systems',
      'Simulation and digital-twin testing',
      'Safety-critical software design',
    ],
    humanValue:
      'Designing for physical-world edge cases and safety failure modes that a simulation environment cannot fully anticipate on its own.',
    futureDirection:
      'Increasing collaboration with AI perception models handling sensing and adaptation, freeing engineers from manually programming every motion path.',
  },
  {
    id: 'ai-product-manager',
    role: 'AI Product Manager',
    icon: FiTrendingUp,
    tagline: 'Decides what an AI feature should do — and when it is good enough.',
    whatTheyDo:
      'Sets the bar for what "good" output looks like for an AI feature, coordinates between engineering, design, and the business, and owns the trade-off between capability, cost, latency, and risk.',
    whyGrow:
      'As more products embed AI features, someone has to own decisions that are distinctly product-shaped rather than purely technical — what the feature should refuse to do, how much it should cost per use, and how failure should be handled (Microsoft Work Trend Index; industry direction).',
    skills: [
      'Evaluation design for probabilistic features',
      'Cost and latency trade-off literacy',
      'Cross-functional communication',
      'Ethical and risk framing',
      'Working fluency in core ML concepts',
    ],
    humanValue:
      'Deciding what "good enough" means for a feature that behaves probabilistically rather than deterministically, and owning that judgment call when it goes wrong.',
    futureDirection:
      'A genuinely distinct specialisation rather than a variant of traditional product management, expected to keep formalising into its own discipline with its own hiring bar.',
  },
  {
    id: 'ai-governance',
    role: 'AI Governance Specialist',
    icon: FiClipboard,
    tagline: 'Builds and audits the policies that keep AI systems accountable.',
    whatTheyDo:
      'Builds and audits the policies governing how an organisation\'s AI systems are allowed to behave — covering compliance, risk assessment, bias auditing, and incident response when something goes wrong.',
    whyGrow:
      'Regulation such as the EU AI Act, alongside internal risk management pressure, is pushing organisations to formalise AI oversight as a named function. The World Economic Forum\'s Future of Jobs Report flags AI governance and ethics as an emerging skill category rather than a settled one.',
    skills: [
      'AI risk and compliance frameworks',
      'Bias and fairness auditing',
      'Policy writing for technical systems',
      'Cross-functional stakeholder management',
      'Familiarity with model evaluation methods',
    ],
    humanValue:
      'Weighing competing values — speed, safety, fairness, and cost — in situations that have no clean, universally correct answer.',
    futureDirection:
      'Moving from a specialist advisory function found in a few large organisations toward a standard role inside any organisation deploying AI at meaningful scale.',
  },
]

/* ── SECTION 3 · Evolving careers ──────────────────────────────────── */
// Existing IT roles, shown as a four-stage shift: current role, where
// automation/AI assistance is landing, how responsibilities evolve, and
// what new skills the shift rewards.

export const evolvingCareers = [
  {
    id: 'software-developer',
    role: 'Software Developer',
    icon: FiCode,
    current: [
      'Writes application logic largely by hand across the stack.',
      'Implements features from a written specification, function by function.',
      'Debugs issues primarily by reading code and logs directly.',
    ],
    automation: [
      'AI coding assistants draft boilerplate, refactors, and first-pass implementations from a description of intent.',
      'Agentic tools can run tests, read error output, and propose fixes with limited supervision.',
    ],
    evolving: [
      'More time spent specifying requirements precisely enough for AI tools to act on.',
      'Review shifts from reading every line to judging whether an approach is architecturally sound.',
      'Growing ownership of system design and the guardrails automation must operate inside.',
    ],
    newSkills: [
      'Precise, prompt-ready requirement writing',
      'Reviewing AI-generated code at the architecture level',
      'System design and trade-off reasoning',
      'Security-by-default habits',
    ],
  },
  {
    id: 'frontend-developer',
    role: 'Frontend Developer',
    icon: FiMonitor,
    current: [
      'Converts design files into working components by hand.',
      'Manages responsive breakpoints, state, and browser inconsistencies directly.',
      'Runs manual accessibility passes, usually late in the build.',
    ],
    automation: [
      'AI tools scaffold components, styling, and routine responsive fixes from a description or a design file.',
      'Automated checks catch a growing share of accessibility and performance issues before a human looks.',
    ],
    evolving: [
      'Focus shifts to owning the design system that constrains what AI-generated UI is allowed to look like.',
      'Growing responsibility for multi-modal interfaces — voice, adaptive layout, conversational input.',
      'Accessibility becomes an owned standard to enforce, not a late-stage checklist.',
    ],
    newSkills: [
      'Design-system architecture',
      'Accessibility auditing beyond automated linting',
      'Prompting and reviewing AI-generated UI',
      'Performance budgeting (Core Web Vitals)',
    ],
  },
  {
    id: 'uiux-designer',
    role: 'UI/UX Designer',
    icon: FiPenTool,
    current: [
      'Produces wireframes, mockups, and high-fidelity screens by hand.',
      'Runs usability tests and manually synthesises the findings.',
      'Hands finished specifications off to developers for implementation.',
    ],
    automation: [
      'AI tools generate multiple design variations and rough prototypes in minutes rather than hours.',
      'Research synthesis tools can summarise session recordings and surveys at scale.',
    ],
    evolving: [
      'Role shifts toward evaluating and curating generated options rather than producing every screen by hand.',
      'Growing focus on defining the interaction rules an adaptive or personalised interface must follow.',
      'Deeper investment in the qualitative research a generation tool cannot substitute for.',
    ],
    newSkills: [
      'Rapid evaluation of AI-generated design options',
      'Conversational and voice interaction design',
      'Research synthesis and interviewing',
      'Systems thinking across multiple interface surfaces',
    ],
  },
  {
    id: 'qa-engineer',
    role: 'QA Engineer',
    icon: FiCheckSquare,
    current: [
      'Writes and executes manual and automated test cases against fixed requirements.',
      'Reproduces and documents bugs for developers to fix.',
      'Verifies releases against a checklist of acceptance criteria.',
    ],
    automation: [
      'AI tools generate broad test coverage automatically and flag likely regressions before release.',
      'Automated pipelines run and triage large test suites with minimal manual execution.',
    ],
    evolving: [
      'Time shifts toward auditing what AI-generated coverage missed rather than writing every test by hand.',
      'Growing responsibility for release-risk judgment: what could go wrong, how badly, and for whom.',
      'New territory testing AI features where output is probabilistic rather than strictly right or wrong.',
    ],
    newSkills: [
      'Risk-based test strategy',
      'Evaluating non-deterministic AI output',
      'Exploratory and adversarial testing',
      'CI/CD quality-gate design',
    ],
  },
  {
    id: 'database-professional',
    role: 'Database Professional',
    icon: FiDatabase,
    current: [
      'Designs schemas and tunes queries for relational and NoSQL systems.',
      'Manages backups, replication, and availability manually.',
      'Diagnoses performance issues by inspecting query plans directly.',
    ],
    automation: [
      'AI-assisted query optimisation and anomaly detection increasingly handle routine tuning and monitoring.',
      'Self-healing infrastructure automates a growing share of backup and failover procedures.',
    ],
    evolving: [
      'Focus moves toward data architecture for AI workloads, including vector search and retrieval systems.',
      'Growing ownership of data governance and reliability engineering rather than manual tuning.',
    ],
    newSkills: [
      'Vector database and retrieval-system design',
      'Data governance frameworks',
      'Distributed systems reliability',
      'Data modelling for AI pipelines',
    ],
  },
  {
    id: 'system-administrator',
    role: 'System Administrator',
    icon: FiServer,
    current: [
      'Manages servers, patches, and access control largely through manual runbooks.',
      'Responds to incidents by following documented troubleshooting steps.',
      'Provisions new environments by hand or with basic scripting.',
    ],
    automation: [
      'Configuration management and self-healing infrastructure automate much of the routine maintenance work.',
      'AI-assisted monitoring flags anomalies and, increasingly, proposes remediation steps automatically.',
    ],
    evolving: [
      'Role shifts toward platform engineering: building the systems that automate operations at scale.',
      'Growing responsibility for policy-as-code and overseeing automated remediation rather than performing fixes manually.',
    ],
    newSkills: [
      'Infrastructure-as-code',
      'Policy-as-code and compliance automation',
      'Observability and monitoring tooling',
      'Hybrid and multi-cloud environment management',
    ],
  },
  {
    id: 'technical-support',
    role: 'Technical Support',
    icon: FiHeadphones,
    current: [
      'Answers tickets, chats, and calls following documented troubleshooting steps.',
      'Escalates unresolved issues to engineering and tracks recurring problems.',
      'Writes and updates knowledge-base articles as new issues surface.',
    ],
    automation: [
      'AI chat assistants resolve routine, well-documented queries without a person involved.',
      'Automated systems can draft knowledge-base updates from resolved ticket patterns.',
    ],
    evolving: [
      'Human time concentrates on ambiguous, emotional, or genuinely novel cases the AI assistant escalates.',
      'Growing responsibility for curating and correcting the knowledge base the AI answers from.',
      'Some roles move upstream into onboarding and proactive issue prevention.',
    ],
    newSkills: [
      'Advanced diagnostics for complex systems',
      'Knowledge-base curation and content design',
      'Reviewing and improving AI-support quality',
      'De-escalation and customer communication',
    ],
  },
]

/* ── SECTION 4 · Automation exposure ───────────────────────────────── */
// Organised by TASK, matching the framing used on Page 2 — automation lands
// on tasks, not whole jobs. "fit" is a qualitative judgment about task
// structure, not a measured or cited statistic.

export const automationTasks = [
  {
    task: 'Data entry',
    fit: 'High',
    note: 'Structured, repetitive, and easy to verify against a known source — among the most automatable clerical tasks across industries.',
  },
  {
    task: 'Basic reporting',
    fit: 'High',
    note: 'Recurring reports built from a known pipeline can be templated end-to-end; interpreting what the numbers mean still needs a person.',
  },
  {
    task: 'Repetitive testing',
    fit: 'High',
    note: 'Executing a known test suite against defined pass/fail criteria is exactly the kind of structured, measurable work automation handles well.',
  },
  {
    task: 'Repetitive code generation',
    fit: 'Medium',
    note: 'Boilerplate and pattern-matching code generate reliably; architecture decisions, edge cases, and integration still need human review.',
  },
  {
    task: 'Routine documentation',
    fit: 'Medium',
    note: 'First drafts of documentation come from AI easily, but accuracy checks and filling in real gaps still require domain knowledge.',
  },
  {
    task: 'Simple support requests',
    fit: 'Medium',
    note: 'Chat assistants resolve well-documented queries reliably, but escalate quickly once a request falls outside their scripted range.',
  },
  {
    task: 'Routine style and lint review',
    fit: 'High',
    note: 'Checking code against a fixed style guide is mechanical and well-suited to automated tooling that already exists today.',
  },
  {
    task: 'Requirements gathering and negotiation',
    fit: 'Low',
    note: 'Reading unstated needs and negotiating trade-offs between stakeholders requires trust and context that stays deeply human, even with tooling assisting around the edges.',
  },
]

export const automationExposureNote =
  'Automation exposure does not equal career extinction. Almost every job is a bundle of many different tasks, and automation is selective — it lands hardest on the structured, repetitive, easily-verified parts of a role while leaving the ambiguous, judgment-heavy, and accountability-carrying parts to people. A role built from several high-fit tasks changes shape as those tasks shift to machines; it does not simply disappear, because the tasks that remain are usually the ones that justified the role\'s pay and title in the first place.'

/* ── SECTION 5 · Human skills that become more valuable ───────────── */
// "value" and "level" are illustrative framings of relative emphasis, not
// measured statistics — consistent with the SkillMeter component's existing
// "illustrative" labelling used on Page 1.

export const risingHumanSkills = [
  {
    id: 'communication',
    label: 'Communication',
    level: 'High',
    value: 90,
    description:
      'Explaining a decision, a trade-off, or an AI system\'s limitations to someone non-technical is not reduced by automation — more automated output tends to mean more explaining is required, not less. The World Economic Forum\'s Future of Jobs research consistently ranks communication among the core skills employers expect to grow in importance.',
  },
  {
    id: 'leadership',
    label: 'Leadership',
    level: 'Medium',
    value: 78,
    description:
      'Coordinating people and priorities through the disruption of new tools and shifting workflows is not a task a model can take over — it depends on trust built over time.',
  },
  {
    id: 'creativity',
    label: 'Creativity',
    level: 'High',
    value: 88,
    description:
      'Generating options is getting cheaper as AI tools produce more of them faster, but recognising which option is genuinely good, original, or right for a specific moment stays a human judgment.',
  },
  {
    id: 'problem-solving',
    label: 'Problem Solving',
    level: 'High',
    value: 92,
    description:
      'Framing an ambiguous, real-world problem correctly — before any tool, AI or otherwise, is applied to it — is usually what determines whether the eventual solution actually works.',
  },
  {
    id: 'critical-thinking',
    label: 'Critical Thinking',
    level: 'High',
    value: 90,
    description:
      'As AI produces more confident-sounding first drafts, the scarce skill shifts toward noticing when a plausible answer is actually wrong.',
  },
  {
    id: 'emotional-intelligence',
    label: 'Emotional Intelligence',
    level: 'Medium',
    value: 80,
    description:
      'Reading a frustrated customer, a nervous new hire, or a tense negotiation stays well outside what current AI systems reliably do.',
  },
  {
    id: 'adaptability',
    label: 'Adaptability',
    level: 'High',
    value: 85,
    description:
      'Tools, workflows, and job responsibilities are shifting faster than any single training programme can track, which makes comfort with ongoing change a skill in its own right.',
  },
  {
    id: 'ethical-reasoning',
    label: 'Ethical Reasoning',
    level: 'Medium',
    value: 76,
    description:
      'Deciding what an automated system should and should not be allowed to do requires weighing values that a model cannot weigh on its own behalf.',
  },
]

/* ── SECTION 6 · The 2030 skill stack ──────────────────────────────── */
// Four layers, foundation to specialised, presented as a stack rather than
// a ranking — every layer matters, and most 2030-ready profiles draw from
// all four rather than maxing out just one.

export const skillStackLayers = [
  {
    id: 'foundation',
    name: 'Foundation',
    tagline: 'The base every other layer depends on.',
    color: '#4BB8FA',
    skills: [
      { name: 'Communication', note: 'Explaining ideas clearly to technical and non-technical people alike.' },
      { name: 'Problem Solving', note: 'Framing a real-world problem before reaching for a tool to solve it.' },
      { name: 'Digital Literacy', note: 'Working comfortably across everyday software, data, and connected devices.' },
    ],
  },
  {
    id: 'technical',
    name: 'Technical',
    tagline: 'Core IT capability, still essential even as tooling advances.',
    color: '#22D3EE',
    skills: [
      { name: 'Programming', note: 'Reading and writing code, even when a first draft comes from an AI tool.' },
      { name: 'Cloud', note: 'Designing and operating systems on cloud and edge infrastructure.' },
      { name: 'Data', note: 'Working with data pipelines, quality, and structure at a practical level.' },
      { name: 'Cybersecurity', note: 'Understanding threats and defences well enough to build securely by default.' },
    ],
  },
  {
    id: 'ai',
    name: 'AI',
    tagline: 'Working effectively alongside AI systems, not just using them.',
    color: '#7C3AED',
    skills: [
      { name: 'AI Literacy', note: 'Understanding what a model can and cannot reliably do.' },
      { name: 'AI Collaboration', note: 'Structuring work so a human and an AI system each do what they are best at.' },
      { name: 'Prompting', note: 'Directing AI tools precisely enough to get a usable result on the first pass.' },
      { name: 'AI Evaluation', note: 'Judging whether AI output is actually correct, safe, and fit for purpose.' },
    ],
  },
  {
    id: 'human',
    name: 'Human',
    tagline: 'The judgment and accountability layer automation does not reach.',
    color: '#A855F7',
    skills: [
      { name: 'Leadership', note: 'Guiding people and priorities through change, not just managing tasks.' },
      { name: 'Creativity', note: 'Recognising which of many generated options is actually the right one.' },
      { name: 'Ethics', note: 'Weighing competing values in decisions with no clean automated answer.' },
      { name: 'Decision Making', note: 'Owning a call and its consequences when the stakes are real.' },
    ],
  },
]

/* ── SECTION 7 · Future skill calculator ───────────────────────────── */
// Each skill carries a category (used to compute category coverage) and a
// weight (used to compute the overall readiness score). Weights are
// illustrative design choices, not empirical measurements.

export const calculatorSkills = [
  { id: 'html', label: 'HTML', category: 'technical', weight: 1 },
  { id: 'css', label: 'CSS', category: 'technical', weight: 1 },
  { id: 'javascript', label: 'JavaScript', category: 'technical', weight: 1.5 },
  { id: 'react', label: 'React', category: 'technical', weight: 1.5 },
  { id: 'sql', label: 'SQL', category: 'technical', weight: 1.5 },
  { id: 'python', label: 'Python', category: 'technical', weight: 1.5 },
  { id: 'cloud', label: 'Cloud', category: 'technical', weight: 1.5 },
  { id: 'cybersecurity', label: 'Cybersecurity', category: 'technical', weight: 1.5 },
  { id: 'ai', label: 'AI', category: 'ai', weight: 2.5 },
  { id: 'communication', label: 'Communication', category: 'human', weight: 2 },
  { id: 'leadership', label: 'Leadership', category: 'human', weight: 1.5 },
  { id: 'design', label: 'Design', category: 'human', weight: 1.5 },
  { id: 'business', label: 'Business', category: 'human', weight: 1.5 },
]

export const calculatorCategoryMeta = {
  technical: { label: 'Technical', color: '#22D3EE' },
  ai: { label: 'AI', color: '#7C3AED' },
  human: { label: 'Human', color: '#A855F7' },
}

// Simple rule-based role matching: each rule lists the skill ids that make a
// role a good suggestion. A role is suggested if the person has selected at
// least `min` of the listed skills.
export const roleMatchRules = [
  { role: 'AI Engineer', skillIds: ['ai', 'python'], min: 2 },
  { role: 'AI Security Specialist', skillIds: ['ai', 'cybersecurity'], min: 2 },
  { role: 'Cybersecurity Engineer', skillIds: ['cybersecurity', 'cloud'], min: 1 },
  { role: 'Cloud Engineer', skillIds: ['cloud', 'python'], min: 1 },
  { role: 'Data Engineer', skillIds: ['sql', 'python'], min: 2 },
  { role: 'AI Product Manager', skillIds: ['ai', 'communication', 'business'], min: 2 },
  { role: 'AI Governance Specialist', skillIds: ['ai', 'leadership', 'business'], min: 2 },
  { role: 'Frontend Developer', skillIds: ['html', 'css', 'javascript', 'react'], min: 3 },
  { role: 'UI/UX Designer', skillIds: ['design', 'html', 'css'], min: 2 },
  { role: 'Software Developer', skillIds: ['javascript', 'python', 'sql'], min: 2 },
]

/* ── SECTION 8 · Career resilience index ───────────────────────────── */

export const resilienceFactors = [
  {
    id: 'technical-adaptability',
    label: 'Technical Adaptability',
    description: 'How comfortable you are picking up new tools, languages, or platforms.',
  },
  {
    id: 'learning-ability',
    label: 'Learning Ability',
    description: 'How quickly you can absorb and apply genuinely new information.',
  },
  {
    id: 'human-skills',
    label: 'Human Skills',
    description: 'Communication, empathy, and judgment in working with other people.',
  },
  {
    id: 'ai-literacy',
    label: 'AI Literacy',
    description: 'Understanding what AI tools are good at, and where they still fail.',
  },
  {
    id: 'problem-solving',
    label: 'Problem Solving',
    description: 'Framing and working through problems that do not have a documented answer.',
  },
  {
    id: 'communication',
    label: 'Communication',
    description: 'Explaining ideas, decisions, and trade-offs clearly to other people.',
  },
]

export const resilienceLevels = [
  { value: 1, label: 'Developing' },
  { value: 2, label: 'Solid' },
  { value: 3, label: 'Strong' },
  { value: 4, label: 'Excellent' },
]

export const resilienceBands = [
  {
    max: 1.75,
    label: 'Low',
    color: '#4BB8FA',
    explanation:
      'This illustrative reading suggests real ground to build across several factors. That is a starting point, not a verdict — every factor here is learnable, and consistent, deliberate practice shifts this reading over time.',
  },
  {
    max: 2.5,
    label: 'Moderate',
    color: '#22D3EE',
    explanation:
      'A workable foundation with some clear areas to strengthen. Picking one or two of the lower-rated factors to focus on tends to move the overall picture more than spreading effort evenly.',
  },
  {
    max: 3.25,
    label: 'High',
    color: '#7C3AED',
    explanation:
      'A well-rounded profile across technical, AI, and human factors. The main risk at this level is coasting — the underlying landscape keeps shifting, so maintaining this reading takes ongoing attention.',
  },
  {
    max: 4,
    label: 'Very High',
    color: '#A855F7',
    explanation:
      'A strong, well-rounded profile across every factor measured here. This reading reflects how well-positioned the inputs suggest someone is for a shifting job market — it is illustrative self-reflection, not a guarantee of any outcome.',
  },
]
