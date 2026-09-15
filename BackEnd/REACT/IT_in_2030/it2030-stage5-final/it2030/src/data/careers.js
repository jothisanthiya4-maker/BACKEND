// Role-level data for the Section 8 "Job Transformation Simulator".
//
// Framing rule used throughout: describe how *tasks inside a role* are expected
// to shift, not whether the role survives. Nothing here predicts job loss, and
// no figures are cited — the direction of travel is drawn from widely reported
// industry research (World Economic Forum Future of Jobs, Stanford HAI AI Index,
// Microsoft Work Trend Index, GitHub developer research) rather than invented data.

export const careers = [
  {
    id: 'frontend',
    role: 'Frontend Developer',
    tagline: 'From writing every component to directing how interfaces get built.',
    shift: 'Augmented',
    shiftNote:
      'Most implementation work is expected to become AI-assisted, while interface judgment, accessibility, and performance ownership stay human.',
    today: [
      'Translating designs into React components by hand, screen by screen.',
      'Writing CSS, handling responsive breakpoints, and fixing browser inconsistencies.',
      'Wiring components to APIs and managing client-side state.',
      'Manual accessibility passes, usually late in the cycle.',
      'Debugging rendering and performance issues in the browser.',
    ],
    future: [
      'Describing intent and reviewing AI-generated component drafts rather than typing most of them.',
      'Owning the design system and the constraints that AI-generated UI must stay inside.',
      'Building interfaces that adapt per user — different density, language, or modality for different people.',
      'Treating accessibility as an automated check in the pipeline, with human review of what automation cannot judge.',
      'Integrating voice, conversational, and multimodal input alongside traditional clicks and taps.',
    ],
    newSkills: [
      'Design-system thinking and component API design',
      'Prompting and reviewing AI-generated UI code',
      'Accessibility standards beyond what linters catch',
      'Performance budgets and Core Web Vitals',
      'Interface design for conversational and voice input',
    ],
    humanEdge: [
      'Judging whether an interface actually feels right to use',
      'Understanding the user whose problem the screen exists to solve',
      'Deciding what to leave out',
      'Negotiating scope with design and product',
    ],
  },
  {
    id: 'backend',
    role: 'Backend Developer',
    tagline: 'From building services to designing systems that AI helps assemble.',
    shift: 'Augmented',
    shiftNote:
      'Boilerplate and glue code are increasingly generated; architecture, data modelling, and failure handling remain deeply human work.',
    today: [
      'Writing REST or GraphQL endpoints and the logic behind them.',
      'Designing database schemas and tuning queries.',
      'Building integrations between internal and third-party services.',
      'Writing tests, handling migrations, and maintaining deployment scripts.',
      'On-call debugging of production incidents.',
    ],
    future: [
      'Specifying service contracts and letting AI draft the implementation, then reviewing it critically.',
      'Spending more time on distributed-system design: consistency, retries, idempotency, and failure modes.',
      'Building and securing the infrastructure that AI agents call as tools.',
      'Designing data pipelines that feed models, with lineage and quality checks built in.',
      'Setting the guardrails for what automated systems are permitted to do without a human.',
    ],
    newSkills: [
      'Distributed systems and event-driven architecture',
      'API design for both humans and AI agents',
      'Data modelling for AI and analytics workloads',
      'Observability, tracing, and cost awareness',
      'Threat modelling for automated callers',
    ],
    humanEdge: [
      'Deciding what the system should guarantee in the first place',
      'Reasoning about failure no one has seen yet',
      'Owning trade-offs between speed, cost, and correctness',
      'Accountability when a system behaves badly',
    ],
  },
  {
    id: 'uiux',
    role: 'UI/UX Designer',
    tagline: 'From producing screens to defining how people and systems interact.',
    shift: 'Augmented',
    shiftNote:
      'Variation and production work speed up dramatically; research, framing, and judgment about what to build become the core of the role.',
    today: [
      'Creating wireframes, mockups, and high-fidelity screens in design tools.',
      'Building and maintaining design systems and component libraries.',
      'Running usability tests and synthesising findings.',
      'Iterating on visual details across many screen sizes.',
      'Handing off specifications to developers.',
    ],
    future: [
      'Generating and evaluating many design variations quickly instead of drawing each one.',
      'Designing conversational, voice, and spatial flows alongside traditional screens.',
      'Defining the rules an adaptive interface follows when it personalises itself.',
      'Designing how a product explains AI behaviour — confidence, sources, and the option to override.',
      'Measuring real usage and feeding that back into the system rather than shipping and moving on.',
    ],
    newSkills: [
      'Conversation and voice interaction design',
      'Designing for AI transparency and user control',
      'Systems thinking across multi-modal journeys',
      'Rapid evaluation of generated design options',
      'Inclusive design and accessibility fluency',
    ],
    humanEdge: [
      'Understanding a user problem before proposing a solution',
      'Empathy that comes from watching a real person struggle',
      'Taste — knowing which of fifty options is the right one',
      'Advocating for the user when the business pushes the other way',
    ],
  },
  {
    id: 'qa',
    role: 'QA Engineer',
    tagline: 'From executing test cases to defining what "correct" means.',
    shift: 'Transforming',
    shiftNote:
      'Test writing and execution are among the most automatable tasks in software, which pushes the role toward quality strategy and risk judgment.',
    today: [
      'Writing and maintaining manual and automated test cases.',
      'Running regression suites and triaging failures.',
      'Reproducing and documenting bugs for developers.',
      'Verifying releases against acceptance criteria.',
      'Maintaining test environments and data.',
    ],
    future: [
      'Directing AI to generate broad test coverage, then auditing the gaps it missed.',
      'Testing AI-driven features where output is probabilistic rather than fixed — evaluating quality, not just pass/fail.',
      'Owning release-risk assessment: what could go wrong, how badly, and for whom.',
      'Building quality gates into continuous delivery rather than testing at the end.',
      'Exploratory and adversarial testing that scripted automation does not reach.',
    ],
    newSkills: [
      'Evaluating non-deterministic AI output',
      'Test architecture and CI/CD quality gates',
      'Risk-based testing and prioritisation',
      'Performance, security, and accessibility testing',
      'Reading and reviewing generated test code',
    ],
    humanEdge: [
      'Imagining how a real person might break something',
      'Deciding what level of risk is acceptable to ship',
      'Asking whether the requirement itself was wrong',
      'Curiosity that goes off the documented path',
    ],
  },
  {
    id: 'data',
    role: 'Data Analyst',
    tagline: 'From producing reports to shaping the questions worth asking.',
    shift: 'Augmented',
    shiftNote:
      'Query writing, chart building, and routine reporting automate quickly; problem framing and interpretation do not.',
    today: [
      'Writing SQL to pull and join data from multiple sources.',
      'Cleaning messy data and reconciling inconsistencies.',
      'Building dashboards and recurring reports.',
      'Running statistical analysis to answer stakeholder questions.',
      'Presenting findings to non-technical teams.',
    ],
    future: [
      'Using natural-language querying for routine pulls and spending the saved time on deeper analysis.',
      'Validating AI-generated analysis before anyone acts on it — checking method, not just the number.',
      'Owning data quality, definitions, and governance so automated analysis rests on solid ground.',
      'Designing experiments and causal analysis rather than only describing what happened.',
      'Translating findings into decisions with stakeholders, including the caveats.',
    ],
    newSkills: [
      'Statistical reasoning and experiment design',
      'Data governance, lineage, and metric definitions',
      'Verifying AI-produced analysis',
      'Domain knowledge of the business being measured',
      'Communicating uncertainty honestly',
    ],
    humanEdge: [
      'Knowing which question actually matters',
      'Spotting when a number is technically right but misleading',
      'Understanding the business context behind the data',
      'Persuading people to act on an uncomfortable finding',
    ],
  },
  {
    id: 'security',
    role: 'Cybersecurity Analyst',
    tagline: 'From watching alerts to supervising automated defence.',
    shift: 'Augmented',
    shiftNote:
      'Alert triage is being automated out of necessity — attack volume already exceeds what manual review can cover. Investigation and decision-making stay human.',
    today: [
      'Triaging alerts from SIEM and endpoint tooling.',
      'Investigating suspicious activity and escalating incidents.',
      'Running vulnerability scans and tracking remediation.',
      'Maintaining detection rules and security tooling.',
      'Documenting incidents and supporting compliance audits.',
    ],
    future: [
      'Supervising AI systems that triage and contain routine events automatically.',
      'Threat hunting for the patterns automated detection is not tuned to catch.',
      'Defending against AI-generated attacks: convincing phishing, deepfake voice and video, adaptive malware.',
      'Securing identity for non-human actors — service accounts, agents, and automated pipelines.',
      'Making the containment call when an automated response would cause more damage than the attack.',
    ],
    newSkills: [
      'Zero-trust and identity-first architecture',
      'Detection engineering and behavioural analytics',
      'Adversarial testing of AI systems',
      'Cloud and container security',
      'Deepfake and social-engineering awareness',
    ],
    humanEdge: [
      'Judgment under pressure during a live incident',
      'Thinking like an attacker rather than a checklist',
      'Weighing business impact against security risk',
      'Accountability for a containment decision',
    ],
  },
  {
    id: 'cloud',
    role: 'Cloud Engineer',
    tagline: 'From provisioning infrastructure to governing it.',
    shift: 'Augmented',
    shiftNote:
      'Configuration and provisioning are increasingly generated and self-healing; architecture, cost, and reliability ownership grow in importance.',
    today: [
      'Writing infrastructure-as-code to provision environments.',
      'Building and maintaining CI/CD pipelines.',
      'Configuring networking, storage, and access policies.',
      'Monitoring uptime and responding to infrastructure incidents.',
      'Managing cloud spend and capacity.',
    ],
    future: [
      'Reviewing AI-generated infrastructure definitions against security and cost policy.',
      'Designing platforms that span cloud, edge, and on-device compute as one system.',
      'Running infrastructure for AI workloads, including inference cost and GPU capacity planning.',
      'Encoding compliance and guardrails as policy that automation enforces continuously.',
      'Reliability engineering: error budgets, failure testing, and graceful degradation.',
    ],
    newSkills: [
      'Platform engineering and internal developer platforms',
      'Edge and distributed deployment patterns',
      'FinOps and workload cost modelling',
      'Policy-as-code and compliance automation',
      'Site reliability practice',
    ],
    humanEdge: [
      'Designing for constraints a template does not know about',
      'Deciding what "acceptable downtime" means here',
      'Balancing cost, speed, and resilience',
      'Calm coordination during an outage',
    ],
  },
  {
    id: 'support',
    role: 'Technical Support',
    tagline: 'From answering tickets to handling what automation escalates.',
    shift: 'Transforming',
    shiftNote:
      'Routine, repetitive queries are the most automatable part of the role — which concentrates human time on complex, sensitive, and ambiguous cases.',
    today: [
      'Responding to tickets, chats, and calls about product issues.',
      'Following documented troubleshooting steps.',
      'Resetting access, reproducing issues, and escalating to engineering.',
      'Writing and updating knowledge-base articles.',
      'Tracking recurring problems and reporting them upstream.',
    ],
    future: [
      'Handling the cases AI assistants escalate — ambiguous, emotional, or genuinely novel.',
      'Curating and correcting the knowledge base that automated support answers from.',
      'Monitoring automated support quality and catching confident but wrong answers.',
      'Acting as the diagnostic bridge between customers and engineering for complex faults.',
      'Moving upstream into onboarding, technical account support, and proactive issue prevention.',
    ],
    newSkills: [
      'Diagnostics for cloud and distributed systems',
      'Knowledge management and content design',
      'Reviewing and improving AI support responses',
      'Scripting and basic automation',
      'Customer-facing technical communication',
    ],
    humanEdge: [
      'De-escalating a frustrated customer',
      'Hearing the real problem behind the reported one',
      'Patience with someone who is not technical',
      'Judgment on when to bend the process',
    ],
  },
]

export const shiftMeta = {
  Augmented: {
    color: '#22D3EE',
    description: 'AI absorbs parts of the work; a person still owns the outcome.',
  },
  Transforming: {
    color: '#A855F7',
    description: 'A large share of routine tasks automates, shifting the role upward.',
  },
}
